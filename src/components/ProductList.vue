<template>
  <section>
    <div class="d-flex w-100 mt-4 mb-2 justify-content-between">
      <h4>Productes contractats ({{ products.length }})</h4>
    </div>
    <div class="d-flex mb-1 row px-2 px-lg-3">
      <p class="mb-0 d-none d-lg-block col-lg-4">Nom</p>
      <p class="mb-0 d-none d-lg-block col-lg-3">Tipus</p>
      <p class="mb-0 d-none d-lg-block col-lg-3">Número terminal</p>
      <p class="mb-0 d-none d-lg-block col-lg-2">Data venta</p>
    </div>
    <div v-for="(product, index) of products" :key="index" class="mb-1">
      <ProductListItem :product="product" />
    </div>
  </section>
</template>

<script>
import { useProductStore } from '../stores/ProductsStore'
import ProductListItem from './ProductListItem.vue'

export default {
  name: 'ProductList',
  setup() {
    const productStore = useProductStore()
    return { productStore }
  },
  components: { ProductListItem },
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
