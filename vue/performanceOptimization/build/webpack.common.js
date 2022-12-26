/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-16 10:05:15
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-25 14:38:56
 * @Descripttion: 
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')



module.exports = {
    // 单入口
    entry: path.resolve(__dirname, '../src/index.js'),
    // // 多入口
    // entry: {
    //     index: path.resolve(__dirname, '../src/index.js'),
    //     user: path.resolve(__dirname, '../src/user.js')
    // },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "fonts/[name].[hash:7].[ext]"
                }
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html'
        }), 
    ]
}