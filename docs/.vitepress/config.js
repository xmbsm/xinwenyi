import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '新文艺',
  description: '古典文学垂直类内容展示与阅读平台',
  lang: 'zh-CN',
  lastUpdated: false,
  ignoreDeadLinks: true,

  themeConfig: {
    logo: { src: '/logo.svg', alt: '新文艺' },

    nav: [
      { text: '首页', link: '/' },
      { text: '诗词', link: '/category/shici' },
      { text: '书库', link: '/library' },
      { text: '作者', link: '/authors' },
      { text: '一言', link: '/hitokoto' },
      { text: '关于', link: '/about' },
      { text: '搜索', link: '/search' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    footer: {
      message: '本站点仅展示公有领域古典文学作品，用于传统文化学习与传播',
      copyright: 'Copyright © 2026 新文艺'
    },

    outline: {
      label: '目录'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdatedText: '最后更新',

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'keywords', content: '古典文学,四大名著,诗词,小说,传统文化' }],
    ['meta', { name: 'description', content: '免费开放古典文学优质内容，包括四大名著、经典古诗词、明清小说等' }]
  ],

  vite: {
    resolve: {
      alias: {
        '@components': '/components'
      }
    }
  }
})
