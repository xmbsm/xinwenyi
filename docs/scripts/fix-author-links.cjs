const fs = require('fs')
const path = require('path')

const shiciDir = path.join(__dirname, '..', 'shici')

// 作者名到ID的映射
const authorIdMap = {
  '佚名': 'yiming',
  '谢灵运': 'xielingyun',
  '鲍照': 'baozhao',
  '庾信': 'yuxin',
  '谢朓': 'xietiao',
  '沈约': 'shenyue',
  '何逊': 'hexun',
  '王融': 'wangrong',
  '吴均': 'wujun',
  '王籍': 'wangji',
  '孔稚珪': 'kongzhigui',
  '颜延之': 'yanyanzhi',
  '李煜': 'liyu',
  '韦庄': 'weizhuang',
  '温庭筠': 'wendingjun',
  '冯延巳': 'fengyansi',
  '杨慎': 'yangshen',
  '戚继光': 'qijiguang',
  '刘基': 'liuji',
  '高启': 'gaoqi',
  '夏完淳': 'xiawanchun',
  '张溥': 'zhangpu',
  '杨士奇': 'yangshiqi',
  '曹学佺': 'caoxuequan',
  '朱彝尊': 'zhuyizun',
  '王士禛': 'wangshizhen',
  '纳兰性德': 'nalanxingde',
  '郑燮': 'zhengxie',
  '袁枚': 'yuanmei',
  '赵翼': 'zhaoyi',
  '黄景仁': 'huangjingren',
  '龚自珍': 'gongzizhen',
  '班婕妤': 'banjieyu',
  '曹植': 'caozhi',
  '曹操': 'caocao',
  '傅玄': 'fuxuan',
  '王粲': 'wangcan',
  '王僧孺': 'wangsengru',
  '吴迈远': 'wumaiyuan',
  '庾肩吾': 'yujianwu'
}

function escapeAttr(str) {
  return str.replace(/"/g, '&quot;')
}

function fixPoemFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  
  // 从 PoemAuthor 标签中提取 name 属性
  const poemAuthorMatch = content.match(/<PoemAuthor\s+name="([^"]+)"[^/]*\/>/)
  if (!poemAuthorMatch) {
    console.log(`Skipped (no PoemAuthor): ${filePath}`)
    return false
  }
  
  const authorName = poemAuthorMatch[1]
  const authorId = authorIdMap[authorName]
  
  if (!authorId) {
    console.log(`Skipped (no authorId for "${authorName}"): ${filePath}`)
    return false
  }
  
  const link = `/authors/${authorId}`
  
  // 替换 link="" 为 link="/authors/xxx"
  const oldLinkRegex = /link="[^"]*"/
  if (oldLinkRegex.test(content)) {
    content = content.replace(oldLinkRegex, `link="${escapeAttr(link)}"`)
  } else {
    // 如果没有 link 属性，在 /> 前添加
    content = content.replace(/<PoemAuthor\s+([^/]*?)\s*\/>/, `<PoemAuthor $1 link="${escapeAttr(link)}" />`)
  }
  
  fs.writeFileSync(filePath, content, 'utf-8')
  return true
}

function fixCategory(categoryId) {
  const categoryDir = path.join(shiciDir, categoryId)
  if (!fs.existsSync(categoryDir)) {
    console.log(`Category not found: ${categoryId}`)
    return 0
  }
  
  const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md')).sort((a, b) => {
    return parseInt(a) - parseInt(b)
  })
  
  let count = 0
  files.forEach(file => {
    const filePath = path.join(categoryDir, file)
    if (fixPoemFile(filePath)) {
      count++
    }
  })
  
  return count
}

console.log('=== 开始更新诗词详情页作者链接 ===\n')

const categories = ['yuefu', 'nanbeichao', 'wudai', 'mingqingshi']
let total = 0

categories.forEach(cat => {
  console.log(`更新 ${cat}...`)
  const count = fixCategory(cat)
  total += count
  console.log(`  完成 ${count} 首\n`)
})

console.log('=== 更新完成 ===')
console.log(`总计更新：${total} 首诗词详情页`)
