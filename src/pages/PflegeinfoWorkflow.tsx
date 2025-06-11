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
  const [result, setResult] = useState<PflegeinfoBewertungsResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const steps = [
    { number: 1, title: 'Dokumentation', field: 'dokumentation', description: 'Pflegedokumentation erfassen' },
    { number: 2, title: 'Pflegemaßnahmen', field: 'pflegemassnahmen', description: 'Durchgeführte Maßnahmen dokumentieren' },
    { number: 3, title: 'Beobachtungen', field: 'beobachtungen', description: 'Beobachtungen und Verlauf festhalten' }
  ]

  const mockStructuredEvaluate = (): PflegeinfoBewertungsResult => {
    return {
      gesamtbewertung: 72,
      bewertungBegruendung: "Die Pflegedokumentation zeigt solide Grundlagen mit guten Ansätzen in der Beschreibung der Pflegesituation. Es gibt jedoch Verbesserungspotential in der Strukturierung und fachlichen Tiefe.",
      feedback: {
        dokumentation: {
          score: 75,
          eingereichtText: input.dokumentation,
          positiv: [
            "Chronologische Darstellung erkennbar",
            "Wichtige Patientendaten erfasst",
            "Lesbare Struktur vorhanden"
          ],
          fehler: [
            {
              zitat: input.dokumentation.substring(0, 80) + "...",
              problem: "Objektive und subjektive Befunde vermischt",
              korrektur: "Trennen Sie objektive Beobachtungen von subjektiven Äußerungen des Patienten"
            }
          ],
          note: "Grundlegende Dokumentation mit Verbesserungspotential bei der Struktur"
        },
        pflegemassnahmen: {
          score: input.pflegemassnahmen ? 68 : 50,
          eingereichtText: input.pflegemassnahmen || "(Nicht angegeben)",
          positiv: input.pflegemassnahmen ? [
            "Maßnahmen erkennbar beschrieben",
            "Praktische Durchführung berücksichtigt"
          ] : [],
          fehler: input.pflegemassnahmen ? [
            {
              zitat: input.pflegemassnahmen?.substring(0, 60) + "...",
              problem: "Zeitangaben bei Maßnahmen fehlen",
              korrektur: "Geben Sie konkrete Zeitpunkte und Häufigkeiten für Pflegemaßnahmen an"
            }
          ] : [
            {
              zitat: "Keine Pflegemaßnahmen dokumentiert",
              problem: "Vollständige Dokumentation erforderlich",
              korrektur: "Dokumentieren Sie alle durchgeführten Pflegemaßnahmen detailliert"
            }
          ],
          note: input.pflegemassnahmen ? "Maßnahmen dokumentiert, Präzision bei Zeitangaben verbessern" : "Pflegemaßnahmen fehlen in der Dokumentation"
        },
        beobachtungen: {
          score: input.beobachtungen ? 70 : 45,
          eingereichtText: input.beobachtungen || "(Nicht angegeben)",
          positiv: input.beobachtungen ? [
            "Beobachtungen werden festgehalten",
            "Verlaufsdokumentation erkennbar"
          ] : [],
          fehler: input.beobachtungen ? [
            {
              zitat: input.beobachtungen?.substring(0, 60) + "...",
              problem: "Messbare Parameter fehlen",
              korrektur: "Ergänzen Sie messbare Werte wie Vitalzeichen, Schmerzskala, etc."
            }
          ] : [
            {
              zitat: "Keine Beobachtungen dokumentiert",
              problem: "Verlaufsbeobachtung fehlt",
              korrektur: "Dokumentieren Sie systematische Beobachtungen und Veränderungen"
            }
          ],
          note: input.beobachtungen ? "Beobachtungen vorhanden, messbare Parameter ergänzen" : "Systematische Beobachtungsdokumentation fehlt"
        },
        struktur: {
          score: 65,
          eingereichtText: "Gesamte Dokumentationsstruktur",
          positiv: [
            "Grundlegende Struktur erkennbar",
            "Thematische Zuordnung teilweise vorhanden"
          ],
          fehler: [
            {
              zitat: "Dokumentationsstruktur",
              problem: "Keine einheitliche Dokumentationsstandards",
              korrektur: "Verwenden Sie einheitliche Strukturen wie ABEDL oder andere Pflegemodelle"
            }
          ],
          note: "Struktur ausbaufähig, Standards implementieren"
        },
        fachlichkeit: {
          score: 70,
          eingereichtText: "Fachliche Inhalte der Dokumentation",
          positiv: [
            "Fachterminologie teilweise korrekt verwendet",
            "Pflegerelevante Aspekte erkannt"
          ],
          fehler: [
            {
              zitat: "Fachliche Beschreibungen",
              problem: "Unvollständige Pflegediagnosen",
              korrektur: "Ergänzen Sie strukturierte Pflegediagnosen nach anerkannten Standards"
            }
          ],
          note: "Fachliche Grundlagen vorhanden, Vertiefung erforderlich"
        },
        rechtliches: {
          score: 75,
          eingereichtText: "Rechtliche Aspekte der Dokumentation",
          positiv: [
            "Dokumentation grundsätzlich nachvollziehbar",
            "Keine offensichtlichen rechtlichen Mängel"
          ],
          fehler: [
            {
              zitat: "Rechtliche Dokumentation",
              problem: "Unterschriften und Zeitstempel prüfen",
              korrektur: "Stellen Sie sicher, dass alle Einträge mit Zeit und Unterschrift versehen sind"
            }
          ],
          note: "Rechtliche Grundlagen beachtet, Vollständigkeit prüfen"
        }
      },
      hauptprobleme: [
        "Strukturierung nach Pflegemodellen fehlt",
        "Messbare Parameter unvollständig",
        "Pflegediagnosen nicht systematisch formuliert",
        "Zeitangaben bei Maßnahmen ungenau"
      ],
      mindestanforderungErfuellt: true,
      empfehlung: "Grundsolide Dokumentation - Strukturierung nach ABEDL/Pflegemodellen und Ergänzung messbarer Parameter empfohlen"
    }
  }

  const handleEvaluate = async () => {
    if (!user) return

    setIsLoading(true)
    setError('')
    setResult(null)

    try {
      // Use real API with structured JSON response
      console.log('Calling API with input:', input)
      const response = await caseService.evaluatePflegeinfo(input, user.id)
      console.log('Raw API response:', response)
      
      // Try to parse JSON response from API
      let evaluation: PflegeinfoBewertungsResult
      try {
        // Clean response - remove any markdown formatting if present
        const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
        console.log('Cleaned response:', cleanResponse)
        evaluation = JSON.parse(cleanResponse)
        
        // Validate that the parsed object has the required structure
        if (!evaluation.gesamtbewertung || !evaluation.feedback || !evaluation.bewertungBegruendung) {
          throw new Error('Invalid response structure')
        }
        
        // Ensure all arrays exist to prevent .length errors
        evaluation.hauptprobleme = evaluation.hauptprobleme || []
        Object.keys(evaluation.feedback).forEach(key => {
          const bereich = evaluation.feedback[key as keyof typeof evaluation.feedback]
          if (bereich) {
            bereich.positiv = bereich.positiv || []
            bereich.fehler = bereich.fehler || []
          }
        })
        
        console.log('Successfully parsed API response:', evaluation)
      } catch (parseError) {
        // Fallback to mock if API doesn't return valid JSON
        console.log('API response parsing failed. Response was:', response)
        console.log('Parse error:', parseError)
        console.log('This means the API is still returning plain text instead of JSON. The new JSON prompt may not be deployed yet.')
        
        // For now, show an error to the user that the API needs to return JSON
        setError('Die API gibt noch Textformat zurück. Bitte warten Sie, bis das JSON-Format aktiv ist, oder versuchen Sie es später erneut.')
        return
      }
      
      setResult(evaluation)
    } catch (error) {
      console.error('Evaluation error:', error)
      setError(error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = () => {
    if (result) {
      const resultText = `Bewertung der Pflegedokumentation\n\nGesamtbewertung: ${result.gesamtbewertung}%\n\n${result.bewertungBegruendung}\n\nEmpfehlung: ${result.empfehlung}\n\nHauptverbesserungsbereiche:\n${result.hauptprobleme.map(p => `- ${p}`).join('\n')}`
      navigator.clipboard.writeText(resultText)
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

  // Structured Results Display
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
              KI-Bewertung Ihrer Pflegedokumentation
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
            {Object.entries(result.feedback).map(([bereich, bewertung]) => {
              const bereichNames: Record<string, string> = {
                dokumentation: 'Dokumentation',
                pflegemassnahmen: 'Pflegemaßnahmen',
                beobachtungen: 'Beobachtungen',
                struktur: 'Struktur',
                fachlichkeit: 'Fachlichkeit',
                rechtliches: 'Rechtliche Aspekte'
              }
              
              return (
                <Card key={bereich} className="border border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      <span>{bereichNames[bereich] || bereich}</span>
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
              )
            })}
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

          <div className="text-center space-y-4">
            <Button
              onClick={handleCopy}
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