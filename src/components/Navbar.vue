<template>
  <nav class="navbar p-0 px-2 px-lg-4">
    <img :src="logo" alt="logo parlem telecom" height="80" />
    <button type="button" class="btn btn-outline-primary" @click="redirectToHome">Sortir</button>
  </nav>
</template>

<script>
import LogoParlem from '../assets/logo-parlem.png'
import { useClientStore } from '../stores/ClientStore'
export default {
  name: 'Navbar-parlem',
  computed: {
    logo() {
      return LogoParlem
    }
  },
  setup() {
    const clientStore = useClientStore()
    return { clientStore }
  },
  methods: {
    redirectToHome() {
      return this.clientStore.redirectToHome()
    }
  }
}
</script>

<style></style>
