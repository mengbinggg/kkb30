/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 11:49:00
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-01 14:43:40
 * @Descripttion: 实现基本的累加功能
 */
import React, { Component } from 'react'

export default class Add extends Component {
  state = {
    num: 0
  }
  render() {
    return (
      <>
        <h1>{ this.state.num }</h1>
        <button onClick={() => this.handleAdd() }>累加</button>
      </>
    )
  }
  handleAdd() {
    this.setState({
      num: this.state.num + 1
    })
  }
}
