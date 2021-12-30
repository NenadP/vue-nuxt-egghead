<template>
  <div>
    <app-navigation></app-navigation>
    <nuxt></nuxt>
  </div>
</template>
<script>
import AppNavigation from '~/components/AppNavigation'

export default {
  name: 'DefaultLayout',
  components: { AppNavigation }
}
</script>
