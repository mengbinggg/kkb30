/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-08 17:18:52
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-12 19:00:49
 * @Descripttion: 
 */
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import React, { Component, lazy, Suspense } from 'react'
// import News from './News'
// import Message from './Message'
import Loading from '../../components/Loading';

// 路由懒加载
const News = lazy(() => import('./News'))
const Message = lazy(() => import('./Message'))


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
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path='/home/news' component={News}></Route>
                        <Route path='/home/message' component={Message}></Route>
                        <Redirect to='/home/news'></Redirect>
                    </Switch>
                </Suspense>
            </div>
        )
    }
}
