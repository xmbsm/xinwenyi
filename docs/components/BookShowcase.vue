<script setup>
import { ref, onMounted } from 'vue'

const featuredBooks = ref([
  {
    id: 'hongloumeng',
    title: '红楼梦',
    author: '曹雪芹',
    dynasty: '清代',
    category: 'mingzhu',
    desc: '中国古典四大名著之首，以贾、史、王、薛四大家族的兴衰为背景，描绘了封建社会的繁华与衰落。',
    cover: '/covers/hongloumeng.jpg'
  },
  {
    id: 'sanguoyanyi',
    title: '三国演义',
    author: '罗贯中',
    dynasty: '元末明初',
    category: 'mingzhu',
    desc: '中国古典四大名著之一，描写了从东汉末年到西晋初年之间近百年的历史风云。',
    cover: '/covers/sanguoyanyi.jpg'
  },
  {
    id: 'shuihuzhuan',
    title: '水浒传',
    author: '施耐庵',
    dynasty: '元末明初',
    category: 'mingzhu',
    desc: '中国古典四大名著之一，描写了北宋末年以宋江为首的108位好汉在梁山聚义的故事。',
    cover: '/covers/shuihuzhuan.jpg'
  },
  {
    id: 'xiyouji',
    title: '西游记',
    author: '吴承恩',
    dynasty: '明代',
    category: 'mingzhu',
    desc: '中国古典四大名著之一，讲述了唐僧师徒四人西天取经，历经九九八十一难的故事。',
    cover: '/covers/xiyouji.jpg'
  }
])

const getBookLink = (book) => {
  return `/books/${book.category}/${book.id}`
}
</script>

<template>
  <div class="book-showcase">
    <div class="category-grid">
      <a 
        v-for="book in featuredBooks" 
        :key="book.id"
        :href="getBookLink(book)"
        class="book-card"
      >
        <div class="book-cover">
          <div class="cover-placeholder">
            <span class="cover-icon">📖</span>
            <span class="cover-title">{{ book.title }}</span>
          </div>
        </div>
        <div class="book-info">
          <div class="title">{{ book.title }}</div>
          <div class="author">{{ book.author }} · {{ book.dynasty }}</div>
          <div class="desc">{{ book.desc }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.book-showcase {
  margin: 24px 0;
}

.book-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

.book-cover {
  margin-bottom: 16px;
}

.cover-placeholder {
  width: 100%;
  height: 160px;
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-bg-soft) 100%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.cover-icon {
  font-size: 2em;
}

.cover-title {
  font-size: 1.1em;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.book-info {
  flex: 1;
}

.book-info .title {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.book-info .author {
  font-size: 0.9em;
  color: var(--vp-c-text-3);
  margin-bottom: 12px;
}

.book-info .desc {
  font-size: 0.85em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .cover-placeholder {
    height: 120px;
  }
}
</style>
