<template>
  <div>
    <div class="flex items-center">
      <img
        class="rounded-full"
        v-if="displayName"
        :src="photoURL"
        :alt="`Photo for ${displayName ? displayName : 'user'}`"
      />
      <span class="ml-4 text-left" v-if="displayName"
        >Good morning,<br />{{ displayName }}</span
      >
    </div>
    <button @click="signIn">Sign in</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  props: {
    displayName: {
      type: String
    },
    photoURL: {
      type: String
    }
  },
  methods: {
    async signIn() {
      try {
        await this.$store.dispatch("user/signInWithGoogle");
      } catch (error) {
        console.error(error);
      }
    },
    async logout() {
      try {
        await this.$store.dispatch("user/logout");
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
