/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-12-05 14:02:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-12-05 15:30:12
 * @Descripttion: 
 */
import { rorate } from './index'

describe('测试数组旋转k步', () => { 
    it('测试正常数据', () => {
        let arr = [1, 2, 3, 4, 5, 6, 7]
        let k = 3
        let res = rorate(arr, k)

        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
    })
})