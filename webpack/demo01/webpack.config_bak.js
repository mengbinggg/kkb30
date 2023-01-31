/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-01-04 14:33:58
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-01-29 16:43:08
 * @Descripttion:
 */
const Path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'built.[contenthash:10].js',
    path: Path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        // 以下loader只会匹配一个，不能有两个配置处理同一种类型文件
        oneOf: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
              // 开启Babel缓存
              cacheDirectory: true,
            },
          },
          {
            test: /\.css$/,
            use: [
              // 'style-loader',
              // 因为这个loade提取js中的css成单独文件，所以不需要style-loader再创建style标签，放入样式了
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                        'postcss-preset-env',
                        {
                          // 其他选项
                        },
                      ],
                    ],
                  },
                },
              },
            ],
          },
          {
            test: /\.(png|jpg|gif)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                // 默认自动地在 resource 和 inline 之间进行选择：小于 8kb 的文件，将会视为 inline 模块类型，否则会被视为 resource 模块类型
                // 可以通过在 webpack 配置的 module rule 层级中，设置 Rule.parser.dataUrlCondition.maxSize 选项来修改文件大小
                maxSize: 10 * 1024,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源
    new htmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css',
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  performance: {
    //入口起点的最大体积
    maxEntrypointSize: 50000000,
    //生成文件的最大体积
    maxAssetSize: 30000000,
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  devtool: 'eval-source-map',
}
