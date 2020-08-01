<template>
  <div>
    <span v-html="svg"></span>
    {{ description }}
  </div>
</template>

<script>
import feather from 'feather-icons';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      svg: '',
    };
  },
  mounted() {
    if (this.icon === '01d') {
      this.svg = feather.icons.sun.toSvg();
    } else if (this.icon === '01n') {
      this.svg = feather.icons.moon.toSvg();
    } else if (this.icon.includes('02') || this.icon.includes('03') || this.icon.includes('04')) {
      this.svg = feather.icons.cloud.toSvg();
    } else if (this.icon.includes('09')) {
      this.svg = feather.icons['cloud-rain'].toSvg();
    } else if (this.icon.includes('10')) {
      this.svg = feather.icons['cloud-drizzle'].toSvg();
    } else if (this.icon.includes('11')) {
      this.svg = feather.icons['cloud-lightning'].toSvg();
    } else if (this.icon.includes('13')) {
      this.svg = feather.icons['cloud-snow'].toSvg();
    } else if (this.icon.includes('50')) {
      this.svg = feather.icons.wind.toSvg();
    } else {
      this.svg = '';
    }
  },
};
</script>

<style></style>
