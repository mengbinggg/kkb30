/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-03 10:45:05
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-03 19:48:26
 * @Descripttion:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import list from '../components/list.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: home,
    },
    {
        path: '/list',
        component: list,
        children: [
            {
                path: '',
                component: {
                    render: (h) => h('div', 'this is info'),
                },
            },
        ],
    },
]
const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
