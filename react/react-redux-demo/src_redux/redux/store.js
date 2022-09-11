/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 11:18:20
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 11:47:30
 * @Descripttion: 
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './count_reducer'

export default createStore(reducer, applyMiddleware(thunk))