import { defineStore } from 'pinia'

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
  getters: {}
})
