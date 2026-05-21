<script setup>
import { ref, computed } from 'vue'
import { books } from '../data/books.js'

const categories = [
  { id: 'all', name: '全部' },
  { id: 'mingzhu', name: '四大名著' },
  { id: 'xiaoshuo', name: '明清小说' },
  { id: 'shenmo', name: '神魔志怪' },
  { id: 'gongan', name: '公案侠义' }
]

const activeCategory = ref('all')
const currentPage = ref(1)
const pageSize = 20

const filteredBooks = computed(() => {
  if (activeCategory.value === 'all') {
    return books
  }
  return books.filter(book => book.category === activeCategory.value)
})

const totalCount = computed(() => filteredBooks.value.length)
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize))

const paginatedBooks = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return filteredBooks.value.slice(start, end)
})

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function getBookLink(book) {
  return `/books/${book.category}/${book.id}`
}

function getCoverColor(title) {
  const colors = ['#85662e', '#9a7a42', '#ad8e56', '#b8956a', '#c4a35a', '#9a7a42']
  let hash = 0
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}
</script>

<template>
  <div class="library-page">
    <aside class="library-sidebar">
      <div class="sidebar-title">题材分类</div>
      <nav class="category-nav">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="category-item"
          :class="{ active: activeCategory === cat.id }"
          @click="activeCategory = cat.id"
        >
          {{ cat.name }}
        </button>
      </nav>
    </aside>

    <main class="library-main">
      <div class="library-header">
        <h2 class="header-title">全部作品</h2>
        <span class="header-count">共 {{ totalCount }} 部</span>
      </div>

      <div class="books-grid">
        <a
          v-for="book in paginatedBooks"
          :key="book.id"
          :href="getBookLink(book)"
          class="book-card"
        >
          <div class="book-cover">
            <div class="cover-spine" :style="{ backgroundColor: getCoverColor(book.title) }"></div>
            <div class="cover-body">
              <div class="cover-circle"></div>
            </div>
          </div>
          <div class="book-info">
            <h3 class="book-title">{{ book.title }}</h3>
            <div class="book-author">{{ book.author }}</div>
            <p class="book-desc">{{ book.desc }}</p>
            <div class="book-tags">
              <span v-for="tag in book.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </a>
      </div>

      <div v-if="filteredBooks.length === 0" class="empty-state">
        <p>该分类下暂无书籍</p>
      </div>

      <div v-if="totalPages > 1" class="pagination">
        <button
          class="page-btn"
          :disabled="currentPage === 1"
          @click="prevPage"
        >
          上一页
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          class="page-btn"
          :class="{ active: currentPage === page }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
        <button
          class="page-btn"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          下一页
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.library-page {
  display: flex;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 0;
}

.library-sidebar {
  width: 180px;
  flex-shrink: 0;
}

.sidebar-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 12px;
}

.category-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.category-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 14px;
  border: none;
  background: none;
  color: var(--vp-c-text-2);
  font-size: 14px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-family: inherit;
}

.category-item:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.category-item.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.library-main {
  flex: 1;
  min-width: 0;
}

.library-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.header-count {
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.book-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.book-card:hover {
  box-shadow: 0 4px 16px rgba(133, 102, 46, 0.1);
  border-color: var(--vp-c-brand-3);
  transform: translateY(-1px);
}

.dark .book-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.book-cover {
  width: 72px;
  height: 96px;
  flex-shrink: 0;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  background: #f5f0e8;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.dark .book-cover {
  background: #2a2a2a;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

.cover-spine {
  width: 6px;
  flex-shrink: 0;
}

.cover-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cover-circle {
  width: 20px;
  height: 20px;
  border: 2px solid var(--vp-c-brand-3);
  border-radius: 50%;
  opacity: 0.4;
  position: absolute;
  right: 8px;
  bottom: 8px;
}

.book-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.book-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 4px 0;
  line-height: 1.4;
}

.book-author {
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin-bottom: 8px;
}

.book-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.book-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 11px;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  padding: 2px 8px;
  border-radius: 3px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--vp-c-text-3);
}

@media (max-width: 960px) {
  .library-page {
    flex-direction: column;
    gap: 20px;
    padding: 24px 16px;
  }

  .library-sidebar {
    width: 100%;
  }

  .category-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }

  .category-item {
    width: auto;
    padding: 6px 14px;
  }

  .books-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .library-page {
    padding: 16px 12px;
  }

  .book-card {
    padding: 16px;
  }

  .book-cover {
    width: 60px;
    height: 80px;
  }

  .book-title {
    font-size: 15px;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
  flex-wrap: wrap;
}

.page-btn {
  padding: 8px 14px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-2);
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  min-width: 40px;
}

.page-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
}

.page-btn.active {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}

.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
