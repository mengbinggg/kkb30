<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-17 16:26:26
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-17 16:44:56
 * @Descripttion: 
-->
# babel

## 基本使用
1. 作用：将es6代码转换为es5
2. 配置：
   - 配置文件：.babelrc
   - 配置项：
     - plugins：配置babel的转码规则
     - presets：一系列babel转码规则的合集
  
## babel-polyfill
1. 作用：
   - 前提：babel本身只能用于转码es6的新语法，而es6的一些新的api，并不会转码
   - 作用：polyfill就是用于转码新的api
2. 配置：
   ```json
    {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "useBuiltIns": "usage",
                    "corejs": 3
                }
            ]
        ],
        "plugins": []
    }

   ```
3. 缺点：直接修改全局变量，会污染全局变量

## babel-runtime
1. 作用：用于解决polyfill中全局变量污染的问题