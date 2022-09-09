/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-09 15:52:11
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-09 16:01:30
 * @Descripttion: 
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Header extends Component {
    render() {
        return (
            <div>
                <h1> react - router演示</h1>

                <div style={{ float: 'right' }}>
                    <button className="btn btn-primary m-1" onClick={() => this.props.history.goBack()}>回退</button>
                    <button className="btn btn-primary m-1" onClick={() => this.props.history.goForward()}>前进</button>
                </div>
            </div>
        )
    }
}


export default withRouter(Header)