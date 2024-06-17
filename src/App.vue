<script>
import { RouterView } from 'vue-router'

export default {
  name: 'app',
  components: {
    RouterView
  },
}
</script>

<template>
  <header></header>
  <main>
    <router-view v-slot="{ Component, route }">
      <component :is="Component" />
    </router-view>
  </main>
  <footer></footer>
</template>

<style scoped></style>
