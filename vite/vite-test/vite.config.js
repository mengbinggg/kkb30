/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-12-01 20:48:52
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-01-31 11:53:20
 * @Descripttion: 
 */
import { defineConfig, loadEnv } from "vite"
import baseConfig from './vite.base.config'
import devConfig from './vite.dev.config'
import prodConfig from './vite.prod.config'

const envResolve = {
    "serve": () => {
        console.log("开发环境")
        return {
            ...baseConfig,
            ...devConfig
        }
    },
    "build": () => {
        console.log("生产环境")
        return {
            ...baseConfig,
            ...prodConfig
        }
    }
}

得到的
export default defineConfig(({ mode, command }) => {
    // const env = loadEnv(mode, process.cwd(), '')
    // console.log(env)

    return envResolve[command]()
})