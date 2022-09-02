/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-03 16:51:06
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-03 17:07:24
 * @Descripttion:
 */
import Vue from 'vue'
import Vuex from './MVuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 1,
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2
        },
    },
    mutations: {
        add(state, payload = 1) {
            state.counter += payload
        },
    },
    actions: {
        addAsync({ commit }, payload) {
            setTimeout(() => {
                commit('add', payload)
            }, 1000)
        },
    },
})
