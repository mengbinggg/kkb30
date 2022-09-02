/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-08-24 15:54:11
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-08-24 17:50:36
 * @Descripttion:
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [] as string[],
    done: [] as string[],
    delete: [] as string[],
  },
  mutations: {
    add(state, str) {
      state.todos.push(str)
    },
    checked(state, index) {
      let item = state.todos[index]
      state.todos.splice(index, 1)
      state.done.push(item)
    },
    delete(state, index) {
      let item = state.todos[index]
      state.todos.splice(index, 1)
      state.delete.push(item)
    },
  },
})
