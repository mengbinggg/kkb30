<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-25 09:32:45
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-25 09:58:21
 * @Descripttion: 
-->
#### webpack基础
##### 入门
1. 版本：
    - webpack3.x：配置繁琐，安装时只需安装webpack即可
    - webpack4.x：零配置
    - webpack5.x：...
2. 安装：
```
// 1. 推荐局部安装，全局安装不方便多项目管理
// 2. 默认安装版本5，如需安装4则需要指定版本号
npm i webpack@4 webpack-cli@4 -D
```
3. 运行：
```
// 1. 默认配置文件为根目录下webpack.config.js，没有这个文件则使用默认配置
// 2. npx的作用是：调用项目内部安装的模块命令
npx webpack 配置文件地址

// 当在命令行中，执行webpack命令时：
// 1. 通过在package.json中配置script
"scripts": {
    "build": "webpack -v"
}
// 2. 指定webpack指令的位置
node_modules/.bin/webpack -v
// 3. 通过npx
npx webpack -v
```

#### 配置文件
1. 见webpack.config.js