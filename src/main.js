// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
var jQuery = require('jquery')
window.jQuery = jQuery
window.$ = jQuery
require('../node_modules/jquery/dist/jquery.min.js')
require('../node_modules/popper.js/dist/popper.min.js')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')
require('./assets/js/move-top.js')
require('./assets/js/easing.js')
require('./assets/js/responsiveslides.min.js')
require('./assets/js/smoothbox.jquery2.js')
require('./assets/js/SmoothScroll.min.js')
import Vue from 'vue'
import './assets/css/bootstrap.css'
import'./assets/css/smoothbox.css'
import'./assets/css/style.css'
import'./assets/css/fontawesome-all.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
