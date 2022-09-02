/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-21 12:57:53
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-21 17:55:03
 * @Descripttion:
 */
const Vue = {
    createApp(options) {
        const renderer = Vue.createRenderer({
            querySelector(selector) {
                return document.querySelector(selector)
            },
            insert(child, parent, anchor) {
                parent.insertBefore(child, anchor || null)
            },
        })

        return renderer.createApp(options)
    },
    // 定义平台渲染器，根据传入的平台不同的操作方法来做相应的处理
    createRenderer({ querySelector, insert }) {
        return {
            // 返回一个app实例，实例方法包括mount
            createApp(options) {
                return {
                    mount(selector) {
                        const parent = querySelector(selector)
                        this.data = options.data()

                        if (!options.render) {
                            options.render = this.compile(parent.innerHtml)
                        }

                        if (options.setup) {
                            this.setupState = options.setup()
                        }

                        this.proxy = new Proxy(this, {
                            get(target, key) {
                                if (key in target.setupState) {
                                    return target.setupState[key]
                                } else {
                                    return target.data[key]
                                }
                            },
                            set(target, key, value) {
                                if (key in target.setupState) {
                                    target.setupState[key] = value
                                } else {
                                    target.data[key] = value
                                }
                            },
                        })

                        const el = options.render.call(this.proxy)
                        parent.innerHTML = ''
                        insert(el, parent)
                    },
                    compile(html) {
                        // 模拟生成Vnode
                        return function render() {
                            const el = document.createElement('h1')
                            el.innerHTML = this.msg
                            return el
                        }
                    },
                }
            },
        }
    },
}
