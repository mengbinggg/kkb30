/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 11:19:29
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 19:15:59
 * @Descripttion: 
 */
import { INCREMENT, DECREMENT } from '../constant'

const initState = 12

export default function countReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}
