<template>
  <div>
    <vue-markdown v-if="lesson.content">{{ lesson.content }}</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'TextLesson',
  components: {
    VueMarkdown,
  },
  props: {
    lesson: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
