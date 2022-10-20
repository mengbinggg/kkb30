/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-08 11:39:00
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-10-08 13:09:03
 * @Descripttion: 
 */
import React, { Component } from 'react'
import { observable, autorun, configure, action } from 'mobx'

configure({
    enforceActions: 'always'
})

const obj = observable({
    name: 'Tom',
    age: 10,
    changeName(name) {
        this.name = name
    }
}, {
    changeName: action,
})
autorun(() => {
    console.log(obj.name)
})

setTimeout(() => {
    obj.changeName('Jack')
}, 1000);

export default class Demo extends Component {
  render() {
    return (
      <div>Demo</div>
    )
  }
}
