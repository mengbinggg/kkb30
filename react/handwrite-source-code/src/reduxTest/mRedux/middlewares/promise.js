/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-03 11:04:10
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-03 13:45:39
 * @Descripttion: 处理promise类型的action
 */
import isPromise from "is-promise"; // 判断是否是Promise
import { isFSA } from "flux-standard-action"; // 判断是否是标准的action
export default function promise({ dispatch }) {
    return (next) => (action) => {
        // 不是标准action
        if (!isFSA(action)) {
            return isPromise(action) ? action.then(dispatch) : next(action);
        }

        // 是标准action（再判断payload的类型）
        return isPromise(action.payload)
            ? action.payload.then((res) =>
                  dispatch({ ...action, payload: res })
              )
            : next(action);
    };
}
