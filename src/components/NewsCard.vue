<template>
  <div class="fourthcards">
    <div class="fourthcard" v-for="news in arrNews" :key="news.title">
      <img :src="news.image" alt="">
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
        .contents
          h1
            margin: 1rem 0
          p
            color: $edward
        img
          width: 100%

</style>
