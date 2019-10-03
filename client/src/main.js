import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { domain, clientId, audience } from './auth/config.json';

import { Auth0Plugin } from './auth/auth0';

Vue.config.productionTip = false;

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectcallback: appState => {
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname;
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
