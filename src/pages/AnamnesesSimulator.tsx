import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, User, Bot, Send, FileText, Clock, Heart, Activity, Brain, AlertTriangle, CheckCircle, Users, Stethoscope } from 'lucide-react'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { generateAIResponse } from '../lib/openai'

interface Message {
  id: string
  type: 'user' | 'patient' | 'system'
  content: string
  timestamp: Date
  patientMood?: 'anxious' | 'cooperative' | 'confused' | 'defensive' | 'uncooperative'
}

interface PatientProfile {
  name: string
  age: number
  gender: string
  personality: 'anxious' | 'uncooperative' | 'confused' | 'cooperative'
  background: string
  currentConcerns: string[]
  medicalHistory: string[]
  admissionReason: string
  stressLevel: number
}

interface Assessment {
  name: string
  status: 'not_started' | 'in_progress' | 'completed'
  score?: number
  maxScore: number
  icon: any
}

const patientProfiles: PatientProfile[] = [
  {
    name: "Frau Schneider",
    age: 74,
    gender: "weiblich", 
    personality: "anxious",
    background: "Witwe, lebt allein, war noch nie im Krankenhaus",
    currentConcerns: ["Angst vor Operationen", "Sorge um ihre Katze", "Finanzielle Belastung"],
    medicalHistory: ["Bluthochdruck", "Leichte Arthrose", "Sturz vor 2 Tagen"],
    admissionReason: "Sturz zu Hause mit Verdacht auf Hüftfraktur",
    stressLevel: 70
  },
  {
    name: "Herr Wagner",
    age: 58,
    gender: "männlich",
    personality: "uncooperative", 
    background: "Selbstständiger Handwerker, hasst Abhängigkeit",
    currentConcerns: ["Arbeitsausfall", "Autonomieverlust", "Vertrauen in Ärzte"],
    medicalHistory: ["Herzinfarkt vor 1 Monat", "Diabetes Typ 2", "Raucher"],
    admissionReason: "Kontroll-Herzkatheter nach Herzinfarkt",
    stressLevel: 50
  },
  {
    name: "Frau Müller", 
    age: 82,
    gender: "weiblich",
    personality: "confused",
    background: "Beginnende Demenz, lebt im Pflegeheim",
    currentConcerns: ["Orientierungslosigkeit", "Suche nach Handtasche", "Will nach Hause"],
    medicalHistory: ["Alzheimer im Frühstadium", "Sturz nachts", "Blutung am Kopf"],
    admissionReason: "Sturz mit Kopfplatzwunde, Beobachtung",
    stressLevel: 85
  }
]

