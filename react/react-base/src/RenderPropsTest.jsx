/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-20 13:18:01
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-20 13:22:34
 * @Descripttion: 
 */
import React, { Component } from 'react'

export default class RenderPropsTest extends Component {
    render() {
        return (
            <div>
                <h1>我是父组件</h1>
                <Child render={(count) => {
                    return (
                        <div>count: {count}</div>
                    )
                }}></Child>
            </div>
        )
    }
}


function Child(props) {
    return (
        <div>
            <h1>我是子组件</h1>
            {
                props.render(999)
            }
        </div>
    )
}
