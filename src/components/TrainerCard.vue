<template>
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
</template>

<script>
export default {
  name: 'TrainerCard',
  data () {
    return {
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
      ]
    }
  }

}
</script>

<style lang="sass" scoped>
@import "../assets/styles/style"
.thirdcards
      @include flex-layout (center, space-between, wrap)
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
</style>
