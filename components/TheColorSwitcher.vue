<template>
  <button @click="changeColor" class="p-10 rounded bg-accent-500"></button>
</template>

<script>
export default {
  methods: {
    changeColor() {
      const root = document.documentElement;
      root.style.setProperty("--color-accent-500", "#fece02");
    }
  }
};
</script>

<style></style>
