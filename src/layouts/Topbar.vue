<template>
  <div class="wrapper">
    <v-app-bar
      :app="app"
      :color="color"
      :elevate-on-scroll="elevate"
      :extended="extended"
      :fixed="fixed"
      :flat="!elevate"
      clipped-left
      clipped-right
    >
      <slot name="topbar"></slot>

      <!-- <slot name="extension" slot="extension"></slot> -->
      <div slot="extension" v-if="extended">
        <slot name="extension"></slot>
      </div>

    </v-app-bar>

    <slot name="content" />
  </div>
</template>

<style scoped>
  >>> .v-toolbar__content {
    border-bottom: 1px solid #d4d9dd;
  }
</style>

<script>
export default {
  name: 'TopbarLayout',
  props: {
    app: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'white',
    },
    elevate: {
      type: Boolean,
      default: false,
    },
    extended: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
