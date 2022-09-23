<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-18 16:47:16
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-23 17:47:05
 * @Descripttion: 
-->
# 创建项目
## 脚手架创建
```js
npx create-react-app xxx
```

## npx
1. 说明：node安装后自带npm模块，npm5.x之后，增加了npx命令，可以直接使用npx
2. 作用：先判断当前项目下是否存在要执行的命令，存在则执行；不存在，则直接从npm官方库中远程拉取包（临时存储），并执行命令

# 基本操作
## 组件三大核心属性
### state
1. 作用：定义组件状态
2. 注意：
   - 只能通过setState的形式更改，属性更改时是**合并**而不是直接替换
3. 更新状态：setState()
  ```javascript
  setState(param1, [cb])
  // param1 可以是一个对象，也可以是一个函数
    // 对象：为状态改变对象（是函数式的语法糖）
    // 函数：接受state和props两个参数，并返回一个状态改变对象
    // 如何使用：如果新状态不依赖于原状态 ===> 使用对象方式；如果新状态依赖于原状态 ===> 使用函数方式
  // cb 是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用，用于获取最新的状态数据

  this.setState( state => ({count:state.count+1}))
  ```

### props
1. 作用：通过标签属性项组件内部传递参数
2. 批量传递参数：
    ```jsx
    <Person {...obj}></Person>
    ```
3. 参数进行限制：
    - propTypes：限制参数类型/是否必传（如：PropTypes.number.isRequired）
    - defaultProp：设置参数默认值
4. 函数式组件中使用props：通过函数参数接受

### ref
1. 作用：获取组件元素
2. 形式：
    - 字符串形式（已过时）：
        ```html
        <input ref="input"/>

        // 获取
        this.refs.input.value
        ```
    - 回调函数形式：
        ```html
        <input ref="(c) => {this.input = c}"/>

        // 获取
        this.input.value
        ```
    - createRef形式：
        ```html
        // 创建一个ref容器，用于存放绑定的元素
        const myInput = React.createRef()
        <input ref="myInput"/>

        // 获取
        this.myInput.current.value
        ```

## 受控组件 VS 非受控组件
> 测试文件：[src/controlComp.jsx](./src/controlComp.jsx)
1. 受控组件（推荐）：表单元素的数据由React控制
2. 非受控组件：表单元素的数据由DOM节点处理

## 组件传值
### 父子组件传参（props）
> 测试文件：[src/propsTest.jsx](./src/propsTest.jsx)
1. 父传子：
    - 父组件中在子元素标签上定义属性
    - 子元素中通过props获取（可设置默认值、参数数据类型）
2. 子传父：
    - 父组件中在子元素标签上定义事件
    - 子元素中通过props调用事件

### 祖孙组件传参（context）
> 测试文件：[src/contextTest_new.jsx](./src/contextTest_new.jsx)、[src/contextTest_old.jsx](src/contextTest_old.jsx)
1. 旧的方式（已摈弃，不能再严格模式下使用）
    - 父组件中：
        - 声明上下文数据类型：static childContextTypes = { ... }
        - 向上下文中存值：getChildContext() { ... }
    - 子组件中：
        - 声明需要的上下文数据类型：static contextType = { ... }
        - 直接使用：this.context.xxx
2. 新的方式
   - 先创建context上下文（默认值会在父级元素没有提供provider时使用）：const context = React.createContext(defaultValue)
   - 祖代组件中：
       - 通过context.Provider组件包裹子元素，并提供value属性，用于传递数据
   - 子孙组件中：
       - 方式一：context.Consumer组件，包裹一个函数式组件，并接受context为参数，组件中直接通过context.xxx访问
       - 方式二：class上定义static contextType属性，并赋值为全局的context，即可直接通过this.context.xxx访问
       - 方式三：使用useContext hook的方式，通过const val = useContext(context)获取传递的参数，即可直接通过val.xxx访问
       - **区别**：
         - contextType：只适用于类组件，只能订阅单一的context来源
         - useContext：只适用于函数式组件、自定义hook，可以定义多个context来源
         - consumer：适用于类组件、函数式组件，也可以定义多个context来源

### 兄弟组件传参（PubSubJS）
> 测试文件：pubsub/index.jsx
1. 安装
    ```js
    npm i pubsub-js -S
    ```
2. 使用：
    ```js
    import PubSub from "pubsub-js";

    // 发布消息
    PubSub.publish("消息名称", "消息内容");

    // 订阅消息
    const token = PubSub.subscribe("消息名称", cb)
    // 取消订阅
    PubSub.unsubscribe(token);
    ```

