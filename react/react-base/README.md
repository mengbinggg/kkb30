<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-18 16:47:16
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-02 15:19:05
 * @Descripttion: 
-->
# 创建项目
### 脚手架创建
```
npx create-react-app xxx
```

### npx
1. 说明：node安装后自带npm模块，npm5.x之后，增加了npx命令，可以直接使用npx
2. 作用：先判断当前项目下是否存在要执行的命令，存在则执行；不存在，则直接从npm官方库中远程拉取包（临时存储），并执行命令

# 基本操作
### 组件传值
##### 父子组件传参（props）
> 测试文件：src/propsTest.jsx
1. 父传子：
    - 父组件中在子元素标签上定义属性
    - 子元素中通过props获取（可设置默认值、参数数据类型）
2. 子传父：
    - 父组件中在子元素标签上定义事件
    - 子元素中通过props调用事件

##### 祖孙组件传参（context）
> 测试文件：src/contextTest_new.jsx、src/contextTest_old.jsx
###### 旧的方式（已摈弃，不能再严格模式下使用）
1. 父组件中：
    - 声明上下文数据类型：static childContextTypes = { ... }
    - 向上下文中存值：getChildContext() { ... }
2. 子组件中：
    - 声明需要的上下文数据类型：static contextType = { ... }
    - 直接使用：this.context.xxx

###### 新的方式
1. 先创建context上下文（默认值会在父级元素没有提供provider时使用）：const context = React.createContext(defaultValue)
2. 祖代组件中：
    - 通过context.Provider组件包裹子元素，并提供value属性，用于传递数据
3. 子孙组件中：
    - 方式一：context.Consumer组件，包裹一个函数式组件，并接受context为参数，组件中直接通过context.xxx访问
    - 方式二：class上定义static contextType属性，并赋值为全局的context，即可直接通过this.context.xxx访问
    - 方式三：使用useContext hook的方式（适用于函数式组件），通过const val = useContext(context)获取传递的参数，即可直接通过val.xxx访问


### 生命周期
> 测试文件：src/lifeCycleTest.jsx
##### 常用生命周期
###### render()
1. class组件中必须实现的方法，要求是纯函数
2. 更新时，如果 shouldComponentUpdate() 返回 false，则不会调用 render()

###### constructor()
1. 作用：
    - 通过给 this.state 赋值对象来初始化内部 state
    - 为事件处理函数绑定实例
2. 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数

###### componentDidMount()
1. 会在组件挂载后（插入 DOM 树中）立即调用
2. 可在此处通过网络请求获取数据

###### componentDidUpdate(prevProps, prevState, snapshot)
1. 会在更新后会被立即调用，首次渲染不会执行此方法
2. 更新时，如果 shouldComponentUpdate() 返回 false，则不会调用 componentDidUpdate()

###### componentWillUnmount()
1. 会在组件卸载及销毁之前直接调用
2. 不应调用 setState()，因为该组件一旦被卸载了将永远不会重新渲染，因此此时调用setState()没有意义

### 高阶组件HOC
> 测试文件：src/hocTest.jsx
1. 定义：是一个函数，其参数为组件，返回值也是一个组件
2. 作用：将多个组件的相同逻辑代码，抽象到HOC中，让组件更有结构化，更易于复用
3. 要求：
    - HOC是纯函数，没有副作用（不能破坏传入组件的特性，只通过组合形成新组件）

### 拓展
##### 快捷键
1. 创建函数式组件：rfc
2. 创建class组件：rcc

##### 纯函数
1. 定义：
    - 确定输入，会产生确定的输出
    - 不会产生副作用（如修改了全局变量、改变外部数据等）
2. 例子：
```
// 纯函数，不会修改原数组
let arr = ['a', 'b', 'c']
arr.slice(1, 2)

// 非纯函数，修改原数组
arr.splice(1, 2)
```