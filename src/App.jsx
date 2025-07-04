import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/sign-in" element={<Login />} />
        <Route path="auth/sign-up" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
