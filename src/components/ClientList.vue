<template>
  <section>
    <div class="d-flex mb-1 row px-2 px-lg-3">
      <p class="mb-0 d-none d-lg-block col-lg-4">Nom usuari</p>
      <p class="mb-0 d-none d-lg-block col-lg-3">Email</p>
      <p class="mb-0 d-none d-lg-block col-lg-3">Identificació</p>
      <p class="mb-0 d-none d-lg-block col-lg-2">Telèfon</p>
    </div>
    <div v-for="(client, index) of clients" :key="index" class="mb-1">
      {{ client }}
    </div>
  </section>
</template>

<script>
import { useClientStore } from '../stores/ClientStore'

export default {
  setup() {
    const clientStore = useClientStore()
    return { clientStore }
  },
  computed: {
    clients() {
      return this.clientStore.clients
    }
  },
  created() {
    this.getClients()
  },
  methods: {
    async getClients() {
      await this.clientStore.getClients()
    }
  }
}
</script>
