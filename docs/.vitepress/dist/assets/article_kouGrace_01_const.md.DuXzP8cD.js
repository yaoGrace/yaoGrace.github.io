import{_ as d,c as r,a4 as e,o as a}from"./chunks/framework.C2dBoaCi.js";const n=JSON.parse('{"title":"内置常量","description":"","frontmatter":{},"headers":[],"relativePath":"article/kouGrace/01_const.md","filePath":"article/kouGrace/01_const.md","lastUpdated":1727788737000}'),s={name:"article/kouGrace/01_const.md"};function o(l,t,_,i,c,h){return a(),r("div",null,t[0]||(t[0]=[e(`<h1 id="内置常量" tabindex="-1">内置常量 <a class="header-anchor" href="#内置常量" aria-label="Permalink to &quot;内置常量&quot;">​</a></h1><blockquote><p>kouGrace 预定义了以下常量，通过它们可以修改核心文件夹的位置（更安全）、可以控制各类功能的开启与关闭等。</p></blockquote><h2 id="系统类常量" tabindex="-1">系统类常量 <a class="header-anchor" href="#系统类常量" aria-label="Permalink to &quot;系统类常量&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">系统级常量</p><p>这些是系统级常量，基本不需要修改。如果有自定义需求，也可以更改为自己习惯用的</p></div><table tabindex="0"><thead><tr><th>常量名称</th><th>默认值</th><th>功能描述</th></tr></thead><tbody><tr><td>KG_VERSION</td><td>当前版本信息</td><td>获取当前kouGrace版本号</td></tr><tr><td>KG_DS</td><td>/ 或 \\ （根据操作系统）</td><td>获取系统分隔符</td></tr><tr><td>KG_IN</td><td>框架核心根目录</td><td>获取框架所在位置（绝对路径）</td></tr><tr><td>KG_APP_ROOT</td><td>当前网站项目的根目录绝对路径</td><td>获取当前网站项目的根目录绝对路径</td></tr><tr><td>KG_AUTO_DISPLAY</td><td>【此功能暂未实现，等待升级】</td><td>视图自动展示（根据控制器、方法名称）</td></tr><tr><td>KG_ROUTE</td><td>【此功能暂未实现，等待升级】</td><td>是否启用自定义路由</td></tr><tr><td>KG_PATH</td><td>./app</td><td>定义 所有的应用模块 放在哪个根目录文件夹下<br>[此路径为相对路径]</td></tr><tr><td>KG_CONTROLLER_DIR_NAME</td><td>默认值：controller</td><td>定义控制器文件所在目录的名称</td></tr><tr><td>KG_VIEW_DIR_NAME</td><td>默认值：view</td><td>定义视图文件所在目录的名称</td></tr><tr><td>KG_SYSTEM_CONF</td><td>默认值：./Conf</td><td>定义 系统级配置文件存放在哪个文件夹下<br>[此路径为全局配置目录的相对路径]</td></tr><tr><td>KG_LANG_PACKAGE</td><td>默认值：lang</td><td>定义语言包文件所在目录</td></tr><tr><td>KG_TOOLS</td><td>默认值： tools</td><td>工具类文件所在目录的目录名称</td></tr><tr><td>INSTALL_APP_PATH</td><td>默认值为： KG_APP_ROOT.&#39;/&#39;</td><td>只是安装模块里面能用到</td></tr><tr><td>KG_START_TIME</td><td>时间戳</td><td>系统启动时间</td></tr><tr><td>KG_START_MEM</td><td>整数，单位【字节】</td><td>系统启动内存占用</td></tr></tbody></table><h2 id="常用配置类常量" tabindex="-1">常用配置类常量 <a class="header-anchor" href="#常用配置类常量" aria-label="Permalink to &quot;常用配置类常量&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">这些是会常用的常量</p><pre><code>1、KG_MULTI_MODULE  多应用模块 这个需要在项目立项的时候就考虑好是哪种      
2、KG_SUFFIX 伪静态后缀名也配置好   
3、KG_VIEW_TYPE  视图类型 使使用文件型还是目录型，也要先考虑好，不然后期写视图层会很麻烦   
4、 KG_POST_FILTER 这个是全局的过滤。   
如果只是在控制器里面过滤，可以在控制器里面 写 $this-&gt;postFilter = false/true;
</code></pre></div><table tabindex="0"><thead><tr><th>常量名称</th><th>默认值</th><th>功能描述</th></tr></thead><tbody><tr><td>KG_MULTI_MODULE</td><td>默认为false - 单应用,ture -多应用</td><td>定义是否开启多应用模块,默认为false - 单应用</td></tr><tr><td>KG_SUFFIX</td><td>默认false，无后缀</td><td>伪静态页面后缀,如果需要开启，自己随便设置,格式举例为:&quot;.html&quot;</td></tr><tr><td>KG_VIEW_TYPE</td><td>文件型-file 默认，存放的格式为 控制器-方法名.php。<br> 文件夹型-dir ，存放的格式为 控制器/方法名.php</td><td>视图类型</td></tr><tr><td>KG_POST_FILTER</td><td>默认 false 【关闭】， true【开启】</td><td>是否全局过滤 $_POST 中的跨站攻击字符</td></tr><tr><td>KG_SROOT</td><td>根据项目所在目录获取，根目录为 / <br> 如果放在二级目录，则为 /二级目录名/</td><td>获取KG_SROOT当前应用根目录常量</td></tr><tr><td>KG_PAGE</td><td>默认：1</td><td>当前分页页码</td></tr><tr><td>KG_MODULE</td><td>获取当前应用模块名称</td><td>获取当前应用模块名称常量</td></tr><tr><td>KG_C</td><td>获取当前控制器名称</td><td>获取当前控制器名称常量</td></tr><tr><td>KG_M</td><td>获取当前方法名称</td><td>获取当前方法名称常量</td></tr></tbody></table><h2 id="调试类常量" tabindex="-1">调试类常量 <a class="header-anchor" href="#调试类常量" aria-label="Permalink to &quot;调试类常量&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">调试相关</p><p>这个就是 kouGrace 框架的调试模式，默认为 false，关闭。<br> KG_ERROR_404_PAGE 这个是2种模式<br> 默认 false: 模式为 路由错误，则直接跳转为当前应用下的首页 (一般 在开发阶段为false)<br> true 开启：该模式若 路由错误，则跳转到404页面 (项目正式上线时候建议改为true)</p></div><table tabindex="0"><thead><tr><th>常量名称</th><th>默认值</th><th>功能描述</th></tr></thead><tbody><tr><td>KG_ERROR_404_PAGE</td><td>默认 false<br> 【false 】- 异常跳转到首页 <br> 【 true 】为异常跳转到404页面</td><td>是否开启报错异常/404页面</td></tr><tr><td>KG_TRACE</td><td>默认为 false - 关闭, true - 开启</td><td>是否开启追踪模式</td></tr></tbody></table><h2 id="缓存类常量" tabindex="-1">缓存类常量 <a class="header-anchor" href="#缓存类常量" aria-label="Permalink to &quot;缓存类常量&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">缓存</p><p>其实这两个常量，一般用不到，不过也可以设置，方便调试。<br> KG_CLOSE_CACHE 这个为 true后，所有缓存都失效，方便调试代码</p></div><table tabindex="0"><thead><tr><th>常量名称</th><th>默认值</th><th>功能描述</th></tr></thead><tbody><tr><td>KG_CLOSE_CACHE</td><td>默认 false 【关闭】，true【开启】</td><td>是否全局关闭缓存(开发时候调试会用到)</td></tr><tr><td>KG_CACHEDATAFILES</td><td>默认值：./cacheDataFiles</td><td>文件型缓存数据文件保存目录 <br> 如该文件夹不存在，程序会自动创建</td></tr></tbody></table><h2 id="会话类常量" tabindex="-1">会话类常量 <a class="header-anchor" href="#会话类常量" aria-label="Permalink to &quot;会话类常量&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">session</p><p>默认情况下，框架默认不开启session功能。 KG_SESSION_START = false;<br> 如果需要使用session，需要先开启，然后在使用,<br> 在未开启状态下，框架session类函数不会生效。<br> 此情况下( KG_SESSION_START = false) ,如果需要使用session，只能使用PHP默认session函数才生效</p></div><table tabindex="0"><thead><tr><th>常量名称</th><th>默认值</th><th>功能描述</th></tr></thead><tbody><tr><td>KG_SESSION_START</td><td>默认 false 【关闭】，true【开启】</td><td>是否启动 session，默认不开启 <br> 如果不开启则使用session功能无效</td></tr><tr><td>KG_SESSION_DIR</td><td>默认放在项目下./sessions文件夹，<br>文件夹若不存在则程序自动创建</td><td>文件型 sessions 文件存放路径</td></tr><tr><td>KG_SESSION_TYPE</td><td>默认 file <br>可以设置【file, memcache, redis】</td><td>设置使用session哪一种存储类型</td></tr><tr><td>KG_SESSION_HOST</td><td>主机地址,默认值：tcp://127.0.0.1:11211</td><td>非文件型 session 服务器地址:端口 <br> session 类似为 memcache 或 redis 时，<br> 对应的主机地址 [memcache 11211 redis 6379]</td></tr></tbody></table>`,17)]))}const G=d(s,[["render",o]]);export{n as __pageData,G as default};
