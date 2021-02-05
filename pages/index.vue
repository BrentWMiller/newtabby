<template>
  <div class="container mx-auto">
    
    <div class="mt-4">
      <img src="/svgs/logo.svg" alt="New Tabby Logo" width="71" height="30">
      <h1 class="sr-only">New Tabby</h1>
    </div>

    <the-navbar :user="user" />

    <the-weather />

    <the-events-list />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('user', ['user']),
  },
};
</script>

<style></style>
