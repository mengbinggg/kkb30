/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-03 13:49:11
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-03 14:07:44
 * @Descripttion:
 */
// import { combineReducers } from "redux";
import { combineReducers } from "../../mRedux";

import countReducer from "./countReducer";
import todolistReducer from "./todolistReducer";

export default combineReducers({
    count: countReducer,
    todolist: todolistReducer,
});
