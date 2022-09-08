# react-router基本使用
### 常用组件
1. 路由连接：Link、NavLink
	```html
	<Link to="/xxxxx">Demo</Link>

	// NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
	<NavLink to='/home'>新闻</NavLink>
	```
2. 路由跳转：Route
	```html
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
	```html
	<Route exact path="/about" component={About}/>
	```

### 嵌套路由
1. 注册子路由时，要写上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的	

# 拓展
### 路由组件、一般组件
1. 用法不同：
    - 一般组件：<Demo/>
    - 路由组件：<Route path="/demo" component={Demo}/>
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
