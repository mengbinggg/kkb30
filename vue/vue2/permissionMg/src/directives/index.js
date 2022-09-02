/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-16 17:27:20
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-16 17:39:11
 * @Descripttion: 自定义指令入口
 */
import permission from "./permission";

const directives = {
    permission
};

export default function(Vue) {
    Object.keys(directives).forEach(key => {
        Vue.directive(key, directives[key]);
    });
}
