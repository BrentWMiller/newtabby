<template>
  <nav class="py-4">
    <div class="flex justify-between">
      <the-user :displayName="user.displayName" :photoURL="user.photoURL" />
      <the-clock />
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
