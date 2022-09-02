/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-03 11:01:05
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-04 10:30:43
 * @Descripttion: 自定义router插件（未处理路由嵌套问题）
 */
let Vue
class MVueRouter {
    constructor(options) {
        this.$options = options

        // 定义响应式数据current（作用：当数据发生改变时，所依赖的组件就会重新渲染）
        Vue.util.defineReactive(this, 'current', window.location.hash.slice(1) || '/')

        // 路由发生改变时，触发hashchange事件，重新赋值current
        window.addEventListener('hashchange', () => {
            this.current = window.location.hash.slice(1)
        })
    }
}

MVueRouter.install = (_vue) => {
    Vue = _vue

    // 混入$router属性（将入口文件中传入的router对象挂载到Vue实例上，便于在实例中访问router对象）
    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
            }
        },
    })

    // 注册全局组件
    Vue.component('router-link', {
        props: {
            to: {
                type: String,
                require: true,
            },
        },
        render(h) {
            return h(
                'a',
                {
                    attrs: {
                        href: '#' + this.to,
                    },
                },
                this.$slots.default
            )
        },
    })
    Vue.component('router-view', {
        render(h) {
            let current = this.$router.current
            const route = this.$router.$options.routes.find((v) => v.path == current)

            if (!route) {
                console.error('unknown component')
                return h(null)
            }
            return h(route.component)
        },
    })
}

export default MVueRouter
