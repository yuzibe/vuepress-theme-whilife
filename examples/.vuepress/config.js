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
  theme: require.resolve('../../'),
  themeConfig: require('./theme.config'),
}
