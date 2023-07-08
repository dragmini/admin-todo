import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UsersPage from '@/views/UsersPage.vue'
import PaymentsPage from '@/views/PaymentsPage.vue'
import MainPage from '@/views/MainPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersPage
  },
  {
    path: '/payments',
    name: 'Payments',
    component: PaymentsPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
