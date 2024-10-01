## 目录介绍
```md
|- docs  主目录

|- docs/.vitepress 放置vitepress的一些配置
|- docs/.vitepress/config 此目录放置一些自定义配置 ，如 导航栏，侧边栏等
|- docs/.vitepress/theme 主题
|- docs/.vitepress/config.mjs 这是vitepress的主要配置页面 

|- docs/article    此目录下放置编写的文章，所有文章都放在这个目录下 
|- docs/index.md   主页显示页面


|- node_modules 安装依赖 这个占内存比较大，不需要手动管
|- package.json 包

```

# 预览z

> https://yaograce.github.io


## 本程序布置情况

```md
1.在Gitee上布置源码
2.在Gitee的源码页面 - 管理 - 镜像仓库管理 - 添加镜像 - 添加Gitub的同步仓库(选的仓库为 yaograce.github.io这个仓库)
3.在Github上  
通过路径「用户头像」→「Settings」进入「Developer setting」；
选择「Personal access tokens」选项后点击「Generate new token」；
可以创建一个不限制时间的生成后，将 token， 复制到「Gitee」 镜像仓库 里面添加的私人密钥。

4.在Github上开启page [ setting - pages - 选择为actions] 这样就可以点击Gitee里面的同步 开始自动部署了
```
