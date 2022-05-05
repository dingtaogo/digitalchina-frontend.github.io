# VuePress

## 指南

## 介绍
VuePress 由两部分组成：第一部分是一个[极简静态网站生成器](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://vuepress.vuejs.org/zh/theme/)和[插件API](https://vuepress.vuejs.org/zh/plugin/)，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

### 它是如何工作的？

事实上，一个 VuePress 网站是一个由 [Vue](https://vuejs.org/)、[Vue Router](https://github.com/vuejs/vue-router)和 [webpack](https://webpack.js.org/)驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。

在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 [Nuxt](https://nuxtjs.org/)的 `nuxt generate` 命令，以及其他的一些项目，比如 [Gatsby](https://www.gatsbyjs.com/)

### Features
内置的 Markdown 拓展

- [目录](https://vuepress.vuejs.org/zh/guide/markdown.html#%E7%9B%AE%E5%BD%95)
- [自定义容器](https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8)
- [代码块中的行高亮](https://vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%AF%AD%E6%B3%95%E9%AB%98%E4%BA%AE)
- [行号](https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%A1%8C%E5%8F%B7)
- [导入代码段](https://vuepress.vuejs.org/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E6%AE%B5)

在 Markdown 中 使用 Vue

- [模板语法](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95)
- [使用组件](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6)

Vue驱动的自定义主题系统

- [网站和页面的元数据](https://vuepress.vuejs.org/zh/theme/writing-a-theme.html#%E7%BD%91%E7%AB%99%E5%92%8C%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%85%83%E6%95%B0%E6%8D%AE)
- [内容摘抄](https://vuepress.vuejs.org/zh/theme/writing-a-theme.html#%E5%86%85%E5%AE%B9%E6%91%98%E6%8A%84)

默认主题

- Responsive layout
- [首页](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)


#### [在 GitHub上编辑此页](https://github.com/dingtaogo/digitalchina-frontend.github.io)<span style="margin-top: 0; float: right;font-size: 14px;">上次更新: 11/29/2021, 7:08:57 AM</span> 



