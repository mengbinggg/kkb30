/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-05 17:24:27
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-06 16:15:19
 * @Descripttion: 实现简易Vue
 */
class MVue {
    constructor(options) {
        this.$options = options
        this.$data = options.data

        observe(this.$data)
        proxy(this)
        new Compiler(this)
    }
}

// 定义数据响应式
function observe(obj) {
    if (typeof obj != 'object' || obj == null) {
        return
    }

    Object.keys(obj).forEach((key) => {
        defineReactive(obj, key, obj[key])
    })
}
function defineReactive(obj, key, val) {
    // 处理属性也是对象的情况
    observe(val)

    // 定义数据时，创建Dep用于管理每一个数据
    let dep = new Dep()
    Object.defineProperty(obj, key, {
        get() {
            Dep.target && dep.addWatcher(Dep.target)
            return val
        },
        set(newVal) {
            if (newVal != val) {
                // 当重新赋值的是一个对象时，也要做响应式处理
                observe(newVal)

                val = newVal
                dep.notify()
            }
        },
    })
}

// 将data代理到Vue实例上
function proxy(vm) {
    Object.keys(vm.$data).forEach((key) => {
        Object.defineProperty(vm, key, {
            get() {
                return vm.$data[key]
            },
            set(newVal) {
                vm.$data[key] = newVal
            },
        })
    })
}

// 编译模板
class Compiler {
    constructor(vm) {
        this.$vm = vm
        this.$el = vm.$options.el

        const dom = document.querySelector(this.$el)
        this.compile(dom.childNodes)
    }

    compile(nodes) {
        nodes.forEach((node) => {
            let nodeType = node.nodeType

            if (nodeType == '3') {
                // 文本
                let nodeValue = node.nodeValue
                if (/\{\{(.*)\}\}/.test(nodeValue)) {
                    let exp = RegExp.$1
                    node.textContent = this.getValue(this.$vm, exp)

                    new Watcher(this.$vm, exp, () => {
                        node.textContent = this.getValue(this.$vm, exp)
                    })
                }
            } else if (nodeType == '1') {
                // 元素
                let attrs = node.attributes
                Array.from(attrs).forEach((attr) => {
                    if (attr.nodeName.startsWith('m-')) {
                        let attrName = attr.name.slice(2)
                        let exp = attr.value
                        // v-html
                        if (attrName == 'html') {
                            node.innerHTML = this.getValue(this.$vm, exp)

                            new Watcher(this.$vm, exp, () => {
                                node.innerHTML = this.getValue(this.$vm, exp)
                            })
                        }
                    }
                })

                if (node.childNodes) this.compile(node.childNodes)
            }
        })
    }

    // 处理对象形式的值，如person.name.fristName
    getValue(obj, exp) {
        exp.split('.').forEach((key) => {
            obj = obj[key]
        })
        return obj
    }
}

// 依赖收集
class Dep {
    constructor() {
        this.watchers = []
    }

    addWatcher(watcher) {
        this.watchers.push(watcher)
    }

    notify() {
        this.watchers.forEach((watcher) => {
            watcher.update()
        })
    }
}

// 观察者
class Watcher {
    constructor(vm, key, updateFn) {
        this.vm = vm
        this.key = key
        this.updateFn = updateFn

        // 触发依赖收集
        Dep.target = this
        this.vm[this.key]
        Dep.target = null
    }

    update() {
        this.updateFn()
    }
}
