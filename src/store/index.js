import Vue from 'vue';
import Vuex from 'vuex';

import alerts from './modules/alerts';
import courses from './modules/courses';
import lessons from './modules/lessons';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alerts,
    courses,
    lessons,
  },
});
