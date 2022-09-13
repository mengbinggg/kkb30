# react-router 5基本使用
### 常用组件
1. 路由连接：Link、NavLink
	```jsx
	<Link to="/xxxxx">Demo</Link>

	// NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
	<NavLink to='/home'>新闻</NavLink>
	```
2. 路由跳转：Route
	```jsx
	<Route path='/xxxx' component={Demo}/>
	```
3. BrowserRouter/HashRouter
	- 用于定义路由模式
	- 必选将Link/Route组件包裹住
4. Switch
	- 渲染与该地址匹配的第一个子节点Route、Redirect
	- 可以提高路由匹配效率(单一匹配)
5. Redirect
	- 当所有路由都无法匹配时，跳转到Redirect指定的路由
	- 一般写在所有路由注册的最下方

### 路由的严格匹配
1. 默认使用的是模糊匹配（【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
2. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
	```jsx
	<Route exact path="/about" component={About}/>
	```

### 嵌套路由
1. 注册子路由时，要写上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的	


### 路由组件传参
1. params参数
	```jsx
	<!-- 路由链接(携带参数) -->
	<Link to='/demo/test/tom/18'}>详情</Link>
	<!-- 注册路由(声明接收) -->
	<Route path="/demo/test/:name/:age" component={Test}/>
	<!-- 接收参数：this.props.match.params -->
	```
2. search参数
	```jsx
	<!-- 路由链接(携带参数) -->
	<Link to='/demo/test?name=tom&age=18'}>详情</Link>
	<!-- 注册路由(无需声明，正常注册即可) -->
	<Route path="/demo/test" component={Test}/>
	<!-- 接收参数：this.props.location.search -->

	<!-- 备注：获取到的search是urlencoded编码字符串，需要借助querystring解析 -->
	```
3. state参数
	```jsx
	<!-- 路由链接(携带参数) -->
	<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
	<!-- 注册路由(无需声明，正常注册即可) -->
	<Route path="/demo/test" component={Test}/>
	<!-- 接收参数：this.props.location.state -->

	<!-- 备注：刷新也可以保留住参数 -->
	```

### 编程式路由导航
1. 借助this.prosp.history对象上的API对操作路由跳转、前进、后退
2. push/replace方法的第二个参数是state，当state传参时使用
	```js
	this.prosp.history.push()
	this.prosp.history.replace()
	this.prosp.history.goBack()
	this.prosp.history.goForward()
	this.prosp.history.go()
	```

### withRouter
1. 通过 withRouter 高阶组件访问 history 对象的属性和最近的 `<Route>` 的 match
2. 当路由渲染时， withRouter 会将已经更新的 match ， location 和 history 属性传递给被包裹的组件

### BrowserRouter与HashRouter的区别
1. 底层原理不一样：
	- BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
	- HashRouter使用的是URL的哈希值。
2. path表现形式不一样
	- BrowserRouter的路径中没有#，例如：localhost:3000/demo/test
	- HashRouter的路径包含#，例如：localhost:3000/#/demo/test
3. 刷新后对路由state参数的影响
	- BrowserRouter没有任何影响，因为state保存在history对象中。
	- HashRouter刷新后会导致路由state参数的丢失！！！
4. 备注：HashRouter可以用于解决一些路径错误相关的问题

### 路由懒加载
> 测试文件：[src/pages/Home/index.jsx](./src/pages/Home/index.jsx)
```jsx
// 1. 通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
const Login = lazy(()=>import('@/pages/Login'))

// 2. 通过`<Suspense>`指定在加载得到路由打包文件前显示一个自定义loading界面
<Suspense fallback={<h1>loading.....</h1>}>
	<Switch>
		<Route path="/xxx" component={Xxxx}/>
		<Redirect to="/login"/>
	</Switch>
</Suspense>
```

# 拓展
### 路由组件、一般组件
1. 用法不同：
    - 一般组件：`<Demo/>`
    - 路由组件：`<Route path="/demo" component={Demo}/>`
2. 存放位置不同：
    - 一般组件：components
    - 路由组件：pages
3. 接收到的props不同：
    - 一般组件：写组件标签时传递了什么，就能收到什么
    - 路由组件：接收到三个固定的属性
		- history:
			- go: ƒ go(n)
			- goBack: ƒ goBack()
			- goForward: ƒ goForward()
			- push: ƒ push(path, state)
			- replace: ƒ replace(path, state)
		- location:
			- pathname: "/about"
			- search: ""
			- state: undefined
		- match:
			- params: {}
			- path: "/about"
			- url: "/about"


### 解决多级路径刷新页面样式丢失的问题
1. public/index.html中引入样式时，将 ./ 换成 / （常用）
2. public/index.html中引入样式时，将 ./ 换成 %PUBLIC_URL% （常用）
3. 使用HashRouter
