/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-29 15:11:14
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-29 15:19:21
 * @Descripttion: 
 */
import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }

  handleClick = (e) => {
    console.log(e)
    console.log(e.__proto__.constructor.name)  // SyntheticBaseEvent
  }
}
