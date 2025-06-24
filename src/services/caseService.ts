import { generateAIResponse, generateStreamingAIResponse, AI_PROMPTS } from '../lib/openai'
import { useCaseStore } from '../store/caseStore'
import { authService } from './authService'

export interface CaseGenerationParams {
  bereich?: string
  schwierigkeitsgrad?: string
  anforderungen?: string
}

export interface PflegeplanungInput {
  patientensituation: string
  vorgeschichte?: string
  aktuelleProbleme?: string
}

export interface PESRInput {
  pflegesituation: string
  beobachtungen?: string
}


export interface PflegeinfoInput {
  dokumentation: string
  pflegemassnahmen?: string
  beobachtungen?: string
}

export interface WorkflowInput {
  fallbeispiel: string
  selectedABEDLs?: string[]
}

export const caseService = {
  async generateFallbeispiel(
    params: CaseGenerationParams,
    userId: string,
    promptVersion: 'fallbeispiel' | 'fallbeispielProfi' = 'fallbeispielProfi'
  ): Promise<string> {
    try {
      await authService.incrementUsageCount(userId, 'case_generation')

      const userInput = `
Bereich: ${params.bereich || 'Allgemeine Pflege'}
Schwierigkeitsgrad: ${params.schwierigkeitsgrad || 'Mittel'}
Spezielle Anforderungen: ${params.anforderungen || 'Keine besonderen Anforderungen'}
      `.trim()

      const response = await generateAIResponse(AI_PROMPTS[promptVersion], userInput)

      const caseData = {
        title: `Fallbeispiel - ${params.bereich || 'Allgemeine Pflege'}`,
        content: userInput,
        case_type: 'fallbeispiel' as const,
        ai_response: response,
        user_id: userId
      }

      await useCaseStore.getState().createCase(caseData)
      
      return response
    } catch (error) {
      console.error('Error generating Fallbeispiel:', error)
      throw new Error('Fehler beim Generieren des Fallbeispiels')
    }
  },

  // Neue Streaming-Version für Fallbeispiele
  async generateFallbeispielStreaming(
    params: CaseGenerationParams,
    userId: string,
    onChunk: (chunk: string) => void,
    onComplete?: (fullText: string) => void,
    onError?: (error: Error) => void,
    promptVersion: 'fallbeispiel' | 'fallbeispielProfi' = 'fallbeispielProfi'
  ): Promise<void> {
    try {
      await authService.incrementUsageCount(userId, 'case_generation')

      const userInput = `
Bereich: ${params.bereich || 'Allgemeine Pflege'}
Schwierigkeitsgrad: ${params.schwierigkeitsgrad || 'Mittel'}
Spezielle Anforderungen: ${params.anforderungen || 'Keine besonderen Anforderungen'}
      `.trim()

      await generateStreamingAIResponse(
        AI_PROMPTS[promptVersion], 
        userInput,
        onChunk,
        async (fullText) => {
          // Speichere das vollständige Fallbeispiel in der Datenbank
          try {
            const caseData = {
              title: `Fallbeispiel - ${params.bereich || 'Allgemeine Pflege'}`,
              content: userInput,
              case_type: 'fallbeispiel' as const,
              ai_response: fullText,
              user_id: userId
            }

            await useCaseStore.getState().createCase(caseData)
            onComplete?.(fullText)
          } catch (error) {
            console.error('Error saving case:', error)
            onError?.(new Error('Fallbeispiel generiert, aber Speichern fehlgeschlagen'))
          }
        },
        onError
      )
    } catch (error) {
      console.error('Error generating streaming Fallbeispiel:', error)
      onError?.(new Error('Fehler beim Generieren des Fallbeispiels'))
    }
  },

  async generatePflegeplanung(
    input: PflegeplanungInput,
    userId: string
  ): Promise<string> {
    try {
      await authService.incrementUsageCount(userId, 'care_plan')

      const userInput = `
Patientensituation: ${input.patientensituation}
${input.vorgeschichte ? `Vorgeschichte: ${input.vorgeschichte}` : ''}
${input.aktuelleProbleme ? `Aktuelle Probleme: ${input.aktuelleProbleme}` : ''}
      `.trim()

      const response = await generateAIResponse(AI_PROMPTS.pflegeplanung, userInput)

      const caseData = {
        title: 'Pflegeplanung',
        content: userInput,
        case_type: 'pflegeplanung' as const,
        ai_response: response,
        user_id: userId
      }

      await useCaseStore.getState().createCase(caseData)
      
      return response
    } catch (error) {
      console.error('Error generating Pflegeplanung:', error)
      throw new Error('Fehler beim Erstellen der Pflegeplanung')
    }
  },

  async generatePESR(
    input: PESRInput,
    userId: string
  ): Promise<string> {
    try {
      await authService.incrementUsageCount(userId, 'care_plan')

      const userInput = `
Pflegesituation: ${input.pflegesituation}
${input.beobachtungen ? `Beobachtungen: ${input.beobachtungen}` : ''}
      `.trim()

      const response = await generateAIResponse(AI_PROMPTS.pesr, userInput)

      const caseData = {
        title: 'PESR-Diagnose',
        content: userInput,
        case_type: 'pesr' as const,
        ai_response: response,
        user_id: userId
      }

      await useCaseStore.getState().createCase(caseData)
      
      return response
    } catch (error) {
      console.error('Error generating PESR:', error)
      throw new Error('Fehler beim Erstellen der PESR-Diagnose')
    }
  },


  async evaluatePflegeinfo(
    input: PflegeinfoInput,
    userId: string
  ): Promise<string> {
    try {
      await authService.incrementUsageCount(userId, 'care_info')

      const userInput = `
Dokumentation: ${input.dokumentation}
${input.pflegemassnahmen ? `Pflegemaßnahmen: ${input.pflegemassnahmen}` : ''}
${input.beobachtungen ? `Beobachtungen: ${input.beobachtungen}` : ''}
      `.trim()

      const response = await generateAIResponse(AI_PROMPTS.pflegeinfo, userInput)

      const caseData = {
        title: 'Pflegeinfo-Bewertung',
        content: userInput,
        case_type: 'pflegeinfo' as const,
        ai_response: response,
        care_infos: {
          dokumentation: input.dokumentation,
          pflegemassnahmen: input.pflegemassnahmen,
          beobachtungen: input.beobachtungen
        },
        user_id: userId
      }

      await useCaseStore.getState().createCase(caseData)
      
      return response
    } catch (error) {
      console.error('Error evaluating Pflegeinfo:', error)
      throw new Error('Fehler beim Bewerten der Pflegeinformationen')
    }
  },

  async generateWorkflowPflegeplanung(
    input: WorkflowInput,
    userId: string
  ): Promise<string> {
    try {
      await authService.incrementUsageCount(userId, 'care_plan')

      const userInput = `Basierend auf folgendem Fallbeispiel:\n\n${input.fallbeispiel}\n\nErstelle eine vollständige Pflegeplanung.`

      const response = await generateAIResponse(AI_PROMPTS.pflegeplanung, userInput)

      const caseData = {
        title: 'Workflow - Pflegeplanung',
        content: userInput,
        case_type: 'pflegeplanung' as const,
        ai_response: response,
        user_id: userId
      }

      await useCaseStore.getState().createCase(caseData)
      
      return response
    } catch (error) {
      console.error('Error generating workflow Pflegeplanung:', error)
      throw new Error('Fehler beim Erstellen der Pflegeplanung')
    }
  },

  async generateWorkflowABEDL(
    input: WorkflowInput,
    userId: string
  ): Promise<string> {
    try {
      await authService.incrementUsageCount(userId, 'care_info')

      const selectedABEDLsText = input.selectedABEDLs?.length 
        ? `\n\nFokussiere besonders auf folgende ABEDL-Bereiche:\n${input.selectedABEDLs.map(id => `- ${id}`).join('\n')}`
        : ''

      const userInput = `Basierend auf folgendem Fallbeispiel:\n\n${input.fallbeispiel}${selectedABEDLsText}\n\nExtrahiere pflegerelevante Informationen und ordne sie den ABEDL-Bereichen zu.`

      const response = await generateAIResponse(AI_PROMPTS.abedlinfo, userInput)

      const caseData = {
        title: 'Workflow - ABEDL-Zuordnung',
        content: userInput,
        case_type: 'pflegeinfo' as const,
        ai_response: response,
        user_id: userId
      }

      await useCaseStore.getState().createCase(caseData)
      
      return response
    } catch (error) {
      console.error('Error generating workflow ABEDL:', error)
      throw new Error('Fehler beim Zuordnen der ABEDL-Bereiche')
    }
  },

  async reviewWorkflow(
    workflowType: 'pflegeplanung' | 'abedl',
    workflowContent: string,
    userId: string
  ): Promise<string> {
    try {
      await authService.incrementUsageCount(userId, 'care_plan')

      const prompt = workflowType === 'pflegeplanung' ? AI_PROMPTS.pflegereview : AI_PROMPTS.pflegeinfo
      const userInput = `Bitte überprüfe folgende ${workflowType === 'pflegeplanung' ? 'Pflegeplanung' : 'ABEDL-Zuordnung'}:\n\n${workflowContent}`

      const response = await generateAIResponse(prompt, userInput)

      const caseData = {
        title: `Review - ${workflowType === 'pflegeplanung' ? 'Pflegeplanung' : 'ABEDL-Zuordnung'}`,
        content: userInput,
        case_type: 'pflegeinfo' as const,
        ai_response: response,
        user_id: userId
      }

      await useCaseStore.getState().createCase(caseData)
      
      return response
    } catch (error) {
      console.error('Error reviewing workflow:', error)
      throw new Error('Fehler beim Überprüfen der Arbeit')
    }
  },

  // Neue Streaming-Version für Reviews
  async reviewWorkflowStreaming(
    workflowType: 'pflegeplanung' | 'abedl',
    workflowContent: string,
    userId: string,
    onChunk: (chunk: string) => void,
    onComplete?: (fullText: string) => void,
    onError?: (error: Error) => void
  ): Promise<void> {
    try {
      await authService.incrementUsageCount(userId, 'care_plan')

      const prompt = workflowType === 'pflegeplanung' ? AI_PROMPTS.pflegereview : AI_PROMPTS.pflegeinfo
      const userInput = `Bitte überprüfe folgende ${workflowType === 'pflegeplanung' ? 'Pflegeplanung' : 'ABEDL-Zuordnung'}:\n\n${workflowContent}`

      await generateStreamingAIResponse(
        prompt,
        userInput,
        onChunk,
        async (fullText) => {
          // Speichere das vollständige Review in der Datenbank
          try {
            const caseData = {
              title: `Review - ${workflowType === 'pflegeplanung' ? 'Pflegeplanung' : 'ABEDL-Zuordnung'}`,
              content: userInput,
              case_type: 'pflegeinfo' as const,
              ai_response: fullText,
              user_id: userId
            }

            await useCaseStore.getState().createCase(caseData)
            onComplete?.(fullText)
          } catch (error) {
            console.error('Error saving review:', error)
            onError?.(new Error('Review generiert, aber Speichern fehlgeschlagen'))
          }
        },
        onError
      )
    } catch (error) {
      console.error('Error streaming review:', error)
      onError?.(new Error('Fehler beim Überprüfen der Arbeit'))
    }
  },

  async generateQuiz(
    categories: string[],
    difficulty: string,
    userId: string
  ): Promise<any> {
    try {
      await authService.incrementUsageCount(userId, 'care_plan')

      const categoryNames = categories.join(', ')
      const userInput = `
🎯 QUIZ-GENERIERUNG FÜR KATEGORIE: ${categoryNames}
Schwierigkeitsgrad: ${difficulty}

🚨 KRITISCHE ANWEISUNG: Erstelle 15 Fragen AUSSCHLIESSLICH zu "${categoryNames}"

📋 STRENGE KATEGORIE-REGELN:
- JEDE einzelne Frage muss 100% zu "${categoryNames}" passen
- VERBIETE alle anderen Themen komplett
- Bei Herz-Kreislauf: NUR Herz-Kreislauf (NICHT Atmung, Nieren, etc.)
- Bei Atmungssystem: NUR Atmung/Lunge (NICHT Herz, Verdauung, etc.)
- Bei Pharmakologie: NUR die spezifische Medikamentengruppe

🔍 QUALITÄTSPRÜFUNG:
- Frage dich vor jeder Frage: "Behandelt das zu 100% nur ${categoryNames}?"
- Verwerfe alle Fragen, die andere Organsysteme auch nur erwähnen
- Alle 15 Fragen = Ein einziges Thema: ${categoryNames}

ZIEL: 15 perfekt passende Fragen nur zu "${categoryNames}" - keine Abweichungen!
      `.trim()

      const response = await generateAIResponse(AI_PROMPTS.quiz, userInput)
      
      // Try to parse JSON response
      let parsedQuiz
      try {
        parsedQuiz = JSON.parse(response)
        
        // Validate that we have questions
        if (!parsedQuiz.questions || !Array.isArray(parsedQuiz.questions) || parsedQuiz.questions.length === 0) {
          throw new Error('Keine gültigen Fragen erhalten')
        }
        
      } catch (e) {
        console.error('Quiz parsing error:', e, 'Response:', response)
        throw new Error('Quiz konnte nicht generiert werden. Bitte versuchen Sie es erneut.')
      }

      const caseData = {
        title: `Quiz - ${categoryNames}`,
        content: userInput,
        case_type: 'pflegeplanung' as const,
        ai_response: response,
        user_id: userId
      }

      await useCaseStore.getState().createCase(caseData)
      
      return parsedQuiz
    } catch (error) {
      console.error('Error generating Quiz:', error)
      throw new Error('Fehler beim Generieren des Quiz')
    }
  },

  async generateFlashcards(
    categories: string[],
    userId: string
  ): Promise<any> {
    try {
      await authService.incrementUsageCount(userId, 'care_plan')

      const categoryNames = categories.join(', ')
      const userInput = `
Kategorien: ${categoryNames}
Erstelle Lernkarten zu diesen Pflegethemen.
      `.trim()

      const response = await generateAIResponse(AI_PROMPTS.flashcards, userInput)
      
      // Try to parse JSON response
      let parsedFlashcards
      try {
        parsedFlashcards = JSON.parse(response)
      } catch (e) {
        throw new Error('Lernkarten konnten nicht generiert werden. Bitte versuchen Sie es erneut.')
      }

      const caseData = {
        title: `Lernkarten - ${categoryNames}`,
        content: userInput,
        case_type: 'pflegeplanung' as const,
        ai_response: response,
        user_id: userId
      }

      await useCaseStore.getState().createCase(caseData)
      
      return parsedFlashcards
    } catch (error) {
      console.error('Error generating Flashcards:', error)
      throw new Error('Fehler beim Generieren der Lernkarten')
    }
  }
}