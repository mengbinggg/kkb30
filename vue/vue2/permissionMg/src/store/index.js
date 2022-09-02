/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 17:49:03
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-16 15:00:23
 * @Descripttion:
 */
import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import permission from "./modules/permission";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    permission
  },
  getters: {
    roles: state => state.user.roles,
    token: state => state.user.token,
    routes: state => state.permission.routes
  }
});
