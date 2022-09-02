<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-02 18:11:19
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-04 10:26:39
 * @Descripttion: 项目说明
-->
#### 手写vue-router

###### 手动搭建一个简易版vue2项目
1. 初始化package.json文件
    ```
    npm init -y
    ```
2. 安装vue
    ```
    npm install vue -S
    ```
3. 新建src/main.js文件、src/App.vue文件
    ```
    // App.vue
    <template>
        <div class="box">{{msg}}</div>
    </template>
    <script>
    export default {
        data() {
            return {
                msg: 'hello world'
            }
        }
    }
    </script>
    <style>
    .box {
        color: red
    }
    </style>
    ```
    ```
    // main.js
    import Vue from 'vue'
    import App from './App.vue'

    new Vue({
        render: h => h(App)
    }).$mount('#app')
    ```
4. 新建webpack.config.js配置文件、新建index.html文件，并且修改package.json文件
    ```
    // 安装cross-env
    npm install cross-env -D

    // 安装webpack、webpack-cli、webpack-dev-server
    npm install webpack webpack-cli webpack-dev-server -D

    // 安装vue-loader、vue-template-complier
    npm install vue-loader vue-template-complier -D

    // 安装style-loader、css-loader
    npm install style-loader css-loader -D

    // 安装htmlwebpackplugin
    npm install html-webpack-plugin -D
    ```
    ```
    // index.html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <div id="app"></div>
        </body>
    </html>
    ```
    ```
    // webpack.config.js
    const path = require('path')
    const VueLoaderPlugin = require('vue-loader/lib/plugin')
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const isDev = process.env.NODE_ENV === 'developement'

    const config = {
        mode: 'developement',
        entry: path.resolve(__dirname, './src/main.js'),
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: '/.vue$/',
                    loader: ['vue-loader']
                },
                {
                    test: '/.css$/',
                    loader: ['style-loader', 'css-loader']
                }
            ]
        },
        plugin: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html',
                inject: 'body'
            })
        ]
    }
    if(isDev) {
        config.devtool = 'cheap-module-eval-source-map',
        config.devServer = {
            port: 8081,
            host: '127.0.0.1'
        }
    }
    module.exports = config
    ```
    ```
    // package.json
    "script": {
        "build": "cross-env NODE_ENV = production webpack --config webpack.config.js",
        "dev": "cross-env NODE_ENV = developement webpack-dev-server"
    }
    ```
5. 配置路由信息（新建src/router/index.js文件，并且修改main.js）
    ```
    // 1. 安装vue-router
    npm install vue-router -S
    
    // 2. 新建home、list组件

    // router/index.js
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import home from '../components/home.vue'
    import list from '../components/list.vue'

    Vue.use(VueRouter)

    const routes = [
        {
            path: '/',
            component: home,
        },
        {
            path: '/list',
            component: list,
        },
    ]
    const router = new VueRouter({
        mode: 'hash',
        routes,
    })

    export default router
    ```
    ```
    // main.js
    import Vue from 'vue'
    import App from './App.vue'
    import router from './router'

    new Vue({
        router,
        render: (h) => h(App),
    }).$mount('#app')
    ```

###### 手写vue-router
1. 修改main.js文件
    ```
    import Vue from 'vue'
    import App from './App.vue'
    // import router from './router'
    import router from './mRouter'  // 引入自定义的router

    new Vue({
        router,
        render: (h) => h(App),
    }).$mount('#app')
    ```
2. 新建src/mRouter/index.js文件
    ```
    // index.js
    import Vue from 'vue'
    import VueRouter from './MVueRouter'  // 引入自定义的router类
    import home from '../components/home.vue'
    import list from '../components/list.vue'

    Vue.use(VueRouter)

    const routes = [
        {
            path: '/',
            component: home,
        },
        {
            path: '/list',
            component: list,
        },
    ]
    const router = new VueRouter({
        mode: 'hash',
        routes,
    })

    export default router
    ```
3. 新建src/mRouter/MVueRouter.json文件
    - 定义MVueRouter类
        - 构造函数中定义响应式数据current
        - 构造函数中监听hashchange事件
    - 实现MVueRouter的静态方法install
        - vue实例上挂载router对象
        - 注册全局组件router-link和router-view
    - 导出MVueRouter对象

###### 手写vue-router路由嵌套
1. MVueRouter的构造函数中
    - 将current修改为普通数据（非响应式数据）
    - 定义响应式数据matched，存放根据路由匹配到的路由信息
2. router-view组件注册时（不在根据current来获取路由信息）
    - 标记当前组件是router-view
    - 判断当前router-view的深度
    - 根据深度在matched数组中，获取当前路由信息