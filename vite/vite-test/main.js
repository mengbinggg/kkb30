/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-12-01 20:40:22
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-12-03 22:11:15
 * @Descripttion: 
*/
import style from './src/style/style.module.css'
console.log(style)
const div = document.createElement('div')
div.className = style.dot
document.body.appendChild(div)


import './src/style/style2.css'
const div2 = document.createElement('div')
div2.className = 'dot'
document.body.appendChild(div2)


import style3 from  './src/style/global/style3.module.css'
console.log(style3)
const div3 = document.createElement('div')
div3.className = style3.dot
document.body.appendChild(div3)


console.log(import.meta.env)