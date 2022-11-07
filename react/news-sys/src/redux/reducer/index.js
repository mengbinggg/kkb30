/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-01 11:37:39
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-01 11:39:21
 * @Descripttion: 
 */
import {combineReducers} from 'redux'

import collapseReducer from "./collapseReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
    collapseReducer,
    loadingReducer
})