/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-03 10:45:05
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-17 20:29:47
 * @Descripttion:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import about from '../components/about.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: home,
    },
    {
        path: '/about',
        component: about,
    },
]
const router = new VueRouter({
    mode: 'hash',
    routes,
})

export function creatRouter() {
    return router
}
