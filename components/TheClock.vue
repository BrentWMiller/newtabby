<template>
  <datetime class="font-medium text-right">
    <div class="leading-none uppercase text-32">{{ time }}</div>
    <div class="text-primary-500 text-18">{{ date }}</div>
  </datetime>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      time: moment().format('h:mm a'),
      date: moment().format('dddd, MMMM Do'),
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
