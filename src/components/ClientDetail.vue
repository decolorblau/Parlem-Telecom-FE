<template>
  <div class="detail mb-1 p-2 p-lg-5 row">
    <div class="col-md-4 col-12 d-flex my-2 px-md-4 justify-content-center justify-content-md-end">
      <IconUser class="text-primary avatar" />
    </div>
    <div class="col-md-8 col-12 justify-content-center">
      <h2 class="text-center text-md-start">{{ client.givenName }} {{ client.familyName1 }}</h2>
      <div class="row mt-3 justify-content-center">
        <p class="text-muted small mb-0 col-6 col-md-3 text-end text-md-start">Id client</p>
        <p class="mb-1 col-6 col-md-9">{{ client.customerId }}</p>
        <p class="text-muted small mb-0 col-6 col-md-3 text-end text-md-start">Email</p>
        <p class="mb-1 col-6 col-md-9">{{ client.email }}</p>
        <p class="text-muted small mb-0 col-6 col-md-3 text-end text-md-start">
          Doc. identificació
        </p>
        <p class="mb-1 col-6 col-md-9">{{ client.docType }}</p>
        <p class="text-muted small mb-0 col-6 col-md-3 text-end text-md-start">
          Núm. identificació
        </p>
        <p class="mb-1 col-6 col-md-9">{{ client.docNum }}</p>
        <p class="text-muted small mb-0 col-6 col-md-3 text-end text-md-start">Telèfon</p>
        <p class="mb-1 col-6 col-md-9">{{ client.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconUser from './icons/IconUser.vue'

export default {
  name: 'ClientDetail',
  props: {
    client: {
      type: Object,
      required: true
    }
  },
  components: {
    IconUser
  }
}
</script>

<style>
.detail {
  background-color: white !important;
}
.small {
  font-size: 12px;
}
</style>
