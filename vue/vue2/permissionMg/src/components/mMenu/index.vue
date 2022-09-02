<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 14:20:43
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-15 17:35:01
 * @Descripttion: 
-->
<template>
  <ul class="menus">
    <m-menu-item
      v-for="menu in menus"
      :menu="menu"
      :key="menu.path"
    ></m-menu-item>
  </ul>
</template>
<script>
import mMenuItem from "./mMenuItem.vue";
export default {
  name: "mMenu",
  components: { mMenuItem },
  props: {
    menus: {
      type: Array,
      require: true
    }
  }
};
</script>
<style scoped>
ul,
li {
  list-style: none;
}
</style>
