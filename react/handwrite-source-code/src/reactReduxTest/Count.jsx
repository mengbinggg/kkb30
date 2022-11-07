/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-03 17:08:06
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-04 17:24:22
 * @Descripttion:
 */
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'

import { bindActionCreators } from './mReactRedux/index'
import { connect } from "./mReactRedux";

function count(props) {
    console.log(props)
    return (
        <div style={{ margin: '100px auto', textAlign: 'center' }}>
            <h1>当前count值为：{props.count}</h1>
            <button onClick={() => { props.dispatch({ type: 'ADD' }) }}>增加 +2</button>
            <button onClick={() => { props.addFn(2) }}>增加</button>
            <button onClick={() => { props.minusFn() }}>减少</button>
        </div>
    )
}

export default connect(
    (state) => ({
        count: state
    }), 
    // {
    //     addFn: () => ({ type: 'ADD' }),
    //     minusFn: () => ({ type: 'MINUS' })
    // }
    (dispatch) => {
        let actionCreator = bindActionCreators({
            addFn: (payload) => ({ type: 'ADD', payload }),
            minusFn: () => ({ type: 'MINUS' })
        }, dispatch)

        return {
            dispatch,
            ...actionCreator
        }
    }
)(count)
