# 内置小工具

> [!tip] 内置小工具
> kouGrace 封装了一些常用的工具函数。虽然很多开发者追求百分百的面向对象编程，但适当的使用函数也是一种高效的选择，合适、合理才是最好的选择，kouGrace 提供了一个自定义函数文件，您可以在文件内编写自己的自定义函数并使用。

## 内置自定义函数文件位置
> /kouGrace/commonFunctions.php

## 内置自定义函数编写及调用

```php
// 打开 : /kouGrace/commonFunctions.php 建议在最后追加编写
function test(){    // [!code focus:3]
    echo 'test...';
}
// 在框架其他文件内调用
// 框架在运行时会自动加载自定义函数文件
// 所以可以直接使用自定义函数
\test(); // 加上 \ 代表顶级命名空间，预防命名空间冲突；   // [!code focus:1]
```

## 打印变量
```php
函数 :  p($var, $type = false)  // [!code highlight]
功能 :  print_r 和 var_dump 函数的组合;
参数 :  可填2个参数
        1、需要打印的值
        2、可选【默认false】 默认使用 print_r 打印变量，为true时使用 var_dump 打印变量；
```

## 终止运行
```php
函数 : kgExit($msg) // [!code highlight]
功能 : 终止运行并输出消息，等于 exit();  
参数 : $msg 可选参数 【 默认 ""】
```

## 动态设置 option 选中状态
```php
函数 : isSelected($val1, $val2)// [!code highlight]
参数 : 2个比较变量；
 
举例 : // [!code warning] 
class indexController extends kouGrace{
    public function index(){
        $array = array(
            1 => 'php',>
            2 => '.net',
            3 => 'jave'
        );
        $currentKey = 2;
        echo "<select>";
        foreach($array as $k => $v){
            echo '<option value="'.$k.'"';
            \isSelected($k, $currentKey);
            echo '>'.$v.'</option>';
        }
        echo "</select>";
    }
}
```

## 去除全部空白字符
```php
函数 : trimAll($val) // [!code highlight]
参数 : 字符串变量; 
返回 : 去除空格后的字符串
 
举例 : // [!code warning]
<?php
class indexController extends kouGrace{
    public function index(){
    $str = trimAll(' g    r 
a ce ');
        echo $str;
    }
}
```

## 动态设置radio/CheckBox 选中状态
```html
函数：isChecked(参数1,参数2) // [!code highlight]
参数： 2个参数，分别为 对比数值1、   对比数值2
返回：如果两个值一致，则输出 checked 字符

举例 : // [!code warning]
<input type="radio" name="" <?php isChecked($val1,$val2);?> id="">
<input type="checkbox" name="" <?php isChecked($val1,$val2);?> id="">
```

## 将符合规则的数组转换为option
```php
函数 : dataToOption($data, $currentId = 0)  // [!code highlight]
参数 : 2个参数
       1、符合规则的数据 【array(值 => 名称)，如：array(1 => '男', 2=> '女')；】
       2、选中数据 id；返回 : html 形式的 option 列表

举例 :  // [!code warning]

<?php
class indexController extends kouGrace{
    public function index(){
        echo "<select>";
        $array = array(1 => 'php', 2 => '.net', 3 => 'jave');
        dataToOption($array, 2);
        echo "</select>";
    }
}
```       

## 修正 POST 参数
```php
函数 : initPOST($name, $value = '')  // [!code highlight]
参数 : 2个参数 
       1、 $_POST 键名称 
       2、修正后的值
返回 : 修正后的值
说明 : 类似于判断某个 $_POST 数据是否为 empty，如果是对其进行初始化赋值；

示例 : // [!code warning]
class indexController extends kouGrace{
    public function index(){
        echo initPOST('name','grace');
    }
}
```

## 修正 GET 参数
```php
函数 : initGET($name, $value = '') // [!code highlight]
参数 : 2个参数
       1、$_POST 键名称 
       2、修正后的值
返回 : 修正后的值
说明 : 类似于判断某个 $_GET 数据是否为 empty，如果是对其进行初始化赋值；

示例 :  // [!code warning]
class indexController extends kouGrace{
    public function index(){
        echo initGET('name','grace');
    }
}
```

## 工具实例化函数
```php
功能：适用于不能使用命名空间的工具类，自动加载且保证一次加载
函数：tool($toolName, $arguments) // [!code highlight]
参数：
     1、工具类名称 
     2、对应参数【根据工具类构造函数决定参数个数】
示例: // [!code warning]
$excel = tool('PHPExcel');
$tool  = tool('test', 1 , 'grace');
```

## 检测是否为移动端端访问
```php
函数： isMobile()// [!code highlight]
参数： 无参数
返回： bool值。 移动端访问则为真，非移动端为假
```

## 判断当前协议是否为POST
```php
常量： IS_POST // [!code highlight] 
返回： bool值。 为POST则返回真，非POST返回假
```

## 检测是否为GET请求
```php
常量: IS_GET // [!code highlight] 
返回： bool值。 为GET则返回真，非GET返回假
```
## 检测是否为PUT请求
```php
常量：IS_PUT // [!code highlight] 
返回： bool值。 为PUT则返回真，非PUT返回假
```

## 检测是否为DELETE请求
```php
常量：IS_DELETE // [!code highlight] 
返回： bool值。 为DELETE则返回真，非DELETE返回假
```

## 检测是否为AJAX请求
```php
常量：IS_AJAX // [!code highlight] 
返回： bool值。 为AJAX则返回真，非AJAX返回假
```
 