<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-25 16:58:37
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-29 10:34:17
 * @Descripttion: webpack环境配置
-->
# webpack环境配置

## .npmrc
1. 作用：配置当前项目的npm仓库镜像地址，为了统一项目组成员安装依赖包时所用的仓库地址保持一致
2. 优先级：
    - 当前项目下的.npmrc文件
    - 用户配置的.npmrc文件（如：C:\Users\mb\.npmrc）
3. 配置格式：
    - 以key-value的形式进行配置
    - 可以指定特殊的命名空间来源（如@yh:，表示以@yh:开头的包从这里下载）

## loader
#### 处理css/less
1. 安装style-loader/css-loader（均需要指定版本）
```
// 解析less，需要再安装less和less-loader（均需要指定版本）
npm i less less-loader -D
```
2. use配置为数组时，从右到左解析
3. loader的作用：
    - style-loader：创建style标签，并将css代码插入到标签中，最后将style标签放入head
    - css-loader：序列化css文件
    - less-loader：将less转换为css语法
4. css-loader模块化：
    - 作用：为了导入的css文件只在导入文件中生效，不影响其他文件样式
    - 配置：在css-loader的options添加{ modules: true }

#### 处理图片
###### file-loader
1. 安装：npm i file-loader -D
2. 使用：
    - 可指定图片存放位置、访问位置
    - 可设置图片打包后的名称

###### url-loader
1. 安装：npm i url-loader -D
2. 说明：
    - 是file-loader的plus版
    - options中新增一个limit属性（超过大小以文件形式输出，未超出转为base64）

#### 处理js
###### babel

#### 自定义loader
1. loader文件导出一个函数（函数不能是箭头函数，因为函数内容需要通过this获取参数），接受一个源文件参数，最后返回操作后的文件
2. 异步：调用this.async()函数，返回callback
3. 可通过resolveLoader来配置loader文件路径

#### 手写style-loader/css-leader/less-loader
1. style-loader：创建style标签，并将css代码插入到标签中，最后将style标签放入head
2. css-loader：序列化css文件
3. less-loader：将less转换为css语法

## postcss
1. 作用：是一个用js插件来实现的css样式转换的工具集（类似于css界的babel）
2. 安装：npm i postcss postcss-loader@4 -D
3. postcss-loader放置位置：css-loader之后（因为postcss-loader的是接受一个css文件，并返回转换后的css）
4. postcss的配置内容放在专门的配置文件中postcss.config.js，可在其中配置插件信息
5. 常用插件：
    - autoprefixer：自动添加浏览器前缀，通过browserslist配置需要适配的浏览器种类
        - 安装：npm i autoprefixer -D
        - 添加位置：
            - 通过package.json配置browserslist属性
            - 添加.browserslistrc配置文件配置
        - 参数说明：
            - "> 1%"：市场占有率大于1%的浏览器
            - "last 2 versions": 适配最新2个版本

## plugin
#### min-css-extract-plugin
1. 作用：将css代码提取到一个单独的css文件中，压缩css代码
2. 安装：npm i mini-css-extract-plugin@1 -D（指定版本）

#### clean-webpack-plugin
1. 作用：用于再次打包前自动清楚上一次打包的文件
2. 安装：npm i clean-webpack-plugin -D
3. 使用：
```
// 注意首字母大写
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

plugins: [
    new CleanWebpackPlugin(),
    // ...
],
```

#### 遇到的问题
1. file-loader处理图片路径时，配置图片存放位置后，css、js中访问图片路径不对