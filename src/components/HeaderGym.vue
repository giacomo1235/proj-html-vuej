<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="../assets/images/gym_logo_1x.png" alt="gym-logo" />
      </div>
      <nav>
        <ul class="links">
          <li @mouseleave="setActiveIndex()" @mouseenter="setActiveIndex(index)" v-for="(link, index) in links" :key="index" :class="{active:index == activeIndex}" class="link">
            <a :href="link.href">{{link.text}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderGym',
  data () {
    return {
      activeIndex: null,
      links: [
        {
          href: '#!',
          text: 'home'
        },
        {
          href: '#',
          text: 'about us'
        },
        {
          href: '#',
          text: 'facilities'
        },
        {
          href: '#',
          text: 'membership'
        },
        {
          href: '#!',
          text: 'testimonials'
        },
        {
          href: '#',
          text: 'blog'
        }
      ]
    }
  },
  methods: {
    setActiveIndex (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../assets/styles/style"
header
  z-index: 6666666
  position: fixed
  background-color: transparent
  padding: 1rem
  width: 100%
  .container
    @include flex-layout (center, space-between, wrap)
    width: 90%
    margin: auto
    .links
      list-style: none
      .link
        display: inline-block
        margin: 0 .5rem
        &.active
          a
            color: $chestnut_rose
        a
          text-decoration: none
          color: $white
          font-size: .9rem
          font-weight: 500
          text-transform: uppercase
</style>
