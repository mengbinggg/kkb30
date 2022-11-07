/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-02 09:40:10
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-03 10:49:29
 * @Descripttion: 
 */
export default function createStore(reducer, enhancer) {
    // 存在中间件，则增强dispatch，返回一个加强版的store
    if(enhancer) {
        return enhancer(createStore)(reducer)
    }

    let state
    let listeners = []

    // 获取state
    const getState = () => {
        return state
    }

    // 派发修改state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(fn => fn())
    }

    // 订阅/取消订阅
    const subscribe = (fn) => {
        listeners.push(fn)

        return () => {
            let index = listeners.indexOf(fn)
            listeners.splice(index, 1)
        }
    }

    // 自动触发一次dispatch，用于初始化state
    dispatch({
        type: '_init' // 任意值，但不能和reducer中的type重复
    })

    return {
        getState,
        dispatch,
        subscribe
    }
} 