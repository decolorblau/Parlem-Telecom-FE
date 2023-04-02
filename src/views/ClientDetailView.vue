<template>
  <div class="p-4 p-lg-5 fullPage">
    <button class="btn btn-link text-decoration-none" @click="goToClients">
      &lt; Tornar al llistat de clients
    </button>
    {{ client }}
  </div>
</template>

<script>
import { useClientStore } from '../stores/ClientStore'

export default {
  name: 'ClientDetailView',
  setup() {
    const clientStore = useClientStore()
    return { clientStore }
  },

  computed: {
    id() {
      return this.$route.params.id
    },
    client() {
      return this.clientStore.getOneClient(this.id)
    },
    clients() {
      return this.clientStore.clients
    }
  },
  async created() {
    if (this.clients.length === 0) {
      await this.getClients()
    }
    this.getClient()
  },
  methods: {
    goToClients() {
      this.$router.push({
        name: 'clients'
      })
    },
    async getClients() {
      await this.clientStore.getClients()
    }
  }
}
</script>

<style></style>
