/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-18 10:23:04
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-18 14:24:51
 * @Descripttion:
 */
const express = require('express')
const app = express()
const resolve = (dir) => require('path').resolve(__dirname, dir)

// 第 1 步：开放dist/client⽬录，关闭默认下载index⻚的选项，不然到不了后⾯路由
app.use(express.static(resolve('../dist/client'), { index: false }))

// 第 2 步：获得⼀个createBundleRenderer
const { createBundleRenderer } = require('vue-server-renderer')

// 第 3 步：服务端打包⽂件地址
const bundle = resolve('../dist/server/vue-ssr-server-bundle.json')

// 第 4 步：创建渲染器
const renderer = createBundleRenderer(bundle, {
    runInNewContext: false,
    template: require('fs').readFileSync(resolve('../public/index.html'), 'utf8'), // 宿主⽂件
    clientManifest: require(resolve('../dist/client/vue-ssr-client-manifest.json')), // 客户端清单
})

app.get('*', async (req, res) => {
    try {
        const context = {
            title: 'ssr test',
            url: req.url,
        }
        const html = await renderer.renderToString(context)
        res.send(html)
    } catch (error) {
        res.status(500).send('服务器内部错误！')
    }
})

app.listen(3000)
