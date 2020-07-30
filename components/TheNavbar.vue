<template>
  <nav>
    <div class="flex justify-between">
      <the-user :displayName="user.displayName" :photoURL="user.photoURL" />
      <the-clock></the-clock>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    user: {
      type: Object
    }
  }
};
</script>

<style></style>
