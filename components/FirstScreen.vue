<template>
  <div class="block">
    <div class="block__bg">
      <img src="@/assets/img/main-bg-pc.jpg" alt="">
    </div>
    <div class="container">
      <div class="block__inner">
        <div class="block__content">
          <div class="h1 block__title"><h1>Ремонт для всей семьи — <br> это просто</h1></div>
          <div class="block__img">
            <img src="@/assets/img/first-screen.jpg" alt="zollider">
          </div>
          <div class="block__relative">
            <div class="block__text">
              <p>
                Просто, как купить продукцию бренда Zollider. Совершайте покупки
                продукции Zollider на сумму 
                <span class="accent-color">от 1000 рублей</span> в одном чеке (после
                применения всех скидок, купонов, бонусов по карте Магнит) в сети
                «Магнит Косметик» и гипермаркетах «Магнит».
                <br> Регистрируйте чеки и получите шанс выиграть сертификат на ремонт.
              </p>
            </div>
            <div class="block__subtitle">Период совершения покупок и регистрации чеков</div>
            <div class="block__date">03.07.2023-20.08.2023</div>
            <div class="block__btns">
              <a href="#podajte-zayavku" class="btn btn--fix btn--accent">Регистрируй чек</a>
              <a href="#kak-uchastvovat" class="btn btn--fix btn--border">Как выиграть?</a>
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
    padding-bottom: 9.6rem;
    margin-bottom: 15.6rem;
    position: relative;
    z-index: 2;
    &__inner {
      position: relative;
      z-index: 2;
    }
    &__content {
      padding-top: 20rem;
      width: 50%;
    }
    &__title {
      margin-bottom: 1.6rem;
    }
    &__relative {
      position: relative;
      z-index: 2;
    }
    &__text {
      font-size: 1.8rem;
      max-width: 67.2rem;
      margin-bottom: 8rem;
    }
    &__subtitle {
      font-size: 1.8rem;
    }
    &__date {
      font-weight: 700;
      font-size: 3.2rem;
      margin-bottom: 1.6rem;
    }
    &__btns {
      display: flex;
      .btn {
        margin-right: 1.6rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    &__img {
      display: none;
    }
    &__bg {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }
    @include mob {
      overflow: hidden;
      padding-bottom: 0;
      margin-bottom: 4.8rem;
      &__inner {
        flex-direction: column-reverse;
      }
      &__content {
        padding-top: 10.6rem;
        width: 100%;
      }
      &__title {
        margin-bottom: -0.8rem;
      }
      &__text {
        font-size: 1.6rem;
        max-width: none;
        margin-bottom: 2.4rem;
      }
      &__subtitle {
        font-size: 1.6rem;
      }
      &__date {
        font-size: 2.4rem;
      }
      &__btns {
        flex-direction: column;
        .btn {
          margin-right: 0;
          margin-bottom: 1.6rem;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      &__img {
        display: block;
        width: 100vw;
        position: relative;
        left: -1.6rem;
        margin-bottom: -0.4rem;
      }
      &__bg {
        display: none;
      }
    }
  }
</style>