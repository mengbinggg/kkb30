/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-02 14:42:40
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-02 15:11:56
 * @Descripttion: 高阶组件HOC
 */
import React, { Component } from "react";

export default class hocTest extends Component {
    render() {
        return (
            <>
                <h1>我是父组件</h1>
                <Foo msg="hello world"></Foo>
            </>
        );
    }
}

class Child extends Component {
    render() {
        return <>我是子组件，接受父组件传值：{this.props.msg}</>;
    }
}

// 高阶组件：是一个函数，其参数为组件，返回值也是一个组件
function foo(Comp) {
    return class extends Component {
        render() {
            return (
                <div style={{ border: "1px solid red", padding: "10px" }}>
                    <Comp {...this.props}></Comp>
                </div>
            );
        }
    };
}

const Foo = foo(foo(foo(Child)));
