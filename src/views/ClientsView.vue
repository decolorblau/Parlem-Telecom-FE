<template>
  <div class="p-4 p-lg-5 fullPage">
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
