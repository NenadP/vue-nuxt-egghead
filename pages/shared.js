import axios from 'axios'

export async function init ({ store, redirect, error }) {
  if (process.client) {
    return
  }

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    store.commit('init', response.data)
  } catch (err) {
    // redirect('/error')
    error({ statusCode: 500, message: 'Something went wrong: ' + err.message })
  }
}
