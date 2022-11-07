/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-20 16:45:05
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-01 16:50:52
 * @Descripttion: 
 */
import React,{ useState } from 'react'
import './index.css'

import { Layout } from 'antd';
import TopHeader from '../../components/sandbox/TopHeader';
import SideMenu from '../../components/sandbox/SideMenu';
import ContentRouter from '../../router/ContentRouter';


const { Content } = Layout;

export default function Index() {
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            height: '100%',
            overflow: 'auto'
          }}
        >
          <ContentRouter></ContentRouter>
        </Content>
      </Layout>
    </Layout>
  )
}
