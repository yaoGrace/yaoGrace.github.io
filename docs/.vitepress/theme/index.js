 
import DefaultTheme from "vitepress/theme";
import './style/index.css';  //所有自定义修改的CSS样式
// 导入tab插件 
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
   
// 下面三个是图片放大插件
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
// 加载西瓜视频播放器组件
import xgplayer from "./components/xgplayer.vue"

export default {
  ...DefaultTheme,
  NotFound: () => '404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    enhanceAppWithTabs(app) ; //加载插件
    // 注册全局组件
    app.component('xgplayer' , xgplayer); 
  },

  // 图片放大插件
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },

};