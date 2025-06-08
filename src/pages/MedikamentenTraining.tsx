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
import { generateAIResponse, AI_PROMPTS } from '../lib/openai'

interface Medication {
  id: string
  name: string
  dosage: string
  category: 'ace' | 'beta' | 'diuretic' | 'painkiller' | 'emergency' | 'antibiotic' | 'insulin' | 'anticoagulant' | 'bronchodilator' | 'steroid' | 'antiarrhythmic' | 'antiemetic'
  color: string
}

interface Scenario {
  id: string
  title: string
  vitals: {
    bloodPressure: string
    heartRate: number
    temperature: number
    oxygenSaturation?: number
    bloodSugar?: number
    respiratoryRate?: number
    painLevel?: number
    consciousness?: string
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
  const [isGeneratingScenario, setIsGeneratingScenario] = useState(false)
  const [aiGeneratedScenarios, setAiGeneratedScenarios] = useState<Scenario[]>([])
  const dropZoneRef = useRef<HTMLDivElement>(null)

  const medications: Medication[] = [
    // ACE-Hemmer
    { id: 'ramipril', name: 'Ramipril', dosage: '5mg', category: 'ace', color: 'bg-red-100 border-red-300 text-red-800' },
    { id: 'enalapril', name: 'Enalapril', dosage: '10mg', category: 'ace', color: 'bg-red-100 border-red-300 text-red-800' },
    
    // Betablocker
    { id: 'metoprolol', name: 'Metoprolol', dosage: '50mg', category: 'beta', color: 'bg-blue-100 border-blue-300 text-blue-800' },
    { id: 'bisoprolol', name: 'Bisoprolol', dosage: '5mg', category: 'beta', color: 'bg-blue-100 border-blue-300 text-blue-800' },
    
    // Diuretika
    { id: 'furosemid', name: 'Furosemid', dosage: '40mg', category: 'diuretic', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' },
    { id: 'torasemid', name: 'Torasemid', dosage: '10mg', category: 'diuretic', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' },
    
    // Schmerzmittel
    { id: 'ibuprofen', name: 'Ibuprofen', dosage: '400mg', category: 'painkiller', color: 'bg-green-100 border-green-300 text-green-800' },
    { id: 'paracetamol', name: 'Paracetamol', dosage: '500mg', category: 'painkiller', color: 'bg-green-100 border-green-300 text-green-800' },
    { id: 'metamizol', name: 'Metamizol', dosage: '500mg', category: 'painkiller', color: 'bg-green-100 border-green-300 text-green-800' },
    
    // Notfallmedikamente
    { id: 'atropin', name: 'Atropin', dosage: '0.5mg', category: 'emergency', color: 'bg-purple-100 border-purple-300 text-purple-800' },
    { id: 'adrenalin', name: 'Adrenalin', dosage: '1mg', category: 'emergency', color: 'bg-purple-100 border-purple-300 text-purple-800' },
    
    // Antibiotika
    { id: 'amoxicillin', name: 'Amoxicillin', dosage: '1000mg', category: 'antibiotic', color: 'bg-orange-100 border-orange-300 text-orange-800' },
    { id: 'ciprofloxacin', name: 'Ciprofloxacin', dosage: '500mg', category: 'antibiotic', color: 'bg-orange-100 border-orange-300 text-orange-800' },
    
    // Insulin
    { id: 'insulin-rapid', name: 'Insulin rapid', dosage: '4 IE', category: 'insulin', color: 'bg-pink-100 border-pink-300 text-pink-800' },
    { id: 'insulin-long', name: 'Insulin long', dosage: '12 IE', category: 'insulin', color: 'bg-pink-100 border-pink-300 text-pink-800' },
    
    // Antikoagulantien
    { id: 'heparin', name: 'Heparin', dosage: '5000 IE', category: 'anticoagulant', color: 'bg-indigo-100 border-indigo-300 text-indigo-800' },
    { id: 'marcumar', name: 'Marcumar', dosage: '3mg', category: 'anticoagulant', color: 'bg-indigo-100 border-indigo-300 text-indigo-800' },
    
    // Bronchodilatatoren
    { id: 'salbutamol', name: 'Salbutamol', dosage: '2 Hübe', category: 'bronchodilator', color: 'bg-cyan-100 border-cyan-300 text-cyan-800' },
    { id: 'ipratropium', name: 'Ipratropium', dosage: '2 Hübe', category: 'bronchodilator', color: 'bg-cyan-100 border-cyan-300 text-cyan-800' },
    
    // Steroide
    { id: 'prednisolon', name: 'Prednisolon', dosage: '20mg', category: 'steroid', color: 'bg-teal-100 border-teal-300 text-teal-800' },
    { id: 'dexamethason', name: 'Dexamethason', dosage: '4mg', category: 'steroid', color: 'bg-teal-100 border-teal-300 text-teal-800' },
    
    // Antiarrhythmika
    { id: 'amiodaron', name: 'Amiodaron', dosage: '200mg', category: 'antiarrhythmic', color: 'bg-violet-100 border-violet-300 text-violet-800' },
    { id: 'verapamil', name: 'Verapamil', dosage: '5mg', category: 'antiarrhythmic', color: 'bg-violet-100 border-violet-300 text-violet-800' },
    
    // Antiemetika
    { id: 'ondansetron', name: 'Ondansetron', dosage: '4mg', category: 'antiemetic', color: 'bg-rose-100 border-rose-300 text-rose-800' },
    { id: 'metoclopramid', name: 'Metoclopramid', dosage: '10mg', category: 'antiemetic', color: 'bg-rose-100 border-rose-300 text-rose-800' }
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
    },
    {
      id: '5',
      title: 'Wassereinlagerungen',
      vitals: { bloodPressure: '150/90', heartRate: 78, temperature: 36.5 },
      symptoms: ['Geschwollene Beine', 'Kurzatmigkeit', 'Gewichtszunahme'],
      correctMedication: 'furosemid',
      needsDoctor: false,
      explanation: 'Bei Ödemen und Anzeichen von Herzinsuffizienz sind Diuretika wie Furosemid indiziert. Routinefall ohne sofortige Arztbenachrichtigung.',
      level: 1
    },
    {
      id: '6',
      title: 'Akute Rückenschmerzen',
      vitals: { bloodPressure: '130/85', heartRate: 72, temperature: 36.7 },
      symptoms: ['Starke Rückenschmerzen', 'Bewegungseinschränkung', 'Verspannungen'],
      correctMedication: 'ibuprofen',
      needsDoctor: false,
      explanation: 'Bei akuten Rückenschmerzen ohne Warnsignale ist Ibuprofen aufgrund der entzündungshemmenden Wirkung geeignet. Kein Notfall.',
      level: 1
    },
    {
      id: '7',
      title: 'Hypertensive Entgleisung',
      vitals: { bloodPressure: '220/130', heartRate: 110, temperature: 37.2 },
      symptoms: ['Sehstörungen', 'Verwirrtheit', 'Starke Kopfschmerzen'],
      correctMedication: 'ramipril',
      needsDoctor: true,
      explanation: 'Bei maligner Hypertonie mit neurologischen Symptomen ist eine sofortige Blutdrucksenkung nötig. ACE-Hemmer und sofortige Arztbenachrichtigung erforderlich.',
      level: 3
    },
    {
      id: '8',
      title: 'Vorhofflimmern',
      vitals: { bloodPressure: '140/90', heartRate: 180, temperature: 36.9 },
      symptoms: ['Unregelmäßiger Herzschlag', 'Schwindel', 'Schwächegefühl'],
      correctMedication: 'metoprolol',
      needsDoctor: true,
      explanation: 'Bei Vorhofflimmern mit schneller Überleitung sind Betablocker zur Frequenzkontrolle indiziert. Arztbenachrichtigung wegen Rhythmusstörung.',
      level: 3
    }
  ]

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setCompletedScenarios(0)
    nextScenario()
  }

  const generateAIScenario = async (): Promise<Scenario | null> => {
    try {
      setIsGeneratingScenario(true)
      const levelBased = Math.min(3, Math.floor(completedScenarios / 3) + 1)
      
      // Abwechslungsreiche Prompts für verschiedene medizinische Bereiche
      const medicalAreas = [
        'ein Herz-Kreislauf-Szenario',
        'ein Diabetes/Endokrinologie-Szenario', 
        'ein Atemwegs-Szenario (Asthma, COPD)',
        'ein Infektions-Szenario',
        'ein Schmerz-Management-Szenario',
        'ein Notfall-Szenario',
        'ein Geriatrie-Szenario',
        'ein nephrologisches Szenario',
        'ein gastroenterologisches Szenario',
        'ein neurologisches Szenario'
      ]
      
      const randomArea = medicalAreas[Math.floor(Math.random() * medicalAreas.length)]
      const prompt = `Erstelle ${randomArea} der Schwierigkeit Level ${levelBased}. Nutze abwechslungsreiche Medikamentengruppen und Vitalparameter. Achte auf realistische, lehrreiche Fälle mit verschiedenen Altersgruppen.`
      
      const response = await generateAIResponse(AI_PROMPTS.medikamentenszenario, prompt)
      const scenarioData = JSON.parse(response)
      
      const newScenario: Scenario = {
        id: `ai-${Date.now()}`,
        title: scenarioData.title,
        vitals: {
          bloodPressure: scenarioData.vitals.bloodPressure,
          heartRate: scenarioData.vitals.heartRate,
          temperature: scenarioData.vitals.temperature,
          oxygenSaturation: scenarioData.vitals.oxygenSaturation,
          bloodSugar: scenarioData.vitals.bloodSugar,
          respiratoryRate: scenarioData.vitals.respiratoryRate,
          painLevel: scenarioData.vitals.painLevel,
          consciousness: scenarioData.vitals.consciousness
        },
        symptoms: scenarioData.symptoms,
        correctMedication: scenarioData.correctMedication,
        needsDoctor: scenarioData.needsDoctor,
        explanation: scenarioData.explanation,
        level: scenarioData.level
      }
      
      setAiGeneratedScenarios(prev => [...prev, newScenario])
      return newScenario
    } catch (error) {
      console.error('Fehler beim Generieren des KI-Szenarios:', error)
      return null
    } finally {
      setIsGeneratingScenario(false)
    }
  }

  const nextScenario = async () => {
    // Immer KI-generierte Szenarien verwenden
    const aiScenario = await generateAIScenario()
    if (aiScenario) {
      setCurrentScenario(aiScenario)
      setSelectedMedication(null)
      setDoctorCalled(null)
      setShowResult(false)
      return
    }
    
    // Nur als Notfall-Fallback auf vordefinierte Szenarien bei KI-Fehler
    console.warn('KI-Szenario-Generierung fehlgeschlagen, verwende vordefinierte Szenarien')
    const availableScenarios = scenarios.filter(s => 
      s.level <= Math.min(3, Math.floor(completedScenarios / 2) + 1) && 
      s.id !== currentScenario?.id
    )
    
    const scenarioPool = availableScenarios.length > 0 ? availableScenarios : scenarios
    const randomScenario = scenarioPool[Math.floor(Math.random() * scenarioPool.length)]
    
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
    if (vital === 'oxygenSaturation') {
      const o2 = value as number
      if (o2 < 95) return 'text-red-600'
      if (o2 < 98) return 'text-yellow-600'
      return 'text-green-600'
    }
    if (vital === 'bloodSugar') {
      const bg = value as number
      if (bg < 70 || bg > 180) return 'text-red-600'
      if (bg < 80 || bg > 140) return 'text-yellow-600'
      return 'text-green-600'
    }
    if (vital === 'respiratoryRate') {
      const rr = value as number
      if (rr < 12 || rr > 20) return 'text-red-600'
      return 'text-green-600'
    }
    if (vital === 'painLevel') {
      const pain = value as number
      if (pain >= 7) return 'text-red-600'
      if (pain >= 4) return 'text-yellow-600'
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
              Trainiere mit KI-generierten, abwechslungsreichen Medikamenten-Szenarien. Über 20 verschiedene Wirkstoffe aus allen Bereichen der Medizin warten auf dich!
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
            <p className="text-gray-600">
              Szenario {completedScenarios + 1} • {currentScenario?.title}
              {currentScenario?.id.startsWith('ai-') && <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">🤖 KI-generiert</span>}
              {isGeneratingScenario && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded animate-pulse">⚡ Generiere neues Szenario...</span>}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-slate-700">🏆 {score}</div>
            <div className="text-sm text-gray-600">Punkte • Level {Math.floor(completedScenarios / 3) + 1}</div>
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
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <Heart className="h-5 w-5 mx-auto mb-2" />
                      <div className="text-xs opacity-75">HERZFREQ.</div>
                      <div className={`text-lg font-bold ${getVitalColor('heartRate', currentScenario.vitals.heartRate)}`}>
                        {currentScenario.vitals.heartRate} bpm
                      </div>
                    </div>
                    <div>
                      <Activity className="h-5 w-5 mx-auto mb-2" />
                      <div className="text-xs opacity-75">BLUTDRUCK</div>
                      <div className={`text-lg font-bold ${getVitalColor('bloodPressure', currentScenario.vitals.bloodPressure)}`}>
                        {currentScenario.vitals.bloodPressure}
                      </div>
                    </div>
                    <div>
                      <Thermometer className="h-5 w-5 mx-auto mb-2" />
                      <div className="text-xs opacity-75">TEMPERATUR</div>
                      <div className={`text-lg font-bold ${getVitalColor('temperature', currentScenario.vitals.temperature)}`}>
                        {currentScenario.vitals.temperature}°C
                      </div>
                    </div>
                  </div>
                  
                  {/* Zusätzliche Vitalwerte */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm border-t border-green-800 pt-4">
                    {currentScenario.vitals.oxygenSaturation && (
                      <div>
                        <div className="text-xs opacity-75">SpO2</div>
                        <div className={`font-bold ${getVitalColor('oxygenSaturation', currentScenario.vitals.oxygenSaturation)}`}>
                          {currentScenario.vitals.oxygenSaturation}%
                        </div>
                      </div>
                    )}
                    {currentScenario.vitals.bloodSugar && (
                      <div>
                        <div className="text-xs opacity-75">BZ</div>
                        <div className={`font-bold ${getVitalColor('bloodSugar', currentScenario.vitals.bloodSugar)}`}>
                          {currentScenario.vitals.bloodSugar} mg/dl
                        </div>
                      </div>
                    )}
                    {currentScenario.vitals.respiratoryRate && (
                      <div>
                        <div className="text-xs opacity-75">AF</div>
                        <div className={`font-bold ${getVitalColor('respiratoryRate', currentScenario.vitals.respiratoryRate)}`}>
                          {currentScenario.vitals.respiratoryRate}/min
                        </div>
                      </div>
                    )}
                    {currentScenario.vitals.painLevel !== undefined && (
                      <div>
                        <div className="text-xs opacity-75">SCHMERZ</div>
                        <div className={`font-bold ${getVitalColor('painLevel', currentScenario.vitals.painLevel)}`}>
                          {currentScenario.vitals.painLevel}/10
                        </div>
                      </div>
                    )}
                    {currentScenario.vitals.consciousness && (
                      <div className="col-span-2">
                        <div className="text-xs opacity-75">BEWUSSTSEIN</div>
                        <div className="font-bold text-green-400">
                          {currentScenario.vitals.consciousness}
                        </div>
                      </div>
                    )}
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
                    onClick={() => {
                      console.log('Button clicked - Next scenario')
                      nextScenario()
                    }}
                    disabled={isGeneratingScenario}
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white disabled:opacity-50"
                  >
                    {isGeneratingScenario ? 'Generiere...' : `Nächstes Szenario (${completedScenarios + 1})`}
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