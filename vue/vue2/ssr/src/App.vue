<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-17 16:52:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-17 18:13:06
 * @Descripttion: 
-->
<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style></style>
