/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-07 17:36:08
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-07 17:52:48
 * @Descripttion:
 */
import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class B extends Component {
    state = {
        msg: "",
    };
    componentDidMount() {
        this.token = PubSub.subscribe("msg", (_, data) => {
            this.setState({
                msg: data,
            });
        });
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }
    render() {
        return (
            <div>
                <h1>我是B组件</h1>
                <div>我接收到：{this.state.msg}</div>
            </div>
        );
    }
}
