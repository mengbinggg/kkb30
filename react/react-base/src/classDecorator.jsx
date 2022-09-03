/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-03 17:26:11
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-03 17:26:27
 * @Descripttion: 装饰器
 */
import React, { Component } from "react";

export default class classDecorator extends Component {
    render() {
        return <div>classDecorator</div>;
    }
}

@testable
class Person extends React.Component {
    render() {
        return <h1>Hello, world!</h1>;
    }
}
console.log(Person);

/*
 * @Description: 为类添加了一个静态属性isTestable
 * @param1: 类的构造函数
 * @return: 装饰之后类的构造函数
 * @Author: mengbing
 * @Date: 2022-09-03 16:47:53
 */
function testable(target) {
    target.isTestable = true;
    return target;
}
