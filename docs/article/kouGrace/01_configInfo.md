# 配置文件

::: danger 不同级别配置信息
本框架有2种配置文件，分别为 系统级 和 应用模块级。    
1. 系统级配置文件，在 `./Conf/` 目录下，  `config.php`  的文件。    
2. 应用模块级配置文件，在 `./App/` 目录下，对应的应用模块内为 `config/配置文件名.php` 
:::


## 系统级配置文件

```php
<?php 
return array(
    // 视图层不自动加载的应用模块名称 禁止为home 模块
    'ViewNoAutoDisplayModuleDirName' => [], // 默认不显示视图的应用模块名称，必须是数组(空数组或者一维数组)

    //数据库配置
    'db'                 => array(
        'databaseType'   =>    'mysql',     // 数据库类型
        'host'           =>    '127.0.0.1', // 数据库主机地址
        'port'           =>    '3306',      // 数据库端口
        'user'           =>    'xxxx',      // 数据库账户
        'pwd'            =>    'xxx',      // 数据库密码
        'dbname'         =>    'xxx',      // 数据库名称
        'charset'        =>    'utf8mb4',      // 字符集
        'pre'            =>    'xxx_'           // 数据表统一前缀
    ),

    // 缓存类型
    'allowCacheType'     => array('file', 'memcache', 'redis'),

    // 缓存设置
    'cache'             => array(
        'type'          => 'file',
        'host'          => '127.0.0.1', // 主机地址 [ 'memcache', 'redis' 需要设置 ]
        'password'      => '', // 对应各类服务的密码, 为空代表不需要密码
        'port'          => '6379', // 对应服务的端口
        'pre'           => 'grace_'
    ),
    // 安装程序配置文件
    'intall'=>array(
        'ORIGINAL_TABLE_PREFIX' => 'zy_', //默认表前缀
    ),
);

```


## 应用模块级配置文件

```php
<?php 
return array( );

```