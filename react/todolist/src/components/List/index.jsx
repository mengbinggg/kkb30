/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-07 11:40:00
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-07 14:26:26
 * @Descripttion:
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        })}
      </ul>
    )
  }
}
