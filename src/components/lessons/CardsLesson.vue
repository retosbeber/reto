<template>
  <div>
    <div class="card-container mt-4 pt-4">
      <div v-if="cards.length === 0" class="text-center">
        <h1>¡Se acabo!</h1>
        <v-btn
          color="primary"
          large
          class="my-5"
          @click="$router.back()"
        >
          Volver
        </v-btn>
      </div>

        <!-- @throwin="throwin" -->
      <vue-swing
        @throwout="throwout"
        :config="config"
      >
        <v-card
          v-for="(card, i) in cards"
          :key="i"
          class="box px-4 py-3 elevation-0"
        >
          <h1>{{ card.title }}</h1>
          <div>
            <vue-markdown v-if="card.content">
              {{ card.content }}
            </vue-markdown>
          </div>
        </v-card>
      </vue-swing>
    </div>
  </div>
</template>

<style scoped>
  .card-container {
    height: 80vh;
    margin: auto;
    position: relative;
    width: 90vw;
  }

  .box {
    border: 1px solid grey;
    position: absolute;
    height: 80vh;
    width: 100%;
  }
    .box:last-child {
      margin-top: -12px;
    }
    .box:first-child {
      margin-top: 12px;
    }
</style>

<script>
import VueMarkdown from 'vue-markdown';
import VueSwing from 'vue-swing';

function randomSort() {
  return 0.5 - Math.random();
}

export default {
  name: 'CardsLesson',
  components: {
    VueMarkdown,
    VueSwing,
  },
  props: {
    lesson: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    throwout() {
      this.cards.pop();
    },
  },
  data: () => ({
    config: {},
    cards: [],
  }),
  created() {
    let cards = this.lesson.content.split('#').map((cardItem) => {
      const title = cardItem.split('\n')[0];
      const card = {
        title,
        content: cardItem.replace(title, '').trim(),
      };

      return card;
    }).filter((item) => item.title && item.content);

    if (this.lesson.algorithm === 'random') {
      cards = cards.sort(randomSort);
    }

    this.cards = cards;
  },
};
</script>
