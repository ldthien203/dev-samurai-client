import { useContext } from 'react'
import { useState, useEffect, ReactNode } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { createContext } from 'react'
import { TUser } from '@/types/type'
import { useFetchMe } from '@/api/hooks/user.hook'
import { useNavigate } from 'react-router'

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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null)
  const [cachedUser, setCachedUser] = useState<TUser | null>(() => {
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  const queryClient = useQueryClient()
  const query = useFetchMe(token!)

  const navigate = useNavigate()

  useEffect(() => {
    if (query.data) {
      localStorage.setItem('user', JSON.stringify(query.data))
      setCachedUser(query.data)
    }
    if (query.error) {
      localStorage.removeItem('user')
      setCachedUser(null)
    }
  }, [query.data, query.error])

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const login = (newToken: string) => {
    localStorage.setItem('accessToken', newToken)
    setToken(newToken)
  }

  const logout = () => {
    setToken(null)
    setCachedUser(null)
    localStorage.removeItem('user')
    queryClient.removeQueries({ queryKey: ['me'] })
    setTimeout(() => navigate('/auth/sign-in'), 500)
  }

  const isAuthenticated = !!token

  const value = {
    user: query.data ?? cachedUser,
    token,
    login,
    logout,
    isAuthenticated,
    isLoading: query.isLoading,
    error: query.error,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
