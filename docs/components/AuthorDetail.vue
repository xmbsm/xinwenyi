<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute, useData } from 'vitepress'
import { books as allBooks } from '../data/books.js'

const route = useRoute()
const { frontmatter } = useData()

const authors = [
  {
    id: 'baixingjian',
    name: '白居易',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '白',
    desc: '唐代伟大的现实主义诗人，字乐天，号香山居士。与元稹并称"元白"，与刘禹锡并称"刘白"。白居易的诗歌题材广泛，形式多样，语言平易通俗，有"诗魔"和"诗王"之称。',
    works: ['长恨歌', '琵琶行', '赋得古原草送别']
  },
  {
    id: 'baipu',
    name: '白朴',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '白',
    desc: '元代著名戏曲作家，元曲四大家之一。字太素，号兰谷。代表作有《唐明皇秋夜梧桐雨》《裴少俊墙头马上》《董月英花月东墙记》等。',
    works: ['沉醉东风·渔夫', '天净沙·秋', '寄生草·饮']
  },
  {
    id: 'bangu',
    name: '班固',
    dynasty: '东汉',
    dynastyId: 'donghan',
    avatar: '班',
    desc: '班固，字孟坚，东汉著名的史学家、文学家。著有《汉书》，是中国第一部纪传体断代史。',
    works: ['汉书']
  },
  {
    id: 'caocao',
    name: '曹操',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '曹',
    desc: '东汉末年杰出的政治家、军事家、文学家，三国中曹魏政权的奠基人。字孟德，小名阿瞒。曹操精兵法，善诗文，其诗气魄雄伟、慷慨悲凉，开创建安文学的新风气。',
    works: ['短歌行', '龟虽寿', '蒿里行']
  },
  {
    id: 'caoxueqin',
    name: '曹雪芹',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '曹',
    desc: '清代小说家，名霑，字梦阮，号雪芹，又号芹溪。出身于一个"百年望族"的大官僚地主家庭，后因家庭的衰败而饱尝了人生的辛酸。在人生的最后阶段，他以坚韧不拔的毅力，历经十年创作了《红楼梦》。',
    works: ['红楼梦']
  },
  {
    id: 'caozhi',
    name: '曹植',
    dynasty: '魏代',
    dynastyId: 'weidai',
    avatar: '曹',
    desc: '三国时期著名文学家，曹操之子，建安文学代表人物。字子建，后人因他文学上的造诣而将他与曹操、曹丕合称为"三曹"。',
    works: ['七步诗', '洛神赋', '白马篇']
  },
  {
    id: 'chenyuyi',
    name: '陈与义',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '陈',
    desc: '宋代诗人，字去非，号简斋。其诗风清新淡雅，是江西诗派的重要代表人物之一。',
    works: ['临江仙·夜登小阁忆洛中旧游']
  },
  {
    id: 'chenzian',
    name: '陈子昂',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '陈',
    desc: '唐代文学家，字伯玉，初唐诗文革新人物之一。其诗风骨峥嵘，寓意深远，苍劲有力，有《陈伯玉集》传世。',
    works: ['登幽州台歌']
  },
  {
    id: 'churenhuo',
    name: '褚人获',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '褚',
    desc: '清代小说家，字稼轩，号石农。他博学多才，著有《隋唐演义》《坚瓠集》等作品。',
    works: ['隋唐演义']
  },
  {
    id: 'cuihao',
    name: '崔颢',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '崔',
    desc: '唐代诗人，汴州人。开元十一年进士，官至司勋员外郎。其《黄鹤楼》诗被李白赞为"眼前有景道不得，崔颢题诗在上头"。',
    works: ['黄鹤楼']
  },
  {
    id: 'cuihu',
    name: '崔护',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '崔',
    desc: '唐代诗人，字殷功。其诗风格清新自然，以《题都城南庄》最为著名。',
    works: ['题都城南庄']
  },
  {
    id: 'dufu',
    name: '杜甫',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '杜',
    desc: '唐代伟大的现实主义诗人，字子美，自号少陵野老。杜甫在中国古典诗歌中的影响非常深远，被后人称为"诗圣"，他的诗被称为"诗史"。',
    works: ['兵车行', '春望', '茅屋为秋风所破歌']
  },
  {
    id: 'dumu',
    name: '杜牧',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '杜',
    desc: '唐代诗人，字牧之，号樊川居士。杜牧人称"小杜"，以别于杜甫。与李商隐并称"小李杜"。其诗风格俊爽清丽，独树一帜。',
    works: ['泊秦淮', '赤壁', '江南春']
  },
  {
    id: 'fanzhongyan',
    name: '范仲淹',
    dynasty: '宋代',
    dynastyId: 'songdai',
    avatar: '范',
    desc: '北宋杰出的思想家、政治家、文学家。字希文，谥号"文正"。其"先天下之忧而忧，后天下之乐而乐"思想为千古名句。',
    works: ['岳阳楼记']
  },
  {
    id: 'fengmenglong',
    name: '冯梦龙',
    dynasty: '明代',
    dynastyId: 'mingdai',
    avatar: '冯',
    desc: '明代文学家、戏曲家，字犹龙，号墨憨斋主人。他辑有话本集《喻世明言》《警世通言》《醒世恒言》，世称"三言"。',
    works: ['东周列国志']
  },
  {
    id: 'gaoshi',
    name: '高适',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '高',
    desc: '唐代边塞诗人，字达夫，一字仲武。与岑参并称"高岑"，其诗气势雄浑，格调高昂，是盛唐边塞诗派的代表人物。',
    works: ['别董大', '除夜作']
  },
  {
    id: 'gongzizhen',
    name: '龚自珍',
    dynasty: '清代',
    dynastyId: 'qingdai',
    avatar: '龚',
    desc: '清代思想家、诗人、文学家。字璱人，号定庵。其诗文主张"更法""改图"，揭露清统治者的腐朽，洋溢着爱国热情。',
    works: ['己亥杂诗']
  },
  {
    id: 'guanhanging',
    name: '关汉卿',
    dynasty: '元代',
    dynastyId: 'yuandai',
    avatar: '关',
    desc: '元代杂剧奠基人，元曲四大家之首。号已斋叟。他一生创作杂剧六十余种，现存十八种，以《窦娥冤》最为著名。',
    works: ['窦娥冤']
  },
  {
    id: 'hanyi',
    name: '韩翃',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '韩',
    desc: '唐代诗人，字君平，大历十才子之一。其诗笔法轻巧，写景别致，以《寒食》诗最为著名。',
    works: ['寒食']
  },
  {
    id: 'hanyu',
    name: '韩愈',
    dynasty: '唐代',
    dynastyId: 'tangdai',
    avatar: '韩',
    desc: '唐代杰出的文学家、思想家、哲学家。字退之，河南河阳人，世称"韩昌黎"。他是唐代古文运动的倡导者，被后人尊为"唐宋八大家"之首。',
    works: ['马说', '师说', '早春呈水部张十八员外']
  }
]

