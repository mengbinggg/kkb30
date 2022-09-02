<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-04 14:11:57
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-04 17:42:13
 * @Descripttion: 
-->
<template>
    <div :class="['message', type]">
        <div class="message-wrap">
            <div class="header">
                <div class="title">{{ title }}</div>
                <span class="close" @click="handleClose">x</span>
            </div>
            <div class="content">
                {{ content }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'message',
    props: {
        title: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        type: {
            type: String,
            validator(val) {
                return ['info', 'success', 'warning', 'danger'].includes(val)
            },
        },
    },
    methods: {
        handleClose() {
            this.$message.hide.call(this.$message)
        },
    },
}
</script>
<style lang="less">
.message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    &-wrap {
        background-color: #fff;
        width: 450px;
        border-radius: 5px;
        overflow: hidden;
        .header {
            height: 55px;
            line-height: 55px;
            padding: 0 20px;
            border-bottom: 1px solid #ccc;
            position: relative;
            .title {
                font-size: 18px;
                font-weight: 600;
            }
            .close {
                position: absolute;
                top: 0;
                right: 20px;
                font-size: 18px;
                cursor: pointer;
            }
        }
        .content {
            padding: 30px;
            font-size: 16px;
        }
    }

    &.info {
        .header {
            background-color: #909399;
            color: #fff;
        }
    }
    &.success {
        .header {
            background-color: #67c23a;
            color: #fff;
        }
    }
    &.warning {
        .header {
            background-color: #e6a23c;
            color: #fff;
        }
    }
    &.danger {
        .header {
            background-color: #f56c6c;
            color: #fff;
        }
    }
}
</style>
