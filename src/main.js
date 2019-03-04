import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import request from '@/assets/js/request/api.js'
import requestUrl from '@/assets/js/request/requestUrl.js'

Vue.prototype.request = request
Vue.prototype.requestUrl = requestUrl

Vue.use(request)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
