import DashboardView from '@/views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UnderConstruction from '@/components/common/UnderCosnstruction.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/orders',
      name: 'orders',
      component: UnderConstruction
    },
    {
      path: '/brands',
      name: 'brands',
      component: UnderConstruction
    },
    {
      path: '/add-products',
      name: 'add-products',
      component: UnderConstruction
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: UnderConstruction
    }
  ]
})

export default router
