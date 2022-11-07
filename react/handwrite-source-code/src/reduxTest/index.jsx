/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 19:51:16
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-03 16:45:09
 * @Descripttion:
 */
import React, { Component } from "react";
import store from "./store";
import { Input, Button, List } from "antd";

export default class todoList extends Component {
    constructor(props) {
        super(props);
        // 初始化state
        this.state = store.getState();
    }
    componentDidMount() {
        // 订阅store
        this.unsubscribe = store.subscribe(this.storeChange.bind(this));
    }
    componentWillUnmount() {
        // 取消订阅store
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    storeChange() {
        this.setState(store.getState());
    }
    render() {
        return (
            <div style={{ margin: "100px 0", textAlign: "center" }}>
                <h1 style={{ textAlign: "center" }}>
                    当前count值为：{this.state.count}
                </h1>
                <button onClick={this.handleIncrease.bind(this)}>ADD</button>
                <div style={{ margin: "20px auto", width: "500px" }}>
                    <div style={{ display: "flex" }}>
                        <Input
                            placeholder="请输入"
                            value={this.state.todolist.inpt}
                            onChange={this.handleChange.bind(this)}
                        ></Input>
                        <Button
                            type="primary"
                            onClick={this.handleAdd.bind(this)}
                        >
                            增加
                        </Button>
                    </div>
                    <List
                        style={{ marginTop: "20px", textAlign: "left" }}
                        bordered
                        dataSource={this.state.todolist.list}
                        renderItem={(item, index) => (
                            <List.Item>
                                {item}
                                <Button
                                    type="dashed"
                                    danger
                                    size="small"
                                    style={{ float: "right" }}
                                    onClick={this.handleDel.bind(this, index)}
                                >
                                    删除
                                </Button>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
    // 输入
    handleChange(e) {
        store.dispatch({
            type: "changeInpt",
            payload: e.target.value,
        });
    }
    // 异步增加（方法）
    handleAdd() {
        if (!this.state.todolist.inpt) return;

        store.dispatch((dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: "addFn",
                });
            }, 1000);
        });
    }
    // 删除（promise）
    handleDel(index) {
        store.dispatch(
            Promise.resolve({
                type: "delFn",
                payload: index,
            })
        );
    }
    // count + 1
    handleIncrease() {
        store.dispatch({
            type: "ADD",
            payload: 1
        })
    }
}
