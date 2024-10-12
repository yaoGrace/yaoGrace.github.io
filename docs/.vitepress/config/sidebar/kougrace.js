// kougrace目录的侧边栏配置

// 设置一个变量路径 不用每次都写了
const path =  "/article/kouGrace";

// 侧边栏数组
export default [
    {
        text:"<img style='width:24px;height:24px;float:left;display:inline; margin-right:5px;' src='/kouGraceImage/Grace.svg'> kouGrace框架" ,link:"/article/kouGrace/", 
        items:[
          {text:"开始" ,link:path + "/start.md"},
          {
            text:"框架基础", 
            collapsed: true, //是否可折叠
            items:[ 
              { text:"环境需求",link: path+"/01/环境需求.md" },
              { text:"源码下载",link:path+"/01/源码下载.md" },
              { text:"目录·分组",link:  path+"/01/目录分组.md" },
              { text:"运行·调试",link: path+"/01/运行调试.md" },
              { text:"内置常量",link: path+"/01/内置常量.md" },
              { text:"配置文件",link: path+"/01/配置文件.md" },
              { text:"内置小工具",link: path+"/01/内置小工具.md" },
              { text:"命令行工具",link: path+"/01/命令行工具.md" },
              { text:"更新日志",link: path+"/01/更新日志.md" },
            ]  
          },
          {
            text:"控制器 · 路由 · 视图",collapsed: true, 
            items:[ 
                 {text:"URL生成",link: path+"/02/URL生成.md"},
                 {text:"创建控制器",link: path+"/02/控制器创建.md"}, 
                 {text:"基础控制器",link: path+"/02/基础控制器.md"}, 
                 {text:"基础路由解析",link: path+"/02/基础路由解析.md"},  
                 {text:"视图详情",link: path+"/02/视图详情.md"},
                 {text:"调用控制器",link: path+"/02/调用控制器.md"},
                 {text:"自定义路由",link: path+"/02/自定义路由.md"},
            ]
          },
          {
            text:"表单相关",collapsed: true, 
            items:[
                 {text:"表单令牌",link: path+"/03_token.md"},
                 {text:"表单提交",link: path+"/03_form.md"},
            ]
          },
          //数据库操作
          {
            text:"数据库操作",collapsed: true, 
            items:[ 
                 {text:"概述准备",link: path+"/04_db_overview.md"},
                 {text:"数据库配置",link: path+"/04_db_config.md"},
                 {text:"数据库操作对象",link: path+"/04_db_obj.md"},
                 {text:"常用函数(CURD等)",link: path+"/04_db_func.md"},
                 {text:"条件设置",link: path+"/04_db_where.md"},
                 {text:"数据验证类",link: path+"/04_db_validate.md"},
                 {text:"数据分页",link: path+"/04_db_page.md"},
                 {text:"多表联合",link: path+"/04_db_join.md"},
                 {text:"事务处理",link: path+"/04_db_transaction.md"},
            ]
          },
          // 模型机制
          {
            text:"模型机制",collapsed: true, 
            items:[
                 {text:"模型机制",link: path+"/05_model_mechanism.md"},
                 {text:"完整演示",link: path+"/05_model_demo.md"}, 
            ]
          },
          //缓存机制
          {
            text:"缓存机制",collapsed: true, 
            items:[ 
                 {text:"缓存概述",link: path+"/06_cache_overview.md"},
                 {text:"控制器缓存",link: path+"/06_cache_controller.md"},
                 {text:"模型缓存",link: path+"/06_cache_model.md"},
                 {text:"自定义缓存",link: path+"/06_cache_custom.md"},
            ]
          },
          // 会话机制
          {
            text:"会话机制",collapsed: true, 
            items:[ 
                {text:"cookie操作",link: path+"/07_cookie.md"},
                {text:"session操作",link: path+"/07_session.md"},
            ]
          },
          //工具
          {
            text:"工具",collapsed: true,  
            items:[ 
                 {text:"函数小工具",link: path+"/08_tools.md"},  
                 {text:"工具类大全",link: path+"/08_tools_all_home.md"},
              ]
          },
          //安全·扩展·分布式
          {
            text:"安全·扩展·分布式",collapsed: true, 
            items:[ 
                 {text:"部署安全",link: path+"/09_deploy_safe.md"},
                 {text:"常规安全",link: path+"/09_common_safe.md"},
                 {text:"框架扩展",link: path+"/09_extend.md"},
                 {text:"分布式部署",link: path+"/09_distributed.md"},
            ]
          }
          
        ]
    }
];