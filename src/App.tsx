import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'
import ResetPasswordStep2 from './components/ResetPasswordStep2'
import Dashboard from './components/Dashboard'

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
        } />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-step2" element={<ResetPasswordStep2 />} />
        <Route path="/dashboard" element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/" />
        } />
      </Routes>
    </Router>
  )
}

export default App