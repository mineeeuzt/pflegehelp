// TypeScript interfaces for Pflegeinfo AI evaluation

export interface FeedbackError {
  zitat: string
  problem: string
  korrektur: string
}

export interface FeedbackSection {
  score: number
  eingereichtText: string
  positiv: string[]
  fehler: FeedbackError[]
  note: string
}

export interface PflegeinfoFeedback {
  dokumentation: FeedbackSection
  pflegemassnahmen: FeedbackSection
  beobachtungen: FeedbackSection
  struktur: FeedbackSection
  fachlichkeit: FeedbackSection
  rechtliches: FeedbackSection
}

export interface PflegeinfoResult {
  gesamtbewertung: number
  bewertungBegruendung: string
  feedback: PflegeinfoFeedback
  hauptprobleme: string[]
  mindestanforderungErfuellt: boolean
  empfehlung: string
}

export interface PflegeinfoInput {
  dokumentation: string
  pflegemassnahmen?: string
  beobachtungen?: string
}

export interface PflegeinfoFormData {
  pflegeInfo: string
  selectedABEDL: string[]
  begruendung: string
}

export interface ABEDLCategory {
  id: string
  label: string
}

// Type guards
export function isPflegeinfoResult(obj: any): obj is PflegeinfoResult {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.gesamtbewertung === 'number' &&
    typeof obj.bewertungBegruendung === 'string' &&
    obj.feedback &&
    typeof obj.feedback === 'object'
  )
}

export function isFeedbackSection(obj: any): obj is FeedbackSection {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.score === 'number' &&
    Array.isArray(obj.positiv) &&
    Array.isArray(obj.fehler)
  )
}

export function isFeedbackError(obj: any): obj is FeedbackError {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.zitat === 'string' &&
    typeof obj.problem === 'string' &&
    typeof obj.korrektur === 'string'
  )
}

// Safe access utilities
export class PflegeinfoSafeAccess {
  static getOverallScore(result: any): number {
    return typeof result?.gesamtbewertung === 'number' ? result.gesamtbewertung : 0
  }

  static getSectionScore(section: any): number {
    return typeof section?.score === 'number' ? section.score : 0
  }

  static getArray<T>(arr: any): T[] {
    return Array.isArray(arr) ? arr : []
  }

  static getString(str: any): string {
    return typeof str === 'string' ? str : ''
  }

  static getBoolean(bool: any): boolean {
    return typeof bool === 'boolean' ? bool : false
  }

  static getFeedbackSection(section: any): FeedbackSection {
    return {
      score: this.getSectionScore(section),
      eingereichtText: this.getString(section?.eingereichtText),
      positiv: this.getArray(section?.positiv),
      fehler: this.getArray(section?.fehler).filter(isFeedbackError),
      note: this.getString(section?.note)
    }
  }

  static getAllFeedback(feedback: any): PflegeinfoFeedback {
    return {
      dokumentation: this.getFeedbackSection(feedback?.dokumentation),
      pflegemassnahmen: this.getFeedbackSection(feedback?.pflegemassnahmen),
      beobachtungen: this.getFeedbackSection(feedback?.beobachtungen),
      struktur: this.getFeedbackSection(feedback?.struktur),
      fachlichkeit: this.getFeedbackSection(feedback?.fachlichkeit),
      rechtliches: this.getFeedbackSection(feedback?.rechtliches)
    }
  }

  static parseResult(result: any): PflegeinfoResult {
    return {
      gesamtbewertung: this.getOverallScore(result),
      bewertungBegruendung: this.getString(result?.bewertungBegruendung),
      feedback: this.getAllFeedback(result?.feedback),
      hauptprobleme: this.getArray(result?.hauptprobleme),
      mindestanforderungErfuellt: this.getBoolean(result?.mindestanforderungErfuellt),
      empfehlung: this.getString(result?.empfehlung)
    }
  }
}

// Adapter to convert PflegeinfoResult to ReviewDisplay format
export interface ReviewSection {
  title: string
  userText: string
  score: number
  feedback: string
  improvements: string[]
  positives: string[]
}

export interface ReviewDisplayData {
  reviewData: ReviewSection[]
  overallScore: number
  generalFeedback: string
}

export class PflegeinfoToReviewAdapter {
  static convertToReviewDisplay(result: PflegeinfoResult, inputData: PflegeinfoFormData): ReviewDisplayData {
    const sections: ReviewSection[] = []
    
    // Map each feedback section to ReviewSection format
    const sectionMappings = [
      { key: 'dokumentation', title: 'Dokumentation', userText: inputData.pflegeInfo },
      { key: 'pflegemassnahmen', title: 'Pflegemaßnahmen & ABEDL-Zuordnung', userText: inputData.selectedABEDL.join(', ') },
      { key: 'beobachtungen', title: 'Beobachtungen & Begründung', userText: inputData.begruendung },
      { key: 'struktur', title: 'Struktur & Vollständigkeit', userText: inputData.pflegeInfo },
      { key: 'fachlichkeit', title: 'Fachliche Korrektheit', userText: inputData.pflegeInfo },
      { key: 'rechtliches', title: 'Rechtliche Aspekte', userText: inputData.pflegeInfo }
    ]

    sectionMappings.forEach(mapping => {
      const feedbackSection = result.feedback[mapping.key as keyof PflegeinfoFeedback]
      if (feedbackSection) {
        sections.push({
          title: mapping.title,
          userText: mapping.userText || 'Keine Eingabe',
          score: feedbackSection.score,
          feedback: feedbackSection.note || 'Keine spezifischen Anmerkungen',
          improvements: feedbackSection.fehler.map(error => error.korrektur),
          positives: feedbackSection.positiv
        })
      }
    })

    return {
      reviewData: sections,
      overallScore: result.gesamtbewertung,
      generalFeedback: result.bewertungBegruendung
    }
  }
}

// Utility functions for styling
export class ScoreColorUtils {
  static getScoreColor(score: number): string {
    if (score >= 70) return 'text-green-600'
    if (score >= 50) return 'text-yellow-600'
    if (score >= 40) return 'text-orange-600'
    return 'text-red-600'
  }

  static getScoreBackgroundColor(score: number): string {
    if (score >= 70) return 'bg-green-50 border-green-200'
    if (score >= 50) return 'bg-yellow-50 border-yellow-200'
    if (score >= 40) return 'bg-orange-50 border-orange-200'
    return 'bg-red-50 border-red-200'
  }

  static getScoreDescription(score: number): string {
    if (score >= 70) return 'Gut'
    if (score >= 50) return 'Befriedigend'
    if (score >= 40) return 'Ausreichend'
    return 'Ungenügend'
  }
}