import { useState } from 'react'
import { motion } from 'framer-motion'
import { Target, Wand2, Copy } from 'lucide-react'
import { Button, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { caseService, type SMARTZielInput } from '../services/caseService'

const SMARTZielAssistent = () => {
  const { user } = useAuthStore()
  const [input, setInput] = useState<SMARTZielInput>({
    pflegesituation: '',
    gewuenschteVerbesserung: ''
  })
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!user) return

    setIsLoading(true)
    setError('')

    try {
      const response = await caseService.generateSMARTZiel(input, user.id)
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

  const canGenerate = input.pflegesituation.trim() !== '' && input.gewuenschteVerbesserung.trim() !== ''

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                SMART-Ziel Assistent
              </h1>
              <p className="text-gray-600">
                Präzise Pflegeziele nach SMART-Kriterien formulieren
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
                <CardTitle>Zieldefinition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pflegesituation *
                  </label>
                  <textarea
                    value={input.pflegesituation}
                    onChange={(e) => setInput(prev => ({ ...prev, pflegesituation: e.target.value }))}
                    placeholder="Beschreiben Sie die aktuelle Pflegesituation..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gewünschte Verbesserung *
                  </label>
                  <textarea
                    value={input.gewuenschteVerbesserung}
                    onChange={(e) => setInput(prev => ({ ...prev, gewuenschteVerbesserung: e.target.value }))}
                    placeholder="Was soll erreicht werden? Welche Verbesserung wird angestrebt?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows={4}
                    required
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
                  SMART-Ziel formulieren
                </Button>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-md">
                  <h4 className="font-medium text-orange-900 mb-2">SMART-Kriterien:</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li><strong>S</strong>pezifisch - Konkret und eindeutig</li>
                    <li><strong>M</strong>essbar - Mit klaren Erfolgskriterien</li>
                    <li><strong>A</strong>erreichbar - Realistisch und umsetzbar</li>
                    <li><strong>R</strong>elevant - Bedeutsam für den Patienten</li>
                    <li><strong>T</strong>erminiert - Mit klarem Zeitrahmen</li>
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
                  <CardTitle>SMART-Pflegeziel</CardTitle>
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
                        SMART-Ziel wird formuliert...
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
                      <Target className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Ihr SMART-Ziel wird hier angezeigt</p>
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

export default SMARTZielAssistent