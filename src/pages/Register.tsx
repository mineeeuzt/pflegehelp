import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, User, ArrowRight, Check } from 'lucide-react'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { authService } from '../services/authService'
import { createCheckoutSession, STRIPE_PRICES, APP_CONFIG } from '../lib/stripe'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [passwordValidation, setPasswordValidation] = useState<string[]>([])
  
  const { signUp } = useAuthStore()
  const navigate = useNavigate()

  const handleInputChange = async (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }

    if (field === 'password') {
      const validation = await authService.validatePassword(value)
      setPasswordValidation(validation.errors)
    }
  }

  const validateForm = async () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse'
    }

    const passwordValidation = await authService.validatePassword(formData.password)
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.errors[0]
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwörter stimmen nicht überein'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!(await validateForm())) {
      return
    }

    setIsLoading(true)

    try {
      const result = await signUp(formData.email, formData.password, formData.name)
      
      if (result.success) {
        const checkoutData = await createCheckoutSession({
          priceId: STRIPE_PRICES.monthly,
          successUrl: `${APP_CONFIG.appUrl}/dashboard?success=true`,
          cancelUrl: `${APP_CONFIG.appUrl}/register?canceled=true`
        })
        
        window.location.href = checkoutData.sessionUrl
      } else {
        setErrors({ general: result.error || 'Registrierung fehlgeschlagen' })
      }
    } catch (error) {
      setErrors({ general: 'Ein unbekannter Fehler ist aufgetreten' })
    } finally {
      setIsLoading(false)
    }
  }

  const passwordRequirements = [
    { text: 'Mindestens 8 Zeichen', met: formData.password.length >= 8 },
    { text: 'Einen Großbuchstaben', met: /[A-Z]/.test(formData.password) },
    { text: 'Einen Kleinbuchstaben', met: /[a-z]/.test(formData.password) },
    { text: 'Eine Zahl', met: /\d/.test(formData.password) },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <img 
              src="/peaceful-ghost.png" 
              alt="PflegeHelp" 
              className="h-12 w-12"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              PflegeHelp
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Kostenlos registrieren
          </h2>
          <p className="mt-2 text-gray-600">
            {APP_CONFIG.trialDays} Tage kostenloses Testen, dann €{APP_CONFIG.monthlyPrice}/Monat
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Registrierung</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.general && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md"
                >
                  {errors.general}
                </motion.div>
              )}

              <Input
                label="Vollständiger Name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Max Mustermann"
                icon={<User className="h-5 w-5 text-gray-400" />}
                error={errors.name}
                required
              />

              <Input
                label="E-Mail-Adresse"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="ihre.email@beispiel.de"
                icon={<Mail className="h-5 w-5 text-gray-400" />}
                error={errors.email}
                required
              />

              <div>
                <Input
                  label="Passwort"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Sicheres Passwort"
                  icon={<Lock className="h-5 w-5 text-gray-400" />}
                  error={errors.password}
                  required
                />
                
                {formData.password && (
                  <div className="mt-2 space-y-1">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Check 
                          className={`h-4 w-4 mr-2 ${
                            req.met ? 'text-green-500' : 'text-gray-400'
                          }`} 
                        />
                        <span className={req.met ? 'text-green-700' : 'text-gray-600'}>
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Input
                label="Passwort bestätigen"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="Passwort wiederholen"
                icon={<Lock className="h-5 w-5 text-gray-400" />}
                error={errors.confirmPassword}
                required
              />

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
                <h4 className="font-medium text-blue-900 mb-2">Was Sie erhalten:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>✓ {APP_CONFIG.trialDays} Tage kostenlos testen</li>
                  <li>✓ Alle KI-Features verfügbar</li>
                  <li>✓ Jederzeit kündbar</li>
                  <li>✓ Sichere Zahlung mit Stripe</li>
                </ul>
              </div>

              <Button
                type="submit"
                className="w-full"
                loading={isLoading}
                disabled={!formData.name || !formData.email || !formData.password || !formData.confirmPassword || passwordValidation.length > 0}
              >
                Kostenlos registrieren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Bereits registriert?
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Jetzt anmelden
                  </Button>
                </Link>
              </div>
            </div>

            <p className="mt-6 text-xs text-gray-500 text-center">
              Mit der Registrierung stimmen Sie unseren{' '}
              <a href="#" className="text-primary-600 hover:text-primary-500">
                AGB
              </a>{' '}
              und{' '}
              <a href="#" className="text-primary-600 hover:text-primary-500">
                Datenschutzbestimmungen
              </a>{' '}
              zu.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default Register