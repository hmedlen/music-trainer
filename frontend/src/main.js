import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import {sync} from 'vuex-router-sync'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify'
// import WebMidi from 'webmidi'
import WebMidi from './webmidi.js'
import InfoPane from '@/components/globals/InfoPane'
import './assets/style.css'

Vue.config.productionTip = false

Vue.component('info-pane', InfoPane)

// Vue.use(Vuetify)

// sync(store, router)

var app = new Vue({
  router,
  // store,
  vuetify,
  render: h => h(App, {
    props: {
      thisVariable: "Nope!"
    }
  })
}).$mount('#app')