## 生命周期
> 测试文件：[src/lifeCycleTest.jsx](./src/lifeCycleTest.jsx)
### 新旧对比
#### 旧的生命周期
1. 挂载阶段
    - constructor
    - componentWillMount
    - render
    - componentDidMount
2. 更新阶段
    - 调用setState()更新：
        - shouldComponentUpdate
        - componentWillUpdate
        - render
        - componentDidUpdate
    - 调用forceUpdate()更新：
        - componentWillUpdate
        - render
        - componentDidUpdate
    - 父组件更新：
        - componentWillReceiveProps：组件**再次接收**props时调用
        - shouldComponentUpdate
        - componentWillUpdate
        - render
        - componentDidUpdate
3. 卸载阶段
    - componentWillUnmount

#### 新的生命周期
1. 挂载阶段
    - constructor
    - static getDerivedStateFromProps
    - render
    - componentDidMount
2. 更新阶段
    - 调用setState()更新 / 父组件更新：
        - static getDerivedStateFromProps
        - shouldComponentUpdate
        - getSnapshotBeforeUpdate
        - render
        - componentDidUpdate
    - 调用forceUpdate()更新：
        - static getDerivedStateFromProps
        - getSnapshotBeforeUpdate
        - render
        - componentDidUpdate
3. 卸载阶段
    - componentWillUnmount

#### 对比
1. 删除3个生命周期：
    - componentWillMount
    - componentWillReceiveProps
    - componentWillUpdate
2. 新增2个生命周期：
    - getDerivedStateFromProps
    - getSnapshotBeforeUpdate

### 常用生命周期
1. render()
   - class组件中必须实现的方法，要求是纯函数
   - 更新时，如果 shouldComponentUpdate() 返回 false，则不会调用 render()
2. constructor()
   - 作用：
       - 通过给 this.state 赋值对象来初始化内部 state
       - 为事件处理函数绑定实例
   - 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数
3. componentDidMount()
   - 会在组件挂载后（插入 DOM 树中）立即调用
   - 可在此处通过网络请求获取数据
4. componentDidUpdate(prevProps, prevState, snapshot)
   - 会在更新后会被立即调用，首次渲染不会执行此方法
   -  更新时，如果 shouldComponentUpdate() 返回 false，则不会调用 componentDidUpdate()
5.  componentWillUnmount()
    - 会在组件卸载及销毁之前直接调用
    - 不应调用 setState()，因为该组件一旦被卸载了将永远不会重新渲染，因此此时调用setState()没有意义

### 不常用生命周期
1. getDerivedStateFromProps（从props获取派生状态）
   - render 方法之前调用，挂载/更新时都会被调用
   - 返回一个对象来更新 state，如果返回 null 则不更新任何内容（state 的值在任何时候都取决于返回值）

2. getSnapshotBeforeUpdate（更新之前获取快照）
   - 在最近一次渲染输出（提交到 DOM 节点）之前调用
   - 生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()

### 生命周期执行次数
> [link](./src/LifecycleOrderTest.jsx)
1. constructor/getDerivedStateFromProps/shouldComponentUpdate/render/getSnapshotBeforeUpdate这些生命周期都用可能被调用多次，因此不能出现副作用（在函数式组件中已经做好了区分，除了前面5个外，都是副作用函数）

## 高阶组件HOC
> 测试文件：[src/hocTest.jsx](./src/hocTest.jsx)
1. 定义：是一个函数，其参数为组件，返回值也是一个组件
2. 作用：将多个组件的相同逻辑代码，抽象到HOC中，让组件更有结构化，更易于复用
3. 要求：
    - HOC是纯函数，没有副作用（不能破坏传入组件的特性，只通过组合形成新组件）

## es6装饰器
> 测试文件：[src/classDecorator.jsx](./src/classDecorator.jsx)
### 概念：
1. 作用：是一个**编译时执行**的函数，用来注释、修改类和类方法（不能用于函数，因为函数存在变量提升）
2. 分类：类装饰器、类方法装饰器

