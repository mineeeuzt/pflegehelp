import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Brain, 
  BookOpen, 
  Target, 
  FileText, 
  Clock,
  ArrowRight
} from 'lucide-react'
import { Button, Card, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { authService } from '../services/authService'

const Dashboard = () => {
  const { user } = useAuthStore()
  const [trialInfo, setTrialInfo] = useState({
    isTrialActive: false,
    daysLeft: 0,
    trialEndsAt: null as string | null
  })

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

  const tools = [
    {
      title: 'Fallbeispiel Generator',
      description: 'Realistische Fallbeispiele erstellen',
      icon: Brain,
      href: '/fallbeispiel-generator',
      primary: true
    },
    {
      title: 'Pflegeplanung',
      description: 'Systematische Pflegeplanungen',
      icon: BookOpen,
      href: '/pflegeplanung'
    },
    {
      title: 'PESR-Diagnosen',
      description: 'Strukturierte Pflegediagnosen',
      icon: FileText,
      href: '/pesr-generator'
    },
    {
      title: 'SMART-Ziele',
      description: 'Präzise Pflegeziele formulieren',
      icon: Target,
      href: '/smart-ziel'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-light text-gray-900 mb-4">
            PflegeHelp
          </h1>
          <p className="text-xl text-gray-600 font-light">
            KI-gestützte Lernplattform für die Pflegeausbildung
          </p>
        </motion.div>

        {/* Trial Status */}
        {trialInfo.isTrialActive && user?.subscription_status === 'trial' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Testphase aktiv
                    </p>
                    <p className="text-sm text-gray-600">
                      Noch {trialInfo.daysLeft} Tag{trialInfo.daysLeft !== 1 ? 'e' : ''}
                    </p>
                  </div>
                </div>
                <Link to="/subscription">
                  <Button variant="outline" size="sm">
                    Verwalten
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to={tool.href}>
                  <Card className={`group transition-all duration-300 hover:shadow-2xl border-2 relative overflow-hidden ${
                    tool.primary 
                      ? 'border-gray-900 bg-gray-900 text-white hover:bg-gray-800' 
                      : 'border-gray-200 hover:border-gray-400 bg-white hover:bg-gray-50'
                  }`}>
                    {/* Subtle gradient overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity ${
                      tool.primary ? 'bg-white' : 'bg-gray-900'
                    }`} />
                    
                    <CardContent className="p-8 relative">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-2 rounded-lg transition-colors ${
                          tool.primary 
                            ? 'bg-white/10 group-hover:bg-white/20' 
                            : 'bg-gray-100 group-hover:bg-gray-200'
                        }`}>
                          <Icon className={`h-6 w-6 ${
                            tool.primary ? 'text-white' : 'text-gray-700'
                          }`} />
                        </div>
                        <ArrowRight className={`h-5 w-5 transform translate-x-0 group-hover:translate-x-1 opacity-60 group-hover:opacity-100 transition-all ${
                          tool.primary ? 'text-white' : 'text-gray-500'
                        }`} />
                      </div>
                      <h3 className={`text-xl font-medium mb-3 ${
                        tool.primary ? 'text-white' : 'text-gray-900'
                      }`}>
                        {tool.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        tool.primary ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {tool.description}
                      </p>
                      
                      {/* Bottom accent line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                        tool.primary ? 'bg-white/30' : 'bg-gray-900'
                      }`} />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard