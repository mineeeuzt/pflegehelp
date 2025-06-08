import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, ArrowRight, Plus } from 'lucide-react'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  const { signIn } = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await signIn(email, password)
      
      if (result.success) {
        // Use navigate instead of window.location for SPA navigation
        navigate('/dashboard')
      } else {
        setError(result.error || 'Anmeldung fehlgeschlagen')
      }
    } catch (error) {
      setError('Ein unbekannter Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3">
            <div className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center">
              <Plus className="h-4 w-4 text-gray-600" strokeWidth={1.5} />
            </div>
            <span className="text-2xl font-light text-gray-900">
              PflegeHelp
            </span>
          </Link>
          <h2 className="mt-8 text-2xl font-light text-gray-900">
            Anmelden
          </h2>
          <p className="mt-2 text-gray-500 font-light">
            Melden Sie sich in Ihrem Konto an
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Anmelden</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md"
                >
                  {error}
                </motion.div>
              )}

              <Input
                label="E-Mail-Adresse"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihre.email@beispiel.de"
                icon={<Mail className="h-5 w-5 text-gray-400" />}
                required
              />

              <Input
                label="Passwort"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ihr Passwort"
                icon={<Lock className="h-5 w-5 text-gray-400" />}
                required
              />

              <Button
                type="submit"
                className="w-full"
                loading={isLoading}
                disabled={!email || !password}
              >
                Anmelden
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
                    Noch kein Konto?
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/register">
                  <Button variant="outline" className="w-full">
                    Jetzt registrieren
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm text-gray-600">
          Probleme beim Anmelden?{' '}
          <a href="mailto:support@pflegehelp.de" className="text-gray-700 hover:text-gray-900 underline">
            Kontaktieren Sie den Support
          </a>
        </p>
      </motion.div>
    </div>
  )
}

export default Login