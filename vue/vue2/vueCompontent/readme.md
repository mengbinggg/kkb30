<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-02 18:11:19
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-15 10:15:20
 * @Descripttion: 项目说明
-->
#### vue注册组件
###### 函数式组件functional 
1. 特点：
    - 无状态（没有响应式数据）、无实例（没有this上下文）
    - 只是一个函数，所以渲染开销低
2. 使用场景：
    - 只用于页面展示的组件
    - 根据外部数据的来渲染不同组件的情形
    - 作为高阶组件使用（接受一个组件作为参数，返回一个被包装过后的组件）

###### 函数式调用组件
1. 目标：通过js语句来展示一个message对话框，对话框可手动关闭，也可自动关闭
    ```
    this.$message.warning(
        {
            title: '提示框',
            content: '你好呀，我是Tom',
        },
        5000,
        () => {
            console.log('success！！！！')
        }
    )
    ```
2. 步骤：
    - 新建message/message.vue文件，实现一个对话框组件
    - 新建message/index.js文件，并以插件形式导出
        - 引入message.vue组件，并注册为全局组件message
        - 在Vue的原型上定义$message对象，对象包含info、warning、success、danger、show、hide方法
        - 实现show方法
            - 通过Vue.extend()，生成一个包含message组件的Vue子构造函数
            - 实例化该函数，并将其挂载到body标签上
        - 实现hide方法
            - 将组件从body标签上移除
        - 基于show()实现info、warning、success、danger方法
    - 在main.js中注册插件

###### 自定义form表单
1. 目标：实现表单元素的数据收集和数据校验
2. 步骤：
    - 新建form/MForm.vue文件，实现form组件
        - 接收model（表单数据）、rules（校验规则）两个数据
        - 定义validate方法，遍历调用form中的子元素（formItem）的数据校验方法
        - 将自身实例对象provide到子孙元素中
    - 新建form/MFormIten.vue文件，实现formItem组件
        - 接收props（可选，没有该属性则不进行数据校验）、label两个数据
        - 注入父元素提供的实例对象
        - 通过async-validator插件实现validate方法，并在组件挂载之后绑定该事件
    - 新建form/MInput.vue文件，实现input组件
        - 实现组件的v-model指令
        - 在input事件中触发父组件的validate方法

###### 自定义table表格
1. 目标：
    - 表格数据的展示
    - 自定义表格列渲染模板
    - 可对表格列排序
2. 步骤：
    - 新建table/MTable.vue文件，实现table组件
        - 接收data（表格数据）参数
        - 生成计算属性columns列信息、rows行信息
    - 新建table/MTableColumn.vue文件，实现tableColumn组件
        - 接收props（可选，没有该属性则不进行数据校验）、label两个数据