import axios from 'axios'

export const state = {
  counter: 0
}

export const mutations = {
  init (state, todos) {
    state.todos = todos
  },
  increment (state) {
    state.counter++
  },
  decrement (state) {
    state.counter--
  },
  add (state, todo) {
    state.todos.push(todo)
  },
  remove (state, todo) {
    state.todos = state.todos.filter(t => t.id !== todo.id)
  },
  toggle (state, todo) {
    state.todos = state.todos.map((t) => {
      if (t.id === todo.id) {
        return todo
      }
      return t
    })
  }
}
export const actions = {
  async add ({ commit }, task) {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: task,
      complete: false
    })
    commit('add', res.data)
  },
  async remove ({ commit }, todo) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
    commit('remove', todo)
  },
  async toggle ({ commit }, todo) {
    const res = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, { completed: !todo.completed })
    commit('toggle', res.data)
  }
}
