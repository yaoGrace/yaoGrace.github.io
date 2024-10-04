---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "扣叔的学习屋" 
  tagline: 好记性不如烂笔头....学习使我快乐~
  image:
      src: 'logo.png' 
      alt:  扣叔的学习屋 
  actions:
    - theme: brand
      text: 主页
      link: /
    - theme: alt
      text: kouGrace框架
      link: /article/kouGrace/
    - theme: alt
      text: 中医自学
      link: /article/zy/  

features:
  - title: 高效快速
    icon:
      src: /indexImage/vite.svg
    details: vite5.x 加持，开发、打包、热更新、热加载、热替换，一切都是那么的快
    link: https://vitejs.dev/
  - title: 预设样式
    icon:
      src: /indexImage/unocss.svg
    details: 更快、更上层的原子化 CSS 引擎，听说，下雨天，属性化书写 class 名和 vue3 更配哦
    link: https://unocss.dev/
  - title: TypeScript
    icon:
      src: /indexImage/typescript.svg
    details: 项目全量使用 TypeScript，代码处处有提示，老大再也不用担心我叕写错变量名了
    link: https://www.typescriptlang.org/
  - title: MSW Mock 服务
    icon:
      src: /indexImage/msw.svg
    details: 项目使用 MSW 作为 Mock 服务，在浏览器端也能像后端一样编写 API 服务
    link: https://mswjs.io/
  - title: 状态管理
    icon:
      src: /indexImage/pinia.svg
    details: 项目使用 Pinia 作为状态管理，使用起来更加简单
    link: https://pinia.vuejs.org/
  - title: 全栈式
    icon:
      src: /indexImage/nestjs.svg
    details: 同时提供了一个基于 NestJs 的后台代码配套前端项目进行使用
    link: https://github.com/buqiyuan/nest-admin
---