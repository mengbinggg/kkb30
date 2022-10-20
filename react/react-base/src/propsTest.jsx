/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 14:46:01
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-10-08 10:27:03
 * @Descripttion: 实现父子组件间传参（props方式）
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Child extends Component  {
  // 设置默认值
  static defaultProps = {
    msg: '我是默认内容'
  }

  // 设置参数数据类型
  static propTypes = {
    msg: PropTypes.string
  }
  
  render() {
    return (
      <>
        <h1>我是子组件的内容：{this.props.msg}</h1>
        <button onClick={this.handleClick.bind(this)}>改变</button>
      </>
    )
  }
  handleClick() {
    this.props.changeFn()
  }
}

export default class propsTest extends Component {
  state = {
    msg: 'hello world'
  }
  render() {
    return (
      <>
        <Child msg={this.state.msg} changeFn={this.changeFn.bind(this)}></Child>
        <hr />
        <Child></Child>
      </>
    )
  }
  changeFn() {
    this.setState({
      msg: '你好，世界'
    })
  }
}
