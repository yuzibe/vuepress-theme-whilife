
# vuepress-theme-whilife

一个基于时间线的 vuepress 主题的博客, 经过简单配置即可使用。

## simple config

```js
module.exports = {
    // 永久链接格式
    base: {
        permalink: '/post/:slug'
    },
    // 顶部
    header: {
        title: siteConfig.title,
        navbar: {
            inner: [{
                name: 'home',
                path: '/'
            }, {
                name: 'about',
                path: '/about/'
            }],
            outer: [{
                name: 'github',
                path: '//github.com/atsvvx/vuepress-theme-whilife'
            }]
        }
    },
    // 背景
    wallpaper: {
        title: siteConfig.title,
        subtitle: '一个基于时间线',
        backgroudImg: ''
    },
    // 底部
    footer: {
        copyright: {
            startFullYear: 2018,
            name: '哈缺氧'
        },
        custom: `
                <div class="busuanzi">
                    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
                    <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
                </div>`,
    }
}
```

## 效果

### 大屏

![](https://i.loli.net/2019/11/20/cIT8C5GvjUJkSPB.png)

### 小屏

![](https://i.loli.net/2019/11/20/Sa7j2FNcYH6UIrD.png)

## License

MIT · 哈缺氧
