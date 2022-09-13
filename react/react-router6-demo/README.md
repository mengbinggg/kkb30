# React Router 6 快速上手

## 1. 概述
1. React Router 以三个不同的包发布到 npm 上，它们分别为：
   - react-router: 路由的核心库，提供了很多的组件、钩子
   - **react-router-dom**: 包含react-router所有内容，并添加一些专门用于 DOM 的组件，例如 `<BrowserRouter>`等
   - react-router-native: 包括react-router所有内容，并添加一些专门用于ReactNative的API，例如:`<NativeRouter>`等。
2. 与React Router 5.x 版本相比，改变了什么？
   - 内置组件的变化：移除`<Switch/>` ，新增 `<Routes/>`等
   - 语法的变化：`component={About}` 变为 `element={<About/>}`等
   - 新增多个hook：`useParams`、`useNavigate`、`useMatch`等。
   - **官方明确推荐函数式组件了！！！**

## 2. Component

### `<BrowserRouter>`
1. 作用：用于包裹整个应用

### `<HashRouter>`
1. 作用：与`<BrowserRouter>`一样，但`<HashRouter>`修改的是地址栏的hash值
2. 备注：6.x版本中`<HashRouter>`、`<BrowserRouter> ` 的用法与 5.x 相同。

### `<Routes/> 与 <Route/>`
1. `<Routes/>`
   - v6版本中移出了先前的`<Switch>`，引入了新的替代者：`<Routes>`
   - `<Routes>` 和 `<Route>`要配合使用，且必须要用`<Routes>`包裹`<Route>`
   - 当URL发生变化时，`<Routes> `都会查看其所有子` <Route>` 元素以找到最佳匹配并呈现组件
   - 
2. `<Route/>`
   - `<Route>` 相当于一个 if 语句，如果其路径与当前 URL 匹配，则呈现其对应的组件
   - `<Route caseSensitive>` 属性用于指定：匹配时是否区分大小写（默认为 false）
   - `<Route>` 也可以嵌套使用，且可配合`useRoutes()`配置 “路由表” ，但需要通过 `<Outlet>` 组件来渲染其子路由
3. 示例代码：
   ```jsx
    <Routes>
        <Route path="/login" element={<Login />}></Route>

        // 定义嵌套路由
        <Route path="home" element={<Home />}>
            <Route path="test1" element={<Test/>}></Route>
            <Route path="test2" element={<Test2/>}></Route>
        </Route>

        // Route也可以不写element属性, 这时就是用于展示嵌套的路由, 所对应的路径是/users/xxx
        <Route path="users">
            <Route path="xxx" element={<Demo />} />
        </Route>
    </Routes>
   ```

### `<Link> 与 <NavLink>`
1. 作用：修改URL，且不发送网络请求（路由链接）
2. 注意：`<NavLink>`与`<Link>`组件类似，且可实现导航的“高亮”效果
3. 示例代码：
   ```jsx
    // 自定义active样式（NavLink默认类名是active）
    <NavLink
        to="login"
        className={({ isActive }) => {
            return isActive ? 'base one' : 'base'
        }}
    >login</NavLink>

    // 默认情况下，当Home的子组件匹配成功，Home的导航也会高亮
    // 当NavLink上添加了end属性后，若Home的子组件匹配成功，则Home的导航没有高亮效果
    <NavLink to="home" end >home</NavLink>
   ```

### `<Navigate>`
1. 作用：只要`<Navigate>`组件被渲染，就会修改路径，切换视图
2. 备注：`replace`属性用于控制跳转模式（push 或 replace，默认是push）

### `<Outlet>`
1. 作用：当`<Route>`产生嵌套时，渲染其对应的后续子路由


## 3. Hooks
### useRoutes()
1. 作用：根据路由表，动态创建`<Routes>`和`<Route>`。

### useNavigate()
1. 作用：返回一个函数用来实现编程式导航。
2. 示例代码：
   ```jsx
    //第一种使用方式：指定具体的路径
    navigate('/login', {
        replace: false,
        state: {a:1, b:2}
    }) 

    //第二种使用方式：传入数值进行前进或后退，类似于5.x中的 history.go()方法
    navigate(-1)
   ```

### useParams()
1. 作用：回当前匹配路由的`params`参数，类似于5.x中的`match.params`。

### useSearchParams()
1. 作用：用于读取和修改当前位置的 URL 中的查询字符串
2. 返回一个包含两个值的数组，内容分别为：当前的search参数、更新search的函数
   ```jsx
    const [search,setSearch] = useSearchParams()
    const id = search.get('id')
   ```

### useLocation()
1. 作用：获取当前 location 信息，对标5.x中的路由组件的`location`属性
2. 示例代码：
   ```jsx
    import React from 'react'
    import {useLocation} from 'react-router-dom'

    export default function Detail() {
        const x = useLocation()
        // x就是location对象: 
        /* 
        {
            hash: "",
            key: "ah9nv6sz",
            pathname: "/login",
            search: "?name=zs&age=18",
            state: {a: 1, b: 2}
        }
        */
        return (
            // ...
        )
    }
   ```

### useMatch()
1. 作用：返回当前匹配信息，对标5.x中的路由组件的`match`属性。
2. 示例代码：
   ```jsx
    <Route path="/login/:page/:pageSize" element={<Login />} />

    <NavLink to="/login/1/10">登录</NavLink>

    export default function Login() {
        const match = useMatch('/login/:x/:y')

        // match对象内容如下：
        /*
        {
            params: {x: '1', y: '10'}
            pathname: "/LoGin/1/10"  
            pathnameBase: "/LoGin/1/10"
            pattern: {
                path: '/login/:x/:y', 
                caseSensitive: false, 
                end: false
            }
        }
        */

        return (
            // ...
        )
    }
   ```

### useInRouterContext()
1. 作用：如果组件在 `<Router>` 的上下文中呈现，则 `useInRouterContext` 钩子返回 true，否则返回 false

### useNavigationType()
1. 作用：返回当前的导航类型（用户是如何来到当前页面的）
2. 返回值：`POP`、`PUSH`、`REPLACE`
3. 备注：`POP`是指在浏览器中直接打开了这个路由组件（刷新页面）

### useOutlet()
1. 作用：用来呈现当前组件中渲染的嵌套路由。
2. 示例代码：
   ```jsx
    // 如果嵌套路由没有挂载,则result为null
    // 如果嵌套路由已经挂载,则展示嵌套的路由对象
    const result = useOutlet()
   ```

### useResolvedPath()
1. 作用：给定一个 URL值，解析其中的：path、search、hash值。

