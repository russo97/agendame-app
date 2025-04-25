import type {
  User,
  AuthResponse,
  IncomingExternalData,
} from '@/types'
import type {
  LoginRequiredPayload,
  RegisterRequiredPayload,
} from '@/types/auth'

import axios from 'axios'

import { defaultErrorPattern } from '@/services/defaultErrorPattern'

export default {
  async sanctum (defaultErrorMessage = 'Falha ao capturar o token'): Promise<AuthResponse<void>> {
    return axios
      .get('/sanctum/csrf-cookie')
      .then(() => {
        return void 0
      })
      .catch(error => {
        return defaultErrorPattern({
          error: error?.response?.data?.error ?? 'Unexpected',
          message: error?.response?.data?.message ?? defaultErrorMessage,
        })
      })
  },

  async login (payload: LoginRequiredPayload, defaultErrorMessage = 'E-mail e/ou senha informados são inválidos.'): Promise<AuthResponse<IncomingExternalData<User>>> {
    return await axios
      .post<IncomingExternalData<User>>('/api/login', payload)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return defaultErrorPattern({
          error: error?.response?.data?.error ?? 'Unexpected',
          message: error?.response?.data?.message ?? defaultErrorMessage,
        })
      })
  },

  async register (payload: RegisterRequiredPayload, defaultErrorMessage = 'Falha ao registrar os dados.'): Promise<AuthResponse<IncomingExternalData<User>>> {
    return await axios
      .post<IncomingExternalData<User>>('/api/register', payload)
      .then(response => response.data)
      .catch(error => {
        return defaultErrorPattern({
          error: error?.response?.data?.error ?? 'Unexpected',
          message: error?.response?.data?.message ?? defaultErrorMessage,
        })
      })
  }
}
