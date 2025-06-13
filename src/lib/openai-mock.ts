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
  
  // Spezielle Mock-Antwort für Pflegeinfo-Bewertung
  if (prompt.includes('pflegeinfo')) {
    return JSON.stringify({
      "gesamtbewertung": 75,
      "bewertungBegruendung": "Dies ist eine Demo-Bewertung. Die vollständige KI-Bewertung ist nur mit gültigem OpenAI API-Key verfügbar.",
      "feedback": {
        "dokumentation": {
          "score": 80,
          "eingereichtText": userInput.split('\n')[0] || "Keine Dokumentation eingegeben",
          "positiv": [
            "Demo: Dokumentation wurde erfasst",
            "Demo: Strukturierte Eingabe"
          ],
          "fehler": [
            {
              "zitat": "Demo-Beispiel",
              "problem": "Dies ist nur eine Demo-Bewertung",
              "korrektur": "Für echte Bewertungen benötigen Sie einen gültigen API-Key"
            }
          ],
          "note": "Demo-Bewertung der Dokumentation"
        },
        "pflegemassnahmen": {
          "score": 70,
          "eingereichtText": userInput.split('\n')[1] || "(Nicht angegeben)",
          "positiv": ["Demo: Pflegemaßnahmen erfasst"],
          "fehler": [],
          "note": "Demo-Bewertung der Pflegemaßnahmen"
        },
        "beobachtungen": {
          "score": 75,
          "eingereichtText": userInput.split('\n')[2] || "(Nicht angegeben)",
          "positiv": ["Demo: Beobachtungen dokumentiert"],
          "fehler": [],
          "note": "Demo-Bewertung der Beobachtungen"
        },
        "struktur": {
          "score": 80,
          "eingereichtText": "Gesamte Dokumentationsstruktur",
          "positiv": ["Demo: Strukturierte Erfassung"],
          "fehler": [],
          "note": "Demo-Bewertung der Struktur"
        },
        "fachlichkeit": {
          "score": 70,
          "eingereichtText": "Fachliche Inhalte",
          "positiv": ["Demo: Fachbegriffe verwendet"],
          "fehler": [],
          "note": "Demo-Bewertung der Fachlichkeit"
        },
        "rechtliches": {
          "score": 75,
          "eingereichtText": "Rechtliche Aspekte",
          "positiv": ["Demo: Dokumentation vorhanden"],
          "fehler": [],
          "note": "Demo-Bewertung der rechtlichen Aspekte"
        }
      },
      "hauptprobleme": [
        "Dies ist nur eine Demo-Bewertung",
        "Für echte KI-Bewertungen wird ein API-Key benötigt"
      ],
      "mindestanforderungErfuellt": true,
      "empfehlung": "Dies ist eine Demo-Version. Um die volle Funktionalität mit echter KI-Bewertung zu nutzen, konfigurieren Sie bitte einen gültigen OpenAI API-Key."
    })
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
      temperature: 36.8,
      respiratoryRate: 16
    },
    symptoms: [
      "Kopfschmerzen seit heute Morgen",
      "Leichter Schwindel beim Aufstehen",
      "Nackensteifigkeit"
    ],
    correctMedication: "ramipril",
    needsDoctor: false,
    explanation: "Dies ist eine Demo. In der Vollversion würde hier eine detaillierte Erklärung stehen.",
    level: 1
  })
}