/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 10:26:57
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-16 16:55:08
 * @Descripttion: 路由入口
 */
import Vue from "vue";
import Router from "vue-router";
import { constRoutes } from "./routes";

// 处理报错：Navigation cancelled from "/login" to "/home" with a new navigation.
const originalPush = Router.prototype.push;
Router.prototype.push = function(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject);
    }
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

export default new Router({
    routes: constRoutes
});
