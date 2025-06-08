import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/layout'
import { LoadingScreen } from './components/LoadingScreen'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuthStore, initializeAuth } from './store/authStore'
import { supabase } from './lib/supabase'

// Pages
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import FallbeispielGenerator from './pages/FallbeispielGenerator'
import PflegeplanungWorkflow from './pages/PflegeplanungWorkflow'
import MedikamentenTraining from './pages/MedikamentenTraining'
import AnamnesesSimulator from './pages/AnamnesesSimulator'
import QuizLernkarten from './pages/QuizLernkarten'
import PflegeinfoWorkflow from './pages/PflegeinfoWorkflow'
import Profile from './pages/Profile'
import Subscription from './pages/Subscription'
import Test from './pages/Test'

function App() {
  const { isLoading, createUserProfile } = useAuthStore()

  useEffect(() => {
    const initApp = async () => {
      // Handle email confirmation from URL params first
      const urlParams = new URLSearchParams(window.location.search)
      const accessToken = urlParams.get('access_token')
      const refreshToken = urlParams.get('refresh_token')
      const token = urlParams.get('token')
      
      if (accessToken || token) {
        try {
          console.log('Processing email confirmation...')
          
          // Set the session with tokens from URL
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken || token!,
            refresh_token: refreshToken || ''
          })
          
          if (data.user && !error) {
            console.log('User confirmed:', data.user.email)
            
            // Create user profile
            const userName = data.user.user_metadata?.name || 'User'
            const profileResult = await createUserProfile(data.user.id, data.user.email!, userName)
            
            if (profileResult.success) {
              // Clean URL and redirect to subscription
              window.history.replaceState({}, document.title, '/subscription')
              window.location.replace('/subscription')
              return
            } else {
              console.error('Profile creation failed:', profileResult.error)
            }
          } else {
            console.error('Session setup failed:', error)
          }
        } catch (error) {
          console.error('Email confirmation error:', error)
        }
      }
      
      // Initialize auth if no email confirmation
      await initializeAuth()
    }
    
    initApp()
  }, [createUserProfile])

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
            path="/medikamenten-training" 
            element={
              <ProtectedRoute>
                <Layout>
                  <MedikamentenTraining />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/anamnese-simulator" 
            element={
              <ProtectedRoute>
                <Layout>
                  <AnamnesesSimulator />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/quiz-lernkarten" 
            element={
              <ProtectedRoute>
                <Layout>
                  <QuizLernkarten />
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