<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 11:28:22
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-15 18:53:34
 * @Descripttion: 登录页
-->
<template>
  <div>
    <el-form :model="formData" class="form">
      <el-form-item label="用户名">
        <el-input
          v-model="formData.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="formData.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="form__btn">
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Message } from "element-ui";

export default {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("user/login", this.formData).then(
        () => {
          this.$router.push({
            path: this.$route.query.redirect || "/"
          });
        },
        err => {
          Message.error(err || "Has Error");
        }
      );
    }
  }
};
</script>

<style scoped>
.form {
  width: 300px;
  margin: 50px auto;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form__btn {
  text-align: right;
  padding-right: 20px;
}
</style>
