
export type Nullable <T> = T | null;

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

export interface IncomingExternalData <T = unknown> {
  data: T;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name?: string;
}

export type AuthResponse <T> = T | ErrorPattern;
