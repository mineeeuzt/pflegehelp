import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileCheck, Wand2, Copy } from 'lucide-react'
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-lg">
              <FileCheck className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Pflegeinfo Workflow
              </h1>
              <p className="text-gray-600">
                Bewertung und Optimierung von Pflegeinformationen
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Pflegeinformationen eingeben</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pflegedokumentation *
                  </label>
                  <textarea
                    value={input.dokumentation}
                    onChange={(e) => setInput(prev => ({ ...prev, dokumentation: e.target.value }))}
                    placeholder="Fügen Sie Ihre Pflegedokumentation hier ein..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows={6}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pflegemaßnahmen (optional)
                  </label>
                  <textarea
                    value={input.pflegemassnahmen}
                    onChange={(e) => setInput(prev => ({ ...prev, pflegemassnahmen: e.target.value }))}
                    placeholder="Durchgeführte Pflegemaßnahmen..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beobachtungen (optional)
                  </label>
                  <textarea
                    value={input.beobachtungen}
                    onChange={(e) => setInput(prev => ({ ...prev, beobachtungen: e.target.value }))}
                    placeholder="Relevante Beobachtungen und Auffälligkeiten..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows={4}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                    {error}
                  </div>
                )}

                <Button
                  onClick={handleEvaluate}
                  disabled={!canEvaluate || isLoading}
                  loading={isLoading}
                  className="w-full"
                >
                  <Wand2 className="mr-2 h-4 w-4" />
                  Pflegeinfo bewerten
                </Button>

                <div className="bg-teal-50 border border-teal-200 p-4 rounded-md">
                  <h4 className="font-medium text-teal-900 mb-2">Bewertungskriterien:</h4>
                  <ul className="text-sm text-teal-800 space-y-1">
                    <li>• Vollständigkeit der Dokumentation</li>
                    <li>• Fachliche Korrektheit</li>
                    <li>• Strukturierung und Klarheit</li>
                    <li>• Compliance mit Pflegestandards</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Bewertung & Feedback</CardTitle>
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
                        Pflegeinfo wird bewertet...
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
                      <FileCheck className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Das Feedback wird hier angezeigt</p>
                    </div>
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

export default PflegeinfoWorkflow