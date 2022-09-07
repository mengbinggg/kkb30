/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-07 11:28:01
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-07 14:26:55
 * @Descripttion:
 */
import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  state = {
    todos: [],
  }

  addTodo = (item) => {
    this.setState({
      todos: [item, ...this.state.todos],
    })
  }

  deleteTodo = (id) => {
    let list = this.state.todos.filter((item) => item.id !== id)
    this.setState({
      todos: list,
    })
  }

  updateTodo = (id, checked) => {
    let list = this.state.todos.map((item) => {
      if (item.id === id) {
        item.done = checked
      }
      return item
    })
    this.setState({
      todos: list,
    })
  }

  checkAllTodo = (checked) => {
    let list = this.state.todos.map((item) => {
      return {
        ...item,
        done: checked,
      }
    })
    this.setState({
      todos: list,
    })
  }

  clearAllDone = () => {
    let list = this.state.todos.filter((item) => !item.done)
    this.setState({
      todos: list,
    })
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={this.state.todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    )
  }
}
