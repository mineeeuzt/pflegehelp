import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Brain, Upload, FileText, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import { Button, Card, CardContent, CardHeader, CardTitle } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import AILoadingAnimation from '../components/AILoadingAnimation'

interface PflegeplanungInput {
  pflegeprobleme: string
  nahziele: string
  fernziele: string
  massnahmen: string
  begruendung: string
  evaluation: string
}

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

interface BewertungsResult {
  gesamtbewertung: number
  bewertungBegruendung: string
  feedback: {
    pflegeprobleme: BereichsBewertung
    nahziele: BereichsBewertung
    fernziele: BereichsBewertung
    massnahmen: BereichsBewertung
    begruendung: BereichsBewertung
    evaluation: BereichsBewertung
  }
  hauptprobleme: string[]
  mindestanforderungErfuellt: boolean
  empfehlung: string
}

const PflegeplanungBewertung = () => {
  const { user } = useAuthStore()
  const [currentStep, setCurrentStep] = useState(1)
  const [input, setInput] = useState<PflegeplanungInput>({
    pflegeprobleme: '',
    nahziele: '',
    fernziele: '',
    massnahmen: '',
    begruendung: '',
    evaluation: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<BewertungsResult | null>(null)
  const [error, setError] = useState('')

  const steps = [
    { number: 1, title: 'Pflegeprobleme', field: 'pflegeprobleme', description: 'Identifizierte Pflegeprobleme formulieren' },
    { number: 2, title: 'Nahziele', field: 'nahziele', description: 'Kurzfristige Ziele definieren' },
    { number: 3, title: 'Fernziele', field: 'fernziele', description: 'Langfristige Ziele formulieren' },
    { number: 4, title: 'Maßnahmen', field: 'massnahmen', description: 'Konkrete Pflegemaßnahmen planen' },
    { number: 5, title: 'Begründung', field: 'begruendung', description: 'Maßnahmen fachlich begründen' },
    { number: 6, title: 'Evaluation', field: 'evaluation', description: 'Erfolgskontrolle planen' }
  ]

  const mockEvaluate = (): BewertungsResult => {
    // Simulate API call with provided JSON structure
    return {
      gesamtbewertung: 65,
      bewertungBegruendung: "Die Pflegeplanung zeigt gute Ansätze, benötigt aber noch Verbesserungen in der Konkretisierung.",
      feedback: {
        pflegeprobleme: {
          score: 70,
          eingereichtText: input.pflegeprobleme,
          positiv: ["Grundlegende Problemerkennung vorhanden"],
          fehler: [
            {
              zitat: input.pflegeprobleme.substring(0, 50) + "...",
              problem: "Die Formulierung könnte präziser sein",
              korrektur: "Verwenden Sie die PESR-Struktur für klarere Problemdefinition"
            }
          ],
          note: "Gute Basis, Verbesserungspotential bei der Präzision"
        },
        nahziele: {
          score: 60,
          eingereichtText: input.nahziele,
          positiv: ["Zeitrahmen berücksichtigt"],
          fehler: [
            {
              zitat: input.nahziele.substring(0, 50) + "...",
              problem: "Ziele nicht SMART formuliert",
              korrektur: "Verwenden Sie spezifische, messbare und erreichbare Zielformulierungen"
            }
          ],
          note: "Zeitbezug vorhanden, Konkretisierung erforderlich"
        },
        fernziele: {
          score: 65,
          eingereichtText: input.fernziele,
          positiv: ["Langfristige Perspektive erkennbar"],
          fehler: [
            {
              zitat: input.fernziele.substring(0, 50) + "...",
              problem: "Verbindung zu Nahzielen unklar",
              korrektur: "Stellen Sie klare Verbindungen zwischen Nah- und Fernzielen her"
            }
          ],
          note: "Guter Ansatz, bessere Verknüpfung nötig"
        },
        massnahmen: {
          score: 70,
          eingereichtText: input.massnahmen,
          positiv: ["Konkrete Handlungsschritte erkennbar"],
          fehler: [
            {
              zitat: input.massnahmen.substring(0, 50) + "...",
              problem: "Pflegestandards nicht referenziert",
              korrektur: "Beziehen Sie sich auf aktuelle Pflegestandards und Leitlinien"
            }
          ],
          note: "Praktische Maßnahmen, Standards berücksichtigen"
        },
        begruendung: {
          score: 55,
          eingereichtText: input.begruendung,
          positiv: ["Fachliche Überlegungen vorhanden"],
          fehler: [
            {
              zitat: input.begruendung.substring(0, 50) + "...",
              problem: "Evidenz-basierte Begründung fehlt",
              korrektur: "Untermauern Sie Entscheidungen mit aktueller Fachliteratur"
            }
          ],
          note: "Grundlegende Begründung, wissenschaftliche Fundierung stärken"
        },
        evaluation: {
          score: 60,
          eingereichtText: input.evaluation,
          positiv: ["Evaluationsansatz erkennbar"],
          fehler: [
            {
              zitat: input.evaluation.substring(0, 50) + "...",
              problem: "Messbare Kriterien fehlen",
              korrektur: "Definieren Sie konkrete, messbare Evaluationskriterien"
            }
          ],
          note: "Evaluation geplant, Messbarkeit verbessern"
        }
      },
      hauptprobleme: ["Konkretisierung erforderlich", "SMART-Ziele formulieren", "Evidenz-basierte Begründungen"],
      mindestanforderungErfuellt: true,
      empfehlung: "Gute Grundlage - Vertiefung der fachlichen Begründungen empfohlen"
    }
  }

  const handleEvaluate = async () => {
    if (!user) return
    
    setIsLoading(true)
    setError('')
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      const evaluation = mockEvaluate()
      setResult(evaluation)
    } catch (error) {
      setError('Fehler bei der Bewertung. Bitte versuchen Sie es erneut.')
    } finally {
      setIsLoading(false)
    }
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 6))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const getCurrentFieldValue = () => {
    const currentField = steps[currentStep - 1]?.field as keyof PflegeplanungInput
    return input[currentField] || ''
  }

  const updateCurrentField = (value: string) => {
    const currentField = steps[currentStep - 1]?.field as keyof PflegeplanungInput
    setInput(prev => ({ ...prev, [currentField]: value }))
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

  if (result) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              KI-Bewertung Ihrer Pflegeplanung
            </h1>
          </motion.div>

          {/* Gesamtbewertung */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Gesamtbewertung</span>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${getScoreColor(result.gesamtbewertung)}`}>
                  {getScoreIcon(result.gesamtbewertung)}
                  <span className="font-bold">{result.gesamtbewertung}%</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{result.bewertungBegruendung}</p>
              <p className="text-slate-600 font-medium">Empfehlung: {result.empfehlung}</p>
            </CardContent>
          </Card>

          {/* Bereichsbewertungen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {Object.entries(result.feedback).map(([bereich, bewertung]) => (
              <Card key={bereich} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span className="capitalize">{bereich.replace(/([A-Z])/g, ' $1')}</span>
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-lg ${getScoreColor(bewertung.score)}`}>
                      {getScoreIcon(bewertung.score)}
                      <span className="font-bold text-sm">{bewertung.score}%</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{bewertung.note}</p>
                  
                  {bewertung.positiv.length > 0 && (
                    <div className="mb-3">
                      <h5 className="font-medium text-slate-700 mb-2">Positiv:</h5>
                      <ul className="text-sm space-y-1">
                        {bewertung.positiv.map((punkt, idx) => (
                          <li key={idx} className="text-slate-600">• {punkt}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {bewertung.fehler.length > 0 && (
                    <div>
                      <h5 className="font-medium text-slate-700 mb-2">Verbesserungen:</h5>
                      <ul className="text-sm space-y-2">
                        {bewertung.fehler.map((fehler, idx) => (
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
          {result.hauptprobleme.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Hauptverbesserungsbereiche</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.hauptprobleme.map((problem, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <ArrowRight className="h-4 w-4 mr-2 text-slate-500" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="text-center">
            <Button
              onClick={() => {
                setResult(null)
                setCurrentStep(1)
                setInput({
                  pflegeprobleme: '',
                  nahziele: '',
                  fernziele: '',
                  massnahmen: '',
                  begruendung: '',
                  evaluation: ''
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
            Pflegeplanung Bewertung
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Lassen Sie Ihre Pflegeplanung von unserer KI bewerten und erhalten Sie detailliertes Feedback
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
                  <BookOpen className="h-5 w-5 mr-2" />
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
          <AILoadingAnimation 
            message="Ihre Pflegeplanung wird bewertet..."
            size="lg"
          />
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
            
            {currentStep < 6 ? (
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
                disabled={isLoading}
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

export default PflegeplanungBewertung