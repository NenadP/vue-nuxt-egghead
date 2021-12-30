<template>
  <div class="pa4">
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">
        Completed Todos
      </h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" :key="todo.id" class="flex items-center ph3 pv3 bb b--light-silver">
          <span class="flex-auto"> {{ todo.id }} {{ todo.title }}</span>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { init } from './shared'

export default {
  name: 'IndexPage',
  fetch: init,
  computed: {
    ...mapState({
      todos: state => state.todos.filter(todo => todo.completed)
    })
  }
}
</script>
