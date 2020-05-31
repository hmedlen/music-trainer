import Vue from 'vue';
// import Vuetify from 'vuetify/lib';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey.lighten1,
        secondary: colors.blueGrey.lighten3,
        accent: colors.indigo.base,
      },
      dark: {

      }
    }
  },
  icons: {
    iconfont: 'mdi',
  }
});
