import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from '@/pages/Login/components/LoginForm'

import { AuthProvider } from '@/contexts/auth/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router'

test('Login button renders and trigger submit', () => {
  const queryClient = new QueryClient()

  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </QueryClientProvider>
    </MemoryRouter>
  )
  const loginBtn = screen.getByTestId('login-btn')
  expect(loginBtn).toBeInTheDocument()

  fireEvent.click(loginBtn)
})
