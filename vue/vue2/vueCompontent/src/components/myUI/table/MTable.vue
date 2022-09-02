<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-12 14:33:16
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-12 18:02:34
 * @Descripttion: 表格
-->
<template>
    <div>
        <table border>
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column.prop">{{ column.label }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in rows" :key="row.id">
                    <td v-for="(val, key) in row" :key="key">{{ val }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'mTable',
    props: {
        data: {
            type: Array,
            require: true,
        },
    },
    computed: {
        columns() {
            return this.$slots.default
                .filter((item) => {
                    return item.data != undefined
                })
                .map((item) => item.data.attrs)
        },
        rows() {
            return this.data.map((item) => {
                let res = {}
                this.columns.forEach((c) => {
                    if (item[c.prop]) res[c.prop] = item[c.prop]
                })
                return res
            })
        },
    },
}
</script>
<style lang="less"></style>
