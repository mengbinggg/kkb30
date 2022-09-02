/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-05 14:27:04
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-12 15:38:20
 * @Descripttion: 函数式组件
 */
import Vue from 'vue'

const test1 = {
    props: ['msg'],
    render(h) {
        return h('h1', this.msg)
    },
}
Vue.component('test3', {
    functional: true,
    props: ['msg'],
    render(h, context) {
        // console.log(context)
        return h(test1, context)
    },
})
