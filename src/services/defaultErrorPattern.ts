import type { ErrorPattern } from '@/types/auth'

export function defaultErrorPattern (error: Partial<ErrorPattern>): ErrorPattern {
  return {
    error: 'Unknown',
    message: 'Houve uma falha',
    ...error,
  }
}
