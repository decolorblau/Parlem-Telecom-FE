<template>
  <section class="home">
    <p class="title"><span class="text-primary">PARLEM</span> TEST TÈCNIC FRONTEND</p>
    <button
      type="button"
      variant="outlined"
      class="btn btn-primary text-white"
      @click="redirectToClients()"
    >
      COMENÇAR A EXPLORAR
    </button>
    <div class="position-absolute footer d-flex flex-column">
      <p class="h6 text-muted">Made by</p>
      <p>
        Clàudia Font Marques |
        <a
          class="text-decoration-none"
          href="https://github.com/decolorblau/Parlem-Telecom-FE"
          target="_blanck"
          >deColorBlau</a
        >
      </p>
    </div>
  </section>
</template>

<script>
import { useClientStore } from '../stores/ClientStore'

export default {
  name: 'NotFound',
  setup() {
    const clientStore = useClientStore()
    return { clientStore }
  },
  methods: {
    redirectToClients() {
      return this.clientStore.redirectToClientsList()
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 300;
}
.title {
  font-size: 60px;
  font-weight: 500;
}
.footer {
  bottom: 60px;
  .h6 {
    font-weight: 300;
  }
}
</style>
