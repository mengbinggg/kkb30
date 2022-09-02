<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-17 16:52:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-18 14:53:41
 * @Descripttion: 
-->
<template>
    <div>
        <h1>{{ msg }}，这是首页</h1>
        {{ $store.state.counter }}
        {{ $store.getters.doubleCounter }}
        <button @click="$store.dispatch('addAsync', 1)">增加</button>
        <button @click="$store.dispatch('addAsync', -1)">减少</button>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            msg: '你好',
        }
    },
    asyncData({ store, route }) {
        return store.dispatch('addAsync', -1)
    },
}
</script>

<style scoped></style>
