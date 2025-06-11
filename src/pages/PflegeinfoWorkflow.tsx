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
  const [input, setInput] = useState<PflegeinfoInput>({
    dokumentation: '',
    pflegemassnahmen: '',
    beobachtungen: ''
  })
  const [result, setResult] = useState<PflegeinfoBewertungsResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

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
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      const evaluation = mockStructuredEvaluate()
      setResult(evaluation)
    } catch (error) {
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
          <p className="text-xl text-gray-600 font-light">
            Qualitätsbewertung und Verbesserungsvorschläge für Pflegedokumentation
          </p>
        </motion.div>

        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="border border-gray-200">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="flex items-center text-gray-900 font-medium">
                <FileCheck className="h-5 w-5 mr-3 text-gray-600" />
                Pflegedokumentation eingeben
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Pflegedokumentation *
                </label>
                <textarea
                  value={input.dokumentation}
                  onChange={(e) => setInput(prev => ({ ...prev, dokumentation: e.target.value }))}
                  placeholder="Geben Sie Ihre Pflegedokumentation ein..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent font-light transition-all"
                  rows={6}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Durchgeführte Pflegemaßnahmen (optional)
                </label>
                <textarea
                  value={input.pflegemassnahmen}
                  onChange={(e) => setInput(prev => ({ ...prev, pflegemassnahmen: e.target.value }))}
                  placeholder="Beschreiben Sie die durchgeführten Pflegemaßnahmen..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent font-light transition-all"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Beobachtungen und Verlauf (optional)
                </label>
                <textarea
                  value={input.beobachtungen}
                  onChange={(e) => setInput(prev => ({ ...prev, beobachtungen: e.target.value }))}
                  placeholder="Dokumentieren Sie Beobachtungen und Verlauf..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent font-light transition-all"
                  rows={4}
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm font-light">{error}</p>
                </div>
              )}

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-medium text-gray-900 mb-3">Bewertungskriterien:</h4>
                <ul className="text-sm text-gray-700 space-y-2 font-light">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Vollständigkeit der Dokumentation
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Fachliche Korrektheit
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Struktur und Klarheit
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Rechtliche Compliance
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Evaluate Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <Button
            onClick={handleEvaluate}
            disabled={!canEvaluate || isLoading}
            className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-light disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center space-x-3"
          >
            <Brain className="h-5 w-5" />
            <span>Pflegedokumentation bewerten</span>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default PflegeinfoWorkflow