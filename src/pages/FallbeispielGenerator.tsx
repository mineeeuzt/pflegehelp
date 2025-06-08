import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Wand2, Copy, ArrowRight, ArrowLeft, CheckCircle, Users, Building2, Stethoscope, FileText, Target, Heart, ClipboardList, Search, Play } from 'lucide-react'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useAuthStore } from '../store/authStore'
import { caseService, type CaseGenerationParams, type WorkflowInput } from '../services/caseService'

interface GeneratorParams extends CaseGenerationParams {
  alter: string
  setting: string
  zusatzinfo?: string
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
  const [selectedWorkflow, setSelectedWorkflow] = useState<'pflegeplanung' | 'abedl' | null>(null)
  const [workflowResult, setWorkflowResult] = useState('')
  const [workflowLoading, setWorkflowLoading] = useState(false)
  const [workflowError, setWorkflowError] = useState('')
  const [selectedABEDLs, setSelectedABEDLs] = useState<string[]>([])
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
    { id: 1, title: 'Kommunizieren können', icon: '💬' },
    { id: 2, title: 'Sich bewegen können', icon: '🚶' },
    { id: 3, title: 'Vitale Funktionen aufrechterhalten können', icon: '❤️' },
    { id: 4, title: 'Sich pflegen können', icon: '🧴' },
    { id: 5, title: 'Essen und trinken können', icon: '🍽️' },
    { id: 6, title: 'Ausscheiden können', icon: '🚿' },
    { id: 7, title: 'Sich kleiden können', icon: '👕' },
    { id: 8, title: 'Ruhen und schlafen können', icon: '😴' },
    { id: 9, title: 'Sich beschäftigen können', icon: '🎨' },
    { id: 10, title: 'Sich als Mann oder Frau fühlen und verhalten können', icon: '👫' },
    { id: 11, title: 'Für eine sichere und fördernde Umgebung sorgen können', icon: '🏠' },
    { id: 12, title: 'Soziale Bereiche des Lebens sichern können', icon: '👥' },
    { id: 13, title: 'Mit existenziellen Erfahrungen des Lebens umgehen können', icon: '🙏' }
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

  const handleWorkflowSelection = async (workflowType: 'pflegeplanung' | 'abedl') => {
    if (!user || !result) return

    setSelectedWorkflow(workflowType)
    setWorkflowLoading(true)
    setWorkflowError('')

    try {
      const workflowInput: WorkflowInput = {
        fallbeispiel: result,
        selectedABEDLs: workflowType === 'abedl' ? selectedABEDLs : undefined
      }

      let response: string
      if (workflowType === 'pflegeplanung') {
        response = await caseService.generateWorkflowPflegeplanung(workflowInput, user.id)
      } else {
        response = await caseService.generateWorkflowABEDL(workflowInput, user.id)
      }

      setWorkflowResult(response)
      setShowWorkflowOptions(false)
    } catch (error) {
      console.error('Workflow generation error:', error)
      setWorkflowError(error instanceof Error ? error.message : 'Fehler beim Erstellen des Workflows')
    } finally {
      setWorkflowLoading(false)
    }
  }

  const handleReview = async () => {
    if (!user || !workflowResult || !selectedWorkflow) return

    setReviewLoading(true)
    try {
      const response = await caseService.reviewWorkflow(selectedWorkflow, workflowResult, user.id)
      setReviewResult(response)
      setShowReview(true)
    } catch (error) {
      console.error('Review error:', error)
    } finally {
      setReviewLoading(false)
    }
  }

  const toggleABEDL = (abedlTitle: string) => {
    setSelectedABEDLs(prev => 
      prev.includes(abedlTitle) 
        ? prev.filter(id => id !== abedlTitle)
        : [...prev, abedlTitle]
    )
  }

  const resetWorkflow = () => {
    setSelectedWorkflow(null)
    setWorkflowResult('')
    setWorkflowError('')
    setShowWorkflowOptions(true)
    setShowReview(false)
    setReviewResult('')
    setSelectedABEDLs([])
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

            {result && !workflowResult && !showReview && (
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

                        {/* ABEDL Option */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Card 
                            className="cursor-pointer transition-all hover:shadow-md border-2 hover:border-green-300"
                            onClick={() => setSelectedWorkflow('abedl')}
                          >
                            <CardContent className="p-6 text-center">
                              <ClipboardList className="h-12 w-12 text-green-500 mx-auto mb-4" />
                              <h3 className="font-semibold text-lg mb-2">ABEDL-Zuordnung</h3>
                              <p className="text-sm text-gray-600">
                                Extrahieren Sie pflegerelevante Informationen und ordnen Sie sie den ABEDL-Bereichen zu
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </div>

                      {workflowError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mt-4">
                          {workflowError}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* ABEDL Selection */}
                {selectedWorkflow === 'abedl' && !workflowResult && (
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>ABEDL-Bereiche auswählen (Optional)</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">
                        Wählen Sie die ABEDL-Bereiche aus, auf die Sie sich fokussieren möchten (optional):
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                        {abedlBereiche.map((abedl) => (
                          <motion.div
                            key={abedl.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Card 
                              className={`cursor-pointer transition-all text-sm ${
                                selectedABEDLs.includes(abedl.title)
                                  ? 'ring-2 ring-primary-500 bg-primary-50'
                                  : 'hover:shadow-md'
                              }`}
                              onClick={() => toggleABEDL(abedl.title)}
                            >
                              <CardContent className="p-3">
                                <div className="flex items-center space-x-2">
                                  <span className="text-lg">{abedl.icon}</span>
                                  <span className="font-medium text-xs leading-tight">{abedl.title}</span>
                                  {selectedABEDLs.includes(abedl.title) && (
                                    <CheckCircle className="h-4 w-4 text-primary-500 ml-auto" />
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          onClick={() => handleWorkflowSelection('abedl')}
                          disabled={workflowLoading}
                          loading={workflowLoading}
                          className="flex-1"
                        >
                          ABEDL-Zuordnung erstellen
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedWorkflow(null)}
                        >
                          Zurück
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Workflow Loading */}
            {workflowLoading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-500 mx-auto mb-4"></div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {selectedWorkflow === 'pflegeplanung' ? 'Pflegeplanung wird erstellt...' : 'ABEDL-Zuordnung wird erstellt...'}
                </h3>
                <p className="text-gray-600">Dies kann einen Moment dauern</p>
              </div>
            )}

            {/* Workflow Result */}
            {workflowResult && !showReview && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedWorkflow === 'pflegeplanung' ? 'Ihre Pflegeplanung' : 'Ihre ABEDL-Zuordnung'}
                  </h2>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => navigator.clipboard.writeText(workflowResult)}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Kopieren
                    </Button>
                    <Button
                      onClick={handleReview}
                      disabled={reviewLoading}
                      loading={reviewLoading}
                    >
                      <Search className="h-4 w-4 mr-2" />
                      KI-Überprüfung
                    </Button>
                    <Button
                      variant="outline"
                      onClick={resetWorkflow}
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
                          {workflowResult}
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Review Loading */}
            {reviewLoading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-500 mx-auto mb-4"></div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">KI-Überprüfung wird durchgeführt...</h3>
                <p className="text-gray-600">Dies kann einen Moment dauern</p>
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
                      Zurück zur Pflegeplanung
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