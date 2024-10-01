# 如何修改hosts访问github

## 1.手动修改hosts文件

### 下载hosts文件
下面的地址无需访问 GitHub 即可获取到最新的 hosts 内容
<!-- a链接 -->
[点击理我下载最新hosts](https://raw.hellogithub.com/hosts)

### 配置hosts
```md
Windows系统： C:\Windows\System32\drivers\etc\hosts

macOS系统：/etc/hosts 

Android（安卓）系统：/system/etc/hosts

iPhone（iOS）系统：/etc/hosts

ubuntu|Linux 系统：/etc/hosts


编辑hosts文件，打开刚才下载的hosts文件内容，将里面的内容追加在hosts文件末尾即可。
 
```

## 2.使用hosts代理工具

::: tip 推荐工具
推荐 SwitchHosts 工具管理 hosts   

以 SwitchHosts 为例，看一下怎么使用的，配置参考下面：   

Hosts 类型: Remote   

Hosts 标题: 随意   

URL: https://raw.hellogithub.com/hosts   

自动刷新: 最好选 1 小时   
:::

工具下载：

https://github.com/oldj/SwitchHosts

点击 页面右侧的 Releases 里面 找到自己对应的系统版本下载配置几款

