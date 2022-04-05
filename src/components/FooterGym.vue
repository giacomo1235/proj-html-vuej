<template>
  <footer>
      <section class="redbackground">
        <div class="centered">
          <div class="contents">
          <h1>Achieve Your Fitness Goals</h1>
          <p>Flexible membership packages to suit all levels of athlete and achive your fitness goals</p>
        </div>
        <div class="button">
          <button>join us</button>
        </div>
        </div>
      </section>
      <section class="mainfooter">
        <div class="container">
          <div class="col">
            <h1>come find us</h1>
            <ul>
              <li>1234 North Main Street</li>
              <li>New York, NY 555555</li>
              <li>Phone: 1.800.555.6789</li>
              <li>Email: info@your-domain.com</li>
            </ul>
          </div>
          <div class="col">
            <h1>recent posts</h1>
            <ul>
              <li>train with free weights or your body weight?</li>
              <li>nutritional advice that will keep you training</li>
            </ul>
          </div>
          <div class="col">
            <h1>opening times</h1>
            <ul>
              <li>
                <div class="date">
                  <div class="day"><p>weekdays monday - friday</p></div>
                  <div class="time"><p>09:00 - 19:00</p></div>
                </div>
              </li>
              <li>
                <div class="date">
                  <div class="day"><p>weekdends saturday - sunday</p></div>
                  <div class="time"><p>09:00 - 21:00</p></div>
                </div>
              </li>

            </ul>
          </div>
          <div class="col">
            <img src="../assets/images/gym_ad-compressor.jpg" alt="">
          </div>
        </div>
      </section>
      <section class="socialfooter">
        <div class="centered">
          <div class="copiright">
          <p>copiright 2012 - 2020 Avada Theme by Theme Fusion All Rights Reserved Powered by WordPress</p>
        </div>
        <div class="icone">
          <div class="icon"><font-awesome-icon icon="fa-brands fa-facebook-f" /></div>
          <div class="icon"><font-awesome-icon icon="fa-brands fa-twitter" /></div>
          <div class="icon"><font-awesome-icon icon="fa-brands fa-instagram" /></div>
        </div>
        </div>
      </section>
  </footer>
</template>

<script>
export default {
  name: 'FooterGym'

}
</script>

<style lang="sass" scoped>
@import "../assets/styles/style"
.redbackground
  width: 100%
  background-image: url(../assets/images/home-parallax.jpg)
  height: 200px
  @include flex-layout (center, center, wrap)
  .centered
    width: 80%
    margin: 0 auto
    @include flex-layout (center, space-evenly, wrap)
    color: $white
    button
      background-color: transparent
      padding: 0 1.5rem
      border: 1px solid $white
      color: $white
      height: 40px
      text-transform: uppercase
      &:hover
        color: $edward
        border-color: $edward
.mainfooter
  width: 100%
  height: calc(100vh - 200px)
  background-color: $background_signup
  .container
    width: 80%
    padding: 2rem 0
    margin: 0 auto
    @include flex-layout (center, space-between, wrap)
    .col
      width: 23%
      h1
        text-transform: uppercase
      ul
        color: $edward
        list-style-type: none
        li
          margin: .5rem 0
          line-height: 2rem
.socialfooter
  width: 100%
  padding: 1rem 0
  background-color: rgb(10%, 11%, 12%)
  .centered
    width: 80%
    margin: 0 auto
    @include flex-layout (center, space-between, wrap)
    .copiright
      color: $edward
    .icone
      display: flex
      .icon
        @include flex-layout (center, center, wrap)
        width: 40px
        height: 40px
        margin: 0 20px
        margin-left: -10px
        color: white
        background-color: $chestnut_rose
</style>
