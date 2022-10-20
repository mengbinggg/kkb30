/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-08 11:39:00
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-10-08 11:42:37
 * @Descripttion: 
 */
import React, { Component } from 'react'
import { observable, autorun } from 'mobx'

const num = observable.box(19)
autorun(() => {
    console.log(num.get())
})

setTimeout(() => {
    num.set(20)
}, 1000);

export default class Demo extends Component {
  render() {
    return (
      <div>Demo</div>
    )
  }
}
