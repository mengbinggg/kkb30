/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 20:18:43
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 11:28:13
 * @Descripttion:
 */
const initialState = {
    inpt: "",
    list: [],
};

const reducer = (state = initialState, { type, payload }) => {
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
export default reducer
