# 内置常量

> kouGrace 预定义了以下常量，通过它们可以修改核心文件夹的位置（更安全）、可以控制各类功能的开启与关闭等。
 

##  系统类常量

::: tip 系统级常量
这些是系统级常量，基本不需要修改。如果有自定义需求，也可以更改为自己习惯用的
:::

| 常量名称 | 默认值 | 功能描述 |
| --- | --- | --- |
| KG_VERSION    | 当前版本信息                      |  获取当前kouGrace版本号 |
| KG_DS         | / 或 \ （根据操作系统）            | 获取系统分隔符 |
| KG_IN         | 框架核心根目录                    | 获取框架所在位置（绝对路径）  |
| KG_APP_ROOT   | 当前网站项目的根目录绝对路径        | 获取当前网站项目的根目录绝对路径 | 
| KG_AUTO_DISPLAY   | 【此功能暂未实现，等待升级】               | 视图自动展示（根据控制器、方法名称） | 
| KG_ROUTE          | 【此功能暂未实现，等待升级】               | 是否启用自定义路由 | 
| KG_PATH           | ./app  | 定义 所有的应用模块 放在哪个根目录文件夹下<br>[此路径为相对路径] |
| KG_CONTROLLER_DIR_NAME  | 默认值：controller  | 定义控制器文件所在目录的名称 |
| KG_VIEW_DIR_NAME  | 默认值：view  | 定义视图文件所在目录的名称 |
| KG_SYSTEM_CONF    |  默认值：./Conf | 定义 系统级配置文件存放在哪个文件夹下<br>[此路径为全局配置目录的相对路径] |
| KG_LANG_PACKAGE  |  默认值：lang | 定义语言包文件所在目录 |
| KG_TOOLS          | 默认值： tools  | 工具类文件所在目录的目录名称 |  
| INSTALL_APP_PATH  | 默认值为： KG_APP_ROOT.'/'  | 只是安装模块里面能用到 |
| KG_START_TIME  | 时间戳  | 系统启动时间 |
| KG_START_MEM  | 整数，单位【字节】  | 系统启动内存占用 |


## 常用配置类常量
::: danger  这些是会常用的常量
    1、KG_MULTI_MODULE  多应用模块 这个需要在项目立项的时候就考虑好是哪种      
    2、KG_SUFFIX 伪静态后缀名也配置好   
    3、KG_VIEW_TYPE  视图类型 使使用文件型还是目录型，也要先考虑好，不然后期写视图层会很麻烦   
    4、 KG_POST_FILTER 这个是全局的过滤。   
    如果只是在控制器里面过滤，可以在控制器里面 写 $this->postFilter = false/true;
:::
| 常量名称 | 默认值 | 功能描述 |
| --- | --- | --- |
| KG_MULTI_MODULE  |  默认为false - 单应用,ture -多应用 | 定义是否开启多应用模块,默认为false - 单应用 |
| KG_SUFFIX  | 默认false，无后缀  |伪静态页面后缀,如果需要开启，自己随便设置,格式举例为:".html"  |
| KG_VIEW_TYPE|文件型-file 默认，存放的格式为 控制器-方法名.php。<br> 文件夹型-dir ，存放的格式为 控制器/方法名.php|视图类型 |
| KG_POST_FILTER  | 默认 false 【关闭】， true【开启】|是否全局过滤 $_POST 中的跨站攻击字符  |  
| KG_SROOT          | 根据项目所在目录获取，根目录为 /  <br> 如果放在二级目录，则为 /二级目录名/  | 获取KG_SROOT当前应用根目录常量 |
| KG_PAGE           | 默认：1  | 当前分页页码 |
| KG_MODULE         |  获取当前应用模块名称 | 获取当前应用模块名称常量 |
| KG_C              |  获取当前控制器名称 | 获取当前控制器名称常量  |  
| KG_M              |  获取当前方法名称   | 获取当前方法名称常量 | 

## 调试类常量
::: warning 调试相关
 这个就是 kouGrace 框架的调试模式，默认为 false，关闭。   
 KG_ERROR_404_PAGE 这个是2种模式   
 默认 false: 模式为 路由错误，则直接跳转为当前应用下的首页 (一般 在开发阶段为false)   
 true 开启：该模式若 路由错误，则跳转到404页面 (项目正式上线时候建议改为true)    
:::

| 常量名称 | 默认值 | 功能描述 |
| --- | --- | --- |
| KG_ERROR_404_PAGE |  默认 false<br> 【false 】- 异常跳转到首页 <br> 【 true 】为异常跳转到404页面 |是否开启报错异常/404页面  |
| KG_TRACE          | 默认为 false - 关闭, true - 开启| 是否开启追踪模式    |

##  缓存类常量
::: tip 缓存
其实这两个常量，一般用不到，不过也可以设置，方便调试。   
KG_CLOSE_CACHE  这个为 true后，所有缓存都失效，方便调试代码   
:::

| 常量名称 | 默认值 | 功能描述 |
| --- | --- | --- |
| KG_CLOSE_CACHE    |  默认 false 【关闭】，true【开启】         | 是否全局关闭缓存(开发时候调试会用到) |
| KG_CACHEDATAFILES | 默认值：./cacheDataFiles  |文件型缓存数据文件保存目录 <br> 如该文件夹不存在，程序会自动创建  |

## 会话类常量

::: danger session
默认情况下，框架默认不开启session功能。 KG_SESSION_START = false;   
如果需要使用session，需要先开启，然后在使用,   
在未开启状态下，框架session类函数不会生效。   
此情况下( KG_SESSION_START = false) ,如果需要使用session，只能使用PHP默认session函数才生效
:::

| 常量名称 | 默认值 | 功能描述 |
| --- | --- | --- | 
| KG_SESSION_START  | 默认 false 【关闭】，true【开启】  | 是否启动 session，默认不开启 <br> 如果不开启则使用session功能无效 |  
| KG_SESSION_DIR    | 默认放在项目下./sessions文件夹，<br>文件夹若不存在则程序自动创建  | 文件型 sessions 文件存放路径  |
| KG_SESSION_TYPE   | 默认 file <br>可以设置【file, memcache, redis】  |设置使用session哪一种存储类型  |
| KG_SESSION_HOST  | 主机地址,默认值：tcp://127.0.0.1:11211  |非文件型 session 服务器地址:端口 <br/> session 类似为 memcache 或 redis 时，<br/> 对应的主机地址 [memcache 11211 redis 6379] |


