<template>
  <nav class="py-4">
    <div class="flex justify-between">
      <the-greeting :displayName="user.displayName" />
      <the-clock />
      <the-user :displayName="user.displayName" :photoURL="user.photoURL" />
      <the-weather />
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style></style>
