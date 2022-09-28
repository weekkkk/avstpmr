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


import TirDropdown from 'vue3-tir-dropdown'
app.component('tir-dropdown', TirDropdown)
import TirMultidropdown from 'vue3-tir-multidropdown'
app.component('tir-multidropdown', TirMultidropdown)
import TirControl from 'vue3-tir-control'
app.component('tir-control', TirControl)
import TirError from 'vue3-tir-error'
app.component('tir-error', TirError)
import { TirList, TirOption } from 'vue3-tir-list'
app.component('tir-list', TirList)
app.component('tir-option', TirOption)
import TirScroll from 'vue3-tir-scroll'
app.component('tir-scroll', TirScroll)
import TirPopover from 'vue3-tir-popover'
app.component('tir-popover', TirPopover)
import TirSelected from 'vue3-tir-selected'
app.component('tir-selected', TirSelected)
import TirButton from 'vue3-tir-button'
app.component('tir-button', TirButton)


app.use(router).mount('#app')
