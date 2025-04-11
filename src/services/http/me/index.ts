import type {
  AuthResponse,
} from '@/types/auth'

import axios from 'axios'

import { defaultErrorPattern } from '@/services/defaultErrorPattern'

export default {
  async me (defaultErrorMessage = 'Não autorizado'): Promise<AuthResponse<void>> {
    return axios
      .get('/api/me')
      .then(() => {
        return void 0
      })
      .catch(error => {
        return defaultErrorPattern({
          error: error?.response?.data?.error ?? 'Unexpected',
          message: error?.response?.data?.message ?? defaultErrorMessage,
        })
      })
  }
}
