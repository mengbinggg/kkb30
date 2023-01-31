<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-01-06 11:23:36
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-01-06 11:45:29
 * @Descripttion: 
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const emits = defineEmits(['changeMsg'])

const handleChange = () => {
  emits('changeMsg', 'hello')
}

const count = ref(11)
defineExpose({count})
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is {{ count }}</button>
  <button type="button" @click="handleChange">change msg</button>
</template>

<style scoped> 
</style>
