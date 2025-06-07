import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { LoadingScreen } from './LoadingScreen'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuthStore()

  if (isLoading) {
    return <LoadingScreen />
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  // Check subscription status
  const hasActiveSubscription = user.subscription_status === 'active' || 
                                user.subscription_status === 'trial'

  if (!hasActiveSubscription) {
    return <Navigate to="/subscription" replace />
  }

  // If trial is expired, redirect to subscription
  if (user.subscription_status === 'trial' && user.trial_ends_at) {
    const trialEnd = new Date(user.trial_ends_at)
    const now = new Date()
    
    if (now > trialEnd) {
      return <Navigate to="/subscription" replace />
    }
  }

  return <>{children}</>
}

export { ProtectedRoute }