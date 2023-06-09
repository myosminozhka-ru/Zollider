<template>
  <header class="header" ref="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__mask" :class="{hide: hideMask, none: noneMask}"></div>
        <div class="header__logo">
          <img class="from" :class="{to: toLogo}" src="@/assets/ico/logo.svg" alt="logo">
        </div>
        <nav 
          class="header__nav" 
          :class="{active: isNavOpen}"
        >
          <div class="header__list">
            <template v-if="this.$route.name === 'index'">
              <a 
                v-for="(link, index) in links" 
                :key="link.href" 
                :href="link.href" 
                class="header__item" 
                :class="{active: index === activeLinkIndex}"
                @click="linkHandler(index)"
              >
                {{ link.name }}
              </a>
            </template>
            <template v-else>
              <nuxt-link
                v-for="link in links" 
                :key="link.href" 
                :to="'/' + link.href" 
                class="header__item" 
              >
                {{ link.name }}
              </nuxt-link>
            </template>
          </div>
          <div class="header__social">
            <SocialLinks/>
          </div>
        </nav>
        <div class="header__burger" @click="toggleNav" :class="{active: isNavOpen}">
          <div></div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isNavOpen: false,
      hideMask: false,
      noneMask: false,
      toLogo: false,
      activeLinkIndex: null,
      links: [
        {
          name: 'Призы',
          href: '#prizy',
        },
        {
          name: 'Как участвовать?',
          href: '#kak-uchastvovat',
        },
        {
          name: 'Правила акции',
          href: '#pravila-akcii',
        },
        {
          name: 'Подайте заявку',
          href: '#podajte-zayavku',
        },
        {
          name: 'FAQ',
          href: '#faq',
        },
      ]
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
      document.body.classList.toggle('lock')
    },
    closeNav() {
      this.isNavOpen = false
      document.body.classList.remove('lock')
    },
    animateLogo() {
      setTimeout(() => {
        this.toLogo = true
      }, 100)
      setTimeout(() => {
        this.hideMask = true
      }, 300)
      setTimeout(() => {
        this.noneMask = true
      }, 700)
    },
    scrollHendler() {
      let lastScroll = 0;
      window.addEventListener('scroll', () => {
        if (lastScroll < window.pageYOffset) { // down
          this.$refs.header ? this.$refs.header.classList.add('scroll') : null;
          this.closeNav()
          this.$refs.header ? this.$refs.header.classList.remove('down') : null;
        } else if (window.pageYOffset === 0) {
          this.$refs.header ? this.$refs.header.classList.remove('down') : null;
        } else { // up
          this.$refs.header ? this.$refs.header.classList.add('down') : null;
        }
        if (window.pageYOffset < this.$refs.header.clientHeight - (this.$refs.header.clientHeight * 60 / 100)) {
          this.$refs.header ? this.$refs.header.classList.remove('scroll') : null;
        }
        lastScroll = window.pageYOffset

      })
    },
    linkHandler(index) {
      this.closeNav()
      this.activeLinkIndex = index
    }
  },
  mounted() {
    this.animateLogo()
    this.scrollHendler()
  }
}
</script>
<style lang="scss">
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    transition: transform 200ms;

    &.scroll {
      transform: translateY(-100%);
    }
    &.down {
      transform: translateY(0%);
      background-color: rgba($color: #000000, $alpha: 0.5);
      .header__inner {
        min-height: 7.5rem;
      }
    }
    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 13.5rem;
    }
    &__mask {
      position: fixed;
      left: 0;
      top: 0;
      background-color: #000;
      width: 100vw;
      height: 100vh;
      z-index: 96;
      transition: opacity 500ms;
      &.hide {
        opacity: 0;
      }
      &.none {
        display: none;
      }
    }
    &__logo {
      display: inline-block;
      width: 17.5rem;
      position: relative;
      z-index: 97;
      img {
        &.from {
          transform: translate(28vw, 37vh) scale(2.5);
          transform-origin: left top;
          transition: transform 500ms;
        }
        &.to {
          transform: translate(0, 0) scale(1);
        }
      }
    }
    &__nav {
      display: flex;
      align-items: center;
    }
    &__list {
      display: flex;
      align-items: center;
      margin-right: 8.4rem;
    }
    &__item {
      display: inline-block;
      font-size: 1.8rem;
      line-height: 160%;
      letter-spacing: 0.083em;
      border-bottom: 1px solid rgba($color: $light-text, $alpha: 0);
      transition: border-color 300ms;
      &.active,
      &:hover {
        border-color: $light-text;
      }
      margin-right: 3.2rem;
      &:last-child {
        margin-right: 0;
      }
    }
    &__burger {
      display: none;
      width: 3.5rem;
      position: relative;
      z-index: 95;
      &:before,
      &:after,
      & div {
        background: $light-bg;
        content: "";
        display: block;
        height: 0.1rem;
        margin: 0.7rem 0;
        transition: 0.5s;
      }
      &.active:before {
        transform: translateY(0.75rem) rotate(135deg);
      }
      &.active:after {
        transform: translateY(-0.75rem) rotate(-135deg);
      }
      &.active div {
        transform: scale(0);
      }
    }
    @include mob {
      &.down {
        .header__inner {
          min-height: 3.5rem;
        }
      }
      &__inner {
        min-height: 8.4rem;
      }
      &__logo {
        width: 11.2rem;
        img {
          &.from {
            transform: translate(9vw, 37vh) scale(2.5);
            transform-origin: left top;
            transition: transform 500ms;
          }
          &.to {
            transform: translate(0, 0) scale(1);
          }
        }
      }
      &__nav {
        display: block;
        padding: 10.5rem 1.6rem 1rem;
        transform: translateY(-120%);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 90;
        height: 100vh;
        width: 100vw;
        overflow: auto;
        transition: transform 300ms, opacity 300ms;
        background-color: #0A0D12;
        opacity: 0;
        &.active {
          opacity: 1;
          transform: translate(0, 0);
        }
      }
      &__list {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin-right: 0;
        margin-bottom: 5rem;
      }
      &__item {
        letter-spacing: 0;
        border: none;
        transition: color 300ms;
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 120%;
        text-transform: uppercase;
        &.active,
        &:hover {
          border: none;
          color: $accent;
        }
        margin-right: 0;
        margin-bottom: 1.6rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
      &__burger {
        display: inline-block;
      }
    }
  }
</style>