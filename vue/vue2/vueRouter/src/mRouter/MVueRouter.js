/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-03 11:01:05
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-11 09:37:17
 * @Descripttion: 自定义router插件
 */
let Vue
class MVueRouter {
    constructor(options) {
        this.$options = options

        // 定义响应式数据（作用：当数据发生改变时，所依赖的组件就会重新渲染）
        // Vue.util.defineReactive(this, 'current', window.location.hash.slice(1) || '/')
        this.current = window.location.hash.slice(1) || '/'
        Vue.util.defineReactive(this, 'matched', [])
        this.matchRoutes()

        // 路由发生改变时，触发hashchange事件，重新赋值current
        window.addEventListener('hashchange', () => {
            this.current = window.location.hash.slice(1)
            this.matched = []
            this.matchRoutes()
        })
    }

    // 根据当前的路径匹配路由
    matchRoutes(routes) {
        routes = routes || this.$options.routes

        routes.forEach((route) => {
            // 如果route.path匹配上当前路径时，将其放入matched中
            if ((route.path == '' && this.matched.length != 0) || this.current == route.path) {
                this.matched.push(route)
            }

            // route存在子元素时，进行递归调用
            if (route.path != '/' && route.children && route.children.length > 0) {
                this.matchRoutes(route.children)
            }
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
            // 标记当前组件是router-view
            this.$vnode.data.routerView = true

            // 判断当前router-view的深度
            let depth = 0
            let parent = this.$parent
            while (parent) {
                if (parent.$vnode && parent.$vnode.data.routerView) {
                    depth++
                }
                parent = parent.$parent
            }

            // 根据深度在matched数组中，获取当前路由信息
            const route = this.$router.matched[depth]

            if (!route) {
                console.error('unknown component')
                return h(null)
            }
            return h(route.component)
        },
    })
}

export default MVueRouter
