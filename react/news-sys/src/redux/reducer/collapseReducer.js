/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-31 17:20:48
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-01 11:25:57
 * @Descripttion: 
 */
const initState = {
    isCollapsed: true
}

export default (prevState = initState, {type, preload}) => {
    switch(type) {
        case 'changeCollapsed': 
            let state = {...prevState}
            state.isCollapsed = !state.isCollapsed
            return state
        default:
            return prevState
    }
}