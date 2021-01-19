import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'leaflet/dist/leaflet.css';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VueMaterial from 'vue-material';
import router from './router'



Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
