import{_ as s,c as i,a4 as e,o as l}from"./chunks/framework.C2dBoaCi.js";const c=JSON.parse('{"title":"运行 · 调试","description":"","frontmatter":{},"headers":[],"relativePath":"article/kouGrace/01_yunxingdebug.md","filePath":"article/kouGrace/01_yunxingdebug.md","lastUpdated":1727788737000}'),n={name:"article/kouGrace/01_yunxingdebug.md"};function t(p,a,h,r,o,k){return l(),i("div",null,a[0]||(a[0]=[e(`<h1 id="运行-·-调试" tabindex="-1">运行 · 调试 <a class="header-anchor" href="#运行-·-调试" aria-label="Permalink to &quot;运行 · 调试&quot;">​</a></h1><h2 id="运行流程" tabindex="-1">运行流程 <a class="header-anchor" href="#运行流程" aria-label="Permalink to &quot;运行流程&quot;">​</a></h2><p>kouGrace 框架运行流程 :</p><ol><li>http 请求， 如 : <a href="http://www.xxxx.com/index" target="_blank" rel="noreferrer">http://www.xxxx.com/index</a></li><li>服务器伪静态规则将请求统一重定向到入口页面 index.php ；</li><li>框架核心文件初始化运行；</li><li>路由解析 : 运行解析规则对应的控制器及方法，并解析保存其他 url 参数；</li><li>调用缓存、模型、工具、视图等完成某个具有页面的运行工作；</li></ol><h2 id="框架调试" tabindex="-1">框架调试 <a class="header-anchor" href="#框架调试" aria-label="Permalink to &quot;框架调试&quot;">​</a></h2><p>kouGrace 内置了调试功能，可以在运行页面展示一下调试信息 :</p><ol><li>当前请求服务器运行时间、消耗内存数量；</li><li>当前请求执行过程中引用的所有文件；</li><li>sql 运行日志，包含 : sql 语句、查询时间、错误信息；</li></ol><h2 id="关闭调试" tabindex="-1">关闭调试 <a class="header-anchor" href="#关闭调试" aria-label="Permalink to &quot;关闭调试&quot;">​</a></h2><p>一旦开发完毕，并将项目部署至服务器，就应该关闭调试功能<br> 关闭方法 :<br> 打开对应分组下的入口文件 : /index.php</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否调试或者404页面  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开发环境(debug调试 跳转到默认模块-默认控制器-默认方法)-false </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//正式上线后(错误就404页面)-true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> KG_ERROR_404_PAGE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否开启追踪模式 默认为 false - 关闭, true - 开启</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> KG_TRACE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意事项</p><p>调试会在请求页面直接展示调试所需的 html 结果，如果您开发的是应用 api 接口请关闭调试，避免调试内容影响接口请求数据。</p></div><p><strong>错误展示</strong><br> kouGrace 重构了 php 的错误展示，以较为清晰的方式来展示代码错误及异常；</p>`,12)]))}const u=s(n,[["render",t]]);export{c as __pageData,u as default};
