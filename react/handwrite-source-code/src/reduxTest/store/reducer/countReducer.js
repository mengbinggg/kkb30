/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-03 13:48:13
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-03 13:53:42
 * @Descripttion:
 */
const initialState = 0;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD":
            return state + payload;
        default:
            return state;
    }
};
