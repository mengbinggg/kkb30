/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-07 11:40:00
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-07 14:26:14
 * @Descripttion:
 */
import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { mouse: false } //标识鼠标移入、移出

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  handleDelete = (id) => {
    if (window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li
        style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? 'block' : 'none' }}
        >
          删除
        </button>
      </li>
    )
  }
}
