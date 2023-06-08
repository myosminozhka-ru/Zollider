<template>
  <div class="block">
    <div class="container">
      <div class="block__inner wow slow fadeInUp">
        <div class="block__left wow slow fadeInUp">
          <div class="h1 block__title">
            <h3>Совет</h3>
          </div>
          <div class="block__text">Если чек очень длинный, сделайте фото его нижней части <br class="only-pc"> с QR-кодом</div>
          <a href="#podajte-zayavku" class="btn btn--fix btn--dark">Зарегистрировать чек</a>
        </div>
        <div class="block__right">
          <div class="block__img">
            <img src="@/assets/img/check-hand.png" alt="qr-code">
          </div>
          <div class="block__qr-code">
            <img src="@/assets/ico/qr-code.svg" alt="qr-code" class="wow slower fadeIn">
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
    padding-top: 3.8rem;
    margin-bottom: 14.2rem;
    &__inner {
      display: flex;
      justify-content: space-between;
      position: relative;
      background-image: url(@/assets/img/sovet-bg.jpg);
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__left {
      width: 73.3rem;
      position: relative;
      z-index: 2;
      padding: 5.7rem 9.2rem;
      padding-right: 0;
      padding-bottom: 4.8rem;
    }
    &__title {
      margin-bottom: 0.6rem;
    }
    &__text {
      font-size: 1.8rem;
      margin-bottom: 5rem;
    }
    &__right {
      width: 50%;
    }
    &__img {
      width: 85.2rem;
      position: absolute;
      right: 0;
      bottom: 0;
      img {
        display: block;
        max-width: none;
      }
    }
    &__qr-code {
      position: absolute;
      right: 36.3rem;
      top: 17.2rem;
      width: 14.4rem;
      height: 14.4rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    @include mob {
      padding-top: 0;
      margin-bottom: 4.8rem;
      overflow: hidden;
      &__inner {
        display: block;
        background-image: url(@/assets/img/sovet-bg-sp.jpg);
      }
      &__left {
        width: 100%;
        padding: 4.8rem 1.8rem 0;
      }
      &__title {
        font-size: 4rem;
        margin-bottom: 0.8rem;
      }
      &__text {
        font-size: 1.6rem;
        margin-bottom: 2.4rem;
      }
      &__right {
        width: 100%;
        padding-top: 3rem;
      }
      &__img {
        width: 100%;
        position: static;
        img {
          display: block;
          position: relative;
          width: 53.2rem;
          left: -15rem;
        }
      }
      &__qr-code {
        right: 17rem;
        bottom: 3.9rem;
        top: auto;
        width: 9rem;
        height: 9rem;
      }
    }
  }
</style>