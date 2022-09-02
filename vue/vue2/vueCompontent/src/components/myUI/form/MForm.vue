<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-09 08:58:27
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-09 10:19:47
 * @Descripttion: 表单
-->
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
/*
 *  MForm 表单组件
 * @Description: 实现数据的收集、校验工作
 * @property: { Object } model 表单数据信息
 * @property: { Object } rules 表单数据校验信息
 */
export default {
    name: 'mForm',
    provide() {
        return {
            form: this,
        }
    },
    props: {
        model: {
            type: Object,
            required: true,
        },
        rules: {
            type: Object,
        },
    },
    methods: {
        validate(fn) {
            let validates = this.$children
                .filter((element) => {
                    return element.props
                })
                .map((element) => {
                    return element.validate()
                })
            Promise.all(validates).then(
                () => {
                    fn && fn()
                },
                (err) => {
                    console.log(err)
                }
            )
        },
    },
}
</script>

<style scoped></style>
