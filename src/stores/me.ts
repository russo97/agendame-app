import { defineStore } from 'pinia'

import authService from '@/services/http/me'

export const useMeStore = defineStore('me', {
  state: () => ({
  }),

  getters: {},

  actions: {
    getMe () {
      return authService.me()
    },
  },
})
