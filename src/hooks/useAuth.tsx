import { useContext } from 'react'
import { useState, useEffect, useMemo, ReactNode } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { createContext } from 'react'
import { TUser } from '@/types/type'
import axios from 'axios'

export type AuthContextType = {
  user: TUser | null
  token: string | null
  login: (token: string) => void
  logout: () => void
  isAuthenticated: boolean
  isLoading: boolean
  error: unknown
}

const fetchMe = async (token: string): Promise<TUser> => {
  const res = await axios.get('http://localhost:4000/api/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return res.data.data
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null)
  const [cachedUser, setCachedUser] = useState<TUser | null>(() => {
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['me'],
    queryFn: () => fetchMe(token!),
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  })

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

  const login = (newToken: string) => {
    setToken(newToken)
  }

  const logout = () => {
    setToken(null)
    setCachedUser(null)
    localStorage.removeItem('user')
    queryClient.removeQueries({ queryKey: ['me'] })
  }

  const isAuthenticated = !!token

  const value = useMemo(
    () => ({
      user: query.data ?? cachedUser,
      token,
      login,
      logout,
      isAuthenticated,
      isLoading: query.isLoading,
      error: query.error,
    }),
    [query.data, cachedUser, token, query.isLoading, query.error]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
