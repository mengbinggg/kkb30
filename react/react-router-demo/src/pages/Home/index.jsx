/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-08 17:18:52
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-09 10:29:19
 * @Descripttion: 
 */
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react'
import News from './News'
import Message from './Message'

export default class home extends Component {
    render() {
        return (
            <div>
                <span>home</span>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/home/news'>新闻</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/home/message'>消息</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path='/home/news' component={News}></Route>
                    <Route path='/home/message' component={Message}></Route>
                    <Redirect to='/home/news'></Redirect>
                </Switch>
            </div>
        )
    }
}
