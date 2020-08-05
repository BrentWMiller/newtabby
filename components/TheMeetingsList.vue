<template>
  <div>
    <button @click="loadCalendar()">Load calendar</button>
    <ul v-if="events">
      <li v-for="event in events" :key="event.id">
        {{ event.summary }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    async loadCalendar() {
      console.log('load calendar');
      try {
        this.$store.dispatch('calendar/getEvents');
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState('calendar', ['events']),
  },
};
</script>

<style></style>
