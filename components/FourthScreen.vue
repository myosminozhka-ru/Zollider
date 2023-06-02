<template>
  <div class="block" id="podajte-zayavku">
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
  margin-bottom: 2.7rem;
  &__inner {
    display: flex;
    gap: 4rem;
  }
  &__left {
    width: 50%;
  }
  &__img {
    position: relative;
    left: -6rem;
  }
  &__title {
    margin-bottom: 5rem;
  }
  &__right {
    width: 50%;
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
    }
    &__title {
      margin-bottom: 5rem;
    }
    &__right {
      width: 100%;
    }
  }
}
</style>
