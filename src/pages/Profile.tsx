import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Calendar, Shield } from 'lucide-react'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { authService } from '../services/authService'

const Profile = () => {
  const { user, loadUser } = useAuthStore()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [trialInfo, setTrialInfo] = useState({
    isTrialActive: false,
    daysLeft: 0,
    trialEndsAt: null as string | null
  })

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email
      })
      checkTrialStatus()
    }
  }, [user])

  const checkTrialStatus = async () => {
    if (user) {
      const info = await authService.checkTrialStatus(user.id)
      setTrialInfo(info)
    }
  }

  const handleSave = async () => {
    // Implementation would update user profile
    setIsEditing(false)
    await loadUser()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Profil</h1>
          <p className="text-gray-600">Verwalten Sie Ihre Kontoinformationen</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Persönliche Informationen
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? 'Abbrechen' : 'Bearbeiten'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Input
                  label="Vollständiger Name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  disabled={!isEditing}
                  icon={<User className="h-5 w-5 text-gray-400" />}
                />

                <Input
                  label="E-Mail-Adresse"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  disabled={!isEditing}
                  icon={<Mail className="h-5 w-5 text-gray-400" />}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Registriert seit
                  </label>
                  <div className="flex items-center px-3 py-2 bg-gray-50 rounded-md">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">
                      {formatDate(user.created_at)}
                    </span>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex space-x-3">
                    <Button onClick={handleSave}>
                      Änderungen speichern
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(false)}
                    >
                      Abbrechen
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Account Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Account Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Abonnement Status
                    </label>
                    <div className="mt-1">
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

                  {trialInfo.isTrialActive && user.subscription_status === 'trial' && (
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Testphase
                      </label>
                      <p className="text-sm text-gray-600 mt-1">
                        Noch {trialInfo.daysLeft} Tag{trialInfo.daysLeft !== 1 ? 'e' : ''} verbleibend
                      </p>
                      {trialInfo.trialEndsAt && (
                        <p className="text-xs text-gray-500">
                          Endet am {formatDate(trialInfo.trialEndsAt)}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nutzungsstatistik</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Fallbeispiele</span>
                    <span className="font-medium">{user.usage_count_case_generation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Pflegepläne</span>
                    <span className="font-medium">{user.usage_count_care_plan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Bewertungen</span>
                    <span className="font-medium">{user.usage_count_care_info}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Profile