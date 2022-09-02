/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-26 15:04:58
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-26 15:23:45
 * @Descripttion:
 */
module.exports = function (source) {
  return `
    const tag = document.createElement('style')
    tag.innerHTML = ${source}
    document.head.appendChild(tag)
  `
}
