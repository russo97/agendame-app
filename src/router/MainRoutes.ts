export default {
  path: '/',
  meta: {
    requiresAuth: true
  },
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'dashboard',
      path: '',
      component: () => import('@/views/dashboard/index.vue')
    }
  ]
}
