<template>
  <div class="block" id="podajte-zayavku">
    <div class="block__bg">
      <img class="only-pc" src="@/assets/img/reg-bg-pc.jpg" alt="">
      <img class="only-sp" src="@/assets/img/reg-bg-sp.jpg" alt="">
    </div>
    <div class="container">
      <div class="block__inner">
        <div class="block__left wow slow fadeInUp">
          <div class="h2 block__title">
            <h3>зарегистрируйте <br> чек с QR-кодом</h3>
          </div>
          <div class="block__img">
            <img src="@/assets/img/zolider-reg.jpg" alt="">
          </div>
        </div>
        <div class="block__right wow slow fadeInUp">
          <TheForm/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.block {
  margin-bottom: 12.3rem;
  position: relative;
  z-index: 2;
  &__inner {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }
  &__left {
    width: calc(50% - 2rem);
  }
  &__img {
    position: relative;
    left: -6rem;
    img {
      display: none;
    }
  }
  &__title {
    margin-bottom: 5rem;
  }
  &__right {
    width: calc(50% - 2rem);
  }
  &__bg {
    position: absolute;
    left: 0;
    top: 18.7rem;
    z-index: 1;
  }
  @include mob {
    margin-bottom: 4.8rem;
    &__inner {
      display: block;
    }
    &__left {
      width: 100%;
    }
    &__img {
      position: relative;
      left: 0;
      img {
        display: block;
        opacity: 0;
      }
    }
    &__title {
      margin-bottom: 5rem;
    }
    &__right {
      width: 100%;
      padding-top: 0.3rem;
    }
    &__bg {
      top: -4.9rem;
    }
  }
}
</style>
