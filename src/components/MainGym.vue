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
    <section class="signup">
        <div class="quadratino"></div>
        <div class="centered">
          <div class="image">
            <img src="../assets/images/home_img-compressor-400x222.jpg" alt="">
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
    </section>
  </main>
</template>

<script>
export default {
  name: 'MainGym'
}
</script>

<style lang="sass" scoped>
@import "../assets/styles/style"
main
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
    background-color: $shark
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
    .quadratino
      width: 15px
      height: 15px
      margin: 0 auto
      border: 20px solid transparent
      border-top: 20px solid $shark
    .centered
      @include flex-layout (center, center, wrap)
      padding: 8rem 0
      .image
        flex-grow: .2
        img
          width: 100%
    .form
      display: flex
      flex-direction: column
      padding: 0 1rem
      line-height: 2.5rem
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
</style>
