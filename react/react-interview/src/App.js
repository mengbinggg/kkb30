/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-23 16:14:06
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-29 14:46:36
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

  // componentDidMount() {
  //   this.setState({ count: 11 })
  //   console.log(this.state.count)
  //   this.setState({ count: 22 })
  //   console.log(this.state.count)

  //   setTimeout(() => {
  //     this.setState({ count: 33 })
  //     console.log(this.state.count)
  //     this.setState({ count: 44 })
  //     console.log(this.state.count)
  //   }, 0);
  // }

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
    console.log(this.state.count)
    this.setState({ count: 2 })
    console.log(this.state.count)

    setTimeout(() => {
      this.setState({ count: 3 })
      console.log(this.state.count)
      this.setState({ count: 4 })
      console.log(this.state.count)
    }, 0);
  }
}

