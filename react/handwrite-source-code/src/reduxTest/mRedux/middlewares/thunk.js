/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-03 11:04:02
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-03 11:19:48
 * @Descripttion: 处理异步action
 */
export default function thunk({ getState, dispatch }) {
    return next => action => {
        if(typeof action === 'function') {
            return action(dispatch, getState)
        }
        
        return next(action)
    }
}