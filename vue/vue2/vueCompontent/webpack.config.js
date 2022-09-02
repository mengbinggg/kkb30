/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-02 19:41:57
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-12 18:01:59
 * @Descripttion: webpack配置文件
 */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}

const isDev = process.env.NODE_ENV === 'development'

const config = {
    mode: 'development',
    entry: resolve('./src/main.js'),
    output: {
        path: resolve('./dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
        }),
    ],
}

if (isDev) {
    config.devtool = 'cheap-module-eval-source-map'
    config.devServer = {
        port: 8081,
        host: '127.0.0.1',
    }
}

module.exports = config
