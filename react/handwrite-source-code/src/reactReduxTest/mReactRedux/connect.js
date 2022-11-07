/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-04 15:53:35
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-04 17:24:05
 * @Descripttion: 
 */
import { useContext, useLayoutEffect } from 'react'
import bindActionCreators from './bindActionCreators'
import Context from './Context'
import useForceUpdate from './useForceUpdate'

const connect = (mapStateToProps, mapDispatchToProps)=> (Comp) => (props) => {
    let store = useContext(Context)

    let state = mapStateToProps(store.getState())

    let dispatch = { dispatch: store.dispatch }
    if(typeof mapDispatchToProps === 'function') {
        dispatch = mapDispatchToProps(store.dispatch)
    }else if(typeof mapDispatchToProps === 'object') {
        dispatch = bindActionCreators(mapDispatchToProps, store.dispatch)
    }

    const forceUpdate = useForceUpdate()
    useLayoutEffect(() => {
        store.subscribe(() => {
            forceUpdate()
        })
    }, [store])

    return <Comp {...props} {...state} {...dispatch}></Comp>
}

export default connect