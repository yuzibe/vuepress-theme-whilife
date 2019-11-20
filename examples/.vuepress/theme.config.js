const siteConfig = require('./site.config')

module.exports = {
    base: {
        permalink: '/post/:slug'
    },
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
    wallpaper: {
        title: siteConfig.title,
        subtitle: '基于时间线的博客主题',
        backgroudImg: ''
    },
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