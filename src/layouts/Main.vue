<template>
  <TopbarLayout app elevate>
    <MainTopbar slot="topbar" />

    <TripletLayout
      app
      slot="content"
      :hide-aside="!hasAside"
    >
      <main-sidebar slot="sidebar" />

      <div slot="content">
        <slot/>
      </div>

      <div slot="aside">
        <router-view name="aside"></router-view>
      </div>
    </TripletLayout>
  </TopbarLayout>
</template>

<style scoped>
</style>

<script>
import TopbarLayout from '@/layouts/Topbar.vue';
import TripletLayout from '@/layouts/Triplet.vue';

import MainTopbar from '@/components/navigation/MainTopbar.vue';
import MainSidebar from '@/components/navigation/MainSidebar.vue';

export default {
  name: 'MainLayout',
  components: {
    TopbarLayout,
    TripletLayout,
    MainTopbar,
    MainSidebar,
  },
  computed: {
    hasAside() {
      console.log(this.$route.meta.aside);
      return this.$route.meta.aside;
    },
  },
};
</script>
