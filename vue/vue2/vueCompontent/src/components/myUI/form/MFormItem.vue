<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-09 08:58:28
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-09 10:10:01
 * @Descripttion: 表单项
-->
<template>
    <div class="formItem">
        <label class="formItem__label" v-if="label">{{ label + '：' }}</label>
        <slot></slot>
        <span class="formItem__errMsg" v-if="errMsg">{{ errMsg }}</span>
    </div>
</template>

<script>
/*
 *  MFormItem 表单项组件
 * @Description: 实现单项数据的校验
 * @property: { String } label 表单项的label值
 * @property: { String } props 表单项的props值，根据props是否存在，判断是否做数据校验
 */
import Schema from 'async-validator'
export default {
    name: 'mFormItem',
    inject: ['form'],
    props: {
        label: {
            type: String,
            default: '',
        },
        props: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            errMsg: '',
        }
    },
    mounted() {
        this.$on('validate', () => {
            this.validate()
        })
    },
    methods: {
        validate() {
            let value = this.form.model[this.props]
            let rules = this.form.rules[this.props]

            var validator = new Schema({ [this.props]: rules })
            return validator.validate({ [this.props]: value }, (err) => {
                if (err) {
                    this.errMsg = err[0].message
                } else {
                    this.errMsg = ''
                }
            })
        },
    },
}
</script>

<style scoped>
.formItem {
    display: flex;
    align-items: center;
}
.formItem__label {
    margin-right: 10px;
    font-size: 18px;
    color: #333333;
}
.formItem__errMsg {
    margin-left: 15px;
    color: #c00;
}
</style>
