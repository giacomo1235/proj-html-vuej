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
        <div class="firstcard" v-for=" card in arrSecondCardsReview" :key="card.image">
          <img :src="card.image" :alt="card.name">
          <div class="text">
            <p>"{{card.text}}"</p>
          <h1>- {{card.name}}</h1>
          </div>
        </div>
      </div>
      <div class="title">
        <h1>high performance facilities</h1>
        <img src="../assets/images/divider-xx-red.png" alt="">
      </div>
      <div class="secondcards">
        <div class="secondcard" v-for=" card in arrSecondCardsFacilities" :key="card.image">
          <a :href="card.href"><img :src="card.image" alt=""></a>
        </div>
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
        <div class="thirdcard" v-for="trainer in arrTrainers" :key="trainer.image">
          <img :src="trainer.image" alt="">
          <div class="contents">
            <h1>{{trainer.name}}</h1>
            <h1>{{trainer.role}}</h1>
            <p>{{trainer.bio}}</p>
            <div class="icone">
              <div class="icon"><font-awesome-icon icon="fa-brands fa-facebook-f" /></div>
              <div class="icon"><font-awesome-icon icon="fa-brands fa-twitter" /></div>
              <div class="icon"><font-awesome-icon icon="fa-brands fa-instagram" /></div>
            </div>
          </div>
        </div>
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
        <div class="fourthcard" v-for="news in arrNews" :key="news.title">
          <img :src="news.image" alt="">
          <div class="contents">
            <h1>{{news.title}}</h1>
            <p>{{news.text}}</p>
          </div>
        </div>
      <button>read all articles</button>
      </div>
    </section>
  </main>
</template>

<script>
import GymCard from './GymCard.vue'
export default {
  name: 'MainGym',
  components: {
    GymCard
  },
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
      ],
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
      ],
      arrTrainers: [
        {
          image: 'trainer1.jpg',
          name: 'Ann Baker',
          role: 'Personal Trainer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.'
        },
        {
          image: 'trainer3.jpg',
          name: 'Anne Warren',
          role: 'Personal Trainer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.'
        },
        {
          image: 'trainer4.jpg',
          name: 'Peter Rice',
          role: 'Personal Trainer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.'
        }
      ],
      arrNews: [
        {
          title: 'Train with free weights or your body wight?',
          text: 'lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.',
          image: 'blog1.jpg'
        },
        {
          title: 'Train with free weights or your body wight?',
          text: 'orem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.v',
          image: 'blog6.jpg'
        },
        {
          title: 'Train with free weights or your body wight?',
          text: 'lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.',
          image: 'trainer4.jpg'
        },
        {
          title: 'Train with free weights or your body wight?',
          text: 'lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.',
          image: 'blog4.jpg'
        },
        {
          title: 'Train with free weights or your body wight?',
          text: 'lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.',
          image: 'trainer3.jpg'
        },
        {
          title: 'Train with free weights or your body wight?',
          text: 'lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.lorem ipsum ofjwfnf Lorem ipsum dolor sit amet, consectetur adipisicing elit. In augue nisl,onare volutpat.',
          image: 'trainer1.jpg'
        }
      ]
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
  h1
    color: $white
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
        :hover
          opacity: .5
          box-shadow: 20px 20px 10px $background_signup
          cursor: pointer
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
    .thirdcards
      @include flex-layout (center, center, wrap)
      width: 80%
      margin: 0 auto
      padding: 3rem 0
      .thirdcard
        width: 30%
        margin: 0 10px
        img
          width: 100%
        .contents
          background-color: $shark
          display: flex
          flex-direction: column
          gap: 14px
          line-height: 1.5rem
          padding: 50px 25px
          text-align: start
          p
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
              background-color: $background_signup
  .news
    background-color: $shark
    .fourthcards
      display: flex
      flex-wrap: wrap
      justify-content: center
      button
        margin: 2rem 0
      text-align: center
      width: 80%
      margin: 0 auto
      .fourthcard
        background-color: $background_signup
        width: 30%
        margin: 1rem
        padding: 1rem
        height: 100%
        text-align: start
        .contents
          h1
            margin: 1rem 0
          p
            color: $edward
        img
          width: 100%

</style>
