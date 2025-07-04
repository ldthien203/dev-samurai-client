import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { ReactNode } from 'react'

const mainRouter: { path: string; component: ReactNode }[] = [
  { path: '/', component: <Home /> },
]

function App() {
  return (
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
  )
}

export default App
