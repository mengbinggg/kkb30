/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-03 17:07:33
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-05 14:20:21
 * @Descripttion: 自定义vuex
 */
let Vue
class Store {
    constructor(options) {
        // 保存内部变量
        let _this = this
        this._mutations = options.mutations
        this._actions = options.actions
        this._getters = options.getters

        // 定义通过计算属性定义getter（计算属性可以缓存数据）
        let computed = {}
        this.getters = {}
        Object.keys(this._getters).forEach((key) => {
            computed[key] = () => {
                return _this._getters[key](_this.state)
            }
            Object.defineProperty(this.getters, key, {
                get() {
                    return _this.state[key]
                },
            })
        })

        this.state = new Vue({
            data: options.state,
            computed,
        })
        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }

    commit(name, payload) {
        let entry = this._mutations[name]
        if (!entry) {
            console.error('unknown mutation function')
            return
        }

        entry(this.state, payload)
    }

    dispatch(name, payload) {
        let entry = this._actions[name]
        if (!entry) {
            console.error('unknown actions function')
            return
        }

        entry(this, payload)
    }
}

function install(_vue) {
    Vue = _vue

    // 挂载$store属性（为什么不直接在install中挂载？因为use插件时，Store还未实例化）
    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        },
    })
}

export default {
    Store,
    install,
}
