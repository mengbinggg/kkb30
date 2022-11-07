/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 20:18:35
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-03 16:48:08
 * @Descripttion:
 */
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import promise from 'redux-promise';

import { createStore, applyMiddleware } from "../mRedux";
import thunk from "../mRedux/middlewares/thunk";
import logger from "../mRedux/middlewares/logger";
import promise from "../mRedux/middlewares/promise";

import reducer from "./reducer";

export default createStore(reducer, applyMiddleware(promise, thunk, logger));
