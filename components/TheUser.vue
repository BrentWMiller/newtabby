<template>
  <div>
    <img
      v-if="displayName"
      :src="photoURL"
      :alt="`Photo for ${displayName ? displayName : 'user'}`"
    />
    <span v-if="displayName">{{ displayName }}</span>
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

<style></style>
