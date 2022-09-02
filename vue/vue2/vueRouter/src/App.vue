<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-02 19:33:44
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-04 10:02:21
 * @Descripttion: 主页面
-->
<template>
    <div class="box">
        <h2>{{ msg }}</h2>
        <hr />

        <router-link to="/">首页</router-link> |
        <router-link to="/list">列表</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: '你好呀',
        }
    },
}
</script>
<style scoped>
.box {
    height: 500px;
    background-color: antiquewhite;
}
</style>
