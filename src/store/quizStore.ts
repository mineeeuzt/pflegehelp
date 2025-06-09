import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { QuizState, QuizActions, QuizSession, LearningStats, Flashcard } from '../types/quiz'
import { sampleQuestions, sampleFlashcards } from '../data/quizData'

const initialStats: LearningStats = {
  totalQuizzes: 0,
  totalCorrectAnswers: 0,
  totalQuestions: 0,
  averageScore: 0,
  categoryStats: {},
  streak: 0,
  lastActivity: new Date()
}

export const useQuizStore = create<QuizState & QuizActions>()(
  persist(
    (set, get) => ({
      // State
      currentSession: null,
      stats: initialStats,
      selectedCategories: [],
      selectedDifficulty: ['leicht', 'mittel', 'schwer'],
      studyMode: 'quiz',
      flashcards: sampleFlashcards,
      currentFlashcardIndex: 0,
      showFlashcardAnswer: false,

      // Actions
      startQuiz: (categoryIds, difficulty) => {
        const allQuestions = sampleQuestions.filter(q => 
          categoryIds.includes(q.category.id) && 
          difficulty.includes(q.difficulty)
        )
        
        // Shuffle questions
        const shuffledQuestions = allQuestions
          .sort(() => Math.random() - 0.5)
          .slice(0, Math.min(20, allQuestions.length)) // Max 20 questions
        
        const session: QuizSession = {
          id: Date.now().toString(),
          categoryId: categoryIds[0], // Primary category
          questions: shuffledQuestions,
          currentQuestionIndex: 0,
          answers: new Array(shuffledQuestions.length).fill(null),
          startTime: new Date(),
          score: 0,
          completed: false
        }
        
        set({ currentSession: session, selectedCategories: categoryIds })
      },

      answerQuestion: (answerIndex) => {
        const { currentSession } = get()
        if (!currentSession) return
        
        const newAnswers = [...currentSession.answers]
        newAnswers[currentSession.currentQuestionIndex] = answerIndex
        
        // Calculate score
        const currentQuestion = currentSession.questions[currentSession.currentQuestionIndex]
        const isCorrect = answerIndex === currentQuestion.correctAnswer
        const newScore = currentSession.score + (isCorrect ? 1 : 0)
        
        set({
          currentSession: {
            ...currentSession,
            answers: newAnswers,
            score: newScore
          }
        })
      },

      nextQuestion: () => {
        const { currentSession } = get()
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
          
          set({ currentSession: completedSession })
          get().updateStats(completedSession)
        } else {
          set({
            currentSession: {
              ...currentSession,
              currentQuestionIndex: nextIndex
            }
          })
        }
      },

      endQuiz: () => {
        const { currentSession } = get()
        if (!currentSession) return
        
        const completedSession = {
          ...currentSession,
          endTime: new Date(),
          completed: true
        }
        
        get().updateStats(completedSession)
        set({ currentSession: null })
      },

      setStudyMode: (mode) => {
        set({ studyMode: mode })
      },

      startFlashcards: (categoryIds) => {
        const categoryFlashcards = sampleFlashcards.filter(fc =>
          categoryIds.includes(fc.category.id)
        )
        
        // Sort by review priority (least reviewed first)
        const sortedFlashcards = categoryFlashcards.sort((a, b) => {
          if (a.lastReviewed && b.lastReviewed) {
            return a.lastReviewed.getTime() - b.lastReviewed.getTime()
          }
          if (a.lastReviewed && !b.lastReviewed) return 1
          if (!a.lastReviewed && b.lastReviewed) return -1
          return a.reviewCount - b.reviewCount
        })
        
        set({
          flashcards: sortedFlashcards,
          currentFlashcardIndex: 0,
          showFlashcardAnswer: false,
          selectedCategories: categoryIds
        })
      },

      nextFlashcard: () => {
        const { flashcards, currentFlashcardIndex } = get()
        
        if (currentFlashcardIndex < flashcards.length - 1) {
          set({
            currentFlashcardIndex: currentFlashcardIndex + 1,
            showFlashcardAnswer: false
          })
        } else {
          // Restart from beginning
          set({
            currentFlashcardIndex: 0,
            showFlashcardAnswer: false
          })
        }
      },

      rateFlashcard: (rating) => {
        const { flashcards, currentFlashcardIndex } = get()
        const currentCard = flashcards[currentFlashcardIndex]
        
        if (!currentCard) return
        
        // Spaced Repetition Algorithm (simplified)
        let newEaseFactor = currentCard.easeFactor
        
        switch (rating) {
          case 'easy':
            newEaseFactor = Math.min(currentCard.easeFactor + 0.15, 3.0)
            break
          case 'good':
            newEaseFactor = currentCard.easeFactor
            break
          case 'hard':
            newEaseFactor = Math.max(currentCard.easeFactor - 0.15, 1.3)
            break
          case 'again':
            newEaseFactor = Math.max(currentCard.easeFactor - 0.2, 1.3)
            break
        }
        
        const updatedCard: Flashcard = {
          ...currentCard,
          lastReviewed: new Date(),
          reviewCount: currentCard.reviewCount + 1,
          easeFactor: newEaseFactor
        }
        
        const newFlashcards = [...flashcards]
        newFlashcards[currentFlashcardIndex] = updatedCard
        
        set({ flashcards: newFlashcards })
        
        // Auto-advance to next card
        get().nextFlashcard()
      },

      resetSession: () => {
        set({
          currentSession: null,
          currentFlashcardIndex: 0,
          showFlashcardAnswer: false
        })
      },

      updateStats: (session) => {
        const { stats } = get()
        const scorePercentage = (session.score / session.questions.length) * 100
        
        const newStats: LearningStats = {
          totalQuizzes: stats.totalQuizzes + 1,
          totalCorrectAnswers: stats.totalCorrectAnswers + session.score,
          totalQuestions: stats.totalQuestions + session.questions.length,
          averageScore: ((stats.averageScore * stats.totalQuizzes) + scorePercentage) / (stats.totalQuizzes + 1),
          categoryStats: {
            ...stats.categoryStats,
            [session.categoryId]: {
              quizzes: (stats.categoryStats[session.categoryId]?.quizzes || 0) + 1,
              correctAnswers: (stats.categoryStats[session.categoryId]?.correctAnswers || 0) + session.score,
              totalQuestions: (stats.categoryStats[session.categoryId]?.totalQuestions || 0) + session.questions.length,
              averageScore: ((stats.categoryStats[session.categoryId]?.averageScore || 0) * (stats.categoryStats[session.categoryId]?.quizzes || 0) + scorePercentage) / ((stats.categoryStats[session.categoryId]?.quizzes || 0) + 1)
            }
          },
          streak: scorePercentage >= 70 ? stats.streak + 1 : 0, // Reset streak if score < 70%
          lastActivity: new Date()
        }
        
        set({ stats: newStats })
      },

      resetStats: () => {
        set({ stats: initialStats })
      }
    }),
    {
      name: 'quiz-storage',
      partialize: (state) => ({
        stats: state.stats,
        flashcards: state.flashcards
      })
    }
  )
)