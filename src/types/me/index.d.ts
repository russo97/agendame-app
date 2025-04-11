import type {
  User,
  Nullable,
} from '@/types'

export interface MeStoreState {
  /**
   * Dados do usuário logado
   */
  user: Nullable<User>;
}
