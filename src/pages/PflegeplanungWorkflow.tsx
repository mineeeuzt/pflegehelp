import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Wand2, Copy } from 'lucide-react'
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Pflegeplanung Workflow
              </h1>
              <p className="text-gray-600">
                Systematische Erstellung von Pflegeplänen nach NANDA-I Klassifikation
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Patientendaten eingeben</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patientensituation *
                  </label>
                  <textarea
                    value={input.patientensituation}
                    onChange={(e) => setInput(prev => ({ ...prev, patientensituation: e.target.value }))}
                    placeholder="Beschreiben Sie die aktuelle Situation des Patienten..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relevante Vorgeschichte (optional)
                  </label>
                  <textarea
                    value={input.vorgeschichte}
                    onChange={(e) => setInput(prev => ({ ...prev, vorgeschichte: e.target.value }))}
                    placeholder="Medizinische Vorgeschichte, bisherige Behandlungen..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aktuelle Probleme (optional)
                  </label>
                  <textarea
                    value={input.aktuelleProbleme}
                    onChange={(e) => setInput(prev => ({ ...prev, aktuelleProbleme: e.target.value }))}
                    placeholder="Konkrete Probleme und Herausforderungen..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows={3}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                    {error}
                  </div>
                )}

                <Button
                  onClick={handleGenerate}
                  disabled={!canGenerate || isLoading}
                  loading={isLoading}
                  className="w-full"
                >
                  <Wand2 className="mr-2 h-4 w-4" />
                  Pflegeplanung erstellen
                </Button>

                <div className="bg-green-50 border border-green-200 p-4 rounded-md">
                  <h4 className="font-medium text-green-900 mb-2">Was wird erstellt:</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Pflegediagnosen nach NANDA-I</li>
                    <li>• SMART-Pflegeziele</li>
                    <li>• Evidence-basierte Pflegemaßnahmen</li>
                    <li>• Evaluationskriterien</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Pflegeplanung</CardTitle>
                  {result && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopy}
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Kopieren
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
                      <p className="text-gray-600">
                        Pflegeplanung wird erstellt...
                      </p>
                    </div>
                  </div>
                ) : result ? (
                  <div className="prose max-w-none">
                    <div className="bg-white border rounded-lg p-6 max-h-96 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                        {result}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 h-64 flex items-center justify-center">
                    <div>
                      <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Ihre Pflegeplanung wird hier angezeigt</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">NANDA-I</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Pflegediagnosen werden nach der international anerkannten NANDA-I Klassifikation erstellt.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SMART-Ziele</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Alle Pflegeziele werden nach den SMART-Kriterien formuliert (Spezifisch, Messbar, Erreichbar, Relevant, Terminiert).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Evidence-based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Alle Pflegemaßnahmen basieren auf aktuellen wissenschaftlichen Erkenntnissen und Best Practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Klare Evaluationskriterien ermöglichen die systematische Überprüfung der Pflegeergebnisse.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PflegeplanungWorkflow