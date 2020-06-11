<template>
  <TopbarLayout app elevate>
    <MainTopbar slot="topbar" />

    <v-content slot="content" v-if="!lesson">loading...</v-content>
    <v-content slot="content" v-else>
    <!-- <v-content slot="content"> -->
      <!-- <div>{{ $store.state.lessons }}</div> -->
      <!-- <div class="mt-3">{{ lesson }}</div> -->
      <component :is="component" :lesson="lesson" />
    </v-content>
  </TopbarLayout>
</template>

<script>
import TopbarLayout from '@/layouts/Topbar.vue';
import MainTopbar from '@/components/navigation/MainTopbar.vue';

import CardsLesson from '@/components/lessons/CardsLesson.vue';
import TextLesson from '@/components/lessons/TextLesson.vue';

export default {
  name: 'Course',
  components: {
    TopbarLayout,
    MainTopbar,
    CardsLesson,
    TextLesson,
  },
  computed: {
    repo() {
      return this.$route.params.repo;
    },
    order() {
      return Number(this.$route.params.order) || 0;
    },
    lesson() {
      return { ...this.$store.getters['lessons/getByOrder'](this.order) };
    },
    component() {
      let comp = 'TextLesson';
      if (this.lesson.type === 'text') {
        comp = 'TextLesson';
      } else if (this.lesson.type === 'cards') {
        comp = 'CardsLesson';
      }

      return comp;
    },
  },
  methods: {
    lessonDetails() {
      this.$store.dispatch('lessons/load', this.lesson);
    },
  },
  created() {
    if (!this.lesson.title) {
      this.$store.dispatch('lessons/list', this.repo)
        .then(() => {
          // console.log('getting details...');
          this.lessonDetails();
        });
    } else {
      this.lessonDetails();
    }
  },
};
</script>
