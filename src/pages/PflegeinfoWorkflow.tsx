import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileCheck, Wand2, Copy, Plus } from 'lucide-react'
import { Button, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { caseService, type PflegeinfoInput } from '../services/caseService'

const PflegeinfoWorkflow = () => {
  const { user } = useAuthStore()
  const [input, setInput] = useState<PflegeinfoInput>({
    dokumentation: '',
    pflegemassnahmen: '',
    beobachtungen: ''
  })
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleEvaluate = async () => {
    if (!user) return

    setIsLoading(true)
    setError('')

    try {
      const response = await caseService.evaluatePflegeinfo(input, user.id)
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

  const canEvaluate = input.dokumentation.trim() !== ''

  // Show loading animation when evaluating
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
            Pflegeinformationen
          </motion.h2>
          <motion.p 
            className="text-gray-600 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Bewerte Pflegedokumentation...
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
            Pflegeinformationen bewerten
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Qualitätsbewertung und Verbesserungsvorschläge für Pflegedokumentation
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
                <FileCheck className="h-5 w-5 mr-3 text-gray-600" />
                Pflegedokumentation eingeben
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Pflegedokumentation *
                </label>
                <textarea
                  value={input.dokumentation}
                  onChange={(e) => setInput(prev => ({ ...prev, dokumentation: e.target.value }))}
                  placeholder="Geben Sie Ihre Pflegedokumentation ein..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent font-light transition-all"
                  rows={6}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Durchgeführte Pflegemaßnahmen (optional)
                </label>
                <textarea
                  value={input.pflegemassnahmen}
                  onChange={(e) => setInput(prev => ({ ...prev, pflegemassnahmen: e.target.value }))}
                  placeholder="Beschreiben Sie die durchgeführten Pflegemaßnahmen..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent font-light transition-all"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Beobachtungen und Verlauf (optional)
                </label>
                <textarea
                  value={input.beobachtungen}
                  onChange={(e) => setInput(prev => ({ ...prev, beobachtungen: e.target.value }))}
                  placeholder="Dokumentieren Sie Beobachtungen und Verlauf..."
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
                <h4 className="font-medium text-gray-900 mb-3">Bewertungskriterien:</h4>
                <ul className="text-sm text-gray-700 space-y-2 font-light">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Vollständigkeit der Dokumentation
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Fachliche Korrektheit
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Struktur und Klarheit
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Rechtliche Compliance
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Evaluate Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <Button
            onClick={handleEvaluate}
            disabled={!canEvaluate || isLoading}
            className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-light disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center space-x-3"
          >
            <Wand2 className="h-5 w-5" />
            <span>Pflegedokumentation bewerten</span>
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
                  Bewertung der Pflegedokumentation
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

export default PflegeinfoWorkflow