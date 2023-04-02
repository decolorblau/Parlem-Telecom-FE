<template>
  <div class="list-item d-flex mb-1 p-2 p-lg-3 row" @click="goToDetail">
    <p class="h5 mb-0 col-12 col-md-4">{{ client.givenName }} {{ client.familyName1 }}</p>
    <p class="text-secondary mb-0 col-12 col-lg-3">
      <span class="d-lg-none">Email: </span>{{ client.email }}
    </p>
    <p class="text-secondary mb-0 col-12 col-sm-6 col-lg-3">
      {{ client.docType }}: {{ client.docNum }}
    </p>
    <p class="text-secondary mb-0 col-12 col-sm-6 col-lg-2 d-flex">
      <span class="d-lg-none">Telèfon: </span>{{ client.phone }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ClientListItem',
  props: {
    client: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetail() {
      this.$router.push({
        name: 'detail',
        params: { id: this.client.customerId }
      })
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
