<template>
  <h2 class="flex flex-col items-start space-y-1 font-medium text-left text-24">
    {{ greeting }},
    <br />
    <p class="text-primary-500">
      <span v-if="displayName">{{ displayName }}</span>
      <span v-else>How are you?</span>
    </p>
  </h2>
</template>

<script>
export default {
  props: {
    displayName: {
      type: String,
    },
  },
  computed: {
    greeting() {
      const date = new Date();
      const hour = date.getHours();
      let greeting = '';

      if (hour < 12) {
        greeting = 'Good Morning';
      } else if (hour < 18) {
        greeting = 'Good Afternoon';
      } else {
        greeting = 'Good Evening';
      }

      return greeting;
    }
  }
};
</script>

<style scoped>
</style>
