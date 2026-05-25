#!/usr/bin/env node

/**
 * 构建脚本：VitePress 构建 + Pagefind 索引生成
 *
 * 此脚本会在构建完成后自动下载 Pagefind 二进制文件并生成搜索索引。
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'docs', '.vitepress', 'dist')
const pagefindDir = path.join(rootDir, '.pagefind')

// Node.js 路径（优先使用系统 node，否则使用 Adobe 的 node）
function getNodePath() {
  try {
    execSync('node --version', { stdio: 'pipe' })
    return 'node'
  } catch (e) {
    const adobeNode = 'C:\\Program Files\\Adobe\\Adobe Creative Cloud Experience\\libs\\node.exe'
    if (fs.existsSync(adobeNode)) {
      return `"${adobeNode}"`
    }
    throw new Error('找不到 Node.js，请确保 node 已安装')
  }
}

const nodePath = getNodePath()

// 检测操作系统和架构
function getPlatform() {
  const platform = process.platform
  const arch = process.arch

  const platformMap = {
    'win32': 'windows',
    'darwin': 'macos',
    'linux': 'linux'
  }

  const archMap = {
    'x64': 'x86_64',
    'arm64': 'aarch64',
    'ia32': 'i686'
  }

  const p = platformMap[platform] || 'linux'
  const a = archMap[arch] || 'x86_64'

  return { platform: p, arch: a }
}

// 下载文件
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https.get(url, { redirect: 'follow' }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject)
        return
      }
      if (response.statusCode !== 200) {
        reject(new Error(`下载失败: ${response.statusCode}`))
        return
      }
      response.pipe(file)
      file.on('finish', () => {
        file.close()
        resolve()
      })
    }).on('error', (err) => {
      fs.unlink(dest, () => {})
      reject(err)
    })
  })
}

// 解压 tar.gz 文件
async function extractTarGz(tarGzPath, destDir) {
  try {
    execSync(`tar -xzf "${tarGzPath}" -C "${destDir}"`, { stdio: 'inherit' })
  } catch (e) {
    throw new Error('无法解压文件，请确保系统支持 tar 命令')
  }
}

// Pagefind 固定版本（避免依赖 GitHub API）
const PAGEFIND_VERSION = 'v1.1.0'

// 获取 Pagefind 版本
async function getLatestVersion() {
  // 直接使用固定版本，避免 GitHub API 请求失败
  return PAGEFIND_VERSION
}

// 下载并安装 Pagefind
async function installPagefind() {
  const { platform, arch } = getPlatform()
  const version = await getLatestVersion()
  console.log(`Pagefind 最新版本: ${version}`)

  // 构建文件名（platform 使用 Rust target triple 格式）
  const platformTarget = platform === 'windows' ? 'pc-windows-msvc' :
                         platform === 'macos' ? 'apple-darwin' :
                         'unknown-linux-musl'
  const filename = `pagefind-${version}-${arch}-${platformTarget}.tar.gz`
  const downloadUrl = `https://github.com/CloudCannon/pagefind/releases/download/${version}/${filename}`

  console.log(`下载 Pagefind: ${downloadUrl}`)

  if (!fs.existsSync(pagefindDir)) {
    fs.mkdirSync(pagefindDir, { recursive: true })
  }

  const tarGzPath = path.join(pagefindDir, filename)

  if (!fs.existsSync(tarGzPath)) {
    await downloadFile(downloadUrl, tarGzPath)
    console.log('下载完成')
  } else {
    console.log('Pagefind 已缓存')
  }

  // 解压
  console.log('解压 Pagefind...')
  await extractTarGz(tarGzPath, pagefindDir)

  // 查找 pagefind 可执行文件
  const executableName = platform === 'windows' ? 'pagefind.exe' : 'pagefind'
  const possiblePaths = [
    path.join(pagefindDir, executableName),
    path.join(pagefindDir, 'pagefind', executableName),
  ]

  for (const exePath of possiblePaths) {
    if (fs.existsSync(exePath)) {
      // 确保可执行权限（非 Windows）
      if (platform !== 'windows') {
        fs.chmodSync(exePath, 0o755)
      }
      return exePath
    }
  }

  throw new Error('找不到 pagefind 可执行文件')
}

// 运行 Pagefind 索引
async function runPagefindIndex(pagefindExe) {
  console.log('运行 Pagefind 索引生成...')
  console.log(`源目录: ${distDir}`)

  const cmd = `"${pagefindExe}" --site "${distDir}" --glob "**/*.html"`
  console.log(`执行: ${cmd}`)

  try {
    execSync(cmd, {
      cwd: rootDir,
      stdio: 'inherit',
      env: {
        ...process.env,
        PAGEFIND_BUNDLE_DIR: path.join(distDir, 'pagefind')
      }
    })
    console.log('Pagefind 索引生成成功！')
  } catch (e) {
    console.error('Pagefind 索引生成失败:', e.message)
    throw e
  }
}

// 主函数
async function main() {
  try {
    console.log('=== 开始构建（含 Pagefind 索引）===')
    console.log(`Node.js 路径: ${nodePath}`)

    // 步骤 1: VitePress 构建
    console.log('\n[1/3] 执行 VitePress 构建...')
    const buildCmd = process.platform === 'win32'
      ? `set NODE_OPTIONS=--max-old-space-size=4096 && ${nodePath} node_modules/vitepress/bin/vitepress.js build docs`
      : `${nodePath} --max-old-space-size=4096 node_modules/.bin/vitepress build docs`
    execSync(buildCmd, { cwd: rootDir, stdio: 'inherit' })

    // 步骤 2: 下载/获取 Pagefind
    console.log('\n[2/3] 准备 Pagefind...')
    const pagefindExe = await installPagefind()
    console.log(`Pagefind 路径: ${pagefindExe}`)

    // 步骤 3: 生成索引
    console.log('\n[3/3] 生成搜索索引...')
    await runPagefindIndex(pagefindExe)

    console.log('\n=== 构建完成！===')
    console.log(`输出目录: ${distDir}`)
    console.log(`索引目录: ${path.join(distDir, 'pagefind')}`)

  } catch (error) {
    console.error('\n构建失败:', error.message)
    process.exit(1)
  }
}

main()
