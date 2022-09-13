/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-13 10:37:31
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-13 12:05:03
 * @Descripttion: 
 */
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
    const [msgs, setMsgs] = useState([
        {
            id: 1,
            title: "消息1",
            content: '今天天气真好'
        }, {
            id: 2,
            title: "消息2",
            content: '我要和朋友去逛街'
        }, {
            id: 3,
            title: "消息3",
            content: '晚上还要去857'
        },
    ])
    const nav = useNavigate()

    function handleClick(item) {
        nav('detail', {
            replace: true,
            state: item
        })
    }

    return (
        <div>
            <ul>
                {
                    msgs.map(item => {
                        return (
                            <li key={item.id} style={{ margin: '10px' }}>
                                {/* <Link to={`detail/${item.id}/${item.title}/${item.content}`}>{item.title}</Link> */}
                                {/* <Link to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</Link> */}
                                <Link to='detail' state={item}>{item.title}</Link>

                                <button className="btn btn-primary m-1" onClick={() => handleClick(item)}>点击跳转</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet></Outlet>
        </div>
    )
}
