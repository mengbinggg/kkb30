import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../views/sandbox/home/Home'
import UserList from '../views/sandbox/userMg/UserList'
import RoleList from '../views/sandbox/rightMg/RoleList'
import RightList from '../views/sandbox/rightMg/RightList'
import AddNews from '../views/sandbox/newsMg/AddNews'
import Drafts from '../views/sandbox/newsMg/Drafts'
import NewsClassification from '../views/sandbox/newsMg/NewsClassification'
import AuditList from '../views/sandbox/auditMg/AuditList'
import AuditNews from '../views/sandbox/auditMg/AuditNews'
import TodoPublish from '../views/sandbox/publishMg/TodoPublish'
import Published from '../views/sandbox/publishMg/Published'
import Offlined from '../views/sandbox/publishMg/Offlined'

const routerMap = {
  '/home': Home,
  '/user-manage/list': UserList,
  '/right-manage/role/list': RoleList,
  '/right-manage/right/list': RightList,
  '/news-manage/add': AddNews,
  '/news-manage/draft': Drafts,
  '/news-manage/category': NewsClassification,
  '/audit-manage/list': AuditList,
  '/audit-manage/audit': AuditNews,
  '/publish-manage/unpublished': TodoPublish,
  '/publish-manage/published': Published,
  '/publish-manage/sunset': Offlined,
}

export default function ContentRouter() {
  const [routeList, setRouteList] = useState([])
  useEffect(() => {
    Promise.all([axios.get('/rights'), axios.get('/children')]).then((res) => {
      setRouteList([...res[0].data, ...res[1].data])
    })
  }, [])

  const checkPagePermission = (route) => {
    return routerMap[route.key] && route.pagepermisson == 1
  }

  return (
    <Switch>
      {routeList.map((item) => {
        if (checkPagePermission(item)) {
          return <Route path={item.key} key={item.key} component={routerMap[item.key]}></Route>
        }
        return null
      })}
    </Switch>
  )
}
