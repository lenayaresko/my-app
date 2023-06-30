import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedRoute({ redirectPath = '/login' }) {
  const isLogged = document.cookie.match('token')
  if (!isLogged) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
