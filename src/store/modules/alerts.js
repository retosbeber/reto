const DEFAULT_COLOR = 'black';

const initialState = {
  visible: false,
  color: null,
  text: '',
};

const getters = {};

const actions = {
  show({ commit }, { color, text }) {
    commit('SHOW', { color, text });
  },
};

const mutations = {
  SHOW(state, data) {
    state.text = data.text;
    state.color = data.color || DEFAULT_COLOR;
    state.visible = true;
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
