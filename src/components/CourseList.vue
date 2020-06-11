<template>
  <v-list>
    <v-list-item
      v-for="course in $store.state.courses.list"
      :key="course.title"
      two-line
      @click="goToCourse(course.repo)"
    >
      <v-list-item-content>
        <v-list-item-title>{{ course.title }}</v-list-item-title>
        <v-list-item-subtitle>@{{ course.author }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'CourseList',
  methods: {
    goToCourse(repo) {
      // console.log(repo);
      this.$router.push({
        name: 'course',
        params: { repo },
      });
    },
  },
};
</script>
