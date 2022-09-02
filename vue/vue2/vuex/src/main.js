/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-02 19:33:37
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-04 13:15:01
 * @Descripttion: 主入口
 */
import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import store from './mStore'

new Vue({
    store,
    render: (h) => h(App),
}).$mount('#app')
