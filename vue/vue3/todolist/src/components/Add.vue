<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-24 14:49:05
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-24 17:49:55
 * @Descripttion: 
-->
<template>
  <div class="form-group">
    <label>添加待办事项</label>
    <input type="email" class="form-control mt-2 mb-2" v-model="inp" @keydown.enter="handleAdd" />
    <small class="form-text text-muted">回车即可添加</small>
  </div>

  <ul class="list-group mt-4">
    <li
      class="list-group-item d-flex flex-row align-items-center justify-content-between"
      v-for="(item, index) in list"
      :key="item + '-' + index"
    >
      <div>
        <input class="form-check-input" type="checkbox" @change="handleChecked(index)" />
        <span style="margin-left: 10px">{{ item }}</span>
      </div>
      <button type="button" class="btn btn-danger" @click="handleDelete(index)">删除</button>
    </li>
  </ul>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, Ref, ref } from 'vue'
import store from '../store'

export default defineComponent({
  setup() {
    const inp: Ref<string> = ref(null)

    const handleAdd = () => {
      if (inp.value.trim() == '') return
      store.commit('add', inp.value)
      inp.value = ''
    }

    const handleDelete = (index) => {
      store.commit('delete', index)
    }

    const handleChecked = (index) => {
      store.commit('checked', index)
    }

    return reactive({
      inp,
      list: computed(() => store.state.todos),
      handleAdd,
      handleDelete,
      handleChecked,
    })
  },
})
</script>
<style lang="less"></style>
