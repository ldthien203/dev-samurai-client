// src/context/auth/AuthProvider.tsx
import { useState, useEffect, useMemo, ReactNode } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchMe } from './fetchMe'
import { TUser } from '@/types/type'
import { AuthContext } from './AuthContext'

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
