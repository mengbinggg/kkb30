<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-01-29 11:25:09
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2023-01-29 11:39:21
 * @Descripttion: 
-->
<template>
    <i class="icon">
        <!-- aria-hidden, 帮助残障人士阅读(设备读取内容时会跳过这个标签以免混淆) -->
        <svg aria-hidden="true" :width="size" :height="size" :fill="fillColor">
            <use :xlink:href="iconName"></use>
        </svg>
    </i>
</template>

<script lang="ts">
import { PropType, toRefs } from 'vue';

export default {
    props: {
        size: {
            type: Number as PropType<number>,
            default: 14
        },
        fillColor: {
            type: String as PropType<string>,
            default: '#000'
        },
        iconName: {
            type: String as PropType<string>,
            required: true
        }
    },

    setup(props: any) {
        const { size, fillColor, iconName: _iconName } = toRefs(props)
        const iconName = `#${_iconName.value}`

        return {
            size,
            fillColor,
            iconName
        }
    }
}
</script>