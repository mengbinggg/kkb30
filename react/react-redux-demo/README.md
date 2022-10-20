<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-02 14:09:29
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-10-08 12:59:41
 * @Descripttion: 
-->
# redux
> [src_redux](./src_redux)
## 基本使用
![原理](./public/screenshots/redux原理图.png)
1. 安装：
   ```js
    npm i redux -S
   ```
2. 配置文件（src/redux目录下）：
   - store.js：创建stroe对象
   - xx_reducer.js：对状态进行初始化、加工
     - 本质是一个函数（**纯函数**，不能对state数据进行操作）
     - 该函数接受state、action为参数，并返回一个新的state
   - xx_action.js：专门用于生成action对象
   - constant.js：存放action的type值
3. 使用：
   - 修改index.js，全局检测store状态的变化，一旦发生改变重新渲染（store.subscribe()）
   - 组件中：
     - 引入store.js
     - 获取状态：store.getState()
     - 提交action：store.dispatch(action)

## 异步action
1. 作用：在异步任务中实现对状态的更改
2. 实现：需要借助第三方中间件（redux-thunk）
    - store.js中创建stroe对象时，传入第二个对象
        ```js
        createStore(countReducer, applyMiddleware(thunk))
        ``` 
    - action中返回一个函数，在函数中进行一步操作
3. 备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action


# react-redux
## 基本使用
> [src_react_redux_base](./src_react_redux_base/)

![原理](./public/screenshots/react-redux模型图.png)
1. 两个概念：
   - UI组件：不能使用任何redux的api，只负责页面的呈现、交互等
	- 容器组件：负责和redux通信，将结果通过props传递给UI组件
2. 实现：
   - 通过connect()创建一个容器组件
      ```js
      connect(mapStateToProps,mapDispatchToProps)(UI组件)
      // mapStateToProps：映射状态，返回值是一个对象
	  // mapDispatchToProps：
      //   - 映射操作状态的方法，返回值是一个对象
      //   - 也可以是一个对象
      ```
   - 通过容器组件的props传递容器组件中需要的state，或者给所有容器组件外层（即`<App>`）包裹一个`<Provider>`
3. 备注：不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作

## 数据共享
> [src_react_redux](./src)
1. 目标：定义一个Pserson组件，和Count组件通过redux共享数据
2. 重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，合并后的总状态是一个对象
3. 备注：可通过nanoid()生成唯一ID

## redux开发者工具
1. 想要在项目中使用redux开发者工具，需要借助第三方中间件redux-devtools-extension
2. 配置：
   ```js
   import {composeWithDevTools} from 'redux-devtools-extension'
	const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
   ```

# mobx
## 概念
1. 作用：






