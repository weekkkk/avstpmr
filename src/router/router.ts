import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Layouts
import BaseLayout from '@/views/layouts/base-layout.vue'

// Names
import {
  MAIN_PAGE,
  ADVERTISING_AND_RENTAL_PAGE,
  RULES_ONLINE_PURCHASE_AND_RETURN_TICKETS_PAGE,
  CONTACTS_PAGE,
  DOCUMENTS_PAGE,
  NEWS_PAGE,
  ONE_NEWS_PAGE,
  FLIGHT_SCHEDULE_PAGE,
  TRANSPORTATION_RULES_PAGE
} from './routerNames'

// Pages
import MainPage from '@/views/pages/main-page.vue'
import AdvertisingAndRentalPage from '@/views/pages/advertising-and-rental-page.vue'
import RulesOnlineRurchaseAndReturnTicketsPage from '@/views/pages/rules-online-purchase-and-return-tickets-page.vue'
import ContactsPage from '@/views/pages/contacts-page.vue'
import DocumentsPage from '@/views/pages/documents-page.vue'
import NewsPage from '@/views/pages/news-page.vue'
import OneNewsPage from '@/views/pages/one-news-page.vue'
import FlightSchedulePage from '@/views/pages/flight-schedule-page.vue'
import TransportationRulesPage from '@/views/pages/transportation-rules-page.vue'

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
      },
      {
        path: `/${CONTACTS_PAGE}`,
        name: CONTACTS_PAGE,
        component: ContactsPage,
      },
      {
        path: `/${DOCUMENTS_PAGE}`,
        name: DOCUMENTS_PAGE,
        component: DocumentsPage,
      },
      {
        path: `/${NEWS_PAGE}`,
        name: NEWS_PAGE,
        component: NewsPage,
      },
      {
        path: `/${ONE_NEWS_PAGE}/:id`,
        name: ONE_NEWS_PAGE,
        component: OneNewsPage,
      },
      {
        path: `/${FLIGHT_SCHEDULE_PAGE}`,
        name: FLIGHT_SCHEDULE_PAGE,
        component: FlightSchedulePage,
      },
      {
        path: `/${TRANSPORTATION_RULES_PAGE}`,
        name: TRANSPORTATION_RULES_PAGE,
        component: TransportationRulesPage,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
