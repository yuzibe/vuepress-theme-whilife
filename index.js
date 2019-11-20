const permalink = require('./examples/.vuepress/theme.config').base.permalink

module.exports = {

  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/',
          pagination: {
            layout: 'Posts',
            lengthPerPage: 2,
          },
          layout: 'Posts',
          itemLayout: 'Post',
          itemPermalink: permalink
        },
      ]
    }], ['vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: '提示',
      }
    ], ['vuepress-plugin-container', {
      type: 'danger',
      defaultTitle: '警告',
    }
    ], ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置\
      config = {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }
    }
  },
}
