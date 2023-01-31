/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-25 17:23:58
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-01-03 15:05:00
 * @Descripttion:
 */
// import './index.less'
import styles from './index.css'

// let dom = document.querySelector('.box')
// dom.className = styles['box']

// console.log('hello world')

import done from './img/page.png'
console.log(done)

const img = document.createElement('img')
img.src = done
document.body.appendChild(img)
