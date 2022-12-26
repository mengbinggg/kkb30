/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-02 19:33:37
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-12-16 13:21:30
 * @Descripttion: 主入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import router from './mRouter'

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
