import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'


const app = createApp(App)

import uiLink from '@/views/components/ui-link/ui-link.vue'
app.component('ui-link', uiLink)

import uiButton from '@/views/components/ui-button/ui-button.vue'
app.component('ui-button', uiButton)


app.use(router).mount('#app')
