<template>
  <div class="hero-section-custom">
    <canvas ref="canvasRef" class="particle-canvas" @click="handleCanvasClick"></canvas>
    <div class="hero-content">
      <h1 class="hero-title">观古阅典</h1>
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="请输入要搜索的关键词"
          @keyup.enter="handleSearch"
        />
        <div class="search-options">
          <select v-model="searchType" class="search-select">
            <option value="all">高级检索</option>
            <option value="title">书名</option>
            <option value="author">作者</option>
            <option value="content">内容</option>
          </select>
          <button class="search-btn" @click="handleSearch">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="hero-stats">
        共收录 <span class="stats-num">278</span> 部书籍，<a href="/library" class="stats-link">查看书库 →</a>
      </div>
      <div class="hero-hint">
        <span class="hint-icon">✨</span>
        <span>点击周围的光点，发现经典</span>
      </div>
    </div>
    <div class="scroll-indicator" @click="scrollDown">
      <span class="scroll-text">向下滚动</span>
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
    </div>

    <div v-if="showBookModal" class="book-modal-overlay" @click="closeBookModal">
      <div class="book-modal" @click.stop>
        <button class="modal-close" @click="closeBookModal">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="none" stroke="currentColor" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div class="modal-tag">{{ randomBook.category }}</div>
        <h2 class="modal-title">{{ randomBook.title }}</h2>
        <p class="modal-meta">{{ randomBook.dynasty }} · {{ randomBook.author }}</p>
        <div class="modal-desc">{{ randomBook.description }}</div>
        <a :href="randomBook.link" class="modal-read-btn">阅读全文 →</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
const searchQuery = ref('')
const searchType = ref('all')
const showBookModal = ref(false)
const randomBook = ref({})

let animationId = null
let particles = []
let time = 0

import { books as allBooks } from '../data/books.js'

const allPoems = [
  { id: 'tangshi/1', title: '静夜思', author: '李白', dynasty: '唐', category: 'tangshi', categoryName: '唐诗', desc: '床前明月光，疑是地上霜。举头望明月，低头思故乡。', link: '/books/shici/tangshi/1' },
  { id: 'tangshi/2', title: '春晓', author: '孟浩然', dynasty: '唐', category: 'tangshi', categoryName: '唐诗', desc: '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。', link: '/books/shici/tangshi/2' },
  { id: 'tangshi/3', title: '登鹳雀楼', author: '王之涣', dynasty: '唐', category: 'tangshi', categoryName: '唐诗', desc: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。', link: '/books/shici/tangshi/3' },
  { id: 'songci/1', title: '念奴娇·赤壁怀古', author: '苏轼', dynasty: '宋', category: 'songci', categoryName: '宋词', desc: '大江东去，浪淘尽，千古风流人物。', link: '/books/shici/songci/1' },
  { id: 'songci/2', title: '水调歌头·明月几时有', author: '苏轼', dynasty: '宋', category: 'songci', categoryName: '宋词', desc: '明月几时有？把酒问青天。', link: '/books/shici/songci/2' },
  { id: 'yuanqu/1', title: '天净沙·秋思', author: '马致远', dynasty: '元', category: 'yuanqu', categoryName: '元曲', desc: '枯藤老树昏鸦，小桥流水人家，古道西风瘦马。', link: '/books/shici/yuanqu/1' },
  { id: 'shijing/1', title: '关雎', author: '佚名', dynasty: '先秦', category: 'shijing', categoryName: '诗经', desc: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。', link: '/books/shici/shijing/1' },
  { id: 'chuci/1', title: '离骚', author: '屈原', dynasty: '战国', category: 'chuci', categoryName: '楚辞', desc: '帝高阳之苗裔兮，朕皇考曰伯庸。', link: '/books/shici/chuci/1' }
]

const categoryMap = {
  'mingzhu': '名著',
  'shici': '诗词',
  'xiaoshuo': '小说',
  'shenmo': '神魔',
  'gongan': '公案'
}

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.baseSize = Math.random() * 3 + 1.5
    this.size = this.baseSize
    this.speedX = (Math.random() - 0.5) * 0.3
    this.speedY = (Math.random() - 0.5) * 0.3
    this.baseOpacity = Math.random() * 0.4 + 0.3
    this.opacity = this.baseOpacity
    this.color = Math.random() > 0.5 ? '#ad8e56' : '#c4a35a'
    this.pulsePhase = Math.random() * Math.PI * 2
    this.pulseSpeed = 0.02 + Math.random() * 0.02
  }

  update(t) {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1
    if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1

    const pulse = Math.sin(t * this.pulseSpeed + this.pulsePhase)
    this.size = this.baseSize + pulse * 0.8
    this.opacity = this.baseOpacity + pulse * 0.15
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, Math.max(0.5, this.size), 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.globalAlpha = Math.max(0.1, Math.min(1, this.opacity))
    ctx.fill()
    ctx.globalAlpha = 1
  }

  isClicked(mx, my) {
    const dx = this.x - mx
    const dy = this.y - my
    return Math.sqrt(dx * dx + dy * dy) < this.size + 10
  }
}

function initCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return

  const resize = () => {
    const parent = canvas.parentElement
    if (parent) {
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }
  }
  resize()
  window.addEventListener('resize', resize)

  particles = []
  for (let i = 0; i < 30; i++) {
    particles.push(new Particle(canvas))
  }

  const ctx = canvas.getContext('2d')

  function animate() {
    time++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach(p => {
      p.update(time)
      p.draw(ctx)
    })
    animationId = requestAnimationFrame(animate)
  }
  animate()

  return () => window.removeEventListener('resize', resize)
}

function handleCanvasClick(e) {
  const canvas = canvasRef.value
  const rect = canvas.getBoundingClientRect()
  const mx = e.clientX - rect.left
  const my = e.clientY - rect.top

  for (let p of particles) {
    if (p.isClicked(mx, my)) {
      showRandomBook()
      return
    }
  }
}

function showRandomBook() {
  const isPoem = Math.random() > 0.5
  if (isPoem) {
    const poem = allPoems[Math.floor(Math.random() * allPoems.length)]
    randomBook.value = {
      title: poem.title,
      author: poem.author,
      dynasty: poem.dynasty,
      category: poem.categoryName,
      description: poem.desc,
      link: poem.link
    }
  } else {
    const book = allBooks[Math.floor(Math.random() * allBooks.length)]
    randomBook.value = {
      title: book.title,
      author: book.author,
      dynasty: book.dynasty,
      category: book.categoryName || categoryMap[book.category] || book.category,
      description: book.desc,
      link: `/books/${book.category}/${book.id}`
    }
  }
  showBookModal.value = true
}

function closeBookModal() {
  showBookModal.value = false
}

function handleSearch() {
  const query = searchQuery.value.trim()
  if (!query) {
    window.location.href = '/search'
    return
  }
  window.location.href = '/search?q=' + encodeURIComponent(query)
}

function scrollDown() {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
}

onMounted(() => {
  const cleanup = initCanvas()
  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId)
    if (cleanup) cleanup()
  })
})
</script>

