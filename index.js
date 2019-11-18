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
          itemPermalink: '/post/:slug'
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
