/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-17 15:07:20
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-17 15:55:33
 * @Descripttion:
 */
import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("测试About.vue", () => {
    it("测试页面是否渲染props", () => {
        const name = "小甜甜";
        const wrapper = shallowMount(About, {
            propsData: { name }
        });
        expect(wrapper.text()).toMatch(name);
    });
});
