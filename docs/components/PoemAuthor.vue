<template>
  <div class="poem-author-section">
    <hr />
    <h2>{{ isShijing ? '关于《诗经》' : '关于作者' }}</h2>
    <blockquote>
      <p><strong>{{ name }}</strong>（{{ years }}），{{ desc }}</p>
      <p v-if="link">
        <a :href="link">{{ isShijing ? '查看诗经详情 →' : '查看作者详情 →' }}</a>
      </p>
    </blockquote>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  years: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  },
  isShijing: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.poem-author-section {
  margin-top: 32px;
}

.poem-author-section hr {
  display: none;
}

.poem-author-section h2 {
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--vp-c-brand-1, #85662e);
}

.poem-author-section blockquote {
  border-left: 4px solid var(--vp-c-brand-3, #ad8e56);
  padding-left: 16px;
  margin: 0;
}

.poem-author-section blockquote p {
  text-indent: 0;
  margin: 0;
  font-size: var(--reader-font-size, 16px);
  line-height: var(--reader-line-height, 1.8);
}

.poem-author-section blockquote p + p {
  margin-top: 10px;
}

.poem-author-section blockquote a {
  font-size: 14px;
  color: var(--vp-c-brand-1, #85662e);
  text-decoration: none;
}

.poem-author-section blockquote a:hover {
  text-decoration: underline;
}
</style>
