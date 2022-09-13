/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-13 10:37:16
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-13 11:20:45
 * @Descripttion: 
 */
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <span>home</span>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink className="nav-link" to='news'>新闻</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='message'>消息</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
