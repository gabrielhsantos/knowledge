import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';

import App from './App';
import store from './config/store';
import router from './config/router';
import './config/bootstrap';

Vue.config.productionTip = false;

// TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkdhYnJpZWwgSC4gU2FudG9zIiwiZW1haWwiOiJnaHNAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU3MTY2ODc0NCwiZXhwIjoxODg3MDI4NzQ0fQ.eZKDjOtINA8dPRi5H4l-zZ9x-oGfxrmOj0BCWGPxzeM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');