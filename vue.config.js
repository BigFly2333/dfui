// 引入插件
const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

console.log(resolve('examples'))

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js'
    }
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        configFile: '.stylelintrc.json',
        files: ['./examples/assets/**/*.less', './examples/**/*.vue'] //路径
      })
    ]
  },
  css: {
    loaderOptions: {
      css: {},
      less: {},
      sass: {}
    }
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('assets', resolve('examples/assets'))
      .set('components', resolve('examples/components'))
      .set('views', resolve('examples/views'))
      .set('api', resolve('examples/api'))
      .set('utils', resolve('examples/utils'))
  }
}