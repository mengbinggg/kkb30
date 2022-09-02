<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-02 18:11:19
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-05 14:20:23
 * @Descripttion: 项目说明
-->
#### 手写vuex
1. 修改main.js文件
    ```
    import Vue from 'vue'
    import App from './App.vue'
    // import store from './store'
    import store from './mStore'  // 引入自定义的vuex

    new Vue({
        store,
        render: (h) => h(App),
    }).$mount('#app')
    ```
2. 新建src/mStore/index.js文件
    ```
    // index.js
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
    ```
3. 新建src/mStore/MVuex.json文件
    - 定义Store类
        - 编写构造函数
            - 先保存内部变量
            - 定义通过计算属性定义getter
            - 将state定义为响应式数据
            - 改变commit、dispatch方法中的上下文
        - 实现commit方法（直接调用mutation中的同名方法）
        - 实现dispatch方法（直接调用action中的同名方法）
    - 定义install方法
        - 通过Vue.mixin在Vue实例上挂载$store属性
    - 导出对象（对象包括Store类、install方法）