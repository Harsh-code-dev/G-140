import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignInPage from './pages/SignInPage'
import Chat from './pages/Chat'
import Memory from './pages/Memory'
import ProtectedRoute from './context/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      />
      <Route
        path="/memory"
        element={
          <ProtectedRoute>
            <Memory />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}