import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  BookOpen, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Play,
  ChevronDown,
  ChevronRight,
  Search,
  Home,
  Settings,
  Pause,
  X,
  Clock,
  BarChart3,
  Tag
} from 'lucide-react'
import { Button, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useQuizStore } from '../store/quizStore'
import { useAuthStore } from '../store/authStore'
import { caseService } from '../services/caseService'
import AILoadingAnimation from '../components/AILoadingAnimation'
import { quizCategories } from '../data/quizData'
import { medicalBasicsCategories } from '../data/categories/medical-basics'
import { pathologyCategories } from '../data/categories/pathology'
import { pharmacologyCategories } from '../data/categories/pharmacology'
import { nursingTheoriesCategories } from '../data/categories/nursing-theories'
import { nursingLawEthicsCategories } from '../data/categories/nursing-law-ethics'
import { nursingTechniquesCategories } from '../data/categories/nursing-techniques'
import { getAllChildCategoryIds, findCategoryById } from '../utils/categoryHelpers'

const QuizLernkarten = () => {
  const { user } = useAuthStore()
  const {
    currentSession,
    selectedCategories,
    selectedDifficulty,
    studyMode,
    flashcards,
    currentFlashcardIndex,
    showFlashcardAnswer,
    startQuiz,
    answerQuestion,
    nextQuestion,
    endQuiz,
    setStudyMode,
    startFlashcards,
    nextFlashcard,
    rateFlashcard,
    resetSession,
    setSelectedCategories,
    clearSelectedCategories,
    setSelectedDifficulty
  } = useQuizStore()

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [currentView, setCurrentView] = useState<'main' | 'subcategory' | 'detail'>('main')
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<any>(null)
  const [navigationPath, setNavigationPath] = useState<string[]>([])
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false)
  const [isGeneratingFlashcards, setIsGeneratingFlashcards] = useState(false)
  const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [showSessionMenu, setShowSessionMenu] = useState(false)

  const handleStartQuiz = async () => {
    if (selectedCategories.length === 0) {
      alert('Bitte wählen Sie mindestens eine Kategorie aus.')
      return
    }
    if (!user) {
      alert('Bitte melden Sie sich an, um Quiz zu generieren.')
      return
    }

    setIsGeneratingQuiz(true)
    
    try {
      const quizData = await caseService.generateQuiz(selectedCategories, selectedDifficulty, user.id)
      
      // Start Quiz with generated questions
      if (quizData?.questions) {
        // Convert AI format to store format
        const formattedQuestions = quizData.questions.map((q: any) => ({
          id: Math.random().toString(),
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          difficulty: q.difficulty,
          category: q.category
        }))
        
        // Start quiz with generated questions using proper session structure
        const session = {
          id: Date.now().toString(),
          categoryId: selectedCategories[0] || 'ai-generated',
          questions: formattedQuestions,
          currentQuestionIndex: 0,
          answers: new Array(formattedQuestions.length).fill(null),
          startTime: new Date(),
          score: 0,
          completed: false
        }
        
        useQuizStore.setState({
          currentSession: session
        })
      }
    } catch (error) {
      console.error('Quiz generation error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Fehler beim Generieren des Quiz'
      alert(errorMessage)
    } finally {
      setIsGeneratingQuiz(false)
    }
  }

  const handleStartFlashcards = async () => {
    if (selectedCategories.length === 0) {
      alert('Bitte wählen Sie mindestens eine Kategorie aus.')
      return
    }
    if (!user) {
      alert('Bitte melden Sie sich an, um Lernkarten zu generieren.')
      return
    }

    setIsGeneratingFlashcards(true)
    
    try {
      const flashcardData = await caseService.generateFlashcards(selectedCategories, user.id)
      
      // Start Flashcards with generated cards
      if (flashcardData?.flashcards) {
        // Convert AI format to store format
        const formattedFlashcards = flashcardData.flashcards.map((fc: any) => ({
          id: Math.random().toString(),
          front: fc.front,
          back: fc.back,
          difficulty: fc.difficulty,
          category: fc.category
        }))
        
        // Start flashcards with generated cards
        useQuizStore.setState({
          flashcards: formattedFlashcards,
          currentFlashcardIndex: 0,
          showFlashcardAnswer: false
        })
      }
    } catch (error) {
      console.error('Flashcard generation error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Fehler beim Generieren der Lernkarten'
      alert(errorMessage)
    } finally {
      setIsGeneratingFlashcards(false)
    }
  }

  const handleAnswerSelect = (answerIndex: number) => {
    console.log('Answer selected:', answerIndex, 'Current selected:', selectedAnswer)
    
    if (selectedAnswer !== null) return // Already answered
    
    setSelectedAnswer(answerIndex)
    
    // Update score for AI-generated quizzes
    const { currentSession } = useQuizStore.getState()
    if (currentSession) {
      const currentQuestion = currentSession.questions[currentSession.currentQuestionIndex]
      const isCorrect = answerIndex === currentQuestion.correctAnswer
      const newScore = currentSession.score + (isCorrect ? 1 : 0)
      
      const newAnswers = [...currentSession.answers]
      newAnswers[currentSession.currentQuestionIndex] = answerIndex
      
      useQuizStore.setState({
        currentSession: {
          ...currentSession,
          answers: newAnswers,
          score: newScore
        }
      })
    }
    
    // Always show explanation after selecting an answer
    setShowExplanation(true)
    console.log('After setting - selectedAnswer:', answerIndex, 'showExplanation:', true)
  }

  const handleNextQuestion = () => {
    const { currentSession } = useQuizStore.getState()
    if (!currentSession) return
    
    const nextIndex = currentSession.currentQuestionIndex + 1
    
    if (nextIndex >= currentSession.questions.length) {
      // Quiz completed
      const completedSession = {
        ...currentSession,
        currentQuestionIndex: nextIndex,
        endTime: new Date(),
        completed: true
      }
      
      useQuizStore.setState({ currentSession: completedSession })
      // Reset categories after quiz completion
      setTimeout(() => {
        endQuiz()
      }, 100)
    } else {
      // Next question
      useQuizStore.setState({
        currentSession: {
          ...currentSession,
          currentQuestionIndex: nextIndex
        }
      })
    }
    
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  const toggleFlashcardAnswer = () => {
    useQuizStore.setState({ showFlashcardAnswer: !showFlashcardAnswer })
  }

  const currentQuestion = currentSession?.questions[currentSession.currentQuestionIndex]
  const currentFlashcard = flashcards[currentFlashcardIndex]
  const isQuizCompleted = currentSession?.completed


  // Navigation functions
  const navigateToMain = (categoryType: string) => {
    setSelectedMainCategory(categoryType)
    setCurrentView('subcategory')
    setNavigationPath([categoryType])
  }

  const navigateToDetail = (subcategory: any) => {
    setSelectedSubcategory(subcategory)
    setCurrentView('detail')
    setNavigationPath([...navigationPath, subcategory.name])
  }

  const navigateBack = () => {
    if (currentView === 'detail') {
      setCurrentView('subcategory')
      setSelectedSubcategory(null)
      setNavigationPath(navigationPath.slice(0, -1))
    } else if (currentView === 'subcategory') {
      setCurrentView('main')
      setSelectedMainCategory(null)
      setNavigationPath([])
      // Clear selected categories when going back to main
      clearSelectedCategories()
    }
  }

  const navigateHome = () => {
    setCurrentView('main')
    setSelectedMainCategory(null)
    setSelectedSubcategory(null)
    setNavigationPath([])
    // Clear selected categories when navigating home
    clearSelectedCategories()
  }

  // Enhanced navigation functions
  const navigateToLevel = (level: number) => {
    if (level === 0) {
      navigateHome()
    } else if (level === 1 && navigationPath.length > 1) {
      setCurrentView('subcategory')
      setSelectedSubcategory(null)
      setNavigationPath([navigationPath[0]])
    }
  }

  const startSession = (mode: 'quiz' | 'flashcards') => {
    setSessionStartTime(new Date())
    setIsPaused(false)
    if (mode === 'quiz') {
      handleStartQuiz()
    } else {
      handleStartFlashcards()
    }
  }

  const pauseSession = () => {
    setIsPaused(!isPaused)
  }

  const exitSession = () => {
    if (confirm('Möchten Sie die aktuelle Sitzung wirklich beenden? Ihr Fortschritt geht verloren.')) {
      resetSession()
      setSessionStartTime(null)
      setIsPaused(false)
    }
  }

  const formatElapsedTime = () => {
    if (!sessionStartTime) return '0:00'
    const elapsed = Math.floor((Date.now() - sessionStartTime.getTime()) / 1000)
    const minutes = Math.floor(elapsed / 60)
    const seconds = elapsed % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const getSessionProgress = () => {
    if (currentSession) {
      return {
        current: currentSession.currentQuestionIndex + 1,
        total: currentSession.questions.length,
        percentage: ((currentSession.currentQuestionIndex + 1) / currentSession.questions.length) * 100
      }
    }
    if (flashcards.length > 0) {
      return {
        current: currentFlashcardIndex + 1,
        total: flashcards.length,
        percentage: ((currentFlashcardIndex + 1) / flashcards.length) * 100
      }
    }
    return { current: 0, total: 0, percentage: 0 }
  }

  const selectCategory = (categoryId: string) => {
    // Find the category in all category lists
    const allCategories = [
      ...medicalBasicsCategories,
      ...pathologyCategories,
      ...pharmacologyCategories,
      ...nursingTheoriesCategories,
      ...nursingLawEthicsCategories,
      ...nursingTechniquesCategories
    ]
    
    const category = findCategoryById(allCategories, categoryId)
    
    if (category) {
      // Get all child category IDs including the selected one
      const allCategoryIds = getAllChildCategoryIds(category)
      
      // Single-select behavior: replace previous selection
      const newSelection = selectedCategories.includes(categoryId)
        ? [] // If already selected, deselect it
        : allCategoryIds // Select this category and all its children
      setSelectedCategories(newSelection)
    } else {
      // Fallback for categories not in hierarchical structure
      const newSelection = selectedCategories.includes(categoryId)
        ? []
        : [categoryId]
      setSelectedCategories(newSelection)
    }
  }

  // Get all leaf categories (categories without children)
  const getAllLeafCategories = (categories: any[]): any[] => {
    let leafCategories: any[] = []
    categories.forEach(category => {
      if (!category.children || category.children.length === 0) {
        leafCategories.push(category)
      } else {
        leafCategories = leafCategories.concat(getAllLeafCategories(category.children))
      }
    })
    return leafCategories
  }

  // Enhanced Navigation Components
  const NavigationHeader = () => {
    const isInSession = currentSession || flashcards.length > 0
    const progress = getSessionProgress()
    
    return (
      <div className="sticky top-0 bg-white border-b border-gray-200 z-40 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
              {selectedCategories.length > 0 && (
              <SelectedCategoriesChips />
            )}
          </div>
          
          <div className="flex items-center gap-3">
            {isInSession && (
              <>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {formatElapsedTime()}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BarChart3 className="w-4 h-4" />
                  {progress.current}/{progress.total}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSessionMenu(!showSessionMenu)}
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </>
            )}
            {!isInSession && currentView !== 'main' && (
              <Button
                variant="outline"
                size="sm"
                onClick={navigateHome}
              >
                <Home className="w-4 h-4 mr-2" />
                Zur Übersicht
              </Button>
            )}
          </div>
        </div>
        
        {isInSession && (
          <div className="mt-3">
            <ProgressBar percentage={progress.percentage} />
          </div>
        )}
        
        {showSessionMenu && (
          <SessionMenu onClose={() => setShowSessionMenu(false)} />
        )}
      </div>
    )
  }

  const BreadcrumbNav = () => (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={navigateHome}
        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <Home className="w-4 h-4" />
        Quiz & Lernkarten
      </button>
      {navigationPath.map((pathItem, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <button
            onClick={() => navigateToLevel(index + 1)}
            className={`transition-colors ${
              index === navigationPath.length - 1 
                ? 'text-gray-900 font-medium cursor-default' 
                : 'text-blue-600 hover:text-blue-800'
            }`}
            disabled={index === navigationPath.length - 1}
          >
            {pathItem}
          </button>
        </div>
      ))}
    </div>
  )

  const SelectedCategoriesChips = () => (
    <div className="flex items-center gap-2">
      <Tag className="w-4 h-4 text-gray-500" />
      <div className="flex flex-wrap gap-1">
        {selectedCategories.slice(0, 3).map((categoryId, index) => {
          const allCategories = [
            ...medicalBasicsCategories,
            ...pathologyCategories,
            ...pharmacologyCategories,
            ...nursingTheoriesCategories,
            ...nursingLawEthicsCategories,
            ...nursingTechniquesCategories
          ]
          const category = findCategoryById(allCategories, categoryId)
          return (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {category?.name || categoryId}
            </span>
          )
        })}
        {selectedCategories.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            +{selectedCategories.length - 3} weitere
          </span>
        )}
      </div>
    </div>
  )

  const ProgressBar = ({ percentage }: { percentage: number }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )

  const SessionMenu = ({ onClose }: { onClose: () => void }) => (
    <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-48 z-50">
      <Button
        variant="ghost"
        size="sm"
        onClick={pauseSession}
        className="w-full justify-start"
      >
        <Pause className="w-4 h-4 mr-2" />
        {isPaused ? 'Fortsetzen' : 'Pausieren'}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          exitSession()
          onClose()
        }}
        className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
      >
        <X className="w-4 h-4 mr-2" />
        Sitzung beenden
      </Button>
    </div>
  )

  // Category Grid Component - shows categories in a clean grid
  const CategoryGrid = ({ categories, color = 'blue' }: { categories: any[], color?: string }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => {
          const isSelected = selectedCategories.includes(category.id)
          const hasChildren = category.children && category.children.length > 0
          
          return (
            <motion.div 
              key={category.id} 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => selectCategory(category.id)}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left group ${
                  isSelected
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md bg-white'
                }`}
              >
                <div className="text-2xl mb-3">{category.icon}</div>
                <div className="text-sm font-medium mb-2 text-gray-900">{category.name}</div>
                <div className="text-xs text-gray-600 font-light leading-relaxed">{category.description}</div>
                {hasChildren && (
                  <div className="text-xs text-gray-500 mt-2">
                    {category.children.length} Unterkategorien
                  </div>
                )}
              </motion.button>
              {hasChildren && (
                <button
                  onClick={() => navigateToDetail(category)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-white shadow-sm hover:shadow border border-gray-200 hover:border-gray-300 transition-all"
                  title="Details anzeigen"
                >
                  <ChevronRight className="w-3 h-3 text-gray-600" />
                </button>
              )}
            </motion.div>
          )
        })}
      </div>
    )
  }

  // Main Category Selection View - Extended Grid Interface
  const MainCategorySelection = () => (
    <div className="mb-12">
      <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Lernbereiche</h2>
      <p className="text-gray-600 font-light text-center mb-8">Wähle einen Fachbereich aus, um mit dem Lernen zu beginnen.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Anatomie & Physiologie */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigateToMain('anatomy')}
          className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg text-left h-32"
        >
          <span className="text-4xl flex-shrink-0">🏥</span>
          <div className="flex-1 min-w-0">
            <div className="text-lg font-medium text-gray-900 mb-1">Anatomie & Physiologie</div>
            <div className="text-gray-600 text-sm font-light mb-2">Körperaufbau und Funktionen</div>
            <div className="text-xs text-gray-500">9 Organsysteme • 287 Lernkategorien</div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </motion.button>
        
        {/* Krankheitslehre */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigateToMain('pathology')}
          className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg text-left h-32"
        >
          <span className="text-4xl flex-shrink-0">🦠</span>
          <div className="flex-1 min-w-0">
            <div className="text-lg font-medium text-gray-900 mb-1">Krankheitslehre</div>
            <div className="text-gray-600 text-sm font-light mb-2">Pathologie und Erkrankungen</div>
            <div className="text-xs text-gray-500">8 Fachbereiche • 84 Krankheitsbilder</div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </motion.button>

        {/* Pharmakologie */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigateToMain('pharmacology')}
          className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg text-left h-32"
        >
          <span className="text-4xl flex-shrink-0">💊</span>
          <div className="flex-1 min-w-0">
            <div className="text-lg font-medium text-gray-900 mb-1">Pharmakologie</div>
            <div className="text-gray-600 text-sm font-light mb-2">Medikamente und Wirkweisen</div>
            <div className="text-xs text-gray-500">
              {pharmacologyCategories[0]?.children?.length || 0} Medikamentengruppen • 
              {pharmacologyCategories[0]?.children?.reduce((total, group) => 
                total + (group.children?.length || 0), 0)} Kategorien
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </motion.button>

        {/* Pflegetheorien & -modelle */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigateToMain('nursing-theories')}
          className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg text-left h-32"
        >
          <span className="text-4xl flex-shrink-0">📚</span>
          <div className="flex-1 min-w-0">
            <div className="text-lg font-medium text-gray-900 mb-1">Pflegetheorien & -modelle</div>
            <div className="text-gray-600 text-sm font-light mb-2">Theoretische Grundlagen</div>
            <div className="text-xs text-gray-500">
              {nursingTheoriesCategories[0]?.children?.length || 0} Theoriekategorien • 
              {nursingTheoriesCategories[0]?.children?.reduce((total, group) => 
                total + (group.children?.length || 0), 0)} Theoretiker
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </motion.button>

        {/* Pflegetechniken & Interventionen */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigateToMain('nursing-techniques')}
          className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg text-left h-32"
        >
          <span className="text-4xl flex-shrink-0">🩺</span>
          <div className="flex-1 min-w-0">
            <div className="text-lg font-medium text-gray-900 mb-1">Pflegetechniken & Interventionen</div>
            <div className="text-gray-600 text-sm font-light mb-2">Praktische Fertigkeiten</div>
            <div className="text-xs text-gray-500">
              {nursingTechniquesCategories[0]?.children?.length || 0} Hauptbereiche • 
              {nursingTechniquesCategories[0]?.children?.reduce((total, group) => 
                total + (group.children?.length || 0), 0)} Techniken
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </motion.button>

        {/* Assessment & Diagnostik */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigateToMain('assessment')}
          className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg text-left h-32"
        >
          <span className="text-4xl flex-shrink-0">🔍</span>
          <div className="flex-1 min-w-0">
            <div className="text-lg font-medium text-gray-900 mb-1">Assessment & Diagnostik</div>
            <div className="text-gray-600 text-sm font-light mb-2">Einschätzung und Bewertung</div>
            <div className="text-xs text-gray-500">Bald verfügbar</div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </motion.button>

        {/* Pflegerecht & Ethik */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigateToMain('nursing-law-ethics')}
          className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg text-left h-32"
        >
          <span className="text-4xl flex-shrink-0">⚖️</span>
          <div className="flex-1 min-w-0">
            <div className="text-lg font-medium text-gray-900 mb-1">Pflegerecht & Ethik</div>
            <div className="text-gray-600 text-sm font-light mb-2">Rechtliche und ethische Grundlagen</div>
            <div className="text-xs text-gray-500">
              {nursingLawEthicsCategories[0]?.children?.length || 0} Rechtsbereiche • 
              {nursingLawEthicsCategories[0]?.children?.reduce((total, group) => 
                total + (group.children?.length || 0), 0)} Kategorien
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </motion.button>

        {/* Pflegeorganisation & Management */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 7 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigateToMain('nursing-management')}
          className="group flex items-center gap-4 p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg text-left h-32"
        >
          <span className="text-4xl flex-shrink-0">📋</span>
          <div className="flex-1 min-w-0">
            <div className="text-lg font-medium text-gray-900 mb-1">Pflegeorganisation & Management</div>
            <div className="text-gray-600 text-sm font-light mb-2">Organisation und Führung</div>
            <div className="text-xs text-gray-500">Bald verfügbar</div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </motion.button>
      </div>
    </div>
  )

  // Subcategory View - Shows main systems
  const SubcategoryView = () => {
    if (selectedMainCategory === 'anatomy') {
      return (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-2">🏥 Anatomie & Physiologie</h2>
              <p className="text-gray-600 font-light">Wähle ein Organsystem aus, um die Details zu sehen:</p>
            </div>
            <Button variant="outline" onClick={navigateBack} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </div>
          <CategoryGrid 
            categories={medicalBasicsCategories[0]?.children || []}
            color="blue"
          />
        </div>
      )
    }
    
    if (selectedMainCategory === 'pathology') {
      return (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-2">🦠 Krankheitslehre</h2>
              <p className="text-gray-600 font-light">Wähle einen Krankheitsbereich aus, um die Details zu sehen:</p>
            </div>
            <Button variant="outline" onClick={navigateBack} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </div>
          <CategoryGrid 
            categories={pathologyCategories[0]?.children || []}
            color="red"
          />
        </div>
      )
    }

    // Pharmakologie - Detaillierte Struktur aus importierten Kategorien
    if (selectedMainCategory === 'pharmacology') {

      return (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-2">💊 Pharmakologie</h2>
              <p className="text-gray-600 font-light">Medikamente und Wirkweisen</p>
            </div>
            <Button variant="outline" onClick={navigateBack} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </div>
          <CategoryGrid 
            categories={pharmacologyCategories[0]?.children || []}
            color="purple"
          />
        </div>
      )
    }

    if (selectedMainCategory === 'nursing-theories') {
      return (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-2">🎯 Pflegetheorien & -modelle</h2>
              <p className="text-gray-600 font-light">Theoretische Grundlagen der Pflege</p>
            </div>
            <Button variant="outline" onClick={navigateBack} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </div>
          <CategoryGrid 
            categories={nursingTheoriesCategories[0]?.children || []}
            color="green"
          />
        </div>
      )
    }

    if (selectedMainCategory === 'nursing-law-ethics') {
      return (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-2">⚖️ Pflegerecht & Ethik</h2>
              <p className="text-gray-600 font-light">Rechtliche und ethische Grundlagen der Pflege</p>
            </div>
            <Button variant="outline" onClick={navigateBack} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </div>
          <CategoryGrid 
            categories={nursingLawEthicsCategories[0]?.children || []}
            color="red"
          />
        </div>
      )
    }

    if (selectedMainCategory === 'nursing-techniques') {
      return (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-2">🩺 Pflegetechniken & Interventionen</h2>
              <p className="text-gray-600 font-light">Praktische Fertigkeiten in der Pflege</p>
            </div>
            <Button variant="outline" onClick={navigateBack} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </div>
          <CategoryGrid 
            categories={nursingTechniquesCategories[0]?.children || []}
            color="blue"
          />
        </div>
      )
    }

    if (selectedMainCategory === 'assessment') {
      const assessmentCategories = [
        {
          id: 'nursing-assessment',
          name: 'Pflegeassessment',
          description: 'Erstassessment, SIS, Risikoscreening',
          icon: '🔍'
        },
        {
          id: 'functional-assessment',
          name: 'Funktionsassessment',
          description: 'ADL, Mobilität, Kognition, Kommunikation',
          icon: '🏃'
        },
        {
          id: 'special-assessments',
          name: 'Spezielle Assessments',
          description: 'Schmerz, Ernährung, Wund-, Dekubitus-, Sturzassessment',
          icon: '📊'
        },
        {
          id: 'psychosocial-assessment',
          name: 'Psychosoziales Assessment',
          description: 'Depression, Angst, Lebensqualität, soziale Situation',
          icon: '🧠'
        },
        {
          id: 'care-grade-assessment',
          name: 'Pflegegradassessment (NBA)',
          description: 'Module, Bewertung, Pflegegrade 1-5',
          icon: '📋'
        },
        {
          id: 'nursing-diagnostics',
          name: 'Pflegediagnostik',
          description: 'NANDA-I, NOC, NIC, Evaluation',
          icon: '🩺'
        }
      ]

      return (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-2">🔍 Assessment & Diagnostik</h2>
              <p className="text-gray-600 font-light">Einschätzung und Bewertung</p>
            </div>
            <Button variant="outline" onClick={navigateBack} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </div>
          <CategoryGrid 
            categories={assessmentCategories}
            color="orange"
          />
        </div>
      )
    }

    if (selectedMainCategory === 'nursing-management') {
      const nursingManagementCategories = [
        {
          id: 'quality-management',
          name: 'Qualitätsmanagement',
          description: 'Qualitätsdimensionen, QM-Systeme, Standards, Audits',
          icon: '📋'
        },
        {
          id: 'hygiene-infection-control',
          name: 'Hygiene & Infektionsschutz',
          description: 'Basishygiene, Isolation, nosokomiale Infektionen',
          icon: '🧼'
        },
        {
          id: 'personnel-management',
          name: 'Personalmanagement',
          description: 'Personalplanung, -entwicklung, Führung, BGM',
          icon: '👥'
        },
        {
          id: 'nursing-organization',
          name: 'Pflegeorganisation',
          description: 'Organisationsformen, Schnittstellen, Prozesse, Digitalisierung',
          icon: '🏢'
        }
      ]

      return (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-2">📋 Pflegeorganisation & Management</h2>
              <p className="text-gray-600 font-light">Organisation und Führung in der Pflege</p>
            </div>
            <Button variant="outline" onClick={navigateBack} className="shrink-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
          </div>
          <CategoryGrid 
            categories={nursingManagementCategories}
            color="gray"
          />
        </div>
      )
    }
    
    return null
  }

  // Detail View - Shows deepest level categories
  const DetailView = () => (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-2">
            {selectedSubcategory?.icon} {selectedSubcategory?.name}
          </h2>
          <p className="text-gray-600 font-light">{selectedSubcategory?.description}</p>
        </div>
        <Button variant="outline" onClick={navigateBack} className="shrink-0">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück
        </Button>
      </div>
      {selectedSubcategory?.children && (
        <CategoryGrid 
          categories={selectedSubcategory.children}
          color={selectedMainCategory === 'pathology' ? 'red' : 'blue'}
        />
      )}
    </div>
  )

  // Category Selection Logic
  const CategorySelection = () => {
    if (currentView === 'detail' && selectedSubcategory) {
      return <DetailView />
    }
    if (currentView === 'subcategory' && selectedMainCategory) {
      return <SubcategoryView />
    }
    return <MainCategorySelection />
  }


  // Quiz Interface
  const QuizInterface = () => {
    if (!currentQuestion) return null

    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle>
              Frage {(currentSession?.currentQuestionIndex || 0) + 1} von {currentSession?.questions.length || 15}
            </CardTitle>
            <div className="flex items-center gap-4">
              <span className={`px-2 py-1 rounded text-sm ${
                currentQuestion.difficulty === 'leicht' ? 'bg-green-100 text-green-700' :
                currentQuestion.difficulty === 'mittel' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {currentQuestion.difficulty}
              </span>
              <span className="text-sm text-gray-600">
                Punkte: {currentSession?.score}/{currentSession?.questions.length}
              </span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${((currentSession?.currentQuestionIndex || 0) + 1) / (currentSession?.questions.length || 15) * 100}%` 
              }}
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-4">{currentQuestion.question}</h3>
            
            {selectedAnswer === null && (
              <p className="text-sm text-gray-600 mb-4">
                💡 Wähle eine Antwort aus, um fortzufahren
              </p>
            )}
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 ${
                    selectedAnswer === null
                      ? 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer'
                      : selectedAnswer === index
                        ? index === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : index === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 bg-gray-50'
                  } ${selectedAnswer !== null ? 'cursor-default' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {selectedAnswer !== null && (
                      <span>
                        {index === currentQuestion.correctAnswer ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : selectedAnswer === index ? (
                          <XCircle className="w-5 h-5 text-red-600" />
                        ) : null}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Show explanation immediately after answer selection */}
            {showExplanation && selectedAnswer !== null && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-medium mb-2 flex items-center">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 mr-2" />
                  )}
                  {selectedAnswer === currentQuestion.correctAnswer ? 'Richtig!' : 'Leider falsch'}
                </h4>
                <p className="text-gray-700 mb-2">
                  <strong>Erklärung:</strong> {currentQuestion.explanation || 'Keine Erklärung verfügbar.'}
                </p>
                {selectedAnswer !== currentQuestion.correctAnswer && (
                  <p className="text-sm text-gray-600">
                    <strong>Richtige Antwort:</strong> {currentQuestion.options[currentQuestion.correctAnswer]}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                resetSession()
                setSelectedAnswer(null)
                setShowExplanation(false)
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Auswahl
            </Button>
            
            {/* Always show next button, but enable only after answer selection */}
            <Button 
              onClick={handleNextQuestion} 
              disabled={selectedAnswer === null}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {(currentSession?.currentQuestionIndex || 0) < (currentSession?.questions.length || 0) - 1 ? (
                <>
                  Nächste Frage
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Quiz beenden
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Flashcard Interface
  const FlashcardInterface = () => {
    if (!currentFlashcard) return null

    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>
              Lernkarte {currentFlashcardIndex + 1} von {flashcards.length}
            </CardTitle>
            <span className={`px-2 py-1 rounded text-sm ${
              currentFlashcard.difficulty === 'leicht' ? 'bg-green-100 text-green-700' :
              currentFlashcard.difficulty === 'mittel' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {currentFlashcard.difficulty}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="min-h-[300px] flex flex-col">
            <div className="flex-1 mb-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  {!showFlashcardAnswer ? (
                    <div>
                      <h3 className="text-xl font-medium mb-4">Frage:</h3>
                      <p className="text-lg">{currentFlashcard.front}</p>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-medium mb-4">Antwort:</h3>
                      <div className="text-left whitespace-pre-line">{currentFlashcard.back}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={() => {
                  resetSession()
                  useQuizStore.setState({ showFlashcardAnswer: false })
                }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Auswahl
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={toggleFlashcardAnswer}
                >
                  {showFlashcardAnswer ? (
                    <>
                      <EyeOff className="w-4 h-4 mr-2" />
                      Frage zeigen
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 mr-2" />
                      Antwort zeigen
                    </>
                  )}
                </Button>

                {showFlashcardAnswer && (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => rateFlashcard('again')}
                      className="text-red-600 hover:text-red-700"
                    >
                      Nochmal
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => rateFlashcard('hard')}
                      className="text-orange-600 hover:text-orange-700"
                    >
                      Schwer
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => rateFlashcard('good')}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Gut
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => rateFlashcard('easy')}
                      className="text-green-600 hover:text-green-700"
                    >
                      Einfach
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Quiz Results
  const QuizResults = () => {
    if (!currentSession || !isQuizCompleted) return null

    const scorePercentage = Math.round((currentSession.score / currentSession.questions.length) * 100)
    
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Quiz abgeschlossen!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6">
            <div className={`text-6xl font-bold mb-2 ${
              scorePercentage >= 80 ? 'text-green-600' :
              scorePercentage >= 60 ? 'text-yellow-600' :
              'text-red-600'
            }`}>
              {scorePercentage}%
            </div>
            <div className="text-xl text-gray-600">
              {currentSession.score} von {currentSession.questions.length} richtig
            </div>
          </div>

          <div className="mb-6">
            {scorePercentage >= 90 ? (
              <div className="text-green-600">
                🎉 Ausgezeichnet! Du beherrschst das Thema sehr gut.
              </div>
            ) : scorePercentage >= 70 ? (
              <div className="text-blue-600">
                👍 Gut gemacht! Du bist auf dem richtigen Weg.
              </div>
            ) : scorePercentage >= 50 ? (
              <div className="text-yellow-600">
                📚 Noch etwas Übung nötig. Wiederhole die Themen.
              </div>
            ) : (
              <div className="text-red-600">
                💪 Nicht aufgeben! Mehr Übung wird helfen.
              </div>
            )}
          </div>

          <div className="flex gap-4 justify-center">
            <Button onClick={() => startQuiz(selectedCategories, selectedDifficulty)}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Quiz wiederholen
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                resetSession()
                setSelectedAnswer(null)
                setShowExplanation(false)
              }}
            >
              Neue Auswahl
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }


  // Loading state for quiz generation
  if (isGeneratingQuiz) {
    return (
      <div className="min-h-screen bg-white">
        <NavigationHeader />
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light text-gray-900 mb-4">
              Quiz wird generiert
            </h1>
            <p className="text-gray-600">
              Die KI erstellt maßgeschneiderte Fragen für deine Lernbereiche...
            </p>
          </div>
          <AILoadingAnimation message="Quiz wird generiert..." size="lg" />
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => {
                setIsGeneratingQuiz(false)
                // Cancel any ongoing requests if possible
              }}
            >
              <X className="w-4 h-4 mr-2" />
              Abbrechen
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Loading state for flashcard generation
  if (isGeneratingFlashcards) {
    return (
      <div className="min-h-screen bg-white">
        <NavigationHeader />
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light text-gray-900 mb-4">
              Lernkarten werden generiert
            </h1>
            <p className="text-gray-600">
              Die KI erstellt personalisierte Lernkarten für deine Themen...
            </p>
          </div>
          <AILoadingAnimation message="Lernkarten werden generiert..." size="lg" />
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => {
                setIsGeneratingFlashcards(false)
                // Cancel any ongoing requests if possible
              }}
            >
              <X className="w-4 h-4 mr-2" />
              Abbrechen
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Main render logic
  if (isQuizCompleted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <QuizResults />
      </div>
    )
  }

  if (currentSession) {
    return (
      <div className="container mx-auto px-4 py-8">
        <QuizInterface />
      </div>
    )
  }

  if (flashcards.length > 0 && selectedCategories.length > 0 && !isGeneratingFlashcards) {
    return (
      <div className="container mx-auto px-4 py-8">
        <FlashcardInterface />
      </div>
    )
  }

  // Main selection screen
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-light text-gray-900 mb-4">
              Quiz & Lernkarten
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Interaktives Lernsystem für die Pflegeausbildung
            </p>
          </motion.div>
        </div>

        <CategorySelection />

        <div className="text-center mt-12">
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => startSession('quiz')}
              disabled={selectedCategories.length === 0 || isGeneratingQuiz || isGeneratingFlashcards}
              className="px-8 py-3 text-base"
            >
              {isGeneratingQuiz ? (
                <>
                  <Brain className="w-5 h-5 mr-2 animate-spin" />
                  Quiz wird generiert...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Quiz starten
                </>
              )}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => startSession('flashcards')}
              disabled={selectedCategories.length === 0 || isGeneratingQuiz || isGeneratingFlashcards}
              className="px-8 py-3 text-base"
            >
              {isGeneratingFlashcards ? (
                <>
                  <Brain className="w-5 h-5 mr-2 animate-spin" />
                  Lernkarten werden generiert...
                </>
              ) : (
                <>
                  <BookOpen className="w-5 h-5 mr-2" />
                  Lernkarten starten
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizLernkarten