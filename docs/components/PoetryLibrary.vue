<script setup>
import { ref, computed } from 'vue'

const categories = [
  { id: 'all', name: '全部' },
  { id: 'tangshi', name: '唐诗' },
  { id: 'songci', name: '宋词' },
  { id: 'yuanqu', name: '元曲' },
  { id: 'chuci', name: '楚辞' },
  { id: 'shijing', name: '诗经' },
  { id: 'mingshi', name: '明诗' },
  { id: 'qingshi', name: '清诗' },
  { id: 'qiyan-jueju', name: '七言绝句' },
  { id: 'qiyan-gushi', name: '七言古诗' },
  { id: 'xushishi', name: '叙事诗' },
  { id: 'yuefu', name: '乐府' },
  { id: 'wuyan-lvshi', name: '五言律诗' },
  { id: 'wuyan-jueju', name: '五言绝句' },
  { id: 'qiyan-lvshi', name: '七言律诗' },
  { id: 'wuyan-gushi', name: '五言古诗' },
  { id: 'gexingti', name: '歌行体' },
  { id: 'gutishi', name: '古体诗' },
  { id: 'hanweishi', name: '汉魏诗' },
  { id: 'sanqu', name: '散曲' }
]

const poems = [
  {
    id: 'tangshi/1',
    title: '静夜思',
    author: '李白',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    tags: ['五言绝句', '思乡']
  },
  {
    id: 'tangshi/2',
    title: '春晓',
    author: '孟浩然',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
    tags: ['五言绝句', '春景']
  },
  {
    id: 'tangshi/3',
    title: '登鹳雀楼',
    author: '王之涣',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
    tags: ['五言绝句', '励志']
  },
  {
    id: 'tangshi/4',
    title: '相思',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '红豆生南国，春来发几枝。愿君多采撷，此物最相思。',
    tags: ['五言绝句', '爱情']
  },
  {
    id: 'tangshi/5',
    title: '江雪',
    author: '柳宗元',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。',
    tags: ['五言绝句', '冬景']
  },
  {
    id: 'tangshi/6',
    title: '春望',
    author: '杜甫',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。',
    tags: ['五言律诗', '爱国']
  },
  {
    id: 'tangshi/7',
    title: '望庐山瀑布',
    author: '李白',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。',
    tags: ['七言绝句', '山水']
  },
  {
    id: 'tangshi/8',
    title: '早发白帝城',
    author: '李白',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。',
    tags: ['七言绝句', '行旅']
  },
  {
    id: 'tangshi/9',
    title: '枫桥夜泊',
    author: '张继',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。',
    tags: ['七言绝句', '羁旅']
  },
  {
    id: 'tangshi/10',
    title: '出塞',
    author: '王昌龄',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
    tags: ['七言绝句', '边塞']
  },
  {
    id: 'tangshi/11',
    title: '凉州词',
    author: '王之涣',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '黄河远上白云间，一片孤城万仞山。羌笛何须怨杨柳，春风不度玉门关。',
    tags: ['七言绝句', '边塞']
  },
  {
    id: 'tangshi/12',
    title: '送元二使安西',
    author: '王维',
    dynasty: '唐',
    category: 'tangshi',
    categoryName: '唐诗',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。',
    tags: ['七言绝句', '送别']
  },
  {
    id: 'songci/1',
    title: '水调歌头·明月几时有',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。',
    tags: ['豪放派', '中秋']
  },
  {
    id: 'songci/2',
    title: '念奴娇·赤壁怀古',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。',
    tags: ['豪放派', '怀古']
  },
  {
    id: 'songci/3',
    title: '声声慢·寻寻觅觅',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。',
    tags: ['婉约派', '愁思']
  },
  {
    id: 'songci/4',
    title: '如梦令·昨夜雨疏风骤',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '昨夜雨疏风骤，浓睡不消残酒。试问卷帘人，却道海棠依旧。',
    tags: ['婉约派', '春景']
  },
  {
    id: 'songci/5',
    title: '虞美人·春花秋月何时了',
    author: '李煜',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。',
    tags: ['婉约派', '亡国之痛']
  },
  {
    id: 'songci/6',
    title: '雨霖铃·寒蝉凄切',
    author: '柳永',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。',
    tags: ['婉约派', '离别']
  },
  {
    id: 'songci/7',
    title: '青玉案·元夕',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '东风夜放花千树，更吹落、星如雨。宝马雕车香满路。',
    tags: ['豪放派', '元宵']
  },
  {
    id: 'songci/8',
    title: '一剪梅·红藕香残玉簟秋',
    author: '李清照',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '红藕香残玉簟秋。轻解罗裳，独上兰舟。云中谁寄锦书来？',
    tags: ['婉约派', '相思']
  },
  {
    id: 'songci/9',
    title: '破阵子·为陈同甫赋壮词以寄之',
    author: '辛弃疾',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '醉里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声。',
    tags: ['豪放派', '军旅']
  },
  {
    id: 'songci/10',
    title: '江城子·密州出猎',
    author: '苏轼',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。',
    tags: ['豪放派', '出猎']
  },
  {
    id: 'songci/11',
    title: '满江红·写怀',
    author: '岳飞',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '怒发冲冠，凭栏处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。',
    tags: ['豪放派', '爱国']
  },
  {
    id: 'songci/12',
    title: '卜算子·咏梅',
    author: '陆游',
    dynasty: '宋',
    category: 'songci',
    categoryName: '宋词',
    content: '驿外断桥边，寂寞开无主。已是黄昏独自愁，更着风和雨。',
    tags: ['婉约派', '咏物']
  },
  {
    id: 'yuanqu/1',
    title: '天净沙·秋思',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '枯藤老树昏鸦，小桥流水人家，古道西风瘦马。夕阳西下，断肠人在天涯。',
    tags: ['小令', '秋思']
  },
  {
    id: 'yuanqu/2',
    title: '山坡羊·潼关怀古',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '峰峦如聚，波涛如怒，山河表里潼关路。望西都，意踌躇。',
    tags: ['散曲', '怀古']
  },
  {
    id: 'yuanqu/3',
    title: '天净沙·秋',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '孤村落日残霞，轻烟老树寒鸦，一点飞鸿影下。青山绿水，白草红叶黄花。',
    tags: ['小令', '秋景']
  },
  {
    id: 'yuanqu/4',
    title: '四块玉·别情',
    author: '关汉卿',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '自送别，心难舍，一点相思几时绝？凭阑袖拂杨花雪。',
    tags: ['散曲', '离别']
  },
  {
    id: 'yuanqu/5',
    title: '沉醉东风·渔夫',
    author: '白朴',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '黄芦岸白蘋渡口，绿柳堤红蓼滩头。虽无刎颈交，却有忘机友。',
    tags: ['散曲', '隐逸']
  },
  {
    id: 'yuanqu/6',
    title: '大德歌·春',
    author: '关汉卿',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '子规啼，不如归，道是春归人未归。几日添憔悴，虚飘飘柳絮飞。',
    tags: ['散曲', '春思']
  },
  {
    id: 'yuanqu/7',
    title: '寿阳曲·远浦帆归',
    author: '马致远',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '夕阳下，酒旆闲，两三航未曾着岸。落花水香茅舍晚，断桥头卖鱼人散。',
    tags: ['小令', '晚归']
  },
  {
    id: 'yuanqu/8',
    title: '蟾宫曲·春情',
    author: '徐再思',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '平生不会相思，才会相思，便害相思。身似浮云，心如飞絮，气若游丝。',
    tags: ['散曲', '相思']
  },
  {
    id: 'yuanqu/9',
    title: '山坡羊·骊山怀古',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。',
    tags: ['散曲', '怀古']
  },
  {
    id: 'yuanqu/10',
    title: '清江引·秋怀',
    author: '张可久',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '西风信来家万里，问我归期未？雁啼红叶天，人醉黄花地，芭蕉雨声秋梦里。',
    tags: ['散曲', '思乡']
  },
  {
    id: 'yuanqu/11',
    title: '殿前欢·对菊自叹',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '对菊自叹，可怜秋，一帘疏雨暗西楼。黄花庭院，青灯夜雨，白发秋风。',
    tags: ['散曲', '悲秋']
  },
  {
    id: 'yuanqu/12',
    title: '水仙子·咏江南',
    author: '张养浩',
    dynasty: '元',
    category: 'yuanqu',
    categoryName: '元曲',
    content: '一江烟水照晴岚，两岸人家接画檐，芰荷丛一段秋光淡。',
    tags: ['散曲', '江南']
  },
  {
    id: 'shijing/1',
    title: '关雎',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。',
    tags: ['国风', '爱情']
  },
  {
    id: 'shijing/2',
    title: '蒹葭',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。',
    tags: ['国风', '思慕']
  },
  {
    id: 'shijing/3',
    title: '桃夭',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '桃之夭夭，灼灼其华。之子于归，宜其室家。',
    tags: ['国风', '婚嫁']
  },
  {
    id: 'shijing/4',
    title: '氓',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '氓之蚩蚩，抱布贸丝。匪来贸丝，来即我谋。',
    tags: ['国风', '弃妇']
  },
  {
    id: 'shijing/5',
    title: '采薇',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '采薇采薇，薇亦作止。曰归曰归，岁亦莫止。',
    tags: ['小雅', '征戍']
  },
  {
    id: 'shijing/6',
    title: '鹿鸣',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。',
    tags: ['小雅', '宴饮']
  },
  {
    id: 'shijing/7',
    title: '静女',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '静女其姝，俟我于城隅。爱而不见，搔首踟蹰。',
    tags: ['国风', '爱情']
  },
  {
    id: 'shijing/8',
    title: '木瓜',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '投我以木瓜，报之以琼琚。匪报也，永以为好也。',
    tags: ['国风', '友谊']
  },
  {
    id: 'shijing/9',
    title: '硕鼠',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '硕鼠硕鼠，无食我黍！三岁贯女，莫我肯顾。',
    tags: ['国风', '讽刺']
  },
  {
    id: 'shijing/10',
    title: '伐檀',
    author: '佚名',
    dynasty: '先秦',
    category: 'shijing',
    categoryName: '诗经',
    content: '坎坎伐檀兮，置之河之干兮，河水清且涟猗。',
    tags: ['国风', '劳动']
  },
  {
    id: 'chuci/1',
    title: '离骚',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '帝高阳之苗裔兮，朕皇考曰伯庸。摄提贞于孟陬兮，惟庚寅吾以降。',
    tags: ['长篇', '抒情']
  },
  {
    id: 'chuci/2',
    title: '九歌·湘夫人',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '帝子降兮北渚，目眇眇兮愁予。袅袅兮秋风，洞庭波兮木叶下。',
    tags: ['九歌', '祭神']
  },
  {
    id: 'chuci/3',
    title: '九歌·山鬼',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '若有人兮山之阿，被薜荔兮带女萝。既含睇兮又宜笑，子慕予兮善窈窕。',
    tags: ['九歌', '祭神']
  },
  {
    id: 'chuci/4',
    title: '天问',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '曰：遂古之初，谁传道之？上下未形，何由考之？',
    tags: ['长篇', '问天']
  },
  {
    id: 'chuci/5',
    title: '九歌·国殇',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '操吴戈兮被犀甲，车错毂兮短兵接。旌蔽日兮敌若云，矢交坠兮士争先。',
    tags: ['九歌', '祭祀']
  },
  {
    id: 'chuci/6',
    title: '九歌·东君',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '暾将出兮东方，照吾槛兮扶桑。抚余马兮安驱，夜皎皎兮既明。',
    tags: ['九歌', '祭神']
  },
  {
    id: 'chuci/7',
    title: '九章·橘颂',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '后皇嘉树，橘徕服兮。受命不迁，生南国兮。深固难徙，更壹志兮。',
    tags: ['九章', '咏物']
  },
  {
    id: 'chuci/8',
    title: '招魂',
    author: '屈原',
    dynasty: '战国',
    category: 'chuci',
    categoryName: '楚辞',
    content: '朕幼清以廉洁兮，身服义而未沫。主此盛德兮，牵于俗而芜秽。',
    tags: ['长篇', '招魂']
  }
]

