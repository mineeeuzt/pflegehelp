import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Activity, 
  Heart, 
  Thermometer, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  Plus
} from 'lucide-react'
import { Button, Card, CardContent, CardHeader, CardTitle } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { generateMedicationScenario, AI_PROMPTS } from '../lib/openai'

interface Medication {
  id: string
  name: string
  dosage: string
  category: 'ace' | 'beta' | 'diuretic' | 'painkiller' | 'emergency' | 'antibiotic' | 'insulin' | 'anticoagulant' | 'bronchodilator' | 'steroid' | 'antiarrhythmic' | 'antiemetic'
  activeIngredient: string
  drugClass: string
  indication: string
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
  const [gameStarted, setGameStarted] = useState(false)
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null)
  const [selectedMedication, setSelectedMedication] = useState<string | null>(null)
  const [doctorCalled, setDoctorCalled] = useState<boolean | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completedScenarios, setCompletedScenarios] = useState(0)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [isGeneratingScenario, setIsGeneratingScenario] = useState(false)
  const [availableMedications, setAvailableMedications] = useState<Medication[]>([])
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const dropZoneRef = useRef<HTMLDivElement>(null)

  const allMedications: Medication[] = [
    // ACE-Hemmer
    { id: 'ramipril', name: 'Ramipril', dosage: '5mg', activeIngredient: 'Ramipril', drugClass: 'ACE-Hemmer', indication: 'Hypertonie, Herzinsuffizienz', category: 'ace', color: 'bg-red-50 border-red-200 text-red-700' },
    { id: 'enalapril', name: 'Enalapril', dosage: '10mg', activeIngredient: 'Enalapril', drugClass: 'ACE-Hemmer', indication: 'Hypertonie, Herzinsuffizienz', category: 'ace', color: 'bg-red-50 border-red-200 text-red-700' },
    
    // Betablocker
    { id: 'metoprolol', name: 'Metoprolol', dosage: '50mg', activeIngredient: 'Metoprolol', drugClass: 'Betablocker', indication: 'Tachykardie, Hypertonie', category: 'beta', color: 'bg-blue-50 border-blue-200 text-blue-700' },
    { id: 'bisoprolol', name: 'Bisoprolol', dosage: '5mg', activeIngredient: 'Bisoprolol', drugClass: 'Betablocker', indication: 'Herzinsuffizienz, Hypertonie', category: 'beta', color: 'bg-blue-50 border-blue-200 text-blue-700' },
    
    // Diuretika
    { id: 'furosemid', name: 'Furosemid', dosage: '40mg', activeIngredient: 'Furosemid', drugClass: 'Schleifendiuretikum', indication: 'Ödeme, Herzinsuffizienz', category: 'diuretic', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
    { id: 'torasemid', name: 'Torasemid', dosage: '10mg', activeIngredient: 'Torasemid', drugClass: 'Schleifendiuretikum', indication: 'Herzinsuffizienz, Hypertonie', category: 'diuretic', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
    
    // Schmerzmittel
    { id: 'ibuprofen', name: 'Ibuprofen', dosage: '400mg', activeIngredient: 'Ibuprofen', drugClass: 'NSAID', indication: 'Schmerzen, Entzündung', category: 'painkiller', color: 'bg-green-50 border-green-200 text-green-700' },
    { id: 'paracetamol', name: 'Paracetamol', dosage: '500mg', activeIngredient: 'Paracetamol', drugClass: 'Analgetikum', indication: 'Fieber, Kopfschmerzen', category: 'painkiller', color: 'bg-green-50 border-green-200 text-green-700' },
    { id: 'metamizol', name: 'Metamizol', dosage: '500mg', activeIngredient: 'Metamizol', drugClass: 'Pyrazolon', indication: 'Starke Schmerzen, Fieber', category: 'painkiller', color: 'bg-green-50 border-green-200 text-green-700' },
    
    // Notfallmedikamente
    { id: 'atropin', name: 'Atropin', dosage: '0.5mg', activeIngredient: 'Atropin', drugClass: 'Parasympatholytikum', indication: 'Bradykardie, Vergiftung', category: 'emergency', color: 'bg-purple-50 border-purple-200 text-purple-700' },
    { id: 'adrenalin', name: 'Adrenalin', dosage: '1mg', activeIngredient: 'Epinephrin', drugClass: 'Sympathomimetikum', indication: 'Anaphylaxie, Reanimation', category: 'emergency', color: 'bg-purple-50 border-purple-200 text-purple-700' },
    
    // Antibiotika
    { id: 'amoxicillin', name: 'Amoxicillin', dosage: '1000mg', activeIngredient: 'Amoxicillin', drugClass: 'Penicillin', indication: 'Bakterielle Infekte', category: 'antibiotic', color: 'bg-orange-50 border-orange-200 text-orange-700' },
    { id: 'ciprofloxacin', name: 'Ciprofloxacin', dosage: '500mg', activeIngredient: 'Ciprofloxacin', drugClass: 'Fluorchinolon', indication: 'Harnwegsinfekte', category: 'antibiotic', color: 'bg-orange-50 border-orange-200 text-orange-700' },
    
    // Insulin
    { id: 'insulin-rapid', name: 'Insulin rapid', dosage: '4 IE', activeIngredient: 'Insulin aspart', drugClass: 'Kurz-Insulin', indication: 'Hyperglykämie', category: 'insulin', color: 'bg-pink-50 border-pink-200 text-pink-700' },
    { id: 'insulin-long', name: 'Insulin long', dosage: '12 IE', activeIngredient: 'Insulin glargin', drugClass: 'Lang-Insulin', indication: 'Diabetes-Einstellung', category: 'insulin', color: 'bg-pink-50 border-pink-200 text-pink-700' },
    
    // Antikoagulantien
    { id: 'heparin', name: 'Heparin', dosage: '5000 IE', activeIngredient: 'Heparin', drugClass: 'Antikoagulans', indication: 'Thromboseprophylaxe', category: 'anticoagulant', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
    { id: 'marcumar', name: 'Marcumar', dosage: '3mg', activeIngredient: 'Phenprocoumon', drugClass: 'Cumarin', indication: 'Antikoagulation', category: 'anticoagulant', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
    
    // Bronchodilatatoren
    { id: 'salbutamol', name: 'Salbutamol', dosage: '2 Hübe', activeIngredient: 'Salbutamol', drugClass: 'Beta-2-Agonist', indication: 'Asthma, COPD', category: 'bronchodilator', color: 'bg-cyan-50 border-cyan-200 text-cyan-700' },
    { id: 'ipratropium', name: 'Ipratropium', dosage: '2 Hübe', activeIngredient: 'Ipratropium', drugClass: 'Anticholinergikum', indication: 'COPD, Bronchospasmus', category: 'bronchodilator', color: 'bg-cyan-50 border-cyan-200 text-cyan-700' },
    
    // Steroide
    { id: 'prednisolon', name: 'Prednisolon', dosage: '20mg', activeIngredient: 'Prednisolon', drugClass: 'Kortikosteroid', indication: 'Entzündung, Asthma', category: 'steroid', color: 'bg-teal-50 border-teal-200 text-teal-700' },
    { id: 'dexamethason', name: 'Dexamethason', dosage: '4mg', activeIngredient: 'Dexamethason', drugClass: 'Kortikosteroid', indication: 'Schwere Entzündung', category: 'steroid', color: 'bg-teal-50 border-teal-200 text-teal-700' },
    
    // Antiarrhythmika
    { id: 'amiodaron', name: 'Amiodaron', dosage: '200mg', activeIngredient: 'Amiodaron', drugClass: 'Antiarrhythmikum', indication: 'Vorhofflimmern', category: 'antiarrhythmic', color: 'bg-violet-50 border-violet-200 text-violet-700' },
    { id: 'verapamil', name: 'Verapamil', dosage: '5mg', activeIngredient: 'Verapamil', drugClass: 'Kalziumantagonist', indication: 'Supravent. Tachykardie', category: 'antiarrhythmic', color: 'bg-violet-50 border-violet-200 text-violet-700' },
    
    // Antiemetika
    { id: 'ondansetron', name: 'Ondansetron', dosage: '4mg', activeIngredient: 'Ondansetron', drugClass: '5-HT3-Antagonist', indication: 'Übelkeit, Erbrechen', category: 'antiemetic', color: 'bg-rose-50 border-rose-200 text-rose-700' },
    { id: 'metoclopramid', name: 'Metoclopramid', dosage: '10mg', activeIngredient: 'Metoclopramid', drugClass: 'Dopamin-Antagonist', indication: 'Übelkeit, Gastroparese', category: 'antiemetic', color: 'bg-rose-50 border-rose-200 text-rose-700' }
  ]

  const scenarios: Scenario[] = [
    // Kardiologie
    {
      id: '1',
      title: 'Hypertensive Krise',
      vitals: { bloodPressure: '190/120', heartRate: 95, temperature: 36.8, oxygenSaturation: 97 },
      symptoms: ['Kopfschmerzen', 'Schwindel', 'Übelkeit'],
      correctMedication: 'ramipril',
      needsDoctor: true,
      explanation: 'Bei Blutdruckwerten über 180/110 mmHg mit Symptomen liegt ein hypertensiver Notfall vor. ACE-Hemmer wie Ramipril sind Mittel der ersten Wahl.',
      level: 2
    },
    {
      id: '2',
      title: 'Symptomatische Bradykardie',
      vitals: { bloodPressure: '100/60', heartRate: 45, temperature: 36.2, oxygenSaturation: 94 },
      symptoms: ['Schwäche', 'Schwindel', 'Wird schwarz vor Augen'],
      correctMedication: 'atropin',
      needsDoctor: true,
      explanation: 'Bei symptomatischer Bradykardie unter 50 bpm ist Atropin das Mittel der Wahl. Sofortige Arztbenachrichtigung erforderlich.',
      level: 3
    },
    {
      id: '3',
      title: 'Supraventrikuläre Tachykardie',
      vitals: { bloodPressure: '140/90', heartRate: 180, temperature: 36.9, oxygenSaturation: 96 },
      symptoms: ['Unregelmäßiger Herzschlag', 'Schwindel', 'Schwächegefühl'],
      correctMedication: 'verapamil',
      needsDoctor: true,
      explanation: 'Bei supraventrikulärer Tachykardie ist Verapamil das Mittel der Wahl zur Frequenzkontrolle.',
      level: 3
    },
    
    // Diabetes/Endokrinologie
    {
      id: '4',
      title: 'Hyperglykämische Entgleisung',
      vitals: { bloodPressure: '140/85', heartRate: 110, temperature: 37.8, bloodSugar: 380 },
      symptoms: ['Starker Durst', 'Häufiges Wasserlassen', 'Müdigkeit'],
      correctMedication: 'insulin-rapid',
      needsDoctor: true,
      explanation: 'Bei Blutzucker über 300 mg/dl mit Symptomen ist schnell wirkendes Insulin erforderlich. Arztbenachrichtigung bei diabetischer Entgleisung.',
      level: 2
    },
    {
      id: '5',
      title: 'Hypoglykämie',
      vitals: { bloodPressure: '120/80', heartRate: 95, temperature: 36.4, bloodSugar: 45 },
      symptoms: ['Zittern', 'Schwitzen', 'Verwirrtheit'],
      correctMedication: 'insulin-rapid',
      needsDoctor: false,
      explanation: 'Bei Hypoglykämie unter 70 mg/dl zunächst orale Glucose, bei Bewusstlosigkeit Glucagon oder IV-Glucose.',
      level: 1
    },
    
    // Infektiologie
    {
      id: '6',
      title: 'Harnwegsinfekt',
      vitals: { bloodPressure: '130/80', heartRate: 88, temperature: 38.5, painLevel: 6 },
      symptoms: ['Brennen beim Wasserlassen', 'Häufiger Harndrang', 'Unterleibsschmerzen'],
      correctMedication: 'ciprofloxacin',
      needsDoctor: false,
      explanation: 'Bei unkompliziertem Harnwegsinfekt ist Ciprofloxacin ein geeignetes Antibiotikum der ersten Wahl.',
      level: 1
    },
    {
      id: '7',
      title: 'Bakterielle Pneumonie',
      vitals: { bloodPressure: '120/75', heartRate: 105, temperature: 39.8, oxygenSaturation: 89, respiratoryRate: 28 },
      symptoms: ['Husten mit gelbem Auswurf', 'Atemnot', 'Brustschmerzen'],
      correctMedication: 'amoxicillin',
      needsDoctor: true,
      explanation: 'Bei bakterieller Pneumonie mit Sauerstoffmangel ist Amoxicillin indiziert. Arztbenachrichtigung bei SpO2 unter 95%.',
      level: 2
    },
    
    // Pneumologie
    {
      id: '8',
      title: 'Asthmaanfall',
      vitals: { bloodPressure: '135/85', heartRate: 125, temperature: 36.7, oxygenSaturation: 91, respiratoryRate: 32 },
      symptoms: ['Pfeifende Atmung', 'Atemnot', 'Engegefühl in der Brust'],
      correctMedication: 'salbutamol',
      needsDoctor: true,
      explanation: 'Bei akutem Asthmaanfall ist Salbutamol als Bronchodilatator das Mittel der Wahl. Bei SpO2 unter 95% Arzt rufen.',
      level: 2
    },
    {
      id: '9',
      title: 'COPD-Exazerbation',
      vitals: { bloodPressure: '145/90', heartRate: 115, temperature: 37.2, oxygenSaturation: 88, respiratoryRate: 30 },
      symptoms: ['Verschlechterte Atemnot', 'Vermehrter Husten', 'Gelb-grüner Auswurf'],
      correctMedication: 'prednisolon',
      needsDoctor: true,
      explanation: 'Bei COPD-Exazerbation sind Kortikosteroide wie Prednisolon indiziert. Kritische Hypoxämie erfordert Arztbenachrichtigung.',
      level: 3
    },
    
    // Schmerzmanagement
    {
      id: '10',
      title: 'Akute Rückenschmerzen',
      vitals: { bloodPressure: '130/85', heartRate: 72, temperature: 36.7, painLevel: 8 },
      symptoms: ['Starke Rückenschmerzen', 'Bewegungseinschränkung', 'Verspannungen'],
      correctMedication: 'ibuprofen',
      needsDoctor: false,
      explanation: 'Bei akuten Rückenschmerzen ist Ibuprofen aufgrund der entzündungshemmenden Wirkung geeignet.',
      level: 1
    },
    {
      id: '11',
      title: 'Postoperative Schmerzen',
      vitals: { bloodPressure: '140/85', heartRate: 95, temperature: 37.1, painLevel: 9 },
      symptoms: ['Starke Wundschmerzen', 'Kann nicht schlafen', 'Unruhe'],
      correctMedication: 'metamizol',
      needsDoctor: false,
      explanation: 'Bei starken postoperativen Schmerzen ist Metamizol ein starkes Analgetikum ohne Suchtpotential.',
      level: 2
    },
    
    // Gastroenterologie
    {
      id: '12',
      title: 'Schwere Übelkeit',
      vitals: { bloodPressure: '115/70', heartRate: 85, temperature: 36.9 },
      symptoms: ['Starke Übelkeit', 'Wiederholtes Erbrechen', 'Kann nichts bei sich behalten'],
      correctMedication: 'ondansetron',
      needsDoctor: false,
      explanation: 'Bei schwerer Übelkeit und Erbrechen ist Ondansetron ein hochwirksames Antiemetikum.',
      level: 1
    },
    
    // Notfallmedizin
    {
      id: '13',
      title: 'Anaphylaktischer Schock',
      vitals: { bloodPressure: '70/40', heartRate: 140, temperature: 36.2, oxygenSaturation: 85 },
      symptoms: ['Atemnot', 'Hautausschlag', 'Kreislaufkollaps'],
      correctMedication: 'adrenalin',
      needsDoctor: true,
      explanation: 'Bei anaphylaktischem Schock ist Adrenalin lebensrettend. Sofortiger Notfall!',
      level: 3
    },
    
    // Geriatrie
    {
      id: '14',
      title: 'Herzinsuffizienz mit Ödemen',
      vitals: { bloodPressure: '150/90', heartRate: 78, temperature: 36.5, oxygenSaturation: 93 },
      symptoms: ['Geschwollene Beine', 'Kurzatmigkeit', 'Gewichtszunahme'],
      correctMedication: 'furosemid',
      needsDoctor: false,
      explanation: 'Bei Herzinsuffizienz mit Ödemen sind Diuretika wie Furosemid indiziert.',
      level: 1
    },
    
    // Verschiedene Temperaturen/Fieber
    {
      id: '15',
      title: 'Fieber mit Kopfschmerzen',
      vitals: { bloodPressure: '120/80', heartRate: 88, temperature: 39.2 },
      symptoms: ['Starke Kopfschmerzen', 'Müdigkeit', 'Gliederschmerzen'],
      correctMedication: 'paracetamol',
      needsDoctor: false,
      explanation: 'Bei Fieber und Kopfschmerzen ist Paracetamol das Mittel der ersten Wahl.',
      level: 1
    }
  ]

  // Funktion zum Auswählen von 8 zufälligen Medikamenten pro Szenario
  const selectRandomMedications = (correctMedId: string): Medication[] => {
    // Stelle sicher, dass das korrekte Medikament dabei ist
    const correctMed = allMedications.find(m => m.id === correctMedId)
    if (!correctMed) return []
    
    // Wähle 7 andere zufällige Medikamente
    const otherMeds = allMedications
      .filter(m => m.id !== correctMedId)
      .sort(() => Math.random() - 0.5)
      .slice(0, 7)
    
    // Mische alle 8 Medikamente
    return [correctMed, ...otherMeds].sort(() => Math.random() - 0.5)
  }

  const startGame = async () => {
    setGameStarted(true)
    setScore(0)
    setCompletedScenarios(0)
    setIsInitialLoading(true)
    await nextScenario()
    setIsInitialLoading(false)
  }

  const generateAIScenario = async (): Promise<Scenario | null> => {
    try {
      setIsGeneratingScenario(true)
      console.log('🤖 Starte KI-Szenario-Generierung...')
      
      // Prüfe ob Medikamenten-API-Key verfügbar ist
      const medicationApiKey = import.meta.env.VITE_OPENAI_MEDICATION_API_KEY
      const fallbackApiKey = import.meta.env.VITE_OPENAI_API_KEY
      
      if (!medicationApiKey && !fallbackApiKey) {
        console.warn('⚠️  Kein OpenAI API-Key gefunden. Fallback auf vordefinierte Szenarien.')
        return null
      }
      
      console.log('🔑 API-Key Status:', {
        medicationKey: medicationApiKey ? '✅ Verfügbar' : '❌ Nicht verfügbar',
        fallbackKey: fallbackApiKey ? '✅ Verfügbar' : '❌ Nicht verfügbar'
      })
      
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
      
      console.log(`🎯 Generiere: ${randomArea} (Level ${levelBased})`)
      
      const response = await generateMedicationScenario(AI_PROMPTS.medikamentenszenario, prompt)
      console.log('✅ KI-Response erhalten:', response.substring(0, 100) + '...')
      
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
      
      console.log('🎉 KI-Szenario erfolgreich erstellt:', newScenario.title)
      return newScenario
    } catch (error) {
      console.error('❌ Fehler beim Generieren des KI-Szenarios:', error)
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
      setAvailableMedications(selectRandomMedications(aiScenario.correctMedication))
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
    setAvailableMedications(selectRandomMedications(randomScenario.correctMedication))
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

  // Auto-start the game immediately when component mounts
  useEffect(() => {
    startGame()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Show loading animation during initial load or when generating any scenario
  if (isInitialLoading || isGeneratingScenario) {
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
            Medikamenten-Training
          </motion.h2>
          <motion.p 
            className="text-gray-600 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {isInitialLoading ? 'Lade Trainingsumgebung...' : 'Erstelle neues Szenario...'}
          </motion.p>
        </motion.div>
      </div>
    )
  }

  if (!gameStarted) {
    return null
  }

  if (!currentScenario) return null

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
            Medikamenten-Training
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-600 font-light">
            <span>Szenario {completedScenarios + 1}</span>
            <span>•</span>
            <span>Level {Math.floor(completedScenarios / 3) + 1}</span>
            <span>•</span>
            <span>{score} Punkte</span>
            {currentScenario?.id.startsWith('ai-') && !isGeneratingScenario && (
              <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full border border-gray-100">
                🤖 KI-generiert
              </span>
            )}
          </div>
          {!isGeneratingScenario && currentScenario && (
            <p className="text-xl text-gray-700 font-light mt-4">
              {currentScenario.title.replace(/\b(Hypertensive|Symptomatische|Supraventrikuläre|Hyperglykämische|Bakterielle|Anaphylaktischer|Postoperative)\b/g, '').trim()}
            </p>
          )}
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Patient Monitor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border border-gray-200 hover:border-gray-300 transition-colors">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="flex items-center text-gray-900 font-medium">
                  <Activity className="h-5 w-5 mr-3 text-gray-600" />
                  Patientenmonitor
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {/* Vitaldaten */}
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl font-mono mb-8">
                  <div className="grid grid-cols-3 gap-6 text-center mb-6">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <Heart className="h-5 w-5 mx-auto mb-2 text-gray-600" />
                      <div className="text-xs text-gray-500 font-normal mb-1">Herzfrequenz</div>
                      <div className={`text-lg font-semibold ${getVitalColor('heartRate', currentScenario.vitals.heartRate)}`}>
                        {currentScenario.vitals.heartRate} bpm
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <Activity className="h-5 w-5 mx-auto mb-2 text-gray-600" />
                      <div className="text-xs text-gray-500 font-normal mb-1">Blutdruck</div>
                      <div className={`text-lg font-semibold ${getVitalColor('bloodPressure', currentScenario.vitals.bloodPressure)}`}>
                        {currentScenario.vitals.bloodPressure}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <Thermometer className="h-5 w-5 mx-auto mb-2 text-gray-600" />
                      <div className="text-xs text-gray-500 font-normal mb-1">Temperatur</div>
                      <div className={`text-lg font-semibold ${getVitalColor('temperature', currentScenario.vitals.temperature)}`}>
                        {currentScenario.vitals.temperature}°C
                      </div>
                    </div>
                  </div>
                  
                  {/* Zusätzliche Vitalwerte */}
                  {(currentScenario.vitals.oxygenSaturation || currentScenario.vitals.bloodSugar || currentScenario.vitals.respiratoryRate || currentScenario.vitals.painLevel || currentScenario.vitals.consciousness) && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm border-t border-gray-200 pt-4">
                      {currentScenario.vitals.oxygenSaturation && (
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-xs text-gray-500 font-normal mb-1">SpO2</div>
                          <div className={`font-semibold ${getVitalColor('oxygenSaturation', currentScenario.vitals.oxygenSaturation)}`}>
                            {currentScenario.vitals.oxygenSaturation}%
                          </div>
                        </div>
                      )}
                      {currentScenario.vitals.bloodSugar && (
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-xs text-gray-500 font-normal mb-1">Blutzucker</div>
                          <div className={`font-semibold ${getVitalColor('bloodSugar', currentScenario.vitals.bloodSugar)}`}>
                            {currentScenario.vitals.bloodSugar} mg/dl
                          </div>
                        </div>
                      )}
                      {currentScenario.vitals.respiratoryRate && (
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-xs text-gray-500 font-normal mb-1">Atemfreq.</div>
                          <div className={`font-semibold ${getVitalColor('respiratoryRate', currentScenario.vitals.respiratoryRate)}`}>
                            {currentScenario.vitals.respiratoryRate}/min
                          </div>
                        </div>
                      )}
                      {currentScenario.vitals.painLevel !== undefined && (
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-xs text-gray-500 font-normal mb-1">Schmerz</div>
                          <div className={`font-semibold ${getVitalColor('painLevel', currentScenario.vitals.painLevel)}`}>
                            {currentScenario.vitals.painLevel}/10
                          </div>
                        </div>
                      )}
                      {currentScenario.vitals.consciousness && (
                        <div className="bg-white rounded-lg p-3 col-span-2">
                          <div className="text-xs text-gray-500 font-normal mb-1">Bewusstsein</div>
                          <div className="font-semibold text-gray-700">
                            {currentScenario.vitals.consciousness}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Symptome */}
                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Patient berichtet
                  </h4>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl">
                    <div className="space-y-3">
                      {currentScenario.symptoms.map((symptom, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 font-light italic">"{symptom}"</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Medication Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Drop Zone */}
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-6">
                Medikament auswählen
              </h3>
              <div
                ref={dropZoneRef}
                className={`border-2 border-dashed p-8 rounded-xl text-center transition-all min-h-[120px] flex items-center justify-center ${
                  selectedMedication
                    ? 'border-gray-400 bg-gray-50'
                    : 'border-gray-300 bg-gray-50/50 hover:border-gray-400 hover:bg-gray-50'
                }`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {selectedMedication ? (
                  <div className="text-center">
                    <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-sm">
                      <div className="font-medium text-gray-900">
                        {availableMedications.find(m => m.id === selectedMedication)?.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {availableMedications.find(m => m.id === selectedMedication)?.dosage}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-500 font-light">
                    Medikament hier hinziehen
                  </div>
                )}
              </div>
            </div>

            {/* Available Medications */}
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-6">
                Verfügbare Medikamente
              </h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {availableMedications.map((med) => (
                  <motion.div
                    key={med.id}
                    className="p-4 rounded-xl border border-gray-200 cursor-move transition-all hover:shadow-md hover:-translate-y-0.5 bg-white"
                    draggable
                    onDragStart={() => handleDragStart(med.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: Math.random() * 0.3 }}
                  >
                    <div className="font-medium text-gray-900 text-sm">{med.name}</div>
                    <div className="text-xs text-gray-600 font-light">{med.dosage}</div>
                    <div className="text-xs text-gray-500 mt-2 space-y-1">
                      <div><span className="font-medium">Wirkstoff:</span> {med.activeIngredient}</div>
                      <div><span className="font-medium">Gruppe:</span> {med.drugClass}</div>
                      <div><span className="font-medium">Indikation:</span> {med.indication}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Doctor Decision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-light text-gray-900 mb-6">
                  Arzt informieren?
                </h3>
                <div className="flex space-x-4">
                  <Button
                    variant={doctorCalled === true ? "default" : "outline"}
                    onClick={() => setDoctorCalled(true)}
                    className={`flex-1 transition-all ${
                      doctorCalled === true 
                        ? "bg-gray-900 hover:bg-gray-800 text-white"
                        : "border-gray-300 hover:border-gray-400 text-gray-700"
                    }`}
                  >
                    Ja, Arzt rufen
                  </Button>
                  <Button
                    variant={doctorCalled === false ? "default" : "outline"}
                    onClick={() => setDoctorCalled(false)}
                    className={`flex-1 transition-all ${
                      doctorCalled === false 
                        ? "bg-gray-900 hover:bg-gray-800 text-white"
                        : "border-gray-300 hover:border-gray-400 text-gray-700"
                    }`}
                  >
                    Nein, nicht nötig
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Button
              onClick={handleSubmit}
              disabled={!selectedMedication || doctorCalled === null}
              className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-light disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Entscheidung bestätigen
            </Button>
          </motion.div>
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
                  <div className="space-y-4">
                    {/* Medikamenten-Bewertung mit Details */}
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-semibold text-gray-700">Medikament:</span>
                        {selectedMedication === currentScenario.correctMedication ? (
                          <CheckCircle className="h-4 w-4 text-green-600 ml-2" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600 ml-2" />
                        )}
                      </div>
                      
                      {/* Deine Wahl */}
                      {(() => {
                        const selectedMed = allMedications.find(m => m.id === selectedMedication)
                        return selectedMed ? (
                          <div className="bg-gray-50 rounded-lg p-3 mb-2">
                            <div className="text-sm font-medium text-gray-800">
                              👉 Deine Wahl: {selectedMed.name} {selectedMed.dosage}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              <span className="font-medium">Wirkstoff:</span> {selectedMed.activeIngredient} • 
                              <span className="font-medium"> Gruppe:</span> {selectedMed.drugClass}
                            </div>
                            <div className="text-xs text-gray-600">
                              <span className="font-medium">Indikation:</span> {selectedMed.indication}
                            </div>
                          </div>
                        ) : null
                      })()}
                      
                      {/* Richtige Antwort wenn falsch */}
                      {selectedMedication !== currentScenario.correctMedication && (() => {
                        const correctMed = allMedications.find(m => m.id === currentScenario.correctMedication)
                        return correctMed ? (
                          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                            <div className="text-sm font-medium text-green-800">
                              ✅ Richtig wäre: {correctMed.name} {correctMed.dosage}
                            </div>
                            <div className="text-xs text-green-700 mt-1">
                              <span className="font-medium">Wirkstoff:</span> {correctMed.activeIngredient} • 
                              <span className="font-medium"> Gruppe:</span> {correctMed.drugClass}
                            </div>
                            <div className="text-xs text-green-700">
                              <span className="font-medium">Indikation:</span> {correctMed.indication}
                            </div>
                          </div>
                        ) : null
                      })()}
                    </div>
                    
                    {/* Arzt-Entscheidung */}
                    <div>
                      <div className="flex items-center">
                        <span className="text-sm font-semibold text-gray-700">Arzt-Ruf:</span>
                        {doctorCalled === currentScenario.needsDoctor ? (
                          <CheckCircle className="h-4 w-4 text-green-600 ml-2" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-600 ml-2" />
                        )}
                        <span className="text-sm ml-2">
                          {doctorCalled === currentScenario.needsDoctor ? 'Richtig' : 'Falsch'}
                        </span>
                      </div>
                    </div>
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