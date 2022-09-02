<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-09 08:58:28
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-09 10:15:19
 * @Descripttion: 输入框
-->
<template>
    <div>
        <input :value="value" @input="onInput" v-bind="$attrs" />
    </div>
</template>

<script>
/*
 *  MInput 输入框
 * @Description: 实现了输入框的双向数据绑定v-model
 * @property: { String } value 输入框的值
 * @event: { Function } input input事件
 */
export default {
    name: 'mInput',
    inheritAttrs: false,
    props: {
        value: {
            type: String,
        },
    },
    methods: {
        onInput($event) {
            this.$emit('input', $event.target.value)
            // 同时实现对数据的校验
            this.$parent.$emit('validate')
        },
    },
}
</script>

<style scoped></style>
