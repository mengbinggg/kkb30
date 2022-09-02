/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-04 14:11:48
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-04 17:52:57
 * @Descripttion:
 */
import _message from './message.vue'

export default {
    install(Vue) {
        let Message = null
        Vue.component(_message.name, _message)
        Vue.prototype.$message = {
            show,
            hide,
            info,
            warning,
            success,
            danger,
        }

        function info(options, delay, cb) {
            this.show(
                {
                    ...options,
                    type: 'info',
                },
                delay,
                cb
            )
        }
        function warning(options, delay, cb) {
            this.show(
                {
                    ...options,
                    type: 'warning',
                },
                delay,
                cb
            )
        }
        function success(options, delay, cb) {
            this.show(
                {
                    ...options,
                    type: 'success',
                },
                delay,
                cb
            )
        }
        function danger(options, delay, cb) {
            this.show(
                {
                    ...options,
                    type: 'danger',
                },
                delay,
                cb
            )
        }

        function show(options, delay = 1000, cb) {
            if (!Message) {
                const Comp = Vue.extend({
                    render: (h) =>
                        h(_message.name, {
                            props: options,
                        }),
                })
                Message = new Comp()
                this.vm = Message.$mount()
                document.body.append(this.vm.$el)
                cb && cb()

                this.timer = setTimeout(() => {
                    this.hide.call(this)
                }, delay)
            }
        }
        function hide() {
            document.body.removeChild(this.vm.$el)
            Message.$destroy()
            clearTimeout(this.timer)
            Message = null
            this.vm = null
            this.timer = null
        }
    },
}
