<template>
  <div class="faq" id="faq">
    <div class="container">
      <div class="h2 faq__title wow slow fadeInUp">
        <h3>FAQ</h3>
      </div>
      <div class="faq__list">
        <FaqList :faqs="faqs"/>
      </div>
      <div v-if="page !== 'detail'" class="faq__footer wow slow fadeInUp">
        <nuxt-link to="/faq" class="btn btn--fix btn--accent">Смотреть все вопросы</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    faqs: {
      type: Array,
      default: () => [],
    },
    page: {
      type: String,
      default: '',
    }
  }
}
</script>
<style lang="scss" scoped>
  .faq {
    margin-bottom: 14rem;
    &__title {
      margin-bottom: 5.6rem;
    }
    &__list {
      margin-bottom: 4.2rem;
    }
    &__footer {
      display: flex;
      justify-content: center;
    }
    @include mob {
      margin-bottom: 4.9rem;
      &__title {
        margin-bottom: 1.6rem;
      }
      &__list {
        margin-bottom: 2.4rem;
      }
      &__footer {
        display: block;
      }
    }
  }
</style>