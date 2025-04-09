
import { createApp } from 'vue'
import router from '@/router/index'
import App from '@/App.vue'

import vuetify from '@/plugins/vuetify'

import '@/scss/style.scss'

import { setLocale } from 'yup'
import { pt } from 'yup-locale-pt'

setLocale(pt)

const app = createApp(App)

app
  .use(router)
  .use(vuetify)
  .mount('#app')
