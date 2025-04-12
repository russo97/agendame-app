import type { RouteRecordRaw } from 'vue-router'

import { AlreadyAuthenticatedGuard } from '@/router/guards'

export default <RouteRecordRaw>({
  path: '/auth',
  meta: {
    requiresAuth: false
  },
  beforeEnter: AlreadyAuthenticatedGuard,
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  children: [
    {
      name: 'login',
      path: 'login',
      component: () => import('@/views/auth/Login.vue'),
    },
    {
      name: 'register',
      path: 'register',
      component: () => import('@/views/auth/Register.vue'),
    },
  ],
})
