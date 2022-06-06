<template>
  <div class="fourthcards">
    <div class="fourthcard" v-for="news in arrNews" :key="news.title">
      <div class="immagine">
        <img :src="news.image" alt="">
      </div>
      <!-- <div class="bg-image" v-mdb-ripple>
    <img :src="news.image" class="w-100" />
    <a href="javascript:void(0);">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)">
        <div class="d-flex justify-content-center align-items-center h-100">
          <p class="text-white mb-0">Can you see me?</p>
        </div>
      </div>
      <div class="hover-overlay">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
      </div>
    </a>
  </div> -->
      <!-- <div class="conhover">
        <img :src="news.image" alt="">
        <div class="buttons">
          <font-awesome-icon icon="fa-solid fa-link" />
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          sss
        </div>
      </div> -->
      <div class="contents">
        <h1>{{news.title}}</h1>
        <p>{{news.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  data () {
    return {
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
  },
  computed () {
    this.$emit('lastnews', this.arrNews)
  }

}
</script>

<style lang="sass" scoped>
@import "../assets/styles/style"
.fourthcards
      display: flex
      flex-wrap: wrap
      justify-content: space-between
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
        .immagine
          &:hover
            opacity: rgba (249, 49, 84, .6)
        .contents
          h1
            margin: 1rem 0
          p
            color: $edward
        img
          width: 100%

</style>
