/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-01-29 11:18:55
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-01-29 11:24:32
 * @Descripttion: 
 */
const { resolve } = require('path')

// 这里通过chainWebpack来做了两项配置：
// 1. 让原来的其他处理svg的依赖不处理src/icons下我们的自定义图标文件
// 2. 通过svg-sprite-loader来处理自定义的图标文件，options里面的设置表示，生成的svg的symbolId为icon和文件名的拼接。
module.exports = {
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
  },
}
