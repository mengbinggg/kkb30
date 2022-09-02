<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 11:28:22
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-17 15:44:19
 * @Descripttion: 
-->
<template>
    <div>{{ msg }} - {{ name }}</div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            msg: "about"
        };
    }
};
</script>

<style scoped></style>
