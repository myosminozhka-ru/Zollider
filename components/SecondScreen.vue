<template>
  <div class="block">
    <div class="container">
      <div class="block__inner">
          <div class="h2 block__title wow slow fadeInUp">
            <h2>
                УЧАСТВУЙТЕ В АКЦИИ
                <br> И ВЫИГРЫВАЙТЕ 
                <br><span class="accent-color">1 ИЗ 3 СЕРТИФИКАТОВ </span>
                <br>ПО 50 000 РУБЛЕЙ
            </h2>
          </div>
          <div class="block__right">
            <div class="block__imgs wow slow fadeInUp">
              <div class="block__img block__img--3">
                <img src="@/assets/img/sertificate.jpg" alt="Сертификат">
              </div>
              <div class="block__img block__img--2">
                <img src="@/assets/img/sertificate.jpg" alt="Сертификат">
              </div>
              <div class="block__img block__img--1">
                <img src="@/assets/img/sertificate.jpg" alt="Сертификат">
              </div>
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
    margin-bottom: 3.4rem;
    &__inner {
      display: flex;
      align-items: center;
    }
    &__title {
      width: calc(50% - 2rem);
    }
    &__right {
      width: calc(50% - 2rem);
    }
    &__imgs {
      position: relative;
      padding-top: 4rem;
    }
    &__img {
      width: 52.5rem;
      position: relative;
      &--2 {
        position: absolute;
        left: 8rem;
        bottom: 2.4rem;
      }
      &--3 {
        position: absolute;
        left: 11.6rem;
        bottom: 5rem;
      }
    }
    @include mob {
      margin-bottom: 4.8rem;
      &__inner {
        display: block;
      }
      &__title {
        width: 100%;
        margin-bottom: 3.6rem;
      }
      &__right {
        width: 100%;
      }
      &__imgs {
        padding-top: 3rem;
      }
      &__img {
        width: 25rem;
        &--2 {
          left: 4rem;
          bottom: 1rem;
        }
        &--3 {
          left: 5.6rem;
          bottom: 2.3rem;
        }
      }
    }
  }
</style>