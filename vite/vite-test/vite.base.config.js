/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-12-01 20:58:32
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-12-03 22:28:55
 * @Descripttion: 
 */
import { defineConfig } from "vite"

export default defineConfig({
    envPrefix: 'MB_',
    css: {
        modules: {
            scopeBehaviour: 'local',
            globalModulePaths: ['./src/style/global'],
            hashPrefix: 'mb_'
        },
        devSourcemap: false
    }
})