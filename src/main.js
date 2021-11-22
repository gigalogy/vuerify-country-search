import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueCountrySearch from './index'

Vue.use(Vuetify)
Vue.use(VueCountrySearch)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify: new Vuetify()
}).$mount('#app')
