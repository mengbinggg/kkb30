<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-12-01 15:14:24
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-12-05 11:35:51
 * @Descripttion: 
-->
# 概述

## 构建工具的作用
1. 支持模块化开发: 可以从node_modules里引入代码 + 多种模块化支持
2. 处理代码兼容性: 比如babel语法降级, less/ts等语法转换(不是构建工具做的, 构建工具将这些语法对应的处理工具集成进来实现自动化处理)
3. 提高项目性能: 压缩文件、代码分割
4. 优化开发体验:
   - 自动监听文件的变化，当文件变化以后自动进行重新打包, 然后在浏览器重新运行（热更新）
   - 开启开发服务器: 可处理跨域问题等

## vite和webpack
### vite的优势
1. vite是Vue团队的官方出品, 并且Vue-cli会在下面两个版本中将vite作为预设构建工具，同时已经有一些大厂在使用Vite去构建项目
2. 同时支持构建vue项目、react项目、angular项目等
2. vite对打包流程进行了优化，打包速度远高于webpack

### vite对打包流程的优化
1. 快速冷启动：
   - Vite不会打包全部项目文件代码，会根据客户端的请求加载不同的模块处理，实现按需加载
   - webpack一开始就将整个项目都打包一遍，再开启dev-server，如果项目规模庞大，打包时间必然很长
2. 编译速度快：Vite使用esbuild预构建依赖，而esbuild是用Go编写的，比JS编写的打包器快很多
3. 热更新速度快：Vite采用立即编译当前修改文件的办法，同时结合vite的缓存机制来加载更新后的文件内容

### vite不会取代webpack
1. vite是基于es modules的，只关注浏览器端的开发体验
2. webpack更多的关注兼容性，其配置是非常多的（loader, plugin）

## vite脚手架
1. 作用：用于构建一个基于vite的打包的工程项目
2. 安装：
   - `npm create vite@latest` 
   - `yarn create vite`

# 基本概念
## 依赖预构建
1. 定义：当我们使用 Vite 进行开发时，会将第三方依赖进行打包，并在开发环境下使用这些打包过的第三方依赖
2. 目的：
   - CommonJS 和 UMD 兼容性: 开发阶段中，Vite 的开发服务器将所有代码视为原生 ES 模块。因此，Vite 必须先将作为 CommonJS 或 UMD 发布的依赖项转换为 ESM
   - 性能： Vite 将有许多内部模块的 ESM 依赖关系转换为单个模块，以提高后续页面加载性能

## 环境变量
1. Vite 使用 dotenv 这个第三方库从你的 环境目录 中的下列文件中加载额外的环境变量：
   ```
   .env                # 所有情况下都会加载
   .env.local          # 所有情况下都会加载，但会被 git 忽略
   .env.[mode]         # 只在指定模式下加载
   .env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
   ```
2. 环境加载优先级
   - 一份用于指定模式的文件（例如 .env.production）会比通用形式的优先级更高（例如 .env）
   - Vite 执行时已经存在的环境变量有最高的优先级，不会被 .env 类文件覆盖（例如当运行 VITE_SOME_KEY=123 vite build 的时候）
3. 客户端使用环境变量
   - 通过 import.meta.env 以字符串形式暴露给客户端源码
   - 为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露（可自定义 env 变量的前缀，请参阅 envPrefix）


# 配置文件
1. 配置项的代码提示：引入defineConfig函数
2. 指定配置文件：
   - 命令行形式：`vite --config vite.base.config.js`
   - 根据不同命令、模式来指定：
      ```js
      /**
       * command的值：
      *    - 开发环境下为 serve（在 CLI 中， vite dev 和 vite serve 是 vite 的别名）
      *    - 生产环境下为 build（vite build）
      * mode的值：
      *    - 开发环境下为 development
      *    - 生产环境下为 production
      */
      export default defineConfig(({ command, mode, ssrBuild }) => {
         if (command === 'serve') {
            return {
               // dev 独有配置
            }
         } else {
            // command === 'build'
            return {
               // build 独有配置
            }
         }
      })
      ```
