// 导入多侧边栏 配置,不然越来越多的侧边栏会显示的太乱，这样导入显示的会比较清晰
import kougrace from './sidebar/kougrace' 
import vitepress from './sidebar/vitepress'


export default {
    // 第一个侧边栏 ，当访问 kouGrace这个文件目录时候，会展示这个侧边栏
    '/article/kouGrace/': kougrace,
    // 第二个侧边栏 当访问 vitepress这个文件目录时候，会展示这个侧边栏
    '/article/vitepress/':vitepress,
}