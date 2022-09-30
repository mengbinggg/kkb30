/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-07 14:54:27
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-07 15:58:06
 * @Descripttion: proxy代理配置文件
 */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { '^/api1': '' },
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' },
    })
  )
}
