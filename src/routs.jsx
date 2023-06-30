import { useNavigate, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { NotFound } from './components/pages/not-found/index'
import {
  PageLogged,
  PageNotLogged,
  PageDayPlaylist,
  PageDancePlaylist,
  PageIndiePlaylist,
  PageMyPlaylist,
} from './components/pages/main/Main'
import { ProtectedRoute } from './components/protected-route/index'
import RegistrationPage from './components/pages/auth/Registration'

export function AppRoutes() {
  const navigate = useNavigate()
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    if (document.cookie.match('token')) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [navigate, setIsLogged])
  return (
    <Routes>
      <Route path="/login" element={<PageNotLogged />} />
      <Route path="/registration" element={<RegistrationPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={isLogged}>
            <PageLogged />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dayplaylist"
        element={
          <ProtectedRoute isAllowed={isLogged}>
            <PageDayPlaylist />
          </ProtectedRoute>
        }
      />

      <Route
        path="/danceplaylist"
        element={
          <ProtectedRoute isAllowed={isLogged}>
            <PageDancePlaylist />
          </ProtectedRoute>
        }
      />

      <Route
        path="/indieplaylist"
        element={
          <ProtectedRoute isAllowed={isLogged}>
            <PageIndiePlaylist />
          </ProtectedRoute>
        }
      />

      <Route
        path="/myplaylist"
        element={
          <ProtectedRoute isAllowed={isLogged}>
            <PageMyPlaylist />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
