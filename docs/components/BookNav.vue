<template>
  <div class="book-nav">
    <a
      v-if="prevBook"
      :href="prevLink"
      class="prev-book"
    >
      <span class="nav-label">← 上一本</span>
      <span class="nav-title">{{ prevBook.title }}</span>
    </a>
    <span v-else class="nav-placeholder"></span>

    <a
      v-if="nextBook"
      :href="nextLink"
      class="next-book"
    >
      <span class="nav-label">下一本 →</span>
      <span class="nav-title">{{ nextBook.title }}</span>
    </a>
    <span v-else class="nav-placeholder"></span>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { books } from '../data/books.js'

const currentId = ref('')
const currentCategory = ref('')
const isClient = ref(false)

onMounted(() => {
  isClient.value = true
  const currentPath = window.location.pathname
  const match = currentPath.match(/\/books\/([^/]+)\/([^/]+)\.html?/)
  if (match) {
    currentCategory.value = match[1]
    currentId.value = match[2]
  }
})

const currentIndex = computed(() => {
  if (!isClient.value) return -1
  return books.findIndex(b => b.id === currentId.value)
})

const prevBook = computed(() => {
  if (!isClient.value) return null
  const idx = currentIndex.value
  if (idx > 0) {
    return books[idx - 1]
  }
  return null
})

const nextBook = computed(() => {
  if (!isClient.value) return null
  const idx = currentIndex.value
  if (idx >= 0 && idx < books.length - 1) {
    return books[idx + 1]
  }
  return null
})

const prevLink = computed(() => {
  if (!prevBook.value) return ''
  return `/books/${prevBook.value.category}/${prevBook.value.id}.html`
})

const nextLink = computed(() => {
  if (!nextBook.value) return ''
  return `/books/${nextBook.value.category}/${nextBook.value.id}.html`
})
</script>

<style scoped>
.book-nav {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.15));
  gap: 16px;
}

.prev-book,
.next-book {
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  background: var(--vp-c-brand-soft, rgba(133, 102, 46, 0.12));
  border: 1px solid var(--vp-c-brand-3, rgba(133, 102, 46, 0.2));
  max-width: 48%;
  flex: 1;
}

.prev-book {
  align-items: flex-start;
}

.next-book {
  align-items: flex-end;
  text-align: right;
}

.prev-book:hover,
.next-book:hover {
  background: var(--vp-c-brand-3, #ad8e56);
  border-color: var(--vp-c-brand-3, #ad8e56);
}

.prev-book:hover .nav-label,
.prev-book:hover .nav-title,
.next-book:hover .nav-label,
.next-book:hover .nav-title {
  color: #fff;
}

.nav-label {
  font-size: 13px;
  color: var(--vp-c-text-3, #999);
  margin-bottom: 4px;
  transition: color 0.3s ease;
}

.nav-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-brand-1, #85662e);
  transition: color 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.nav-placeholder {
  flex: 1;
  max-width: 48%;
}

@media (max-width: 640px) {
  .book-nav {
    flex-direction: column;
    gap: 12px;
  }

  .prev-book,
  .next-book,
  .nav-placeholder {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .next-book {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
