<template>
  <div class="secondcards">
    <div class="secondcard" v-for=" card in arrSecondCardsFacilities" :key="card.image">
      <a :href="card.href"><img :src="card.image" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FacilitiesCard',
  data () {
    return {
      arrSecondCardsFacilities: [
        {
          image: 'home-image1.jpg',
          href: '#!'
        },
        {
          image: 'home-image2.jpg',
          href: '#!'
        },
        {
          image: 'home-image3.jpg',
          href: '#!'
        },
        {
          image: 'home-image4.jpg',
          href: '#!'
        },
        {
          image: 'home-image54.jpg',
          href: '#!'
        },
        {
          image: 'home-image6.jpg',
          href: '#!'
        }
      ]
    }
  }

}
</script>

<style lang="sass" scoped>
@import "../assets/styles/style"
.secondcards
      @include flex-layout (center, space-between, wrap)
      width: 80%
      margin: 0 auto
      gap: 40px
      .secondcard
        width:30%
        img
          width: 100%
        :hover
          opacity: .5
          box-shadow: 20px 20px 10px $background_signup
          cursor: pointer
</style>
