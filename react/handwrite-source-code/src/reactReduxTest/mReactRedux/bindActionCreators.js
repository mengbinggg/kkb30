/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-04 15:05:08
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-04 15:20:56
 * @Descripttion: 
 */
export default function bindActionCreators(actions, dispatch) {
    let actionCreators = {}
    for (const key in actions) {
        const action = actions[key]
        actionCreators[key] = (...args) => dispatch(action(...args))
    }

    return actionCreators
}