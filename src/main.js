// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'lib-flexible'
import App from './App'
import router from './router'
import i18n from './common/language/index'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import 'es6-promise/auto'
import trans from './common/utils/trans'

require('es6-promise').polyfill()
Es6Promise.polyfill()
Vue.prototype.$axios = axios
Vue.prototype.$trans = trans
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
