<template>
  <div class="search-page">
    <div class="search-hero">
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
        <div class="search-filters">
          <button
            v-for="opt in filterOptions"
            :key="opt.value"
            class="filter-btn"
            :class="{ active: activeFilter === opt.value }"
            @click="activeFilter = opt.value; handleSearch()"
          >
            {{ opt.label }}
          </button>
        </div>
      </div>
    </div>

    <div class="search-body">
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
          <span>试试其他关键词，或浏览<a href="/library">书库</a></span>
        </div>

        <div v-else class="results-list">
          <a
            v-for="book in searchResults"
            :key="book.id"
            :href="`/${book.category}/${book.id}`"
            class="result-card"
          >
            <div class="result-tag">{{ book.categoryName }}</div>
            <h4 class="result-title">{{ book.title }}</h4>
            <p class="result-meta">{{ book.dynasty }} · {{ book.author }}</p>
            <p class="result-desc">{{ book.desc }}</p>
            <div class="result-tags">
              <span v-for="tag in book.tags" :key="tag" class="result-tag-item">{{ tag }}</span>
            </div>
          </a>
        </div>
      </div>

      <div v-if="searchHistory.length > 0 && !hasSearched" class="search-history">
        <div class="history-header">
          <h4>搜索历史</h4>
          <button class="clear-btn" @click="clearHistory">清除历史</button>
        </div>
        <div class="history-list">
          <button
            v-for="term in searchHistory"
            :key="term"
            class="history-item"
            @click="selectHistory(term)"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="1 4 1 10 7 10"/>
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
            </svg>
            <span>{{ term }}</span>
            <svg
              class="remove-icon"
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              @click="removeFromHistory(term, $event)"
            >
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { books as allBooks } from '../data/books.js'

const searchQuery = ref('')
const searchHistory = ref([])
const searchResults = ref([])
const hasSearched = ref(false)
const activeFilter = ref('all')

const hotSearches = ['红楼梦', '三国演义', '唐诗', '宋词', '西游记']

const categoryMap = {
  'mingzhu': '四大名著',
  'shici': '诗词',
  'xiaoshuo': '小说',
  'shenmo': '神魔',
  'gongan': '公案'
}

const filterOptions = [
  { value: 'all', label: '全部' },
  { value: 'title', label: '书名' },
  { value: 'author', label: '作者' },
  { value: 'category', label: '分类' }
]

onMounted(() => {
  const saved = localStorage.getItem('xinwenyi-search-history')
  if (saved) {
    try {
      searchHistory.value = JSON.parse(saved)
    } catch (e) {
      searchHistory.value = []
    }
  }

  const urlParams = new URLSearchParams(window.location.search)
  const q = urlParams.get('q')
  if (q) {
    searchQuery.value = q
    doSearch(q)
  }
})

function saveHistory() {
  localStorage.setItem('xinwenyi-search-history', JSON.stringify(searchHistory.value))
}

function addToHistory(query) {
  if (!query.trim()) return
  const idx = searchHistory.value.indexOf(query)
  if (idx > -1) {
    searchHistory.value.splice(idx, 1)
  }
  searchHistory.value.unshift(query)
  if (searchHistory.value.length > 10) {
    searchHistory.value = searchHistory.value.slice(0, 10)
  }
  saveHistory()
}

function removeFromHistory(query, event) {
  event.stopPropagation()
  const idx = searchHistory.value.indexOf(query)
  if (idx > -1) {
    searchHistory.value.splice(idx, 1)
    saveHistory()
  }
}

function clearHistory() {
  searchHistory.value = []
  saveHistory()
}

function doSearch(query) {
  if (!query.trim()) {
    searchResults.value = []
    hasSearched.value = false
    return
  }
  searchQuery.value = query
  addToHistory(query)
  hasSearched.value = true

  const q = query.toLowerCase()
  searchResults.value = allBooks.filter(book => {
    if (activeFilter.value === 'title') {
      return book.title.toLowerCase().includes(q)
    }
    if (activeFilter.value === 'author') {
      return book.author.toLowerCase().includes(q)
    }
    if (activeFilter.value === 'category') {
      return (categoryMap[book.category] || book.category).toLowerCase().includes(q) ||
             book.categoryName.toLowerCase().includes(q)
    }
    return book.title.toLowerCase().includes(q) ||
           book.author.toLowerCase().includes(q) ||
           book.dynasty.toLowerCase().includes(q) ||
           book.desc.toLowerCase().includes(q) ||
           (categoryMap[book.category] || book.category).toLowerCase().includes(q) ||
           book.categoryName.toLowerCase().includes(q)
  })
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

function selectHistory(term) {
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

.search-filters {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 6px 16px;
  border: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.15));
  background: transparent;
  color: var(--vp-c-text-2, #666);
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: var(--vp-c-brand-3, #ad8e56);
  color: var(--vp-c-brand-1, #85662e);
}

.filter-btn.active {
  background: var(--vp-c-brand-3, #ad8e56);
  color: #fff;
  border-color: var(--vp-c-brand-3, #ad8e56);
}

.search-body {
  margin-top: 8px;
}

.search-tips {
  text-align: center;
  padding: 48px 0;
}

.tips-icon {
  color: var(--vp-c-brand-3, #ad8e56);
  opacity: 0.6;
  margin-bottom: 16px;
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

.search-history {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.1));
}

.history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.history-header h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1, #333);
  margin: 0;
}

.clear-btn {
  padding: 4px 12px;
  border: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.15));
  background: transparent;
  color: var(--vp-c-text-3, #999);
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-btn:hover {
  border-color: #c0392b;
  color: #c0392b;
}

.history-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.history-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: var(--vp-c-bg-soft, #f5f0eb);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  color: var(--vp-c-text-2, #666);
  cursor: pointer;
  transition: all 0.3s ease;
}

.history-item:hover {
  background: var(--vp-c-brand-soft, rgba(133, 102, 46, 0.12));
  color: var(--vp-c-brand-1, #85662e);
}

.history-item svg {
  color: var(--vp-c-text-3, #999);
  flex-shrink: 0;
}

.remove-icon {
  margin-left: 2px;
  opacity: 0;
  transition: opacity 0.2s;
}

.history-item:hover .remove-icon {
  opacity: 1;
}

.remove-icon:hover {
  color: #c0392b;
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
  margin: 0 0 12px;
}

.result-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.result-tag-item {
  padding: 3px 10px;
  background: var(--vp-c-bg-soft, #f5f0eb);
  color: var(--vp-c-text-3, #999);
  font-size: 12px;
  border-radius: 4px;
}

@media (max-width: 640px) {
  .search-page {
    padding: 0 16px 40px;
  }

  .search-hero {
    padding: 32px 0 24px;
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
}
</style>
