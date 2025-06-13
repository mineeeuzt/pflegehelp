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
      // EINFACH: Immer als String anzeigen, keine JSON-Parsing-Probleme
      setResult(response)
    } catch (error) {
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
    const step = steps[currentStep - 1]
    if (!step) return ''
    const currentField = step.field as keyof PflegeinfoInput
    return input[currentField] || ''
  }

  const updateCurrentField = (value: string) => {
    const step = steps[currentStep - 1]
    if (!step) return
    const currentField = step.field as keyof PflegeinfoInput
    setInput(prev => ({ ...prev, [currentField]: value }))
  }

  const canEvaluate = input.dokumentation.trim() !== ''

  // EINFACHE Results Display - nur Text, keine komplexe UI
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
                navigator.clipboard.writeText(result as string)
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
              style={{ width: `${steps.length > 1 ? ((currentStep - 1) / (steps.length - 1)) * 100 : 0}%` }}
            />
            
            {/* Step Dots */}
            <div className="flex justify-between relative">
              {steps && steps.length > 0 && steps.map((step, index) => {
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
              Schritt {currentStep} von {steps?.length || 3}
            </p>
            <h2 className="text-2xl font-light text-gray-900">
              {steps && steps[currentStep - 1]?.description || 'Lädt...'}
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
                  {steps && steps[currentStep - 1]?.title || 'Schritt'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg min-h-[200px] focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                  placeholder={`Beschreiben Sie hier Ihre ${steps && steps[currentStep - 1]?.title?.toLowerCase() || 'Eingabe'}...`}
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