<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-05 17:21:05
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-06 16:44:16
 * @Descripttion: 项目说明
-->
#### 简单实现Vue源码
1. 实现MVue类，并在构造函数中实现
    - 执行数据响应式
    - 执行数据在实例上的直接代理
    - 执行模板编译
2. 对数据进行代理
    - 编译data对象，通过Object.defineProperty对属性进行代理
    - 如果属性也是对象，做递归处理
3. 模板编译实现
    - 获取el挂载元素下的全部子元素，遍历判断类型
    - 如果是文本：判断是否满足{{}}格式，满足则替换文本
    - 如果是元素：获取标签属性，在根据不同标签元素做不同的处理
4. 数据响应式实现
    - 数据代理时，为每一个对象创建一个Dep类，用于管理所有的watcher，一个属性对应一个watcher
    - 模板编译时，每当发现一个属性被使用，则创建一个watcher，并将其添加到Dep中进行同意管理
    - 当数据发生改变时，Dep则通知所有的watcher对视图进行更新