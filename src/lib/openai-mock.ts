// Mock-Implementierung für OpenAI API
// Dies wird verwendet wenn kein API Key vorhanden ist

export const AI_PROMPTS = {
  fallbeispiel: `Mock Fallbeispiel`,
  fallbeispielProfi: `Mock Fallbeispiel Profi`,
  pflegeplanung: `Mock Pflegeplanung`,
  pesr: `Mock PESR`,
  pflegeinfo: `Mock Pflegeinfo`,
  pflegereview: `Mock Pflegereview`,
  abedlinfo: `Mock ABEDL Info`,
  medikamentenszenario: `Mock Medikamentenszenario`
}

export async function generateAIResponse(
  prompt: string,
  userInput: string
): Promise<string> {
  // Simuliere API Delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Spezielle Mock-Antwort für Pflegeinfo-Bewertung - NUR TEXT!
  if (prompt.includes('pflegeinfo')) {
    return `DEMO-BEWERTUNG (Kein API-Key konfiguriert)

Gesamtbewertung: 75/100

Dies ist eine Demo-Bewertung. Die vollständige KI-Bewertung ist nur mit gültigem OpenAI API-Key verfügbar.

DOKUMENTATION:
✓ Demo: Dokumentation wurde erfasst
✓ Demo: Strukturierte Eingabe

PFLEGEMASSNAHMEN:
✓ Demo: Pflegemaßnahmen erfasst

BEOBACHTUNGEN:
✓ Demo: Beobachtungen dokumentiert

HINWEIS: Für echte Bewertungen benötigen Sie einen gültigen API-Key.`
  }
  
  return `Dies ist eine Demo-Antwort. Die OpenAI API ist nicht konfiguriert. 
  
Um die vollständige Funktionalität zu nutzen, müssen Sie:
1. Einen OpenAI API-Schlüssel erstellen
2. Eine Backend-Funktion einrichten (empfohlen)
3. Den API-Schlüssel sicher im Backend speichern

Ihre Eingabe war: "${userInput}"`
}

export async function generateStreamingAIResponse(
  prompt: string,
  userInput: string,
  onChunk: (chunk: string) => void,
  onComplete?: (fullText: string) => void,
  onError?: (error: Error) => void
): Promise<void> {
  try {
    const response = await generateAIResponse(prompt, userInput)
    const words = response.split(' ')
    
    for (const word of words) {
      await new Promise(resolve => setTimeout(resolve, 50))
      onChunk(word + ' ')
    }
    
    onComplete?.(response)
  } catch (error) {
    onError?.(error as Error)
  }
}

export async function generateMedicationScenario(
  prompt: string,
  userInput: string
): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Demo-Szenario für Medikamenten-Training
  return JSON.stringify({
    title: "Demo: Bluthochdruck-Patient",
    vitals: {
      bloodPressure: "160/95",
      heartRate: 88,
      temperature: 37.2
    },
    symptoms: [
      "Kopfschmerzen seit heute Morgen",
      "Leichter Schwindel beim Aufstehen",
      "Nervosität"
    ],
    correctMedication: "ramipril",
    needsDoctor: false,
    explanation: "Dies ist ein Demo-Szenario. Für echte KI-generierte Szenarien ist ein API-Key erforderlich.",
    level: 1
  })
}