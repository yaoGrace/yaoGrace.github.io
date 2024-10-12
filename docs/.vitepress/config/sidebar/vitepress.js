// vitepress目录的侧边栏配置文件
export default[
    {
        text:"vitepress帮助中心",link:"/article/vitepress", 
        items:[ 
            {
              text:"介绍",
              collapsed: false,
              items:[
                {text:"前言",link:"/article/vitepress/01preface.md" }, 
              ]
            },
            {
              text:"基础篇",
              collapsed: false,
              items:[
                {text:"快速开始",link:"/article/vitepress/02getting-started.md" },
                {text:"配置",link:"/article/vitepress/03configuration.md" },
                {text:"页面",link:"/article/vitepress/04page.md" },
                {text:"Frontmatter",link:"/article/vitepress/05frontmatter.md" },
              ]
            },
            {
              text:"进阶篇",
              collapsed: false,
              items:[
                {text:"Markdown",link:"/article/vitepress/07markdown.md" },
                {text:"团队",link:"/article/vitepress/08team.md" },
                {text:"静态部署",link:"/article/vitepress/09assets.md"},
                {text:"样式美化",link:"/article/vitepress/10style.md"},
                {text:"组件",link:"/article/vitepress/11components.md"},
                {text:"布局插槽",link:"/article/vitepress/12layout.md"},
                {text:"插件",link:"/article/vitepress/13plugin.md"}, 
                {text:"更新和卸载",link:"/article/vitepress/14update.md" },
              ]
            },
            {
              text:"插件中心",
              collapsed: false, //默认打开折叠的侧边栏-false ; true-收起折叠
              items:[
                  {text:"tab插件使用",link:"/article/vitepress/tab.md" },
                  {text:"markdown语法增强",link:"/article/vitepress/markdownStrong.md" },
                  {text:"markdown基本语法",link:"/article/vitepress/markdownBase.md" },
                  {text:"如何访问github",link:"/article/vitepress/viewgithub.md" },
              ]
            },
        ]
        
    }
];