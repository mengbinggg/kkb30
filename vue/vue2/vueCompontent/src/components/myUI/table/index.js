/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-12 14:33:04
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-12 14:38:52
 * @Descripttion: 表格组件注册
 */
import MTable from './MTable.vue'
import MTableColumn from './MTableColumn.vue'

const components = [MTable, MTableColumn]

export default {
    install(Vue) {
        components.forEach((component) => {
            Vue.component(component.name, component)
        })
    },
}
