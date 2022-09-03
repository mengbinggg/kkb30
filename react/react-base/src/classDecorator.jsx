/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-03 17:26:11
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-03 19:48:27
 * @Descripttion: 装饰器
 */
import React, { Component } from "react";

export default class classDecorator extends Component {
    render() {
        return <Person></Person>;
    }
}

@borderWithColor("blue")
@border
@border
class Person extends React.Component {
    state = {
        num: 1,
    };
    render() {
        return (
            <>
                <h1>{this.state.num}</h1>
                <button onClick={this.handleClick.bind(this)}>累加</button>
            </>
        );
    }

    @log
    handleClick() {
        this.setState({
            num: this.state.num + 1,
        });
    }
}

/*
 * @Description: 类装饰器（为当前组件添加了一个border）
 * @param1: 类的构造函数
 * @return: 装饰之后类的构造函数（一个新的构造函数）
 * @Author: mengbing
 * @Date: 2022-09-03 16:47:53
 */
function border(Comp) {
    return class extends Component {
        render() {
            return (
                <div style={{ border: "1px solid red", padding: "10px" }}>
                    <Comp></Comp>
                </div>
            );
        }
    };
}

/*
 * @Description: 类装饰器（为当前组件添加了一个border，并且可以自定义边框颜色）
 * @param1: 边框颜色
 * @return: 装饰器函数
 * @Author: mengbing
 * @Date: 2022-09-03 16:47:53
 */
function borderWithColor(color) {
    return function (Comp) {
        return class extends Component {
            render() {
                return (
                    <div
                        style={{
                            border: "1px solid " + color,
                            padding: "10px",
                        }}
                    >
                        <Comp></Comp>
                    </div>
                );
            }
        };
    };
}

/*
 * @Description: 类方法装饰器（）
 * @param1: 装饰方法是实例方法是：类的原型对象；装饰方法是静态方法是：类的构造函数
 * @param2: 方法名称
 * @param3: 当前方法的属性描述符
 * @return: 装饰之后的方法属性描述符
 * @Author: mengbing
 * @Date: 2022-09-03 16:47:53
 */
function log(target, methodName, descriptor) {
    let oldValue = descriptor.value;
    return {
        ...descriptor,
        value: function () {
            console.log("当前方法名为：" + methodName);
            return oldValue.apply(this, arguments);
        },
    };
}
