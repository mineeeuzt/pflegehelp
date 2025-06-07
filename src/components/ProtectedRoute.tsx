import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { LoadingScreen } from './LoadingScreen'
import { supabase } from '../lib/supabase'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading, createUserProfile } = useAuthStore()

  useEffect(() => {
    // Handle email confirmation when user lands on protected route
    const handleEmailConfirmation = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser()
      
      if (authUser && !user) {
        // User is authenticated but no profile exists - create it
        const userName = authUser.user_metadata?.name || 'User'
        await createUserProfile(authUser.id, authUser.email!, userName)
      }
    }

    if (!isLoading && !user) {
      handleEmailConfirmation()
    }
  }, [isLoading, user, createUserProfile])

  if (isLoading) {
    return <LoadingScreen />
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export { ProtectedRoute }