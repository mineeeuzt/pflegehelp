import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Calendar,
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  Play,
  Brain
} from 'lucide-react'
import { Button, Card, CardContent } from '../components/ui'
import { useQuizStore } from '../store/quizStore'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { stats } = useQuizStore()

  // Mock data for demonstration
  const recentActivity = [
    {
      id: 1,
      type: 'quiz',
      title: 'Anatomie & Physiologie',
      score: 85,
      time: '2 Stunden her',
      icon: Brain
    },
    {
      id: 2,
      type: 'flashcard',
      title: 'Medikamentenlehre',
      cardsReviewed: 12,
      time: '1 Tag her',
      icon: BookOpen
    },
    {
      id: 3,
      type: 'quiz',
      title: 'Hygiene & Infektionsschutz',
      score: 92,
      time: '3 Tage her',
      icon: Brain
    }
  ]

  const quickActions = [
    {
      title: 'Spontanes Quiz',
      description: 'Zufällige Fragen aus allen Kategorien',
      icon: Brain,
      href: '/quiz-lernkarten',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Lernkarten durchgehen',
      description: 'Wiederhole deine schwierigsten Karten',
      icon: BookOpen,
      href: '/flashcards',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Fortschritt ansehen',
      description: 'Detaillierte Statistiken und Trends',
      icon: TrendingUp,
      href: '/progress',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ]

  const upcomingGoals = [
    {
      title: '100% in Notfallmedizin',
      progress: 85,
      deadline: 'Bis Freitag',
      color: 'bg-red-100 text-red-700 border-red-200'
    },
    {
      title: '50 Lernkarten heute',
      progress: 68,
      deadline: 'Heute',
      color: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    {
      title: 'Anatomie Meisterschaft',
      progress: 92,
      deadline: 'Diese Woche',
      color: 'bg-green-100 text-green-700 border-green-200'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Willkommen zurück! 👋
          </h1>
          <p className="text-gray-600">
            Bereit für eine neue Lerneinheit? Hier ist dein aktueller Fortschritt.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium mb-1">Gelernte Themen</p>
                  <p className="text-2xl font-bold text-blue-900">
                    {Object.keys(stats.categoryStats).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium mb-1">Quiz-Score</p>
                  <p className="text-2xl font-bold text-green-900">
                    {Math.round(stats.averageScore)}%
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 text-sm font-medium mb-1">Lernsträhne</p>
                  <p className="text-2xl font-bold text-orange-900">
                    {stats.streak}
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium mb-1">Quiz absolviert</p>
                  <p className="text-2xl font-bold text-purple-900">
                    {stats.totalQuizzes}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Jetzt lernen
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {quickActions.map((action, index) => (
                    <Link
                      key={action.title}
                      to={action.href}
                      className="block group"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className={`${action.color} text-white p-4 rounded-lg transition-all group-hover:scale-105`}
                      >
                        <action.icon className="w-8 h-8 mb-3" />
                        <h3 className="font-semibold mb-1">{action.title}</h3>
                        <p className="text-sm opacity-90">{action.description}</p>
                      </motion.div>
                    </Link>
                  ))}
                </div>

                <Link to="/quiz-lernkarten">
                  <Button size="lg" className="w-full">
                    <Play className="w-5 h-5 mr-2" />
                    Lerneinheit starten
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Letzte Aktivitäten
                </h3>
                
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <activity.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{activity.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          {activity.type === 'quiz' ? (
                            <span>Score: {activity.score}%</span>
                          ) : (
                            <span>{activity.cardsReviewed} Karten wiederholt</span>
                          )}
                          <span>•</span>
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Goals & Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Today's Goals */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Deine Ziele
                  </h3>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="space-y-4">
                  {upcomingGoals.map((goal, index) => (
                    <motion.div
                      key={goal.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className={`p-3 rounded-lg border ${goal.color}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{goal.title}</h4>
                        <span className="text-xs">{goal.deadline}</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div 
                          className="h-2 bg-current rounded-full transition-all duration-300"
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                      <div className="text-xs mt-1">{goal.progress}% erreicht</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Streak */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Lernsträhne
                  </h3>
                  <p className="text-3xl font-bold text-yellow-600 mb-2">
                    {stats.streak} Tage
                  </p>
                  <p className="text-sm text-gray-600">
                    Fantastisch! Bleib dran für noch bessere Ergebnisse.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HomePage