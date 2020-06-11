<template>
  <v-list>
    <v-list-item
      v-for="lesson in $store.state.lessons.list"
      :key="lesson.order"
      two-line
      @click="goToCourse(lesson)"
    >
      <v-list-item-content>
        <v-list-item-title>{{ lesson.name }}</v-list-item-title>
        <v-list-item-subtitle>lesson {{ lesson.order }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'LessonList',
  props: {
    repo: {
      type: String,
      default: '',
    },
  },
  methods: {
    goToCourse(lesson) {
      this.$router.push({
        name: 'lesson',
        params: {
          repo: this.repo,
          order: lesson.order,
        },
      });
    },
  },
};
</script>
