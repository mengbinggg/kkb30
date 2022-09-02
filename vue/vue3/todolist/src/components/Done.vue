<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-24 14:49:05
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-24 17:51:55
 * @Descripttion: 
-->
<template>
  <ul class="list-group mt-2">
    <li class="list-group-item" v-for="(item, index) in list" :key="index">
      {{ item }}
    </li>
  </ul>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import store from '../store'

export default defineComponent({
  setup() {
    return reactive({
      list: computed(() => store.state.done),
    })
  },
})
</script>
<style lang="less"></style>
