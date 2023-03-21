<script setup>
import { ref, onMounted } from 'vue'
import Child from '../components/Child.vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

onMounted(() => {
  input.value.focus()
  console.log(input.value)
});
const handle = () => {
  console.log(1111);
}
</script>

<template>
  <input ref="input" />
  <Child a="你好" b="ya" @cha="handle"></Child>
</template>
