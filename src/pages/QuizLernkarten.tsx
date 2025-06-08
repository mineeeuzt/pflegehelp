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
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['anatomy-physiology', 'pathology']))
  const [searchTerm, setSearchTerm] = useState('')
  const [currentView, setCurrentView] = useState<'main' | 'category'>('main')
  const [selectedMainCategory, setSelectedMainCategory] = useState<any>(null)
  const [breadcrumb, setBreadcrumb] = useState<any[]>([])

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

  // Flatten all categories for selection
  const getAllCategories = (categories: any[]): any[] => {
    let allCategories: any[] = []
    categories.forEach(category => {
      allCategories.push(category)
      if (category.children) {
        allCategories = allCategories.concat(getAllCategories(category.children))
      }
    })
    return allCategories
  }

  const allMedicalCategories = getAllCategories([...medicalBasicsCategories, ...pathologyCategories])
  const allCategories = [...quizCategories, ...allMedicalCategories]

  // Navigation functions
  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId)
    } else {
      newExpanded.add(categoryId)
    }
    setExpandedCategories(newExpanded)
  }

  const navigateToCategory = (category: any, parentBreadcrumb: any[] = []) => {
    setSelectedMainCategory(category)
    setBreadcrumb([...parentBreadcrumb, category])
    setCurrentView('category')
  }

  const navigateBack = () => {
    if (breadcrumb.length > 1) {
      const newBreadcrumb = breadcrumb.slice(0, -1)
      setBreadcrumb(newBreadcrumb)
      setSelectedMainCategory(newBreadcrumb[newBreadcrumb.length - 1])
    } else {
      setCurrentView('main')
      setBreadcrumb([])
      setSelectedMainCategory(null)
    }
  }

  const navigateHome = () => {
    setCurrentView('main')
    setBreadcrumb([])
    setSelectedMainCategory(null)
  }

  const selectCategory = (categoryId: string) => {
    const newSelection = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId]
    useQuizStore.setState({ selectedCategories: newSelection })
  }

  // Search function
  const filterCategories = (categories: any[], term: string): any[] => {
    if (!term) return categories
    return categories.filter(category => {
      const matchesName = category.name.toLowerCase().includes(term.toLowerCase())
      const matchesDescription = category.description.toLowerCase().includes(term.toLowerCase())
      const hasMatchingChildren = category.children ? filterCategories(category.children, term).length > 0 : false
      return matchesName || matchesDescription || hasMatchingChildren
    }).map(category => ({
      ...category,
      children: category.children ? filterCategories(category.children, term) : undefined
    }))
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
      {breadcrumb.map((item, index) => (
        <div key={item.id} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <button
            onClick={() => {
              const newBreadcrumb = breadcrumb.slice(0, index + 1)
              setBreadcrumb(newBreadcrumb)
              setSelectedMainCategory(item)
            }}
            className={`${index === breadcrumb.length - 1 ? 'text-gray-900 font-medium' : 'text-blue-600 hover:text-blue-800'}`}
          >
            {item.icon} {item.name}
          </button>
        </div>
      ))}
    </div>
  )

  // Hierarchical Category Tree Component
  const CategoryTree = ({ categories, level = 0, parentColor = 'blue' }: { categories: any[], level?: number, parentColor?: string }) => {
    const filteredCategories = filterCategories(categories, searchTerm)
    const indent = level * 20

    return (
      <div style={{ marginLeft: `${indent}px` }}>
        {filteredCategories.map((category) => {
          const isExpanded = expandedCategories.has(category.id)
          const isSelected = selectedCategories.includes(category.id)
          const hasChildren = category.children && category.children.length > 0

          return (
            <div key={category.id} className="mb-2">
              <div className="flex items-center gap-2">
                {/* Expand/Collapse Button */}
                {hasChildren && (
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                )}
                {!hasChildren && <div className="w-6" />}

                {/* Category Selection Button */}
                <button
                  onClick={() => selectCategory(category.id)}
                  className={`flex-1 flex items-center gap-3 p-3 rounded-lg border-2 transition-all text-left ${
                    isSelected
                      ? parentColor === 'blue' 
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium">{category.name}</div>
                    <div className="text-sm text-gray-600">{category.description}</div>
                    {hasChildren && (
                      <div className="text-xs text-gray-500 mt-1">
                        {category.children.length} Unterkategorien
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      category.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                      category.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {category.difficulty === 'easy' ? 'Leicht' : 
                       category.difficulty === 'medium' ? 'Mittel' : 'Schwer'}
                    </span>
                    {hasChildren && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          navigateToCategory(category, breadcrumb)
                        }}
                        className="p-1 rounded hover:bg-gray-200"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </button>
              </div>

              {/* Subcategories */}
              <AnimatePresence>
                {isExpanded && hasChildren && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2"
                  >
                    <CategoryTree 
                      categories={category.children} 
                      level={level + 1} 
                      parentColor={parentColor}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    )
  }

  // Main Category Selection View
  const MainCategorySelection = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Kategorien auswählen
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Kategorien durchsuchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg w-64"
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Anatomie & Physiologie - Alle Hauptkategorien */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-blue-700">🏥 Anatomie & Physiologie - Alle Bereiche</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {/* Direkte Anatomie-Kategorien */}
              <button onClick={() => selectCategory('cardiovascular-system')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('cardiovascular-system') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">🫀</div>
                <div className="text-sm font-medium">Herz-Kreislauf-System</div>
              </button>
              <button onClick={() => selectCategory('respiratory-system')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('respiratory-system') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">🫁</div>
                <div className="text-sm font-medium">Atmungssystem</div>
              </button>
              <button onClick={() => selectCategory('nervous-system')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('nervous-system') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">🧠</div>
                <div className="text-sm font-medium">Nervensystem</div>
              </button>
              <button onClick={() => selectCategory('musculoskeletal-system')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('musculoskeletal-system') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">🦴</div>
                <div className="text-sm font-medium">Bewegungsapparat</div>
              </button>
              <button onClick={() => selectCategory('renal-system')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('renal-system') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">🫘</div>
                <div className="text-sm font-medium">Nieren & Harnwege</div>
              </button>
              <button onClick={() => selectCategory('blood-immune-system')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('blood-immune-system') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">🩸</div>
                <div className="text-sm font-medium">Blut & Immunsystem</div>
              </button>
              <button onClick={() => selectCategory('metabolism-hormones')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('metabolism-hormones') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">🔄</div>
                <div className="text-sm font-medium">Stoffwechsel & Hormone</div>
              </button>
              <button onClick={() => selectCategory('digestive-system')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('digestive-system') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">🍯</div>
                <div className="text-sm font-medium">Verdauungssystem</div>
              </button>
              <button onClick={() => selectCategory('integumentary-system')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('integumentary-system') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">👁️</div>
                <div className="text-sm font-medium">Haut & Sinnesorgane</div>
              </button>
              
              {/* Detaillierte Anatomie-Kategorien */}
              <button onClick={() => selectCategory('heart-anatomy')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('heart-anatomy') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">❤️</div>
                <div className="text-sm font-medium">Herzanatomie</div>
              </button>
              <button onClick={() => selectCategory('blood-circulation')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('blood-circulation') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">🔄</div>
                <div className="text-sm font-medium">Blutkreislauf</div>
              </button>
              <button onClick={() => selectCategory('blood-pressure-regulation')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('blood-pressure-regulation') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">📊</div>
                <div className="text-sm font-medium">Blutdruck & Regulation</div>
              </button>
              <button onClick={() => selectCategory('heart-physiology')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('heart-physiology') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-sm font-medium">Herzphysiologie</div>
              </button>
              <button onClick={() => selectCategory('vascular-system')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('vascular-system') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">🌊</div>
                <div className="text-sm font-medium">Gefäßsystem</div>
              </button>
              <button onClick={() => selectCategory('ecg-rhythm')} className={`p-3 rounded-lg border-2 transition-all text-left ${selectedCategories.includes('ecg-rhythm') ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-2xl mb-1">📈</div>
                <div className="text-sm font-medium">EKG & Herzrhythmus</div>
              </button>
            </div>
          </div>

          {/* Krankheitslehre - Direkte Hauptkategorien */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-red-700">🦠 Krankheitslehre - Hauptbereiche</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {/* Alle 8 Pathologie-Hauptkategorien */}
              {pathologyCategories.find(cat => cat.id === 'pathology')?.children?.map((category) => (
                <div key={category.id} className="relative">
                  <button
                    onClick={() => selectCategory(category.id)}
                    className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                      selectedCategories.includes(category.id)
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{category.icon}</div>
                    <div className="text-sm font-medium">{category.name}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {category.children?.length || 0} Unterkategorien
                    </div>
                  </button>
                  <button
                    onClick={() => navigateToCategory(category, [])}
                    className="absolute top-1 right-1 p-1 rounded hover:bg-gray-200 text-gray-500"
                    title="Unterkategorien anzeigen"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )) || []}
              
              {/* Original Quiz-Kategorien für Pathologie */}
              {quizCategories.filter(cat => 
                ['cardiovascular-diseases', 'respiratory-diseases', 'neurological-diseases', 'renal-diseases', 
                 'endocrine-diseases', 'gastrointestinal-diseases', 'musculoskeletal-diseases', 'infectious-diseases'].includes(cat.id)
              ).map((category) => (
                <div key={category.id} className="relative">
                  <button
                    onClick={() => selectCategory(category.id)}
                    className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                      selectedCategories.includes(category.id)
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{category.icon}</div>
                    <div className="text-sm font-medium">{category.name}</div>
                  </button>
                  <button
                    onClick={() => {
                      // Find corresponding detailed category
                      const detailedCategory = pathologyCategories.find(cat => 
                        cat.children?.some(child => child.id === category.id)
                      )?.children?.find(child => child.id === category.id)
                      
                      if (detailedCategory) {
                        navigateToCategory(detailedCategory, [])
                      }
                    }}
                    className="absolute top-1 right-1 p-1 rounded hover:bg-gray-200 text-gray-500"
                    title="Detailansicht"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Hierarchical Medical Categories */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-teal-700">🏥 Detaillierte Medizinische Kategorien</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-4">
                {/* Quick Access Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => navigateToCategory(medicalBasicsCategories[0], [])}
                    className="flex items-center gap-3 p-4 bg-blue-100 rounded-lg border-2 border-blue-200 hover:border-blue-300 transition-all"
                  >
                    <span className="text-2xl">🏥</span>
                    <div className="text-left">
                      <div className="font-medium text-blue-700">Anatomie & Physiologie</div>
                      <div className="text-sm text-blue-600">9 Hauptkategorien mit Unterbereichen</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-blue-500 ml-auto" />
                  </button>
                  
                  <button
                    onClick={() => navigateToCategory(pathologyCategories[0], [])}
                    className="flex items-center gap-3 p-4 bg-red-100 rounded-lg border-2 border-red-200 hover:border-red-300 transition-all"
                  >
                    <span className="text-2xl">🦠</span>
                    <div className="text-left">
                      <div className="font-medium text-red-700">Krankheitslehre</div>
                      <div className="text-sm text-red-600">8 Hauptkategorien mit Unterbereichen</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-red-500 ml-auto" />
                  </button>
                </div>

                {/* Collapsed Tree Views */}
                <div>
                  <h4 className="font-medium text-blue-700 mb-2 flex items-center gap-2">
                    <span>Anatomie & Physiologie</span>
                    <span className="text-xs text-gray-500">(Klicken für Details)</span>
                  </h4>
                  <CategoryTree 
                    categories={medicalBasicsCategories} 
                    parentColor="blue"
                  />
                </div>

                {/* Krankheitslehre */}
                <div className="mt-6">
                  <h4 className="font-medium text-red-700 mb-2 flex items-center gap-2">
                    <span>Krankheitslehre</span>
                    <span className="text-xs text-gray-500">(Klicken für Details)</span>
                  </h4>
                  <CategoryTree 
                    categories={pathologyCategories} 
                    parentColor="red"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Other Categories */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-700">Weitere Bereiche</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {quizCategories.filter(cat => 
                !['cardiovascular-system', 'respiratory-system', 'nervous-system', 'musculoskeletal-system', 
                  'renal-system', 'blood-immune-system', 'metabolism-hormones', 'digestive-system', 'integumentary-system',
                  'cardiovascular-diseases', 'respiratory-diseases', 'neurological-diseases', 'renal-diseases', 
                  'endocrine-diseases', 'gastrointestinal-diseases', 'musculoskeletal-diseases', 'infectious-diseases'].includes(cat.id)
              ).map((category) => (
                <button
                  key={category.id}
                  onClick={() => selectCategory(category.id)}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    selectedCategories.includes(category.id)
                      ? 'border-gray-500 bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{category.icon}</div>
                  <div className="text-sm font-medium">{category.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  // Category Detail View
  const CategoryDetailView = () => (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            <BreadcrumbNav />
            {selectedMainCategory?.icon} {selectedMainCategory?.name}
          </CardTitle>
          <Button variant="outline" onClick={navigateBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
        </div>
        <p className="text-gray-600">{selectedMainCategory?.description}</p>
      </CardHeader>
      <CardContent>
        {selectedMainCategory?.children && (
          <CategoryTree 
            categories={selectedMainCategory.children} 
            parentColor={selectedMainCategory.id === 'pathology' || 
                        selectedMainCategory.parentId === 'pathology' ||
                        breadcrumb.some(item => item.id === 'pathology') ? 'red' : 'blue'}
          />
        )}
      </CardContent>
    </Card>
  )

  // Category Selection Logic
  const CategorySelection = () => {
    if (currentView === 'category' && selectedMainCategory) {
      return <CategoryDetailView />
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