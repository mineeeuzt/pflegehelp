import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileCheck, Copy, ArrowRight, ArrowLeft, Brain, CheckCircle, AlertCircle } from 'lucide-react'
import { Button, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { caseService, type PflegeinfoInput } from '../services/caseService'

// ABEDL Kategorien
const ABEDL_CATEGORIES = [
  { id: 'kommunizieren', label: 'Kommunizieren' },
  { id: 'bewegen', label: 'Sich bewegen' },
  { id: 'vitale-funktionen', label: 'Vitale Funktionen aufrechterhalten' },
  { id: 'pflegen', label: 'Sich pflegen' },
  { id: 'kleiden', label: 'Sich kleiden' },
  { id: 'ausscheiden', label: 'Ausscheiden' },
  { id: 'essen-trinken', label: 'Essen und Trinken' },
  { id: 'ruhen-schlafen', label: 'Ruhen und Schlafen' },
  { id: 'beschaeftigen', label: 'Sich beschäftigen' },
  { id: 'geschlecht', label: 'Sich als Mann/Frau fühlen' },
  { id: 'sicherheit', label: 'Für Sicherheit sorgen' },
  { id: 'soziale-bereiche', label: 'Soziale Bereiche sichern' },
  { id: 'existenz', label: 'Mit existenziellen Erfahrungen umgehen' }
]

const PflegeinfoWorkflow = () => {
  const { user } = useAuthStore()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    pflegeInfo: '',
    selectedABEDL: [] as string[],
    begruendung: ''
  })
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleABEDLToggle = (abedlId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedABEDL: prev.selectedABEDL.includes(abedlId)
        ? prev.selectedABEDL.filter(id => id !== abedlId)
        : [...prev.selectedABEDL, abedlId]
    }))
  }

  const handleEvaluate = async () => {
    if (!user) return

    setIsLoading(true)
    setError('')

    try {
      // Erstelle das Input-Objekt für die Bewertung
      const input: PflegeinfoInput = {
        dokumentation: formData.pflegeInfo,
        pflegemassnahmen: `ABEDL-Bereiche: ${formData.selectedABEDL.join(', ')}`,
        beobachtungen: formData.begruendung
      }

      const response = await caseService.evaluatePflegeinfo(input, user.id)
      // Try to parse JSON response
      try {
        const parsed = JSON.parse(response)
        setResult(parsed)
      } catch (e) {
        // If parsing fails, use as string
        setResult(response)
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = () => {
    if (result) {
      const textToCopy = typeof result === 'string' ? result : JSON.stringify(result, null, 2)
      navigator.clipboard.writeText(textToCopy)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50'
    if (score >= 60) return 'text-yellow-600 bg-yellow-50'
    return 'text-red-600 bg-red-50'
  }

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-5 w-5 text-green-600" />
    if (score >= 60) return <AlertCircle className="h-5 w-5 text-yellow-600" />
    return <AlertCircle className="h-5 w-5 text-red-600" />
  }

  const canProceedStep1 = formData.pflegeInfo.trim() !== ''
  const canProceedStep2 = formData.selectedABEDL.length > 0
  const canEvaluate = formData.begruendung.trim() !== ''

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
          <div className="w-32 h-32 border border-slate-300 rounded-lg flex items-center justify-center bg-white shadow-lg mb-6 mx-auto animate-pulse">
            <Brain className="h-16 w-16 text-slate-600" />
          </div>
          <h2 className="text-2xl font-light text-gray-900 mb-2">
            Pflegeinformationen werden bewertet...
          </h2>
          <p className="text-gray-600 font-light">
            Bitte warten Sie einen Moment
          </p>
        </motion.div>
      </div>
    )
  }

  // Show result
  if (result) {
    const isStructured = typeof result === 'object' && result.gesamtbewertung !== undefined

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              KI-Bewertung Ihrer Pflegeinformationen
            </h1>
          </motion.div>

          {isStructured ? (
            <>
              {/* Gesamtbewertung */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Gesamtbewertung</span>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${getScoreColor(result.gesamtbewertung)}`}>
                      {getScoreIcon(result.gesamtbewertung)}
                      <span className="font-bold text-lg">{result.gesamtbewertung}%</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{result.bewertungBegruendung}</p>
                </CardContent>
              </Card>

              {/* Detailliertes Feedback */}
              <div className="grid gap-6 mb-8">
                {Object.entries(result.feedback || {}).map(([bereich, bewertung]: [string, any]) => (
                  <Card key={bereich} className="border border-gray-200">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span className="capitalize">
                          {bereich === 'dokumentation' ? 'Dokumentation' :
                           bereich === 'pflegemassnahmen' ? 'Pflegemaßnahmen' :
                           bereich === 'beobachtungen' ? 'Beobachtungen' :
                           bereich === 'struktur' ? 'Struktur' :
                           bereich === 'fachlichkeit' ? 'Fachlichkeit' :
                           bereich === 'rechtliches' ? 'Rechtliches' : bereich}
                        </span>
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-lg ${getScoreColor(bewertung.score)}`}>
                          {getScoreIcon(bewertung.score)}
                          <span className="font-bold text-sm">{bewertung.score}%</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">{bewertung.note}</p>
                      
                      {bewertung.positiv && bewertung.positiv.length > 0 && (
                        <div className="mb-3">
                          <h5 className="font-medium text-slate-700 mb-2">Positiv:</h5>
                          <ul className="text-sm space-y-1">
                            {bewertung.positiv.map((punkt: string, idx: number) => (
                              <li key={idx} className="text-slate-600">• {punkt}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {bewertung.fehler && bewertung.fehler.length > 0 && (
                        <div>
                          <h5 className="font-medium text-slate-700 mb-2">Verbesserungen:</h5>
                          <ul className="text-sm space-y-2">
                            {bewertung.fehler.map((fehler: any, idx: number) => (
                              <li key={idx} className="text-slate-600">
                                <strong>Problem:</strong> {fehler.problem}<br />
                                <strong>Korrektur:</strong> {fehler.korrektur}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Hauptprobleme */}
              {result.hauptprobleme && result.hauptprobleme.length > 0 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Hauptverbesserungsbereiche</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.hauptprobleme.map((problem: string, idx: number) => (
                        <li key={idx} className="flex items-center text-slate-700">
                          <ArrowRight className="h-4 w-4 mr-2 text-slate-500" />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Empfehlung */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Empfehlung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{result.empfehlung}</p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium mr-2">Mindestanforderung erfüllt:</span>
                    {result.mindestanforderungErfuellt ? (
                      <span className="text-green-600 font-medium">✓ Ja</span>
                    ) : (
                      <span className="text-red-600 font-medium">✗ Nein</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            // Fallback für Text-Antwort
            <Card className="mb-8">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Bewertungsergebnis</CardTitle>
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  size="sm"
                  className="border-gray-300 hover:border-gray-400 text-gray-700"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Kopieren
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
          )}

          <div className="text-center">
            <Button
              onClick={() => {
                setResult(null)
                setCurrentStep(1)
                setFormData({
                  pflegeInfo: '',
                  selectedABEDL: [],
                  begruendung: ''
                })
              }}
              className="bg-gray-900 hover:bg-gray-800 text-white"
            >
              Neue Bewertung erstellen
            </Button>
          </div>
        </div>
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
            Pflegerelevante Informationen bewerten
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Schritt {currentStep} von 3
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                    currentStep >= step
                      ? 'bg-slate-800 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-24 h-1 ml-4 transition-colors ${
                      currentStep > step ? 'bg-slate-800' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-8 text-sm text-gray-600">
            <span className={currentStep === 1 ? 'font-medium text-gray-900' : ''}>
              Informationen
            </span>
            <span className={currentStep === 2 ? 'font-medium text-gray-900' : ''}>
              ABEDL
            </span>
            <span className={currentStep === 3 ? 'font-medium text-gray-900' : ''}>
              Relevanz
            </span>
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border border-gray-200">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="flex items-center text-gray-900 font-medium">
                <FileCheck className="h-5 w-5 mr-3 text-gray-600" />
                {currentStep === 1 && 'Pflegerelevante Informationen'}
                {currentStep === 2 && 'ABEDL-Bereiche auswählen'}
                {currentStep === 3 && 'Pflegerelevanz begründen'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Step 1: Pflegerelevante Informationen */}
              {currentStep === 1 && (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Beschreiben Sie die pflegerelevanten Informationen
                  </label>
                  <textarea
                    value={formData.pflegeInfo}
                    onChange={(e) => setFormData(prev => ({ ...prev, pflegeInfo: e.target.value }))}
                    placeholder="Geben Sie hier die pflegerelevanten Informationen ein..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent font-light transition-all"
                    rows={8}
                  />
                  <div className="mt-4 text-sm text-gray-600">
                    Beispiel: Mobilität eingeschränkt, benötigt Unterstützung beim Transfer...
                  </div>
                </div>
              )}

              {/* Step 2: ABEDL Selection */}
              {currentStep === 2 && (
                <div>
                  <p className="text-sm text-gray-700 mb-6">
                    Wählen Sie die relevanten ABEDL-Bereiche aus:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {ABEDL_CATEGORIES.map((abedl) => (
                      <label
                        key={abedl.id}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                          formData.selectedABEDL.includes(abedl.id)
                            ? 'border-slate-800 bg-slate-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.selectedABEDL.includes(abedl.id)}
                          onChange={() => handleABEDLToggle(abedl.id)}
                          className="mr-3"
                        />
                        <span className="text-sm">{abedl.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Begründung */}
              {currentStep === 3 && (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Begründen Sie, warum diese Information pflegerelevant ist
                  </label>
                  <textarea
                    value={formData.begruendung}
                    onChange={(e) => setFormData(prev => ({ ...prev, begruendung: e.target.value }))}
                    placeholder="Erklären Sie, warum diese Information für die Pflege wichtig ist und welche Auswirkungen sie auf die Pflegeplanung hat..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent font-light transition-all"
                    rows={6}
                  />
                  <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Ihre Eingaben:</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Information:</strong> {formData.pflegeInfo.substring(0, 100)}...
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Betroffene ABEDL-Bereiche:</strong> {formData.selectedABEDL.join(', ')}
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm font-light">{error}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={handleBack}
            disabled={currentStep === 1}
            variant="outline"
            className="border-gray-300 hover:border-gray-400 text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück
          </Button>

          {currentStep < 3 ? (
            <Button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !canProceedStep1) ||
                (currentStep === 2 && !canProceedStep2)
              }
              className="bg-slate-800 hover:bg-slate-900 text-white"
            >
              Weiter
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleEvaluate}
              disabled={!canEvaluate}
              className="bg-slate-800 hover:bg-slate-900 text-white"
            >
              <Brain className="h-4 w-4 mr-2" />
              Jetzt bewerten lassen
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PflegeinfoWorkflow