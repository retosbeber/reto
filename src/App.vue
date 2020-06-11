<template>
  <v-app>
    <loading-screen :show="loading" />
    <router-view />
    <v-snackbar
      v-model="$store.state.alerts.visible"
      :color="$store.state.alerts.color"
      :timeout="3000"
    >
      <span>
        {{ $store.state.alerts.text }}
      </span>
    </v-snackbar>
  </v-app>
</template>

<script>
import LoadingScreen from '@/components/LoadingScreen.vue';
// import MainLayout from '@/layouts/main.vue';

export default {
  name: 'App',
  components: {
    LoadingScreen,
    // MainLayout,
  },
  data: () => ({
    loading: false,
  }),
};
</script>
