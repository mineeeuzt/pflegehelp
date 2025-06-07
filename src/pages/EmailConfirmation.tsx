import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuthStore } from '../store/authStore'
import { Button } from '../components/ui/Button'
import { Check, X, RefreshCw, Mail, AlertCircle, Clock } from 'lucide-react'

const EmailConfirmation = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { createUserProfile, loadUser } = useAuthStore()
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'expired'>('loading')
  const [message, setMessage] = useState('')
  const [isRetrying, setIsRetrying] = useState(false)

  const confirmEmail = async () => {
    try {
      setStatus('loading')
      setMessage('Bestätige deine E-Mail-Adresse...')
      
      // Get token from URL parameters
      const accessToken = searchParams.get('access_token')
      const refreshToken = searchParams.get('refresh_token')
      const token = searchParams.get('token')
      const type = searchParams.get('type')
      
      if (!accessToken && !token) {
        setStatus('error')
        setMessage('Ungültiger Bestätigungslink. Bitte fordere einen neuen Link an.')
        return
      }

      // Set the session using the tokens from the email
      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken || token!,
        refresh_token: refreshToken || ''
      })

      if (error) {
        if (error.message.includes('expired') || error.message.includes('invalid')) {
          setStatus('expired')
          setMessage('Der Bestätigungslink ist abgelaufen. Bitte fordere einen neuen Link an.')
        } else {
          setStatus('error')
          setMessage(`Fehler bei der E-Mail-Bestätigung: ${error.message}`)
        }
        return
      }

      if (data.user) {
        // Create user profile if it doesn't exist
        const userName = data.user.user_metadata?.name || 'User'
        const profileResult = await createUserProfile(
          data.user.id,
          data.user.email!,
          userName
        )

        if (!profileResult.success) {
          console.warn('Profile creation warning:', profileResult.error)
          // Don't fail the confirmation if profile already exists
        }

        await loadUser()
        
        setStatus('success')
        setMessage('E-Mail erfolgreich bestätigt!')
        
        // Redirect to Stripe checkout after 2 seconds
        setTimeout(() => {
          navigate('/subscription')
        }, 2000)
      }
    } catch (error) {
      console.error('Email confirmation error:', error)
      setStatus('error')
      setMessage('Verbindungsfehler. Bitte überprüfe deine Internetverbindung und versuche es erneut.')
    }
  }

  const retryConfirmation = async () => {
    setIsRetrying(true)
    await confirmEmail()
    setIsRetrying(false)
  }

  const requestNewLink = () => {
    navigate('/register', { 
      state: { 
        message: 'Bitte gib deine E-Mail-Adresse erneut ein, um einen neuen Bestätigungslink zu erhalten.' 
      } 
    })
  }

  useEffect(() => {
    // Check if user is already confirmed and authenticated
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user && user.email_confirmed_at) {
        navigate('/dashboard')
        return
      }
      
      // If not confirmed, proceed with confirmation
      confirmEmail()
    }
    
    checkUser()
  }, [])

  const renderStatus = () => {
    switch (status) {
      case 'loading':
        return (
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              E-Mail wird bestätigt...
            </h2>
            <p className="text-gray-600">{message}</p>
          </div>
        )
      
      case 'success':
        return (
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Erfolgreich bestätigt!
            </h2>
            <p className="text-gray-600 mb-4">{message}</p>
            <p className="text-sm text-gray-500">
              Du wirst automatisch zu deinem Abonnement weitergeleitet...
            </p>
          </div>
        )
      
      case 'expired':
        return (
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Link abgelaufen
            </h2>
            <p className="text-gray-600 mb-6">{message}</p>
            <div className="space-y-3">
              <Button 
                onClick={requestNewLink}
                className="w-full"
              >
                <Mail className="w-4 h-4 mr-2" />
                Neuen Bestätigungslink anfordern
              </Button>
              <Button 
                variant="outline" 
                onClick={retryConfirmation}
                disabled={isRetrying}
                className="w-full"
              >
                {isRetrying ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                Erneut versuchen
              </Button>
            </div>
          </div>
        )
      
      case 'error':
        return (
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <X className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Bestätigung fehlgeschlagen
            </h2>
            <p className="text-gray-600 mb-6">{message}</p>
            <div className="space-y-3">
              <Button 
                onClick={retryConfirmation}
                disabled={isRetrying}
                className="w-full"
              >
                {isRetrying ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                Erneut versuchen
              </Button>
              <Button 
                variant="outline" 
                onClick={requestNewLink}
                className="w-full"
              >
                <Mail className="w-4 h-4 mr-2" />
                Neuen Bestätigungslink anfordern
              </Button>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm text-blue-800 font-medium">
                    Brauchst du Hilfe?
                  </p>
                  <p className="text-sm text-blue-700">
                    Kontaktiere unseren Support unter: 
                    <a href="mailto:support@pflegehelp.de" className="underline ml-1">
                      support@pflegehelp.de
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        {renderStatus()}
      </div>
    </div>
  )
}

export default EmailConfirmation