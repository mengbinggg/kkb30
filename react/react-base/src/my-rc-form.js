/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-03 20:54:07
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-03 22:06:07
 * @Descripttion: 自定义rc-form表单收集器
 */
import React, { Component } from "react";

export default function (Comp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {};
            this.options = {};
        }

        getForm() {
            return {
                form: {
                    getFieldDecorator: (field, option) => (Cmp) => {
                        this.options[field] = option;
                        return React.cloneElement(Cmp, {
                            value: this.state[field] || "",
                            onChange: (e) => {
                                this.setState({
                                    [field]: e.target.value,
                                });
                            },
                        });
                    },
                    setFieldsValue: (obj) => {
                        this.setState(obj);
                    },
                    getFieldsValue: () => {
                        return this.state;
                    },
                    validateFields: (cb) => {
                        console.log(this.options);
                        let err = [];
                        for (const field in this.options) {
                            const rules = this.options[field].rules;
                            if (rules[0].required && this.state[field] === "") {
                                err.push({ [field]: rules[0].message });
                            }
                        }

                        if (err.length > 0) {
                            // 校验失败
                            cb(err);
                        } else {
                            // 校验成功
                            cb(null, this.state);
                        }
                    },
                },
            };
        }

        render() {
            return <Comp {...this.props} {...this.getForm()}></Comp>;
        }
    };
}
