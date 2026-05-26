<template>
  <Layout>
    <template #doc-after>
      <BookNav v-if="isBookIntroPage" />
    </template>
  </Layout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const route = useRoute()

const isBookIntroPage = computed(() => {
  return /^\/(mingzhu|xiaoshuo|shenmo|gongan)\/[^/]+$/.test(route.path)
})
</script>
