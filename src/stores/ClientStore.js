import { defineStore } from 'pinia'
import router from '../router'
import paths from '../router/paths'

export const useClientStore = defineStore('ClientStore', {
  state: () => ({
    clients: []
  }),
  actions: {
    async getClients(search) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}clients?q=${search}`)
      this.clients = await response.json()
    },
    redirectToHome() {
      router.push(paths.home)
    },
    redirectToClientsList() {
      router.push(paths.clients)
    }
  },
  getters: {
    getOneClient: (state) => (id) => state.clients.find((client) => client.customerId === id)
  }
})
