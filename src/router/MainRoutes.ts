import type { RouteRecordRaw } from 'vue-router'

import { AuthenticationRequiredGuard } from '@/router/guards'

export default <RouteRecordRaw>({
  path: '/',
  beforeEnter: AuthenticationRequiredGuard,
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      path: '',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index.vue')
    }
  ]
})
