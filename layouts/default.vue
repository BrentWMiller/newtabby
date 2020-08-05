<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
body {
  @apply bg-black-500;
  @apply font-body text-white;
}
</style>

<script>
export default {
  async mounted() {
    await this.$store.dispatch('user/initClient');
  },
};
</script>
