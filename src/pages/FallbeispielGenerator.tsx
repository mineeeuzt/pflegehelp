import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Wand2, Copy, ArrowRight, ArrowLeft, Users, Building2, Stethoscope, FileText, Target, Heart, ClipboardList, Search, Play, Plus, Trash2, HelpCircle, X, Info } from 'lucide-react'
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

// Helper Component für Hilfe-Tooltips im Apple-Style
const HelpTooltip = ({ content, onClose }: { content: { title: string; content: string }, onClose: () => void }) => {
  // Einfache Markdown-Formatierung
  const formatContent = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Bold formatting
        let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
        
        // Bullets und Listen erhalten
        if (line.trim().startsWith('•') || line.trim().match(/^[0-9]\.\s/)) {
          return (
            <div key={index} className="ml-6 mb-2 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedLine }} />
          )
        }
        
        // Headers (lines starting with bold text)
        if (line.match(/^\*\*[A-Za-z]/)) {
          return (
            <div key={index} className="font-medium text-gray-900 mt-6 mb-3 text-base" dangerouslySetInnerHTML={{ __html: formattedLine }} />
          )
        }
        
        return formattedLine ? (
          <div key={index} className="mb-2 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedLine }} />
        ) : (
          <div key={index} className="h-2" />
        )
      })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="mb-6 relative"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      <div className="rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200/60 bg-gray-50/50 flex items-center justify-between">
          <h4 className="font-medium text-gray-900 text-base">{content.title}</h4>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-200/60 rounded-lg transition-all group"
            aria-label="Schließen"
          >
            <X className="h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors" />
          </button>
        </div>
        
        {/* Content */}
        <div className="px-6 py-5 max-h-[400px] overflow-y-auto custom-scrollbar">
          <div className="text-sm space-y-1">
            {formatContent(content.content)}
          </div>
        </div>
      </div>
    </motion.div>
  )
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
  const [isStreaming, setIsStreaming] = useState(false)
  const [streamingText, setStreamingText] = useState('')
  const [error, setError] = useState('')
  const [showWorkflowOptions, setShowWorkflowOptions] = useState(false)
  const [selectedWorkflow, setSelectedWorkflow] = useState<'pflegeplanung' | 'pflegeinfo' | null>(null)
  const [promptVersion, setPromptVersion] = useState<'fallbeispiel' | 'fallbeispielProfi'>('fallbeispielProfi')
  
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
  const [showHelpTooltip, setShowHelpTooltip] = useState<number | null>(null)

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
    { value: 'herz_kreislauf', label: '🫀 Herz-Kreislauf-System', description: 'Herzinfarkt, Herzinsuffizienz, Bluthochdruck' },
    { value: 'atmung', label: '🫁 Atmungssystem', description: 'COPD, Pneumonie, Asthma' },
    { value: 'nervensystem', label: '🧠 Nervensystem', description: 'Schlaganfall, Epilepsie, Demenz' },
    { value: 'bewegungsapparat', label: '🦴 Bewegungsapparat', description: 'Frakturen, Arthrose, Rückenschmerzen' },
    { value: 'stoffwechsel', label: '🍯 Stoffwechsel', description: 'Diabetes, Schilddrüse, Adipositas' },
    { value: 'nieren_harnwege', label: '🫘 Nieren und Harnwege', description: 'Niereninsuffizienz, Harnwegsinfekte' },
    { value: 'verdauung', label: '🍎 Verdauungssystem', description: 'Gastritis, Darmerkrankungen, Leberprobleme' },
    { value: 'blut_tumore', label: '🩸 Blut und Tumore', description: 'Anämie, Leukämie, Krebserkrankungen' },
    { value: 'immunsystem', label: '🛡️ Immunsystem und Infekte', description: 'Sepsis, Autoimmunerkrankungen' },
    { value: 'haut_wunden', label: '🧴 Haut und Wunden', description: 'Dekubitus, Verbrennungen, Hauterkrankungen' },
    { value: 'entwicklung', label: '🧒 Entwicklung und Wachstum', description: 'Pädiatrische Erkrankungen, Entwicklungsstörungen' },
    { value: 'reproduktion', label: '🤰 Reproduktion und Hormone', description: 'Schwangerschaft, Hormonelle Störungen' },
    { value: 'sinnesorgane', label: '👁️ Sinnesorgane', description: 'Sehstörungen, Hörprobleme' },
    { value: 'psyche', label: '🧠 Psyche', description: 'Depression, Angststörungen, Suchterkrankungen' },
    { value: 'intensivmedizin', label: '🚑 Intensivmedizin', description: 'Beatmung, Reanimation, Schock' }
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

  // Pflegeplanung Hilfe-Texte
  const pflegeplanungHilfe = {
    1: {
      title: 'Pflegeproblem nach PESR-Schema',
      content: `
**PESR-Reihenfolge einhalten:**
• **P** (Problem): Das Hauptproblem des Patienten
• **E** (Einflussfaktor/Ursache): Warum besteht das Problem?
• **S** (Symptome): Woran zeigt sich das Problem?
• **R** (Ressourcen): Was kann der Patient noch?

**Beispiel:**
"Herr M. hat ein erhöhtes Risiko für einen Dekubitus **(P)**, weil er sich aufgrund einer Hemiparese nicht selbstständig umlagern kann **(E)**, was sich daran zeigt, dass er seit drei Tagen in Rückenlage liegt und erste Hautrötungen im Sakralbereich sichtbar sind **(S)**. Unterstützend wirkt, dass er Druckstellen verbal äußern kann und kooperationsfähig ist **(R)**."

**Häufige Fehler:**
• Medizinische Diagnosen statt Pflegeprobleme
• Reihenfolge vertauscht oder unvollständig
• Vage Aussagen wie "hat Probleme mit..."
• Ressourcen vergessen oder negativ formuliert`
    },
    2: {
      title: 'Nahziele nach SMART-Kriterien',
      content: `
**SMART-Kriterien:**
• **S**pezifisch: Was genau soll erreicht werden?
• **M**essbar: Woran erkenne ich die Zielerreichung?
• **A**kzeptiert/Erreichbar: Ist es realistisch?
• **R**elevant: Warum ist dieses Ziel wichtig?
• **T**erminiert: Bis wann? (Nahziel: 1-3 Tage)

**Beispiel Nahziel:**
"Herr M. zeigt innerhalb der nächsten 3 Tage keine Hautrötung im Sakralbereich und die Haut ist intakt."

**Wichtige Regeln:**
• Positive Formulierung (Zustand beschreiben, nicht Vermeidung)
• Gegenwartsform verwenden ("Die Haut ist intakt")
• Patientenbezogen ("Der Patient..." nicht "Es soll...")
• Konkrete, messbare Parameter definieren`
    },
    3: {
      title: 'Fernziele nach SMART-Kriterien',
      content: `
**Fernziele (mehrere Wochen/Monate):**
• Langfristige, übergeordnete Ziele
• Gleiche SMART-Kriterien wie Nahziele
• Zeitrahmen: mehrere Wochen bis Monate

**Beispiel Fernziel:**
"Herr M. ist während des gesamten Klinikaufenthalts (ca. 14 Tage) dekubitusfrei und die Haut ist an allen druckgefährdeten Stellen intakt."

**Unterschied zu Nahzielen:**
• Umfassendere Zielsetzung
• Längerer Zeitrahmen
• Nachhaltigkeit und Stabilität
• Oft präventiver Charakter`
    },
    4: {
      title: 'Pflegemaßnahmen nach 5-W-Regel',
      content: `
**Alle 5 W-Fragen müssen beantwortet sein:**
• **Wer?** Pflegefachkraft, Pflegehilfskraft
• **Was?** Konkrete Handlung beschreiben
• **Wann?** Tageszeit, Zeitpunkt
• **Wie oft?** Täglich, 3x täglich, alle 2 Stunden
• **Wie?** Methode, Technik, Hilfsmittel

**Beispiele:**
1. "Die Pflegefachkraft kontrolliert **täglich morgens und abends** beim Waschen die Haut im Sakral-, Fersen- und Trochanterbereich **durch systematische Sichtkontrolle** auf Rötungen."

2. "Die Pflegefachkraft lagert Herrn M. **alle 2 Stunden** um (Rücken-, Seiten-, 30°-Lagerung) **mit Hilfe von Lagerungskissen** zur Druckentlastung."

**Mindestens 3 vollständige Maßnahmen pro Problem!**`
    },
    5: {
      title: 'Begründung der Maßnahmen',
      content: `
**Jede Maßnahme einzeln begründen:**
• Warum ist die Maßnahme notwendig? (Pathophysiologie)
• Welcher Standard/Leitlinie? (Expertenstandards)
• Wie trägt sie zur Zielerreichung bei?

**Beispiel Begründung:**
"Durch die systematische tägliche Hautkontrolle können erste Anzeichen für druckbedingte Hautveränderungen (Kategorie 1 Dekubitus) frühzeitig erkannt werden. Dies entspricht dem Expertenstandard zur Dekubitusprophylaxe (2017) und ermöglicht rechtzeitige Interventionen."

**Elemente einer guten Begründung:**
• Fachliche Tiefe zeigen
• Evidenzbasierung nennen
• Direkter Bezug zum Ziel
• Pathophysiologie erklären`
    },
    6: {
      title: 'Evaluation der Zielerreichung',
      content: `
**Evaluationskriterien:**
• Zeitlich terminiert und messbar
• Muss zum jeweiligen Ziel passen
• Klare Ja/Nein-Antwort ermöglichen
• Objektive Kriterien definieren

**Evaluationsmethoden:**
• Sichtkontrolle (Haut, Wunden)
• Befragung (Schmerzskala, Wohlbefinden)
• Messungen (Vitalzeichen, Gewicht)
• Beobachtung (Verhalten, Fähigkeiten)
• Assessment-Tools (Braden-Skala, Barthel-Index)

**Beispiele:**
**Nahziel-Evaluation:**
"Das Nahziel ist erreicht, wenn Herr M. am dritten Tag bei der Hautinspektion keine Hautrötungen zeigt (Kategorie 0) und auf der Schmerzskala 0-2 beim Lagern angibt."

**Fernziel-Evaluation:**
"Das Fernziel ist erreicht, wenn Herr M. am Entlassungstag eine intakte Haut ohne Dekubitalgeschwüre aufweist, auf der Braden-Skala mindestens 15 Punkte erreicht."`
    }
  }

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
    setIsStreaming(true)
    setError('')
    setStreamingText('')
    setResult('')

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
      
      console.log('Generating case with streaming params:', generationParams)
      
      await caseService.generateFallbeispielStreaming(
        generationParams,
        user.id,
        // onChunk - wird bei jedem neuen Text-Chunk aufgerufen
        (chunk: string) => {
          setStreamingText(prev => prev + chunk)
        },
        // onComplete - wird aufgerufen wenn das Streaming komplett ist
        (fullText: string) => {
          setResult(fullText)
          setStreamingText('')
          setIsStreaming(false)
          setIsLoading(false)
          setShowWorkflowOptions(true)
        },
        // onError - wird bei Fehlern aufgerufen
        (error: Error) => {
          console.error('Streaming generation error:', error)
          let errorMessage = error.message || 'Ein unbekannter Fehler ist aufgetreten'
          
          // Check for specific error types
          if (errorMessage.includes('API key')) {
            errorMessage = 'OpenAI API-Schlüssel fehlt oder ist ungültig. Bitte kontaktieren Sie den Support.'
          } else if (errorMessage.includes('quota') || errorMessage.includes('rate limit')) {
            errorMessage = 'API-Limit erreicht. Bitte versuchen Sie es später erneut.'
          } else if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
            errorMessage = 'Netzwerkfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.'
          }
          
          setError(errorMessage)
          setIsStreaming(false)
          setIsLoading(false)
          setStreamingText('')
        },
        promptVersion
      )
    } catch (error) {
      console.error('Generation error:', error)
      let errorMessage = 'Ein unbekannter Fehler ist aufgetreten'
      
      if (error instanceof Error) {
        errorMessage = error.message
      } else if (typeof error === 'string') {
        errorMessage = error
      }
      
      setError(errorMessage)
      setIsStreaming(false)
      setIsLoading(false)
      setStreamingText('')
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
      setShowHelpTooltip(null) // Hilfe-Tooltip schließen
    }
  }

  const handlePflegeplanungBack = () => {
    if (pflegeplanungStep > 1) {
      setPflegeplanungStep(pflegeplanungStep - 1)
      setShowHelpTooltip(null) // Hilfe-Tooltip schließen
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

  const resetAll = () => {
    setResult('')
    setStreamingText('')
    setIsLoading(false)
    setIsStreaming(false)
    setError('')
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
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
              {altersgruppen.map((alter) => (
                <motion.div
                  key={alter.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all border group relative h-24 ${
                      params.alter === alter.value 
                        ? 'border-gray-800 bg-gray-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, alter: alter.value }))}
                  >
                    <CardContent className="p-3 relative h-full flex flex-col justify-center">
                      <div className="text-center">
                        <p className="font-medium text-gray-900 text-xs mb-1">{alter.label}</p>
                        <p className="text-xs text-gray-500">{alter.sublabel}</p>
                      </div>
                      
                      {/* Selection indicator */}
                      {params.alter === alter.value && (
                        <div className="absolute top-2 right-2 w-3 h-3 bg-gray-800 rounded-full" />
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
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2">
              {krankheitsbereiche.map((bereich) => (
                <motion.div
                  key={bereich.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all border group relative h-24 ${
                      params.bereich === bereich.value 
                        ? 'border-gray-800 bg-gray-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, bereich: bereich.value }))}
                  >
                    <CardContent className="p-2 relative h-full flex flex-col justify-center">
                      <div className="text-center">
                        <p className="font-medium text-gray-900 text-xs mb-1 leading-tight">{bereich.label}</p>
                      </div>
                      
                      {/* Selection indicator */}
                      {params.bereich === bereich.value && (
                        <div className="absolute top-2 right-2 w-3 h-3 bg-gray-800 rounded-full" />
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {settings.map((setting) => (
                <motion.div
                  key={setting.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all border group relative h-32 ${
                      params.setting === setting.value 
                        ? 'border-slate-700 bg-slate-50' 
                        : 'border-gray-200 hover:border-slate-300'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, setting: setting.value }))}
                  >
                    <CardContent className="p-4 relative h-full flex flex-col justify-center">
                      <div className="text-center">
                        <p className="font-medium text-gray-900 mb-2">{setting.label}</p>
                        <p className="text-sm text-gray-500 leading-tight">{setting.description}</p>
                      </div>
                      
                      {/* Selection indicator */}
                      {params.setting === setting.value && (
                        <div className="absolute top-3 right-3 w-3 h-3 bg-slate-700 rounded-full" />
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
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {schwierigkeitsgrade.map((grad) => (
                <motion.div
                  key={grad.value}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all h-full border group relative ${
                      params.schwierigkeitsgrad === grad.value 
                        ? 'border-slate-700 bg-slate-50' 
                        : 'border-gray-200 hover:border-slate-300'
                    }`}
                    onClick={() => setParams(prev => ({ ...prev, schwierigkeitsgrad: grad.value }))}
                  >
                    <CardContent className="p-6 text-center relative">
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${grad.color}`}>
                        {grad.label}
                      </div>
                      <h3 className="font-medium text-gray-900 mb-2">{grad.jahr}</h3>
                      <p className="text-sm text-gray-600">{grad.description}</p>
                      {/* Selection indicator */}
                      {params.schwierigkeitsgrad === grad.value && (
                        <div className="absolute top-3 right-3 w-3 h-3 bg-slate-700 rounded-full" />
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
                      className="w-full mt-6 bg-slate-800 hover:bg-slate-900 text-white"
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
              <div className="py-16">
                {!isStreaming ? (
                  // Loading Animation vor dem Streaming
                  <div className="text-center">
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
                        Fallbeispiel Generator
                      </motion.h2>
                      <motion.p 
                        className="text-gray-600 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        Fallbeispiel wird vorbereitet...
                      </motion.p>
                    </motion.div>
                  </div>
                ) : (
                  // Streaming Display
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-light text-gray-900">Ihr Fallbeispiel wird erstellt</h2>
                      <div className="flex items-center space-x-2">
                        <motion.div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        />
                        <span className="text-sm text-gray-600 font-light">Live generiert</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                      <div className="prose max-w-none">
                        <p className="text-gray-800 font-light leading-relaxed whitespace-pre-wrap">
                          {streamingText}
                          <motion.span
                            className="inline-block w-2 h-5 bg-gray-600 ml-1"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {result && !selectedWorkflow && !showReview && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-light text-gray-900">Ihr Fallbeispiel</h2>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopy}
                      className="border-gray-300 text-gray-600 hover:border-slate-400 hover:text-slate-700"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Kopieren
                    </Button>
                    <Button
                      size="sm"
                      onClick={resetAll}
                      className="bg-slate-800 hover:bg-slate-900 text-white"
                    >
                      Neues Fallbeispiel
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-6">
                  <div className="prose max-w-none">
                    <p className="text-gray-800 font-light leading-relaxed whitespace-pre-wrap">
                      {result}
                    </p>
                  </div>
                </div>

                {/* Workflow Options */}
                {showWorkflowOptions && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-light text-gray-900 mb-2">Nächste Schritte</h3>
                      <p className="text-gray-600 font-light">
                        Wählen Sie, wie Sie mit diesem Fallbeispiel weiterarbeiten möchten:
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Pflegeplanung Option */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <Card 
                          className="cursor-pointer transition-all border border-gray-200 hover:border-gray-300 group"
                          onClick={() => handleWorkflowSelection('pflegeplanung')}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="p-2 bg-gray-100 group-hover:bg-gray-200 rounded-lg transition-colors">
                                <Heart className="h-5 w-5 text-gray-700" />
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900 mb-1">Pflegeplanung erstellen</h3>
                                <p className="text-sm text-gray-600 font-light">
                                  Entwickeln Sie eine vollständige Pflegeplanung mit Diagnosen, Zielen und Maßnahmen
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      {/* Pflegeinfo Option */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <Card 
                          className="cursor-pointer transition-all border border-gray-200 hover:border-gray-300 group"
                          onClick={() => handleWorkflowSelection('pflegeinfo')}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="p-2 bg-gray-100 group-hover:bg-gray-200 rounded-lg transition-colors">
                                <ClipboardList className="h-5 w-5 text-gray-700" />
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900 mb-1">Pflegerelevante Infos</h3>
                                <p className="text-sm text-gray-600 font-light">
                                  Extrahieren Sie pflegerelevante Informationen und ordnen Sie sie den ABEDL-Bereichen zu
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </div>
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
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold">Pflegeprobleme formulieren</h3>
                            <button
                              onClick={() => setShowHelpTooltip(showHelpTooltip === 1 ? null : 1)}
                              className={`
                                inline-flex items-center gap-1.5 px-3 py-1.5 
                                text-xs font-medium rounded-full
                                transition-all duration-200 
                                ${showHelpTooltip === 1 
                                  ? 'bg-gray-900 text-white shadow-md' 
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                                }
                              `}
                            >
                              <Info className="h-3.5 w-3.5" />
                              <span>Anleitung</span>
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Identifizieren und formulieren Sie die Pflegeprobleme basierend auf dem Fallbeispiel.
                          </p>
                          
                          {/* Hilfe-Tooltip */}
                          <AnimatePresence>
                            {showHelpTooltip === 1 && (
                              <HelpTooltip 
                                content={pflegeplanungHilfe[1]} 
                                onClose={() => setShowHelpTooltip(null)}
                              />
                            )}
                          </AnimatePresence>

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
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold">Nahziele formulieren</h3>
                            <button
                              onClick={() => setShowHelpTooltip(showHelpTooltip === 2 ? null : 2)}
                              className={`
                                inline-flex items-center gap-1.5 px-3 py-1.5 
                                text-xs font-medium rounded-full
                                transition-all duration-200 
                                ${showHelpTooltip === 2 
                                  ? 'bg-gray-900 text-white shadow-md' 
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                                }
                              `}
                            >
                              <Info className="h-3.5 w-3.5" />
                              <span>Anleitung</span>
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Formulieren Sie kurzfristige, erreichbare Ziele (1-2 Wochen).
                          </p>
                          
                          <AnimatePresence>
                            {showHelpTooltip === 2 && (
                              <HelpTooltip 
                                content={pflegeplanungHilfe[2]} 
                                onClose={() => setShowHelpTooltip(null)}
                              />
                            )}
                          </AnimatePresence>
                          
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
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold">Fernziele formulieren</h3>
                            <button
                              onClick={() => setShowHelpTooltip(showHelpTooltip === 3 ? null : 3)}
                              className={`
                                inline-flex items-center gap-1.5 px-3 py-1.5 
                                text-xs font-medium rounded-full
                                transition-all duration-200 
                                ${showHelpTooltip === 3 
                                  ? 'bg-gray-900 text-white shadow-md' 
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                                }
                              `}
                            >
                              <Info className="h-3.5 w-3.5" />
                              <span>Anleitung</span>
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Formulieren Sie langfristige Ziele (mehrere Wochen/Monate).
                          </p>
                          
                          <AnimatePresence>
                            {showHelpTooltip === 3 && (
                              <HelpTooltip 
                                content={pflegeplanungHilfe[3]} 
                                onClose={() => setShowHelpTooltip(null)}
                              />
                            )}
                          </AnimatePresence>
                          
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
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold">Konkrete Maßnahmen</h3>
                            <button
                              onClick={() => setShowHelpTooltip(showHelpTooltip === 4 ? null : 4)}
                              className={`
                                inline-flex items-center gap-1.5 px-3 py-1.5 
                                text-xs font-medium rounded-full
                                transition-all duration-200 
                                ${showHelpTooltip === 4 
                                  ? 'bg-gray-900 text-white shadow-md' 
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                                }
                              `}
                            >
                              <Info className="h-3.5 w-3.5" />
                              <span>Anleitung</span>
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Beschreiben Sie konkrete Pflegemaßnahmen zur Zielerreichung.
                          </p>
                          
                          <AnimatePresence>
                            {showHelpTooltip === 4 && (
                              <HelpTooltip 
                                content={pflegeplanungHilfe[4]} 
                                onClose={() => setShowHelpTooltip(null)}
                              />
                            )}
                          </AnimatePresence>
                          
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
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold">Begründung der Maßnahmen</h3>
                            <button
                              onClick={() => setShowHelpTooltip(showHelpTooltip === 5 ? null : 5)}
                              className={`
                                inline-flex items-center gap-1.5 px-3 py-1.5 
                                text-xs font-medium rounded-full
                                transition-all duration-200 
                                ${showHelpTooltip === 5 
                                  ? 'bg-gray-900 text-white shadow-md' 
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                                }
                              `}
                            >
                              <Info className="h-3.5 w-3.5" />
                              <span>Anleitung</span>
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Begründen Sie fachlich, warum Sie diese Maßnahmen gewählt haben.
                          </p>
                          
                          <AnimatePresence>
                            {showHelpTooltip === 5 && (
                              <HelpTooltip 
                                content={pflegeplanungHilfe[5]} 
                                onClose={() => setShowHelpTooltip(null)}
                              />
                            )}
                          </AnimatePresence>
                          
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
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold">Evaluationsmöglichkeiten</h3>
                            <button
                              onClick={() => setShowHelpTooltip(showHelpTooltip === 6 ? null : 6)}
                              className={`
                                inline-flex items-center gap-1.5 px-3 py-1.5 
                                text-xs font-medium rounded-full
                                transition-all duration-200 
                                ${showHelpTooltip === 6 
                                  ? 'bg-gray-900 text-white shadow-md' 
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                                }
                              `}
                            >
                              <Info className="h-3.5 w-3.5" />
                              <span>Anleitung</span>
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Wie werden Sie den Erfolg Ihrer Pflegeplanung überprüfen?
                          </p>
                          
                          <AnimatePresence>
                            {showHelpTooltip === 6 && (
                              <HelpTooltip 
                                content={pflegeplanungHilfe[6]} 
                                onClose={() => setShowHelpTooltip(null)}
                              />
                            )}
                          </AnimatePresence>
                          
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
                            className="bg-slate-800 hover:bg-slate-900 text-white border-0"
                          >
                            <Brain className="h-4 w-4 mr-2" />
                            KI-Bewertung
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
                          className="bg-slate-800 hover:bg-slate-900 text-white border-0"
                        >
                          <Brain className="h-4 w-4 mr-2" />
                          KI-Bewertung
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
                  <h2 className="text-2xl font-light text-gray-900">KI-Bewertung</h2>
                  <Button
                    variant="outline"
                    onClick={() => setShowReview(false)}
                    className="border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700"
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
          <h1 className="text-5xl font-light text-gray-900 mb-4">
            Fallbeispiel Generator
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Erstellen Sie maßgeschneiderte Fallbeispiele für die Pflegeausbildung
          </p>
          {isStreaming && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 inline-flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full"
            >
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              <span className="text-sm text-green-700 font-medium">Live Generierung aktiv</span>
            </motion.div>
          )}
        </motion.div>

        {/* Progress Steps */}
        {currentStep < 7 && (
          <div className="mb-16">
            <div className="relative mb-8">
              {/* Progress Line Background */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 transform -translate-y-1/2" />
              
              {/* Active Progress Line */}
              <div 
                className="absolute top-1/2 left-0 h-px bg-gray-800 transform -translate-y-1/2 transition-all duration-500"
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
                          ? 'border-gray-800' 
                          : isCompleted 
                            ? 'border-gray-800 bg-gray-800'
                            : 'border-gray-300'
                        }
                      `}>
                        {isCompleted && (
                          <div className="absolute inset-1 bg-white rounded-full" />
                        )}
                        {isActive && (
                          <div className="absolute inset-1.5 bg-gray-800 rounded-full" />
                        )}
                      </div>
                      
                      {/* Step Label */}
                      <div className="mt-3 text-center">
                        <p className={`text-xs font-medium transition-colors ${
                          isActive || isCompleted ? 'text-gray-800' : 'text-gray-400'
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
              className="px-8 bg-slate-800 hover:bg-slate-900 text-white"
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