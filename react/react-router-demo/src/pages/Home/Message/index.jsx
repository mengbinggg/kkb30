/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-08 18:11:37
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-09 15:48:32
 * @Descripttion: 
 */
import { Link, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        msgs: [
            {
                id: 1,
                title: "消息1"
            }, {
                id: 2,
                title: "消息2"
            }, {
                id: 3,
                title: "消息3"
            },
        ]
    }

    handlePush = (id, title) => {
        this.props.history.push('/home/message/detail', { id, title })
    }
    handleReplace = (id, title) => {
        this.props.history.replace('/home/message/detail', { id, title })
    }

    render() {
        let { msgs } = this.state
        return (
            <div>
                <ul>
                    {
                        msgs.map(item => {
                            return (
                                <li key={item.id} style={{ margin: '10px' }}>
                                    {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}
                                    {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                                    <Link to={{ pathname: `/home/message/detail`, state: item }}>{item.title}</Link>

                                    <button className="btn btn-primary m-1" onClick={() => this.handlePush(item.id, item.title)}>push跳转</button>
                                    <button className="btn btn-primary m-1" onClick={() => this.handleReplace(item.id, item.title)}>replace跳转</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* <Route path='/home/message/detail/:id/:title' component={Detail}></Route> */}
                {/* <Route path='/home/message/detail' component={Detail}></Route> */}
                <Route path='/home/message/detail' component={Detail}></Route>
            </div>
        )
    }
}
