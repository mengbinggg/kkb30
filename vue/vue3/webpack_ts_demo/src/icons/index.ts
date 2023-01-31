/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-01-29 11:41:13
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-01-29 11:50:26
 * @Descripttion: 
 */
import { App } from 'vue'

// 批量导入所有svg图片
const ctx = require.context('./svg', false, /\.svg$/)
ctx.keys().map(ctx)

// 注册svg-icon全局组件
import SvgIcon from '@/components/SvgIcon.vue'
export default {
    install(app: App) {
        app.component('svg-icon', SvgIcon)
    }
}