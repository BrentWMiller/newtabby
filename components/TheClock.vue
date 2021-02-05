<template>
  <div class="flex flex-col space-y-1 font-medium text-right">
    <time class="block leading-none uppercase text-32">{{ time }}</time>
    <time class="block text-primary-500 text-18">{{ date }}</time>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      time: moment().format('h:mm a'),
      date: moment().format('ddd, MMMM Do'),
    };
  },
  mounted() {
    setInterval(() => {
      this.time = moment().format('h:mm a');
    }, 1000);
  },
};
</script>

<style></style>
