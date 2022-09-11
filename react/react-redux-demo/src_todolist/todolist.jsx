/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-01 19:51:16
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-02 14:21:25
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
        // 订阅store的变化
        store.subscribe(this.storeChange.bind(this));
    }
    storeChange() {
        this.setState(store.getState());
    }
    render() {
        return (
            <div style={{ margin: "100px auto", width: "500px" }}>
                <div style={{ display: "flex" }}>
                    <Input
                        placeholder="请输入"
                        value={this.state.inpt}
                        onChange={this.handleChange.bind(this)}
                    ></Input>
                    <Button type="primary" onClick={this.handleAdd.bind(this)}>
                        增加
                    </Button>
                </div>
                <List
                    style={{ marginTop: "20px" }}
                    bordered
                    dataSource={this.state.list}
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
        );
    }
    handleChange(e) {
        store.dispatch({
            type: "changeInpt",
            payload: e.target.value,
        });
    }
    handleAdd() {
        store.dispatch({
            type: "addFn",
        });
    }
    handleDel(index) {
        store.dispatch({
            type: "delFn",
            payload: index,
        });
    }
}
