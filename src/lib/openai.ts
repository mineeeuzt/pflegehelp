import OpenAI from 'openai'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

if (!apiKey) {
  throw new Error('Missing OpenAI API key')
}

const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
})

export const AI_PROMPTS = {
  fallbeispiel: `Erstelle ein realistisches Fallbeispiel für die Pflegeausbildung mit folgenden Parametern: [Bereich], [Schwierigkeitsgrad], [Spezielle Anforderungen]. Das Fallbeispiel soll einen Patienten mit spezifischen Gesundheitsproblemen, Vorgeschichte und aktueller Situation beschreiben. Strukturiere es so: 1) Patienteninformationen, 2) Aktuelle Situation, 3) Relevante Vorgeschichte, 4) Lernziele. Das Fallbeispiel soll Lernende dazu anregen, über Pflegediagnosen, Pflegeziele und Pflegemaßnahmen nachzudenken.`,
  
  pflegeplanung: `Analysiere die folgende Pflegesituation und erstelle eine strukturierte Pflegeplanung. Identifiziere systematisch: 1) Pflegediagnosen nach NANDA-I Klassifikation, 2) Pflegeziele nach SMART-Kriterien (Spezifisch, Messbar, Erreichbar, Relevant, Terminiert), 3) Konkrete, evidence-basierte Pflegemaßnahmen, 4) Evaluationskriterien und -methoden. Begründe alle Entscheidungen fachlich und berücksichtige individuelle Patientenbedürfnisse. Strukturiere die Antwort übersichtlich und verwende Fachterminologie korrekt.`,
  
  pesr: `Erstelle eine PESR-Pflegediagnose (Problem-Etiologie-Symptome/Signs-Ressourcen) basierend auf der beschriebenen Pflegesituation. Formuliere nach folgendem Schema: P (Problem): Beschreibe das Hauptproblem des Patienten präzise. E (Etiologie): Identifiziere die Ursachen und beitragenden Faktoren. S (Symptome/Signs): Liste beobachtbare Zeichen und Symptome auf. R (Ressourcen): Identifiziere Stärken und Ressourcen des Patienten. Verwende NANDA-I Terminologie und achte auf fachliche Präzision.`,
  
  smartZiel: `Formuliere ein SMART-Pflegeziel für die beschriebene Pflegesituation. Das Ziel muss folgende Kriterien erfüllen: S (Spezifisch): Konkret und eindeutig formuliert, M (Messbar): Mit klaren Erfolgskriterien, A (Erreichbar): Realistisch und umsetzbar, R (Relevant): Bedeutsam für den Patienten, T (Terminiert): Mit klarem Zeitrahmen. Begründe, warum das Ziel alle SMART-Kriterien erfüllt und gib konkrete Evaluationsmethoden an.`,
  
  pflegeinfo: `Bewerte die eingegebenen Pflegeinformationen systematisch auf: 1) Vollständigkeit der Dokumentation, 2) Fachliche Korrektheit, 3) Strukturierung und Klarheit, 4) Compliance mit Pflegestandards. Gib konstruktives, spezifisches Feedback mit konkreten Verbesserungsvorschlägen. Identifiziere fehlende Informationen, korrigiere fachliche Fehler und schlage optimierte Formulierungen vor. Bewerte auch die Patientensicherheit und rechtliche Aspekte der Dokumentation.`,
}

export async function generateAIResponse(
  prompt: string,
  userInput: string
): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: prompt,
        },
        {
          role: 'user',
          content: userInput,
        },
      ],
      max_tokens: 2000,
      temperature: 0.7,
    })

    return completion.choices[0]?.message?.content || 'Keine Antwort erhalten.'
  } catch (error) {
    console.error('OpenAI API Error:', error)
    throw new Error('Fehler bei der KI-Generierung. Bitte versuchen Sie es erneut.')
  }
}