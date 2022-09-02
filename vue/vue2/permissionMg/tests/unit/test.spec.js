/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-17 15:31:55
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-17 15:36:07
 * @Descripttion:
 */
function add(num1, num2) {
    return num1 + num2;
}

describe("测试add()", () => {
    it("两个数相加", () => {
        expect(add(2, 3)).toBe(5);
    });
});
