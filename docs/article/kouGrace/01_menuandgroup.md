#  框架目录结构

## 目录结构
```md 
|_ app 应用目录
    |_ admin  后台分组
    |_ home   默认分组
    |_ install 安装分组
|_ cacheDataFiles 缓存存放文件
|_ Conf  系统级别配置目录
    |_ config.php  系统配置文件
|_ kouGrace 框架目录
    |_ InfoTemplates 错误信息模板文件目录
    |_ models 模型文件目录
    |_ tools 工具类目录
    |_ commonFunction.php 公共函数库文件
    |_ kouGrace.php 框架核心文件
    |_ kouGraceCreate.php 多应用自动创建模块函数
|_ statics 静态文件目录
|_ .htaccess 伪静态
|_ favicon.ico 图标
|_ index.php 入口文件
|_  README.md 说明文件

```


## 分组说明
```php
|_ app
    |_ admin 
    |_ api
    |_ home 

默认是home分组,单应用
如果需要开启多应用,可以在入口文件 index.php 开启多应用

// 定义是否开启多应用模块 ,默认为 false - 单应用 , true - 多应用
// 优先定义,定义后就不要再更改了 
const KG_MULTI_MODULE = true;

```