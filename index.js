const permalink = require('./examples/.vuepress/theme.config').base.itemPermalink

module.exports = {
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/',
          pagination: {
            layout: 'PostsLayout',
            lengthPerPage: 2,
          },
          layout: 'PostsLayout',
          itemLayout: 'PostLayout',
          itemPermalink: permalink
        },
      ]
    }],
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
