<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-23 16:14:06
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-29 16:45:28
 * @Descripttion: 面试题讲解
-->
## setState
1. setState是异步还是同步？
   - 判断标准：看是否命中batchUpdate机制
   - 同步：
     - setTimeout、setInterval等
     - 自定义DOM事件
     - **react不能管理的入口**
   - 异步：
     - 生命周期
     - react中注册的事件
     - **react能管理的入口**


## 组件通信
1. 父子组件：props
2. 组孙组件：context
3. 全局组件：redux、自定义事件

## 合成事件
1. 合成事件机制的作用？
   - 更好的跨平台和兼容性
   - 事件全部挂载在document上，能减少内存消耗、避免频繁解绑事件
   - 方便事件的统一管理（如事务机制）
  
## 性能优化
1. 渲染列表时，正确使用key
2. 自定义事件、DOM事件及时销毁
3. 合理使用异步组件
4. 减少函数bind this的次数
5. 合理使用showComponentUpdate、PureComponent、memo
6. 合理使用Immutable.js
7. 其他
   - webpack优化
   - 前端通用优化：如图片懒加载
   - SSR
  
## react和Vue的区别
1. 相同点：
   - 都支持组件化
   - 都是数据驱动视图
   - 都使用vdom操作DOM
2. 不同点：
   - React使用jsx拥抱js，Vue使用模板拥抱html
   - React函数式编程，Vue声明式编程
   - React更多需要自力更生，Vue把想要的都给你
