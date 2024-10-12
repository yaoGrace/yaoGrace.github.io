# URL 生成

> 在开发过程中我们经常需要路由地址的反转解析，kouGrace 提供了 u() 函数来实现这个功能；
## 注意 
::: danger !!! 
使用U函数生成路由地址，必须先在入口文件index.php 中优先设置 使用多应用 还是单应用   
不然会影响U函数生成的地址
:::
```php
# index.php入口文件里面提前设置好 // [!code highlight]
// 定义是否开启多应用模块 
// 默认为 false - 单应用 , true - 多应用 [优先定义,定义后就不要再更改了]
const KG_MULTI_MODULE = true; // [!code highlight]
```

## 函数参数
```php
函数：
u($routerurl, $params = '', $page = null) // [!code highlight]
/**
 * 路由地址生成
 * 多应用             | 单应用
 * admin/index/index | index/index
 * @param $routerurl 路由地址,如多模块，   
 *        格式为：模块名/控制器名/方法名 , 如单模块，格式为：控制器名/方法名
 * @param $params 参数数组
 * @param $page 页数数字
 * @return string 路由地址
 */ 

```


## 示例
```php
<?php
class testController extends kouGrace{
    public function index(){
        // 多应用模式下
        echo u('admin/index/test') ;
        echo u('admin/index/test', array('a','b'), 5);

        // 单应用模式下
        echo u('index/test') ;
        echo u('index/test', array('a','b'), 5);

    }
}
/* 输出结果 
/admin/index/test/
/admin/index/test/a/b/page_5

/index/test/
/index/test/a/b/page_5
*/
```
