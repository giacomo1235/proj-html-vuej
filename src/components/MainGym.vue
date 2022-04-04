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
        <div class="card" v-for="card in arrFirstCards" :key="card.font">
          <div class="font">
           <font-awesome-icon :icon="card.font" />
          </div>
          <h1>{{card.title}}</h1>
          <img src="../assets/images/divider-x-red.png" alt="cross">
          <p>{{card.text}}</p>
        </div>
      </div>
    </section>
    <section class="secondContainerCards">
      <div class="title">
        <h1>real world results</h1>
        <img src="../assets/images/divider-xx-red.png" alt="">
      </div>
      <div class="firstcards">
        <div class="firstcard">
          <img src="../assets/images/review_1-compressor.jpg" alt="reviewer 1">
          <div class="text">
            <p>"The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!"</p>
          <h1>- Tara Smith</h1>
          </div>
        </div>
        <div class="firstcard">
          <img src="../assets/images/review_1-compressor.jpg" alt="reviewer 1">
          <div class="text">
            <p>"The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!"</p>
          <h1>- Tara Smith</h1>
          </div>
        </div>
        <div class="firstcard">
          <img src="../assets/images/review_1-compressor.jpg" alt="reviewer 1">
          <div class="text">
            <p>"The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!"</p>
          <h1>- Tara Smith</h1>
          </div>
        </div>
        <div class="firstcard">
          <img src="../assets/images/review_1-compressor.jpg" alt="reviewer 1">
          <div class="text">
            <p>"The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!"</p>
          <h1>- Tara Smith</h1>
          </div>
        </div>
      </div>
      <div class="title">
        <h1>high performance facilities</h1>
        <img src="../assets/images/divider-xx-red.png" alt="">
      </div>
      <div class="secondcards">
        <div class="secondcard"><img src="../assets/images/home-image4.jpg" alt=""></div>
        <div class="secondcard"><img src="../assets/images/home-image4.jpg" alt=""></div>
        <div class="secondcard"><img src="../assets/images/home-image4.jpg" alt=""></div>
        <div class="secondcard"><img src="../assets/images/home-image4.jpg" alt=""></div>
        <div class="secondcard"><img src="../assets/images/home-image4.jpg" alt=""></div>
        <div class="secondcard"><img src="../assets/images/home-image4.jpg" alt=""></div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MainGym',
  data () {
    return {
      arrFirstCards: [
        {
          font: 'fa-link-slash',
          title: 'Strength & Conditioning',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          font: 'fa-solid fa-bicycle',
          title: 'Strength & Conditioning',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          font: 'fa-solid fa-cloud',
          title: 'Strength & Conditioning',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          font: 'fa-solid fa-heart-pulse',
          title: 'Strength & Conditioning',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../assets/styles/style"
main
  background-color: #212425
  .centeredquadratino
    width: 100%
    background-color: $background_signup
    .quadratino
      width: 15px
      height: 15px
      margin: 0 auto
      border: 20px solid transparent
      border-top: 20px solid $shark
  h1
    color: $white
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
        margin: 1.5rem 0
      button
        background-color: transparent
        padding: 1rem 1.5rem
        border: 1px solid $white
        color: $white
        margin: 1.5rem
        height: 40px
        text-transform: uppercase
        &:hover
          color: $chestnut_rose
          border-color: $chestnut_rose
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
        select
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
    .cards
      @include flex-layout (center, center, wrap)
      width: 80%
      margin: 0 auto
      .card
        width: 20%
        @include flex-layout (center, center, wrap)
        flex-direction: column
        gap: 1.3rem
        .font
          font-size: 3rem
          font-wheight: 600
          color: $chestnut_rose
          border: 2px solid $chestnut_rose
          border-radius: 20rem
          padding: 1.5rem
        h1
          font-size: 1rem
        p
          color: $edward
          line-height:1.5rem
  .secondContainerCards
    @include flex-layout (center, center, wrap)
    background-color: $shark
    /* height: 100vh */
    .title
      width: 100%
      text-align: center
      text-transform: uppercase
      font-size: 1.5rem
      h1
        padding: 3rem

    .firstcards
      width: 80%
      margin: 0 auto
      @include flex-layout (center, center, wrap)
      gap: 30px
      .firstcard
        @include flex-layout (center, center, wrap)
        width:40%
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
    .secondcards
      @include flex-layout (center, center, wrap)
      width: 80%
      .secondcard
        margin: 20px
        width:25%
        img
          width: 100%
</style>
