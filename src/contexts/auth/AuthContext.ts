import { createContext } from 'react'
import { TUser } from '@/types/type'

export type AuthContextType = {
  user: TUser | null
  token: string | null
  login: (token: string) => void
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
  error: unknown
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
