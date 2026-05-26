<template>
  <div class="hitokoto-page">
    <div class="hitokoto-container">
      <div class="hitokoto-tag">原创</div>
      <div class="hitokoto-content" :class="{ 'is-loading': loading }">
        {{ current.content }}
      </div>
      <div class="hitokoto-source">
        <span class="divider">——</span>
        <span class="source-name">「{{ current.source }}」</span>
      </div>
      <div class="hitokoto-actions">
        <button class="btn-copy" @click="copyText">
          <span v-if="copied">已复制</span>
          <span v-else>复制句子</span>
        </button>
        <button class="btn-refresh" @click="refresh" :disabled="loading">
          <svg viewBox="0 0 24 24" width="18" height="18" :class="{ 'spin': loading }">
            <path fill="none" stroke="currentColor" stroke-width="2" d="M23 4v6h-6M1 20v-6h6"/>
            <path fill="none" stroke="currentColor" stroke-width="2" d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(false)
const copied = ref(false)

const quotes = [
  { content: '山有木兮木有枝，心悦君兮君不知。', source: '越人歌' },
  { content: '人生若只如初见，何事秋风悲画扇。', source: '纳兰性德·木兰花令' },
  { content: '曾经沧海难为水，除却巫山不是云。', source: '元稹·离思' },
  { content: '执子之手，与子偕老。', source: '诗经·邶风' },
  { content: '愿得一心人，白头不相离。', source: '卓文君·白头吟' },
  { content: '身无彩凤双飞翼，心有灵犀一点通。', source: '李商隐·无题' },
  { content: '两情若是久长时，又岂在朝朝暮暮。', source: '秦观·鹊桥仙' },
  { content: '问世间，情为何物，直教生死相许。', source: '元好问·摸鱼儿' },
  { content: '衣带渐宽终不悔，为伊消得人憔悴。', source: '柳永·蝶恋花' },
  { content: '众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。', source: '辛弃疾·青玉案' },
  { content: '采菊东篱下，悠然见南山。', source: '陶渊明·饮酒' },
  { content: '大漠孤烟直，长河落日圆。', source: '王维·使至塞上' },
  { content: '落霞与孤鹜齐飞，秋水共长天一色。', source: '王勃·滕王阁序' },
  { content: '春江潮水连海平，海上明月共潮生。', source: '张若虚·春江花月夜' },
  { content: '天生我材必有用，千金散尽还复来。', source: '李白·将进酒' },
  { content: '长风破浪会有时，直挂云帆济沧海。', source: '李白·行路难' },
  { content: '会当凌绝顶，一览众山小。', source: '杜甫·望岳' },
  { content: '海内存知己，天涯若比邻。', source: '王勃·送杜少府之任蜀州' },
  { content: '劝君更尽一杯酒，西出阳关无故人。', source: '王维·送元二使安西' },
  { content: '停车坐爱枫林晚，霜叶红于二月花。', source: '杜牧·山行' }
]

const current = ref({ content: '', source: '' })

let lastIndex = -1

function getRandom() {
  let index
  do {
    index = Math.floor(Math.random() * quotes.length)
  } while (index === lastIndex && quotes.length > 1)
  lastIndex = index
  return quotes[index]
}

function refresh() {
  loading.value = true
  setTimeout(() => {
    current.value = getRandom()
    loading.value = false
  }, 400)
}

async function copyText() {
  const text = `${current.value.content} ——「${current.value.source}」`
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
  } catch (err) {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
  }
}

onMounted(() => {
  current.value = getRandom()
})
</script>

<style scoped>
.hitokoto-page {
  min-height: calc(100vh - 64px - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.hitokoto-container {
  max-width: 720px;
  width: 100%;
  text-align: center;
}

.hitokoto-tag {
  display: inline-block;
  font-size: 13px;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 4px 14px;
  margin-bottom: 48px;
  letter-spacing: 2px;
}

.hitokoto-content {
  font-size: 28px;
  line-height: 1.8;
  color: var(--vp-c-text-1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.hitokoto-content.is-loading {
  opacity: 0.3;
}

.hitokoto-source {
  margin-top: 32px;
  font-size: 15px;
  color: var(--vp-c-text-3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.hitokoto-source .divider {
  letter-spacing: 1px;
}

.hitokoto-source .source-name {
  color: var(--vp-c-brand-2);
}

.hitokoto-actions {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.btn-copy {
  background: var(--vp-c-brand-3);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 28px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.btn-copy:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

.btn-refresh {
  width: 40px;
  height: 40px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.btn-refresh:hover {
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-2);
}

.btn-refresh:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-refresh svg {
  transition: transform 0.5s ease;
}

.btn-refresh svg.spin {
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 640px) {
  .hitokoto-content {
    font-size: 22px;
  }
  
  .hitokoto-tag {
    margin-bottom: 32px;
  }
  
  .hitokoto-source {
    margin-top: 24px;
  }
  
  .hitokoto-actions {
    margin-top: 32px;
  }
}
</style>
