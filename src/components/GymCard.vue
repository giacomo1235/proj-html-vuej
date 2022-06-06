<template>
  <main class="cards">
      <div class="card" style="background-color: transparent" v-for="card in arrFirstCards" :key="card.font">
          <div class="font">
           <font-awesome-icon :icon="card.font" />
          </div>
          <h1>{{card.title}}</h1>
          <img src="../assets/images/divider-x-red.png" alt="cross">
          <p>{{card.text}}</p>
        </div>
  </main>
</template>

<script>
export default {
  name: 'GymCard',
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

<style scoped lang="sass">
@import "../assets/styles/style"
.cards
  @include flex-layout (center, space-between, wrap)
  width: 80%
  margin: 0 auto
  gap: 1rem
  .card
      background-color:transparent
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
        color: white
      p
        color: $edward
        line-height: 1.5rem
</style>
