import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PoemNav from '../../components/PoemNav.vue'
import PoemAuthor from '../../components/PoemAuthor.vue'
import BookNav from '../../components/BookNav.vue'
import BookLayout from './BookLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: BookLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('PoemNav', PoemNav)
    app.component('PoemAuthor', PoemAuthor)
    app.component('BookNav', BookNav)
  }
}

if (typeof window !== 'undefined') {
  initReadingToolbar()
  initBookPageClass()
}

function initBookPageClass() {
  function updateClass() {
    const path = location.pathname
    const isBookIntro = /\/(mingzhu|xiaoshuo|shenmo|gongan)\/[^/]+$/.test(path)
    const isBookChapter = /\/(mingzhu|xiaoshuo|shenmo|gongan)\/[^/]+\/ch\d+/.test(path)
    document.body.classList.remove('book-intro-page', 'book-chapter-page')
    if (isBookIntro) {
      document.body.classList.add('book-intro-page')
    } else if (isBookChapter) {
      document.body.classList.add('book-chapter-page')
    }
  }
  updateClass()
  setInterval(() => {
    const path = location.pathname
    const isBookIntro = /\/(mingzhu|xiaoshuo|shenmo|gongan)\/[^/]+$/.test(path)
    const isBookChapter = /\/(mingzhu|xiaoshuo|shenmo|gongan)\/[^/]+\/ch\d+/.test(path)
    const hasIntro = document.body.classList.contains('book-intro-page')
    const hasChapter = document.body.classList.contains('book-chapter-page')
    if (isBookIntro && !hasIntro) {
      document.body.classList.remove('book-chapter-page')
      document.body.classList.add('book-intro-page')
    } else if (isBookChapter && !hasChapter) {
      document.body.classList.remove('book-intro-page')
      document.body.classList.add('book-chapter-page')
    } else if (!isBookIntro && !isBookChapter && (hasIntro || hasChapter)) {
      document.body.classList.remove('book-intro-page', 'book-chapter-page')
    }
  }, 300)
}

