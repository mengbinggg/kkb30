export default function combineReducers(reducerMap) {
    // 返回一个合并后的reducer
    return (state = {}, action) => {
        let newState = {}
        let hasChanged = false
        
        for (const key in reducerMap) {
            const reducer = reducerMap[key]
            newState[key] = reducer(state[key], action)
            hasChanged = hasChanged || newState[key] !== state[key]
        }
        hasChanged = hasChanged || Object.keys(newState).length !== Object.keys(state).length

        return hasChanged? newState: state
    }
}