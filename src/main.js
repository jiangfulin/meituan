// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'font-awesome/scss/font-awesome.scss'
import 'vue2-animate/dist/vue2-animate.min.css'
Vue.config.productionTip = false;
Vue.use(iView);
/* eslint-disable no-new */

// axios
import axios from 'axios'
axios.defaults.baseURL = 'https://www.vue-js.com/api/v1/'   // base url

import store from './store/index'
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
