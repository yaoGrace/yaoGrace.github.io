 
import DefaultTheme from "vitepress/theme";
import './style.css'; 
// 导入tab插件 
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';

 

export default {
  ...DefaultTheme,
  NotFound: () => '404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    enhanceAppWithTabs(app) ; //加载插件
  },
};