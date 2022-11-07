/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-04 16:51:28
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-04 17:20:11
 * @Descripttion: 自定义hook（函数组件中页面刷新）
 */
import { useReducer, useCallback } from "react";

export default function useForceUpdate() {
    const [_, dispatch] = useReducer((state) => state + 1, 0)

    const update = useCallback(() => {
        dispatch()
    }, [])

    return update
}