<style scoped>
.hero-section-custom {
  position: relative;
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(
      ellipse at center,
      transparent 0%,
      transparent 50%,
      rgba(250, 248, 245, 0.8) 100%
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 48px,
      rgba(133, 102, 46, 0.06) 48px,
      rgba(133, 102, 46, 0.06) 49px
    ),
    linear-gradient(180deg, #faf8f5 0%, #f5f0eb 100%);
  overflow: hidden;
}

.dark .hero-section-custom {
  background:
    radial-gradient(
      ellipse at center,
      transparent 0%,
      transparent 50%,
      rgba(26, 26, 26, 0.8) 100%
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 48px,
      rgba(212, 175, 55, 0.04) 48px,
      rgba(212, 175, 55, 0.04) 49px
    ),
    linear-gradient(180deg, #1a1a1a 0%, #252525 100%);
}

.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 20px;
  width: 100%;
  max-width: 900px;
  margin-top: -150px;
}

.hero-title {
  font-size: 48px;
  font-weight: 600;
  color: #85662e;
  margin-bottom: 40px;
  letter-spacing: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.dark .hero-title {
  color: #d4af37;
}

.search-box {
  display: flex;
  align-items: stretch;
  max-width: 700px;
  margin: 0 auto 24px;
  background: #fff;
  border: none;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(133, 102, 46, 0.08);
}

.dark .search-box {
  background: #2a2a2a;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.search-input {
  flex: 1;
  padding: 18px 24px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #333;
  background: transparent;
  display: flex;
  align-items: center;
}

.dark .search-input {
  color: #ddd;
}

.search-input::placeholder {
  color: #999;
}

.dark .search-input::placeholder {
  color: #777;
}

.search-options {
  display: flex;
  align-items: stretch;
  border-left: 1px solid #f0ebe5;
}

.dark .search-options {
  border-left-color: rgba(212, 175, 55, 0.15);
}

.search-select {
  padding: 18px 16px;
  border: none;
  outline: none;
  font-size: 15px;
  color: #666;
  background: transparent;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  padding-right: 28px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%23999' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
}

.dark .search-select {
  color: #aaa;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%23777' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
}

.search-btn {
  padding: 18px 24px;
  background: #ad8e56;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.search-btn:hover {
  background: #9a7a42;
}

.hero-stats {
  font-size: 14px;
  color: #999;
  margin-bottom: 40px;
}

.dark .hero-stats {
  color: #777;
}

.stats-num {
  color: #85662e;
  font-weight: 600;
}

.dark .stats-num {
  color: #d4af37;
}

.stats-link {
  color: #ad8e56;
  text-decoration: none;
  margin-left: 4px;
}

.stats-link:hover {
  color: #9a7a42;
}

.dark .stats-link {
  color: #c4a35a;
}

.dark .stats-link:hover {
  color: #d4af37;
}

.hero-hint {
  font-size: 13px;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.dark .hero-hint {
  color: #777;
}

.hint-icon {
  font-size: 14px;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #bbb;
  transition: color 0.3s ease;
}

.dark .scroll-indicator {
  color: #666;
}

.scroll-indicator:hover {
  color: #85662e;
}

.dark .scroll-indicator:hover {
  color: #d4af37;
}

.scroll-text {
  font-size: 12px;
  letter-spacing: 2px;
}

.scroll-mouse {
  width: 26px;
  height: 40px;
  border: 1.5px solid currentColor;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-wheel {
  width: 2px;
  height: 6px;
  background: currentColor;
  border-radius: 1px;
  animation: wheelScroll 2s ease-in-out infinite;
}

@keyframes wheelScroll {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  40% {
    transform: translateY(8px);
    opacity: 0.3;
  }
  60% {
    transform: translateY(-2px);
    opacity: 0.8;
  }
  80% {
    transform: translateY(0);
    opacity: 1;
  }
}

.book-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.book-modal {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 40px 48px;
  max-width: 420px;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(133, 102, 46, 0.15);
  animation: slideUp 0.3s ease;
}

.dark .book-modal {
  background: #252525;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(133, 102, 46, 0.15);
  background: #fff;
  color: #999;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.dark .modal-close {
  border-color: rgba(212, 175, 55, 0.15);
  background: #252525;
  color: #777;
}

.modal-close:hover {
  background: #f5f0eb;
  color: #85662e;
}

.dark .modal-close:hover {
  background: #2a2a2a;
  color: #d4af37;
}

.modal-tag {
  display: inline-block;
  padding: 6px 20px;
  background: #ad8e56;
  color: #fff;
  font-size: 13px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.modal-title {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.dark .modal-title {
  color: #ddd;
}

.modal-meta {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}

.dark .modal-meta {
  color: #777;
}

.modal-desc {
  background: #faf8f5;
  border-left: 3px solid #ad8e56;
  padding: 16px 20px;
  text-align: left;
  font-size: 14px;
  line-height: 1.8;
  color: #666;
  border-radius: 0 8px 8px 0;
  margin-bottom: 24px;
}

.dark .modal-desc {
  background: #2a2a2a;
  color: #aaa;
}

.modal-read-btn {
  display: inline-block;
  padding: 10px 32px;
  background: #ad8e56;
  color: #fff !important;
  text-decoration: none;
  border-radius: 24px;
  font-size: 14px;
  white-space: nowrap;
  transition: background 0.3s ease;
}

.modal-read-btn:hover {
  background: #9a7a42;
  color: #fff !important;
}

.dark .modal-read-btn:hover {
  background: #c4a35a;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 36px;
    letter-spacing: 4px;
  }

  .search-box {
    flex-direction: row;
    align-items: stretch;
  }

  .search-input {
    padding: 14px 16px;
    font-size: 15px;
  }

  .search-options {
    border-left: 1px solid #f0ebe5;
    border-top: none;
    width: auto;
  }

  .dark .search-options {
    border-left-color: rgba(212, 175, 55, 0.15);
    border-top-color: transparent;
  }

  .search-select {
    display: none;
  }

  .search-btn {
    padding: 14px 18px;
  }

  .book-modal {
    padding: 32px 24px;
  }
}
</style>
