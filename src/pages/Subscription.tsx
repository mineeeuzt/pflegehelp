import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Check, AlertCircle } from 'lucide-react'
import { Button, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { authService } from '../services/authService'
import { createCheckoutSession, STRIPE_PRICES, APP_CONFIG } from '../lib/stripe'

const Subscription = () => {
  const { user } = useAuthStore()
  const [trialInfo, setTrialInfo] = useState({
    isTrialActive: false,
    daysLeft: 0,
    trialEndsAt: null as string | null
  })
  const [isLoading, setIsLoading] = useState('')

  useEffect(() => {
    if (user) {
      checkTrialStatus()
    }
  }, [user])

  const checkTrialStatus = async () => {
    if (user) {
      const info = await authService.checkTrialStatus(user.id)
      setTrialInfo(info)
    }
  }

  const handleUpgrade = async (priceId: string, plan: string) => {
    setIsLoading(plan)
    
    try {
      const checkoutData = await createCheckoutSession({
        priceId,
        successUrl: `${APP_CONFIG.appUrl}/subscription?success=true`,
        cancelUrl: `${APP_CONFIG.appUrl}/subscription?canceled=true`
      })
      
      window.location.href = checkoutData.sessionUrl
    } catch (error) {
      console.error('Error creating checkout session:', error)
      setIsLoading('')
    }
  }

  const openCustomerPortal = () => {
    // Would redirect to Stripe Customer Portal
    window.open('https://billing.stripe.com/p/login/test_...')
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Abonnement</h1>
          <p className="text-gray-600">Verwalten Sie Ihr Abonnement und Zahlungsmethoden</p>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Aktueller Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">Plan</label>
                  <p className="text-lg font-semibold">
                    {user.subscription_status === 'trial' && 'Kostenlose Testphase'}
                    {user.subscription_status === 'active' && 'Premium Plan'}
                    {user.subscription_status === 'expired' && 'Abgelaufen'}
                    {user.subscription_status === 'cancelled' && 'Gekündigt'}
                  </p>
                </div>
                
                {trialInfo.isTrialActive && user.subscription_status === 'trial' && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">Verbleibende Zeit</label>
                    <p className="text-lg font-semibold text-orange-600">
                      {trialInfo.daysLeft} Tag{trialInfo.daysLeft !== 1 ? 'e' : ''}
                    </p>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    user.subscription_status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : user.subscription_status === 'trial'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {user.subscription_status === 'active' && 'Aktiv'}
                    {user.subscription_status === 'trial' && 'Testphase'}
                    {user.subscription_status === 'expired' && 'Abgelaufen'}
                    {user.subscription_status === 'cancelled' && 'Gekündigt'}
                  </span>
                </div>
              </div>

              {user.subscription_status === 'active' && (
                <div className="mt-6">
                  <Button onClick={openCustomerPortal} variant="outline">
                    Zahlungsdetails verwalten
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Trial Warning */}
        {trialInfo.isTrialActive && user.subscription_status === 'trial' && trialInfo.daysLeft <= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-orange-900">
                      Ihre Testphase endet bald
                    </h3>
                    <p className="text-orange-800 mt-1">
                      Ihre {APP_CONFIG.trialDays}-tägige kostenlose Testphase endet in {trialInfo.daysLeft} Tag{trialInfo.daysLeft !== 1 ? 'en' : ''}. 
                      Wählen Sie einen Plan, um weiterhin alle Features nutzen zu können.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Pricing Plans */}
        {(user.subscription_status === 'trial' || user.subscription_status === 'expired' || user.subscription_status === 'cancelled') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Wählen Sie Ihren Plan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {/* Monthly Plan */}
              <Card className="border-2 border-primary-200">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Monatlich</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">€{APP_CONFIG.monthlyPrice}</span>
                    <span className="text-gray-600">/Monat</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary-500 mr-2" />
                      Alle KI-Features
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary-500 mr-2" />
                      Unbegrenzte Nutzung
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary-500 mr-2" />
                      Support per E-Mail
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary-500 mr-2" />
                      Jederzeit kündbar
                    </li>
                  </ul>
                  <Button 
                    className="w-full"
                    onClick={() => handleUpgrade(STRIPE_PRICES.monthly, 'monthly')}
                    loading={isLoading === 'monthly'}
                  >
                    Monatlich abonnieren
                  </Button>
                </CardContent>
              </Card>

              {/* Yearly Plan */}
              <Card className="border-2 border-secondary-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Beliebt
                  </span>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Jährlich</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">€{APP_CONFIG.yearlyPrice}</span>
                    <span className="text-gray-600">/Jahr</span>
                    <div className="text-sm text-primary-600 font-medium">
                      2 Monate kostenlos
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary-500 mr-2" />
                      Alle KI-Features
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary-500 mr-2" />
                      Unbegrenzte Nutzung
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary-500 mr-2" />
                      Prioritäts-Support
                    </li>
                    <li className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary-500 mr-2" />
                      17% Ersparnis
                    </li>
                  </ul>
                  <Button 
                    className="w-full"
                    onClick={() => handleUpgrade(STRIPE_PRICES.yearly, 'yearly')}
                    loading={isLoading === 'yearly'}
                  >
                    Jährlich abonnieren
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Subscription