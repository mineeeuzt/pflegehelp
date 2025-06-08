import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Wand2, Copy, ArrowRight, ArrowLeft, Users, Building2, Stethoscope, FileText, Target, Heart, ClipboardList, Search, Play, Plus, Trash2 } from 'lucide-react'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { caseService, type CaseGenerationParams, type WorkflowInput } from '../services/caseService'
import ReviewDisplay from '../components/ReviewDisplay'
import AILoadingAnimation from '../components/AILoadingAnimation'

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
  const [reviewData, setReviewData] = useState<{sections: any[], overallScore: number, generalFeedback: string} | null>(null)
  const [reviewLoading, setReviewLoading] = useState(false)

  const altersgruppen = [
    { value: 'neugeborene', label: 'Neugeborene', sublabel: '0-28 Tage' },
    { value: 'saeuglinge', label: 'Säuglinge', sublabel: '1-12 Monate' },
    { value: 'kleinkinder', label: 'Kleinkinder', sublabel: '1-3 Jahre' },
    { value: 'kinder', label: 'Kinder', sublabel: '4-11 Jahre' },
    { value: 'jugendliche', label: 'Jugendliche', sublabel: '12-17 Jahre' },
    { value: 'erwachsene', label: 'Erwachsene', sublabel: '18-64 Jahre' },
    { value: 'senioren', label: 'Senioren', sublabel: '65+ Jahre' }
  ]

  const krankheitsbereiche = [
    { value: 'kardiologie', label: 'Kardiologie', description: 'Herz-Kreislauf-Erkrankungen' },
    { value: 'pneumologie', label: 'Pneumologie', description: 'Atemwegserkrankungen' },
    { value: 'neurologie', label: 'Neurologie', description: 'Nervensystem-Erkrankungen' },
    { value: 'gastroenterologie', label: 'Gastroenterologie', description: 'Magen-Darm-Erkrankungen' },
    { value: 'endokrinologie', label: 'Endokrinologie', description: 'Hormon- und Stoffwechselerkrankungen' },
    { value: 'orthopaedie', label: 'Orthopädie', description: 'Bewegungsapparat-Erkrankungen' },
    { value: 'dermatologie', label: 'Dermatologie', description: 'Hauterkrankungen' },
    { value: 'urologie', label: 'Urologie', description: 'Harn- und Geschlechtsorgane' },
    { value: 'onkologie', label: 'Onkologie', description: 'Krebserkrankungen' },
    { value: 'psychiatrie', label: 'Psychiatrie', description: 'Psychische Erkrankungen' },
    { value: 'geriatrie', label: 'Geriatrie', description: 'Altersbedingte Erkrankungen' },
    { value: 'paediatrie', label: 'Pädiatrie', description: 'Kindererkrankungen' },
    { value: 'notfallmedizin', label: 'Notfallmedizin', description: 'Akute Notfälle' },
    { value: 'palliativmedizin', label: 'Palliativmedizin', description: 'Palliative Versorgung' },
    { value: 'rehabilitation', label: 'Rehabilitation', description: 'Wiederherstellende Pflege' }
  ]

  const settings = [
    { 
      value: 'ambulant', 
      label: 'Ambulante Pflege', 
      description: 'Häusliche Pflege und ambulante Dienste' 
    },
    { 
      value: 'akutstation', 
      label: 'Akutstationäre Pflege', 
      description: 'Krankenhaus und Akutversorgung' 
    },
    { 
      value: 'langzeitpflege', 
      label: 'Stationäre Langzeitpflege', 
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
    { value: 'kommunizieren', title: 'Kommunizieren können' },
    { value: 'bewegen', title: 'Sich bewegen können' },
    { value: 'vitale_funktionen', title: 'Vitale Funktionen aufrechterhalten können' },
    { value: 'pflegen', title: 'Sich pflegen können' },
    { value: 'essen_trinken', title: 'Essen und trinken können' },
    { value: 'ausscheiden', title: 'Ausscheiden können' },
    { value: 'kleiden', title: 'Sich kleiden können' },
    { value: 'ruhen_schlafen', title: 'Ruhen und schlafen können' },
    { value: 'beschaeftigen', title: 'Sich beschäftigen können' },
    { value: 'geschlecht', title: 'Sich als Mann oder Frau fühlen und verhalten können' },
    { value: 'umgebung', title: 'Für eine sichere und fördernde Umgebung sorgen können' },
    { value: 'sozial', title: 'Soziale Bereiche des Lebens sichern können' },
    { value: 'existenziell', title: 'Mit existenziellen Erfahrungen des Lebens umgehen können' }
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
      
      try {
        const parsedData = JSON.parse(response)
        setReviewData(parsedData)
        setShowReview(true)
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError)
        setReviewResult(response)
        setShowReview(true)
      }
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
      
      try {
        const parsedData = JSON.parse(response)
        setReviewData(parsedData)
        setShowReview(true)
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError)
        setReviewResult(response)
        setShowReview(true)
      }
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
    setReviewData(null)
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
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 gap-3">
              {altersgruppen.map((alter) => (
                <motion.div
                  key={alter.value}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all border-2 group relative overflow-hidden ${
                      params.alter === alter.value 
                        ? 'border-gray-900 bg-gray-50 shadow-md' 
                        : 'border-gray-200 hover:border-gray-400 hover:shadow-lg'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, alter: alter.value }))}
                  >
                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-2 transition-opacity" />
                    
                    <CardContent className="p-6 relative">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900 mb-1">{alter.label}</p>
                          <p className="text-sm text-gray-500">{alter.sublabel}</p>
                        </div>
                        {params.alter === alter.value ? (
                          <div className="w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-300 rounded-full group-hover:border-gray-400 transition-colors" />
                        )}
                      </div>
                      
                      {/* Selection indicator line */}
                      {params.alter === alter.value && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900" />
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {krankheitsbereiche.map((bereich) => (
                <motion.div
                  key={bereich.value}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all h-full border-2 ${
                      params.bereich === bereich.value 
                        ? 'border-gray-900 bg-gray-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, bereich: bereich.value }))}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 mb-1">{bereich.label}</p>
                          <p className="text-sm text-gray-500">{bereich.description}</p>
                        </div>
                        {params.bereich === bereich.value && (
                          <div className="w-3 h-3 bg-gray-900 rounded-full ml-4" />
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
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 gap-3">
              {settings.map((setting) => (
                <motion.div
                  key={setting.value}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all border-2 ${
                      params.setting === setting.value 
                        ? 'border-gray-900 bg-gray-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, setting: setting.value }))}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900 mb-1">{setting.label}</p>
                          <p className="text-sm text-gray-500">{setting.description}</p>
                        </div>
                        {params.setting === setting.value && (
                          <div className="w-3 h-3 bg-gray-900 rounded-full" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {schwierigkeitsgrade.map((grad) => (
                <motion.div
                  key={grad.value}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all h-full border-2 ${
                      params.schwierigkeitsgrad === grad.value 
                        ? 'border-gray-900 bg-gray-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, schwierigkeitsgrad: grad.value }))}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${grad.color}`}>
                        {grad.label}
                      </div>
                      <h3 className="font-medium text-gray-900 mb-2">{grad.jahr}</h3>
                      <p className="text-sm text-gray-600">{grad.description}</p>
                      {params.schwierigkeitsgrad === grad.value && (
                        <div className="w-3 h-3 bg-gray-900 rounded-full mx-auto mt-3" />
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
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <Input
                  label="Spezielle Anforderungen oder Details"
                  value={params.zusatzinfo || ''}
                  onChange={(e) => setParams(prev => ({ ...prev, zusatzinfo: e.target.value }))}
                  placeholder="z.B. Multimorbidität, spezifische Medikamente, besondere Umstände..."
                  className="mb-6"
                />
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Beispiele für Zusatzinformationen:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Mehrere Diagnosen gleichzeitig</li>
                    <li>• Besondere kulturelle oder religiöse Aspekte</li>
                    <li>• Spezifische Medikamentenpläne</li>
                    <li>• Familienangehörige oder soziale Situation</li>
                    <li>• Besondere Herausforderungen in der Kommunikation</li>
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
                      className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white"
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
              <AILoadingAnimation 
                message="Fallbeispiel wird generiert..."
                size="lg"
              />
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
                            className="cursor-pointer transition-all border-2 border-gray-200 hover:border-gray-400"
                            onClick={() => handleWorkflowSelection('pflegeplanung')}
                          >
                            <CardContent className="p-6 text-center">
                              <Heart className="h-12 w-12 text-gray-700 mx-auto mb-4" />
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
                            className="cursor-pointer transition-all border-2 border-gray-200 hover:border-gray-400"
                            onClick={() => handleWorkflowSelection('pflegeinfo')}
                          >
                            <CardContent className="p-6 text-center">
                              <ClipboardList className="h-12 w-12 text-gray-700 mx-auto mb-4" />
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
                                {abedl.title}
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
            {showReview && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-light text-gray-900">KI-Überprüfung</h2>
                  <Button
                    variant="outline"
                    onClick={() => setShowReview(false)}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Zurück
                  </Button>
                </div>
                
                {reviewData ? (
                  <ReviewDisplay 
                    reviewData={reviewData.sections}
                    overallScore={reviewData.overallScore}
                    generalFeedback={reviewData.generalFeedback}
                  />
                ) : (
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
                )}
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-light text-gray-900 mb-4">
            Fallbeispiel Generator
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Erstellen Sie maßgeschneiderte Fallbeispiele für die Pflegeausbildung
          </p>
        </motion.div>

        {/* Progress Steps */}
        {currentStep < 7 && (
          <div className="mb-16">
            <div className="relative mb-8">
              {/* Progress Line Background */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 transform -translate-y-1/2" />
              
              {/* Active Progress Line */}
              <div 
                className="absolute top-1/2 left-0 h-px bg-gray-900 transform -translate-y-1/2 transition-all duration-500"
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
                          ? 'border-gray-900 shadow-lg' 
                          : isCompleted 
                            ? 'border-gray-900 bg-gray-900'
                            : 'border-gray-300'
                        }
                      `}>
                        {isCompleted && (
                          <div className="absolute inset-1 bg-white rounded-full" />
                        )}
                        {isActive && (
                          <div className="absolute inset-1.5 bg-gray-900 rounded-full" />
                        )}
                      </div>
                      
                      {/* Step Label */}
                      <div className="mt-3 text-center">
                        <p className={`text-xs font-medium transition-colors ${
                          isActive || isCompleted ? 'text-gray-900' : 'text-gray-400'
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
                {steps.find(s => s.number === currentStep)?.description}
              </h2>
            </div>
          </div>
        )}

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
          <div className="flex justify-center items-center space-x-4 mt-16">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück
            </Button>
            
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className="px-8 bg-gray-900 hover:bg-gray-800 text-white"
            >
              {currentStep === 5 ? 'Generieren' : 'Weiter'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FallbeispielGenerator