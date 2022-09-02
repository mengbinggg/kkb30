/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-26 14:27:15
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-26 15:03:03
 * @Descripttion:
 */
module.exports = function (resouce) {
  let res = resouce.replace('hello', '你好')

  // 同步操作（第一个参数：错误，第二个参数：操作后的文件）
  this.callback(null, res)
}
