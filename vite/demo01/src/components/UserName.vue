<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-01-06 14:48:52
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-01-06 15:24:04
 * @Descripttion: 
-->
<script setup>
defineProps({
  firstName: String,
  lastName: String
})

defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>