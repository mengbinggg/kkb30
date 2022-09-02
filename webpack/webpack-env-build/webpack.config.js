/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-25 17:21:27
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-26 16:48:03
 * @Descripttion:
 */
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
    new miniCss({
      filename: 'css/index.css',
    }),
  ],
  resolveLoader: {
    modules: ['node_modules', './loaders'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          miniCss.loader,
          {
            loader: 'css-loader',
            options: {
              // modules: true, // 模块化
            },
          },
          'postcss-loader',
        ],
      },
      // {
      //   test: /\.less$/,
      //   use: ['style-loader', 'css-loader', 'less-loader'],
      // },
      // 手动实现loader
      {
        test: /\.less$/,
        use: ['my-style-loader', 'my-css-loader', 'my-less-loader'],
      },
      // 使用自定义loader
      {
        test: /\.js$/,
        use: [
          // {
          //   loader: path.resolve(__dirname, './loaders/custom-loader.js'),
          // },
          'custom-loader',
          {
            loader: path.resolve(__dirname, './loaders/custom-async-loader.js'),
            options: {
              name: '世界',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          // loader: 'file-loader',
          // options: {
          //   name: '[name].[ext]', // 图片名称
          //   outputPath: './images', // 图片输出路径
          //   publicPath: '../images', // 图片使用路径
          // },
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
