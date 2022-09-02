/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-17 11:54:21
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-17 14:23:20
 * @Descripttion:
 */
import axios from "axios";
import { Message, MessageBox } from "element-ui";
import store from "@/store";

const request = axios.create({
    baseURL: "https://mock.presstime.cn/mock/62fc77178ed5de0061a1a7e7/api",
    timeout: 3000
});

request.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers["authorization"] = "Bearer " + store.getters.token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

request.interceptors.response.use(
    res => {
        const data = res.data;

        // 自定义错误格式
        if (data.code != 1) {
            Message({
                message: data.msg || "error",
                type: "error",
                duration: 5000
            });
            if (data.code == 100) {
                MessageBox.confirm("登录状态异常，请重新登录！", "提示", {
                    confirmButtonText: "重新登录",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    store.dispatch("user/logout").then(() => {
                        location.reload();
                    });
                });
            }
            return Promise.reject(data.msg || "error");
        } else {
            return data;
        }
    },
    err => {
        Message({
            message: err.msg,
            type: "error",
            duration: 5000
        });
        return Promise.reject(err);
    }
);

export default request;
