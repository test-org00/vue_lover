// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/assets/bitbug_favicon.ico';
import '@/assets/scss/theme/index.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from '../store'
import VueClipboard from 'vue-clipboard2'
var SocialSharing = require('vue-social-sharing');

Vue.config.productionTip = false;
Vue.use(SocialSharing)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueClipboard)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
