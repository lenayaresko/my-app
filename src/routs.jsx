import { Routes, Route } from 'react-router-dom'
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
  return (
    <Routes>
      <Route path="/login" element={<PageNotLogged />} />
      <Route path="/registration" element={<RegistrationPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<PageLogged />} />
        <Route path="/dayplaylist" element={<PageDayPlaylist />} />
        <Route path="/danceplaylist" element={<PageDancePlaylist />} />
        <Route path="/indieplaylist" element={<PageIndiePlaylist />} />
        <Route path="/myplaylist" element={<PageMyPlaylist />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
