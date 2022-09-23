/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-23 16:14:06
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-23 17:46:19
 * @Descripttion: 
 */
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log('constructor: ', this.state.count)
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps")
    return null
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate")
    return null
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate")
    return true
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  render() {
    console.log('render: ', this.state.count)
    return (
      <div>
        <h4>{this.state.count}</h4>
        <button onClick={this.handleChange}>change</button>
      </div>
    )
  }

  handleChange = () => {
    this.setState({ count: 1 })
  }
}

