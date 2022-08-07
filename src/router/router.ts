import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Layouts
import BaseLayout from '@/views/layouts/base-layout.vue'

// Names
import {
  MAIN_PAGE,
  ADVERTISING_AND_RENTAL_PAGE,
  RULES_ONLINE_PURCHASE_AND_RETURN_TICKETS_PAGE
} from './routerNames'

// Pages
import MainPage from '@/views/pages/main-page.vue'
import AdvertisingAndRentalPage from '@/views/pages/advertising-and-rental-page.vue'
import RulesOnlineRurchaseAndReturnTicketsPage from '@/views/pages/rules-online-purchase-and-return-tickets-page.vue'

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
      },
      {
        path: `/${RULES_ONLINE_PURCHASE_AND_RETURN_TICKETS_PAGE}`,
        name: RULES_ONLINE_PURCHASE_AND_RETURN_TICKETS_PAGE,
        component: RulesOnlineRurchaseAndReturnTicketsPage,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
