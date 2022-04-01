<template>
  <main>
    <section class="jumbotron">
      <div class="content">
        <h1>no pain no gain</h1>
        <p>Motivation is what gets you started. Habits is what keeps you going.</p>
        <button>join us today</button>
      </div>
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
  .jumbotron
    width: 100%
    height: 100vh
    background-image: url('../assets/images/home-banner.jpg')
    background-position: top
    background-size: cover
    position: relative
    .content
      @include flex-layout (center, center, wrap)
      flex-direction: column
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -30%)
      color: $white
      width: 100%
      h1
        text-transform: uppercase
        font-size: 5rem
      button
        background-color: transparent
        padding: 1rem 1.5rem
        border: 1px solid $white
        color: $white
        margin: 1rem 0
        text-transform: uppercase
        &:hover
          color: $chestnut_rose
          border-color: $chestnut_rose

</style>
