/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-26 15:04:58
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-26 15:08:57
 * @Descripttion:
 */
module.exports = function (source) {
  let res = JSON.stringify(source)

  this.callback(null, res)
}
