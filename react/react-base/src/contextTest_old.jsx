/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 15:17:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-01 15:49:10
 * @Descripttion: 实现祖孙组件传参（旧的context方式）
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GrandSon extends Component {
  static contextTypes = {
    msg: PropTypes.string,
  }
  render() {
    return (
      <>
        <h1>我是孙子组件：{this.context.msg}</h1>
      </>
    )
  }
}

class Child extends Component {
  render() {
    return <GrandSon></GrandSon>
  }
}

export default class contextTest extends Component {
  state = {
    msg: 'hello world',
  }
  static childContextTypes = {
    msg: PropTypes.string,
  }
  getChildContext() {
    return {
      msg: this.state.msg,
    }
  }
  render() {
    return <Child></Child>
  }
}
