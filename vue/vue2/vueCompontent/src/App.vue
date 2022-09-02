<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-02 19:33:44
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-12 14:53:58
 * @Descripttion: 主页面
-->
<template>
    <div>
        <test3 msg="你好"></test3>
        <hr />

        <button @click="handleOpen">打开</button>
        <hr />

        <m-form :model="formData" :rules="formRules" ref="form">
            <m-form-item label="用户名" props="username">
                <m-input v-model="formData.username" placeholder="请输入用户名"></m-input>
            </m-form-item>
            <m-form-item label="密码" props="password">
                <m-input
                    v-model="formData.password"
                    placeholder="请输入密码"
                    type="password"
                ></m-input>
            </m-form-item>
            <button @click="saveData">保存</button>
        </m-form>
        <hr />

        <m-table :data="tableData">
            <m-table-column prop="name" label="姓名"></m-table-column>
            <m-table-column prop="age" label="年龄" sortable></m-table-column>
            <m-table-column prop="sex" label="性别"></m-table-column>
            <m-table-column prop="operator" label="操作">
                <template v-solt:default="scope">
                    <a href="JavaScript:void;" @click="handleDel(scope.row)">删除</a>
                </template>
            </m-table-column>
        </m-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'ssa',
            formData: {
                username: '',
                password: '',
            },
            formRules: {
                username: [{ required: true, message: '请输入用户名' }],
                password: [{ required: true, message: '请输入密码' }],
            },
            tableData: [
                { id: 1, name: '小红', age: 23, sex: '女' },
                { id: 2, name: 'Tom', age: 21, sex: '男' },
                { id: 3, name: 'Jack', age: 25, sex: '男' },
                { id: 4, name: 'Rose', age: 28, sex: '女' },
            ],
        }
    },
    methods: {
        handleOpen() {
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
        },
        saveData() {
            this.$refs.form.validate(() => {
                console.log('验证通过')
            })
        },
        handleDel({ id }) {
            this.tableData = this.tableData.filter((item = item.id !== id))
        },
    },
}
</script>
<style scoped></style>
