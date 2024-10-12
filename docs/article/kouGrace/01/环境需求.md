# 环境需求 
## 1. kouGrace 环境要求 
```md
apache | nginx + php 5.6 + ( 使用命名空间 )
apache | nginx + php 7.0 +
apache | nginx + php 8.0 +
```
是的 kouGrace 不支持 IIS + PHP !  
## 2. php 扩展要求

```md
1、pdo
2、mbstring
3、gd
4、curl
5、其他扩展见对应工具类的使用说明
```
## 3. 伪静态

kouGrace 需要 web 服务器的伪静态支持，请开启对应 web 服务器的伪静态模块！

### 3.1 apache伪静态
```sh
#创建 .htaccess 文件 放置在项目根目录
<IfModule mod_rewrite.c>
  Options +FollowSymlinks -Multiviews
  RewriteEngine On

   #默认情况
  RewriteCond %{REQUEST_FiLENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^/?(.*)$ index.php?s=/$1 [QSA,PT,L]
</IfModule>
```
### 3.2 nginx  伪静态
```sh
server {
    listen 80;
    server_name  www.xxxx.com;
    root   "绝对路径"; 
    location / {
        index  index.html index.htm index.php;
        if (!-e $request_filename){
          rewrite ^(.*)$  index.php?s=/$1; 
        }
    }
    # 宝塔面板Nginx伪静态 复制结束
}
```  

## 4.nginx伪静态案例
::: tip 小提示
apache伪静态不需要手动布置，框架已经集成好了，比较简单   
主要讲解的还是nginx环境部署   
框架已经将nginx伪静态规则放在根目录的 Nginx.htaccess文件里面   
自己可以复制/修改规则然后复制到服务器伪静态或者虚拟主机的伪静态规则内
:::

```sh
# Nginx伪静态配置
# 如果有其他分组的，继续这个模式添加
# 将下面的规则复制/修改后放在服务器或者虚拟主机的伪静态配置里面
 
# 伪静态
location / {
    index  index.html index.htm index.php;
    if (!-e $request_filename)
    {
        rewrite ^/(.*)$  /index.php?s=/$1; # 宝塔伪静态 需要这样配
        # rewrite ^(.*)$  /index.php?s=/$1;  其他的如果用宝塔的这个规则不可以的话 可以试试这个
    }
}
```

::: danger 伪静态配置
如果本页面伪静态配置失败，也可以参考thinkphp的伪静态配置
:::
