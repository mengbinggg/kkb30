/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-31 11:36:43
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-01 15:55:50
 * @Descripttion:
 */
import React, { useState } from 'react'
import { connect } from 'react-redux'

import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Dropdown, Menu, Avatar } from 'antd'
const { Header } = Layout

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: '超级管理员',
      },
      {
        key: '2',
        danger: true,
        label: '退出登录',
      },
    ]}
  />
)

function TopHeader(props) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Header className="site-layout-background">
      {React.createElement(props.isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => props.changeCollapsed(),
      })}

      <div style={{ float: 'right' }}>
        <span style={{ marginRight: '10px' }}>欢迎回来</span>
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}

export default connect(
  ({ collapseReducer }) => {
    return {
      isCollapsed: collapseReducer.isCollapsed,
    }
  },
  {
    changeCollapsed() {
      return {
        type: 'changeCollapsed',
      }
    },
  }
)(TopHeader)
