<script setup>
import { ref } from 'vue'

const categories = ref([
  {
    id: 'mingzhu',
    name: '四大名著',
    icon: '📚',
    desc: '红楼梦、三国演义、水浒传、西游记',
    count: 4,
    link: '/category/mingzhu'
  },
  {
    id: 'shici',
    name: '著名诗词',
    icon: '📝',
    desc: '唐诗、宋词、元曲等经典诗词',
    count: 2,
    link: '/category/shici'
  },
  {
    id: 'xiaoshuo',
    name: '明清小说',
    icon: '📖',
    desc: '晚清谴责小说、历史演义、白话短篇',
    count: 1,
    link: '/category/xiaoshuo'
  },
  {
    id: 'shenmo',
    name: '神魔志怪',
    icon: '🐉',
    desc: '封神演义、聊斋志异等神魔小说',
    count: 1,
    link: '/category/shenmo'
  },
  {
    id: 'gongan',
    name: '公案侠义',
    icon: '⚖️',
    desc: '包公案、施公案等公案小说',
    count: 1,
    link: '/category/gongan'
  }
])
</script>

<template>
  <div class="category-list">
    <div class="category-grid">
      <a 
        v-for="category in categories" 
        :key="category.id"
        :href="category.link"
        class="category-card"
      >
        <div class="category-icon">{{ category.icon }}</div>
        <div class="category-info">
          <div class="category-name">{{ category.name }}</div>
          <div class="category-desc">{{ category.desc }}</div>
          <div class="category-count">{{ category.count }} 部作品</div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.category-list {
  margin: 24px 0;
}

.category-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(133, 102, 46, 0.12);
  border-color: var(--vp-c-brand-3);
}

.dark .category-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.category-icon {
  font-size: 2.5em;
  flex-shrink: 0;
}

.category-info {
  flex: 1;
}

.category-name {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 6px;
}

.category-desc {
  font-size: 0.85em;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
  line-height: 1.4;
}

.category-count {
  font-size: 0.8em;
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

@media (max-width: 768px) {
  .category-card {
    padding: 16px;
    gap: 12px;
  }
  
  .category-icon {
    font-size: 2em;
  }
  
  .category-name {
    font-size: 1.1em;
  }
}
</style>
