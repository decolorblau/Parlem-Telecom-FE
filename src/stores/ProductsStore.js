import { defineStore } from 'pinia'

export const useProductStore = defineStore('ProductStore', {
  state: () => ({
    products: []
  }),
  actions: {
    async getProducts(customerId) {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}productes?customerId=${customerId}`
      )
      this.products = await response.json()
    }
  }
})
