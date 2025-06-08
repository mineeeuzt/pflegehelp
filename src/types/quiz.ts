export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: QuizCategory
  difficulty: 'leicht' | 'mittel' | 'schwer'
  tags: string[]
}

export interface Flashcard {
  id: string
  front: string
  back: string
  category: QuizCategory
  difficulty: 'leicht' | 'mittel' | 'schwer'
  tags: string[]
  lastReviewed?: Date
  reviewCount: number
  easeFactor: number // Für Spaced Repetition
}

export interface QuizCategory {
  id: string
  name: string
  description: string
  color: string
  icon: string
}

export interface QuizSession {
  id: string
  categoryId: string
  questions: QuizQuestion[]
  currentQuestionIndex: number
  answers: (number | null)[]
  startTime: Date
  endTime?: Date
  score: number
  completed: boolean
}

export interface LearningStats {
  totalQuizzes: number
  totalCorrectAnswers: number
  totalQuestions: number
  averageScore: number
  categoryStats: Record<string, {
    quizzes: number
    correctAnswers: number
    totalQuestions: number
    averageScore: number
  }>
  streak: number
  lastActivity: Date
}

export interface StudyMode {
  id: 'quiz' | 'flashcards' | 'mixed'
  name: string
  description: string
  icon: string
}

export type QuizState = {
  currentSession: QuizSession | null
  stats: LearningStats
  selectedCategories: string[]
  selectedDifficulty: ('leicht' | 'mittel' | 'schwer')[]
  studyMode: StudyMode['id']
  flashcards: Flashcard[]
  currentFlashcardIndex: number
  showFlashcardAnswer: boolean
}

export type QuizActions = {
  startQuiz: (categoryIds: string[], difficulty: ('leicht' | 'mittel' | 'schwer')[]) => void
  answerQuestion: (answerIndex: number) => void
  nextQuestion: () => void
  endQuiz: () => void
  setStudyMode: (mode: StudyMode['id']) => void
  startFlashcards: (categoryIds: string[]) => void
  nextFlashcard: () => void
  rateFlashcard: (rating: 'easy' | 'good' | 'hard' | 'again') => void
  resetSession: () => void
  updateStats: (session: QuizSession) => void
}