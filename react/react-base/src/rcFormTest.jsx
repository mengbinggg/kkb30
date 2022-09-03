/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-03 19:59:48
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-03 21:50:24
 * @Descripttion: rc-form的使用
 */
import React, { Component } from "react";
// import { createForm } from "rc-form";
import createForm from "./my-rc-form";

const usernameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

@createForm
export default class rcFormTest extends Component {
    componentDidMount() {
        // 设置初始值
        const { setFieldsValue } = this.props.form;

        setFieldsValue({
            username: "张三",
            password: "123",
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <>
                {getFieldDecorator("username", {
                    rules: [usernameRules],
                })(<input type="text" placeholder="请输入username" />)}

                {getFieldDecorator("password", {
                    rules: [passworRules],
                })(<input type="password" placeholder="请输入password" />)}

                <button onClick={this.submit.bind(this)}>提交</button>
            </>
        );
    }
    submit() {
        const { getFieldsValue, validateFields } = this.props.form;

        // 获取表单元素值
        let obj = getFieldsValue();
        console.log(obj);

        // 校验表单
        validateFields((err, val) => {
            if (err) {
                console.error(err);
            } else {
                console.log(val);
            }
        });
    }
}
