<template>
  <div>
    <weather-icon v-if="weather.icon" :icon="weather.icon" :description="weather.description" />
    {{ temp }}&deg;F
  </div>
</template>

<script>
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
      // @TEMP Move key to config; Allow city to be set; Allow units to be set
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?id=5149222&appid=a8b03945dda88804988672da6b7bbdf0&units=imperial');
      const data = await res.json();

      if (!data) return;
      this.temp = Math.round(data.main.temp);
      this.weather = data.weather[0];
    },
  },
};
</script>

<style></style>
