<template>
  <div id="app">
    <HeaderGym />
    <MainGym />
    <FooterGym />
  </div>
</template>

<script>
import HeaderGym from './components/HeaderGym.vue'
import MainGym from './components/MainGym.vue'
import FooterGym from './components/FooterGym.vue'
export default {
  name: 'App',
  components: {
    HeaderGym,
    MainGym,
    FooterGym
  }
}
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
</style>
