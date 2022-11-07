/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-01 14:35:59
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-01 16:49:20
 * @Descripttion:
 */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Table, Tag, Space } from 'antd'
const columns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: '权限名称',
    dataIndex: 'title'
  },
  {
    title: '权限路径',
    dataIndex: 'key',
    render: (column) => {
      return <Tag color="orange">{column}</Tag>
    }
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space>
      <a>删除</a>
        <a>页面配置项</a>
      </Space>
    ),
  },
]

export default function RightList() {
  const [dataSource, setDataSource] = useState([])
  useEffect(() => {
    axios.get('/rights?_embed=children').then(res => {
      setDataSource(res.data.map(item => {
        if(item.children && item.children.length == 0) {
          delete item.children
        }
        return item
      }))
    })
  }, [])
  
  return <Table columns={columns} dataSource={dataSource} />
}
