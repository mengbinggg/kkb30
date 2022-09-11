/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 11:18:36
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 11:38:54
 * @Descripttion: 
 */
import { INCREMENT, DECREMENT } from './constant'

export const increment = (data) => ({
    type: INCREMENT,
    data
})

export const decrement = (data) => ({
    type: DECREMENT,
    data
})

export const incrementAsync = (data) => (dispatch) => {
    setTimeout(() => {
        dispatch(increment(data))
    }, 1000);
}

