
export interface ErrorPattern {
  /**
   * Nome da exception que lançou o erro
   */
  error: string;
  /**
   * Mensagem descritiva acerca do erro capturado
   */
  message: string;
}

export type AuthResponse <T> = T | ErrorPattern;

export interface LoginRequiredPayload {
  email: string;
  password: string;
}
