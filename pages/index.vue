<template>
  <div class="IndexPage">
    <FirstScreen/>
    <SecondScreen/>
    <ThirdScreen/>
    <FourthScreen/>
    <FifthScreen/>
    <SixthScreen/>
    <SeventhScreen/>
    <TheFaq :faqs="faqs"/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      faqs: [
        {
          id: 1,
          isOpen: false,
          question: 'Где проводится акция, в каких магазинах?',
          answer: 'Акция проходит на территории Российской Федерации, продукт можно приобрести во всех магазинах сети «Магнит Косметик» и гипермаркетах «Магнит».',
        },
        {
          id: 2,
          isOpen: false,
          question: 'Какие сроки проведения акции?',
          answer: 'Период совершения покупки и регистрации чеков: с 00:00:00 03.07.2023 по 23:59:59, 20.08.2023. <br /> Розыгрыш главного приза пройдёт 24.08.2023.',
        },
        {
          id: 3,
          isOpen: false,
          question: 'Какой продукт необходимо купить, чтобы принять участие в акции?',
          answer: 'Со списком продукции Zollider, участвующей в Акции можно ознакомиться в Правилах Акции.',
        },
        {
          id: 4,
          isOpen: false,
          question: 'Где можно зарегистрировать чек?',
          answer: 'Чек можно зарегистрировать на сайте <a href="https://promo.zollider.com/">https://promo.zollider.com/</a> . Пожалуйста, сохраняйте ваши чеки до конца Акции.',
        },
        {
          id: 5,
          isOpen: false,
          question: 'Сколько чеков можно зарегистрировать?',
          answer: 'Вы можете зарегистрировать неограниченное количество чеков, но один и тот же чек не может быть зарегистрирован дважды.',
        },
        {
          id: 6,
          isOpen: false,
          question: 'Кто может принять участие в Акции?',
          answer: 'Работники Организатора и лица, представляющие интересы Организатора, а также члены их семей; лица, признанные в установленном порядке аффилированными с Организатором; работники и представители третьих лиц, имеющих договорные отношения с Организатором, связанные с организацией и/или проведением Акции, а также члены их семей.',
        },
      ]
    }
  },
  mounted() {
    if (process.client) {
      document.body.classList.add('isIndexPage')
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove('isIndexPage')
    }
  }
}
</script>
