<template>
  <div class="list">
    <a v-for="file in files" :key="file.id" :href="file.href" :download="file.name" class="list__item">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="stroke" d="M19 8.41421V21H5V3H13.5858L19 8.41421Z" stroke="white" stroke-width="2"/>
        <path class="fill" d="M9.72258 14.1876C9.72258 14.7943 9.28178 15.3751 8.46241 15.3751H7.90753V16.6923H7V13H8.46241C9.28178 13 9.72258 13.5808 9.72258 14.1876ZM8.81505 14.1876C8.81505 13.9957 8.66985 13.8142 8.42093 13.8142H7.90753V14.5609H8.42093C8.66985 14.5609 8.81505 14.3794 8.81505 14.1876Z" fill="white"/>
        <path class="fill" d="M13.4302 14.8462C13.4302 15.484 13.4302 15.7744 13.2487 16.07C12.9946 16.4797 12.6057 16.6923 12.0508 16.6923H10.6817V13H12.0508C12.6057 13 12.9946 13.2126 13.2487 13.6223C13.4302 13.9179 13.4302 14.2083 13.4302 14.8462ZM12.5227 14.8462C12.5227 14.2239 12.4968 14.1201 12.4242 14.0164C12.3412 13.892 12.2167 13.809 11.9886 13.809H11.5892V15.8833H11.9886C12.2167 15.8833 12.3412 15.8004 12.4242 15.6759C12.4968 15.5722 12.5227 15.4737 12.5227 14.8462Z" fill="white"/>
        <path class="fill" d="M17 13.809H15.3976V14.4572H16.7666V15.2662H15.3976V16.6923H14.49V13H17V13.809Z" fill="white"/>
      </svg>
      {{ file.name }}
    </a>
  </div>
</template>
<script>
export default {
  props: {
    files: {
      type: Array,
      default: () => [],
    }
  },
}
</script>
<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(2, 30rem);
    grid-gap: 0.4rem 1rem;
    &__item {
      display: inline-flex;
      align-items: center;
      transition: color 300ms;
      svg {
        flex-shrink: 0;
        width: 2.4rem;
        height: 2.4rem;
        object-fit: contain;
        margin-right: 0.8rem;
      }
      path {
        transition: fill 300ms, stroke 300ms;
      }
      &:hover {
        color: $accent;
        .stroke {
          stroke: $accent;
        }
        .fill {
          fill: $accent;
        }
      }
    }
    @include mob {
      grid-template-columns: 1fr;
      font-size: 1.4rem;
    }
  }
</style>