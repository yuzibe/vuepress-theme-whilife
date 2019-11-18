const siteConfig = require('./site.config')

module.exports = {
  ...siteConfig,
  markdown: {
    anchor: {
      ermalink: true,
      permalinkBefore: true,
      permalinkSymbol: ''
    }
  },
  themeConfig: require('./theme.config'),
}
