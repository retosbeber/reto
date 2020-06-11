<template>
  <div class="wrapper">
    <!-- <v-app-bar
      app
      color="white"
      elevate-on-scroll
      scroll-target="#content"
    >
      <slot name="topbar"></slot>
    </v-app-bar> -->
    <v-navigation-drawer
      v-if="!hideSidebar" fixed
      :app="app"
      clipped
    >
      <slot name="sidebar"></slot>
    </v-navigation-drawer>

    <v-content>
      <slot name="content" />
    </v-content>

    <v-navigation-drawer
      v-if="!hideAside"
      :app="app"
      clipped
      right
      width="25%"
    >
      <slot name="aside"></slot>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'TripletLayout',
  data: () => ({
    sidebar: true,
  }),
  props: {
    app: {
      type: Boolean,
      default: false,
    },
    hideSidebar: {
      type: Boolean,
      default: false,
    },
    hideAside: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
