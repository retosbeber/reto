<template>
  <TopbarLayout app elevate>
    <MainTopbar slot="topbar" />

    <v-content slot="content">
      <h1>Available Courses</h1>

      <course-list />
    </v-content>
  </TopbarLayout>
</template>

<script>
import TopbarLayout from '@/layouts/Topbar.vue';
import MainTopbar from '@/components/navigation/MainTopbar.vue';
import CourseList from '@/components/CourseList.vue';

export default {
  name: 'Courses',
  components: {
    TopbarLayout,
    MainTopbar,
    CourseList,
  },
  created() {
    this.$store.dispatch('courses/load');
  },
};
</script>
