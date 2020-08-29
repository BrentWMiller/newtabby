<template>
  <div>
    <div class="flex items-center">
      <h1 class="font-medium text-left text-24" v-if="displayName">
        Good morning,
        <br />
        <span class="text-primary-500">{{ displayName }}</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    displayName: {
      type: String,
    },
  },
};
</script>

<style scoped>
</style>
