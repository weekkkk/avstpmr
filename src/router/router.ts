import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Layouts
import BaseLayout from '@/views/layouts/base-layout.vue'

// Names
import {
  MAIN_PAGE,
  ADVERTISING_AND_RENTAL_PAGE
} from './routerNames'

// Pages
import MainPage from '@/views/pages/main-page.vue'
import AdvertisingAndRentalPage from '@/views/pages/advertising-and-rental-page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: BaseLayout,
    redirect: `/${MAIN_PAGE}`,
    children: [
      {
        path: `/${MAIN_PAGE}`,
        name: MAIN_PAGE,
        component: MainPage,
      },
      {
        path: `/${ADVERTISING_AND_RENTAL_PAGE}`,
        name: ADVERTISING_AND_RENTAL_PAGE,
        component: AdvertisingAndRentalPage,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
