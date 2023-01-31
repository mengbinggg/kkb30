<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-01-06 11:23:36
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-01-09 15:27:43
 * @Descripttion: 
-->

<template>
  {{ msg }}

<button @click="change">change</button>
</template>

<script setup lang="ts">
import { ref, reactive,triggerRef, shallowRef, customRef,watchEffect, readonly, toRef } from 'vue'
let msg = {
  name: 'zhangsna',
  age: 21
}
let name = ref(msg.name)
const change=()=>{
  // toRef(msg)
  name.value = 'ssss'
  console.log(msg)
}
</script>
<style scoped>

</style>
