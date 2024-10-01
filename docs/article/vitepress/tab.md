# vitepress-plugin-tabs vitepress-插件标签

> 一个插件，用于添加用于在选项卡中显示内容的语法。

<version-badge package="vitepress-plugin-tabs" />

## 安装-install
 
:::tabs
== npm
```sh
npm i -D vitepress-plugin-tabs
```
== pnpm
```sh
pnpm add -D vitepress-plugin-tabs
```
== yarn
```sh
yarn add --dev vitepress-plugin-tabs
```
== bun
```sh
bun add --dev vitepress-plugin-tab
```
:::

## 用法-Usage

安装插件后，您需要编辑 App Config 和 Theme Config 文件，使其生效！ <br/>
[App Config](https://vitepress.vuejs.org/config/app-configs) and [Theme Config](https://vitepress.vuejs.org/config/theme-configs).

```ts
// .vitepress/config.ts [此处根据自己使用的js还是ts配置]
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
})
```

```ts
// .vitepress/theme/index.ts [此处根据自己使用的js还是ts配置]
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  }
} satisfies Theme
```

## 语法-Syntax

### 具有非选择状态的选项卡

> <code>:::tabs</code> 后面不带选项卡key名 

```md
:::tabs
== tab a
a content
== tab b
b content
:::

:::tabs
== tab a
a content 2
== tab b
b content 2
:::
```

:::tabs
== tab a
a content
== tab b
b content
:::

:::tabs
== tab a
a content 2
== tab b
b content 2
:::

### 具有选择状态的选项卡
> <code>:::tabs</code> 后面带选项卡key名 
```md
:::tabs key:ab
== tab a
a content
== tab b
b content
:::

:::tabs key:ab
== 选项卡 a
我是选项卡A的内容
== 选项卡 b
我是选项卡B的内容
:::
```

:::tabs key:ab
== tab a
a content
== tab b
b content
:::

:::tabs key:ab
== 选项卡 a
我是选项卡A的内容
== 选项卡 b
我是选项卡B的内容
:::