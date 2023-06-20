import { Routes, Route } from 'react-router-dom'
import { NotFound } from './components/pages/not-found/index'
// import * as Styled from './components/styles/globalStyles'
import { PageLogged, PageNotLogged } from './components/pages/main/Main'
import { ProtectedRoute } from './components/protected-route/index'
import Registration from './components/pages/auth/Registration'

export function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/login" element={<PageNotLogged />} />
      <Route path="/registration" element={<Registration />} />

      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <PageLogged /> <AppRoutes user={user} />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
