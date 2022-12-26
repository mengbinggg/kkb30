/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-03 10:45:05
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-23 13:40:47
 * @Descripttion:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
const list = () => import(/* webpackChunkName: "list" */ '../components/list.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/list',
        component: list
    }
]
const router = new VueRouter({
    mode: 'hash',
    routes,
})

export default router
