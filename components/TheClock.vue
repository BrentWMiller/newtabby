<template>
  <div>
    {{ time }}
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      time: moment().format("h:mm a")
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
