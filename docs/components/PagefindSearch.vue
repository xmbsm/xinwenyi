<template>
  <div class="search-page">
    <div class="search-hero">
      <h1 class="search-title">搜索</h1>
      <p class="search-subtitle">输入关键词搜索名著、诗词或其他古典文学作品</p>
    </div>

    <div class="search-body">
      <!-- Pagefind 搜索容器 -->
      <div id="pagefind-search"></div>

      <!-- 备用搜索（当 Pagefind 不可用时显示） -->
      <div v-if="showFallback" class="fallback-search">
        <div class="search-box-wrapper">
          <div class="search-input-box">
            <svg class="search-icon" viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              class="search-input"
              placeholder="搜索作品、作者、名句..."
              @keyup="handleKeyup"
            />
            <button class="search-btn" @click="handleSearch">搜索</button>
          </div>
        </div>

        <div v-if="!hasSearched" class="search-tips">
          <h3>搜索提示</h3>
          <p>输入关键词搜索名著、诗词或其他古典文学作品</p>
          <div class="hot-searches">
            <span class="hot-label">热门搜索：</span>
            <div class="hot-tags">
              <button
                v-for="term in hotSearches"
                :key="term"
                class="hot-tag"
                @click="selectHotSearch(term)"
              >
                {{ term }}
              </button>
            </div>
          </div>
        </div>

        <div v-else class="search-results">
          <div class="results-header">
            <span class="results-count">找到 {{ resultCount }} 个结果</span>
            <span v-if="searchQuery" class="results-query">"{{ searchQuery }}"</span>
          </div>

          <div v-if="searchResults.length === 0" class="no-results">
            <div class="no-results-icon">📚</div>
            <p>未找到相关作品</p>
            <span>试试其他关键词，或浏览<a href="/library">书库</a>、<a href="/shici">诗词</a></span>
          </div>

          <div v-else class="results-list">
            <a
              v-for="result in searchResults"
              :key="result.url"
              :href="result.url"
              class="result-card"
            >
              <div class="result-tag">{{ result.category || '作品' }}</div>
              <h4 class="result-title">{{ result.title }}</h4>
              <p class="result-meta">{{ result.meta }}</p>
              <p class="result-desc">{{ result.excerpt }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { books as allBooks } from '../data/books.js'
import {
  tangshiPoems,
  songciPoems,
  yuanquPoems,
  shijingPoems,
  chuciPoems,
  hanweishiPoems
} from '../data/poems.js'

const showFallback = ref(false)
const searchQuery = ref('')
const searchResults = ref([])
const hasSearched = ref(false)

const hotSearches = ['红楼梦', '三国演义', '唐诗', '宋词', '西游记', '李白', '杜甫']

const categoryMap = {
  'mingzhu': '四大名著',
  'shici': '诗词',
  'xiaoshuo': '小说',
  'shenmo': '神魔',
  'gongan': '公案'
}

const poemCategoryMap = {
  'tangshi': '唐诗',
  'songci': '宋词',
  'yuanqu': '元曲',
  'shijing': '诗经',
  'chuci': '楚辞',
  'hanweishi': '汉魏诗'
}

onMounted(() => {
  // 尝试加载 Pagefind
  const loadPagefind = async () => {
    try {
      // 先检查 pagefind 索引是否存在
      const response = await fetch('/pagefind/pagefind.js')
      if (!response.ok) {
        throw new Error('Pagefind 索引不存在')
      }

      // 加载 pagefind-ui.js
      const script = document.createElement('script')
      script.src = '/pagefind/pagefind-ui.js'
      script.type = 'text/javascript'
      script.onload = () => {
        initPagefindSearch()
      }
      script.onerror = () => {
        showFallback.value = true
      }
      document.head.appendChild(script)

      // 加载样式
      const link = document.createElement('link')
      link.href = '/pagefind/pagefind-ui.css'
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    } catch (e) {
      showFallback.value = true
    }
  }

  const initPagefindSearch = () => {
    const container = document.getElementById('pagefind-search')
    if (!container || !window.PagefindUI) {
      showFallback.value = true
      return
    }

    // 隐藏 fallback 搜索
    showFallback.value = false

    new window.PagefindUI({
      element: '#pagefind-search',
      showSubResults: true,
      showEmptyFilters: false,
      translations: {
        placeholder: '搜索作品、作者、名句...',
        clear_search: '清除',
        load_more: '加载更多结果',
        search_label: '搜索',
        filters_label: '筛选',
        zero_results: '未找到 "[SEARCH_TERM]" 的相关结果',
        many_results: '[COUNT] 个结果',
        one_result: '1 个结果',
        alt_search: '未找到 "[SEARCH_TERM]" 的结果，显示 "[DIFFERENT_TERM]" 的结果',
        search_suggestion: '未找到 "[SEARCH_TERM]" 的结果，请尝试以下搜索：',
        searching: '正在搜索...'
      }
    })
  }

  loadPagefind()
})

// 备用搜索功能
function doSearch(query) {
  if (!query.trim()) {
    searchResults.value = []
    hasSearched.value = false
    return
  }
  searchQuery.value = query
  hasSearched.value = true

  const q = query.toLowerCase()
  const results = []

  // 搜索书籍
  allBooks.forEach(book => {
    const titleMatch = book.title.toLowerCase().includes(q)
    const authorMatch = book.author.toLowerCase().includes(q)
    const dynastyMatch = book.dynasty.toLowerCase().includes(q)
    const descMatch = book.desc.toLowerCase().includes(q)
    const categoryMatch = (categoryMap[book.category] || book.category).toLowerCase().includes(q) ||
                         (book.categoryName || '').toLowerCase().includes(q)

    if (titleMatch || authorMatch || dynastyMatch || descMatch || categoryMatch) {
      results.push({
        url: `/books/${book.category}/${book.id}`,
        title: book.title,
        meta: `${book.dynasty} · ${book.author}`,
        excerpt: book.desc,
        category: book.categoryName || categoryMap[book.category] || book.category,
        type: 'book'
      })
    }
  })

  // 搜索诗词
  const poemLists = {
    tangshi: tangshiPoems,
    songci: songciPoems,
    yuanqu: yuanquPoems,
    shijing: shijingPoems,
    chuci: chuciPoems,
    hanweishi: hanweishiPoems
  }

  Object.entries(poemLists).forEach(([category, poems]) => {
    poems.forEach(poem => {
      const titleMatch = poem.title.toLowerCase().includes(q)
      const authorMatch = poem.author.toLowerCase().includes(q)
      const dynastyMatch = poem.dynasty.toLowerCase().includes(q)
      const contentMatch = (poem.content || '').toLowerCase().includes(q)

      if (titleMatch || authorMatch || dynastyMatch || contentMatch) {
        results.push({
          url: `/books/shici/${category}/${poem.id}`,
          title: poem.title,
          meta: `${poem.dynasty} · ${poem.author}`,
          excerpt: poem.content ? poem.content.substring(0, 100) + '...' : '',
          category: poemCategoryMap[category] || '诗词',
          type: 'poem'
        })
      }
    })
  })

  searchResults.value = results
}

function handleSearch() {
  doSearch(searchQuery.value)
}

function handleKeyup(e) {
  if (e.key === 'Enter') {
    handleSearch()
  }
}

function selectHotSearch(term) {
  doSearch(term)
}

const resultCount = computed(() => searchResults.value.length)
</script>

<style scoped>
.search-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px 60px;
}

