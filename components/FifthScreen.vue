<template>
  <div class="block" id="kak-uchastvovat">
    <div class="container">
      <div class="block__inner">
        <div class="block__top wow slow fadeInUp">
          <div class="h2 block__title">
            <h3>Как выиграть?</h3>
          </div>
          <div class="block__text">* Со списком продукции, участвующей в Акции можно ознакомиться в <a href="/files/pravila-akcii.pdf" download="pravila-akcii.pdf" class="accent-color">Правилах Акции</a></div>
        </div>
        <div class="block__list">
          <div class="block__item wow slow fadeInUp">
            <div class="block__img">
              <img src="@/assets/img/step1.png" alt="">
            </div>
            <div class="block__relative">
              <div class="block__subtitle">ШАГ 1</div>
              <div class="block__text">Покупайте продукцию* Zollider в сети «Магнит Косметик» или в гипермаркетах «Магнит» на сумму <span class="accent-color">от 1000 рублей</span> в одном чеке (после применения всех скидок, купонов, бонусов по карте Магнит).</div>
            </div>
          </div>
          <div class="block__item wow slow fadeInUp">
            <div class="block__img">
              <img src="@/assets/img/step2.png" alt="">
            </div>
            <div class="block__relative">
              <div class="block__subtitle">ШАГ 2</div>
              <div class="block__text">Зарегистрируйте чек с QR-кодом. Обязательно ознакомьтесь со всеми правилами загрузки чека.</div>
              <a href="#podajte-zayavku" class="btn btn--accent btn--fix">Зарегистрировать чек</a>
            </div>
          </div>
          <div class="block__item wow slow fadeInUp">
            <div class="block__img">
              <img src="@/assets/img/step3.png" alt="">
            </div>
            <div class="block__relative">
              <div class="block__subtitle">ШАГ 3</div>
              <div class="block__text">Всё готово! Осталось только дождаться розыгрыша главных призов — 3 сертификатов на ремонт, который состоится <span class="accent-color">24 августа 2023 г.</span></div>
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
  margin-bottom: 10.4rem;
  &__top {
    margin-bottom: 5.6rem;
  }
  &__title {
    margin-bottom: 1.6rem;
  }
  &__text {
    font-size: 1.8rem;
    margin-bottom: 2.7rem;
    a {
      text-decoration: underline;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
  }
  &__item {
    padding: 3.2rem;
    &:nth-child(1) {
      img {
        width: 149%;
        left: -3rem;
      }
    }
    &:nth-child(2) {
      img {
        top: -3rem;
      }
    }
    &:nth-child(3) {
      img {
        width: 145%;
      }
    }
  }
  &__img {
    height: 30.4rem;
    img {
      max-width: none;
      position: relative;
    }
  }
  &__relative {
    position: relative;
    z-index: 2;
  }
  &__subtitle {
    font-weight: 700;
    font-size: 3.2rem;
    margin-bottom: 0.4rem;
  }
  @include mob {
    margin-bottom: 4.8rem;
    overflow: hidden;
    &__top {
      margin-bottom: 2rem;
    }
    &__text {
      font-size: 1.6rem;
      margin-bottom: 2.4rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__list {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 2.4rem;
    }
    &__item {
      padding: 0;
      &:nth-child(1) {
        img {
          width: 161%;
          left: -3rem;
        }
      }
      &:nth-child(2) {
        img {
          top: -2.5rem;
          left: 0.4rem;
        }
      }
      &:nth-child(3) {
        img {
          width: 186%;
          left: -2.9rem;
          top: 1rem;
        }
        .block__img {
          margin-bottom: 5.5rem;
        }
      }
    }
    &__img {
      height: 25rem;
    }
    &__subtitle {
      font-size: 2.4rem;
    }
  }
}
</style>
