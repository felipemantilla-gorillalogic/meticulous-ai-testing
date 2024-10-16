import './assets/main.css'

import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

tryLoadAndStartRecorder({
  recordingToken: 'v5qP7wxyAPo1pE0Wdzg1bUelVCnsNHRspxUBRXxS',
  isProduction: false,
})
  .catch(error => {
    console.error('Failed to start the recorder:', error)
  })
  .then(() => {
    app.use(createPinia())
    app.use(router)

    app.mount('#app')
  })
