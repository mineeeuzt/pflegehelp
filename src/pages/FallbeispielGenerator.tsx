import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Wand2, Copy, ArrowRight, ArrowLeft, CheckCircle, Users, Building2, Stethoscope, FileText, Target, Heart, ClipboardList, Search, Play, Plus, Trash2 } from 'lucide-react'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { caseService, type CaseGenerationParams, type WorkflowInput } from '../services/caseService'

interface GeneratorParams extends CaseGenerationParams {
  alter: string
  setting: string
  zusatzinfo?: string
}

interface PflegeplanungData {
  pflegeprobleme: string
  nahziele: string
  fernziele: string
  massnahmen: string
  begruendung: string
  evaluation: string
}

interface PflegeInfo {
  id: string
  beschreibung: string
  abedl: string
  begruendung: string
}

const FallbeispielGenerator = () => {
  const { user } = useAuthStore()
  const [currentStep, setCurrentStep] = useState(1)
  const [params, setParams] = useState<GeneratorParams>({
    alter: '',
    bereich: '',
    setting: '',
    schwierigkeitsgrad: 'Leicht',
    anforderungen: '',
    zusatzinfo: ''
  })
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showWorkflowOptions, setShowWorkflowOptions] = useState(false)
  const [selectedWorkflow, setSelectedWorkflow] = useState<'pflegeplanung' | 'pflegeinfo' | null>(null)
  
  // Pflegeplanung workflow states
  const [pflegeplanungStep, setPflegeplanungStep] = useState(1)
  const [pflegeplanungData, setPflegeplanungData] = useState<PflegeplanungData>({
    pflegeprobleme: '',
    nahziele: '',
    fernziele: '',
    massnahmen: '',
    begruendung: '',
    evaluation: ''
  })
  
  // Pflegeinfo workflow states
  const [pflegeInfos, setPflegeInfos] = useState<PflegeInfo[]>([])
  const [currentPflegeInfo, setCurrentPflegeInfo] = useState<PflegeInfo>({
    id: Date.now().toString(),
    beschreibung: '',
    abedl: '',
    begruendung: ''
  })
  
  // Review states
  const [showReview, setShowReview] = useState(false)
  const [reviewResult, setReviewResult] = useState('')
  const [reviewLoading, setReviewLoading] = useState(false)

  const altersgruppen = [
    { value: 'neugeborene', label: 'Neugeborene (0-28 Tage)', icon: '👶' },
    { value: 'saeuglinge', label: 'Säuglinge (1-12 Monate)', icon: '🍼' },
    { value: 'kleinkinder', label: 'Kleinkinder (1-3 Jahre)', icon: '🧸' },
    { value: 'kinder', label: 'Kinder (4-11 Jahre)', icon: '🎈' },
    { value: 'jugendliche', label: 'Jugendliche (12-17 Jahre)', icon: '🎮' },
    { value: 'erwachsene', label: 'Erwachsene (18-64 Jahre)', icon: '👩‍💼' },
    { value: 'senioren', label: 'Senioren (65+ Jahre)', icon: '👴' }
  ]

  const krankheitsbereiche = [
    { value: 'kardiologie', label: 'Kardiologie', icon: '❤️', description: 'Herz-Kreislauf-Erkrankungen' },
    { value: 'pneumologie', label: 'Pneumologie', icon: '🫁', description: 'Atemwegserkrankungen' },
    { value: 'neurologie', label: 'Neurologie', icon: '🧠', description: 'Nervensystem-Erkrankungen' },
    { value: 'gastroenterologie', label: 'Gastroenterologie', icon: '🍎', description: 'Magen-Darm-Erkrankungen' },
    { value: 'endokrinologie', label: 'Endokrinologie', icon: '⚖️', description: 'Hormon- und Stoffwechselerkrankungen' },
    { value: 'orthopaedie', label: 'Orthopädie', icon: '🦴', description: 'Bewegungsapparat-Erkrankungen' },
    { value: 'dermatologie', label: 'Dermatologie', icon: '🤲', description: 'Hauterkrankungen' },
    { value: 'urologie', label: 'Urologie', icon: '💧', description: 'Harn- und Geschlechtsorgane' },
    { value: 'onkologie', label: 'Onkologie', icon: '🎗️', description: 'Krebserkrankungen' },
    { value: 'psychiatrie', label: 'Psychiatrie', icon: '🧘', description: 'Psychische Erkrankungen' },
    { value: 'geriatrie', label: 'Geriatrie', icon: '👴', description: 'Altersbedingte Erkrankungen' },
    { value: 'paediatrie', label: 'Pädiatrie', icon: '👶', description: 'Kindererkrankungen' },
    { value: 'notfallmedizin', label: 'Notfallmedizin', icon: '🚨', description: 'Akute Notfälle' },
    { value: 'palliativmedizin', label: 'Palliativmedizin', icon: '🕊️', description: 'Palliative Versorgung' },
    { value: 'rehabilitation', label: 'Rehabilitation', icon: '🏃', description: 'Wiederherstellende Pflege' }
  ]

  const settings = [
    { 
      value: 'ambulant', 
      label: 'Ambulante Pflege', 
      icon: '🏠', 
      description: 'Häusliche Pflege und ambulante Dienste' 
    },
    { 
      value: 'akutstation', 
      label: 'Akutstationäre Pflege', 
      icon: '🏥', 
      description: 'Krankenhaus und Akutversorgung' 
    },
    { 
      value: 'langzeitpflege', 
      label: 'Stationäre Langzeitpflege', 
      icon: '🏢', 
      description: 'Pflegeheim und Langzeiteinrichtungen' 
    }
  ]

  const schwierigkeitsgrade = [
    { 
      value: 'Leicht', 
      label: 'Leicht', 
      jahr: '1. Ausbildungsjahr',
      description: 'Grundlegende Pflegesituationen',
      color: 'bg-green-100 text-green-800'
    },
    { 
      value: 'Mittel', 
      label: 'Mittel', 
      jahr: '2. Ausbildungsjahr',
      description: 'Erweiterte Pflegekomplexität',
      color: 'bg-yellow-100 text-yellow-800'
    },
    { 
      value: 'Komplex', 
      label: 'Komplex', 
      jahr: '3. Ausbildungsjahr',
      description: 'Komplexe Pflegesituationen',
      color: 'bg-red-100 text-red-800'
    }
  ]

  const abedlBereiche = [
    { value: 'kommunizieren', title: 'Kommunizieren können', icon: '💬' },
    { value: 'bewegen', title: 'Sich bewegen können', icon: '🚶' },
    { value: 'vitale_funktionen', title: 'Vitale Funktionen aufrechterhalten können', icon: '❤️' },
    { value: 'pflegen', title: 'Sich pflegen können', icon: '🧴' },
    { value: 'essen_trinken', title: 'Essen und trinken können', icon: '🍽️' },
    { value: 'ausscheiden', title: 'Ausscheiden können', icon: '🚿' },
    { value: 'kleiden', title: 'Sich kleiden können', icon: '👕' },
    { value: 'ruhen_schlafen', title: 'Ruhen und schlafen können', icon: '😴' },
    { value: 'beschaeftigen', title: 'Sich beschäftigen können', icon: '🎨' },
    { value: 'geschlecht', title: 'Sich als Mann oder Frau fühlen und verhalten können', icon: '👫' },
    { value: 'umgebung', title: 'Für eine sichere und fördernde Umgebung sorgen können', icon: '🏠' },
    { value: 'sozial', title: 'Soziale Bereiche des Lebens sichern können', icon: '👥' },
    { value: 'existenziell', title: 'Mit existenziellen Erfahrungen des Lebens umgehen können', icon: '🙏' }
  ]

  const steps = [
    { number: 1, title: 'Alter', icon: Users, description: 'Altersgruppe auswählen' },
    { number: 2, title: 'Krankheitsbereich', icon: Stethoscope, description: 'Medizinischen Bereich festlegen' },
    { number: 3, title: 'Setting', icon: Building2, description: 'Pflegeumgebung bestimmen' },
    { number: 4, title: 'Schwierigkeit', icon: Target, description: 'Ausbildungsjahr wählen' },
    { number: 5, title: 'Zusatzinfo', icon: FileText, description: 'Optionale Details' },
    { number: 6, title: 'Generieren', icon: Wand2, description: 'Fallbeispiel erstellen' }
  ]

  const handleGenerate = async () => {
    if (!user) return

    setIsLoading(true)
    setError('')

    try {
      // Get display names for better context
      const alterLabel = altersgruppen.find(a => a.value === params.alter)?.label || params.alter
      const bereichLabel = krankheitsbereiche.find(b => b.value === params.bereich)?.label || params.bereich
      const settingLabel = settings.find(s => s.value === params.setting)?.label || params.setting
      
      const generationParams: CaseGenerationParams = {
        bereich: bereichLabel,
        schwierigkeitsgrad: params.schwierigkeitsgrad,
        anforderungen: `Alter: ${alterLabel}, Setting: ${settingLabel}${params.zusatzinfo ? `, Zusatzinfo: ${params.zusatzinfo}` : ''}`
      }
      
      console.log('Generating case with params:', generationParams)
      
      const response = await caseService.generateFallbeispiel(generationParams, user.id)
      setResult(response)
      setShowWorkflowOptions(true)
    } catch (error) {
      console.error('Generation error:', error)
      let errorMessage = 'Ein unbekannter Fehler ist aufgetreten'
      
      if (error instanceof Error) {
        errorMessage = error.message
      } else if (typeof error === 'string') {
        errorMessage = error
      }
      
      // Check for specific error types
      if (errorMessage.includes('API key')) {
        errorMessage = 'OpenAI API-Schlüssel fehlt oder ist ungültig. Bitte kontaktieren Sie den Support.'
      } else if (errorMessage.includes('quota') || errorMessage.includes('rate limit')) {
        errorMessage = 'API-Limit erreicht. Bitte versuchen Sie es später erneut.'
      } else if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
        errorMessage = 'Netzwerkfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.'
      }
      
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result)
    }
  }

  const handleWorkflowSelection = (workflowType: 'pflegeplanung' | 'pflegeinfo') => {
    setSelectedWorkflow(workflowType)
    setShowWorkflowOptions(false)
    if (workflowType === 'pflegeplanung') {
      setPflegeplanungStep(1)
    }
  }

  const handlePflegeplanungNext = () => {
    if (pflegeplanungStep < 6) {
      setPflegeplanungStep(pflegeplanungStep + 1)
    }
  }

  const handlePflegeplanungBack = () => {
    if (pflegeplanungStep > 1) {
      setPflegeplanungStep(pflegeplanungStep - 1)
    }
  }

  const handleAddPflegeInfo = () => {
    if (currentPflegeInfo.beschreibung && currentPflegeInfo.abedl && currentPflegeInfo.begruendung) {
      setPflegeInfos([...pflegeInfos, currentPflegeInfo])
      setCurrentPflegeInfo({
        id: Date.now().toString(),
        beschreibung: '',
        abedl: '',
        begruendung: ''
      })
    }
  }

  const handleDeletePflegeInfo = (id: string) => {
    setPflegeInfos(pflegeInfos.filter(info => info.id !== id))
  }

  const handlePflegeplanungReview = async () => {
    if (!user) return

    setReviewLoading(true)
    try {
      const pflegeplanungText = `
Fallbeispiel:
${result}

Pflegeprobleme:
${pflegeplanungData.pflegeprobleme}

Nahziele:
${pflegeplanungData.nahziele}

Fernziele:
${pflegeplanungData.fernziele}

Maßnahmen:
${pflegeplanungData.massnahmen}

Begründung:
${pflegeplanungData.begruendung}

Evaluation:
${pflegeplanungData.evaluation}
      `.trim()

      const response = await caseService.reviewWorkflow('pflegeplanung', pflegeplanungText, user.id)
      setReviewResult(response)
      setShowReview(true)
    } catch (error) {
      console.error('Review error:', error)
    } finally {
      setReviewLoading(false)
    }
  }

  const handlePflegeInfoReview = async () => {
    if (!user || pflegeInfos.length === 0) return

    setReviewLoading(true)
    try {
      const pflegeInfoText = `
Fallbeispiel:
${result}

Pflegerelevante Informationen:
${pflegeInfos.map((info, index) => `
${index + 1}. Beschreibung: ${info.beschreibung}
   ABEDL: ${abedlBereiche.find(a => a.value === info.abedl)?.title || info.abedl}
   Begründung: ${info.begruendung}
`).join('\n')}
      `.trim()

      const response = await caseService.reviewWorkflow('abedl', pflegeInfoText, user.id)
      setReviewResult(response)
      setShowReview(true)
    } catch (error) {
      console.error('Review error:', error)
    } finally {
      setReviewLoading(false)
    }
  }

  const resetWorkflow = () => {
    setSelectedWorkflow(null)
    setShowWorkflowOptions(true)
    setShowReview(false)
    setReviewResult('')
    setPflegeplanungStep(1)
    setPflegeplanungData({
      pflegeprobleme: '',
      nahziele: '',
      fernziele: '',
      massnahmen: '',
      begruendung: '',
      evaluation: ''
    })
    setPflegeInfos([])
    setCurrentPflegeInfo({
      id: Date.now().toString(),
      beschreibung: '',
      abedl: '',
      begruendung: ''
    })
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 6))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const canProceed = () => {
    switch (currentStep) {
      case 1: return params.alter !== ''
      case 2: return params.bereich !== ''
      case 3: return params.setting !== ''
      case 4: return params.schwierigkeitsgrad !== ''
      case 5: return true // Optional step
      default: return false
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Altersgruppe auswählen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {altersgruppen.map((alter) => (
                <motion.div
                  key={alter.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all ${
                      params.alter === alter.value 
                        ? 'ring-2 ring-primary-500 bg-primary-50' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, alter: alter.value }))}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{alter.icon}</span>
                        <div>
                          <p className="font-medium text-gray-900">{alter.label}</p>
                        </div>
                        {params.alter === alter.value && (
                          <CheckCircle className="h-5 w-5 text-primary-500 ml-auto" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Krankheitsbereich wählen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {krankheitsbereiche.map((bereich) => (
                <motion.div
                  key={bereich.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all h-full ${
                      params.bereich === bereich.value 
                        ? 'ring-2 ring-primary-500 bg-primary-50' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, bereich: bereich.value }))}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <span className="text-xl">{bereich.icon}</span>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{bereich.label}</p>
                          <p className="text-sm text-gray-600">{bereich.description}</p>
                        </div>
                        {params.bereich === bereich.value && (
                          <CheckCircle className="h-5 w-5 text-primary-500" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pflegesetting bestimmen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {settings.map((setting) => (
                <motion.div
                  key={setting.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all h-full ${
                      params.setting === setting.value 
                        ? 'ring-2 ring-primary-500 bg-primary-50' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, setting: setting.value }))}
                  >
                    <CardContent className="p-6 text-center">
                      <span className="text-4xl block mb-4">{setting.icon}</span>
                      <h3 className="font-semibold text-gray-900 mb-2">{setting.label}</h3>
                      <p className="text-sm text-gray-600">{setting.description}</p>
                      {params.setting === setting.value && (
                        <CheckCircle className="h-6 w-6 text-primary-500 mx-auto mt-3" />
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Schwierigkeitsgrad wählen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {schwierigkeitsgrade.map((grad) => (
                <motion.div
                  key={grad.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all h-full ${
                      params.schwierigkeitsgrad === grad.value 
                        ? 'ring-2 ring-primary-500 bg-primary-50' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, schwierigkeitsgrad: grad.value }))}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${grad.color}`}>
                        {grad.label}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{grad.jahr}</h3>
                      <p className="text-sm text-gray-600">{grad.description}</p>
                      {params.schwierigkeitsgrad === grad.value && (
                        <CheckCircle className="h-6 w-6 text-primary-500 mx-auto mt-3" />
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zusätzliche Informationen (Optional)</h2>
            <Card>
              <CardContent className="p-6">
                <Input
                  label="Spezielle Anforderungen oder Details"
                  value={params.zusatzinfo || ''}
                  onChange={(e) => setParams(prev => ({ ...prev, zusatzinfo: e.target.value }))}
                  placeholder="z.B. Multimorbidität, spezifische Medikamente, besondere Umstände..."
                  className="mb-4"
                />
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
                  <h4 className="font-medium text-blue-900 mb-2">Beispiele für Zusatzinformationen:</h4>
                  <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
                    <li>Mehrere Diagnosen gleichzeitig</li>
                    <li>Besondere kulturelle oder religiöse Aspekte</li>
                    <li>Spezifische Medikamentenpläne</li>
                    <li>Familienangehörige oder soziale Situation</li>
                    <li>Besondere Herausforderungen in der Kommunikation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            {!result && !isLoading && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Fallbeispiel generieren</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Ihre Auswahl:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Altersgruppe:</span> {altersgruppen.find(a => a.value === params.alter)?.label}
                        </div>
                        <div>
                          <span className="font-medium">Krankheitsbereich:</span> {krankheitsbereiche.find(b => b.value === params.bereich)?.label}
                        </div>
                        <div>
                          <span className="font-medium">Setting:</span> {settings.find(s => s.value === params.setting)?.label}
                        </div>
                        <div>
                          <span className="font-medium">Schwierigkeit:</span> {schwierigkeitsgrade.find(g => g.value === params.schwierigkeitsgrad)?.label}
                        </div>
                        {params.zusatzinfo && (
                          <div className="md:col-span-2">
                            <span className="font-medium">Zusatzinfo:</span> {params.zusatzinfo}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mt-4">
                        {error}
                      </div>
                    )}
                    
                    <Button
                      onClick={handleGenerate}
                      disabled={isLoading}
                      loading={isLoading}
                      className="w-full mt-6"
                      size="lg"
                    >
                      <Wand2 className="mr-2 h-5 w-5" />
                      Jetzt Fallbeispiel generieren
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {isLoading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-500 mx-auto mb-4"></div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Fallbeispiel wird generiert...</h3>
                <p className="text-gray-600">Dies kann einen Moment dauern</p>
              </div>
            )}

            {result && !selectedWorkflow && !showReview && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Ihr Fallbeispiel</h2>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      onClick={handleCopy}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Kopieren
                    </Button>
                    <Button
                      onClick={() => {
                        setResult('')
                        setCurrentStep(1)
                        setParams({
                          alter: '',
                          bereich: '',
                          setting: '',
                          schwierigkeitsgrad: 'Leicht',
                          anforderungen: '',
                          zusatzinfo: ''
                        })
                        setShowWorkflowOptions(false)
                        resetWorkflow()
                      }}
                    >
                      Neues Fallbeispiel
                    </Button>
                  </div>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="prose max-w-none">
                      <div className="bg-white border rounded-lg p-6">
                        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
                          {result}
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Workflow Options */}
                {showWorkflowOptions && (
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Play className="h-5 w-5 mr-2" />
                        Nächste Schritte
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-6">
                        Wählen Sie, wie Sie mit diesem Fallbeispiel weiterarbeiten möchten:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Pflegeplanung Option */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Card 
                            className="cursor-pointer transition-all hover:shadow-md border-2 hover:border-blue-300"
                            onClick={() => handleWorkflowSelection('pflegeplanung')}
                          >
                            <CardContent className="p-6 text-center">
                              <Heart className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                              <h3 className="font-semibold text-lg mb-2">Pflegeplanung erstellen</h3>
                              <p className="text-sm text-gray-600">
                                Entwickeln Sie eine vollständige Pflegeplanung mit Diagnosen, Zielen und Maßnahmen
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>

                        {/* Pflegeinfo Option */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Card 
                            className="cursor-pointer transition-all hover:shadow-md border-2 hover:border-green-300"
                            onClick={() => handleWorkflowSelection('pflegeinfo')}
                          >
                            <CardContent className="p-6 text-center">
                              <ClipboardList className="h-12 w-12 text-green-500 mx-auto mb-4" />
                              <h3 className="font-semibold text-lg mb-2">Pflegerelevante Infos</h3>
                              <p className="text-sm text-gray-600">
                                Extrahieren Sie pflegerelevante Informationen und ordnen Sie sie den ABEDL-Bereichen zu
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </div>

                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Pflegeplanung Workflow */}
            {result && selectedWorkflow === 'pflegeplanung' && !showReview && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Fallbeispiel Sidebar */}
                <div className="lg:order-2">
                  <Card className="sticky top-4">
                    <CardHeader>
                      <CardTitle className="text-lg">Fallbeispiel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="max-h-96 overflow-y-auto">
                        <p className="text-sm text-gray-700 whitespace-pre-wrap">{result}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Pflegeplanung Steps */}
                <div className="lg:order-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        Pflegeplanung - Schritt {pflegeplanungStep} von 6
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      {pflegeplanungStep === 1 && (
                        <div>
                          <h3 className="font-semibold mb-3">Pflegeprobleme formulieren</h3>
                          <p className="text-sm text-gray-600 mb-4">
                            Identifizieren und formulieren Sie die Pflegeprobleme basierend auf dem Fallbeispiel.
                          </p>
                          <textarea
                            className="w-full p-3 border rounded-md min-h-[200px]"
                            placeholder="Beschreiben Sie die identifizierten Pflegeprobleme..."
                            value={pflegeplanungData.pflegeprobleme}
                            onChange={(e) => setPflegeplanungData({ ...pflegeplanungData, pflegeprobleme: e.target.value })}
                          />
                        </div>
                      )}

                      {pflegeplanungStep === 2 && (
                        <div>
                          <h3 className="font-semibold mb-3">Nahziele formulieren</h3>
                          <p className="text-sm text-gray-600 mb-4">
                            Formulieren Sie kurzfristige, erreichbare Ziele (1-2 Wochen).
                          </p>
                          <textarea
                            className="w-full p-3 border rounded-md min-h-[200px]"
                            placeholder="Formulieren Sie die Nahziele..."
                            value={pflegeplanungData.nahziele}
                            onChange={(e) => setPflegeplanungData({ ...pflegeplanungData, nahziele: e.target.value })}
                          />
                        </div>
                      )}

                      {pflegeplanungStep === 3 && (
                        <div>
                          <h3 className="font-semibold mb-3">Fernziele formulieren</h3>
                          <p className="text-sm text-gray-600 mb-4">
                            Formulieren Sie langfristige Ziele (mehrere Wochen/Monate).
                          </p>
                          <textarea
                            className="w-full p-3 border rounded-md min-h-[200px]"
                            placeholder="Formulieren Sie die Fernziele..."
                            value={pflegeplanungData.fernziele}
                            onChange={(e) => setPflegeplanungData({ ...pflegeplanungData, fernziele: e.target.value })}
                          />
                        </div>
                      )}

                      {pflegeplanungStep === 4 && (
                        <div>
                          <h3 className="font-semibold mb-3">Konkrete Maßnahmen</h3>
                          <p className="text-sm text-gray-600 mb-4">
                            Beschreiben Sie konkrete Pflegemaßnahmen zur Zielerreichung.
                          </p>
                          <textarea
                            className="w-full p-3 border rounded-md min-h-[200px]"
                            placeholder="Beschreiben Sie die konkreten Pflegemaßnahmen..."
                            value={pflegeplanungData.massnahmen}
                            onChange={(e) => setPflegeplanungData({ ...pflegeplanungData, massnahmen: e.target.value })}
                          />
                        </div>
                      )}

                      {pflegeplanungStep === 5 && (
                        <div>
                          <h3 className="font-semibold mb-3">Begründung der Maßnahmen</h3>
                          <p className="text-sm text-gray-600 mb-4">
                            Begründen Sie fachlich, warum Sie diese Maßnahmen gewählt haben.
                          </p>
                          <textarea
                            className="w-full p-3 border rounded-md min-h-[200px]"
                            placeholder="Begründen Sie Ihre Maßnahmenauswahl..."
                            value={pflegeplanungData.begruendung}
                            onChange={(e) => setPflegeplanungData({ ...pflegeplanungData, begruendung: e.target.value })}
                          />
                        </div>
                      )}

                      {pflegeplanungStep === 6 && (
                        <div>
                          <h3 className="font-semibold mb-3">Evaluationsmöglichkeiten</h3>
                          <p className="text-sm text-gray-600 mb-4">
                            Wie werden Sie den Erfolg Ihrer Pflegeplanung überprüfen?
                          </p>
                          <textarea
                            className="w-full p-3 border rounded-md min-h-[200px]"
                            placeholder="Beschreiben Sie die Evaluationsmöglichkeiten..."
                            value={pflegeplanungData.evaluation}
                            onChange={(e) => setPflegeplanungData({ ...pflegeplanungData, evaluation: e.target.value })}
                          />
                        </div>
                      )}

                      <div className="flex justify-between mt-6">
                        <Button
                          variant="outline"
                          onClick={pflegeplanungStep === 1 ? resetWorkflow : handlePflegeplanungBack}
                        >
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          {pflegeplanungStep === 1 ? 'Zurück' : 'Vorheriger Schritt'}
                        </Button>
                        
                        {pflegeplanungStep < 6 ? (
                          <Button onClick={handlePflegeplanungNext}>
                            Nächster Schritt
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        ) : (
                          <Button 
                            onClick={handlePflegeplanungReview}
                            disabled={reviewLoading}
                            loading={reviewLoading}
                          >
                            <Search className="h-4 w-4 mr-2" />
                            KI-Überprüfung starten
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Pflegeinfo Workflow */}
            {result && selectedWorkflow === 'pflegeinfo' && !showReview && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Fallbeispiel Sidebar */}
                <div className="lg:order-2">
                  <Card className="sticky top-4">
                    <CardHeader>
                      <CardTitle className="text-lg">Fallbeispiel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="max-h-96 overflow-y-auto">
                        <p className="text-sm text-gray-700 whitespace-pre-wrap">{result}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Pflegeinfo Form */}
                <div className="lg:order-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pflegerelevante Informationen</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Beschreibung der pflegerelevanten Information
                          </label>
                          <textarea
                            className="w-full p-3 border rounded-md min-h-[100px]"
                            placeholder="Beschreiben Sie die pflegerelevante Information..."
                            value={currentPflegeInfo.beschreibung}
                            onChange={(e) => setCurrentPflegeInfo({ ...currentPflegeInfo, beschreibung: e.target.value })}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            ABEDL-Bereich auswählen
                          </label>
                          <select
                            className="w-full p-3 border rounded-md"
                            value={currentPflegeInfo.abedl}
                            onChange={(e) => setCurrentPflegeInfo({ ...currentPflegeInfo, abedl: e.target.value })}
                          >
                            <option value="">Bitte wählen...</option>
                            {abedlBereiche.map((abedl) => (
                              <option key={abedl.value} value={abedl.value}>
                                {abedl.icon} {abedl.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Begründung der Zuordnung
                          </label>
                          <textarea
                            className="w-full p-3 border rounded-md min-h-[100px]"
                            placeholder="Begründen Sie, warum diese Information diesem ABEDL-Bereich zugeordnet wird..."
                            value={currentPflegeInfo.begruendung}
                            onChange={(e) => setCurrentPflegeInfo({ ...currentPflegeInfo, begruendung: e.target.value })}
                          />
                        </div>

                        <Button
                          onClick={handleAddPflegeInfo}
                          disabled={!currentPflegeInfo.beschreibung || !currentPflegeInfo.abedl || !currentPflegeInfo.begruendung}
                          className="w-full"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Information hinzufügen
                        </Button>
                      </div>

                      {/* Liste der hinzugefügten Infos */}
                      {pflegeInfos.length > 0 && (
                        <div className="mt-6">
                          <h4 className="font-semibold mb-3">Hinzugefügte Informationen:</h4>
                          <div className="space-y-3">
                            {pflegeInfos.map((info, index) => (
                              <Card key={info.id} className="p-4">
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <p className="font-medium">
                                      {index + 1}. {abedlBereiche.find(a => a.value === info.abedl)?.title}
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                      <strong>Beschreibung:</strong> {info.beschreibung}
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                      <strong>Begründung:</strong> {info.begruendung}
                                    </p>
                                  </div>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleDeletePflegeInfo(info.id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </Card>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between mt-6">
                        <Button variant="outline" onClick={resetWorkflow}>
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Zurück
                        </Button>
                        
                        <Button
                          onClick={handlePflegeInfoReview}
                          disabled={pflegeInfos.length === 0 || reviewLoading}
                          loading={reviewLoading}
                        >
                          <Search className="h-4 w-4 mr-2" />
                          KI-Überprüfung starten
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Review Result */}
            {showReview && reviewResult && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">KI-Überprüfung</h2>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => navigator.clipboard.writeText(reviewResult)}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Kopieren
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowReview(false)}
                    >
                      Zurück
                    </Button>
                  </div>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="prose max-w-none">
                      <div className="bg-white border rounded-lg p-6">
                        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
                          {reviewResult}
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Fallbeispiel Generator
              </h1>
              <p className="text-xl text-gray-600">
                Erstellen Sie maßgeschneiderte Fallbeispiele für Ihre Pflegeausbildung
              </p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between max-w-4xl mx-auto mb-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === step.number
              const isCompleted = currentStep > step.number
              
              return (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all
                      ${isActive 
                        ? 'bg-primary-500 border-primary-500 text-white' 
                        : isCompleted 
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-white border-gray-300 text-gray-400'
                      }
                    `}>
                      {isCompleted ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        <Icon className="h-6 w-6" />
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <p className={`text-sm font-medium ${isActive ? 'text-primary-600' : 'text-gray-500'}`}>
                        {step.title}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`
                      flex-1 h-0.5 mx-4 transition-all
                      ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}
                    `} />
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {currentStep < 6 && (
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück
            </Button>
            
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
            >
              {currentStep === 5 ? 'Zum Generator' : 'Weiter'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FallbeispielGenerator