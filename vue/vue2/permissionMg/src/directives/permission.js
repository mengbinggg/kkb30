/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-16 17:24:33
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-16 17:50:37
 * @Descripttion:
 */
import store from "@/store";

export default {
    inserted(el, binding) {
        let { value } = binding;
        let userRoles = store.getters && store.getters.roles;

        if (value && value instanceof Array && value.length > 0) {
            // 判断用户角色中是否有按钮要求的角色
            const hasPermission = userRoles.some(role => {
                return value.includes(role);
            });

            // 如果没有权限则删除当前dom
            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        } else {
            throw new Error(
                `需要指定按钮要求角色数组，如v-permission="['admin','editor']"`
            );
        }
    }
};
