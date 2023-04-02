<template>
  <section class="notFound">
    <p class="title"><span class="text-primary">404</span> Not Found</p>
    <p>The page you were looking for does not exist</p>
    <button type="button" variant="outlined" class="btn btn-primary" @click="redirectToHome()">
      GO BACK HOME!
    </button>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    redirectToHome() {}
  }
}
</script>

<style lang="scss" scoped>
.notFound {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-weight: 300;
}
.title {
  font-size: 60px;
  font-weight: 500;
}
</style>
