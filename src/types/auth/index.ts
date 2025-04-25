import type { User } from '@/types'

export interface LoginRequiredPayload {
  email: string;
  password: string;
}

export interface RegisterRequiredPayload extends Omit<User, 'id'> {
  password: string;
}

export interface AuthStore {
}
