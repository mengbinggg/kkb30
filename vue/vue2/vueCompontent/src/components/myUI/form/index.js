/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-09 09:28:10
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-09 10:08:04
 * @Descripttion: 表单组件注册
 */
import MForm from './MForm.vue'
import MFormItem from './MFormItem.vue'
import MInput from './MInput.vue'

const components = [MForm, MFormItem, MInput]

export default {
    install(Vue) {
        components.forEach((component) => {
            Vue.component(component.name, component)
        })
    },
}
