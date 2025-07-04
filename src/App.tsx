import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const mainRouter = [
  { path: '/', component: <Home /> },
  { path: '/home', component: <Home /> },
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
