/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-03 11:04:10
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-03 11:27:18
 * @Descripttion: 打印日志
 */
export default function logger({ getState, dispatch }) {
    return (next) => (action) => {
        console.log("prev state: ", getState());
        console.log("action: ", action);
        const res = next(action);
        console.log("next state: ", getState());
        return res;
    };
}
