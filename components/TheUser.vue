<template>
  <div>
    <img
      class="rounded-15"
      v-if="displayName"
      :src="photoURL"
      :alt="`Photo for ${displayName ? displayName : 'user'}`"
    />
    <button @click="signIn">Sign in</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  props: {
    displayName: {
      type: String,
    },
    photoURL: {
      type: String,
    },
  },
  methods: {
    async signIn() {
      try {
        await this.$store.dispatch('user/signInWithGoogle');
      } catch (error) {
        console.error(error);
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('user/logout');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
  
<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>