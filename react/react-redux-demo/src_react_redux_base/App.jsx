/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 15:08:00
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 18:05:15
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Count from './containers/Count'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <Count store={store}></Count> */}
                <Count></Count>
            </div>
        )
    }
}
