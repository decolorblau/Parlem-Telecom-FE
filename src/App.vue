<template>
  <nav class="navbar p-0">
    <img :src="logo" alt="logo parlem telecom" height="80" />
  </nav>
  <RouterView />
</template>

<script>
import LogoParlem from './assets/logo-parlem.png'
import { RouterView } from 'vue-router'

export default {
  name: 'ClientsView',
  components: {
    RouterView
  },
  computed: {
    logo() {
      return LogoParlem
    }
  }
}
</script>
<style>
.navbar {
  height: 80px;
}
</style>
