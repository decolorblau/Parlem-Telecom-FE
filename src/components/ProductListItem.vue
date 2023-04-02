<template>
  <div class="list-item d-flex mb-1 p-2 p-lg-3 row">
    <p class="h6 mb-0 col-12 col-md-4">{{ product.productName }}</p>
    <p class="text-secondary mb-0 col-12 col-lg-3">
      <span class="d-lg-none">Tipus: </span>{{ product.productTypeName }}
    </p>
    <p class="text-secondary mb-0 col-12 col-sm-6 col-lg-3">
      <span class="d-lg-none">Número terminal: </span> {{ product.numeracioTerminal }}
    </p>
    <p class="text-secondary mb-0 col-12 col-sm-6 col-lg-2 d-flex">
      <span class="d-lg-none">Data venta: </span>{{ product.soldAt }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.list-item {
  background-color: white !important;
  cursor: pointer;
}
</style>
