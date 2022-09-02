/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-26 14:27:15
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-26 14:49:58
 * @Descripttion:
 */
module.exports = function (resouce) {
  let res = resouce.replace('world', this.query.name)

  // 异步操作
  const callback = this.async()
  setTimeout(() => {
    callback(null, res)
  }, 3000)
}
