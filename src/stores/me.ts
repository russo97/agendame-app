import { defineStore } from 'pinia'

import type { MeStoreState } from '@/types/me'

import { meService } from '@/services/http/me'

export const useMeStore = defineStore('me', {
  state: () => <MeStoreState> ({
    user: null,
  }),

  getters: {
    isLoggedIn: (state: MeStoreState): boolean => !!state.user?.id,
  },

  actions: {
    async getMe () {
      const user = await meService.me()

      if ('error' in user) return

      this.$patch({
        user: user.data
      })
    },
  },
})
