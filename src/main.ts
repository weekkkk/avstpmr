import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import uiLink from '@/views/components/ui-link/ui-link.vue'

const app = createApp(App)

app.component('ui-link', uiLink)

app.use(router).mount('#app')
