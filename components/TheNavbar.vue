<template>
  <nav>
    <h2>
      <strong>Good morning</strong
      >{{ user.displayName ? `, ${user.displayName}` : "" }}
    </h2>
    <the-user :displayName="user.displayName" :photoURL="user.photoURL" />
    <the-clock></the-clock>
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
