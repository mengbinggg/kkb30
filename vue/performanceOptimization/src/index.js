/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-16 10:10:18
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-28 09:27:15
 * @Descripttion: 入口文件
 */

// // 挂载app
// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// // 注册自定义指令
// import directives from './directives'
// Vue.use(directives)

// // 引入elementUI
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// // 引入字体图表库
// import './css/iconfont.css'

// new Vue({
//     router,
//     render: (h) => h(App)
// }).$mount('#app')




// // babel缓存
// Promise.resolve(100).then((res) => { console.log(res) })

// ignorePlugin
import moment from 'moment'
import 'moment/locale/zh-cn'  // 手动引入中文包

moment.locale('zh-cn')
console.log(moment().format('ll'))

// // noParse
// import $ from 'jquery'
// console.log($('#app'))


// collapse_vars解释
// let a = 10, b = 20;
// let c = a + b

// // let c = 30


// // 热更新
// import './css/index.css'


// // 图片
// import src1 from './img/1.png'
// import src2 from './img/2.jpeg'

// const img1 = document.createElement('img')
// img1.src = src1
// document.body.appendChild(img1)
// const img2 = document.createElement('img')
// img2.src = src2
// document.body.appendChild(img2)

// // 抽离压缩css
// import './css/index.css'


// // 抽离公共模块
// import { add } from './js/utils'
// console.log(add(10, 20))

// // 抽离第三方库
// import _ from 'lodash'
// _.indexOf([1, 2, 1, 2], 2);


// scoped hoisting
import { add } from './js/utils'
console.log(add(10, 20))