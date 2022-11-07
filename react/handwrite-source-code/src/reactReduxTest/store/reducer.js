/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-03 16:55:43
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-03 17:22:55
 * @Descripttion: 
 */
const initialState = 0;

export default (state = initialState, { type, payload = 1 }) => {
    switch (type) {
        case "ADD":
            return state + payload;
        case "MINUS":
            return state - payload;
        default:
            return state;
    }
};