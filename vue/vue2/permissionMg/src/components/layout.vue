<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 11:37:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-16 16:05:27
 * @Descripttion: 项目布局组件
-->
<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-container>
            <el-aside
                width="200px"
                style="background-color: rgb(238, 241, 246)"
            >
                <m-menu :menus="menus"></m-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        <el-footer
            style="border-top: 1px solid #eee; line-height: 60px; text-align: center;"
        >
            <router-link to="/about">关于我们</router-link>
        </el-footer>
    </el-container>
</template>
<script>
import mMenu from "./mMenu/index.vue";

export default {
    components: { mMenu },
    data() {
        return {
            menus: this.$store.getters.routes
        };
    }
};
</script>
<style></style>
