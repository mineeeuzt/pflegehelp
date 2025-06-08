import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Activity, 
  Heart, 
  Thermometer, 
  Phone, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  Trophy,
  Target,
  Play
} from 'lucide-react'
import { Button, Card, CardContent, CardHeader, CardTitle } from '../components/ui'
import { useAuthStore } from '../store/authStore'

interface Medication {
  id: string
  name: string
  dosage: string
  category: 'ace' | 'beta' | 'diuretic' | 'painkiller' | 'emergency'
  color: string
}

interface Scenario {
  id: string
  title: string
  vitals: {
    bloodPressure: string
    heartRate: number
    temperature: number
  }
  symptoms: string[]
  correctMedication: string
  needsDoctor: boolean
  explanation: string
  level: 1 | 2 | 3
}

const MedikamentenTraining = () => {
  const { user } = useAuthStore()
  const [gameStarted, setGameStarted] = useState(false)
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null)
  const [selectedMedication, setSelectedMedication] = useState<string | null>(null)
  const [doctorCalled, setDoctorCalled] = useState<boolean | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completedScenarios, setCompletedScenarios] = useState(0)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const dropZoneRef = useRef<HTMLDivElement>(null)

  const medications: Medication[] = [
    { id: 'ramipril', name: 'Ramipril', dosage: '5mg', category: 'ace', color: 'bg-red-100 border-red-300 text-red-800' },
    { id: 'metoprolol', name: 'Metoprolol', dosage: '50mg', category: 'beta', color: 'bg-blue-100 border-blue-300 text-blue-800' },
    { id: 'furosemid', name: 'Furosemid', dosage: '40mg', category: 'diuretic', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' },
    { id: 'ibuprofen', name: 'Ibuprofen', dosage: '400mg', category: 'painkiller', color: 'bg-green-100 border-green-300 text-green-800' },
    { id: 'paracetamol', name: 'Paracetamol', dosage: '500mg', category: 'painkiller', color: 'bg-green-100 border-green-300 text-green-800' },
    { id: 'atropin', name: 'Atropin', dosage: '0.5mg', category: 'emergency', color: 'bg-purple-100 border-purple-300 text-purple-800' }
  ]

  const scenarios: Scenario[] = [
    {
      id: '1',
      title: 'Bluthochdruck-Krise',
      vitals: { bloodPressure: '190/120', heartRate: 95, temperature: 36.8 },
      symptoms: ['Kopfschmerzen', 'Schwindel', 'Übelkeit'],
      correctMedication: 'ramipril',
      needsDoctor: true,
      explanation: 'Bei Blutdruckwerten über 180/110 mmHg mit Symptomen liegt ein hypertensiver Notfall vor. ACE-Hemmer wie Ramipril sind Mittel der ersten Wahl. Der Arzt muss sofort informiert werden.',
      level: 1
    },
    {
      id: '2',
      title: 'Bradykardie',
      vitals: { bloodPressure: '100/60', heartRate: 45, temperature: 36.2 },
      symptoms: ['Schwäche', 'Schwindel', 'Wird schwarz vor Augen'],
      correctMedication: 'atropin',
      needsDoctor: true,
      explanation: 'Bei symptomatischer Bradykardie unter 50 bpm ist Atropin das Mittel der Wahl. Dies ist ein Notfall - sofortige Arztbenachrichtigung erforderlich.',
      level: 2
    },
    {
      id: '3',
      title: 'Fieber mit Kopfschmerzen',
      vitals: { bloodPressure: '120/80', heartRate: 88, temperature: 39.2 },
      symptoms: ['Starke Kopfschmerzen', 'Müdigkeit', 'Gliederschmerzen'],
      correctMedication: 'paracetamol',
      needsDoctor: false,
      explanation: 'Bei Fieber und Kopfschmerzen ist Paracetamol das Mittel der ersten Wahl. Bei normalen Vitalwerten und typischen Erkältungssymptomen ist kein Arzt nötig.',
      level: 1
    },
    {
      id: '4',
      title: 'Herzrasen nach Belastung',
      vitals: { bloodPressure: '160/95', heartRate: 145, temperature: 37.1 },
      symptoms: ['Herzrasen', 'Atemnot', 'Brustdruck'],
      correctMedication: 'metoprolol',
      needsDoctor: true,
      explanation: 'Bei Tachykardie mit erhöhtem Blutdruck sind Betablocker wie Metoprolol indiziert. Bei diesen Symptomen sollte der Arzt informiert werden.',
      level: 2
    }
  ]

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setCompletedScenarios(0)
    nextScenario()
  }

  const nextScenario = () => {
    const availableScenarios = scenarios.filter(s => s.level <= Math.min(3, Math.floor(completedScenarios / 2) + 1))
    const randomScenario = availableScenarios[Math.floor(Math.random() * availableScenarios.length)]
    setCurrentScenario(randomScenario)
    setSelectedMedication(null)
    setDoctorCalled(null)
    setShowResult(false)
  }

  const handleDragStart = (medicationId: string) => {
    setDraggedItem(medicationId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (draggedItem) {
      setSelectedMedication(draggedItem)
      setDraggedItem(null)
    }
  }

  const handleSubmit = () => {
    if (!currentScenario || selectedMedication === null || doctorCalled === null) return

    const medicationCorrect = selectedMedication === currentScenario.correctMedication
    const doctorCorrect = doctorCalled === currentScenario.needsDoctor

    let points = 0
    if (medicationCorrect) points += 10
    if (doctorCorrect) points += 5

    setScore(prev => prev + points)
    setCompletedScenarios(prev => prev + 1)
    setShowResult(true)
  }

  const getVitalColor = (vital: string, value: number | string) => {
    if (vital === 'heartRate') {
      const hr = value as number
      if (hr < 60 || hr > 100) return 'text-red-600'
      return 'text-green-600'
    }
    if (vital === 'temperature') {
      const temp = value as number
      if (temp > 38.5) return 'text-red-600'
      if (temp < 36) return 'text-blue-600'
      return 'text-green-600'
    }
    if (vital === 'bloodPressure') {
      const bp = value as string
      const systolic = parseInt(bp.split('/')[0])
      if (systolic > 160 || systolic < 90) return 'text-red-600'
      return 'text-green-600'
    }
    return 'text-gray-700'
  }

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              💊 Medikamenten-Training
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Trainiere deine Medikamentengabe mit realistischen Szenarien. Ziehe die richtigen Medikamente per Drag & Drop und entscheide, wann ein Arzt gerufen werden muss.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">Drag & Drop</h3>
                <p className="text-sm text-gray-600">Ziehe Medikamente ins Zielfeld</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">Arzt-Entscheidung</h3>
                <p className="text-sm text-gray-600">Entscheide bei kritischen Fällen</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">Punkte sammeln</h3>
                <p className="text-sm text-gray-600">Erhalte Feedback und Level-ups</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              onClick={startGame}
              className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 text-lg"
            >
              <Play className="h-5 w-5 mr-2" />
              Training starten
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!currentScenario) return null

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-light text-gray-900">Medikamenten-Training</h1>
            <p className="text-gray-600">Szenario {completedScenarios + 1}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-slate-700">🏆 {score}</div>
            <div className="text-sm text-gray-600">Punkte</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Monitor */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  {currentScenario.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Vitaldaten */}
                <div className="bg-black text-green-400 p-6 rounded-lg font-mono mb-6">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <Heart className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-sm opacity-75">HERZFREQ.</div>
                      <div className={`text-2xl font-bold ${getVitalColor('heartRate', currentScenario.vitals.heartRate)}`}>
                        {currentScenario.vitals.heartRate} bpm
                      </div>
                    </div>
                    <div>
                      <Activity className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-sm opacity-75">BLUTDRUCK</div>
                      <div className={`text-2xl font-bold ${getVitalColor('bloodPressure', currentScenario.vitals.bloodPressure)}`}>
                        {currentScenario.vitals.bloodPressure}
                      </div>
                    </div>
                    <div>
                      <Thermometer className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-sm opacity-75">TEMPERATUR</div>
                      <div className={`text-2xl font-bold ${getVitalColor('temperature', currentScenario.vitals.temperature)}`}>
                        {currentScenario.vitals.temperature}°C
                      </div>
                    </div>
                  </div>
                </div>

                {/* Symptome */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">💬 Patient berichtet:</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    {currentScenario.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-center mb-2 last:mb-0">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">"{symptom}"</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drop Zone */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">🎯 Medikament verabreichen:</h4>
                  <div
                    ref={dropZoneRef}
                    className={`border-2 border-dashed p-8 rounded-lg text-center transition-all ${
                      selectedMedication
                        ? 'border-slate-600 bg-slate-50'
                        : 'border-gray-300 bg-gray-50 hover:border-slate-400'
                    }`}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    {selectedMedication ? (
                      <div className="flex items-center justify-center">
                        <div className={`px-4 py-2 rounded-lg border ${
                          medications.find(m => m.id === selectedMedication)?.color
                        }`}>
                          {medications.find(m => m.id === selectedMedication)?.name} {medications.find(m => m.id === selectedMedication)?.dosage}
                        </div>
                      </div>
                    ) : (
                      <div className="text-gray-500">
                        Medikament hier hinziehen
                      </div>
                    )}
                  </div>
                </div>

                {/* Arzt-Entscheidung */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">📞 Arzt informieren?</h4>
                  <div className="flex space-x-4">
                    <Button
                      variant={doctorCalled === true ? "default" : "outline"}
                      onClick={() => setDoctorCalled(true)}
                      className={doctorCalled === true ? "bg-slate-800 text-white" : ""}
                    >
                      Ja, Arzt rufen
                    </Button>
                    <Button
                      variant={doctorCalled === false ? "default" : "outline"}
                      onClick={() => setDoctorCalled(false)}
                      className={doctorCalled === false ? "bg-slate-800 text-white" : ""}
                    >
                      Nein, nicht nötig
                    </Button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  disabled={!selectedMedication || doctorCalled === null}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white"
                >
                  Entscheidung bestätigen
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Medikamente Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>💊 Verfügbare Medikamente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {medications.map((med) => (
                    <motion.div
                      key={med.id}
                      className={`p-3 rounded-lg border cursor-move transition-all hover:scale-105 ${med.color}`}
                      draggable
                      onDragStart={() => handleDragStart(med.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-medium">{med.name}</div>
                      <div className="text-sm opacity-75">{med.dosage}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Result Modal */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl p-8 max-w-lg mx-4"
              >
                <div className="text-center mb-6">
                  {selectedMedication === currentScenario.correctMedication && doctorCalled === currentScenario.needsDoctor ? (
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  ) : (
                    <XCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedMedication === currentScenario.correctMedication && doctorCalled === currentScenario.needsDoctor 
                      ? '🎉 Perfekt!' 
                      : '⚡ Fast geschafft!'
                    }
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <span className="w-20 text-sm text-gray-600">Medikament:</span>
                    {selectedMedication === currentScenario.correctMedication ? (
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600 mr-2" />
                    )}
                    <span className="text-sm">
                      {selectedMedication === currentScenario.correctMedication ? 'Richtig' : 'Falsch'}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-20 text-sm text-gray-600">Arzt-Ruf:</span>
                    {doctorCalled === currentScenario.needsDoctor ? (
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600 mr-2" />
                    )}
                    <span className="text-sm">
                      {doctorCalled === currentScenario.needsDoctor ? 'Richtig' : 'Falsch'}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">💡 Erklärung:</h4>
                  <p className="text-sm text-gray-700">{currentScenario.explanation}</p>
                </div>

                <div className="flex space-x-3">
                  <Button
                    onClick={nextScenario}
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
                  >
                    Nächstes Szenario
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setGameStarted(false)}
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Beenden
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MedikamentenTraining