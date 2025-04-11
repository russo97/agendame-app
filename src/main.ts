
import { createApp } from 'vue'
import router from '@/router/index'
import App from '@/App.vue'

import '@/plugins/yup'
import '@/plugins/axios'
import pinia from '@/plugins/pinia'
import vuetify from '@/plugins/vuetify'
import { useMeStore } from '@/stores/me'

import '@/scss/style.scss'

const app = createApp(App)

app.use(pinia)

const meStore = useMeStore()

meStore
  .getMe()
  .finally(() => {
    app
      .use(router)
      .use(vuetify)
      .mount('#app')
  })
