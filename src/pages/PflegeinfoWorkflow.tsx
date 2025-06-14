import { useState } from 'react'
import { Wand2, Copy, Brain } from 'lucide-react'
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
  const [result, setResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleEvaluate = async () => {
    if (!user) return

    setIsLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await caseService.evaluatePflegeinfo(input, user.id)
      setResult(response)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }

  const canEvaluate = input.dokumentation.trim() !== ''

  // Results Display
  if (result) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              KI-Bewertung Ihrer Pflegedokumentation
            </h1>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>KI-Bewertung</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {result}
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4 mt-8">
            <Button
              onClick={() => {
                navigator.clipboard.writeText(result)
              }}
              variant="outline"
              className="border-gray-300 hover:border-gray-400 text-gray-700 mr-4"
            >
              <Copy className="h-4 w-4 mr-2" />
              Bewertung kopieren
            </Button>
            <Button
              onClick={() => {
                setResult(null)
                setInput({
                  dokumentation: '',
                  pflegemassnahmen: '',
                  beobachtungen: ''
                })
              }}
              className="bg-slate-800 hover:bg-slate-900 text-white"
            >
              Neue Bewertung erstellen
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Input Form
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">
            Pflegeinformationen bewerten
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Lassen Sie Ihre Pflegedokumentation von unserer KI bewerten und erhalten Sie detailliertes Feedback
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dokumentation</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg min-h-[150px] focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              placeholder="Beschreiben Sie hier Ihre Dokumentation..."
              value={input.dokumentation}
              onChange={(e) => setInput({ ...input, dokumentation: e.target.value })}
              disabled={isLoading}
            />
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pflegemaßnahmen (optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg min-h-[150px] focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              placeholder="Beschreiben Sie durchgeführte Pflegemaßnahmen..."
              value={input.pflegemassnahmen || ''}
              onChange={(e) => setInput({ ...input, pflegemassnahmen: e.target.value })}
              disabled={isLoading}
            />
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Beobachtungen (optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg min-h-[150px] focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              placeholder="Beschreiben Sie Ihre Beobachtungen..."
              value={input.beobachtungen || ''}
              onChange={(e) => setInput({ ...input, beobachtungen: e.target.value })}
              disabled={isLoading}
            />
          </CardContent>
        </Card>

        {error && (
          <div className="mb-8 text-center">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md inline-block">
              {error}
            </div>
          </div>
        )}

        <div className="text-center">
          <Button
            onClick={handleEvaluate}
            disabled={!canEvaluate || isLoading}
            className="px-8 bg-slate-800 hover:bg-slate-900 text-white disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Wand2 className="h-4 w-4 mr-2 animate-spin" />
                Bewertung wird erstellt...
              </>
            ) : (
              <>
                <Brain className="h-4 w-4 mr-2" />
                Jetzt bewerten lassen
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PflegeinfoWorkflow