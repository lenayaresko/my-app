import { Routes, Route } from 'react-router-dom'
import { Login } from './components/pages/auth/Login'
import { NotFound } from './components/pages/not-found/index'
import { Main } from './components/styles/globalStyles'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
