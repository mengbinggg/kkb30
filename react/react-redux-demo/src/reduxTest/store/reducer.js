/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 20:18:43
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-01 21:54:37
 * @Descripttion:
 */
const initialState = {
    inpt: "",
    list: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "changeInpt":
            return {
                ...state,
                inpt: payload,
            };
        case "addFn":
            return {
                list: [...state.list, state.inpt],
                inpt: "",
            };
        case "delFn":
            let list = [...state.list];
            list.splice(payload, 1);
            return {
                ...state,
                list,
            };

        default:
            return state;
    }
};
