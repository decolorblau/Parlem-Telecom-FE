<template>
  <section>
    {{ products }}
  </section>
</template>

<script>
import { useProductStore } from '../stores/ProductsStore'

export default {
  name: 'ProductList',
  setup() {
    const productStore = useProductStore()
    return { productStore }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    products() {
      return this.productStore.products
    }
  },
  async created() {
    await this.getProducts()
  },
  methods: {
    async getProducts() {
      await this.productStore.getProducts(this.id)
    }
  }
}
</script>
<style>
.input-group {
  width: 250px !important;
}
</style>
