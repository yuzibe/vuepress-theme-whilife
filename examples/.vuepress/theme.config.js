const siteConfig = require('./site.config')

module.exports = {
    header: {
        title: siteConfig.title,
        navbar: [{
            name: 'home',
            path: '/'
        }, {
            name: 'about',
            path: '/about/'
        },{
            name: 'github',
            path: 'https://github.com/atsvvx/vuepress-theme-whilife'
        }]
    }
}