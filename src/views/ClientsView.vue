<template>
  <div class="p-4 p-lg-5 fullPage">
    <RouterLink to="/"><p class="small">&lt; Back</p></RouterLink>
    <div class="d-flex mt-4 mb-2">
      <h4>Clients</h4>
    </div>
    <ClientList />
  </div>
</template>

<script>
import ClientList from '../components/ClientList.vue'

export default {
  name: 'ClientsView',
  components: {
    ClientList
  }
}
</script>

<style>
.fullPage {
  min-height: calc(100vh - 80px);
  background-color: rgb(245, 245, 245);
}
</style>
