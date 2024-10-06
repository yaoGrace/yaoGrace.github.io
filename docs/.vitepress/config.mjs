import { defineConfig } from 'vitepress'  
import nav from './config/topNav';  // 导入导航配置
import sidebar from './config/sidebar'; //导入侧边栏配置
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs' //导入Tab插件
const base = process.env.BASE_PATH ?? '/';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站头部信息配置
  title: "扣叔学习屋",
  description: "一个自用的资源",
  head: [
    ['meta',  { name: 'author', content: "koushu" }],// 作者
    ['meta',  { name: 'keywords',  content: '一个资源站，平时用于收集学习记录的小破站！' } ] , //网站关键字
    ['link',  { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }], //网站图标
    ['meta',  { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' } ],
    ['meta',  {name:'referrer',content: 'no-referrer'}], //禁止页面追踪
    ['link',  { rel: 'icon', href: '/logo.png' }], //网站显示icon图标 
    ['link', {rel: 'stylesheet', href: `///cdn.bootcdn.net/ajax/libs/zui/3.0.0/zui.css`}],//引入zuicss
    ['script', {src: `///cdn.bootcdn.net/ajax/libs/zui/3.0.0/zui.js`}], //引入zuijs
  ],
  // 主题配置
  themeConfig: {
    logo: '/logo.png',  
    nav: nav, 
    sidebar: sidebar,
    outline: [2, 3],
    // 搜索框配置
    search: {
        provider: 'local',
        options: {
            translations: {
                button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                },
                modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                        selectText: '选择',
                        navigateText: '切换',
                        closeText: '关闭'
                    }
                }
            }
        }
    },
    // 分享链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 在线编辑链接   
    editLink: {
      pattern: 'https://gitee.com/liukuaizhuan/yaograce.github.io/edit/master/docs/:path',
      text: '在 gitee 上编辑此页面'
    },
    outlineTitle: '本页目录',
    lastUpdated: {
      text:"最后更新于"
    }, //最后更新时间戳
    docFooter: {
        prev: '<- 上一篇',
        next: '下一篇 ->'
    },
    //底部
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-PRESENT liukuaizhuan@qq.com '
    },
    //返回顶部文字修改
    returnToTopLabel:'返回顶部', 
  },
  // markdown 插件tab 增强
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    //行号显示
    lineNumbers: true, //false关闭
  }
})

 