### react中如何使用装饰器
1. vscode中报错：可修改vscode配置文件中将tsconfig启动Experimental Decorators（将选项 Implicit Project Config: Experimental Decorators勾上）
2. create-react-app默认是不支持装饰器模式的，需要对项目做一些配置：
    - 在项目根目录中终端下使用npm run eject，这条命令主要是将我们的配置项做一个反向输出，暴露出隐藏的 webpack 配置项
    - 当用eject将webpack一些配置弹射出来以后，会看到根目录下的package.json文件下新增了很多文件，在babel对象处进行插件的配置，将@babel/plugin-proposal-decorators添加到plugins后
    - 注意：create-react-app 脚手架中已经安装了 @babel/plugin-proposal-decorators 插件（无需自己再次安装）
    ```
    "babel": {
        "presets": [
            "react-app"
        ],
        "plugins": [
            [
                "@babel/plugin-proposal-decorators",
                { "legacy": true }
            ]
        ]
    }
    ```

### 装饰器分类
#### 类装饰器
1. 参数：
    - target：类的构造函数
2. 传递额外的参数：装饰器在使用时是不能传入参数的，如果想要在使用装饰器是传入参数，必须在装饰器外面再封装一层函数
3. 返回值：装饰之后类的构造函数（一个新的构造函数）

#### 类方法装饰器
1. 参数：
    - target：
        - 装饰方法是实例方法时：类的原型对象
        - 装饰方法是静态方法时：类的构造函数
    - methodName：方法名称
    - descriptor：当前方法的属性描述符
2. 返回值：装饰之后的方法属性描述符

## render props
> [link](./src/RenderPropsTest.jsx)
1. 定义：是指在组件之间通过一个值为函数的prop共享代码的一种技术


## rc-form表单收集器
> 测试文件：[src/rcFormTest.jsx](./src/rcFormTest.jsx)
### rc-form库
1. 作用：用于收集表单数据，设置表单元素的值，获取表单元素的值，校验表单数据等

### 自定义rc-form
1. 定义高阶组件createForm，并为组件添加一个名为form的props，则组件中则可以通过this.props.form.xxx调用方法
2. form属性中分别定义四个函数：
    - getFieldDecorator：为表单组件注入field
    - setFieldsValue：为表单的fields设置值
    - getFieldsValue：获取表单的fields值
    - validateFields：校验表单数据

## 组件样式模块化
1. 样式文件命名为xx.module.css
2. 使用：
    ```
    import style from './xx.module.css'

    // ...
    <span className={style.title}>hello</span>
    ```

## 组件内部动态传入带内容的结构
1. children props
    ```js
    <A>
        <B>xxxx</B>
    </A>

    // A组件中，通过{this.props.children}调用子组件
    // 问题: A组件无法向B组件传递组件内部的数据
    ```
2. render props
    ```javascript
    <A render={(data) => <C data={data}></C>}></A>

    // A组件: {this.props.render(内部state数据)}
    // C组件: 读取A组件传入的数据显示 {this.props.data} 
    ```

## 错误边界
1. 作用：用来捕获后代组件错误，渲染出备用页面
2. 存在的问题：只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
3. 使用：
   ```javascript
    // getDerivedStateFromError配合componentDidCatch使用

    // 生命周期函数，一旦后台组件报错，就会触发
    static getDerivedStateFromError(error) {
        console.log(error);
        // 在render之前触发
        // 返回新的state
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, info) {
        // 统计页面的错误。发送请求发送到后台去
        console.log(error, info);
    }
   ```

# Hooks
## 概念
1. Hook是React 16.8.0版本增加的新特性/新语法
2. 可以在**函数组件**中使用 state 以及其他的 React 特性
## 常见hook
1. useState()
   - 作用：操作函数式组件的state
   - 语法：
   ```jsx
   const [xxx, setXxx] = React.useState(initValue)  
   /*
   useState()说明:
        参数: 第一次初始化指定的值
        返回值: 第1个为内部当前状态值, 第2个为更新状态值的函数
   setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
   */
   ```
2. useEffect()
   - 作用：可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
   - React中的副作用操作：
     - 发ajax请求数据获取
     - 设置订阅 / 启动定时器
     - 手动更改真实DOM
   - 语法：
   ```javascript
    useEffect(() => { 
        // 在此可以执行任何带副作用操作
        // ...

        // 在组件卸载前执行（做一些收尾工作, 比如清除定时器/取消订阅等）
        return () => { 
            // ...
        }
    }, [stateValue]) 
    // 如果为空，检测全部state
    // 如果为[], 不检测state（回调函数只会在第一次render()后执行）
    // 如果有值，检测指定值
   ```
   - 备注：可以把 useEffect Hook 看做如下三个函数的组合
     - componentDidMount()
     - componentDidUpdate()
     - componentWillUnmount() 
3. useRef()
   - 作用：可以在函数组件中存储/查找组件内的标签或任意其它数据
   - 语法: const refContainer = useRef()
   ```jsx
    const inp = useRef()

    <input type="text" ref={inp}/>

    // 使用
    inp.current.value
   ```
   - 备注：用法与React.createRef()一样

