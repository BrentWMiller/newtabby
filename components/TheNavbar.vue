<template>
  <nav>
    <the-user :displayName="user.displayName" :photoURL="user.photoURL" />
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
