import type { NavigationGuardWithThis } from 'vue-router'

import { useMeStore } from '@/stores/me'

export const AuthenticationRequiredGuard: NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[] = (to, from, next) => {
  const meStore = useMeStore()

  if (!meStore.isLoggedIn) {
    return next({
      name: 'login',
    })
  }

  return next()
}

export const AlreadyAuthenticatedGuard: NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[] = (to, from, next) => {
  const meStore = useMeStore()

  if (meStore.isLoggedIn) {
    return next({
      name: 'dashboard',
    })
  }

  return next()
}
