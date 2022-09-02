<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 10:26:57
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-17 16:35:45
 * @Descripttion: 项目说明
-->
#### 项目权限管理
###### 路由权限
1. 路由配置时，配置两个路由信息，分别为静态路由、权限路由（可从后台获取），最终router只返回静态路由
2. 用户页面访问时，先判断是否登录
    - 已登录：再判断访问页面是否是登录页
        - 是：跳转到首页
        - 不是：1. 获取用户角色信息；2. 获取当前角色可访问路由信息；3. 动态添加路由；4. 最后跳转页面
    - 未登录：再判断访问页面是否在白名单中
        - 在：直接跳转
        - 不在：跳转到login页面，同时将当前页面路径传入到路由参数的directive中

###### 按钮权限
1. 通过自定义指令实现
    - 获取指令value值（保存当前按钮哪些角色可操作）
    - 获取用户角色
    - 判断用户角色是否在当前按钮的可操作角色中，不在则删除当前按钮
    

#### menu组件
1. 目标：实现一个树形菜单，可多层循环
2. 步骤：
    - 新建mMenu/index.vue文件
        - 接受menus属性
        - 循环遍历menus数组每一项，生成mMenuItem组件
    - 新建mMenu/mMenuItem.vue文件
        - 接受menu、basePath属性
        - 判断是否存在children，从而决定是否渲染子组件，存在则调用自身组件

#### 项目中使用svg图标
1. 步骤
    - 在iconfont中下载图标的svg文件（复制），放入到icons/svg目录下
    - 新建svgIcon.vue组件，接收icon属性
    - 新建icons/index.js文件
        - 自动引入icons/svg目录下所有svg文件
        - 注册全局svgIcon组件

#### 数据mock
1. 配置axios（utils/request.js）
    - 导入axios
    ```
    npm i axios -S
    ```
    - 配置axios全局设置：创建axios实例，设置全局请求、响应拦截器
        - 请求拦截器：判断token是否存在，存在则添加到请求header中
        - 响应拦截器：对响应数据做统一处理，判断状态码状态（和后端约定，如：1请求成功，100登录过期等）
2. 在easy-mock中创建项目，并配置接口信息
3. 新建接口调用文件api/user.js：导入axios实例，再请求接口

#### 单元测试jest
1. 在已有项目中添加jest
```
vue add @vue/unit-jest
```
2. 执行命令：npm run test:unit
3. 查看项目测试用例覆盖率：
```
// jest.config.js中添加
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,vue}"]
};
```