import { defineStore } from 'pinia'

import { useMeStore } from '@/stores/me'

import authService from '@/services/http/auth'

import type {
  RegisterRequiredPayload,
} from '@/types/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
  }),

  getters: {},

  actions: {
    sanctum () {
      return authService.sanctum()
    },

    async login (email: string, password: string) {
      const user = await authService.login({
        email,
        password
      })

      if ('error' in user) return user

      const meStore = useMeStore()

      meStore.$patch({
        user: user.data,
      })

      return user
    },

    async register (userPayload: RegisterRequiredPayload) {
      const user = await authService.register(userPayload)

      if ('error' in user) return user

      const meStore = useMeStore()

      meStore.$patch({
        user: user.data,
      })

      return user
    },
  },
})
