<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__contacts wow slow fadeInUp">
          <div class="footer__logo">
            <img src="@/assets/ico/logo.svg" alt="logo">
          </div>
          <div class="footer__contactlist">
            <ContacList/>
          </div>
          <SocialLinks/>
        </div>
        <div class="footer__texts wow slow fadeInUp">
          <div class="footer__title">Правила акции коротко:</div>
          <div class="footer__text">Организатор акции - ООО «Вектор Дистрибьюшн». Общий срок проведения акции <span class="accent-color">с 03 июля 2023 года по 24 сентября 2023 года</span>, включая период выдачи призов. Период покупки продукции с 03 июля 2023 года по 20 августа 2023 года. Внешний вид упаковок может отличаться от их изображения на рекламных и/или информационных материалах. Акция действует при наличии чека с продукцией Zollider. Сохраняйте чек до окончания Акции периода регистрации чеков. Количество призов ограничено. Подробности об организаторе акции, правилах ее проведения, количестве призов, сроках, месте и порядке их получения <a href="#" class="accent-color">здесь</a>, где последнее слово является ссылкой на страницу Правил акций</div>
        </div>
        <div class="footer__copy wow slow fadeInUp">© 2023 Zollider. Все права защищены</div>
        <div class="footer__files wow slow fadeInUp">
          <FileList :files="files"/>
          <a href="https://myosminozhka.ru/" target="_blank" class="footer__osmi-logo">
            <img src="@/assets/ico/osmi.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      files: [
        {
          id: 1,
          name: 'Правила акции',
          href: '#',
        },
        {
          id: 2,
          name: 'Политика конфиденциальности',
          href: '#',
        },
        {
          id: 3,
          name: 'Пользовательское соглашение',
          href: '#',
        },
        {
          id: 4,
          name: 'Правила использования cokies',
          href: '#',
        },
      ]
    }
  }
}
</script>
<style lang="scss">
  .footer {
    padding-bottom: 4.8rem;
    &__inner {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-gap: 4.8rem 4rem;
    }
    &__logo {
      width: 17.5rem;
      margin-bottom: 4rem;
    }
    &__contactlist {
      margin-bottom: 2.4rem;
    }
    &__title {
      font-weight: 700;
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }
    &__files {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__osmi-logo {
      width: 21.8rem;
    }
    @include mob {
      padding-bottom: 2.4rem;
      &__inner {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2.4rem;
      }
      &__logo {
        width: 11.2rem;
        margin-bottom: 2.4rem;
      }
      &__contactlist {
        margin-bottom: 0.8rem;
      }
      &__title {
        font-size: 1.6rem;
      }
      &__text {
        font-size: 1.4rem;
      }
      &__copy {
        font-size: 1.4rem;
      }
      &__files {
        flex-direction: column;
        align-items: stretch;
        gap: 1.6rem;
      }
      &__osmi-logo {
        width: 15rem;
      }
    }
  }
</style>