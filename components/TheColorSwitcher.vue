<template>
  <button @click="changeColor" class="p-10 bg-primary-500 rounded"></button>
</template>

<script>
export default {
  methods: {
    changeColor() {
      const root = document.documentElement;
      root.style.setProperty("--color-primary-500", "#021dfe");
    }
  }
};
</script>

<style></style>
