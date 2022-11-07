/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-31 17:20:48
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-01 11:36:15
 * @Descripttion: 
 */
const initState = {
    isLoading: false
}

export default (prevState = initState, {type, preload}) => {
    switch(type) {
        case 'changeLoading': 
            let state = {...prevState}
            state.isLoading = !state.isLoading
            return state
        default:
            return prevState
    }
}