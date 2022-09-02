<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-05 17:21:05
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-21 19:43:02
 * @Descripttion: 项目说明
-->
#### 简单实现Vue3中createApp
1. 定义一个Vue对象，其中包含createApp()，通过调用渲染器的createApp()返回一个app实例
2. 平台渲染器createRenderer()，用于生成一个指定平台的渲染器（方便后续扩充）
    - 参数：接受指定平台的DOM操作方法
    - 返回值：返回一个对象，并包含createApp()方法，返回一个app实例
3. app实例中包含mount()，用于将Vnode挂载到指定节点上
    - 参数：接受一个DOM节点，用于挂载Vnode