/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-20 17:22:27
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-10-20 17:34:28
 * @Descripttion: 
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use('ajax', createProxyMiddleware({
        target: 'https://i.maoyan.com',
        changeOrigin: true
    }))
}