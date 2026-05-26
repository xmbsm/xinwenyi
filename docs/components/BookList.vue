<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  category: {
    type: String,
    required: true
  }
})

const books = ref({
  mingzhu: [
    {
      id: 'hongloumeng',
      title: '红楼梦',
      author: '曹雪芹',
      dynasty: '清代',
      desc: '中国古典四大名著之首，又名《石头记》《金玉缘》，以贾、史、王、薛四大家族的兴衰为背景，以贾宝玉、林黛玉的爱情婚姻悲剧为主线，描绘了封建社会的繁华与衰落。',
      chapters: 120
    },
    {
      id: 'sanguoyanyi',
      title: '三国演义',
      author: '罗贯中',
      dynasty: '元末明初',
      desc: '中国古典四大名著之一，全名为《三国志通俗演义》。描写了从东汉末年到西晋初年之间近百年的历史风云，以战争为主，诉说了东汉末年的群雄割据混战和魏、蜀、吴三国之间的政治和军事斗争。',
      chapters: 120
    },
    {
      id: 'shuihuzhuan',
      title: '水浒传',
      author: '施耐庵',
      dynasty: '元末明初',
      desc: '中国古典四大名著之一，是一部以北宋末年宋江起义为主要故事背景的英雄传奇章回体长篇小说。全书通过描写梁山好汉反抗欺压、水泊梁山壮大和受宋朝招安，以及受招安后为宋朝征战，最终消亡的宏大故事。',
      chapters: 120
    },
    {
      id: 'xiyouji',
      title: '西游记',
      author: '吴承恩',
      dynasty: '明代',
      desc: '中国古典四大名著之一，讲述了唐僧师徒四人西天取经，历经九九八十一难，最终取得真经、修成正果的故事。小说以丰富的想象、幽默的语言，成为中国古代神魔小说的经典之作。',
      chapters: 100
    }
  ],
  shici: [
    {
      id: 'tangshi',
      title: '唐诗三百首',
      author: '蘅塘退士',
      dynasty: '清代',
      desc: '清代蘅塘退士编选的唐诗选集，收录了唐代77位诗人的311首诗作，是流传最广、影响最大的唐诗选本。选诗范围广泛，包括了各种题材和风格，是学习唐诗的最佳入门读物。',
      chapters: 311
    },
    {
      id: 'songci',
      title: '宋词三百首',
      author: '朱孝臧',
      dynasty: '清代',
      desc: '清代朱孝臧编选的宋词选集，收录了宋代众多词人的代表作。宋词是继唐诗之后的又一文学高峰，分为豪放派和婉约派，展现了宋代文人的情感世界和艺术追求。',
      chapters: 300
    }
  ],
  xiaoshuo: [
    {
      id: 'rulinwaishi',
      title: '儒林外史',
      author: '吴敬梓',
      dynasty: '清代',
      desc: '清代吴敬梓创作的长篇讽刺小说，以写实主义描绘了各类人士对于"功名富贵"的不同表现，是中国古代讽刺小说的高峰。',
      chapters: 56
    }
  ],
  shenmo: [
    {
      id: 'fengshenyanyi',
      title: '封神演义',
      author: '许仲琳',
      dynasty: '明代',
      desc: '明代许仲琳创作的长篇神魔小说，以商周交替时期的历史为背景，描写了姜子牙辅佐周武王伐纣的故事，充满了神话色彩和想象力。',
      chapters: 100
    }
  ],
  gongan: [
    {
      id: 'baogongan',
      title: '包公案',
      author: '无名氏',
      dynasty: '明代',
      desc: '明代公案小说，讲述了包拯断案的故事。包拯铁面无私、公正廉明，深受百姓爱戴，是中国历史上著名的清官形象。',
      chapters: 100
    }
  ]
})

const categoryNames = {
  mingzhu: '四大名著',
  shici: '著名诗词',
  xiaoshuo: '明清小说',
  shenmo: '神魔志怪',
  gongan: '公案侠义'
}

const currentBooks = computed(() => {
  return books.value[props.category] || []
})

const getBookLink = (bookId) => {
  return `/${props.category}/${bookId}`
}
</script>

<template>
  <div class="book-list">
    <div v-if="currentBooks.length === 0" class="empty-state">
      <p>该分类下暂无书籍</p>
    </div>
    <div v-else class="category-grid">
      <a 
        v-for="book in currentBooks" 
        :key="book.id"
        :href="getBookLink(book.id)"
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
          <div class="meta">
            <span class="chapters">{{ book.chapters }} 章/首</span>
          </div>
          <div class="desc">{{ book.desc }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.book-list {
  margin: 24px 0;
}

.empty-state {
  text-align: center;
  padding: 48px 20px;
  color: var(--vp-c-text-3);
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
  height: 180px;
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-bg-soft) 100%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.cover-icon {
  font-size: 2.5em;
}

.cover-title {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.book-info {
  flex: 1;
}

.book-info .title {
  font-size: 1.3em;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.book-info .author {
  font-size: 0.9em;
  color: var(--vp-c-text-3);
  margin-bottom: 8px;
}

.book-info .meta {
  margin-bottom: 12px;
}

.book-info .meta .chapters {
  display: inline-block;
  padding: 4px 12px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: 500;
}

.book-info .desc {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .cover-placeholder {
    height: 140px;
  }
  
  .book-info .title {
    font-size: 1.1em;
  }
}
</style>
