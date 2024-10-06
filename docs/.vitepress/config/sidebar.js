// 多侧边栏 配置
export default {
    // 第一个侧边栏 ，当访问 kouGrace这个文件目录时候，会展示这个侧边栏
    '/article/kouGrace/':[
        {
            text:"<img style='width:24px;height:24px;float:left;display:inline; margin-right:5px;' src='/kouGraceImage/Grace.svg'> kouGrace框架" ,link:"/article/kouGrace/", 
            items:[
              {text:"开始" ,link:"/article/kouGrace/start.md"},
              {
                text:"框架基础", 
                collapsed: true, //是否可折叠
                items:[ 
                  { text:"环境需求",link:"/article/kouGrace/01_huanjing.md" },
                  { text:"目录·分组",link:"/article/kouGrace/01_menuandgroup.md" },
                  { text:"运行·调试",link:"/article/kouGrace/01_yunxingdebug.md" },
                  { text:"内置常量",link:"/article/kouGrace/01_const.md" },
                  { text:"配置文件",link:"/article/kouGrace/01_configInfo.md" },
                  { text:"内置小工具",link:"/article/kouGrace/01_selftools.md" },
                  { text:"命令行工具",link:"/article/kouGrace/01_cmd.md" },
                  { text:"更新日志",link:"/article/kouGrace/01_updateInfo.md" },
                ]  
              },
              {
                text:"控制器 · 路由 · 视图",collapsed: true, 
                items:[ 
                     {text:"URL生成",link:"/article/kouGrace/02_create_url.md"},
                     {text:"创建控制器",link:"/article/kouGrace/02_create_controller.md"}, 
                     {text:"基础控制器",link:"/article/kouGrace/02_base_controller.md"}, 
                     {text:"基础路由解析",link:"/article/kouGrace/02_url_pase.md"},  
                     {text:"视图详情",link:"/article/kouGrace/02_view.md"},
                     {text:"调用控制器",link:"/article/kouGrace/02_use_controller.md"},
                     {text:"自定义路由",link:"/article/kouGrace/02_rolue_params.md"},
                ]
              },
              {
                text:"表单相关",collapsed: true, 
                items:[
                     {text:"表单令牌",link:"/article/kouGrace/03_token.md"},
                     {text:"表单提交",link:"/article/kouGrace/03_form.md"},
                ]
              },
              //数据库操作
              {
                text:"数据库操作",collapsed: true, 
                items:[ 
                     {text:"概述准备",link:"/article/kouGrace/04_db_overview.md"},
                     {text:"数据库配置",link:"/article/kouGrace/04_db_config.md"},
                     {text:"数据库操作对象",link:"/article/kouGrace/04_db_obj.md"},
                     {text:"常用函数(CURD等)",link:"/article/kouGrace/04_db_func.md"},
                     {text:"条件设置",link:"/article/kouGrace/04_db_where.md"},
                     {text:"数据验证类",link:"/article/kouGrace/04_db_validate.md"},
                     {text:"数据分页",link:"/article/kouGrace/04_db_page.md"},
                     {text:"多表联合",link:"/article/kouGrace/04_db_join.md"},
                     {text:"事务处理",link:"/article/kouGrace/04_db_transaction.md"},
                ]
              },
              // 模型机制
              {
                text:"模型机制",collapsed: true, 
                items:[
                     {text:"模型机制",link:"/article/kouGrace/05_model_mechanism.md"},
                     {text:"完整演示",link:"/article/kouGrace/05_model_demo.md"}, 
                ]
              },
              //缓存机制
              {
                text:"缓存机制",collapsed: true, 
                items:[ 
                     {text:"缓存概述",link:"/article/kouGrace/06_cache_overview.md"},
                     {text:"控制器缓存",link:"/article/kouGrace/06_cache_controller.md"},
                     {text:"模型缓存",link:"/article/kouGrace/06_cache_model.md"},
                     {text:"自定义缓存",link:"/article/kouGrace/06_cache_custom.md"},
                ]
              },
              // 会话机制
              {
                text:"会话机制",collapsed: true, 
                items:[ 
                    {text:"cookie操作",link:"/article/kouGrace/07_cookie.md"},
                    {text:"session操作",link:"/article/kouGrace/07_session.md"},
                ]
              },
              //工具
              {
                text:"工具",collapsed: true,  
                items:[ 
                     {text:"函数小工具",link:"/article/kouGrace/08_tools.md"},  
                     {text:"工具类大全",link:"/article/kouGrace/08_tools_all_home.md"},
                  ]
              },
              //安全·扩展·分布式
              {
                text:"安全·扩展·分布式",collapsed: true, 
                items:[ 
                     {text:"部署安全",link:"/article/kouGrace/09_deploy_safe.md"},
                     {text:"常规安全",link:"/article/kouGrace/09_common_safe.md"},
                     {text:"框架扩展",link:"/article/kouGrace/09_extend.md"},
                     {text:"分布式部署",link:"/article/kouGrace/09_distributed.md"},
                ]
              }
              
            ]
        }
    ],
    // 第二个侧边栏
    '/article/vitepress/':[
        {
            text:"vitepress帮助中心",link:"/article/vitepress", 
            items:[
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
                {
                  text:"介绍",
                  collapsed: false,
                  items:[
                    {text:"前言",link:"/article/vitepress/01preface.md" },
                    {text:"更新日志",link:"/article/vitepress/14update.md" },
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
                  ]
                }
            ]
            
        }
    ],
}