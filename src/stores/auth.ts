import { defineStore } from 'pinia'

import type { AuthStore } from '@/types/auth'

import authService from '@/services/http/auth'

export const useAuthStore = defineStore('auth', {
  state: () => <AuthStore> ({
    user: null,
  }),

  getters: {
    isLoggedIn: (state: AuthStore): boolean => !!state.user?.id
  },

  actions: {
    sanctum () {
      return authService.sanctum()
    },

    async login (email: string, password: string) {
      const user = await authService.login({
        email,
        password
      })

      if (!('error' in user)) {
        this.$patch({
          user: user.data
        })
      }

      return user
    }
  },
})
