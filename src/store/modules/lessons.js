import Vue from 'vue';
import axios from 'axios';

const FILE_EXT = '.md';
const TYPE_MARKER = '>type:';
const ALGORITHM_MARKER = '>algorithm:';

function parseLessonList(lessons) {
  // ToDo @CodingCarlos: Order lessons by "order" param.
  return lessons.map((item) => {
    const order = item.name.split('-')[0];
    let name = item.name.replace(`${order}-`, '');
    name = name.substring(0, (name.length - FILE_EXT.length));

    const lesson = {
      order: Number(order),
      name,
      uri: item.download_url,
      content: null,
      type: null,
      algorithm: null,
    };

    return lesson;
  });
}

function parseLesson(lesson) {
  // Get lesson type
  const lines = lesson.split('\n');
  let type = '';
  let algorithm = null;

  for (let i = 0; i < lines.length; i += 1) {
    const l = lines[i];

    if (l.indexOf(TYPE_MARKER) > -1) {
      type = l.replace(TYPE_MARKER, '');
    } else if (l.indexOf(ALGORITHM_MARKER) > -1) {
      algorithm = l.replace(ALGORITHM_MARKER, '');
    }
  }

  // Lesson Content
  const lessonContent = lesson.replace(TYPE_MARKER + type, '').trim();

  return {
    type,
    algorithm,
    content: lessonContent,
  };
}

function getByOrder(state, order) {
  return state.list.find((lesson) => lesson.order === order);
}

const initialState = {
  list: [],
};

const getters = {
  getByOrder: (state) => (order) => getByOrder(state, order),
};

const actions = {
  list({ commit }, repo) {
    const url = `https://api.github.com/repos/${repo}/contents/lessons`;
    return axios.get(url)
      .then((response) => response.data)
      .then((data) => parseLessonList(data))
      .then((lessons) => commit('ADD', { lessons, repo }));
  },
  load({ commit }, lesson) {
    return axios.get(lesson.uri)
      .then((response) => response.data)
      .then((data) => parseLesson(data))
      .then((contents) => commit('UPDATE', { ...lesson, ...contents }));
  },
};

const mutations = {
  ADD(state, data) {
    state.list = data.lessons;
  },
  UPDATE(state, data) {
    for (let i = 0; i < state.list.length; i += 1) {
      if (state.list[i].order === data.order) {
        Vue.set(state.list, i, data);
        return true;
      }
    }

    return false;
  },
};

// Export store
export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
