<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  mounted() {
    this.$store.commit("onStart")
  },
  watch: {
    $route() {
      this.$store.commit("onStart")
    }
  }
}
</script>

<template>
  <Navbar />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
