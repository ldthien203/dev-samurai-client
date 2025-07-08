import { useContext } from 'react'
import { useState, useEffect, ReactNode } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { createContext } from 'react'
import { TUser } from '@/types/type'
import { useNavigate } from 'react-router'
import { ROOT_PATH } from '@/constants/path'
import MeFetcher from '@/components/MeFetcher/MeFetcher'
import { getFetchMe } from '@/api/services/user.service'

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
  const navigate = useNavigate()

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const login = async (newToken: string) => {
    localStorage.setItem('accessToken', newToken)
    setToken(newToken)

    try {
      const res = await getFetchMe(newToken)
      localStorage.setItem('user', JSON.stringify(res.data))
      setCachedUser(res.data)
      setTimeout(() => navigate(ROOT_PATH.DASHBOARD), 1000)
    } catch (error) {
      console.error('Failed to fetch user info after login:', error)
      logout()
    }
  }

  const logout = () => {
    setToken(null)
    setCachedUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
    queryClient.removeQueries({ queryKey: ['me'] })
    navigate(ROOT_PATH.SIGN_IN)
  }

  const isAuthenticated = !!token

  const value = {
    user: cachedUser,
    token,
    login,
    logout,
    isAuthenticated,
    isLoading: false,
    error: null,
  }

  return (
    <AuthContext.Provider value={value}>
      {token && <MeFetcher token={token} />}
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
