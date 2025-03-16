import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "神金列表",
  description: "专门用于展示各类神金之迷惑言论",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '介绍', link: '/start' }
    ],

    sidebar: [
      {
        text: '神金列表',
        items: [
          { text: '小吉祥教', link: '/xiao-ji-xiang-jiao' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/admilkjs/small_chassis' }
    ]
  }
})