## 自定义hook

# 常用API
## React.cloneElement
```jsx
React.cloneElement(
  element,
  [config],
  [...children]
)

// 等同于
<element.type {...element.props} {...props}>{children}</element.type>
```
1. 作用：以element元素为模板，克隆并返回一个新的组件
2. 说明：   
   - config中包含新的config、key、ref，返回组件的props是新的props和原始props浅合并之后的结果
   - 如果children有值，将会覆盖原始组件的子元素

## React.forwardRef
> 测试文件：[src/ForwardRefTest.jsx](./src/ForwardRefTest.jsx)
1. 作用：会返回一个新的组件，并将接受到的ref属性转发到子组件中
2. 使用场景：
   - 转发refs到DOM组件
   - 在高阶组件中转发refs

## React.PureComponent 
> [link](./src/PureComponentTest.jsx)
1. 定义：与Component组件非常相似，不同点是它实现了shouldComponentUpdate()方法
2. 注意：
   - 只能在类组件中使用
   - PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
   - PureComponent只是进行state和props数据的浅比较(只是比较地址是否相同), 如果只是数据对象内部数据变了, 返回false 

## React.memo
1. 作用：通过记忆渲染结果来提高组件性能，即组件下次渲染时会直接复用最近一次渲染结果
2. 使用场景：当传入相同props时，会返回相同的渲染结果
3. 注意：
   - 仅检查props的变更，如果context、state的变化，仍会重新渲染
   - 只做props数据的浅层比较

# 组件的优化
## render渲染
1. 问题：
   - 只要执行setState(), 即使不改变状态数据, 组件也会重新render()
   - 只要当前组件重新render(), 就会自动重新render子组件（即使子组件中未使用到父组件中的状态，也会重新render）
2. 原因：Component中的shouldComponentUpdate()总是返回true
3. 解决：
   - 方法一：**重写shouldComponentUpdate()方法**
     - 比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
   - 方法二：**使用PureComponent**（项目中一般使用PureComponent来优化）
     - PureComponent只是进行state和props数据的浅比较，因此setState()时，不要直接修改state数据, 而是要产生新数据

## 组件懒加载
> 测试文件：[./src/lazyTest](./src/lazyTest)
1. React.lazy可以动态加载组件，可以减少bundle体积，提高首屏加载速度
2. 需配合suspense组件使用，用于指定加载指示器，在子组件尚未展示出来时使用


# 拓展
## 快捷键
1. 创建函数式组件：rfc
2. 创建class组件：rcc

## class中定义属性/方法
1. 属性：
    - 原型属性：class的prototype上定义
    - 实例属性：
        - constructor中定义
        - class中直接定义（上面的简写）
2. 方法：
    - 原型方法：class中直接定义
    - 实例方法：class中通过属性的形式定义方法
```
class Person {
    age = 12  // 实例属性
    constructor(name) {
        // 实例属性
        this.name = name
    }
    // 实例方法
    walk = () => {
        // ...
    }
    // 原型方法
    say() {
        // ...
    }
}
// 原型属性
Person.prototype.sex = '男'
```

## 纯函数
1. 定义：
    - 确定输入，会产生确定的输出
    - 不会产生副作用（如修改了输入值、全局变量、改变外部数据等）
2. 例子：
```
// 纯函数，不会修改原数组
let arr = ['a', 'b', 'c']
arr.slice(1, 2)

// 非纯函数，修改原数组
arr.splice(1, 2)
```

## 高阶函数
1. 条件（二者其一即可）：
    - 函数的参数是一个函数
    - 函数的返回值是一个函数
2. 常见高阶函数：Promise、setTimeout、arr.map() 
3. 函数柯里化：通过函数调用并返回一个函数，最终实现多次接受参数统一处理的形式
    ```
    function sum(a) {
        return (b) => {
            return a + b
        }
    }
    console.log(sum(2)(3))
    ```
## Fragment
1. 作用：可以不用必须有一个真实的DOM根标签了
2. 和`<></>`相同，但是Fragment可以添加key属性


# 面试题
## 数组遍历中的key
1. key的作用：在diff算法中作为虚拟DOM的唯一标识
2. 使用index作为key，可能导致的问题：
    - 对列表数据做一些破坏顺序的操作时（逆序增删等），会产生没有必要的DOM更新
    - 如果结构中包含输入性的DOM时（input/checkbox等），会一些造成界面的错误