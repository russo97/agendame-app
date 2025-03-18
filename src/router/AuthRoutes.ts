export default {
  path: '/auth',
  meta: {
    requiresAuth: false
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
}
