/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-03 16:51:06
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-18 14:48:52
 * @Descripttion:
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function createStore() {
    return new Vuex.Store({
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
                return new Promise((resolve) => {
                    setTimeout(() => {
                        commit('add', payload)
                        resolve()
                    }, 1000)
                })
            },
        },
    })
}
