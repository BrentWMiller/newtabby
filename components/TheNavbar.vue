<template>
  <nav class="py-4">
    <div class="flex justify-between">

      <the-greeting :displayName="user.displayName" />

      <div class="flex space-x-4">
        <the-clock />
        <the-user :displayName="user.displayName" :photoURL="user.photoURL" :email="user.email"/>
      </div>
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
