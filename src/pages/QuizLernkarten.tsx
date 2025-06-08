import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Brain, 
  BookOpen, 
  Target, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  Trophy,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Play,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Search,
  Home
} from 'lucide-react'
import { Button, Card, CardHeader, CardTitle, CardContent } from '../components/ui'
import { useQuizStore } from '../store/quizStore'
import { quizCategories } from '../data/quizData'
import { medicalBasicsCategories } from '../data/categories/medical-basics'
import { pathologyCategories } from '../data/categories/pathology'
import { StudyMode } from '../types/quiz'

const QuizLernkarten = () => {
  const {
    currentSession,
    stats,
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
    resetSession
  } = useQuizStore()

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [currentView, setCurrentView] = useState<'main' | 'subcategory' | 'detail'>('main')
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<any>(null)
  const [navigationPath, setNavigationPath] = useState<string[]>([])

  const studyModes: StudyMode[] = [
    {
      id: 'quiz',
      name: 'Quiz-Modus',
      description: 'Multiple-Choice Fragen beantworten',
      icon: '🧠'
    },
    {
      id: 'flashcards',
      name: 'Lernkarten',
      description: 'Karteikarten durchgehen und bewerten',
      icon: '📚'
    },
    {
      id: 'mixed',
      name: 'Gemischt',
      description: 'Quiz und Lernkarten abwechselnd',
      icon: '🎯'
    }
  ]

  const handleStartQuiz = () => {
    if (selectedCategories.length === 0) {
      alert('Bitte wählen Sie mindestens eine Kategorie aus.')
      return
    }
    startQuiz(selectedCategories, selectedDifficulty)
  }

  const handleStartFlashcards = () => {
    if (selectedCategories.length === 0) {
      alert('Bitte wählen Sie mindestens eine Kategorie aus.')
      return
    }
    startFlashcards(selectedCategories)
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return // Already answered
    
    setSelectedAnswer(answerIndex)
    answerQuestion(answerIndex)
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    setSelectedAnswer(null)
    setShowExplanation(false)
    nextQuestion()
  }

  const toggleFlashcardAnswer = () => {
    useQuizStore.setState({ showFlashcardAnswer: !showFlashcardAnswer })
  }

  const currentQuestion = currentSession?.questions[currentSession.currentQuestionIndex]
  const currentFlashcard = flashcards[currentFlashcardIndex]
  const isQuizCompleted = currentSession?.completed

  // Statistics Display
  const StatsDisplay = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardContent className="p-4 text-center">
          <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
          <div className="text-2xl font-bold">{stats.totalQuizzes}</div>
          <div className="text-sm text-gray-600">Abgeschlossene Quiz</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <Target className="w-8 h-8 mx-auto mb-2 text-green-500" />
          <div className="text-2xl font-bold">{Math.round(stats.averageScore)}%</div>
          <div className="text-sm text-gray-600">Durchschnitt</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <CheckCircle className="w-8 h-8 mx-auto mb-2 text-blue-500" />
          <div className="text-2xl font-bold">{stats.totalCorrectAnswers}</div>
          <div className="text-sm text-gray-600">Richtige Antworten</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <BarChart3 className="w-8 h-8 mx-auto mb-2 text-purple-500" />
          <div className="text-2xl font-bold">{stats.streak}</div>
          <div className="text-sm text-gray-600">Aktuelle Serie</div>
        </CardContent>
      </Card>
    </div>
  )

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
    }
  }

  const navigateHome = () => {
    setCurrentView('main')
    setSelectedMainCategory(null)
    setSelectedSubcategory(null)
    setNavigationPath([])
  }

  const selectCategory = (categoryId: string) => {
    const newSelection = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId]
    useQuizStore.setState({ selectedCategories: newSelection })
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

  // Breadcrumb Navigation
  const BreadcrumbNav = () => (
    <div className="flex items-center gap-2 mb-4 text-sm">
      <button
        onClick={navigateHome}
        className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
      >
        <Home className="w-4 h-4" />
        Start
      </button>
      {navigationPath.map((pathItem, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className={`${index === navigationPath.length - 1 ? 'text-gray-900 font-medium' : 'text-blue-600'}`}>
            {pathItem}
          </span>
        </div>
      ))}
    </div>
  )

  // Category Grid Component - shows categories in a clean grid
  const CategoryGrid = ({ categories, color = 'blue' }: { categories: any[], color?: string }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id)
          const hasChildren = category.children && category.children.length > 0
          
          return (
            <div key={category.id} className="relative">
              <button
                onClick={() => selectCategory(category.id)}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  isSelected
                    ? color === 'blue' 
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium mb-1">{category.name}</div>
                <div className="text-xs text-gray-600">{category.description}</div>
                {hasChildren && (
                  <div className="text-xs text-gray-500 mt-1">
                    {category.children.length} Unterkategorien
                  </div>
                )}
              </button>
              {hasChildren && (
                <button
                  onClick={() => navigateToDetail(category)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-white shadow hover:bg-gray-100"
                  title="Details anzeigen"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  // Main Category Selection View - Clean Two-Button Interface
  const MainCategorySelection = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Kategorien auswählen</CardTitle>
        <p className="text-gray-600">Wähle eine Hauptkategorie aus, um die Unterbereiche zu sehen.</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Anatomie & Physiologie */}
          <button
            onClick={() => navigateToMain('anatomy')}
            className="flex items-center gap-4 p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all"
          >
            <span className="text-4xl">🏥</span>
            <div className="text-left">
              <div className="text-xl font-semibold text-blue-700">Anatomie & Physiologie</div>
              <div className="text-blue-600">9 Hauptsysteme mit allen Unterbereichen</div>
              <div className="text-sm text-blue-500 mt-1">400+ detaillierte Kategorien</div>
            </div>
            <ChevronRight className="w-6 h-6 text-blue-500 ml-auto" />
          </button>
          
          {/* Krankheitslehre */}
          <button
            onClick={() => navigateToMain('pathology')}
            className="flex items-center gap-4 p-6 bg-red-50 rounded-xl border-2 border-red-200 hover:border-red-300 transition-all"
          >
            <span className="text-4xl">🦠</span>
            <div className="text-left">
              <div className="text-xl font-semibold text-red-700">Krankheitslehre</div>
              <div className="text-red-600">8 Hauptbereiche mit allen Unterbereichen</div>
              <div className="text-sm text-red-500 mt-1">Alle wichtigen Krankheitsbilder</div>
            </div>
            <ChevronRight className="w-6 h-6 text-red-500 ml-auto" />
          </button>
        </div>

      </CardContent>
    </Card>
  )

  // Subcategory View - Shows main systems
  const SubcategoryView = () => {
    if (selectedMainCategory === 'anatomy') {
      return (
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                <BreadcrumbNav />
                🏥 Anatomie & Physiologie
              </CardTitle>
              <Button variant="outline" onClick={navigateBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </Button>
            </div>
            <p className="text-gray-600">Wähle ein Organsystem aus, um die Details zu sehen:</p>
          </CardHeader>
          <CardContent>
            <CategoryGrid 
              categories={medicalBasicsCategories[0]?.children || []}
              color="blue"
            />
          </CardContent>
        </Card>
      )
    }
    
    if (selectedMainCategory === 'pathology') {
      return (
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                <BreadcrumbNav />
                🦠 Krankheitslehre
              </CardTitle>
              <Button variant="outline" onClick={navigateBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </Button>
            </div>
            <p className="text-gray-600">Wähle einen Krankheitsbereich aus, um die Details zu sehen:</p>
          </CardHeader>
          <CardContent>
            <CategoryGrid 
              categories={pathologyCategories[0]?.children || []}
              color="red"
            />
          </CardContent>
        </Card>
      )
    }
    
    return null
  }

  // Detail View - Shows deepest level categories
  const DetailView = () => (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            <BreadcrumbNav />
            {selectedSubcategory?.icon} {selectedSubcategory?.name}
          </CardTitle>
          <Button variant="outline" onClick={navigateBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
        </div>
        <p className="text-gray-600">{selectedSubcategory?.description}</p>
      </CardHeader>
      <CardContent>
        {selectedSubcategory?.children && (
          <CategoryGrid 
            categories={selectedSubcategory.children}
            color={selectedMainCategory === 'pathology' ? 'red' : 'blue'}
          />
        )}
      </CardContent>
    </Card>
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

  // Study Mode Selection
  const StudyModeSelection = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Lernmodus wählen</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {studyModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setStudyMode(mode.id)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                studyMode === mode.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-3xl mb-2">{mode.icon}</div>
              <div className="font-medium mb-1">{mode.name}</div>
              <div className="text-sm text-gray-600">{mode.description}</div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  // Quiz Interface
  const QuizInterface = () => {
    if (!currentQuestion) return null

    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>
              Frage {(currentSession?.currentQuestionIndex || 0) + 1} von {currentSession?.questions.length}
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
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-4">{currentQuestion.question}</h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === null
                      ? 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      : selectedAnswer === index
                        ? index === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : index === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 bg-gray-50'
                  }`}
                  whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                  whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
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
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
                >
                  <h4 className="font-medium mb-2">Erklärung:</h4>
                  <p className="text-gray-700">{currentQuestion.explanation}</p>
                </motion.div>
              )}
            </AnimatePresence>
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
            
            {showExplanation && (
              <Button onClick={handleNextQuestion}>
                {(currentSession?.currentQuestionIndex || 0) < (currentSession?.questions.length || 0) - 1 ? (
                  <>
                    Nächste Frage
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  'Quiz beenden'
                )}
              </Button>
            )}
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

  // Main render logic
  if (isQuizCompleted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <QuizResults />
      </div>
    )
  }

  if (currentSession && studyMode === 'quiz') {
    return (
      <div className="container mx-auto px-4 py-8">
        <QuizInterface />
      </div>
    )
  }

  if (flashcards.length > 0 && studyMode === 'flashcards' && selectedCategories.length > 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <FlashcardInterface />
      </div>
    )
  }

  // Main selection screen
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">🧠 Quiz & Lernkarten</h1>
          </div>
          <p className="text-lg text-gray-600 mb-2">Interaktives Lernsystem für die Pflegeausbildung</p>
          <p className="text-sm text-gray-500">Teste dein Wissen mit Quiz oder lerne mit Karteikarten</p>
        </div>

        <StatsDisplay />
        <StudyModeSelection />
        <CategorySelection />

        <div className="text-center">
          {studyMode === 'quiz' && (
            <Button
              size="lg"
              onClick={handleStartQuiz}
              disabled={selectedCategories.length === 0}
              className="mr-4"
            >
              <Play className="w-4 h-4 mr-2" />
              Quiz starten
            </Button>
          )}
          
          {studyMode === 'flashcards' && (
            <Button
              size="lg"
              onClick={handleStartFlashcards}
              disabled={selectedCategories.length === 0}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Lernkarten starten
            </Button>
          )}

          {studyMode === 'mixed' && (
            <div className="space-x-4">
              <Button
                size="lg"
                onClick={handleStartQuiz}
                disabled={selectedCategories.length === 0}
              >
                <Play className="w-4 h-4 mr-2" />
                Quiz starten
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleStartFlashcards}
                disabled={selectedCategories.length === 0}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Lernkarten starten
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default QuizLernkarten