import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#4285F4',
        secondary: '#EDDBF9',
        accent: '#4285F4',
        error: '#FF5252',
        info: '#4285F4',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
