<template>
  <div id="app">
    <HeaderGym />
    <MainGym @lastnews="latestNews"/>
    <FooterGym :arr-news="arrLastNews" :news-data ="news"/>
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
  },
  data () {
    return {
      arrLastNews: []
    }
  },
  methods: {
    latestNews (arrNews) {
      this.arrLastNews = arrNews
    }
  }
}
</script>

<style lang="sass">
@import "./assets/styles/style.scss"
@import "~bootstrap"
</style>
