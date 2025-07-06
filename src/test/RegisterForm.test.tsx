import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import RegisterForm from '@/pages/Register/components/RegisterForm'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router'

test('Login button renders and trigger submit', () => {
  const queryClient = new QueryClient()
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <RegisterForm />
      </QueryClientProvider>
    </MemoryRouter>
  )

  const registerBtn = screen.getByTestId('register-btn')
  expect(registerBtn).toBeInTheDocument()

  fireEvent.click(registerBtn)
})
