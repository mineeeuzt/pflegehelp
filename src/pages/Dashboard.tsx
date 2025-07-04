import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Target, 
  FileText, 
  ArrowRight,
  Plus,
  Heart
} from 'lucide-react'
import { Card, CardContent } from '../components/ui'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading time to show animation
  setTimeout(() => setIsLoading(false), 1500)

  const tools = [
    {
      title: 'Fallbeispiel Generator',
      description: 'Realistische Fallbeispiele erstellen',
      icon: Brain,
      href: '/fallbeispiel-generator',
      primary: false
    },
    {
      title: 'Medikamenten-Training',
      description: 'Interaktives Drag & Drop Medikamenten-Spiel',
      icon: Heart,
      href: '/medikamenten-training'
    },
    {
      title: 'Anamnese-Simulator',
      description: 'Interaktive Patientengespräche üben',
      icon: FileText,
      href: '/anamnese-simulator'
    },
    {
      title: 'Quiz & Lernkarten',
      description: 'Interaktives Lernsystem mit Spaced Repetition',
      icon: Target,
      href: '/quiz-lernkarten'
    }
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [0.5, 1.2, 1],
            opacity: [0, 1, 1]
          }}
          transition={{ 
            duration: 1.5,
            times: [0, 0.7, 1],
            ease: "easeOut"
          }}
          className="flex items-center justify-center"
        >
          <div className="w-16 h-16 border border-slate-300 rounded-lg flex items-center justify-center bg-white shadow-sm">
            <Plus className="h-8 w-8 text-slate-600" strokeWidth={1.5} />
          </div>
        </motion.div>
      </div>
    )
  }

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
            Lernplattform für die generalistische Pflegeausbildung
          </p>
        </motion.div>


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
                  <Card className="group transition-all duration-300 hover:shadow-lg border border-gray-200 hover:border-gray-300 bg-white relative overflow-hidden">
                    <CardContent className="p-8 relative">
                      <div className="flex items-start justify-between mb-6">
                        <div className="p-3 bg-gray-50 group-hover:bg-gray-100 rounded-xl transition-colors">
                          <Icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <ArrowRight className="h-5 w-5 transform translate-x-0 group-hover:translate-x-1 opacity-40 group-hover:opacity-60 transition-all text-gray-400" />
                      </div>
                      <h3 className="text-xl font-medium mb-3 text-gray-900">
                        {tool.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 font-light">
                        {tool.description}
                      </p>
                      
                      {/* Subtle bottom accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-px transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-gray-300" />
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