<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-02-16 22:03:54
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-02-16 22:58:54
 * @Descripttion: 
-->
<script setup>
import { useAttrs } from 'vue'

console.log(useAttrs());

</script>

<template>
    <div class="greetings">
        <h3 v-bind="$attrs">
            You’ve successfully created a project with
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
        </h3>
    </div>
</template>