/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-20 11:26:24
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-20 11:34:14
 * @Descripttion: 
 */
import React, { lazy, Suspense } from 'react'
const Child = lazy(() => import('./Child'))
// import Child from './Child'

export default function lazyTest() {
  return (
    <div>
      <h1>我是父组件</h1>
      <Suspense fallback={<div>loading</div>}>
        <Child></Child>
      </Suspense>
    </div>
  )
}