3. 配置文件中使用环境变量
   - 如何使用：通过 Vite 导出的 loadEnv 函数来加载指定的 .env 文件
      ```js
      import { defineConfig, loadEnv } from 'vite'

      export default defineConfig(({ command, mode }) => {
         // 根据当前工作目录中的 `mode` 加载不同的 .env 文件
         // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
         const env = loadEnv(mode, process.cwd(), '')
         return {
            // vite 配置
            define: {
               __APP_ENV__: env.APP_ENV
            }
         }
      })
      ```

# 处理css
1. vite天生就支持对css文件的直接处理
2. 在vite.config.js中我们可以通过css属性去控制整个vite对于css的处理行为

## css.modules
1. 作用：配置 CSS modules 的行为，选项将被传递给 postcss-modules
2. 注意：需将样式文件名称设置为xxx.module.css（否则不生效）
   ```js
   interface CSSModulesOptions {
      scopeBehaviour?: 'global' | 'local'  // 配置当前的模块化行为是模块化还是全局化
      globalModulePaths?: RegExp[]  // 代表你不想参与到css模块化的路径
      // 生成的类名的规则(可以配置为函数, 也可以配置成字符串规则: https://github.com/webpack/loader-utils#interpolatename)
      generateScopedName?:  
         | string
         | ((name: string, filename: string, css: string) => string)
      hashPrefix?: string  // 这个字符串会参与到最终的hash生成
      // 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)，默认：null
      localsConvention?:
         | 'camelCase'
         | 'camelCaseOnly'
         | 'dashes'
         | 'dashesOnly'
         | null
   }
   ```

## css.preprocessorOptions
1. 作用：指定传递给 CSS 预处理器的选项。文件扩展名用作选项的键
   ```js
   export default defineConfig({
      css: {
         preprocessorOptions: {
            scss: {
               // 添加全局变量
               additionalData: `$injectedColor: orange;`
            },
            styl: {
               additionalData: `$injectedColor ?= orange`
            }
         }
      }
   })
   ```

## css.devSourcemap
1. 作用：在开发过程中是否启用 sourcemap

## css.postcss
1. 作用：内联的 PostCSS 配置（格式同 postcss.config.js），或者一个（默认基于项目根目录的）自定义的 PostCSS 配置路径
2. 注意：
   - 对内联的 POSTCSS 配置，它期望接收与 postcss.config.js 一致的格式。但对于 plugins 属性有些特别，只接收使用 数组格式
   - 如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源

# 处理静态资源
1. vite对静态资源基本上是开箱即用
2. 静态资源引入格式：
   - 将资源引入为 URL：即服务时引入一个静态资源会返回解析后的公共路径
      ```js
      // 生产构建后会是 /assets/img.2d8efhg.png
      import imgUrl from './img.png'
      document.getElementById('hero-img').src = imgUrl
      ```
   - 显式 URL 引入：未被包含在内部列表或 assetsInclude 中的资源，可以使用 ?url 后缀显式导入为一个 URL
      ```js
      import workletURL from 'extra-scalloped-border/worklet.js?url'
      CSS.paintWorklet.addModule(workletURL)
      ```
   - 将资源引入为字符串：资源可以使用 ?raw 后缀声明作为字符串引入
      ```js
      import shaderString from './shader.glsl?raw'
      ```

## 别名
1. resolve.alias：将会被传递到 @rollup/plugin-alias 作为 entries 的选项。也可以是一个对象，或一个 { find, replacement, customResolver } 的数组。
2. 当使用文件系统路径的别名时，请始终使用绝对路径（相对路径的别名值会原封不动地被使用，因此无法被正常解析）

## 生产环境对静态资源的处理
1. build.outDir：指定输出路径（相对于 项目根目录)
2. build.assetsDir：指定生成静态资源的存放路径（相对于 build.outDir）
3. build.assetsInlineLimit：默认：小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
4. 更多请参考：https://vitejs.cn/vite3-cn/config/build-options.html

# 插件

