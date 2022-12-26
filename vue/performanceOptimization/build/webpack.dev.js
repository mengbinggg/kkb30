/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-16 10:05:33
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-25 15:34:45
 * @Descripttion: 
 */
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackCommonConf = require('./webpack.common')

module.exports = merge(webpackCommonConf, {
    mode: 'development',
    module: {
        // 忽略指定文件的解析
        // noParse: /jquery/,
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    // 开启Babel缓存
                    cacheDirectory: true
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            // 直接引入图片 url
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        esModule: false
                    }
                }
                
            }
        ]
    },
    plugins: [
        // 开启热更新
        new webpack.HotModuleReplacementPlugin(),
        // 忽略moment中/locale目录下的所有文件
        new webpack.IgnorePlugin(/\.\/locale/, /moment/)
    ],
    optimization: {
        // 开启Scope Hoisting
        concatenateModules: true,
        usedExports: true,
        providedExports: true
    },
    devtool: 'cheap-module-eval-source-map',  // 生成map文件
    devServer: {
        contentBase: '../dist',
        hot: true
    },
    // watch: true,
    // watchOptions: {
    //     // 忽略哪些文件
    //     ignored: /node_modules/,
    //     // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高（默认为 300ms）
    //     aggregateTimeout: 300,
    //     // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的（默认每隔1000毫秒询问一次）
    //     poll: 1000
    // }
})