const activeCategory = ref('all')
const currentPage = ref(1)
const pageSize = 20

const filteredPoems = computed(() => {
  if (activeCategory.value === 'all') {
    return poems
  }
  return poems.filter(poem => poem.category === activeCategory.value)
})

const totalCount = computed(() => filteredPoems.value.length)
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize))

const paginatedPoems = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return filteredPoems.value.slice(start, end)
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

function getPoemLink(poem) {
  return `/books/shici/${poem.id}`
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
        <span class="header-count">共 {{ totalCount }} 首</span>
      </div>

      <div class="poems-grid">
        <a
          v-for="poem in paginatedPoems"
          :key="poem.id"
          :href="getPoemLink(poem)"
          class="poem-card"
        >
          <div class="poem-cover">
            <div class="cover-spine" :style="{ backgroundColor: getCoverColor(poem.title) }"></div>
            <div class="cover-body">
              <div class="cover-circle"></div>
            </div>
          </div>
          <div class="poem-info">
            <h3 class="poem-title">{{ poem.title }}</h3>
            <div class="poem-author">[{{ poem.dynasty }}] {{ poem.author }}</div>
            <p class="poem-content">{{ poem.content }}</p>
            <div class="poem-tags">
              <span v-for="tag in poem.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </a>
      </div>

      <div v-if="filteredPoems.length === 0" class="empty-state">
        <p>该分类下暂无诗词</p>
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

.poems-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.poem-card {
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

.poem-card:hover {
  box-shadow: 0 4px 16px rgba(133, 102, 46, 0.1);
  border-color: var(--vp-c-brand-3);
  transform: translateY(-1px);
}

.dark .poem-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.poem-cover {
  width: 72px;
  height: 96px;
  flex-shrink: 0;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  background: #f5f0e8;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.dark .poem-cover {
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

.poem-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.poem-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 4px 0;
  line-height: 1.4;
}

.poem-author {
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin-bottom: 8px;
}

.poem-content {
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

.poem-tags {
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

  .poems-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .library-page {
    padding: 16px 12px;
  }

  .poem-card {
    padding: 16px;
  }

  .poem-cover {
    width: 60px;
    height: 80px;
  }

  .poem-title {
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
