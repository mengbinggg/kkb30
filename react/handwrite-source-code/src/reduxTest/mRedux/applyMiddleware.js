/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-02 14:36:02
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-03 12:40:54
 * @Descripttion:
 */
export default function applyMiddleware(...middlewares) {
    return (createStore) => (reducer) => {
        let store = createStore(reducer);
        let dispatch = store.dispatch;

        // 增强dispatch
        // 1. 中间件执行时，需要用到的参数
        const midApi = {
            getState: store.getState,
            dispatch: (action, ...args) => dispatch(action, ...args), // 防止各个中间件之后相互污染dispatch，故在外包装一层
        };

        // 2. 遍历中间件，并传入参数
        const middlewareChain = middlewares.map((middleware) =>
            middleware(midApi)
        );

        // 3. 通过函数合成的方式，调用各个中间件，并返回加强版的dispatch
        dispatch = compose(...middlewareChain)(store.dispatch)

        return {
            ...store,
            dispatch,
        };
    };
}

// 函数合成的方法
function compose(...fns) {
    if(!fns.length) return args => args

    if(fns.length == 1) return fns[0]

    return fns.reduce(
        (a, b) => (...args) => a(b(...args))
    );
}
