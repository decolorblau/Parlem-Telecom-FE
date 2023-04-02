import { defineStore } from 'pinia'
import router from '../router'
import paths from '../router/paths'

export const useClientStore = defineStore('ClientStore', {
  state: () => ({
    clients: []
  }),
  actions: {
    async getClients() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}clients`)
      this.clients = await response.json()
    }
  },
  getters: {
    redirectToHome() {
      router.push(paths.home)
    },
    redirectToClientsList() {
      router.push(paths.clients)
    }
  }
})
