/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-17 14:23:40
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-17 14:24:55
 * @Descripttion:
 */
import request from "@/utils/request";

function login(data) {
    return request.post("user/login", data);
}

function getUserInfo() {
    return request.get("user/getInfo");
}

export { login, getUserInfo };
