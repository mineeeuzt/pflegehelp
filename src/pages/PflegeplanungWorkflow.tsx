import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Wand2, Copy, Plus } from 'lucide-react'
import { Button, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { caseService, type PflegeplanungInput } from '../services/caseService'

const PflegeplanungWorkflow = () => {
  const { user } = useAuthStore()
  const [input, setInput] = useState<PflegeplanungInput>({
    patientensituation: '',
    vorgeschichte: '',
    aktuelleProbleme: ''
  })
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!user) return

    setIsLoading(true)
    setError('')

    try {
      const response = await caseService.generatePflegeplanung(input, user.id)
      setResult(response)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result)
    }
  }

  const canGenerate = input.patientensituation.trim() !== ''

  // Show loading animation when generating
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            className="w-32 h-32 border border-slate-300 rounded-lg flex items-center justify-center bg-white shadow-lg mb-6 mx-auto"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Plus className="h-16 w-16 text-slate-600" strokeWidth={1.5} />
          </motion.div>
          <motion.h2 
            className="text-2xl font-light text-gray-900 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Pflegeplanung
          </motion.h2>
          <motion.p 
            className="text-gray-600 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Erstelle systematische Pflegeplanung...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-light text-gray-900 mb-4">
            Pflegeplanung Workflow
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Systematische Erstellung von Pflegeplänen nach NANDA-I Klassifikation
          </p>
        </motion.div>

        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="border border-gray-200">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="flex items-center text-gray-900 font-medium">
                <BookOpen className="h-5 w-5 mr-3 text-gray-600" />
                Patientendaten eingeben
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Patientensituation *
                </label>
                <textarea
                  value={input.patientensituation}
                  onChange={(e) => setInput(prev => ({ ...prev, patientensituation: e.target.value }))}
                  placeholder="Beschreiben Sie die aktuelle Situation des Patienten..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent font-light transition-all"
                  rows={5}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Relevante Vorgeschichte (optional)
                </label>
                <textarea
                  value={input.vorgeschichte}
                  onChange={(e) => setInput(prev => ({ ...prev, vorgeschichte: e.target.value }))}
                  placeholder="Medizinische Vorgeschichte, bisherige Behandlungen..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent font-light transition-all"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Aktuelle Probleme (optional)
                </label>
                <textarea
                  value={input.aktuelleProbleme}
                  onChange={(e) => setInput(prev => ({ ...prev, aktuelleProbleme: e.target.value }))}
                  placeholder="Bekannte Pflegeprobleme, Symptome..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent font-light transition-all"
                  rows={4}
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm font-light">{error}</p>
                </div>
              )}

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-medium text-gray-900 mb-3">Was wird erstellt:</h4>
                <ul className="text-sm text-gray-700 space-y-2 font-light">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Pflegediagnosen nach NANDA-I
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    SMART-Pflegeziele
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Evidence-basierte Pflegemaßnahmen
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Evaluationskriterien
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Generate Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <Button
            onClick={handleGenerate}
            disabled={!canGenerate || isLoading}
            className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-light disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center space-x-3"
          >
            <Wand2 className="h-5 w-5" />
            <span>Pflegeplanung generieren</span>
          </Button>
        </motion.div>

        {/* Result Display */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border border-gray-200">
              <CardHeader className="border-b border-gray-100 flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-gray-900 font-medium">
                  Generierte Pflegeplanung
                </CardTitle>
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  size="sm"
                  className="border-gray-300 hover:border-gray-400 text-gray-700 flex items-center space-x-2"
                >
                  <Copy className="h-4 w-4" />
                  <span>Kopieren</span>
                </Button>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-light leading-relaxed">
                    {result}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default PflegeplanungWorkflow