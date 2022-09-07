<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-07 14:29:27
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-07 15:39:45
 * @Descripttion: 
-->
# react配置代理
### 方式一
1. 步骤：在package.json中追加如下配置
    ```json
    "proxy":"http://localhost:5000"
    ```
2. 缺点：不能配置多个代理
3. 工作方式：当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

### 方式二
1. 步骤：创建代理配置文件src/setupProxy.js
    ```js
    const proxy = require('http-proxy-middleware')

    module.exports = function (app) {
        app.use(
            //api1是需要转发的请求(所有带有/api1前缀的请求都会转发)
            proxy('/api1', {
            target: 'http://localhost:5000', // 转发目标地址
            changeOrigin: true, // 控制服务器接收到的请求头中host字段的值
            /*
                changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
                changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
                changeOrigin默认值为false，但我们一般将changeOrigin值设为true
            */
            pathRewrite: { '^/api1': '' }, // 去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
            }),
            proxy('/api2', {
                target: 'http://localhost:5001',
                changeOrigin: true,
                pathRewrite: { '^/api2': '' },
            })
        )
    }
    ```
2. 说明：可以配置多个代理，可以灵活的控制请求是否走代理