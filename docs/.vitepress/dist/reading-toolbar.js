(function() {
  'use strict';

  // 只在客户端执行
  if (typeof window === 'undefined') return;

  // 字体大小和行距设置
  let currentFontSize = 16;
  let currentLineHeight = 1.8;
  let showToc = false;
  let showSettings = false;
  let chapters = [];
  let currentChapter = '';

  const fontSizeOptions = [14, 15, 16, 17, 18, 19, 20, 21, 22];
  const lineHeightOptions = [1.4, 1.6, 1.8, 2.0, 2.2, 2.4];

  // 检查是否在章节页面
  function isChapterPage() {
    return /\/books\/(mingzhu|xiaoshuo|shenmo|gongan)\/[^/]+\/ch\d+/.test(location.pathname);
  }

  // 检查是否在诗词详情页
  function isPoemPage() {
    return /\/books\/shici\/[^/]+\/\d+/.test(location.pathname);
  }

  // 加载章节列表
  function loadChapters() {
    const path = location.pathname;
    const match = path.match(/\/books\/(mingzhu|xiaoshuo|shenmo|gongan)\/([^/]+)\/ch(\d+)/);
    if (match) {
      const category = match[1];
      const book = match[2];
      const bookPath = `/books/${category}/${book}/`;
      const totalChapters = book === 'sanguoyanyi' ? 120 : 100;
      chapters = [];
      for (let i = 1; i <= totalChapters; i++) {
        chapters.push({
          num: i,
          title: `第${i}回`,
          path: `${bookPath}ch${i}`
        });
      }
      currentChapter = `ch${parseInt(match[3])}`;
    }
  }

  // 读取本地存储的设置
  function loadSettings() {
    const savedFontSize = localStorage.getItem('reader-font-size');
    const savedLineHeight = localStorage.getItem('reader-line-height');
    if (savedFontSize) {
      currentFontSize = parseInt(savedFontSize);
      document.documentElement.style.setProperty('--reader-font-size', savedFontSize + 'px');
    }
    if (savedLineHeight) {
      currentLineHeight = parseFloat(savedLineHeight);
      document.documentElement.style.setProperty('--reader-line-height', savedLineHeight);
    }
  }

  // 创建工具栏
  function createToolbar() {
    const existing = document.querySelector('.reading-toolbar');
    if (existing) return;

    const toolbar = document.createElement('div');
    toolbar.className = 'reading-toolbar';

    const chapterPage = isChapterPage();
    const poemPage = isPoemPage();

    if (chapterPage) {
      // 目录按钮
      const tocBtn = document.createElement('button');
      tocBtn.className = 'toolbar-btn';
      tocBtn.title = '目录';
      tocBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>';
      tocBtn.onclick = toggleToc;
      toolbar.appendChild(tocBtn);

      // 设置按钮
      const settingsBtn = document.createElement('button');
      settingsBtn.className = 'toolbar-btn';
      settingsBtn.title = '阅读设置';
      settingsBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="6" y="18" font-size="16" font-weight="bold" fill="currentColor" stroke="none">A</text></svg>';
      settingsBtn.onclick = toggleSettings;
      toolbar.appendChild(settingsBtn);
    }

    if (poemPage) {
      // 诗词详情页只显示设置按钮
      const settingsBtn = document.createElement('button');
      settingsBtn.className = 'toolbar-btn';
      settingsBtn.title = '阅读设置';
      settingsBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="6" y="18" font-size="16" font-weight="bold" fill="currentColor" stroke="none">A</text></svg>';
      settingsBtn.onclick = toggleSettings;
      toolbar.appendChild(settingsBtn);
    }

    // 返回顶部按钮（全局显示）
    const topBtn = document.createElement('button');
    topBtn.className = 'toolbar-btn';
    topBtn.title = '返回顶部';
    topBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>';
    topBtn.onclick = scrollToTop;
    toolbar.appendChild(topBtn);

    document.body.appendChild(toolbar);
  }

  // 创建目录面板
  function createTocPanel() {
    let panel = document.querySelector('.toc-panel');
    if (panel) {
      panel.style.display = showToc ? 'flex' : 'none';
      return;
    }

    panel = document.createElement('div');
    panel.className = 'toc-panel';
    panel.style.display = showToc ? 'flex' : 'none';

    const header = document.createElement('div');
    header.className = 'panel-header';
    header.innerHTML = '<h3>章节目录</h3><button class="close-btn">×</button>';
    header.querySelector('.close-btn').onclick = () => { showToc = false; panel.style.display = 'none'; };
    panel.appendChild(header);

    const body = document.createElement('div');
    body.className = 'panel-body';

    chapters.forEach(ch => {
      const link = document.createElement('a');
      link.href = ch.path;
      link.className = 'toc-item' + (currentChapter === `ch${ch.num}` ? ' active' : '');
      link.textContent = ch.title;
      link.onclick = () => { showToc = false; panel.style.display = 'none'; };
      body.appendChild(link);
    });

    panel.appendChild(body);
    document.body.appendChild(panel);
  }

  // 创建设置面板
  function createSettingsPanel() {
    let panel = document.querySelector('.settings-panel');
    if (panel) {
      panel.style.display = showSettings ? 'flex' : 'none';
      return;
    }

    panel = document.createElement('div');
    panel.className = 'settings-panel';
    panel.style.display = showSettings ? 'flex' : 'none';

    const header = document.createElement('div');
    header.className = 'panel-header';
    header.innerHTML = '<h3>阅读设置</h3><button class="close-btn">×</button>';
    header.querySelector('.close-btn').onclick = () => { showSettings = false; panel.style.display = 'none'; };
    panel.appendChild(header);

    const body = document.createElement('div');
    body.className = 'panel-body';

    // 字号设置
    const fontGroup = document.createElement('div');
    fontGroup.className = 'setting-group';
    fontGroup.innerHTML = '<label>字号大小</label>';
    const fontOptions = document.createElement('div');
    fontOptions.className = 'size-options';
    fontSizeOptions.forEach(size => {
      const btn = document.createElement('button');
      btn.className = 'size-btn' + (currentFontSize === size ? ' active' : '');
      btn.textContent = size;
      btn.onclick = () => changeFontSize(size);
      fontOptions.appendChild(btn);
    });
    fontGroup.appendChild(fontOptions);
    body.appendChild(fontGroup);

    // 行距设置
    const lineGroup = document.createElement('div');
    lineGroup.className = 'setting-group';
    lineGroup.innerHTML = '<label>行距</label>';
    const lineOptions = document.createElement('div');
    lineOptions.className = 'size-options';
    lineHeightOptions.forEach(height => {
      const btn = document.createElement('button');
      btn.className = 'size-btn' + (currentLineHeight === height ? ' active' : '');
      btn.textContent = height;
      btn.onclick = () => changeLineHeight(height);
      lineOptions.appendChild(btn);
    });
    lineGroup.appendChild(lineOptions);
    body.appendChild(lineGroup);

    panel.appendChild(body);
    document.body.appendChild(panel);
  }

  // 切换目录显示
  function toggleToc() {
    showToc = !showToc;
    showSettings = false;
    const tocPanel = document.querySelector('.toc-panel');
    const settingsPanel = document.querySelector('.settings-panel');
    if (tocPanel) tocPanel.style.display = showToc ? 'flex' : 'none';
    if (settingsPanel) settingsPanel.style.display = 'none';
    if (showToc && !tocPanel) createTocPanel();
  }

  // 切换设置显示
  function toggleSettings() {
    showSettings = !showSettings;
    showToc = false;
    const tocPanel = document.querySelector('.toc-panel');
    const settingsPanel = document.querySelector('.settings-panel');
    if (settingsPanel) settingsPanel.style.display = showSettings ? 'flex' : 'none';
    if (tocPanel) tocPanel.style.display = 'none';
    if (showSettings && !settingsPanel) createSettingsPanel();
  }

  // 返回顶部
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 改变字号
  function changeFontSize(size) {
    currentFontSize = size;
    document.documentElement.style.setProperty('--reader-font-size', size + 'px');
    localStorage.setItem('reader-font-size', size);
    updateSettingsPanel();
  }

  // 改变行距
  function changeLineHeight(height) {
    currentLineHeight = height;
    document.documentElement.style.setProperty('--reader-line-height', height);
    localStorage.setItem('reader-line-height', height);
    updateSettingsPanel();
  }

  // 更新设置面板按钮状态
  function updateSettingsPanel() {
    const panel = document.querySelector('.settings-panel');
    if (!panel) return;
    const btns = panel.querySelectorAll('.size-btn');
    btns.forEach(btn => {
      const val = parseFloat(btn.textContent);
      btn.classList.remove('active');
      if (val === currentFontSize || val === currentLineHeight) {
        btn.classList.add('active');
      }
    });
  }

  // 点击外部关闭面板
  function closeOnClickOutside(e) {
    const toolbar = document.querySelector('.reading-toolbar');
    const tocPanel = document.querySelector('.toc-panel');
    const settingsPanel = document.querySelector('.settings-panel');

    if (tocPanel && !tocPanel.contains(e.target) && toolbar && !toolbar.contains(e.target)) {
      showToc = false;
      tocPanel.style.display = 'none';
    }
    if (settingsPanel && !settingsPanel.contains(e.target) && toolbar && !toolbar.contains(e.target)) {
      showSettings = false;
      settingsPanel.style.display = 'none';
    }
  }

  // 初始化
  function init() {
    loadSettings();
    loadChapters();
    createToolbar();
    document.addEventListener('click', closeOnClickOutside);
  }

  // DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 监听路由变化（SPA 导航）
  let lastPath = location.pathname;
  setInterval(() => {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      // 清理旧面板
      const oldToc = document.querySelector('.toc-panel');
      const oldSettings = document.querySelector('.settings-panel');
      const oldToolbar = document.querySelector('.reading-toolbar');
      if (oldToc) oldToc.remove();
      if (oldSettings) oldSettings.remove();
      if (oldToolbar) oldToolbar.remove();
      showToc = false;
      showSettings = false;
      // 重新初始化
      loadChapters();
      createToolbar();
    }
  }, 300);
})();
