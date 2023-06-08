<template>
  <div class="list">
    <div class="list__col">
      <div v-for="(i) in getColumbs?.first" :key="i.id" class="list__item wow slow fadeInUp">
        <div class="list__question" :class="{isOpen: i.isOpen}">
          <div v-html="i.question"></div>
          <button class="list__toggle" :class="{isOpen: i.isOpen}" @click="toggleFaq(i.id)"></button>
        </div>
        <Transition name="slide-fade">
          <div v-if="i.isOpen" class="list__answer" v-html="i.answer"></div>
        </Transition>
      </div>
    </div>
    <div class="list__col">
      <div v-for="(i) in getColumbs?.second" :key="i.id" class="list__item wow slow fadeInUp">
        <div class="list__question" :class="{isOpen: i.isOpen}">
          <div v-html="i.question"></div>
          <button class="list__toggle" :class="{isOpen: i.isOpen}" @click="toggleFaq(i.id)"></button>
        </div>
        <Transition name="slide-fade">
          <div v-if="i.isOpen" class="list__answer" v-html="i.answer"></div>
        </Transition>
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
    }
  },
  computed: {
    getColumbs() {
      const first = []
      const second = []
      const middle = Math.ceil(this.faqs.length / 2)
      for (let i = 0; i < this.faqs.length; i++) {
        if (i < middle) {
          first.push(this.faqs[i]);
        } else {
          second.push(this.faqs[i]);
        }
      }
      return {
        first,
        second
      }
    }
  },
  methods: {
    toggleFaq(id) {
      const item = this.faqs.find(i => i.id === id)
      item.isOpen = !item.isOpen
    }
  }
}
</script>
<style lang="scss" scoped>
  .list {
    display: flex;
    justify-content: space-between;
    &__col {
      width: calc(50% - 2rem);
      display: flex;
      flex-direction: column;
    }
    &__item {
      margin-bottom: 3.2rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__question {
      padding: 1rem 2.4rem;
      min-height: 9.08rem;
      font-size: 1.8rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #8C9091;
      &.isOpen {
        background-color: $accent;
        border: 1px solid $accent;
      }
    }
    &__toggle {
      flex-shrink: 0;
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      position: relative;
      margin-left: 2rem;
      &::before, &::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 0.1rem;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: transform 300ms ease-out;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(-90deg); 
      }
      &.isOpen {
        &::before {
          transform: translate(-50%, -50%) rotate(0); 
        }
      }
    }
    &__answer {
      padding: 2.4rem;
      font-size: 1.8rem;
      border: 1px solid #8C9091;
      border-top: 0;
    }
    @include mob {
      flex-direction: column;
      &__col {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 1.6rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
      &__item {
        margin-bottom: 1.6rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
      &__question {
        padding: 1.4rem 2.4rem;
        font-size: 1.6rem;
        min-height: 10.48rem;
      }
      &__answer {
        font-size: 1.6rem;
      } 
    }
  }
</style>

<style lang="scss">
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
    transform: translateY(-20px);
    opacity: 0;
  }

  .slide-fade-leave-active {
    transition: all 0.8s ease-out;
  }

  .slide-fade-enter-from {
    transform: translateY(-20px);
    opacity: 0;
  }
  .slide-fade-enter-to {
    transform: translateY(0px);
    opacity: 1;
  }
  .slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
</style>