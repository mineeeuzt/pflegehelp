import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileCheck, Wand2, Copy, Plus, CheckCircle, AlertCircle, ArrowRight, Brain } from 'lucide-react'
import { Button, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { caseService, type PflegeinfoInput } from '../services/caseService'

interface BewertungsFehler {
  zitat: string
  problem: string
  korrektur: string
}

interface BereichsBewertung {
  score: number
  eingereichtText: string
  positiv: string[]
  fehler: BewertungsFehler[]
  note: string
}

interface PflegeinfoBewertungsResult {
  gesamtbewertung: number
  bewertungBegruendung: string
  feedback: {
    dokumentation: BereichsBewertung
    pflegemassnahmen: BereichsBewertung
    beobachtungen: BereichsBewertung
    struktur: BereichsBewertung
    fachlichkeit: BereichsBewertung
    rechtliches: BereichsBewertung
  }
  hauptprobleme: string[]
  mindestanforderungErfuellt: boolean
  empfehlung: string
}

const PflegeinfoWorkflow = () => {
  const { user } = useAuthStore()
  const [currentStep, setCurrentStep] = useState(1)
  const [input, setInput] = useState<PflegeinfoInput>({
    dokumentation: '',
    pflegemassnahmen: '',
    beobachtungen: ''
  })
  const [result, setResult] = useState<string | PflegeinfoBewertungsResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const steps = [
    { number: 1, title: 'Dokumentation', field: 'dokumentation', description: 'Pflegedokumentation erfassen' },
    { number: 2, title: 'Pflegemaßnahmen', field: 'pflegemassnahmen', description: 'Durchgeführte Maßnahmen dokumentieren' },
    { number: 3, title: 'Beobachtungen', field: 'beobachtungen', description: 'Beobachtungen und Verlauf festhalten' }
  ]


  const handleEvaluate = async () => {
    if (!user) return

    setIsLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await caseService.evaluatePflegeinfo(input, user.id)
      console.log('Pflegeinfo Response:', response)
      
      // Try to parse as JSON first (structured response)
      try {
        const parsedResult = JSON.parse(response)
        console.log('Parsed Result:', parsedResult)
        
        if (parsedResult && typeof parsedResult === 'object' && parsedResult.gesamtbewertung !== undefined) {
          // Validate the structure
          if (!parsedResult.feedback || typeof parsedResult.feedback !== 'object') {
            console.error('Invalid feedback structure:', parsedResult)
            setResult(response)
          } else {
            setResult(parsedResult as PflegeinfoBewertungsResult)
          }
        } else {
          setResult(response)
        }
      } catch (parseError) {
        console.log('Parse error, using as string:', parseError)
        // If parsing fails, use as string
        setResult(response)
      }
    } catch (error) {
      console.error('Error in evaluatePflegeinfo:', error)
      setError(error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }


  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-slate-600 bg-slate-50'
    if (score >= 60) return 'text-slate-500 bg-slate-50'
    return 'text-slate-400 bg-slate-50'
  }

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-5 w-5 text-slate-600" />
    return <AlertCircle className="h-5 w-5 text-slate-500" />
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const getCurrentFieldValue = () => {
    const currentField = steps[currentStep - 1]?.field as keyof PflegeinfoInput
    return input[currentField] || ''
  }

  const updateCurrentField = (value: string) => {
    const currentField = steps[currentStep - 1]?.field as keyof PflegeinfoInput
    setInput(prev => ({ ...prev, [currentField]: value }))
  }

  const canEvaluate = input.dokumentation.trim() !== ''

  // Results Display - handles both string and structured responses
  if (result) {
    const isStructured = typeof result === 'object' && result.gesamtbewertung !== undefined
    const resultText = typeof result === 'string' ? result : JSON.stringify(result, null, 2)
    
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              KI-Bewertung Ihrer Pflegedokumentation
            </h1>
          </motion.div>

          {isStructured && (result as PflegeinfoBewertungsResult).feedback ? (
            // Structured Display (like PflegeplanungBewertung)
            <div className="space-y-6">
              {/* Overall Score */}
              <Card className="border-2 border-slate-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-slate-600" />
                    Gesamtbewertung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl font-light text-slate-700">
                      {(result as PflegeinfoBewertungsResult).gesamtbewertung}%
                    </div>
                    {getScoreIcon((result as PflegeinfoBewertungsResult).gesamtbewertung)}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {(result as PflegeinfoBewertungsResult).bewertungBegruendung}
                  </p>
                </CardContent>
              </Card>

              {/* Detailed Feedback */}
              <div className="grid gap-6">
                {(result as PflegeinfoBewertungsResult).feedback && Object.entries((result as PflegeinfoBewertungsResult).feedback).map(([key, feedback]) => feedback && (
                  <Card key={key} className={`border ${getScoreColor(feedback?.score || 0)}`}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="capitalize">
                          {key === 'dokumentation' ? 'Dokumentation' :
                           key === 'pflegemassnahmen' ? 'Pflegemaßnahmen' :
                           key === 'beobachtungen' ? 'Beobachtungen' :
                           key === 'struktur' ? 'Struktur' :
                           key === 'fachlichkeit' ? 'Fachlichkeit' :
                           key === 'rechtliches' ? 'Rechtliches' : key}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{feedback?.score || 0}%</span>
                          {getScoreIcon(feedback?.score || 0)}
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {feedback && (
                      <div className="space-y-4">
                        {feedback?.positiv && Array.isArray(feedback.positiv) && feedback.positiv.length > 0 && (
                          <div>
                            <h4 className="font-medium text-green-800 mb-2">Positive Aspekte:</h4>
                            <ul className="list-disc list-inside text-green-700 space-y-1">
                              {feedback.positiv.map((item, index) => (
                                <li key={index} className="text-sm">{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {feedback?.fehler && Array.isArray(feedback.fehler) && feedback.fehler.length > 0 && (
                          <div>
                            <h4 className="font-medium text-red-800 mb-2">Verbesserungsmöglichkeiten:</h4>
                            <div className="space-y-3">
                              {feedback.fehler.map((fehler, index) => (
                                <div key={index} className="bg-red-50 border border-red-200 p-3 rounded">
                                  <p className="text-sm text-red-900 font-medium mb-1">{fehler.problem}</p>
                                  <p className="text-sm text-red-700">{fehler.korrektur}</p>
                                  {fehler.zitat && (
                                    <p className="text-xs text-red-600 mt-2 italic">
                                      Bezug: "{fehler.zitat}"
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="border-t pt-3">
                          <p className="text-sm text-gray-600 italic">{feedback?.note || ''}</p>
                        </div>
                      </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Main Problems */}
              {(result as PflegeinfoBewertungsResult).hauptprobleme && Array.isArray((result as PflegeinfoBewertungsResult).hauptprobleme) && (result as PflegeinfoBewertungsResult).hauptprobleme.length > 0 && (
                <Card className="border-2 border-yellow-100">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2 text-yellow-600" />
                      Hauptverbesserungsfelder
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {(result as PflegeinfoBewertungsResult).hauptprobleme.map((problem, index) => (
                        <li key={index} className="text-gray-700">{problem}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Recommendation */}
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
                    Empfehlung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {(result as PflegeinfoBewertungsResult).empfehlung}
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium mr-2">Mindestanforderung erfüllt:</span>
                    {(result as PflegeinfoBewertungsResult).mindestanforderungErfuellt ? (
                      <span className="text-green-600 font-medium">✓ Ja</span>
                    ) : (
                      <span className="text-red-600 font-medium">✗ Nein</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            // Simple Text Display (fallback)
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>KI-Bewertung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {resultText}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="text-center space-y-4 mt-8">
            <Button
              onClick={() => {
                navigator.clipboard.writeText(resultText)
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
                setCurrentStep(1)
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
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Lassen Sie Ihre Pflegedokumentation von unserer KI bewerten und erhalten Sie detailliertes Feedback
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-16">
          <div className="relative mb-8">
            {/* Progress Line Background */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 transform -translate-y-1/2" />
            
            {/* Active Progress Line */}
            <div 
              className="absolute top-1/2 left-0 h-px bg-slate-700 transform -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            
            {/* Step Dots */}
            <div className="flex justify-between relative">
              {steps.map((step, index) => {
                const isActive = currentStep === step.number
                const isCompleted = currentStep > step.number
                
                return (
                  <motion.div 
                    key={step.number} 
                    className="flex flex-col items-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`
                      w-4 h-4 rounded-full border-2 bg-white transition-all duration-300 relative
                      ${isActive 
                        ? 'border-slate-700' 
                        : isCompleted 
                          ? 'border-slate-700 bg-slate-700'
                          : 'border-gray-300'
                      }
                    `}>
                      {isCompleted && (
                        <div className="absolute inset-1 bg-white rounded-full" />
                      )}
                      {isActive && (
                        <div className="absolute inset-1.5 bg-slate-700 rounded-full" />
                      )}
                    </div>
                    
                    {/* Step Label */}
                    <div className="mt-3 text-center">
                      <p className={`text-xs font-medium transition-colors ${
                        isActive || isCompleted ? 'text-slate-700' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-1">
              Schritt {currentStep} von {steps.length}
            </p>
            <h2 className="text-2xl font-light text-gray-900">
              {steps[currentStep - 1]?.description}
            </h2>
          </div>
        </div>

        {/* Step Content */}
        {!isLoading ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileCheck className="h-5 w-5 mr-2" />
                  {steps[currentStep - 1]?.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg min-h-[200px] focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                  placeholder={`Beschreiben Sie hier Ihre ${steps[currentStep - 1]?.title.toLowerCase()}...`}
                  value={getCurrentFieldValue()}
                  onChange={(e) => updateCurrentField(e.target.value)}
                />
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="py-16 text-center">
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
                Pflegeinformationen Bewertung
              </motion.h2>
              <motion.p 
                className="text-gray-600 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Ihre Pflegedokumentation wird bewertet...
              </motion.p>
            </motion.div>
          </div>
        )}

        {/* Navigation */}
        {!isLoading && (
          <div className="flex justify-center items-center space-x-4 mt-16">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-8"
            >
              Zurück
            </Button>
            
            {currentStep < 3 ? (
              <Button
                onClick={nextStep}
                className="px-8 bg-slate-800 hover:bg-slate-900 text-white"
              >
                Weiter
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleEvaluate}
                disabled={!canEvaluate || isLoading}
                className="px-8 bg-slate-800 hover:bg-slate-900 text-white"
              >
                <Brain className="h-4 w-4 mr-2" />
                Jetzt bewerten lassen
              </Button>
            )}
          </div>
        )}

        {error && (
          <div className="mt-8 text-center">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md inline-block">
              {error}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PflegeinfoWorkflow