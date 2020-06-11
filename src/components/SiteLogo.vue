<template>
  <img :src="logo">
</template>

<style scoped>
  img {
    height: 24px;
  }
</style>

<script>
import logo from '@/assets/img/logo.png';

export default {
  name: 'SiteLogo',
  computed: {
    logo() {
      return this.$settings.logo || logo;
    },
  },
};
</script>
