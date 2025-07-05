import { ReactNode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import './App.css'

const queryClient = new QueryClient()
const mainRouter: { path: string; component: ReactNode }[] = [
  { path: '/', component: <Home /> },
]

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="auth/sign-in" element={<Login />} />
            <Route path="auth/sign-up" element={<Register />} />
            {mainRouter.map((el) => (
              <Route
                key={el.path}
                path={el.path}
                element={<MainLayout path={el.path}>{el.component}</MainLayout>}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
