import type {
  User,
  AuthResponse,
  IncomingExternalData,
} from '@/types'

import axios from 'axios'

import { defaultErrorPattern } from '@/services/defaultErrorPattern'

export const meService = {
  async me (defaultErrorMessage = 'Não autorizado'): Promise<AuthResponse<IncomingExternalData<User>>> {
    return axios
      .get('/api/me')
      .then(response => {
        return response.data
      })
      .catch(error => {
        return defaultErrorPattern({
          error: error?.response?.data?.error ?? 'Unexpected',
          message: error?.response?.data?.message ?? defaultErrorMessage,
        })
      })
  }
}
