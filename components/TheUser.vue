<template>
  <div class="relative">
    <button @click="showMenu = !showMenu" type="button" class="relative flex items-center justify-center bg-black-400 rounded-15px menu">
      <img
        class="absolute top-0 left-0 opacity-25 rounded-15px"
        v-if="displayName"
        :src="photoURL"
        :alt="`Photo for ${displayName ? displayName : 'user'}`"
        width="50"
        height="50"
      />
      <img class="relative" src="/svgs/menu-toggle.svg" alt="Menu icon" width="19" height="12">
      <span class="absolute top-0 left-0 w-full h-full overflow-hidden rounded-15px">
        <span class="absolute block w-full h-full glow"></span>
      </span>
      <span class="absolute bottom-0 right-0 rounded-4px bg-accent-500 notification"></span>
    </button>

    <ul v-show="showMenu" class="absolute right-0 w-64 overflow-hidden top-full bg-black-400 rounded-4px">
      <li v-if="!displayName">
        <button @click="signIn" class="block w-full px-6 py-4 text-left hover:bg-black-700">Login</button>
      </li>
      <template v-if="displayName">
        <li>
          <button @click="signIn" class="block w-full px-6 py-4 text-left text-gray-500 hover:bg-black-700">{{ email }}</button>
        </li>
        <li>
          <nuxt-link to="/settings" class="block w-full px-6 py-4 text-left hover:bg-black-700">Settings</nuxt-link>
        </li>
        <li>
          <button @click="logout" class="block w-full px-6 py-4 text-left hover:bg-black-700">Logout</button>
        </li>
      </template>
    </ul>
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
    email: {
      type: String,
    },
  },
  data() {
    return {
      showMenu: false,
    }
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
  
<style scoped lang="postcss">
  .menu {
    width: 50px;
    height: 50px;
  }

  .notification {
    width: 10px;
    height: 10px;
    box-shadow: 0 0 0 3px theme(colors.black.800);
  }

  .glow {
    background: radial-gradient(at bottom right, theme(colors.accent.500), rgba(255,255,255,0), rgba(255,255,255,0));
  }
</style>