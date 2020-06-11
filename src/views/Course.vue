<template>
  <TopbarLayout app elevate>
    <MainTopbar slot="topbar" />

    <v-content slot="content" v-if="!course">loading...</v-content>
    <v-content slot="content" v-else>
      <h1>{{ course.title }}</h1>
      <div>
        <vue-markdown>{{ course.description }}</vue-markdown>
      </div>
      <v-subheader>@{{ course.author }}</v-subheader>

      <lesson-list :repo="repo" />
    </v-content>
  </TopbarLayout>
</template>

<script>
import VueMarkdown from 'vue-markdown';

import TopbarLayout from '@/layouts/Topbar.vue';
import MainTopbar from '@/components/navigation/MainTopbar.vue';
import LessonList from '@/components/LessonList.vue';

export default {
  name: 'Course',
  components: {
    VueMarkdown,
    TopbarLayout,
    MainTopbar,
    LessonList,
  },
  computed: {
    repo() {
      return this.$route.params.repo;
    },
    course() {
      return this.$store.getters['courses/getByRepo'](this.repo);
    },
  },
  created() {
    if (!this.course) {
      this.$store.dispatch('courses/load', this.repo);
    }

    this.$store.dispatch('lessons/list', this.repo);
  },
};
</script>
