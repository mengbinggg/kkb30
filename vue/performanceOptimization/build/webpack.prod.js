/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-16 10:05:33
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-25 15:38:44
 * @Descripttion: 
 */
const path = require('path')
const { merge } = require('webpack-merge')
const happyPack = require('happypack')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpackCommonConf = require('./webpack.common')

module.exports = merge(webpackCommonConf, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                // 把对 .js 文件的处理转交给 id 为 happy 的 HappyPack 实例
                loader: 'happypack/loader?id=happy',
                exclude: /node_modules/
            }, 
            // 图片 - 考虑 base64 编码的情况
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 5 * 1024,
                    outputPath: '/img/',  // 打包到 img 目录下
                    publicPath: './img'  // 图片使用路径
                }
            },
            // 处理css
            {
                test: /\.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        // happyPack 开启多进程打包
        new happyPack({
            // 用唯一标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
            id: 'happy',
            loaders: ['babel-loader?cacheDirectory']
        }),
        
        // ParallelUglifyPlugin 并行压缩输出的 JS 代码
        new ParallelUglifyPlugin({
            // 还是使用 UglifyJS 压缩，只不过帮助开启了多进程（webpack内置了uglify压缩）
            uglifyJS: {
                output: {
                    beautify: false, // 最紧凑的输出
                    comments: false, // 删除所有的注释
                },
                compress: {
                    // 删除所有的 `console` 语句，可以兼容ie浏览器
                    drop_console: true,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true,
                }
            }
        }),

        // 抽离css
        new MiniCssExtractPlugin({
            filename: 'css/style.[contentHash:8].css'
        })
    ],
    // mai
    optimization: {
        // 压缩css
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],

        // 分割代码块
        splitChunks: {
            chunks: 'all',  // initial 入口chunk(不处理异步导入的文件)；async 异步chunk(只处理异步导入的文件)；all 全部chunk

            // 缓存分组
            cacheGroups: {
                // 第三方模块
                vendor: {
                    name: 'vendor', 
                    priority: 1,  // 权限更高，优先抽离，重要！！！
                    test: /node_modules/,
                    minSize: 0,  // 大小限制
                    minChunks: 1  // 最少复用过几次
                },

                // 公共的模块
                common: {
                    name: 'common', 
                    priority: 0, 
                    minSize: 0, 
                    minChunks: 2 
                }
            }
        }
    }
})