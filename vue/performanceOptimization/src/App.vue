<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-11-22 10:56:33
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-22 12:45:40
 * @Descripttion: 
-->
<template>
    <el-container>
        <el-aside width="200px">
            <el-menu class="el-menu-vertical-demo" default-active="/" :router="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="/">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/list">
                    <i class="el-icon-document"></i>
                    <span slot="title">列表</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            msg: 'this is vue page'
        }
    }
}
</script>
<style scoped>
.el-container,
.el-menu-vertical-demo {
    height: 100%;
}
</style>