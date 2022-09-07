/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-07 14:30:28
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-07 14:38:41
 * @Descripttion:
 */
import React, { Component } from 'react'
import axios from 'axios'
export default class Proxy extends Component {
  getStudentInfo = () => {
    axios.get('http://localhost:5000/students').then((res) => console.log(res))
  }
  getCarInfo = () => {
    axios.get('http://localhost:5001/cars').then((res) => console.log(res))
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
