<template>
  <div class="block" id="prizy">
    <div class="container">
      <div class="block__inner wow slow fadeInUp">
        <div class="block__left wow slow fadeInUp">
          <div class="h3 block__title">
            <h3>А ещё не упустите еженедельные призы от Zollider!</h3>
          </div>
          <div class="block__text">Вступайте в нашу группу ВКонтакте и участвуйте в розыгрыше <br class="only-pc"> дополнительных призов каждую неделю.</div>
          <a href="https://vk.com/zollider" target="_blank" class="btn btn--dark">Подписаться на группу ВК</a>
        </div>
        <div class="block__right">
          <div class="block__img">
            <img src="@/assets/img/instruments.png" alt="Призы" class="only-pc">
            <img src="@/assets/img/instruments-sp.png" alt="Призы" class="only-sp">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .block {
    padding-top: 9rem;
    margin-bottom: 12.7rem;
    &__inner {
      position: relative;
      background-image: url(@/assets/img/prize-bg.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      padding: 8rem 7rem;
    }
    &__left {
      max-width: 73.3rem;
      position: relative;
      z-index: 2;
    }
    &__title {
      margin-bottom: 1.6rem;
    }
    &__text {
      font-size: 1.8rem;
      margin-bottom: 6.4rem;
    }
    &__right {
      width: 50%;
    }
    &__img {
      width: 87rem;
      position: absolute;
      right: -4rem;
      top: -10rem;
    }
    @include mob {
      padding-top: 0;
      margin-bottom: 4.7rem;
      position: relative;
      z-index: 3;
      &__inner {
        background-image: url(@/assets/img/prize-bg-sp.jpg);
        padding: 0;
        padding-bottom: 0.3rem;
      }
      &__left {
        max-width: none;
        padding: 4.8rem 1.8rem 0;
      }
      &__title {
        margin-bottom: 0.8rem;
      }
      &__text {
        line-height: 1.4;
        font-size: 1.6rem;
        margin-bottom: 2.1rem;
      }
      &__right {
        width: 100%;
      }
      &__img {
        width: 100%;
        position: static;
      }
    }
  }
</style>