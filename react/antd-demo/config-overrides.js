/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 20:39:01
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 21:25:57
 * @Descripttion: 
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': 'orange' },
        }
    }),
);