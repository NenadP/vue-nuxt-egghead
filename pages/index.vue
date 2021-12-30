<template>
  <div class="pa4">

    <form @submit.prevent="add(task)">
      <input v-model="task" type="text">
      <input type="submit" value="Add">
    </form>
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">
        Todos
      </h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" :key="todo.id" class="flex items-center ph3 pv3 bb b--light-silver">
          <span class="flex-auto" v-bind:class="{strike: todo.completed}"> {{ todo.id }} {{ todo.title }}</span>
          <button @click="toggle(todo)"><img src="https://microicon-clone.vercel.app/check" alt=""></button>
          <button @click="remove(todo)"><img src="https://microicon-clone.vercel.app/trash" alt=""></button>
        </li>
      </ul>
    </article>

    {{ counter }}
    <v-btn @click="increment">+</v-btn>
    <v-btn @click="decrement">-</v-btn>
  </div>
</template>

<script>

import { mapMutations, mapState, mapActions } from 'vuex'
import { init } from './shared'
export default {
  name: 'IndexPage',
  fetch: init,
  data () {
    return {
      task: 'something'
    }
  },
  computed: {
    ...mapState({
      counter: state => state.counter,
      todos: state => state.todos
    })
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    ...mapActions(['add', 'remove', 'toggle']),
    onSubmit (task) {
      console.log(task)
    }
  }
}
</script>
