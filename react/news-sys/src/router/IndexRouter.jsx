/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-20 16:28:23
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-10-20 17:06:54
 * @Descripttion: 
 */
import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../views/login/Login'
import Index from '../views/sandbox/Index'

export default function IndexRouter() {
  return (
    <div>
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path='/' render={() => {
					return localStorage.getItem('token')? <Index></Index>: <Redirect to="/login"></Redirect>
                }}></Route>
            </Switch>
        </HashRouter>
    </div>
  )
}
