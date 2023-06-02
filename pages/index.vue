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
