/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-07 14:30:28
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-07 15:57:34
 * @Descripttion:
 */
import React, { Component } from 'react'
import axios from 'axios'

export default class ProxyTest extends Component {
  getStudentInfo = () => {
    axios.get('http://localhost:3000/api1/students').then((res) => console.log(res))
  }

  getCarInfo = () => {
    axios.get('http://localhost:3000/api2/cars').then((res) => console.log(res))
  }

  render() {
    return (
      <div>
        <h1>配置代理</h1>
        <button onClick={this.getStudentInfo}>请求学生信息</button>
        <button onClick={this.getCarInfo}>请求汽车信息</button>
      </div>
    )
  }
}
