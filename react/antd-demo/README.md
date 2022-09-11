<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-09 16:13:57
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 21:33:50
 * @Descripttion: 
-->
# antd按需引入样式
1. 安装依赖：npm i react-app-rewired customize-cra babel-plugin-import -D
2. 修改package.json中script命令
3. 添加配置文件config-overrides.js
   ```js
	const { override, fixBabelImports } = require('customize-cra');
	module.exports = override(
		fixBabelImports('import', {
			libraryName: 'antd',
			libraryDirectory: 'es',
			style: 'css',
		})
	);
   ```
4. 备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉

# antd自定义主题
1. 安装依赖：npm i less less-loader -D
2. 修改配置文件config-overrides.js
   ```js
	// ...
	addLessLoader({
		lessOptions:{
			javascriptEnabled: true,
			modifyVars: { '@primary-color': 'green' },
		}
	}),
   ```