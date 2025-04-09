
import { createApp } from 'vue'
import router from '@/router/index'
import App from '@/App.vue'

import '@/plugins/yup'
import vuetify from '@/plugins/vuetify'

import '@/scss/style.scss'

const app = createApp(App)

app
  .use(router)
  .use(vuetify)
  .mount('#app')
