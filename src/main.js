import Vue from 'vue';
import VueGtag from 'vue-gtag';
import VueHead from 'vue-head';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
// import firebase from './firebase';

// Plugins
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';

// Globally register all `_base`-prefixed components
import '@/components/_globals';

Vue.use(VueHead);

// Prepare Gtag config
const gtConfig = {
  config: {
    id: process.env.VUE_APP_ANALYTICS_ID,
  },
};

// Install VueGtag plugin
Vue.use(VueGtag, gtConfig, router);

/** init
 *  Initializes the vue app if everything is ready
 */
function init() {
  // Init the app
  return new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: (h) => h(App),
  }).$mount('#app');
}

// Initialize firebase auth
// firebase.auth().onAuthStateChanged((a) => {
init();
// });
