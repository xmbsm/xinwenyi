<script setup>
import { ref, computed } from 'vue'

const dynasties = [
  { id: 'all', name: '全部' },
  { id: 'xihan', name: '西汉' },
  { id: 'weidai', name: '魏代' },
  { id: 'sanguo', name: '三国' },
  { id: 'donghan', name: '东汉' },
  { id: 'wudai', name: '五代' },
  { id: 'yuandai', name: '元代' },
  { id: 'yuanmomingchu', name: '元末明初' },
  { id: 'beisong', name: '北宋' },
  { id: 'beiwei', name: '北魏' },
  { id: 'nanbeichao', name: '南北朝' },
  { id: 'nansong', name: '南宋' },
  { id: 'tangdai', name: '唐代' },
  { id: 'songdai', name: '宋代' },
  { id: 'zhanguo', name: '战国' },
  { id: 'mingdai', name: '明代' },
  { id: 'chunqiu', name: '春秋' },
  { id: 'jindai', name: '晋代' },
  { id: 'qingdai', name: '清代' }
]

const sortModes = [
  { id: 'name', name: '按姓名' },
  { id: 'alpha', name: '按字母' }
]

const authors = [
  {
    id: 'baixingjian',
    name: '白居易',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '白',
    desc: '唐代伟大的现实主义诗人，字乐天，号香山居士。',
    works: ['长恨歌', '长恨歌', '赋得古原草送别']
  },
  {
    id: 'baipu',
    name: '白朴',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '白',
    desc: '元代著名戏曲作家，元曲四大家之一。',
    works: ['沉醉东风·渔夫', '天净沙·秋', '天净沙·秋']
  },
  {
    id: 'bangu',
    name: '班固',
    dynasty: '东汉',
    dynastyId: 'donghan',
    avatar: '班',
    desc: '班固，字孟坚，东汉著名的史学家、文学家。',
    works: ['汉书']
  },
  {
    id: 'caocao',
    name: '曹操',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '曹',
    desc: '东汉末年杰出的政治家、军事家、文学家。',
    works: ['短歌行', '龟虽寿', '蒿里行']
  },
  {
    id: 'caoxueqin',
    name: '曹雪芹',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '曹',
    desc: '清代小说家，名霑，字梦阮，号雪芹，又号芹溪。',
    works: ['红楼梦']
  },
  {
    id: 'caozhi',
    name: '曹植',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '曹',
    desc: '三国时期著名文学家，曹操之子，建安文学代表人物。',
    works: ['七步诗']
  },
  {
    id: 'chenyuyi',
    name: '陈与义',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '陈',
    desc: '宋代诗人，字去非，号简斋。',
    works: ['临江仙·夜登小阁忆洛中旧游']
  },
  {
    id: 'chenzian',
    name: '陈子昂',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '陈',
    desc: '唐代文学家，字伯玉，初唐诗文革新人物之一。',
    works: ['登幽州台歌']
  },
  {
    id: 'churenhuo',
    name: '褚人获',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '褚',
    desc: '清代小说家，字稼轩，号石农。他博学多才，著...',
    works: ['隋唐演义']
  },
  {
    id: 'cuihao',
    name: '崔颢',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '崔',
    desc: '唐代诗人，汴州人。',
    works: ['黄鹤楼']
  },
  {
    id: 'cuihu',
    name: '崔护',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '崔',
    desc: '唐代诗人，字殷功。',
    works: ['题都城南庄']
  },
  {
    id: 'dufu',
    name: '杜甫',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '杜',
    desc: '唐代伟大的现实主义诗人，字子美，自号少陵野老。',
    works: ['兵车行', '春望', '春望']
  },
  {
    id: 'dumu',
    name: '杜牧',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '杜',
    desc: '唐代诗人，字牧之，号樊川居士。',
    works: ['泊秦淮', '赤壁', '江南春']
  },
  {
    id: 'fanzhongyan',
    name: '范仲淹',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '范',
    desc: '北宋杰出的思想家、政治家、文学家。',
    works: ['岳阳楼记']
  },
  {
    id: 'fengmenglong',
    name: '冯梦龙',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '冯',
    desc: '明代文学家、戏曲家，字犹龙，号墨憨斋主人。',
    works: ['东周列国志']
  },
  {
    id: 'gaoshi',
    name: '高适',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '高',
    desc: '唐代边塞诗人，字达夫，一字仲武。',
    works: ['别董大', '除夜作']
  },
  {
    id: 'gongzizhen',
    name: '龚自珍',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '龚',
    desc: '清代思想家、诗人、文学家。',
    works: ['己亥杂诗']
  },
  {
    id: 'guanhanging',
    name: '关汉卿',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '关',
    desc: '元代杂剧奠基人，元曲四大家之首。',
    works: ['窦娥冤']
  },
  {
    id: 'hanyi',
    name: '韩翃',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '韩',
    desc: '唐代诗人，字君平，大历十才子之一。',
    works: ['寒食']
  },
  {
    id: 'hanyu',
    name: '韩愈',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '韩',
    desc: '唐代杰出的文学家、思想家、哲学家。',
    works: ['马说', '马说', '师说']
  }
]

