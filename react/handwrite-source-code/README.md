<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-03 14:32:43
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-03 16:30:11
 * @Descripttion: 
-->
# 手写redux

## 实现createStore
### 作用
1. 接受两个对象（reducer/中间件）
2. 返回一个store对象
### 实现
1. getState：获取state
2. dispatch：派发action，实现对state的修改
3. subscribe：订阅state变化（state改变，则执行回调函数）

## 实现applyMiddleware
### 作用
1. 接受多个中间件
2. 返回一个增强的store对象（增强了dispatch的功能，从而实现能够处理各种类型的action）
### 实现
1. 创建store时，判断是否存在中间件（存在，则返回加强后的store）
2. 增强dispatch
    - 定义中间件执行时，需要用到的参数
    - 遍历中间件，并传入参数
    - 通过**函数合成**的方式，调用各个中间件，并返回加强版的dispatch
3. 返回加强后的store
### 中间件实现
#### logger
1. 作用：打印处理dispatch时的操作日志
2. 注意：logger必须放在中间件参数的最后一个（因为logger只能处理正常格式的action）
#### thunk
1. 作用：处理异步action
#### promise
1. 作用：处理promise类型的action

## 实现combineReducers
### 作用
1. 接受多个reducer
2. 返回合并后的reducer