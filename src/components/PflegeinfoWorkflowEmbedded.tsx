import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileCheck, Copy, ArrowRight, ArrowLeft, Brain, CheckCircle, AlertCircle, XCircle } from 'lucide-react'
import { Button, Card, CardHeader, CardTitle, CardContent } from './ui'
import { useAuthStore } from '../store/authStore'
import { caseService, type PflegeinfoInput } from '../services/caseService'
import { 
  type PflegeinfoResult, 
  type FeedbackSection, 
  type FeedbackError,
  PflegeinfoSafeAccess,
  ScoreColorUtils,
  isPflegeinfoResult 
} from '../types/pflegeinfo'

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

interface PflegeinfoWorkflowEmbeddedProps {
  fallbeispiel: string
  onBack: () => void
}

const PflegeinfoWorkflowEmbedded = ({ fallbeispiel, onBack }: PflegeinfoWorkflowEmbeddedProps) => {
  const { user } = useAuthStore()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    pflegeInfo: '',
    selectedABEDL: [] as string[],
    begruendung: ''
  })
  const [result, setResult] = useState<PflegeinfoResult | string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleABEDLToggle = (abedlId: string) => {
    setFormData(prev => {
      const currentSelected = prev.selectedABEDL || []
      return {
        ...prev,
        selectedABEDL: currentSelected.includes(abedlId)
          ? currentSelected.filter(id => id !== abedlId)
          : [...currentSelected, abedlId]
      }
    })
  }

  const handleEvaluate = async () => {
    if (!user) {
      setError('Bitte melden Sie sich an, um diese Funktion zu nutzen.')
      return
    }

    // Validierung der Eingaben
    if (!formData.pflegeInfo.trim()) {
      setError('Bitte geben Sie Pflegeinformationen ein.')
      return
    }

    if (!formData.selectedABEDL || formData.selectedABEDL.length === 0) {
      setError('Bitte wählen Sie mindestens einen ABEDL-Bereich aus.')
      return
    }

    if (!formData.begruendung.trim()) {
      setError('Bitte geben Sie eine Begründung an.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Erstelle das Input-Objekt für die Bewertung
      const input: PflegeinfoInput = {
        dokumentation: formData.pflegeInfo,
        pflegemassnahmen: `ABEDL-Bereiche: ${(formData.selectedABEDL || []).join(', ')}`,
        beobachtungen: formData.begruendung
      }

      console.log('Pflegeinfo evaluation input:', input)
      const response = await caseService.evaluatePflegeinfo(input, user.id)
      console.log('Pflegeinfo evaluation response:', response)
      
      // Try to parse JSON response and validate structure
      try {
        const parsed = JSON.parse(response)
        console.log('Parsed result:', parsed)
        
        // Use safe parsing to ensure all required properties exist
        const safeResult = PflegeinfoSafeAccess.parseResult(parsed)
        setResult(safeResult)
      } catch (e) {
        // If parsing fails, try to clean and parse again
        console.warn('JSON parsing failed, attempting cleanup:', e)
        try {
          // Try to extract JSON from response if it's wrapped in text
          const jsonMatch = response.match(/\{[\s\S]*\}/)
          if (jsonMatch) {
            const cleanedJson = jsonMatch[0]
            const parsed = JSON.parse(cleanedJson)
            const safeResult = PflegeinfoSafeAccess.parseResult(parsed)
            setResult(safeResult)
          } else {
            // Use as string fallback
            setResult(response)
          }
        } catch (secondError) {
          console.warn('Second parsing attempt failed:', secondError)
          setResult(response)
        }
      }
    } catch (error) {
      console.error('Pflegeinfo evaluation error:', {
        error: error instanceof Error ? error.message : error,
        input: formData,
        timestamp: new Date().toISOString()
      })
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

  // Helper component for rendering feedback errors
  const FeedbackErrorList = ({ errors }: { errors: FeedbackError[] }) => {
    if (!errors || errors.length === 0) {
      return <p className="text-sm text-gray-500">Keine spezifischen Verbesserungen erforderlich.</p>
    }

    return (
      <div className="space-y-3">
        {(errors || []).map((error, index) => (
          <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
            {error?.zitat && (
              <p className="text-sm text-gray-600 mb-2">
                <strong>Zitat:</strong> "{error?.zitat || ''}"
              </p>
            )}
            <p className="text-sm text-red-700 mb-2">
              <strong>Problem:</strong> {error?.problem || ''}
            </p>
            <p className="text-sm text-green-700">
              <strong>Verbesserung:</strong> {error?.korrektur || ''}
            </p>
          </div>
        ))}
      </div>
    )
  }

  // Helper component for rendering a feedback section
  const FeedbackSectionCard = ({ title, section }: { title: string; section: FeedbackSection | undefined }) => {
    if (!section) {
      return null
    }
    
    const score = PflegeinfoSafeAccess.getSectionScore(section)
    const scoreColor = ScoreColorUtils.getScoreColor(score)
    const scoreBgColor = ScoreColorUtils.getScoreBackgroundColor(score)
    const scoreDescription = ScoreColorUtils.getScoreDescription(score)

    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              {score >= 70 ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              ) : score >= 50 ? (
                <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500 mr-2" />
              )}
              {title}
            </span>
            <div className={`px-3 py-1 rounded-full border ${scoreBgColor}`}>
              <span className={`font-medium ${scoreColor}`}>
                {score}/100 - {scoreDescription}
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* User's input text */}
          {section?.eingereichtText && section.eingereichtText !== '(Nicht angegeben)' && (
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Ihre Eingabe:</h4>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-gray-700">{section?.eingereichtText || ''}</p>
              </div>
            </div>
          )}

          {/* Positive aspects */}
          {section?.positiv && section.positiv.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-green-700 mb-2">✅ Positive Aspekte:</h4>
              <ul className="list-disc list-inside space-y-1">
                {(section.positiv || []).map((positive, index) => (
                  <li key={index} className="text-sm text-green-600">{positive}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Improvements needed */}
          {section?.fehler && section.fehler.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-red-700 mb-2">🔧 Verbesserungen:</h4>
              <FeedbackErrorList errors={section.fehler} />
            </div>
          )}

          {/* Summary note */}
          {section?.note && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Zusammenfassung:</h4>
              <p className="text-sm text-gray-700">{section?.note || ''}</p>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  const canProceedStep1 = formData.pflegeInfo.trim() !== ''
  const canProceedStep2 = formData.selectedABEDL?.length > 0
  const canEvaluate = formData.begruendung.trim() !== ''

  // Show loading animation when evaluating
  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 border border-slate-300 rounded-lg flex items-center justify-center bg-white shadow-lg mb-6 mx-auto animate-pulse">
              <Brain className="h-8 w-8 text-slate-600" />
            </div>
            <h3 className="text-lg font-light text-gray-900 mb-2">
              Pflegeinformationen werden bewertet...
            </h3>
            <p className="text-gray-600 font-light">
              Bitte warten Sie einen Moment
            </p>
          </motion.div>
        </CardContent>
      </Card>
    )
  }

  // Show result with structured feedback
  if (result) {
    // Check if we have a structured result or just a string
    const isStructuredResult = typeof result === 'object' && isPflegeinfoResult(result)
    
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-4">
            KI-Bewertung Ihrer Pflegeinformationen
          </h2>
        </motion.div>

        {isStructuredResult ? (
          <>
            {/* Overall Score and Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Gesamtbewertung</span>
                  <div className="flex items-center space-x-4">
                    <div className={`px-4 py-2 rounded-full border ${ScoreColorUtils.getScoreBackgroundColor(result?.gesamtbewertung || 0)}`}>
                      <span className={`text-lg font-bold ${ScoreColorUtils.getScoreColor(result?.gesamtbewertung || 0)}`}>
                        {result?.gesamtbewertung || 0}/100
                      </span>
                    </div>
                    <Button
                      onClick={handleCopy}
                      variant="outline"
                      size="sm"
                      className="border-gray-300 hover:border-gray-400 text-gray-700"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Kopieren
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Overall Assessment */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Bewertungsbegründung</h3>
                    <p className="text-gray-700 leading-relaxed">{result?.bewertungBegruendung || 'Keine Begründung verfügbar'}</p>
                  </div>
                  
                  {/* Minimum Requirements Status */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        {result?.mindestanforderungErfuellt ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        <span className="text-sm">
                          Mindestanforderung {result?.mindestanforderungErfuellt ? 'erfüllt' : 'nicht erfüllt'}
                        </span>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Empfehlung:</strong> {result?.empfehlung || 'Keine Empfehlung verfügbar'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Problems */}
            {result?.hauptprobleme && result.hauptprobleme.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                    Hauptverbesserungsfelder
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(result?.hauptprobleme || []).map((problem, index) => (
                      <div key={index} className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                        <div className="flex items-center mb-2">
                          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                            #{index + 1}
                          </span>
                        </div>
                        <p className="text-sm text-orange-800">{problem}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Detailed Feedback Sections */}
            <div className="space-y-6">
              <h3 className="text-xl font-light text-gray-900">Detaillierte Bewertung</h3>
              
              <FeedbackSectionCard 
                title="Pflegerelevante Information" 
                section={result?.feedback?.dokumentation} 
              />
              
              <FeedbackSectionCard 
                title="ABEDL-Zuordnung" 
                section={result?.feedback?.pflegemassnahmen} 
              />
              
              <FeedbackSectionCard 
                title="Begründung der Pflegerelevanz" 
                section={result?.feedback?.beobachtungen} 
              />
            </div>
          </>
        ) : (
          /* Fallback for string results */
          <Card>
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
            <CardContent>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-light leading-relaxed">
                  {typeof result === 'string' ? result : JSON.stringify(result, null, 2)}
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
            className="bg-gray-900 hover:bg-gray-800 text-white mr-4"
          >
            Neue Bewertung erstellen
          </Button>
          <Button
            onClick={onBack}
            variant="outline"
          >
            Zurück zum Fallbeispiel
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-gray-900 font-medium">
          <FileCheck className="h-5 w-5 mr-3 text-gray-600" />
          Pflegerelevante Informationen bewerten
        </CardTitle>
        <p className="text-sm text-gray-600">
          Schritt {currentStep} von 3
        </p>
      </CardHeader>
      <CardContent className="p-6">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-medium transition-colors ${
                    currentStep >= step
                      ? 'bg-slate-800 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 ml-4 transition-colors ${
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
          className="space-y-6"
        >
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
                rows={6}
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
              <div className="grid grid-cols-1 gap-3">
                {ABEDL_CATEGORIES.map((abedl) => (
                  <label
                    key={abedl.id}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                      formData.selectedABEDL?.includes(abedl.id)
                        ? 'border-slate-800 bg-slate-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.selectedABEDL?.includes(abedl.id) || false}
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
                rows={4}
              />
              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4">
                <h4 className="font-medium text-gray-900 mb-2">Ihre Eingaben:</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Information:</strong> {formData.pflegeInfo?.substring(0, 100) || ''}...
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Betroffene ABEDL-Bereiche:</strong> {formData.selectedABEDL?.join(', ') || 'Keine ausgewählt'}
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-600 text-sm font-light">{error}</p>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={currentStep === 1 ? onBack : handleBackStep}
            variant="outline"
            className="border-gray-300 hover:border-gray-400 text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {currentStep === 1 ? 'Zurück' : 'Zurück'}
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
      </CardContent>
    </Card>
  )
}

export default PflegeinfoWorkflowEmbedded