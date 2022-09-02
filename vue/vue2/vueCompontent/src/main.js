/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-02 19:33:37
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-12 14:38:25
 * @Descripttion: 主入口
 */
import Vue from 'vue'
import App from './App.vue'

// 函数式组件
import './components/functional/index'

// 注册组件库
import { message, form, table } from './components/myUI'
Vue.use(message)
Vue.use(form)
Vue.use(table)

new Vue({
    render: (h) => h(App),
}).$mount('#app')
