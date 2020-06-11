import axios from 'axios';

function parseCourse(info, repo) {
  const arrayInfo = info.split('\n');
  let title = '';
  for (let i = 0; i < arrayInfo.length; i += 1) {
    const item = arrayInfo[i];
    if (item.indexOf('#') > -1) {
      title = item;
      break;
    }
  }

  const newInfo = {
    repo,
    title: title.replace('#', ''),
    description: info.replace(title, '').trim(),
    author: repo.split('/')[0],
  };

  return newInfo;
}

function fetchCourse(repo) {
  const url = `https://raw.githubusercontent.com/${repo}/master/info.md`;
  return axios.get(url)
    .then((response) => response.data)
    .then((data) => parseCourse(data, repo));
}

function getByRepo(state, repo) {
  for (let i = 0; i < state.list.length; i += 1) {
    if (state.list[i].repo === repo) {
      return state.list[i];
    }
  }

  return null;
}

const initialState = {
  list: [],
};

const getters = {
  getByRepo: (state) => (repo) => getByRepo(state, repo),
};

const actions = {
  load({ commit }) {
    const courseList = process.env.VUE_APP_REPOS_LIST.split(',');
    const promises = [];

    courseList.forEach((repo) => {
      promises.push(fetchCourse(repo));
    });

    Promise.all(promises)
      .then((courses) => {
        commit('ADD', courses);
      });
  },
};

const mutations = {
  ADD(state, courses) {
    state.list = courses;
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
