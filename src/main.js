// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

//test
//axios.defaults.baseURL = 'http://10.36.106.85:8991/rest/'
//uat
axios.defaults.baseURL = 'https://uat-angelease.yixin.com/rest/'
//prodoct
//axios.defaults.baseURL = 'https://www.angelease.cn/rest/'

axios.defaults.params = { privateSign:'1qaz2wsxqq' }

axios.defaults.withCredentials = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
