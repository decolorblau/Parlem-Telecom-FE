<template>
  <section>
    <div class="d-flex w-100 mt-4 mb-4 justify-content-between">
      <h4>Clients ({{ clients.length }})</h4>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          v-model="search"
          placeholder="Buscar per identificació"
          aria-label="Search"
          aria-describedby="search"
        />
        <button
          class="btn btn-outline-secondary d-flex align-items-center"
          type="button"
          id="search"
          @click="getClients(search)"
        >
          <IconSearch />
        </button>
      </div>
    </div>
    <div class="d-flex mb-1 row px-2 px-lg-3">
      <p class="mb-0 d-none d-lg-block col-lg-4">Nom usuari</p>
      <p class="mb-0 d-none d-lg-block col-lg-3">Email</p>
      <p class="mb-0 d-none d-lg-block col-lg-3">Identificació</p>
      <p class="mb-0 d-none d-lg-block col-lg-2">Telèfon</p>
    </div>
    <div v-for="(client, index) of clients" :key="index" class="mb-1">
      <ClientListItem :client="client" />
    </div>
  </section>
</template>

<script>
import { useClientStore } from '../stores/ClientStore'
import ClientListItem from './ClientListItem.vue'
import IconSearch from './icons/IconSearch.vue'
export default {
  data() {
    return {
      search: ''
    }
  },
  setup() {
    const clientStore = useClientStore()
    return { clientStore }
  },
  components: { ClientListItem, IconSearch },
  computed: {
    clients() {
      return this.clientStore.clients
    }
  },
  created() {
    this.getClients()
  },
  methods: {
    async getClients(search) {
      await this.clientStore.getClients()
    }
  }
}
</script>
<style>
.input-group {
  width: 250px !important;
}
</style>
