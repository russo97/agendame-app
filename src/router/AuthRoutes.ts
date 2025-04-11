import type { RouteRecordRaw } from 'vue-router'

import { useMeStore } from '@/stores/me'

export default <RouteRecordRaw>({
  path: '/auth',
  meta: {
    requiresAuth: false
  },
  beforeEnter: (to, from, next) => {
    const meStore = useMeStore()

    if (meStore.isLoggedIn) {
      return next({
        name: 'dashboard',
      })
    }

    return next()
  },
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
