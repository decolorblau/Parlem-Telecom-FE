<template>
  <NavbarParlem v-if="hasNavbar" />
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import NavbarParlem from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    RouterView,
    NavbarParlem
  },
  computed: {
    hasNavbar() {
      return this.$route.name === 'clients' || this.$route.name === 'detail'
    }
  }
}
</script>
<style>
.navbar {
  height: 80px;
}
</style>
