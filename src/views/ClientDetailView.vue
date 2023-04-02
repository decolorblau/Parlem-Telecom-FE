<template>
  <p>detall client</p>
</template>

<script>
export default {
  name: 'ClientDetailView',
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

<style></style>
