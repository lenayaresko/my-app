import { Navigate } from 'react-router-dom'

export function ProtectedRoute({
  children,
  redirectPath = '/login',
  isAllowed,
}) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return children
}

export default ProtectedRoute
