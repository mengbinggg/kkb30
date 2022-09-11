/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-11 15:21:31
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-11 18:04:57
 * @Descripttion: 
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/count_action'

class Count extends Component {
    render() {
        return (
            <div>
                <h5>当前计数：{this.props.count}</h5>
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
        this.props.increment(val)
    }
    handleDecrement = () => {
        let val = this.select.value * 1
        this.props.decrement(val)
    }
    handleIncrementAsync = () => {
        let val = this.select.value * 1
        this.props.incrementAsync(val)

    }
    handleIncrementOdd = () => {
        let val = this.select.value * 1
        let count = this.props.count
        if (count % 2 === 1) {
            this.props.increment(val)
        }
    }
}


export default connect(
    state => ({
        count: state
    }),
    // dispatch => ({
    //     increment: data => dispatch(increment(data)),
    //     decrement: data => dispatch(decrement(data)),
    //     incrementAsync: data => dispatch(incrementAsync(data)),
    // })
    {
        increment, decrement, incrementAsync
    }
)(Count)

