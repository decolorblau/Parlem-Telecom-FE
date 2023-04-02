<template>
  <div v-if="client" class="p-4 p-lg-5 fullPage">
    <button class="btn btn-link text-decoration-none p-0 mb-2" @click="goToClients">
      &lt; Tornar al llistat de clients
    </button>
    <ClientDetail :client="client" />
    <ProductList />
  </div>
</template>

<script>
import ClientDetail from '../components/ClientDetail.vue'
import ProductList from '../components/ProductList.vue'
import { useClientStore } from '../stores/ClientStore'

export default {
  name: 'ClientDetailView',
  setup() {
    const clientStore = useClientStore()
    return { clientStore }
  },
  components: {
    ProductList,
    ClientDetail
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
