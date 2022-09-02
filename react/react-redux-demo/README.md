<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-02 14:09:29
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-02 14:35:57
 * @Descripttion: 
-->
# redux
### redux基本使用（实现todoList）
1. 安装包
```
npm i redux antd -S
```
2. 添加redux配置文件
    - 新建入口文件store/index.js：引入reducer，并创建仓库createStore(reducer)
    - 新建store/reducer.js：返回一个函数（纯函数，不能对state数据进行操作），该函数接受state、action为参数，通过条件判断action的type，返回一个新的state
3. 使用：
    - 引入"./store/index.js"
    - constructor中初始化state：this.state = store.getState()
    - componentDidMount生命周期中订阅store的变化：store.subscribe()
    - 需要修改state值时，需要派发action：store.dispatch(action)