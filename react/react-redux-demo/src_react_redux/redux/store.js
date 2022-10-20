/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 11:18:20
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 19:30:08
 * @Descripttion: 
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))