/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-05 15:12:53
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-10-08 10:24:04
 * @Descripttion: 受控组件 VS 非受控组件
 */
import React, { Component } from "react";

export default class controlComp extends Component {
    state = {
        inp1: "999",
    };
    inp2 = React.createRef();

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="我是受控组件"
                    value={this.state.inp1}
                    onChange={(e) => {
                        this.setState({
                            inp1: e.target.value,
                        });
                    }}
                />
                <button
                    onClick={() => {
                        console.log(this.state.inp1);
                    }}
                >
                    获取值
                </button>

                <br />

                <input
                    type="text"
                    placeholder="我是非受控组件"
                    ref={this.inp2}
                />
                <button
                    onClick={() => {
                        console.log(this.inp2.current.value);
                    }}
                >
                    获取值
                </button>
            </div>
        );
    }
}
