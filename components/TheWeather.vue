<template>
  <div class="text-right">
    <weather-icon v-if="weather.icon" :icon="weather.icon" :description="weather.description" />
    Feels like {{ temp }}&deg;F
  </div>
</template>

<script>
import NT_CONFIG from '../nt.config.js';

export default {
  data() {
    return {
      temp: 0,
      weather: new Object(),
    };
  },
  beforeMount() {
    this.getWeather();
  },
  methods: {
    async getWeather() {
      // TODO Allow city to be set; Allow units to be set
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=5149222&appid=${NT_CONFIG.openweathermap.apiKey}&units=imperial`);
      const data = await res.json();

      if (!data) return;
      this.temp = Math.round(data.main.feels_like);
      this.weather = data.weather[0];
    },
  },
};
</script>

<style></style>
