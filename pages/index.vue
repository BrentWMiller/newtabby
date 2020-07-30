<template>
  <div class="container mx-auto">
    <h1>New Tabby</h1>
    <the-navbar :user="user" />

    <button @click="signIn">
      {{ isLoggedIn ? "Switch account" : "Sign in" }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("user", ["isLoggedIn"]),
    ...mapGetters("user", ["user"])
  },
  methods: {
    async signIn() {
      try {
        await this.$store.dispatch("user/signInWithGoogle");
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style></style>