.search-hero {
  padding: 48px 0 32px;
  text-align: center;
}

.search-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--vp-c-text-1, #333);
  margin: 0 0 12px;
}

.search-subtitle {
  font-size: 16px;
  color: var(--vp-c-text-3, #999);
  margin: 0;
}

.search-body {
  margin-top: 8px;
}

/* Pagefind UI 自定义样式 */
:deep(.pagefind-ui) {
  --pagefind-ui-scale: 1;
  --pagefind-ui-primary: #ad8e56;
  --pagefind-ui-text: #333;
  --pagefind-ui-background: #ffffff;
  --pagefind-ui-border: rgba(133, 102, 46, 0.15);
  --pagefind-ui-tag: rgba(133, 102, 46, 0.1);
  --pagefind-ui-border-width: 1px;
  --pagefind-ui-border-radius: 12px;
  --pagefind-ui-image-border-radius: 8px;
  --pagefind-ui-image-box-ratio: 3 / 2;
  --pagefind-ui-font: inherit;
}

.dark :deep(.pagefind-ui) {
  --pagefind-ui-primary: #d4a76a;
  --pagefind-ui-text: #e0e0e0;
  --pagefind-ui-background: #1a1a1a;
  --pagefind-ui-border: rgba(212, 167, 106, 0.2);
  --pagefind-ui-tag: rgba(212, 167, 106, 0.15);
}

:deep(.pagefind-ui__search-input) {
  font-size: 16px !important;
  padding: 16px 20px !important;
  border-radius: 12px !important;
  border: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.15)) !important;
  background: var(--vp-c-bg-soft, #f5f0eb) !important;
}

:deep(.pagefind-ui__search-input:focus) {
  border-color: var(--vp-c-brand-3, #ad8e56) !important;
  outline: none !important;
  box-shadow: 0 0 0 3px rgba(173, 142, 86, 0.1) !important;
}

:deep(.pagefind-ui__result) {
  border-radius: 12px !important;
  border: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.12)) !important;
  padding: 24px !important;
  margin-bottom: 16px !important;
  transition: all 0.3s ease !important;
}

