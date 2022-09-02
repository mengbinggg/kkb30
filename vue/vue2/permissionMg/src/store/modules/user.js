/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-15 17:49:29
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-17 14:37:41
 * @Descripttion: 用户登录相关的数据
 */
import { login, getUserInfo } from "@/api/user";
const state = {
    token: localStorage.getItem("token"),
    roles: []
};

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setRoles(state, roles) {
        state.roles = roles;
    }
};

const actions = {
    login({ commit }, userInfo) {
        let { username } = userInfo;
        return login(userInfo)
            .then(() => {
                commit("setToken", username);
                localStorage.setItem("token", username);
            })
            .catch(() => {
                Promise.reject("用户名/密码不正确");
            });

        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         if (
        //             (username == "mengbing" && password == "123") ||
        //             (username == "tom" && password == "123")
        //         ) {
        //             commit("setToken", username);
        //             localStorage.setItem("token", username);
        //             resolve();
        //         } else {
        //             reject("用户名/密码不正确");
        //         }
        //     }, 1000);
        // });
    },
    logout({ commit }) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit("setToken", null);
                commit("setRoles", null);
                localStorage.removeItem("token");
                resolve();
            }, 1000);
        });
    },
    getUserInfo({ commit, state }) {
        return getUserInfo()
            .then(res => {
                let roles = res.data;
                commit("setRoles", roles);
                return roles;
            })
            .catch(err => {
                Promise.reject(err);
            });

        // return new Promise(resolve => {
        //     setTimeout(() => {
        //         let roles =
        //             state.token === "mengbing" ? ["admin"] : ["visitor"];
        //         commit("setRoles", roles);
        //         resolve(roles);
        //     }, 1000);
        // });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
