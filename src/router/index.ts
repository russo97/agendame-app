import { createRouter, createWebHistory } from 'vue-router'
import MainRoutes from '@/router/MainRoutes'
import AuthRoutes from '@/router/AuthRoutes'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/Error404.vue')
    },
    MainRoutes,
    AuthRoutes
  ]
})
