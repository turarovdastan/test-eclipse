import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false

//styles 
import './assets/index.css'

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
