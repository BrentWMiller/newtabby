<template>
  <div>
    <h2 class="sr-only">Events</h2>
    <ul v-if="events" class="max-w-md bg-black-400 rounded-10px">
      <li v-for="event in events" :key="event.id">
        <a :href="event.htmlLink" target="_blank" class="block px-6 py-4 hover:bg-black-700">
          <div class="flex justify-between space-x-4">
            <span class="font-bold">{{ event.summary }}</span>
            <span class="text-gray-500">{{ formattedDateTime(event.start) }}</span>
          </div>
          <p class="text-gray-500">{{ event.description }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';
import { mapState } from 'vuex';

export default {
  mounted() {
    try {
      this.$store.dispatch('calendar/getEvents');
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    formattedDateTime(date) {
      if (!date) return;
      return moment(date.dateTime).fromNow(true);
    }
  },
  computed: {
    ...mapState('calendar', ['events']),
  },
};
</script>

<style></style>
