/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 17:23:40
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-01 18:10:12
 * @Descripttion: 常用生命周期
 */
import React, { Component } from "react";

export default class lifeCycleTest extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      num: 1,
    };
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>{this.state.num}</h1>
        <button onClick={this.handleClick.bind(this)}>改变</button>
      </>
    );
  }
  handleClick() {
    this.setState({
      num: 2,
    });
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    this.setState({
      num: 3,
    });
  }
}
