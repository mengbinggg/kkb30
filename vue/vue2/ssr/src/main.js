/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-17 16:52:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-18 14:58:04
 * @Descripttion:
 */
import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { creatRouter } from './router'

Vue.config.productionTip = false

Vue.mixin({
    beforeMount() {
        const { asyncData } = this.$options
        if (asyncData) {
            // 将获取数据操作分配给 promise
            // 以便在组件中，我们可以在数据准备就绪后
            // 通过运⾏ `this.dataPromise.then(...)` 来执⾏其他任务
            this.dataPromise = asyncData({
                store: this.$store,
                route: this.$route,
            })
        }
    },
})

export function createApp(context) {
    const router = creatRouter()
    const store = createStore()
    const app = new Vue({
        router,
        context,
        store,
        render: (h) => h(App),
    })

    return {
        router,
        app,
    }
}
