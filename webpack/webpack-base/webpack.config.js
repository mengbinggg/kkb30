/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-25 09:55:56
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-10-31 10:45:44
 * @Descripttion:
 */
const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin') // 直接安装版本是5，如需安装版本4则需要指定版本

module.exports = {
  // 单入口（当entry传入一个字符串时，会自动解析为一个对象，且key为main，value为该字符串）
  // entry: './src/index.js', // 默认路径src/index.js
  // 多入口（多入口一定对应多出口）
  entry: {
    index: './src/index.js',
    login: './src/login.js',
  },
  output: {
    path: path.resolve(__dirname, './build'), // 必须时一个绝对路径
    filename: '[name].js', // [name]是一个占位符，对应entry对象的key
  },
  mode: 'development', // [production/development/none] 指定打包模式，开发模式不会进行压缩
  // 插件
  plugins: [
    new htmlwebpackplugin({
      template: './src/index.html', // 指定模板文件
      filename: 'index.html',
      chunks: ['index'], // 引入的chunk数组
    }),
    new htmlwebpackplugin({
      template: './src/index.html',
      filename: 'login.html',
      chunks: ['login'],
    }),
  ],
}
