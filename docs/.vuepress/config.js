module.exports = {
  title: "神码前端",
  description: "什么前端?",
  theme: 'reco',
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      { text: "Home", link: "/" },
      { text: "Odoo", link: "/odoo/" },
      { text: "React", link: "/react/" },
      { text: "Vue", link: "/vue/" },
      { text: "Vue3", link: "/vue3/" },
      { text: "VuePress", link: "/vuepress/" },
      { text: "JS", link: "/JS/" },
      { text: 'Github', link: 'https://github.com/dingtaogo/digitalchina-frontend.github.io'}
    ],
    sidebar: {
      //对象的默认路径
      '/vuepress/': [
        '', //侧边栏第一个页面是：/blog/fontend/README.md,、链接文字自动获取(页面的第一个header)，即h1(前端技术)
        'startQuick',  //侧边栏第二个页面是：/blog/fontend/myhtml.md,链接文字自动获取(页面的第一个header)，即h2(html 二级标题)
        'directory-structure'
      ]
    }
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-226963490-2",
      },
    ],
    ['@vuepress/back-to-top']
  ],
};