const AnamnesesSimulator = () => {
  const { user } = useAuthStore()
  const [selectedPatient, setSelectedPatient] = useState<PatientProfile | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [conversationScore, setConversationScore] = useState(0)
  const [assessments, setAssessments] = useState<Assessment[]>([
    { name: 'Barthel-Index', status: 'not_started', maxScore: 100, icon: Activity },
    { name: 'Braden-Skala', status: 'not_started', maxScore: 23, icon: Heart },
    { name: 'Sturzrisiko', status: 'not_started', maxScore: 15, icon: AlertTriangle },
    { name: 'MMST', status: 'not_started', maxScore: 30, icon: Brain },
    { name: 'Schmerzskala', status: 'not_started', maxScore: 10, icon: Activity }
  ])
  const [anamneseData, setAnamneseData] = useState({
    personalData: { name: '', age: '', living: '', family: '' },
    admission: { reason: '', timeframe: '', circumstances: '', injuries: '' },
    medications: { current: '', allergies: '', intolerances: '' },
    history: { previous: '', surgeries: '', hospitalizations: '' }
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const startConversation = (patient: PatientProfile) => {
    setSelectedPatient(patient)
    setMessages([
      {
        id: '1',
        type: 'system',
        content: `Aufnahmegespräch mit ${patient.name} (${patient.age}J) - ${patient.admissionReason}`,
        timestamp: new Date()
      },
      {
        id: '2', 
        type: 'patient',
        content: getInitialPatientMessage(patient),
        timestamp: new Date(),
        patientMood: patient.personality
      }
    ])
    
    // Setze Basisdaten
    setAnamneseData(prev => ({
      ...prev,
      personalData: { ...prev.personalData, name: patient.name, age: patient.age.toString() },
      admission: { ...prev.admission, reason: patient.admissionReason }
    }))
  }

  const getInitialPatientMessage = (patient: PatientProfile): string => {
    switch (patient.personality) {
      case 'anxious':
        return "Guten Tag... ich bin etwas nervös. Ich war noch nie im Krankenhaus. Der Arzt meinte, ich soll hier bleiben wegen dem Sturz gestern..."
      case 'uncooperative':
        return "Können wir das abkürzen? Ich hab wichtige Termine und will so schnell wie möglich wieder raus hier."
      case 'confused':
        return "Sind Sie meine Tochter? Wo bin ich denn hier? Ich möchte nach Hause, die Kinder warten aufs Abendessen..."
      default:
        return "Guten Tag. Ich bin bereit für das Gespräch. Was möchten Sie von mir wissen?"
    }
  }

  const generatePatientResponse = async (userMessage: string) => {
    if (!selectedPatient) return

    const patientPrompt = `Du bist ${selectedPatient.name}, eine ${selectedPatient.age}-jährige ${selectedPatient.gender}e Person mit folgender Persönlichkeit: ${selectedPatient.personality}.

Hintergrund: ${selectedPatient.background}
Aufnahmegrund: ${selectedPatient.admissionReason}
Sorgen: ${selectedPatient.currentConcerns.join(', ')}
Vorerkrankungen: ${selectedPatient.medicalHistory.join(', ')}

Persönlichkeits-Verhalten:
- anxious: Ängstlich, redselig, braucht Beruhigung, schweift ab
- uncooperative: Mürrisch, kurz angebunden, misstrauisch, will schnell weg
- confused: Zeitlich/örtlich desorientiert, verwechselt Personen, lebt in Vergangenheit

Antworte wie diese Person auf die Frage der Pflegekraft. Bleibe in der Rolle. Antworte authentisch und menschlich, nicht wie ein Lehrbuch. Maximal 2-3 Sätze.`

    try {
      const response = await generateAIResponse(patientPrompt, userMessage)
      return response
    } catch (error) {
      return "Entschuldigung, ich verstehe nicht ganz..."
    }
  }

  const sendMessage = async () => {
    if (!currentMessage.trim() || !selectedPatient || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user', 
      content: currentMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentMessage('')
    setIsLoading(true)

    // Bewerte Nachricht
    updateConversationScore(currentMessage)

    try {
      const patientResponse = await generatePatientResponse(currentMessage)
      
      const patientMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'patient',
        content: patientResponse,
        timestamp: new Date(),
        patientMood: selectedPatient.personality
      }

      setMessages(prev => [...prev, patientMessage])
    } catch (error) {
      console.error('Error generating patient response:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateConversationScore = (message: string) => {
    let scoreIncrease = 0
    
    // Bewerte verschiedene Aspekte
    if (message.toLowerCase().includes('name') || message.toLowerCase().includes('heiße')) scoreIncrease += 5
    if (message.toLowerCase().includes('schmerz')) scoreIncrease += 5
    if (message.toLowerCase().includes('wie geht es') || message.toLowerCase().includes('wie fühlen')) scoreIncrease += 5
    if (message.toLowerCase().includes('sorge') || message.toLowerCase().includes('angst')) scoreIncrease += 10
    if (message.toLowerCase().includes('medikament')) scoreIncrease += 8
    if (message.toLowerCase().includes('vorerkrankung')) scoreIncrease += 8

    setConversationScore(prev => Math.min(prev + scoreIncrease, 100))
  }

  const quickResponses = [
    "Herzlich willkommen! Ich bin Ihre Pflegekraft und möchte Sie gerne aufnehmen.",
    "Keine Sorge, wir kümmern uns gut um Sie. Wie fühlen Sie sich denn?",
    "Können Sie mir erzählen, was zu Ihrem Sturz geführt hat?",
    "Haben Sie aktuell irgendwo Schmerzen?",
    "Welche Medikamente nehmen Sie normalerweise ein?",
    "Wer ist Ihre Kontaktperson für Notfälle?"
  ]

  const PatientCard = ({ patient }: { patient: PatientProfile }) => (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => startConversation(patient)}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-3 h-3 rounded-full ${
            patient.personality === 'anxious' ? 'bg-yellow-500' :
            patient.personality === 'uncooperative' ? 'bg-red-500' :
            patient.personality === 'confused' ? 'bg-purple-500' : 'bg-green-500'
          }`} />
          <h3 className="font-semibold">{patient.name} ({patient.age}J)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-2">{patient.admissionReason}</p>
        <p className="text-xs text-gray-500">{patient.background}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs px-2 py-1 bg-gray-100 rounded">
            {patient.personality === 'anxious' ? '😰 Ängstlich' :
             patient.personality === 'uncooperative' ? '😤 Unkooperativ' :
             patient.personality === 'confused' ? '😵 Verwirrt' : '😊 Kooperativ'}
          </span>
        </div>
      </CardContent>
    </Card>
  )

  const getMoodColor = (mood?: string) => {
    switch (mood) {
      case 'anxious': return 'text-yellow-600'
      case 'defensive': return 'text-red-600' 
      case 'uncooperative': return 'text-red-600'
      case 'confused': return 'text-purple-600'
      default: return 'text-green-600'
    }
  }

  const getMoodEmoji = (mood?: string) => {
    switch (mood) {
      case 'anxious': return '😰'
      case 'defensive': return '😤'
      case 'uncooperative': return '😤'
      case 'confused': return '😵'
      default: return '😊'
    }
  }

  if (!selectedPatient) {
    return (
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Stethoscope className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold">🗣️ Aufnahmegespräch-Simulator</h1>
            </div>
            <p className="text-lg text-gray-600 mb-2">Interaktive Anamnese-Erhebung mit KI-Patienten</p>
            <p className="text-sm text-gray-500">Trainiere realistische Aufnahmegespräche und Assessment-Durchführung</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {patientProfiles.map((patient, index) => (
              <motion.div
                key={patient.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PatientCard patient={patient} />
              </motion.div>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Lernziele
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">🎯 Gesprächsführung</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Strukturierte Anamnese-Erhebung</li>
                    <li>• Empathische Kommunikation</li>
                    <li>• Umgang mit verschiedenen Patientenpersönlichkeiten</li>
                    <li>• Zeitmanagement im Gespräch</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📋 Assessment</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Barthel-Index durchführen</li>
                    <li>• Sturzrisiko bewerten</li>
                    <li>• Braden-Skala anwenden</li>
                    <li>• Kognitive Einschätzung (MMST)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  <div>
                    <h2 className="font-semibold">🏥 Aufnahmegespräch - Station 2A</h2>
                    <p className="text-sm text-gray-500">
                      {selectedPatient.name} ({selectedPatient.age}J) - {selectedPatient.admissionReason}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Clock className="w-4 h-4 inline mr-1" />
                  <span className="text-sm">14:30 Uhr</span>
                </div>
              </div>
              
              {/* Patient Status */}
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <span className="text-lg">{getMoodEmoji(selectedPatient.personality)}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">Stress-Level:</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${selectedPatient.stressLevel}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm text-gray-600">{selectedPatient.stressLevel}%</span>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : message.type === 'system'
                        ? 'bg-gray-100 text-gray-700 text-center'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {message.type === 'patient' && (
                        <div className="flex items-center gap-2 mb-1">
                          <Bot className="w-4 h-4" />
                          <span className="text-xs font-medium">{selectedPatient.name}</span>
                          <span className={`text-xs ${getMoodColor(message.patientMood)}`}>
                            {getMoodEmoji(message.patientMood)}
                          </span>
                        </div>
                      )}
                      {message.type === 'user' && (
                        <div className="flex items-center gap-2 mb-1 justify-end">
                          <span className="text-xs opacity-75">Sie</span>
                          <User className="w-4 h-4" />
                        </div>
                      )}
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-4 py-2">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4" />
                      <span className="text-sm">tippt...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Input */}
            <div className="p-4 border-t">
              {/* Quick Responses */}
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-2">📋 Schnell-Optionen:</p>
                <div className="flex flex-wrap gap-2">
                  {quickResponses.slice(0, 3).map((response, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMessage(response)}
                      className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                    >
                      {response.slice(0, 30)}...
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="💬 Ihre Antwort eingeben..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  disabled={isLoading}
                />
                <Button onClick={sendMessage} disabled={isLoading || !currentMessage.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Assessment Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Assessments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {assessments.map((assessment) => (
                <div key={assessment.name} className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <assessment.icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{assessment.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded ${
                      assessment.status === 'completed' ? 'bg-green-100 text-green-700' :
                      assessment.status === 'in_progress' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {assessment.status === 'completed' ? '✅ Erhoben' :
                       assessment.status === 'in_progress' ? '⏳ Läuft' :
                       '⚪ Nicht erhoben'}
                    </span>
                    {assessment.status === 'not_started' && (
                      <Button size="sm" variant="outline">
                        Start
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium mb-1">⏱️ Fortschritt:</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(assessments.filter(a => a.status === 'completed').length / assessments.length) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {assessments.filter(a => a.status === 'completed').length}/{assessments.length} erhoben
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documentation */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Dokumentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">👤 Persönliche Daten:</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Name: {anamneseData.personalData.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Alter: {anamneseData.personalData.age} Jahre</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full border-2 border-gray-300" />
                      <span className="text-gray-500">Wohnsituation: Zu erfragen</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2">🏥 Aufnahme:</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Grund: {anamneseData.admission.reason.slice(0, 30)}...</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium mb-1">🎯 Vollständigkeit:</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${conversationScore}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{conversationScore}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AnamnesesSimulator