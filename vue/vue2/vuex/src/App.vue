<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-02 19:33:44
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-04 13:15:08
 * @Descripttion: 主页面
-->
<template>
    <div>
        <h1>hello world</h1>
        <hr />

        <h2>{{ $store.state.counter }}</h2>
        <h2>{{ $store.getters.doubleCounter }}</h2>
        <h2>{{ $store.getters.doubleCounter }}</h2>
        <button @click="$store.commit('add')">增加</button>
        <button @click="$store.commit('add', 2)">增加 + 2</button>
        <button @click="$store.dispatch('addAsync')">异步增加</button>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
}
</script>
<style scoped></style>
