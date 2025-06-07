import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/layout'
import { LoadingScreen } from './components/LoadingScreen'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuthStore } from './store/authStore'

// Pages
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import FallbeispielGenerator from './pages/FallbeispielGenerator'
import PflegeplanungWorkflow from './pages/PflegeplanungWorkflow'
import PESRGenerator from './pages/PESRGenerator'
import SMARTZielAssistent from './pages/SMARTZielAssistent'
import PflegeinfoWorkflow from './pages/PflegeinfoWorkflow'
import Profile from './pages/Profile'
import Subscription from './pages/Subscription'
import Test from './pages/Test'

function App() {
  const { loadUser, isLoading } = useAuthStore()

  useEffect(() => {
    loadUser()
  }, [loadUser])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/" 
            element={
              <Layout>
                <LandingPage />
              </Layout>
            } 
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />
          <Route 
            path="/register" 
            element={<Register />} 
          />

          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/fallbeispiel-generator" 
            element={
              <ProtectedRoute>
                <Layout>
                  <FallbeispielGenerator />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/pflegeplanung" 
            element={
              <ProtectedRoute>
                <Layout>
                  <PflegeplanungWorkflow />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/pesr-generator" 
            element={
              <ProtectedRoute>
                <Layout>
                  <PESRGenerator />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/smart-ziel" 
            element={
              <ProtectedRoute>
                <Layout>
                  <SMARTZielAssistent />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/pflegeinfo-workflow" 
            element={
              <ProtectedRoute>
                <Layout>
                  <PflegeinfoWorkflow />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Layout>
                  <Profile />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/subscription" 
            element={
              <ProtectedRoute>
                <Layout>
                  <Subscription />
                </Layout>
              </ProtectedRoute>
            } 
          />

          {/* Test Route */}
          <Route path="/test" element={<Test />} />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App