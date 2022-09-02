<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 11:28:22
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-16 17:42:19
 * @Descripttion: 
-->
<template>
    <div>
        <div>
            <span>你好！{{ $store.getters.token }}</span>
            <el-button @click="logout" style="float: right;">退出</el-button>
        </div>

        <div style="margin-top: 20px;">
            <el-button v-permission="['admin', 'visitor']">
                全部人员可见
            </el-button>
            <el-button v-permission="['admin']">管理员可见</el-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch("user/logout").then(() => {
                this.$router.push({
                    path: "/login"
                });
            });
        }
    }
};
</script>

<style scoped></style>
