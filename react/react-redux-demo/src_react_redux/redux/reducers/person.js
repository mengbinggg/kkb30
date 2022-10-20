/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 18:10:05
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 19:19:20
 * @Descripttion: 
 */
import { ADD_PERSON } from "../constant"

const initState = [
    {
        id: 0,
        name: '张三',
        age: 18
    }
]

export default function personReducer(preState = initState, action) {
    let { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [
                data,
                ...preState
            ]
        default:
            return preState
    }
}