:deep(.pagefind-ui__result:hover) {
  border-color: var(--vp-c-brand-3, #ad8e56) !important;
  box-shadow: 0 4px 20px rgba(133, 102, 46, 0.1) !important;
}

:deep(.pagefind-ui__result-title) {
  font-size: 18px !important;
  font-weight: 600 !important;
  color: var(--vp-c-text-1, #333) !important;
}

:deep(.pagefind-ui__result-link:hover .pagefind-ui__result-title) {
  color: var(--vp-c-brand-1, #85662e) !important;
}

:deep(.pagefind-ui__result-excerpt) {
  font-size: 14px !important;
  line-height: 1.7 !important;
  color: var(--vp-c-text-2, #666) !important;
}

:deep(mark.pagefind-ui__highlight) {
  background: var(--vp-c-brand-soft, rgba(133, 102, 46, 0.2)) !important;
  color: var(--vp-c-brand-1, #85662e) !important;
  padding: 0 2px !important;
  border-radius: 2px !important;
}

:deep(.pagefind-ui__button) {
  background: var(--vp-c-brand-3, #ad8e56) !important;
  color: #fff !important;
  border-radius: 10px !important;
  padding: 12px 24px !important;
  font-size: 15px !important;
  border: none !important;
  cursor: pointer !important;
  transition: background 0.3s ease !important;
}

:deep(.pagefind-ui__button:hover) {
  background: var(--vp-c-brand-2, #9a7a42) !important;
}

:deep(.pagefind-ui__message) {
  font-size: 14px !important;
  color: var(--vp-c-text-3, #999) !important;
}

/* 备用搜索样式 */
.fallback-search {
  margin-top: 24px;
}

.search-box-wrapper {
  background: var(--vp-c-bg-elv, #fff);
  border: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.15));
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 16px rgba(133, 102, 46, 0.06);
}

.dark .search-box-wrapper {
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
}

.search-input-box {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--vp-c-bg-soft, #f5f0eb);
  border-radius: 12px;
  padding: 4px 4px 4px 16px;
}

.search-icon {
  color: var(--vp-c-text-3, #999);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  color: var(--vp-c-text-1, #333);
  padding: 12px 0;
}

.search-input::placeholder {
  color: var(--vp-c-text-3, #999);
}

.search-btn {
  padding: 10px 24px;
  background: var(--vp-c-brand-3, #ad8e56);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s ease;
  flex-shrink: 0;
}

.search-btn:hover {
  background: var(--vp-c-brand-2, #9a7a42);
}

.search-tips {
  text-align: center;
  padding: 48px 0;
}

.search-tips h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1, #333);
  margin-bottom: 8px;
}

.search-tips p {
  color: var(--vp-c-text-3, #999);
  font-size: 14px;
  margin-bottom: 32px;
}

.hot-searches {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.hot-label {
  font-size: 14px;
  color: var(--vp-c-text-3, #999);
}

.hot-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.hot-tag {
  padding: 6px 16px;
  border: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.15));
  background: var(--vp-c-bg-elv, #fff);
  color: var(--vp-c-text-2, #666);
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hot-tag:hover {
  border-color: var(--vp-c-brand-3, #ad8e56);
  color: var(--vp-c-brand-1, #85662e);
  background: var(--vp-c-brand-soft, rgba(133, 102, 46, 0.08));
}

.search-results {
  padding: 16px 0;
}

.results-header {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.1));
}

.results-count {
  font-size: 14px;
  color: var(--vp-c-text-3, #999);
}

.results-query {
  font-size: 14px;
  color: var(--vp-c-brand-1, #85662e);
  font-weight: 600;
  margin-left: 8px;
}

.no-results {
  text-align: center;
  padding: 48px 0;
}

.no-results-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.no-results p {
  font-size: 16px;
  color: var(--vp-c-text-2, #666);
  margin-bottom: 8px;
}

.no-results span {
  font-size: 14px;
  color: var(--vp-c-text-3, #999);
}

.no-results a {
  color: var(--vp-c-brand-3, #ad8e56);
  text-decoration: none;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.result-card {
  display: block;
  padding: 24px;
  background: var(--vp-c-bg-elv, #fff);
  border: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.12));
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.result-card:hover {
  border-color: var(--vp-c-brand-3, #ad8e56);
  box-shadow: 0 4px 20px rgba(133, 102, 46, 0.1);
  transform: translateY(-2px);
}

.result-tag {
  display: inline-block;
  padding: 4px 12px;
  background: var(--vp-c-brand-soft, rgba(133, 102, 46, 0.12));
  color: var(--vp-c-brand-1, #85662e);
  font-size: 12px;
  border-radius: 6px;
  margin-bottom: 12px;
}

.result-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1, #333);
  margin: 0 0 8px;
}

.result-card:hover .result-title {
  color: var(--vp-c-brand-1, #85662e);
}

.result-meta {
  font-size: 14px;
  color: var(--vp-c-text-3, #999);
  margin: 0 0 12px;
}

.result-desc {
  font-size: 14px;
  color: var(--vp-c-text-2, #666);
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 640px) {
  .search-page {
    padding: 0 16px 40px;
  }

  .search-hero {
    padding: 32px 0 24px;
  }

  .search-title {
    font-size: 24px;
  }

  .search-box-wrapper {
    padding: 16px;
  }

  .search-input-box {
    padding: 4px 4px 4px 12px;
  }

  .search-btn {
    padding: 8px 16px;
    font-size: 14px;
  }

  .hot-searches {
    flex-direction: column;
    gap: 12px;
  }

  .result-card {
    padding: 16px;
  }

  :deep(.pagefind-ui__result) {
    padding: 16px !important;
  }
}
</style>
