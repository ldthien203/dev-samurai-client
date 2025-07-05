import { createContext, useContext, useState, ReactNode } from 'react'
import decodeToken from '@/lib/decodeToken'

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

  const login = (newToken: string) => {
    const decoded = decodeToken(newToken)
    setToken(newToken)
    setUser({
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
    })
  }

  const logout = () => {
    setToken(null)
    setUser(null)
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
