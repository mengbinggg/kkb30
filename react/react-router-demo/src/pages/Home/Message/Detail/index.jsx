/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-09 10:20:37
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-09 13:29:20
 * @Descripttion: 
 */
import React, { Component } from 'react'
import qs from 'qs'


const msgs = [
    {
        id: 1,
        content: '今天是星期一'
    }, {
        id: 2,
        content: '今天天气真好呀'
    }, {
        id: 3,
        content: '这碗面太好吃了'
    },
]

export default class Detail extends Component {

    render() {
        // let { id, title } = this.props.match.params
        // let { id, title } = qs.parse(this.props.location.search.slice(1))
        let { id, title } = this.props.location.state

        const msg = msgs.find((item) => {
            return item.id === id
        }) || {}

        return (
            <ul>
                <li>编号：{id}</li>
                <li>标题：{title}</li>
                <li>内容：{msg.content}</li>
            </ul>
        )
    }
}
