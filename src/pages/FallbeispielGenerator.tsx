import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Wand2, Copy } from 'lucide-react'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { caseService, type CaseGenerationParams } from '../services/caseService'

const FallbeispielGenerator = () => {
  const { user } = useAuthStore()
  const [params, setParams] = useState<CaseGenerationParams>({
    bereich: '',
    schwierigkeitsgrad: 'Mittel',
    anforderungen: ''
  })
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const bereiche = [
    'Allgemeine Pflege',
    'Intensivpflege',
    'Geriatrie',
    'Pädiatrie',
    'Psychiatrie',
    'Onkologie',
    'Kardiologie',
    'Neurologie',
    'Chirurgie',
    'Palliativpflege'
  ]

  const schwierigkeitsgrade = [
    'Einfach',
    'Mittel', 
    'Schwer',
    'Sehr schwer'
  ]

  const handleGenerate = async () => {
    if (!user) return

    setIsLoading(true)
    setError('')

    try {
      const response = await caseService.generateFallbeispiel(params, user.id)
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

  const canGenerate = params.bereich.trim() !== ''

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
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Fallbeispiel Generator
              </h1>
              <p className="text-gray-600">
                Erstellen Sie realistische Fallbeispiele für die Pflegeausbildung
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
                <CardTitle>Parameter festlegen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pflegebereich *
                  </label>
                  <select
                    value={params.bereich}
                    onChange={(e) => setParams(prev => ({ ...prev, bereich: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Bereich auswählen</option>
                    {bereiche.map(bereich => (
                      <option key={bereich} value={bereich}>
                        {bereich}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Schwierigkeitsgrad
                  </label>
                  <select
                    value={params.schwierigkeitsgrad}
                    onChange={(e) => setParams(prev => ({ ...prev, schwierigkeitsgrad: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {schwierigkeitsgrade.map(grad => (
                      <option key={grad} value={grad}>
                        {grad}
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  label="Spezielle Anforderungen (optional)"
                  value={params.anforderungen}
                  onChange={(e) => setParams(prev => ({ ...prev, anforderungen: e.target.value }))}
                  placeholder="z.B. Multimorbidität, spezifische Diagnosen..."
                />

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
                  Fallbeispiel generieren
                </Button>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
                  <h4 className="font-medium text-blue-900 mb-2">Hinweis:</h4>
                  <p className="text-sm text-blue-800">
                    Das generierte Fallbeispiel wird automatisch in Ihrem Profil gespeichert 
                    und kann später eingesehen werden.
                  </p>
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
                  <CardTitle>Generiertes Fallbeispiel</CardTitle>
                  {result && (
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Kopieren
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
                      <p className="text-gray-600">
                        Fallbeispiel wird generiert...
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
                      <Brain className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Ihr generiertes Fallbeispiel wird hier angezeigt</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Usage Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Tipps für bessere Ergebnisse</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Bereich spezifizieren
                  </h4>
                  <p className="text-sm text-gray-600">
                    Wählen Sie einen spezifischen Pflegebereich für relevantere Fallbeispiele.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Anforderungen definieren
                  </h4>
                  <p className="text-sm text-gray-600">
                    Geben Sie spezielle Anforderungen an, um das Fallbeispiel auf Ihre Lernziele anzupassen.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Schwierigkeitsgrad anpassen
                  </h4>
                  <p className="text-sm text-gray-600">
                    Wählen Sie den Schwierigkeitsgrad entsprechend Ihrem Ausbildungsstand.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Mehrere Varianten testen
                  </h4>
                  <p className="text-sm text-gray-600">
                    Generieren Sie mehrere Fallbeispiele mit verschiedenen Parametern für vielfältige Übungen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default FallbeispielGenerator