# Markdown 扩展示例

本页演示了 VitePress 提供的一些内置 markdown 扩展。

## 语法高亮显示

VitePress 提供了由    [Shiki](https://github.com/shikijs/shiki),提供支持的语法高亮，以及行高亮等附加功能:

**输入（第四行代码高亮）**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

::: info 信息
这是一个信息框。
:::

::: tip 提示
这是一个提示。
:::

::: warning 危险
这是一个警告。
:::

::: danger 微信
这是一个危险的警告
:::

::: details 折叠
这是一个 details 块。
:::

## 更多

查看文档以获取 [full list of markdown extensions](https://vitepress.dev/guide/markdown).
