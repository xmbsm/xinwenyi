<template>
  <div class="chapter-nav">
    <a
      v-if="prevLink"
      :href="prevLink"
      class="prev-chapter"
    >
      ← {{ prevText }}
    </a>
    <span v-else></span>

    <a :href="tocLink" class="back-toc">回目录</a>

    <a
      v-if="nextLink"
      :href="nextLink"
      class="next-chapter"
    >
      {{ nextText }} →
    </a>
    <span v-else></span>
  </div>
</template>

<script setup>
const props = defineProps({
  prevLink: {
    type: String,
    default: ''
  },
  prevText: {
    type: String,
    default: '上一回'
  },
  nextLink: {
    type: String,
    default: ''
  },
  nextText: {
    type: String,
    default: '下一回'
  },
  tocLink: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.chapter-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.15));
  gap: 16px;
}

.prev-chapter,
.next-chapter,
.back-toc {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.prev-chapter,
.next-chapter {
  background: var(--vp-c-brand-soft, rgba(133, 102, 46, 0.12));
  color: var(--vp-c-brand-1, #85662e);
  border: 1px solid var(--vp-c-brand-3, rgba(133, 102, 46, 0.2));
}

.prev-chapter:hover,
.next-chapter:hover {
  background: var(--vp-c-brand-3, #ad8e56);
  color: #fff;
  border-color: var(--vp-c-brand-3, #ad8e56);
}

.back-toc {
  background: var(--vp-c-bg-soft, #f5f0eb);
  color: var(--vp-c-text-2, #666);
  border: 1px solid var(--vp-c-divider, rgba(133, 102, 46, 0.15));
}

.back-toc:hover {
  background: var(--vp-c-brand-soft, rgba(133, 102, 46, 0.12));
  color: var(--vp-c-brand-1, #85662e);
  border-color: var(--vp-c-brand-3, rgba(133, 102, 46, 0.2));
}

@media (max-width: 640px) {
  .chapter-nav {
    flex-wrap: wrap;
    gap: 12px;
  }

  .back-toc {
    order: -1;
    width: 100%;
    text-align: center;
  }

  .prev-chapter,
  .next-chapter {
    flex: 1;
    text-align: center;
  }
}
</style>
