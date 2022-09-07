/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-07 11:40:00
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-07 14:25:08
 * @Descripttion:
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  handleKeyUp = (event) => {
    const { keyCode, target } = event

    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('请输入内容')
      return
    }

    this.props.addTodo({
      id: nanoid(),
      name: target.value,
      done: false,
    })
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    )
  }
}
