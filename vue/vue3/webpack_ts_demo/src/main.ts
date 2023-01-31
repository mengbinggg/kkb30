/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-01-29 11:11:45
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-01-29 11:49:16
 * @Descripttion: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入icons
import icons from './icons'

createApp(App).use(store).use(router).use(icons).mount('#app')
