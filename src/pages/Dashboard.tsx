import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Brain, 
  BookOpen, 
  Target, 
  FileText, 
  Clock, 
  TrendingUp,
  ArrowRight,
  Calendar
} from 'lucide-react'
import { Button, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { useCaseStore } from '../store/caseStore'
import { authService } from '../services/authService'

const Dashboard = () => {
  const { user } = useAuthStore()
  const { cases, loadCases } = useCaseStore()
  const [trialInfo, setTrialInfo] = useState({
    isTrialActive: false,
    daysLeft: 0,
    trialEndsAt: null as string | null
  })

  useEffect(() => {
    if (user) {
      loadCases()
      checkTrialStatus()
    }
  }, [user, loadCases])

  const checkTrialStatus = async () => {
    if (user) {
      const info = await authService.checkTrialStatus(user.id)
      setTrialInfo(info)
    }
  }

  const quickActions = [
    {
      title: 'Fallbeispiel Generator',
      description: 'Erstelle realistische Fallbeispiele',
      icon: <Brain className="h-8 w-8" />,
      href: '/fallbeispiel-generator',
      color: 'from-blue-500 to-blue-600',
      featured: true,
      badge: 'Hauptfunktion'
    },
    {
      title: 'Pflegeplanung',
      description: 'Systematische Pflegeplanungen',
      icon: <BookOpen className="h-8 w-8" />,
      href: '/pflegeplanung',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'PESR-Diagnosen',
      description: 'Strukturierte Pflegediagnosen',
      icon: <FileText className="h-8 w-8" />,
      href: '/pesr-generator',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'SMART-Ziele',
      description: 'Präzise Pflegeziele formulieren',
      icon: <Target className="h-8 w-8" />,
      href: '/smart-ziel',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const recentCases = cases.slice(0, 5)

  const usageStats = [
    {
      label: 'Fallbeispiele',
      value: user?.usage_count_case_generation || 0,
      icon: <Brain className="h-5 w-5" />
    },
    {
      label: 'Pflegepläne',
      value: user?.usage_count_care_plan || 0,
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      label: 'Bewertungen',
      value: user?.usage_count_care_info || 0,
      icon: <FileText className="h-5 w-5" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900"
          >
            Willkommen zurück, {user?.name}!
          </motion.h1>
          <p className="mt-2 text-gray-600">
            Hier ist Ihre Übersicht über alle verfügbaren Lerntools.
          </p>
        </div>

        {/* Trial Status */}
        {trialInfo.isTrialActive && user?.subscription_status === 'trial' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="border-l-4 border-l-primary-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary-500" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Kostenlose Testphase aktiv
                      </h3>
                      <p className="text-gray-600">
                        Noch {trialInfo.daysLeft} Tag{trialInfo.daysLeft !== 1 ? 'e' : ''} verbleibend
                      </p>
                    </div>
                  </div>
                  <Link to="/subscription">
                    <Button size="sm">
                      Abonnement verwalten
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Featured Tool - Fallbeispiel Generator */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/fallbeispiel-generator">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl">
                        <Brain className="h-12 w-12 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h2 className="text-2xl font-bold text-gray-900">
                            Fallbeispiel Generator
                          </h2>
                          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Hauptfunktion
                          </span>
                        </div>
                        <p className="text-lg text-gray-600 mb-2">
                          Erstellen Sie maßgeschneiderte Fallbeispiele für Ihre Pflegeausbildung
                        </p>
                        <p className="text-sm text-gray-500">
                          • Step-by-Step Konfiguration • Alle Krankheitsbereiche • 3 Schwierigkeitsgrade
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-blue-600 text-lg font-semibold mb-2">
                        Jetzt starten
                        <ArrowRight className="ml-2 h-6 w-6" />
                      </div>
                      <p className="text-sm text-gray-500">
                        Für alle Ausbildungsjahre
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>

        {/* Other Tools */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Weitere KI-Lerntools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.slice(1).map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link to={action.href}>
                  <Card className="hover:shadow-lg transition-all duration-200 hover:scale-105 h-full">
                    <CardContent className="p-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} text-white mb-4`}>
                        {action.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {action.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {action.description}
                      </p>
                      <div className="flex items-center text-primary-600 text-sm font-medium">
                        Jetzt starten
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Usage Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Nutzungsstatistik
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {usageStats.map((stat, index) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="text-gray-500">
                          {stat.icon}
                        </div>
                        <span className="text-sm text-gray-600">
                          {stat.label}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Letzte Aktivitäten
                </CardTitle>
              </CardHeader>
              <CardContent>
                {recentCases.length > 0 ? (
                  <div className="space-y-4">
                    {recentCases.map((case_, index) => (
                      <div
                        key={case_.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {case_.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {new Date(case_.created_at).toLocaleDateString('de-DE')}
                          </p>
                        </div>
                        <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                          {case_.case_type}
                        </span>
                      </div>
                    ))}
                    {cases.length > 5 && (
                      <div className="text-center pt-4">
                        <Button variant="outline" size="sm">
                          Alle anzeigen
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">
                      Noch keine Aktivitäten vorhanden
                    </p>
                    <p className="text-sm text-gray-400">
                      Starten Sie mit einem der KI-Tools oben
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard