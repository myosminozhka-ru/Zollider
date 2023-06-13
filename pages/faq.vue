<template>
  <div class="FaqPage">
    <TheFaq :faqs="faqs" :page="'detail'"/>
  </div>
</template>

<script>
export default {
  name: 'FaqPage',
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
          answer: 'faq text',
        },
        {
          id: 3,
          isOpen: false,
          question: 'Какой продукт необходимо купить, чтобы принять участие в акции?',
          answer: 'faq text',
        },
        {
          id: 4,
          isOpen: false,
          question: 'Где можно зарегистрировать чек?',
          answer: 'faq text',
        },
        {
          id: 5,
          isOpen: false,
          question: 'Сколько чеков можно зарегистрировать?',
          answer: 'faq text',
        },
        {
          id: 6,
          isOpen: false,
          question: 'Кто может принять участие в Акции?',
          answer: 'faq text',
        },
        {
          id: 7,
          isOpen: false,
          question: 'Кто не может принимать участие в акции?',
          answer: 'faq text',
        },
        {
          id: 8,
          isOpen: false,
          question: 'Сколько призов я могу получить?',
          answer: 'faq text',
        },
        {
          id: 9,
          isOpen: false,
          question: 'Как часто проходят розыгрыши?',
          answer: 'faq text',
        },
        {
          id: 10,
          isOpen: false,
          question: 'До какого числа выдаются призы?',
          answer: 'faq text',
        },
        {
          id: 11,
          isOpen: false,
          question: 'Как узнать, что стали победителем?',
          answer: 'faq text',
        },
        {
          id: 12,
          isOpen: false,
          question: 'Когда и как можно получить приз?',
          answer: 'faq text',
        },
        {
          id: 13,
          isOpen: false,
          question: 'Надо ли платить налоги с приза?',
          answer: 'faq text',
        },
        {
          id: 14,
          isOpen: false,
          question: 'Почему не приняли ваш чек?',
          answer: 'faq text',
        },
        {
          id: 15,
          isOpen: false,
          question: 'Не получается зарегистрироваться',
          answer: 'faq text',
        },
        {
          id: 16,
          isOpen: false,
          question: 'Что делать, если возникли вопросы, ответов на которые нет в этом FAQ?',
          answer: 'faq text',
        },
        {
          id: 17,
          isOpen: false,
          question: 'Могут ли результаты розыгрышей быть аннулированы?',
          answer: 'faq text',
        },
      ]
    }
  },
  mounted() {
    if (process.client) {
      document.body.classList.add('isFaqPage')
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove('isFaqPage')
    }
  }
}
</script>

<style lang="scss">
  .FaqPage {
    padding-top: 20rem;
  }
</style>
