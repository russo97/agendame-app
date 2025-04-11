import type {Nullable} from "@/types";

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

export type AuthResponse <T> = T | ErrorPattern;

export interface LoginRequiredPayload {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthStore {
  user: Nullable<User>;
}
