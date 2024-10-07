# 命令行工具介绍
通过 kouGrace 内置的命令行工具可以快速的创建分组、控制器、模型文件，使用方法详见下面的说明。

> [!CAUTION] 未来更新
> 此功能暂未实现，但是思路已经有了，等待更新....

## 使用前提   
### 1 php 已添加至环境变量   
php 环境变量设置教程 :   
widows : https://jingyan.baidu.com/article/37bce2beb6e2681002f3a20c.html   
macOs : https://blog.csdn.net/yunxixiao/article/details/117032913   
   
### 2 使用终端  
您可以通过各类终端工具使用 grace 命令，更推荐您在编辑器内置终端内使用 grace 命令。

## 命令说明

```sh
// 注意在项目根目录下使用下面的命令
默 认 命令 : php grace
创 建 分组 : php grace cg 分组名称
创建控制器 : php grace cc 分组名称 [ null 代表顶级分组 ] 控制器名称
创 建 模型 : php grace cm 模型名称
```

通过上面的命令，您就可以快速的实现 命令方式 创建分组、控制器、模型文件。