<template>
</template>
<script>
export default {
  mounted() {
    if (process.client) {
      new WOW().init();
    }
  },
}
</script>