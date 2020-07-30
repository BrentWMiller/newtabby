<template>
  <div>
    {{ time }}<br />
    {{ date }}
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      time: moment().format("h:mm a"),
      date: moment().format("dddd, MMMM Do")
    };
  },
  mounted() {
    setInterval(() => {
      this.time = moment().format("h:mm a");
    }, 1000);
  }
};
</script>

<style></style>
