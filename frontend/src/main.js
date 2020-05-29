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

Vue.config.productionTip = false

Vue.component('info-pane', InfoPane)

// Vue.use(Vuetify)

// sync(store, router)

// WebMidi.enable(function () {
//   // Viewing available inputs and outputs
//   console.log(WebMidi.inputs);
//   console.log(WebMidi.outputs);

//   // Retrieve an input by name, id or index
//   // var input = WebMidi.getInputByName("My Awesome Keyboard");
//   // OR...
//   // input = WebMidi.getInputById("1809568182");
//   var input = WebMidi.inputs[1];

//   // Listen for a 'note on' message on all channels
//   input.addListener('noteon', 'all',
//       function (e) {
//           console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
//       }
//   );

//   // Listen to pitch bend message on channel 3
//   input.addListener('pitchbend', 3,
//       function (e) {
//           console.log("Received 'pitchbend' message.", e);
//       }
//   );

//   // Listen to control change message on all channels
//   input.addListener('controlchange', "all",
//       function (e) {
//           console.log("Received 'controlchange' message.", e);
//       }
//   );

//   // Remove all listeners for 'noteoff' on all channels
//   // input.removeListener('noteoff');

//   // Remove all listeners on the input
//   // input.removeListener();
// });


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

// app.

// var app = new Vue({
//   el: '#app',

  
// })