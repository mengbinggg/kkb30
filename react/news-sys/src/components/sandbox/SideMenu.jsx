/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-31 11:36:54
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-01 11:41:23
 * @Descripttion:
 */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { Layout, Menu } from 'antd'
import './index.css'
import { withRouter } from 'react-router-dom'
const { Sider } = Layout

function SideMenu(props) {
  const [menu, setMenu] = useState(null)
  useEffect(() => {
    // 获取菜单信息
    axios.get('/rights?_embed=children').then((res) => {
      if (res.data) {
        const menus = dealMenus(res.data)
        setMenu(menus)
      }
    })
  }, [])

  // 处理菜单（过滤没有权限的菜单、处理label显示、删除没有子节点的children属性）
  const dealMenus = (menus) => {
    return menus
      .filter((item) => item.pagepermisson && item.pagepermisson === 1)
      .map((item) => {
        let menu = {}
        if (item.children && item.children.length > 0) {
          // 递归处理子节点
          item.children = dealMenus(item.children)
          menu = {
            key: item.key,
            label: item.title,
            children: item.children,
          }
        } else {
          menu = {
            key: item.key,
            label: item.title,
          }
        }
        return menu
      })
  }

  const selectedKeys = [props.history.location.pathname]
  const openKeys = ['/' + props.history.location.pathname.split('/')[1]]
  return (
    <Sider trigger={null} collapsible collapsed={props.isCollapsed}>
      <div className="sysName">全球新闻发布管理系统</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selectedKeys}
        defaultOpenKeys={openKeys}
        items={menu}
        onClick={(e) => {
          props.history.push(e.key)
        }}
      />
    </Sider>
  )
}

export default connect(({ collapseReducer }) => {
  return {
    isCollapsed: collapseReducer.isCollapsed,
  }
})(withRouter(SideMenu))
