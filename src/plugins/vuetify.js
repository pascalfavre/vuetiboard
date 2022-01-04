// src/plugins/vuetify.js
import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'md' || 'fa'
  },
  theme: {
    themes: {
      dark: {
        background: colors.blue.lighten5
      },
      light: {
        background: colors.shades.white
      }
    }
  }
}

export default new Vuetify(opts)
