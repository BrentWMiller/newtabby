<template>
  <div class="flex items-center">
    <img
      class="rounded-full"
      v-if="displayName"
      :src="photoURL"
      :alt="`Photo for ${displayName ? displayName : 'user'}`"
    />
    <span class="ml-4" v-if="displayName">{{ displayName }}</span>
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
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
