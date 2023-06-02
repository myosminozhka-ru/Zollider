<template>
</template>
<script>
export default {
  mounted() {
    if (process.client) {
      new WOW().init();
      const inputs = document.querySelectorAll('input[type="tel"]')
      const instances = []
      inputs.forEach(el => {
        instances.push(
          IMask(el, {mask: '+{7 }000-000-00-00'})
        )
      })
    }
  },
}
</script>