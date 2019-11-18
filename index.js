module.exports = {
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/',
          pagination: {
            lengthPerPage: 1,
          },
          itemLayout: 'PostContainer'
        },
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
          layout: 'Tag',
          frontmatter: { title: 'Tag' },
          itemlayout: 'Tag',
          pagination: {
            perPagePosts: 3
          }
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
