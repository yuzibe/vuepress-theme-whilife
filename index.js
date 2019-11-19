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
