<template>
  <div class="block" id="pravila-akcii">
    <div class="container">
      <div class="block__inner">
        <div class="h2 block__title wow slow fadeInUp">
          <h3>ПРАВИЛА ЗАГРУЗКИ ЧЕКА</h3>
        </div>
        <div class="block__list">
          <div class="block__item wow slow fadeInUp">
            <div class="block__img">
              <img src="@/assets/img/rule1.png" alt="">
            </div>
            <div class="block__relative">
              <div class="block__subtitle">Убедитесь, что QR-код не порван, <br class="only-pc"> не смазан, не залит жидкостью,<br class="only-pc"> хорошо напечатан и на нем нет<br class="only-pc"> изгибов и вмятин.</div>
            </div>
          </div>
          <div class="block__item wow slow fadeInUp">
            <div class="block__img">
              <img src="@/assets/img/rule2.png" alt="">
            </div>
            <div class="block__relative">
              <div class="block__subtitle">Делайте фото с хорошим<br class="only-pc"> освещением, на ровной поверхности.<br class="only-pc"> Держите камеру строго<br class="only-pc"> перпендикулярно над QR-кодом<br class="only-pc"> и старайтесь не наклонять смартфон.</div>
            </div>
          </div>
          <div class="block__item wow slow fadeInUp">
            <div class="block__img">
              <img src="@/assets/img/rule3.png" alt="">
            </div>
            <div class="block__relative">
              <div class="block__subtitle">Проверьте, чтобы на чеке была<br class="only-pc"> следующая информация: QR-код, дата и<br class="only-pc"> время покупки, наименование торговой<br class="only-pc"> сети, адрес магазина, итоговая сумма,<br class="only-pc"> время покупки, ИНН, ФН, ФД, ФП/ФПД,<br class="only-pc"> наименование приобретённой продукции.</div>
            </div>
          </div>
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
  margin-bottom: 14rem;
  overflow: hidden;
  &__title {
    margin-bottom: 5.6rem;
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 4rem;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    &:nth-child(1) {
      img {
        width: 65rem;
        left: -7rem;
        top: 2.7rem;
      }
    }
    &:nth-child(2) {
      margin-top: -6rem;
      img {
        width: 55.5rem;
        left: 18rem;
        top: 0rem;
      }
    }
    &:nth-child(3) {
      margin-top: -13rem;
      img {    
        width: 69.5rem;
        left: -8rem;
        top: 0.4rem;
      }
    }
  }
  &__img {
    width: 50%;
    img {
      max-width: none;
      position: relative;
    }
  }
  &__relative {
    width: 50%;
    position: relative;
    z-index: 2;
  }
  &__subtitle {
    font-weight: 700;
    font-size: 3.2rem;
    letter-spacing: 0.083em;
  }
  @include mob {
    margin-bottom: 4.8rem;
    &__title {
      margin-bottom: 0rem;
    }
    &__item {
      display: block;
      margin-bottom: 5.3rem;
      &:last-child {
        margin-bottom: 0;
      }
      &:nth-child(1) {
        .block__img {
          height: 29.4rem;
        }
        img {
          width: 41.4rem;
          left: -6rem;
          top: -0.4rem;
        }
      }
      &:nth-child(2) {
        margin-top: -0rem;
        .block__img {
          height: 51rem;
        }
        img {
          width: 44.6rem;
          left: 3rem;
          top: 0rem;
        }
      }
      &:nth-child(3) {
        margin-top: -0rem;
        .block__img {
          height: 24.4rem;
        }
        img {    
          width: 38.3rem;
          left: -2.6rem;
          top: -8.4rem;
        }
      }
    }
    &__img {
      width: 100%;
    }
    &__relative {
      width: 100%;
    }
    &__subtitle {
      font-size: 1.6rem;
    }
  }
}
</style>
