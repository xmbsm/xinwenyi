<template>
  <div class="poem-nav">
    <a
      v-if="prevPoem"
      :href="prevLink"
      class="prev-poem"
    >
      <span class="nav-label">← 上一篇</span>
      <span class="nav-title">{{ prevPoem.title }}</span>
    </a>
    <span v-else class="nav-placeholder"></span>

    <a
      v-if="nextPoem"
      :href="nextLink"
      class="next-poem"
    >
      <span class="nav-label">下一篇 →</span>
      <span class="nav-title">{{ nextPoem.title }}</span>
    </a>
    <span v-else class="nav-placeholder"></span>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'

const poemLists = {
  tangshi: [
    { id: 1, title: '静夜思' },
    { id: 2, title: '春晓' },
    { id: 3, title: '登鹳雀楼' },
    { id: 4, title: '相思' },
    { id: 5, title: '江雪' },
    { id: 6, title: '春望' },
    { id: 7, title: '望庐山瀑布' },
    { id: 8, title: '早发白帝城' },
    { id: 9, title: '枫桥夜泊' },
    { id: 10, title: '出塞' },
    { id: 11, title: '凉州词' },
    { id: 12, title: '送元二使安西' }
  ],
  songci: [
    { id: 1, title: '水调歌头·明月几时有' },
    { id: 2, title: '念奴娇·赤壁怀古' },
    { id: 3, title: '声声慢·寻寻觅觅' },
    { id: 4, title: '如梦令·昨夜雨疏风骤' },
    { id: 5, title: '虞美人·春花秋月何时了' },
    { id: 6, title: '雨霖铃·寒蝉凄切' },
    { id: 7, title: '青玉案·元夕' },
    { id: 8, title: '一剪梅·红藕香残玉簟秋' },
    { id: 9, title: '破阵子·为陈同甫赋壮词以寄之' },
    { id: 10, title: '江城子·密州出猎' },
    { id: 11, title: '满江红·写怀' },
    { id: 12, title: '卜算子·咏梅' }
  ],
  yuanqu: [
    { id: 1, title: '天净沙·秋思' },
    { id: 2, title: '山坡羊·潼关怀古' },
    { id: 3, title: '天净沙·秋' },
    { id: 4, title: '四块玉·别情' },
    { id: 5, title: '沉醉东风·渔夫' },
    { id: 6, title: '大德歌·春' },
    { id: 7, title: '寿阳曲·远浦帆归' },
    { id: 8, title: '蟾宫曲·春情' },
    { id: 9, title: '山坡羊·骊山怀古' },
    { id: 10, title: '清江引·秋怀' },
    { id: 11, title: '殿前欢·对菊自叹' },
    { id: 12, title: '水仙子·咏江南' }
  ],
  shijing: [
    { id: 1, title: '关雎' },
    { id: 2, title: '蒹葭' },
    { id: 3, title: '桃夭' },
    { id: 4, title: '氓' },
    { id: 5, title: '采薇' },
    { id: 6, title: '鹿鸣' },
    { id: 7, title: '静女' },
    { id: 8, title: '木瓜' },
    { id: 9, title: '硕鼠' },
    { id: 10, title: '伐檀' }
  ],
  chuci: [
    { id: 1, title: '离骚' },
    { id: 2, title: '九歌·湘夫人' },
    { id: 3, title: '九歌·山鬼' },
    { id: 4, title: '天问' },
    { id: 5, title: '九歌·国殇' },
    { id: 6, title: '九歌·东君' },
    { id: 7, title: '九章·橘颂' },
    { id: 8, title: '招魂' }
  ]
}

const category = ref('')
const currentId = ref(0)
const isClient = ref(false)

onMounted(() => {
  isClient.value = true
  const currentPath = window.location.pathname
  const match = currentPath.match(/\/books\/shici\/([^/]+)\/(\d+)\.html?/)
  if (match) {
    category.value = match[1]
    currentId.value = parseInt(match[2])
  }
})

const poems = computed(() => poemLists[category.value] || [])

const currentIndex = computed(() => {
  if (!isClient.value) return -1
  return poems.value.findIndex(p => p.id === currentId.value)
})

const prevPoem = computed(() => {
  if (!isClient.value) return null
  const idx = currentIndex.value
  if (idx > 0) {
    return poems.value[idx - 1]
  }
  return null
})

const nextPoem = computed(() => {
  if (!isClient.value) return null
  const idx = currentIndex.value
  if (idx >= 0 && idx < poems.value.length - 1) {
    return poems.value[idx + 1]
  }
  return null
})

const prevLink = computed(() => {
  if (!prevPoem.value) return ''
  return `/books/shici/${category.value}/${prevPoem.value.id}.html`
})

const nextLink = computed(() => {
  if (!nextPoem.value) return ''
  return `/books/shici/${category.value}/${nextPoem.value.id}.html`
})
</script>

<style scoped>
.poem-nav {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.15));
  gap: 16px;
}

.prev-poem,
.next-poem {
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

.prev-poem {
  align-items: flex-start;
}

.next-poem {
  align-items: flex-end;
  text-align: right;
}

.prev-poem:hover,
.next-poem:hover {
  background: var(--vp-c-brand-3, #ad8e56);
  border-color: var(--vp-c-brand-3, #ad8e56);
}

.prev-poem:hover .nav-label,
.prev-poem:hover .nav-title,
.next-poem:hover .nav-label,
.next-poem:hover .nav-title {
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
  .poem-nav {
    flex-direction: column;
    gap: 12px;
  }

  .prev-poem,
  .next-poem,
  .nav-placeholder {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .next-poem {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
