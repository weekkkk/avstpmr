import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Layouts
import BaseLayout from '@/views/layouts/base-layout.vue'

// Names
import {
  MAIN_PAGE
} from './routerNames'

// Pages
import MainPage from '@/views/pages/main-page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: BaseLayout,
    redirect: `/${MAIN_PAGE}`,
    children: [
      {
        path: `/${MAIN_PAGE}`,
        component: MainPage,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
