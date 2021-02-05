<template>
  <div>
    <form action="https://www.google.com/search" class="relative">
      <label for="q" class="sr-only">Search</label>
      <input
        id="q"
        ref="search"
        name="q"
        type="search"
        placeholder="Search the web"
        class="flex-shrink-0 px-5 py-3 pr-12 text-white placeholder-gray-500 appearance-none bg-black-400 rounded-10px search">
        <button class="absolute transform -translate-y-1/2 right-3 top-1/2" aria-label="Search">
          <img src="/svgs/search.svg" alt="Search icon" width="24" height="24">
        </button>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    const input = this.$refs.search;
    input.focus();
  }
}
</script>

<style scoped lang="postcss">
  .search {
    min-width: 500px;
  }
</style>