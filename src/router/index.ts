import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

import MainRoutes from '@/router/MainRoutes'
import AuthRoutes from '@/router/AuthRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/Error404.vue')
    },
    MainRoutes,
    AuthRoutes,
  ]
})

router.beforeResolve((to, from, next) => {
  const authStore = useAuthStore()

  authStore.sanctum()

  return next()
})

export default router
