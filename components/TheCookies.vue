<template>
  <div v-show="!accepted" class="cookies">
    <div class="container">
      <div class="cookies__inner">
        <div class="cookies__text">
          Мы используем cookie. Это позволяет нам анализировать взаимодействие посетителей с сайтом и делать его лучше. Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов <a href="#" class="accent-color" target="_blank">cookie</a>.
        </div>
        <button class="btn btn--accent" @click="setAccepted">Хорошо</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      accepted: true,
    }
  },
  methods: {
    setAccepted() {
      window.localStorage.setItem('cookies', true)
      this.accepted = true
    }
  },
  mounted() {
    if (window.localStorage.getItem('cookies')) {
      this.accepted = true
    } else {
      this.accepted = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .cookies {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 90;
    &__inner {
      padding: 2.4rem 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      .btn {
        margin-left: 3.2rem;
      }
    }
    &__text {
      color: $dark-text;
      font-size: 1.8rem;
    }
    @include mob {
      bottom: 2rem;
      &__inner {
        padding: 1.6rem;
        flex-direction: column;
        align-items: stretch;
        background-color: #fff;
        .btn {
          margin-left: 2.4rem;
        }
      }
      &__text {
        font-size: 1.4rem;
      }
    }
  }
</style>