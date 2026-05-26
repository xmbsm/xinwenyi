<script setup>
import { ref } from 'vue'

const poems = ref([
  {
    id: 'tangshi/1',
    title: '静夜思',
    author: '李白',
    dynasty: '唐',
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    link: '/shici/tangshi/1'
  },
  {
    id: 'songci/1',
    title: '水调歌头',
    author: '苏轼',
    dynasty: '宋',
    content: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。',
    link: '/shici/songci/2'
  },
  {
    id: 'shijing/1',
    title: '关雎',
    author: '佚名',
    dynasty: '先秦',
    content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。',
    link: '/shici/shijing/1'
  },
  {
    id: 'yuanqu/1',
    title: '天净沙·秋思',
    author: '马致远',
    dynasty: '元',
    content: '枯藤老树昏鸦，小桥流水人家，古道西风瘦马。',
    link: '/shici/yuanqu/1'
  }
])
</script>

<template>
  <div class="classic-poetry">
    <div class="poetry-grid">
      <a
        v-for="poem in poems"
        :key="poem.id"
        :href="poem.link"
        class="poetry-card"
      >
        <div class="poetry-header">
          <h3 class="poetry-title">{{ poem.title }}</h3>
          <span class="poetry-author">[{{ poem.dynasty }}] {{ poem.author }}</span>
        </div>
        <p class="poetry-content">{{ poem.content }}</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.classic-poetry {
  margin: 24px 0;
}

.poetry-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.poetry-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.poetry-card:hover {
  box-shadow: 0 4px 16px rgba(133, 102, 46, 0.1);
  border-color: var(--vp-c-brand-3);
  transform: translateY(-1px);
}

.dark .poetry-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.poetry-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.poetry-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.poetry-author {
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.poetry-content {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  margin: 0;
  padding: 0;
  text-indent: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .poetry-grid {
    grid-template-columns: 1fr;
  }
}
</style>