const authorId = computed(() => {
  const path = route.path
  // 匹配 /authors/caocao.html 或 /authors/caocao
  const match = path.match(/\/authors\/([^/]+?)(?:\.html)?$/)
  return match ? match[1] : ''
})

const author = computed(() => {
  return authors.find(a => a.id === authorId.value)
})

// 设置页面标题
function updateTitle() {
  if (author.value && typeof document !== 'undefined') {
    document.title = `${author.value.name} | 新文艺`
  }
}

watch(author, updateTitle, { immediate: true })
onMounted(updateTitle)

const authorBooks = computed(() => {
  if (!author.value) return []
  return allBooks.filter(book => book.author === author.value.name)
})

function goBack() {
  window.history.back()
}
</script>

<template>
  <div class="author-detail-page">
    <div v-if="author" class="author-detail">
      <div class="author-header">
        <button class="back-btn" @click="goBack">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="none" stroke="currentColor" stroke-width="2" d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          返回
        </button>
      </div>

      <div class="author-profile">
        <div class="author-avatar-large">{{ author.avatar }}</div>
        <div class="author-info-main">
          <h1 class="author-name-large">{{ author.name }}</h1>
          <span class="author-dynasty-badge">{{ author.dynasty }}</span>
          <p class="author-desc-full">{{ author.desc }}</p>
        </div>
      </div>

      <div class="author-sections">
        <div class="section">
          <h2 class="section-title">
            <span class="section-icon">📚</span>
            代表作品
          </h2>
          <div class="works-list">
            <span v-for="work in author.works" :key="work" class="work-tag-large">{{ work }}</span>
          </div>
        </div>

        <div class="section" v-if="authorBooks.length > 0">
          <h2 class="section-title">
            <span class="section-icon">📖</span>
            本站收录
          </h2>
          <div class="books-grid">
            <a
              v-for="book in authorBooks"
              :key="book.id"
              :href="`/${book.category}/${book.id}`"
              class="book-card"
            >
              <div class="book-category">{{ book.categoryName }}</div>
              <h3 class="book-title">{{ book.title }}</h3>
              <p class="book-desc">{{ book.desc }}</p>
              <div class="book-tags">
                <span v-for="tag in book.tags" :key="tag" class="book-tag">{{ tag }}</span>
              </div>
            </a>
          </div>
        </div>

        <div class="section empty-section" v-else>
          <h2 class="section-title">
            <span class="section-icon">📖</span>
            本站收录
          </h2>
          <p class="empty-text">暂无收录该作者的作品，敬请期待。</p>
        </div>
      </div>
    </div>

    <div v-else class="not-found">
      <div class="not-found-icon">🔍</div>
      <h2>未找到该作者</h2>
      <p>抱歉，您查找的作者不存在。</p>
      <a href="/authors" class="back-link">返回作者列表</a>
    </div>
  </div>