const activeDynasty = ref('all')
const activeSort = ref('name')
const currentPage = ref(1)
const pageSize = 16

const filteredAuthors = computed(() => {
  let result = [...authors]
  
  if (activeDynasty.value !== 'all') {
    result = result.filter(a => a.dynastyId === activeDynasty.value)
  }
  
  if (activeSort.value === 'alpha') {
    result.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))
  }
  
  return result
})

const totalPages = computed(() => Math.ceil(filteredAuthors.value.length / pageSize))

const paginatedAuthors = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredAuthors.value.slice(start, start + pageSize)
})

function goPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

function filterDynasty(id) {
  activeDynasty.value = id
  currentPage.value = 1
}
</script>

<template>
  <div class="authors-page">
    <div class="authors-header">
      <h1 class="page-title">作者</h1>
      <p class="page-subtitle">领略古典文学大家的创作风采</p>
    </div>
    
    <div class="filter-bar">
      <div class="filter-row">
        <span class="filter-label">朝代筛选：</span>
        <div class="filter-options">
          <button
            v-for="d in dynasties"
            :key="d.id"
            class="filter-btn"
            :class="{ active: activeDynasty === d.id }"
            @click="filterDynasty(d.id)"
          >
            {{ d.name }}
          </button>
        </div>
      </div>
      <div class="filter-row">
        <span class="filter-label">排序：</span>
        <div class="filter-options">
          <button
            v-for="s in sortModes"
            :key="s.id"
            class="filter-btn"
            :class="{ active: activeSort === s.id }"
            @click="activeSort = s.id"
          >
            {{ s.name }}
          </button>
        </div>
      </div>
    </div>
    
    <div class="authors-grid">
      <a
        v-for="author in paginatedAuthors"
        :key="author.id"
        :href="`/authors/${author.id}`"
        class="author-card"
      >
        <div class="author-avatar">{{ author.avatar }}</div>
        <div class="author-info">
          <h3 class="author-name">{{ author.name }}</h3>
          <span class="author-dynasty">{{ author.dynasty }}</span>
          <p class="author-desc">{{ author.desc }}</p>
          <div class="author-works">
            <span v-for="work in author.works" :key="work" class="work-tag">{{ work }}</span>
          </div>
        </div>
      </a>
    </div>
    
    <div class="pagination" v-if="totalPages > 1">
      <button class="page-btn" :disabled="currentPage === 1" @click="goPage(currentPage - 1)">上一页</button>
      <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
      <button class="page-btn" :disabled="currentPage === totalPages" @click="goPage(currentPage + 1)">下一页</button>
    </div>
  </div>
</template>

<style scoped>
.authors-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 0;
}

.authors-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.page-subtitle {
  font-size: 15px;
  color: var(--vp-c-text-3);
  margin: 0;
}

.filter-bar {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 20px 24px;
  margin-bottom: 32px;
}

.filter-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.filter-row:last-child {
  margin-bottom: 0;
}

.filter-label {
  font-size: 13px;
  color: var(--vp-c-text-3);
  flex-shrink: 0;
  padding-top: 6px;
}

.filter-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-btn {
  padding: 5px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.filter-btn:hover {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
}

.filter-btn.active {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.authors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.author-card {
  display: flex;
  gap: 14px;
  padding: 20px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.author-card:hover {
  box-shadow: 0 4px 16px rgba(133, 102, 46, 0.1);
  border-color: var(--vp-c-brand-3);
  transform: translateY(-1px);
}

.dark .author-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--vp-c-brand-3);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  flex-shrink: 0;
}

.dark .author-avatar {
  color: #1a1a1a;
}

.author-info {
  flex: 1;
  min-width: 0;
}

.author-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 4px 0;
}

.author-dynasty {
  font-size: 12px;
  color: var(--vp-c-text-3);
  display: block;
  margin-bottom: 8px;
}

.author-desc {
  font-size: 12px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.author-works {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.work-tag {
  font-size: 11px;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid var(--vp-c-divider);
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px 0;
}

.page-btn {
  padding: 8px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-2);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.page-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
}

.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.page-info {
  font-size: 14px;
  color: var(--vp-c-text-3);
}

@media (max-width: 960px) {
  .authors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 960px) {
  .authors-page {
    padding: 24px 16px;
  }
}

@media (max-width: 640px) {
  .authors-page {
    padding: 16px 12px;
  }

  .authors-grid {
    grid-template-columns: 1fr;
  }

  .filter-bar {
    padding: 16px;
  }

  .filter-row {
    flex-direction: column;
    gap: 8px;
  }

  .filter-label {
    padding-top: 0;
  }
}
</style>
