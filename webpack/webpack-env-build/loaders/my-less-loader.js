/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-26 15:04:58
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-26 15:23:09
 * @Descripttion:
 */
const less = require('less')
module.exports = function (source) {
  less.render(source, (err, res) => {
    this.callback(err, res.css)
  })
}
