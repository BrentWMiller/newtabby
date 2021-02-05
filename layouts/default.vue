<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-black-800;
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