function initReadingToolbar() {
  let currentFontSize = parseInt(localStorage.getItem('reader-font-size')) || 16
  let currentLineHeight = parseFloat(localStorage.getItem('reader-line-height')) || 1.8
  let showToc = false
  let showSettings = false
  let chapters = []
  let currentChapter = ''

  const fontSizeMin = 14
  const fontSizeMax = 32
  const lineHeightMin = 1.4
  const lineHeightMax = 3.0

  function isChapterPage() {
    return /\/(mingzhu|xiaoshuo|shenmo|gongan)\/[^/]+\/ch\d+/.test(location.pathname)
  }

  function isPoemPage() {
    return /\/shici\/[^/]+\/\d+/.test(location.pathname)
  }

  function loadChapters() {
    const path = location.pathname
    const match = path.match(/\/(mingzhu|xiaoshuo|shenmo|gongan)\/([^/]+)\/ch(\d+)/)
    if (match) {
      const category = match[1]
      const book = match[2]
      const bookPath = `/${category}/${book}/`
      const totalChapters = book === 'sanguoyanyi' ? 120 : 100
      chapters = []
      for (let i = 1; i <= totalChapters; i++) {
        chapters.push({ num: i, title: `第${i}回`, path: `${bookPath}ch${i}` })
      }
      currentChapter = `ch${parseInt(match[3])}`
    }
  }

  function applySettings() {
    document.documentElement.style.setProperty('--reader-font-size', currentFontSize + 'px')
    document.documentElement.style.setProperty('--reader-line-height', currentLineHeight)
  }

  function createToolbar() {
    const existing = document.querySelector('.reading-toolbar')
    if (existing) existing.remove()

    const toolbar = document.createElement('div')
    toolbar.className = 'reading-toolbar'

    const chapterPage = isChapterPage()
    const poemPage = isPoemPage()

    if (chapterPage) {
      const tocBtn = document.createElement('button')
      tocBtn.className = 'toolbar-btn'
      tocBtn.title = '目录'
      tocBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>'
      tocBtn.onclick = toggleToc
      toolbar.appendChild(tocBtn)

      const settingsBtn = document.createElement('button')
      settingsBtn.className = 'toolbar-btn'
      settingsBtn.title = '阅读设置'
      settingsBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="6" y="18" font-size="16" font-weight="bold" fill="currentColor" stroke="none">A</text></svg>'
      settingsBtn.onclick = toggleSettings
      toolbar.appendChild(settingsBtn)
    }

    if (poemPage) {
      const settingsBtn = document.createElement('button')
      settingsBtn.className = 'toolbar-btn'
      settingsBtn.title = '阅读设置'
      settingsBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="6" y="18" font-size="16" font-weight="bold" fill="currentColor" stroke="none">A</text></svg>'
      settingsBtn.onclick = toggleSettings
      toolbar.appendChild(settingsBtn)
    }

    const topBtn = document.createElement('button')
    topBtn.className = 'toolbar-btn'
    topBtn.title = '返回顶部'
    topBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>'
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    toolbar.appendChild(topBtn)

    document.body.appendChild(toolbar)
  }

  function createTocPanel() {
    let panel = document.querySelector('.toc-panel')
    if (panel) panel.remove()

    panel = document.createElement('div')
    panel.className = 'toc-panel'
    panel.style.display = showToc ? 'flex' : 'none'

    panel.innerHTML = `
      <div class="panel-header">
        <h3>章节目录</h3>
        <button class="close-btn">×</button>
      </div>
      <div class="panel-body"></div>
    `

    panel.querySelector('.close-btn').onclick = () => {
      showToc = false
      panel.style.display = 'none'
    }

    const body = panel.querySelector('.panel-body')
    chapters.forEach(ch => {
      const link = document.createElement('a')
      link.href = ch.path
      link.className = 'toc-item' + (currentChapter === `ch${ch.num}` ? ' active' : '')
      link.textContent = ch.title
      link.onclick = () => { showToc = false; panel.style.display = 'none' }
      body.appendChild(link)
    })

    document.body.appendChild(panel)
  }

  function createSettingsPanel() {
    let panel = document.querySelector('.settings-panel')
    if (panel) panel.remove()

    panel = document.createElement('div')
    panel.className = 'settings-panel'
    panel.style.display = showSettings ? 'flex' : 'none'

    const fontSizePercent = ((currentFontSize - fontSizeMin) / (fontSizeMax - fontSizeMin)) * 100
    const lineHeightPercent = ((currentLineHeight - lineHeightMin) / (lineHeightMax - lineHeightMin)) * 100

    panel.innerHTML = `
      <div class="panel-header">
        <h3>阅读设置</h3>
        <button class="close-btn">×</button>
      </div>
      <div class="panel-body">
        <div class="setting-group">
          <label>字号大小 <span class="slider-value">${currentFontSize}px</span></label>
          <div class="slider-container">
            <input type="range" class="slider" id="font-size-slider" min="${fontSizeMin}" max="${fontSizeMax}" step="1" value="${currentFontSize}">
          </div>
        </div>
        <div class="setting-group">
          <label>行距 <span class="slider-value">${currentLineHeight}</span></label>
          <div class="slider-container">
            <input type="range" class="slider" id="line-height-slider" min="${lineHeightMin * 10}" max="${lineHeightMax * 10}" step="2" value="${currentLineHeight * 10}">
          </div>
        </div>
      </div>
    `

    panel.querySelector('.close-btn').onclick = () => {
      showSettings = false
      panel.style.display = 'none'
    }

    const fontSlider = panel.querySelector('#font-size-slider')
    const lineSlider = panel.querySelector('#line-height-slider')
    const fontValue = panel.querySelector('.setting-group:nth-child(1) .slider-value')
    const lineValue = panel.querySelector('.setting-group:nth-child(2) .slider-value')

    fontSlider.oninput = () => {
      currentFontSize = parseInt(fontSlider.value)
      fontValue.textContent = currentFontSize + 'px'
      document.documentElement.style.setProperty('--reader-font-size', currentFontSize + 'px')
      localStorage.setItem('reader-font-size', currentFontSize)
    }

    lineSlider.oninput = () => {
      currentLineHeight = parseInt(lineSlider.value) / 10
      lineValue.textContent = currentLineHeight
      document.documentElement.style.setProperty('--reader-line-height', currentLineHeight)
      localStorage.setItem('reader-line-height', currentLineHeight)
    }

    document.body.appendChild(panel)
  }

  function toggleToc() {
    showToc = !showToc
    showSettings = false
    const tocPanel = document.querySelector('.toc-panel')
    const settingsPanel = document.querySelector('.settings-panel')
    if (tocPanel) tocPanel.style.display = showToc ? 'flex' : 'none'
    if (settingsPanel) settingsPanel.style.display = 'none'
    if (showToc) createTocPanel()
  }

  function toggleSettings() {
    showSettings = !showSettings
    showToc = false
    const tocPanel = document.querySelector('.toc-panel')
    const settingsPanel = document.querySelector('.settings-panel')
    if (settingsPanel) settingsPanel.style.display = showSettings ? 'flex' : 'none'
    if (tocPanel) tocPanel.style.display = 'none'
    if (showSettings) createSettingsPanel()
  }

  function closeOnClickOutside(e) {
    const toolbar = document.querySelector('.reading-toolbar')
    const tocPanel = document.querySelector('.toc-panel')
    const settingsPanel = document.querySelector('.settings-panel')
    if (tocPanel && !tocPanel.contains(e.target) && toolbar && !toolbar.contains(e.target)) {
      showToc = false
      tocPanel.style.display = 'none'
    }
    if (settingsPanel && !settingsPanel.contains(e.target) && toolbar && !toolbar.contains(e.target)) {
      showSettings = false
      settingsPanel.style.display = 'none'
    }
  }

  function init() {
    applySettings()
    loadChapters()
    createToolbar()
    document.addEventListener('click', closeOnClickOutside)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }

  let lastPath = location.pathname
  setInterval(() => {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname
      document.querySelectorAll('.toc-panel, .settings-panel, .reading-toolbar').forEach(el => el.remove())
      showToc = false
      showSettings = false
      loadChapters()
      createToolbar()
    }
  }, 300)
}
