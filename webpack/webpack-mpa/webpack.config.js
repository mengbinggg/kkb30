/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-25 17:21:27
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-29 10:21:53
 * @Descripttion:
 */
const path = require('path')
const glob = require('glob')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')

/*
 * @Description: 解析多页面路径
 * @Author: mengbing
 * @Date: 2022-08-26 17:40:59
 */
function resolveMpaPath() {
  let entry = {}
  let htmlWebpackPlugins = []
  var matchs = glob.sync('./src/*/index.js')

  matchs.forEach((item) => {
    let pageName = item.match(/\.\/src\/(.*)\/index\.js/)[1]
    entry[pageName] = item
    htmlWebpackPlugins.push(
      new htmlWebpackPlugin({
        template: `./src/${pageName}/index.html`,
        filename: `${pageName}.html`,
        chunks: [pageName],
      })
    )
  })

  return {
    entry,
    htmlWebpackPlugins,
  }
}

const { entry, htmlWebpackPlugins } = resolveMpaPath()

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },
  mode: 'development',
  plugins: [
    ...htmlWebpackPlugins,
    new CleanWebpackPlugin(),
    new miniCss({
      filename: 'css/index.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [miniCss.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]', // 图片名称
            outputPath: './images', // 图片输出路径
            publicPath: '../images', // 图片使用路径
            limit: 10 * 1024,
          },
        },
      },
    ],
  },
}
