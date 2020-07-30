<template>
  <div class="container mx-auto">
    <h1 class="sr-only">New Tabby</h1>

    <the-navbar :user="user" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("user", ["user"])
  }
};
</script>

<style></style>
