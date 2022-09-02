<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 17:09:23
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-16 16:05:42
 * @Descripttion: 
-->
<template>
    <svg class="svg-icon">
        <use :xlink:href="'#icon-' + icon"></use>
    </svg>
</template>
<script>
export default {
    props: {
        icon: {
            type: String,
            require: true
        }
    }
};
</script>
<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
