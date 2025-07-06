import { createContext, useContext, useState, ReactNode } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

type User = {
  id: number
  email: string
  name: string
}

type AuthConTextType = {
  user: User | null
  token: string | null
  login: (token: string) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthConTextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const queryClient = useQueryClient()

  const login = async (newToken: string) => {
    setToken(newToken)

    const res = await axios.get('http://localhost:4000/api/me', {
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    })
    const userInfo = res.data
    setUser(userInfo)

    queryClient.setQueryData(['me'], userInfo)
  }

  const logout = () => {
    setToken(null)
    setUser(null)

    queryClient.removeQueries({ queryKey: ['me'] })
  }

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
