/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 11:17:59
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 15:15:07
 * @Descripttion: 
 */
import React, { Component } from 'react'
import store from '../../redux/store'
import { increment, decrement, incrementAsync } from '../../redux/count_action'

export default class counter extends Component {
    render() {
        return (
            <div>
                <h2>当前计数：{store.getState()}</h2>
                <hr />
                <select ref={(c) => { this.select = c }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleIncrementAsync}>异步+</button>
                <button onClick={this.handleIncrementOdd}>奇数+</button>
            </div>
        )
    }
    handleIncrement = () => {
        let val = this.select.value * 1
        store.dispatch(increment(val))
    }
    handleDecrement = () => {
        let val = this.select.value * 1
        store.dispatch(decrement(val))
    }
    handleIncrementAsync = () => {
        let val = this.select.value * 1
        store.dispatch(incrementAsync(val))
    }
    handleIncrementOdd = () => {
        let val = this.select.value * 1
        let count = store.getState()
        if (count % 2 === 1) {
            store.dispatch(increment(val))
        }
    }
}
