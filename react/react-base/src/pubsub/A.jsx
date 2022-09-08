/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-07 17:36:08
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-07 17:53:09
 * @Descripttion:
 */
import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class A extends Component {
    handleSend = () => {
        PubSub.publish("msg", "hello world");
    };
    render() {
        return (
            <div>
                <h1>我是A组件</h1>
                <button onClick={this.handleSend}>发送信息</button>
            </div>
        );
    }
}