</template>

<style scoped>
.author-detail-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 0;
}

.author-header {
  margin-bottom: 32px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-2);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.back-btn:hover {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
}

.author-profile {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-bottom: 48px;
  padding: 32px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.author-avatar-large {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--vp-c-brand-3);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 600;
  flex-shrink: 0;
}

.dark .author-avatar-large {
  color: #1a1a1a;
}

.author-info-main {
  flex: 1;
}

.author-name-large {
  font-size: 32px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.author-dynasty-badge {
  display: inline-block;
  padding: 4px 16px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 14px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.author-desc-full {
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  margin: 0;
}

.author-sections {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section {
  padding: 28px 32px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.section-icon {
  font-size: 20px;
}

.works-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.work-tag-large {
  padding: 8px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
}

.work-tag-large:hover {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.book-card {
  padding: 20px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.book-card:hover {
  box-shadow: 0 4px 16px rgba(133, 102, 46, 0.1);
  border-color: var(--vp-c-brand-3);
  transform: translateY(-2px);
}

.dark .book-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.book-category {
  font-size: 12px;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
  font-weight: 500;
}

.book-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 8px 0;
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
}

.book-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.book-tag {
  font-size: 11px;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid var(--vp-c-divider);
}

.empty-section {
  text-align: center;
}

.empty-text {
  font-size: 14px;
  color: var(--vp-c-text-3);
  margin: 0;
}

.not-found {
  text-align: center;
  padding: 80px 24px;
}

.not-found-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.not-found h2 {
  font-size: 24px;
  color: var(--vp-c-text-1);
  margin: 0 0 8px 0;
}

.not-found p {
  font-size: 14px;
  color: var(--vp-c-text-3);
  margin: 0 0 24px 0;
}

.back-link {
  display: inline-block;
  padding: 10px 24px;
  background: var(--vp-c-brand-3);
  color: #fff !important;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  transition: background 0.2s ease;
}

.back-link:hover {
  background: var(--vp-c-brand-2);
}

@media (max-width: 960px) {
  .author-detail-page {
    padding: 24px 16px;
  }
}

@media (max-width: 640px) {
  .author-detail-page {
    padding: 16px 12px;
  }

  .author-profile {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
  }

  .author-name-large {
    font-size: 24px;
  }

  .books-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 20px;
  }
}
</style>
