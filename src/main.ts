import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'


const app = createApp(App)

import uiLink from '@/views/components/ui-link/ui-link.vue'
app.component('ui-link', uiLink)

import uiButton from '@/views/components/ui-button/ui-button.vue'
app.component('ui-button', uiButton)

import uiListBlock from '@/views/components/ui-list-block/ui-list-block.vue'
app.component('ui-list-block', uiListBlock)

import uiCustomTable from '@/views/components/ui-custom-table/ui-custom-table.vue'
app.component('ui-custom-table', uiCustomTable)
import uiCustomTablePagination from '@/views/components/ui-custom-table/ui-custom-table-with-pagination.vue'
app.component('ui-table-pagination', uiCustomTablePagination)


app.use(router).mount('#app')
