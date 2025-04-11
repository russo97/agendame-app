import type { RouteRecordRaw } from 'vue-router'

import { useMeStore } from '@/stores/me'

export default <RouteRecordRaw>({
  path: '/',
  meta: {
    requiresAuth: true
  },
  beforeEnter: (to, from, next) => {
    const meStore = useMeStore()

    if (!meStore.isLoggedIn) {
      return next({
        name: 'login',
      })
    }

    return next()
  },
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      path: '',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index.vue')
    }
  ]
})
