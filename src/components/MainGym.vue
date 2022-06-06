<template>
  <main>
    <section class="jumbotron">
      <div class="content">
        <h1>no pain no gain</h1>
        <p>Motivation is what gets you started. Habits is what keeps you going.</p>
        <button>join us today</button>
      </div>
    </section>
    <section class="worldfitness">
        <div class="content">
            <h1>WORLD CLASS Fitness</h1>
            <img src="../assets/images/divider-xx-red.png" alt="doble cross">
            <p>At Avada Gym, everything we do from top to bottom is of the highest quality to ensure we're equipped to help you reach your goals of a healthy and fit lifestyle.</p>
        </div>
    </section>
    <div class="centeredquadratino"><div class="quadratino"></div></div>
    <section class="signup">
        <div class="centered">
          <div class="image">
            <img src="../assets/images/home_img-compressor.jpg" alt="">
            <img src="" alt="">
          </div>
          <div class="form">
            <h1>Sign Up For A Free Training Session!</h1>
            <form @submit.prevent="">
              <label for="name">Name*</label>
              <input type="text" name="name" id="name">
              <label for="email">Email</label>
              <input type="e-mail" name="email" id="email">
              <button class="submit">start now!</button>
            </form>
          </div>
        </div>
    </section>
    <section class="containercards">
      <div class="cards">
        <GymCard />
      </div>
    </section>
    <section class="secondContainerCards">
      <div class="title">
        <h1>real world results</h1>
        <img src="../assets/images/divider-xx-red.png" alt="">
      </div>
      <div class="firstcards">
        <ReviewCard />
      </div>
      <div class="title">
        <h1>high performance facilities</h1>
        <img src="../assets/images/divider-xx-red.png" alt="">
      </div>
      <div class="secondcards">
        <FacilitiesCard />
      </div>
    </section>
    <section class="jumbotronsecond">
      <div class="centered">
        <div class="content">
          <p>"I fear not tho man who has practiced 10,000 kiks once, but I fear the man who have practiced one kik 10,000 times"</p>
          <img src="../assets/images/divider-white-xx.png" alt="">
          <h1>bruce lee &bull; quote of the day</h1>
        </div>
      </div>
    </section>
    <section class="thirdContainerCards">
      <div class="title">
        <h1>meet our trainers</h1>
        <img src="../assets/images/divider-xx-red.png" alt="">
      </div>
      <div class="thirdcards">
        <TrainerCard />
      </div>
      <button>view all trainers</button>
    </section>
    <div class="centeredquadratino reverse"><div class="quadratino"></div></div>
    <section class="news">
      <div class="title">
        <h1>performance news</h1>
        <img src="../assets/images/divider-xx-red.png" alt="">
      </div>
      <div class="fourthcards">
        <NewsCard @lastnews="setLastNews" :news-data="news" />
        <div class="centeredbutton">
          <button>read all articles</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GymCard from './GymCard.vue'
import ReviewCard from './ReviewCard.vue'
import FacilitiesCard from './FacilitiesCard.vue'
import TrainerCard from './TrainerCard.vue'
import NewsCard from './NewsCard.vue'
export default {
  name: 'MainGym',
  components: {
    GymCard,
    ReviewCard,
    FacilitiesCard,
    TrainerCard,
    NewsCard
  },
  data () {
    return {

    }
  },
  methods: {
    setLastNews (arrNews) {
      console.log(arrNews)
      this.$emit('lastnews', this.arrNews)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../assets/styles/style"
main
  .centeredquadratino
    width: 100%
    background-color: $background_signup
    .quadratino
      width: 15px
      height: 15px
      margin: 0 auto
      border: 20px solid transparent
      border-top: 20px solid $shark
  .centeredquadratino.reverse
    background-color: $shark
    .quadratino
      border-top: 20px solid $background_signup
  button
        background-color: transparent
        padding: 0 1.5rem
        border: 1px solid $white
        color: $white
        height: 40px
        text-transform: uppercase
        &:hover
          color: $chestnut_rose
          border-color: $chestnut_rose
  .title
      width: 100%
      text-align: center
      text-transform: uppercase
      font-size: 1.5rem
      margin-bottom: 5rem
      h1
        padding: 3rem
  .jumbotron
    width: 100%
    height: calc(100vh + 167px)
    background-image: url('../assets/images/home-banner.jpg')
    background-position: top
    background-size: cover
    @include flex-layout (center, center, wrap)
    .content
      @include flex-layout (center, center, wrap)
      margin: 0 auto
      flex-direction: column
      color: $white
      width: 80%
      h1
        text-transform: uppercase
        font-size: 5rem
      p
        margin: 3rem 0
  .worldfitness
    height: 100vh
    background-color: $shark
    @include flex-layout (center, center, no-wrap)
    .content
      color: $white
      margin: 0 auto
      padding: 4rem 0
      text-align: center
      width: 50%
      h1
        font-size: 3rem
      img
        padding: 2rem 0
      p
        color: $edward
  .signup
    background-color: #212425
    height: calc(100vh - 40px)
    @include flex-layout (center, center, wrap)
    .centered
      width: 80%
      margin: 0 auto
      @include flex-layout (center, center, wrap)
      .image
        width:50%
        padding: 0 1rem
        img
          width: 100%
    .form
      width: 50%
      display: flex
      flex-direction: column
      padding: 0 1rem
      line-height: 3rem
      label
        color: $edward
      input
        textarea:
          color: $white
        color: $white
        width: 100%
        height: 40px
        background-color: transparent
        border: 1px solid $edward
      button
        width: 100%
        background-color: $chestnut_rose
        color: $white
        text-transform: uppercase
        border-color: transparent
        padding: .5rem 0
        margin-top: 3rem
        &:hover
          cursor: pointer
          border-color: red
  .containercards
    background-image: url(../assets/images/gym_bkgd_bw-compressor.jpg)
    height:100vh
    @include flex-layout (center, center, no-wrap)
  .secondContainerCards
    @include flex-layout (center, center, wrap)
    background-color: $shark
    padding: 3rem 0
  .jumbotronsecond
    @include flex-layout (center, center, wrap)
    background-image: url(../assets/images/home-testimonial-bg.jpg)
    width: 100%
    height: 100vh
    background-position: center
    background-size:  cover
    .centered
      width: 50%
      margin: 0 auto
      text-align: center
      color: white
      p
        font-size: 2rem
      img
        margin: 2rem
      h1
        text-transform: uppercase
        font-size: 1.2rem
  .thirdContainerCards
    background-color: $background_signup
    width: 100%
    text-align: center
    padding: 3rem 0
  .news
    background-color: $shark
    .centeredbutton
      @include flex-layout (center, center, wrap)
      width: 100%
      padding: 4rem 0
</style>
