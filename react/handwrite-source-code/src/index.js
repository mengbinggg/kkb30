/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 11:37:15
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-04 15:07:42
 * @Descripttion: 入口文件
 */
import { createRoot } from 'react-dom/client'
import 'antd/dist/antd.min.css'
import App from './reactReduxTest'

let root = createRoot(document.getElementById('root'))
root.render(<App />)
