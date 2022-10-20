/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 18:06:16
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 18:16:57
 * @Descripttion: 
 */
import { combineReducers } from 'redux'
import count from './count'
import person from './person'

export default combineReducers({
    count,
    person
})