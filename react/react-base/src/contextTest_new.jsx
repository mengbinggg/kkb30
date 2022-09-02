/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 15:45:10
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-02 14:40:58
 * @Descripttion: 实现祖孙组件传参（新的context方式）
 */
import React, { Component, useContext } from "react";

// 参数的默认值，会在父级元素没有提供provider时使用
const context = React.createContext({
    msg: "我是默认值",
    num: 0,
});

// 父组件
export default class contextTest_new extends Component {
    state = {
        msg: "hello world",
        num: 99,
    };
    render() {
        return (
            <context.Provider value={this.state}>
                <Child></Child>
            </context.Provider>
        );
    }
}

// 子组件
class Child extends Component {
    render() {
        return (
            <>
                <GrandSon></GrandSon>
                <hr />
                <GrandSon1></GrandSon1>
                <hr />
                <GrandSon2></GrandSon2>
            </>
        );
    }
}

// 孙组件（可分三种方式）
// consumer方式
class GrandSon extends Component {
    render() {
        return (
            <context.Consumer>
                {(context) => {
                    return (
                        <>
                            <h1>我是孙子组件（consumer方式）</h1>
                            <div>msg: {context.msg}</div>
                            <div>num: {context.num}</div>
                        </>
                    );
                }}
            </context.Consumer>
        );
    }
}

// contextType方式
class GrandSon1 extends Component {
    static contextType = context;
    render() {
        return (
            <>
                <h1>我是孙子组件（contentType方式）</h1>
                <div>msg: {this.context.msg}</div>
                <div>num: {this.context.num}</div>
            </>
        );
    }
}

// useContext方式（适用于函数式组件）
function GrandSon2() {
    const val = useContext(context);
    return (
        <>
            <h1>我是孙子组件（useContext方式）</h1>
            <div>msg: {val.msg}</div>
            <div>num: {val.num}</div>
        </>
    );
}
