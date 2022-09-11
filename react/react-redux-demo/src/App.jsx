/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 15:08:00
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 18:00:00
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'


export default class App extends Component {
    render() {
        return (
            <div>
                {/* <Count store={store}></Count> */}
                <Count></Count>
                <hr />
                <Person></Person>
            </div>
        )
    }
}
