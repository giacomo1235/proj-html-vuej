<template>
  <div class="firstcards">
    <div class="firstcard" v-for=" card in arrSecondCardsReview" :key="card.image">
      <img :src="card.image" :alt="card.name">
      <div class="text">
        <p>"{{card.text}}"</p>
        <h1>- {{card.name}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  data () {
    return {
      arrSecondCardsReview: [
        {
          image: 'review_1-compressor.jpg',
          text: 'The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!',
          name: 'Tara Smith'
        },
        {
          image: 'review_2-compressor.jpg',
          text: 'The atmosphere at AVada Gym is amazing, the people are even better. All in all, it is a great place to work out',
          name: 'Simon Chel'
        },
        {
          image: 'review_3-compressor-2.jpg',
          text: 'The facilities as Avada Gym stood out to me the most. They are well maintained and have high quality equipment.',
          name: 'Jen Wirth'
        },
        {
          image: 'review_4-compressor-2.jpg',
          text: 'No bad tings to say about Avada Gym, they are top notch at every corner and truly take care of their customers',
          name: 'Jeff Glum'
        }
      ]
    }
  }

}
</script>

<style scoped lang="sass">
@import "../assets/styles/style"
.firstcards
      width: 80%
      margin: 0 auto
      @include flex-layout (center, space-between, wrap)
      gap: 40px
      .firstcard
        @include flex-layout (center, center, wrap)
        width:48%
        background-color: $background_signup
        padding: 1.5rem
        img
          width: 30%
        .text
          width: 70%
          padding: 0 1rem
          color:  $edward
          p
            font-size: .8rem
            line-height: 1.5rem
            font-style: italic
          h1
            font-size: 1rem
            color: $edward

</style>
