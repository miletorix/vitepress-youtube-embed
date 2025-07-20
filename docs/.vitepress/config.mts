import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vitepress-youtube-embed",
  base: '/vitepress-youtube-embed/',
  description: " A minimal Vue 3 component to embed responsive YouTube videos in VitePress markdown pages using a simple syntax.",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'favicon.png' }],
  ],
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  },
  themeConfig: {
    logo: 'favicon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github Page', link: 'https://github.com/miletorix/vitepress-youtube-embed' },
      { text: 'NPM Page', link: 'https://www.npmjs.com/package/@miletorix/vitepress-enhanced-site-links' }
    ],
    sidebar: [
      { text: 'Home', link: '/index' },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/miletorix' }
    // ]
  }
})