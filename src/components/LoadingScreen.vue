<template>
  <div
    v-if="show"
    class="full-width"
  >
    Loading...
  </div>
</template>

<style>
  .full-width {
    background-color: var(--v-primary-base);
    color: #D0D0D0;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
  }
</style>

<script>
export default {
  name: 'Loading',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
