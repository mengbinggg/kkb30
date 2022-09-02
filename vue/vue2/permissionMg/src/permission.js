/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-16 09:34:44
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-16 17:16:56
 * @Descripttion: 路由权限控制
 */
import router from "./router";
import store from "./store";
import { Message } from "element-ui";

// 白名单（未登录可访问）
const whiteList = ["/login"];

/**
 * 判断用户是否登录
 * 没有登录：
 *      在白名单，跳转
 *      不在白名单，跳转到登录页
 * 已经登录：
 *      访问登录页，跳转到首页；
 *      访问其他页，根据用户角色动态生成路由
 */
router.beforeEach(async (to, from, next) => {
    let hasToken = localStorage.getItem("token");
    if (hasToken) {
        // 已登录
        if (to.path == "/login") {
            next("/");
        } else {
            // 获取角色信息：存在则直接跳转；不存在则先获取可访问路由并动态添加，再跳转
            const hasRoles =
                store.getters.roles && store.getters.roles.length > 0;
            if (hasRoles) {
                next();
            } else {
                try {
                    // 先获取用户角色信息
                    const roles = await store.dispatch("user/getUserInfo");
                    // 再根据角色生成权限路由
                    const accessedRoutes = await store.dispatch(
                        "permission/generateRoutes",
                        roles
                    );

                    // 动态添加路由
                    accessedRoutes.forEach(route => {
                        router.addRoute(route);
                    });

                    // replace: true，不会向history中添加新的路由信息，直接替换当前路由
                    next({
                        ...to,
                        replace: true
                    });
                } catch (error) {
                    await store.dispatch("user/logout");
                    Message.error(error || "Has Error");
                    next(`/login?redirect=${to.path}`);
                }
            }
        }
    } else {
        // 未登录
        if (whiteList.includes(to.path)) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
        }
    }
});
