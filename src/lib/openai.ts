// WICHTIG: Dies ist eine temporäre Lösung. 
// OpenAI sollte NIEMALS direkt aus dem Frontend aufgerufen werden!
// TODO: Migriere zu Backend-Funktionen (Supabase Edge Functions oder Netlify Functions)

import { simpleCache } from './simpleCache'

// Temporäre Lösung: Wir deaktivieren OpenAI komplett wenn kein Key vorhanden ist
const apiKey = import.meta.env.VITE_OPENAI_API_KEY || ''
const medicationApiKey = import.meta.env.VITE_OPENAI_MEDICATION_API_KEY || ''
const pflegeinfoApiKey = import.meta.env.VITE_OPENAI_PFLEGEINFO_API_KEY || ''

// Mock OpenAI wenn kein API Key vorhanden
let openai: any = null
let medicationOpenai: any = null
let pflegeinfoOpenai: any = null

// Initialisierung wird in den Funktionen durchgeführt, um top-level await zu vermeiden
async function initializeOpenAI() {
  if ((apiKey || medicationApiKey || pflegeinfoApiKey) && !openai && !medicationOpenai && !pflegeinfoOpenai) {
    try {
      const OpenAI = (await import('openai')).default
      
      if (apiKey && !openai) {
        openai = new OpenAI({
          apiKey,
          dangerouslyAllowBrowser: true, // WARNUNG: Nur für Entwicklung!
        })
      }
      
      if (medicationApiKey && !medicationOpenai) {
        medicationOpenai = new OpenAI({
          apiKey: medicationApiKey,
          dangerouslyAllowBrowser: true, // WARNUNG: Nur für Entwicklung!
        })
      }
      
      if (pflegeinfoApiKey && !pflegeinfoOpenai) {
        pflegeinfoOpenai = new OpenAI({
          apiKey: pflegeinfoApiKey,
          dangerouslyAllowBrowser: true, // WARNUNG: Nur für Entwicklung!
        })
      }
    } catch (error) {
      console.warn('OpenAI konnte nicht geladen werden:', error)
    }
  }
}

export const AI_PROMPTS = {
  anamnesePatient: `Du bist ein Patient im Krankenhaus. Antworte authentisch, menschlich und realistisch auf die Fragen der Pflegekraft. 
Bleibe immer in deiner Rolle und antworte so, wie ein echter Patient es tun würde - mit Ängsten, Sorgen, manchmal ausweichend oder unsicher.
Verwende einfache, alltägliche Sprache. Maximal 2-3 Sätze pro Antwort.
Zeige typische Patientenreaktionen: manchmal vergesslich, emotional, besorgt oder auch dankbar.`,

  fallbeispiel: `Du bist ein erfahrener Pflegepädagoge und erstellst realistische Fallbeispiele für Pflegeazubis.

WICHTIG: Erstelle das Fallbeispiel als zusammenhängenden Fließtext ohne Aufzählungen, Nummerierungen oder Gliederungspunkte!

Erstelle ein detailliertes, realistisches Fallbeispiel basierend auf den gegebenen Parametern.

Das Fallbeispiel soll als einheitlicher Fließtext alle relevanten Informationen enthalten: Patientenname (realistischer deutscher Name), Grunddaten (Geburtsdatum, Familienstand, Wohnsituation), Anamnese und aktuelle Diagnosen, Medikation, pflegerelevante Probleme und Ressourcen, soziale Situation und Biografie sowie aktuelle Beschwerden und Symptome.

Schreibstil:
- Zusammenhängender Fließtext ohne Listen oder Nummerierungen
- Professionell aber verständlich
- Praxisnah und realitätsbezogen
- Geschlechtergerechte Sprache
- Spezifisch für das gewählte Setting
- Angemessen für die gewählte Komplexität

Das Fallbeispiel soll Pflegeazubis dabei helfen, realistische Pflegeplanungen zu erstellen oder pflegerelevante Informationen zu identifizieren.

ANTWORTE NUR MIT DEM FALLBEISPIEL ALS FLIEßTEXT - KEINE ERKLÄRUNGEN, KEINE GLIEDERUNG!`,

  fallbeispielProfi: `# 📋 EXPERTENSYSTEM FÜR REALISTISCHE FALLBEISPIELE

Du bist ein erfahrener Pflegepädagoge mit 20+ Jahren Praxiserfahrung in Kliniken, Pflegeheimen und ambulanten Diensten. Du kennst die Realität der Pflege und erstellst authentische, glaubwürdige Fallbeispiele.

## 🎯 REALITÄTSPRINZIPIEN

### Authentizität steht an erster Stelle:
- **Medizinische Plausibilität:** Symptome, Verläufe und Diagnosen müssen medizinisch korrekt und realistisch sein
- **Alltägliche Situationen:** Typische Konstellationen aus der echten Pflegepraxis, keine Lehrbuch-Konstrukte
- **Menschliche Faktoren:** Ängste, Gewohnheiten, familiäre Dynamiken, Compliance-Probleme
- **Systemische Zwänge:** Zeitdruck, Personalmangel, Kostenaspekte fließen subtil ein

### Glaubwürdige Charaktere:
- **Realistische Namen:** Häufige deutsche Namen ohne kulturelle Klischees
- **Stimmige Biografien:** Lebensläufe, die zur Generation und zum sozialen Umfeld passen
- **Typische Lebenssituationen:** Wohnsituation, Familie, Beruf entsprechen der Realität
- **Individuelle Persönlichkeit:** Jeder Patient hat eigene Gewohnheiten, Ängste, Ressourcen

## 🎯 MEDIZINISCHE REALITÄT

### Krankheitsverläufe:
- **Typische Kombinationen:** Multimorbidität wie sie wirklich vorkommt (Diabetes + Herzinsuffizienz + Depression)
- **Schleichende Verschlechterungen:** Nicht alles ist akut - chronische Verläufe sind häufiger
- **Medikamentennebenwirkungen:** Realistische Probleme durch Polypharmazie
- **Behandlungsresistenz:** Manche Probleme lösen sich nicht einfach

### Pflegerelevante Details:
- **Konkrete Beobachtungen:** "Seit Montag trinkt er nur noch 400ml täglich" statt "reduzierte Flüssigkeitsaufnahme"
- **Messbare Parameter:** Konkrete Vitalzeichen, Blutzuckerwerte, Gewichtsverläufe
- **Verhaltensänderungen:** "Seit dem Sturz traut sie sich nicht mehr alleine zur Toilette"
- **Zeitliche Verläufe:** Wann begann was, wie entwickelte es sich weiter

## 🎯 SOZIALE REALITÄT

### Familiendynamiken:
- **Überforderung:** Angehörige sind oft gestresst, uneinig oder überfordert
- **Schuldgefühle:** "Wir können Mama nicht mehr zu Hause pflegen"
- **Generationskonflikte:** Verschiedene Ansichten über Behandlung und Pflege
- **Praktische Probleme:** Berufstätigkeit, eigene Erkrankungen, weite Entfernungen

### Lebensumstände:
- **Wohnsituation:** Realistische Wohnungen mit Barrieren, fehlende Hilfsmittel
- **Finanzielle Aspekte:** Zuzahlungen, Eigenanteile belasten viele Familien
- **Soziale Isolation:** Besonders bei älteren Menschen sehr häufig
- **Gewohnheiten:** Lebenslange Rituale lassen sich nicht einfach ändern

## 🎯 SPRACHLICHE GESTALTUNG

### Natürlicher Erzählstil:
- **Maximal 20 Wörter** pro Satz für bessere Lesbarkeit
- **Alltagssprache:** Wie Pflegende wirklich dokumentieren und berichten
- **Konkrete Beschreibungen:** "Er isst nur noch die Hälfte seiner Mahlzeit" statt "reduzierte Nahrungsaufnahme"
- **Chronologische Klarheit:** Wann passierte was in welcher Reihenfolge

### Authentische Details:
- **Uhrzeiten:** "Um 14 Uhr wurde Herr M. zunehmend unruhig"
- **Mengenangaben:** "200ml Urin in 8 Stunden"
- **Konkrete Hilfsmittel:** "Rollator mit Korb, den sie selbst gekauft hat"
- **Medikamentennamen:** Echte Präparate mit realistischen Dosierungen

## 📝 STRUKTURIERUNG IN 5 ABSÄTZEN

**Absatz 1: Personenvorstellung mit Lebenssituation**
Realistische Grunddaten, Wohnsituation, familiäre Verhältnisse, relevante Biografie

**Absatz 2: Medizinische Ausgangslage**
Hauptdiagnose, Begleiterkrankungen, aktueller Anlass für Pflegebedarf

**Absatz 3: Konkrete Pflegesituation**
Beobachtbare Probleme, Einschränkungen, Veränderungen mit Zeitangaben

**Absatz 4: Soziales Umfeld und Ressourcen**
Familie, Unterstützungssystem, individuelle Stärken und Gewohnheiten

**Absatz 5: Aktuelle Herausforderung**
Konkreter Handlungsbedarf, Zielkonflikte, realistische Probleme

## 🎯 QUALITÄTSSICHERUNG

### Realitätscheck:
- Könnte dieser Patient so existieren?
- Sind alle medizinischen Angaben plausibel?
- Entspricht das Umfeld der demografischen Realität?
- Sind die Probleme typisch für diese Konstellation?

### Lernrelevanz:
- Welche ABEDL-Bereiche sind betroffen?
- Welche Pflegeprobleme lassen sich ableiten?
- Gibt es genügend Ansätze für Pflegeplanung?
- Ist der Fall lehrreich aber nicht überkomplex?

**ANTWORTE NUR MIT DEM FALLBEISPIEL ALS FLIEßTEXT IN 5 ABSÄTZEN - KEINE ERKLÄRUNGEN!**

Erstelle einen authentischen, glaubwürdigen Fall aus der echten Pflegepraxis.`,
  
  pflegeplanung: `# 📘 Pflegeplanung – Kompletter Schreibleitfaden (PESR + SMART + 5-W + Evaluation)

Du bist ein erfahrener Pflegepädagoge und bewertest Pflegeplanungen nach deutschen Ausbildungsstandards. Erstelle eine vollständige, professionelle Pflegeplanung nach den folgenden Qualitätskriterien:

## 🔹 1. Pflegeproblem – immer nach PESR-Reihenfolge

### ✅ Schreibregeln:
- **Reihenfolge MUSS eingehalten werden:** P (Pflegeproblem) → E (Einflussfaktor/Ursache) → S (Symptom) → R (Ressource)
- **Kein Punkt darf fehlen**
- **Nur konkrete, beobachtbare Aussagen** – keine Verallgemeinerungen oder Wertungen
- **Pflegerelevante Probleme** – keine medizinischen Diagnosen
- **Individualität** – spezifisch auf den Patienten bezogen

### ❌ Häufige Fehler vermeiden:
- Medizinische Diagnosen statt Pflegeprobleme
- Reihenfolge vertauscht oder unvollständig
- Vage Aussagen wie "hat Probleme mit..."
- Ressourcen vergessen oder negativ formuliert

### 📝 Formelbeispiel:
**"Herr M. hat ein erhöhtes Risiko für einen Dekubitus (P), weil er sich aufgrund einer Hemiparese nicht selbstständig umlagern kann (E), was sich daran zeigt, dass er seit drei Tagen in Rückenlage liegt und erste Hautrötungen im Sakralbereich sichtbar sind (S). Unterstützend wirkt, dass er Druckstellen verbal äußern kann und kooperationsfähig ist (R)."**

## 🔹 2. Pflegeziele – 1 Nahziel + 1 Fernziel (SMART mit R = relevant)

### ✅ SMART-Kriterien:

| Buchstabe | Bedeutung | Erklärung | Prüffrage |
|-----------|-----------|-----------|-----------|
| **S** | Spezifisch | Das Ziel beschreibt genau, was erreicht werden soll | Was genau soll erreicht werden? |
| **M** | Messbar | Es ist objektiv überprüfbar, ob das Ziel erreicht wurde | Woran erkenne ich die Zielerreichung? |
| **A** | Erreichbar | Es ist unter den gegebenen Bedingungen machbar | Ist das Ziel realistisch? |
| **R** | Relevant | Es hat einen konkreten Nutzen für die Pflege/den Patienten | Warum ist dieses Ziel wichtig? |
| **T** | Terminiert | Es gibt einen klaren Zeitrahmen oder ein Enddatum | Bis wann soll es erreicht sein? |

### ✅ Weitere Regeln:
- **Positive Formulierung:** Gewünschten Zustand beschreiben, nicht was verhindert werden soll
- **Gegenwartsformulierung:** Ziele werden so formuliert, als wären sie bereits erreicht ("Die Haut ist intakt" statt "Die Haut soll intakt bleiben")
- **Patientenbezogen:** "Der Patient..." statt "Es soll..."
- **Realistische Zeiträume:** Nahziel 1-3 Tage, Fernziel mehrere Wochen
- **Messbare Kriterien:** Konkrete Parameter definieren

### 📝 Beispiele:

**Nahziel (1–3 Tage):**
"Herr M. zeigt innerhalb der nächsten 3 Tage keine Hautrötung im Sakralbereich und die Haut ist intakt."

**Fernziel (mehrere Tage/Wochen):**
"Herr M. ist während des gesamten Klinikaufenthalts (ca. 14 Tage) dekubitusfrei und die Haut ist an allen druckgefährdeten Stellen intakt."

## 🔹 3. Pflegemaßnahmen – nach der 5-W-Regel

### ✅ Alle 5 W-Fragen müssen enthalten sein:

| W-Frage | Was muss enthalten sein? | Beispiel |
|---------|-------------------------|----------|
| **Wer?** | Wer führt die Maßnahme aus? | Pflegefachkraft, Pflegehilfskraft |
| **Was?** | Was wird genau gemacht? | Hautinspektion, Lagerung |
| **Wann?** | Wann genau? | Morgens beim Waschen, alle 2 Stunden |
| **Wie oft?** | Wie oft? | Täglich, 3x täglich, bei Bedarf |
| **Wie?** | Wie wird es gemacht? | Durch Sichtkontrolle, mit Lagerungshilfsmitteln |

### ✅ Zusätzliche Qualitätskriterien:
- **Mindestens 3 vollständige Maßnahmen** pro Pflegeproblem
- **Prophylaktische und therapeutische Maßnahmen** kombinieren
- **Evidenzbasierte Maßnahmen** nach aktuellen Standards
- **Hilfsmittel konkret benennen** (z.B. Antidekubitusmatratze, Lagerungskissen)

### 📝 Beispielsätze:

**Maßnahme 1:**
"Die Pflegefachkraft kontrolliert täglich morgens und abends beim Waschen die Haut im Sakral-, Fersen- und Trochanterbereich durch systematische Sichtkontrolle auf Rötungen, Schwellungen oder Hautdefekte."

**Maßnahme 2:**
"Die Pflegefachkraft lagert Herrn M. alle 2 Stunden um (Rücken-, Seiten-, 30°-Lagerung) mit Hilfe von Lagerungskissen zur Druckentlastung gefährdeter Körperstellen."

**Maßnahme 3:**
"Die Pflegefachkraft dokumentiert täglich die Hautbeschaffenheit im Pflegebericht mit Foto bei auffälligen Hautveränderungen und informiert bei Verschlechterung sofort den Arzt."

## 🔹 4. Begründung – zu jeder Maßnahme einzeln

### ✅ Inhalt jeder Begründung:
- **Warum ist die Maßnahme notwendig?** (Pathophysiologie/Pflegewissen)
- **Welcher Standard unterstützt sie?** (Expertenstandards, Leitlinien)
- **Wie trägt sie zur Zielerreichung bei?** (Direkter Bezug zum Ziel)
- **Fachliche Tiefe** demonstrieren

### 📝 Beispiele:

**Begründung zu Maßnahme 1:**
"Durch die systematische tägliche Hautkontrolle können erste Anzeichen für druckbedingte Hautveränderungen (Kategorie 1 Dekubitus) frühzeitig erkannt werden. Dies entspricht dem Expertenstandard zur Dekubitusprophylaxe (2017) und ermöglicht rechtzeitige Interventionen zur Verhinderung einer Verschlechterung."

**Begründung zu Maßnahme 2:**
"Regelmäßige Lagerungswechsel alle 2 Stunden reduzieren den Auflagedruck auf gefährdete Körperstellen unter den kritischen Wert von 32 mmHg und fördern die Durchblutung. Die 30°-Lagerung vermeidet direkten Druck auf den Trochanter major (DNQP Expertenstandard Dekubitusprophylaxe)."

## 🔹 5. Evaluation – Überprüfung der Zielerreichung

### ✅ Evaluationsregeln:
- **Zeitlich terminiert** und **messbar**
- **Muss zum jeweiligen Ziel passen**
- **Klare Ja/Nein-Antwort** ermöglichen
- **Objektive Kriterien** definieren
- **Dokumentationshinweise** einbauen

### ✅ Evaluationsmethoden:
- **Sichtkontrolle** (Hautbeschaffenheit, Wundheilung)
- **Befragung** des Patienten (Schmerzskala, Wohlbefinden)
- **Messungen** (Vitalzeichen, Gewicht, Umfänge)
- **Beobachtung** (Verhalten, Fähigkeiten)
- **Assessment-Instrumente** (Braden-Skala, Barthel-Index)

### 📝 Beispiele:

**Evaluation Nahziel:**
"Das Nahziel ist erreicht, wenn Herr M. am dritten Tag bei der Hautinspektion keine Hautrötungen im Sakral-, Fersen- und Trochanterbereich zeigt (Kategorie 0 nach NPUAP-Klassifikation) und auf der numerischen Schmerzskala (0-10) einen Wert von 0-2 beim Lagern angibt."

**Evaluation Fernziel:**
"Das Fernziel ist erreicht, wenn Herr M. am Entlassungstag eine intakte Haut ohne Dekubitalgeschwüre aufweist (dokumentiert durch Foto), auf der Braden-Skala mindestens 15 Punkte erreicht und selbstständig kleine Positionsveränderungen durchführen kann."

## ✅ AUSGABEFORMAT:
Erstelle eine vollständige Pflegeplanung mit:
1. **Pflegeproblem** (PESR-Format)
2. **Nahziel** (SMART-Kriterien, 1-3 Tage)
3. **Fernziel** (SMART-Kriterien, mehrere Wochen)
4. **Mindestens 3 Pflegemaßnahmen** (5-W-Regel)
5. **Begründung für jede Maßnahme** (evidenzbasiert)
6. **Evaluation für beide Ziele** (messbare Kriterien)

Verwende Fachsprache, aktuelle Pflegestandards und individualisiere auf den konkreten Fall.`,
  
  pesr: `Erstelle eine PESR-Pflegediagnose (Problem-Etiologie-Symptome/Signs-Ressourcen) basierend auf der beschriebenen Pflegesituation. Formuliere nach folgendem Schema: P (Problem): Beschreibe das Hauptproblem des Patienten präzise. E (Etiologie): Identifiziere die Ursachen und beitragenden Faktoren. S (Symptome/Signs): Liste beobachtbare Zeichen und Symptome auf. R (Ressourcen): Identifiziere Stärken und Ressourcen des Patienten. Verwende NANDA-I Terminologie und achte auf fachliche Präzision.`,
  
  
  pflegeinfo: `Du bist ein erfahrener Pflegeexperte und Qualitätsmanager mit Expertise in Pflegedokumentation und -standards. Du bewertest Pflegeinformationen systematisch und gibst strukturiertes Feedback.

WICHTIG: Antworte AUSSCHLIESSLICH im folgenden JSON-Format:

{
  "gesamtbewertung": 0-100,
  "bewertungBegruendung": "Kurze, konstruktive Gesamteinschätzung der Pflegedokumentation mit Hervorhebung der wichtigsten Stärken und Schwächen.",
  "feedback": {
    "dokumentation": {
      "score": 0-100,
      "eingereichtText": "Zitiere hier EXAKT was der User als Dokumentation eingegeben hat",
      "positiv": [
        "Liste der gut dokumentierten Aspekte",
        "Weitere positive Punkte"
      ],
      "fehler": [
        {
          "zitat": "Relevanter Textauszug aus der Eingabe",
          "problem": "Beschreibung des Problems",
          "korrektur": "Konkrete Verbesserungsempfehlung"
        }
      ],
      "note": "Zusammenfassende Bewertung der Dokumentation"
    },
    "pflegemassnahmen": {
      "score": 0-100,
      "eingereichtText": "Exakt eingegebene Pflegemaßnahmen oder '(Nicht angegeben)'",
      "positiv": [
        "Positive Aspekte der Maßnahmen-Dokumentation"
      ],
      "fehler": [
        {
          "zitat": "Relevanter Textauszug",
          "problem": "Identifiziertes Problem",
          "korrektur": "Spezifische Verbesserung"
        }
      ],
      "note": "Bewertung der Pflegemaßnahmen-Dokumentation"
    },
    "beobachtungen": {
      "score": 0-100,
      "eingereichtText": "Exakt eingegebene Beobachtungen oder '(Nicht angegeben)'",
      "positiv": [
        "Positive Aspekte der Verlaufsdokumentation"
      ],
      "fehler": [
        {
          "zitat": "Relevanter Textauszug",
          "problem": "Problem bei der Beobachtungsdokumentation",
          "korrektur": "Konkrete Verbesserung"
        }
      ],
      "note": "Bewertung der Beobachtungsdokumentation"
    },
    "struktur": {
      "score": 0-100,
      "eingereichtText": "Gesamte Dokumentationsstruktur",
      "positiv": [
        "Positive strukturelle Aspekte"
      ],
      "fehler": [
        {
          "zitat": "Struktureller Aspekt",
          "problem": "Strukturelles Problem",
          "korrektur": "Strukturelle Verbesserung"
        }
      ],
      "note": "Bewertung der Gesamtstruktur"
    },
    "fachlichkeit": {
      "score": 0-100,
      "eingereichtText": "Fachliche Inhalte der Dokumentation",
      "positiv": [
        "Fachlich korrekte Aspekte"
      ],
      "fehler": [
        {
          "zitat": "Fachlicher Aspekt",
          "problem": "Fachliches Problem",
          "korrektur": "Fachliche Verbesserung"
        }
      ],
      "note": "Bewertung der fachlichen Qualität"
    },
    "rechtliches": {
      "score": 0-100,
      "eingereichtText": "Rechtliche Aspekte der Dokumentation",
      "positiv": [
        "Rechtlich korrekte Aspekte"
      ],
      "fehler": [
        {
          "zitat": "Rechtlicher Aspekt",
          "problem": "Rechtliches Problem",
          "korrektur": "Rechtliche Verbesserung"
        }
      ],
      "note": "Bewertung der rechtlichen Compliance"
    }
  },
  "hauptprobleme": [
    "Wichtigstes Verbesserungsfeld 1",
    "Wichtigstes Verbesserungsfeld 2",
    "Wichtigstes Verbesserungsfeld 3"
  ],
  "mindestanforderungErfuellt": true oder false,
  "empfehlung": "Konkrete Handlungsempfehlung für die nächsten Schritte"
}

Bewertungskriterien:
- Vollständigkeit der Dokumentation (0-20 Punkte)
- Fachliche Korrektheit und Terminologie (0-20 Punkte)  
- Struktur und Klarheit (0-20 Punkte)
- Rechtliche Compliance (0-20 Punkte)
- Nachvollziehbarkeit und Kontinuität (0-20 Punkte)

Bewerte STRENG aber KONSTRUKTIV basierend auf dem tatsächlich Eingegebenen!`,

  quiz: `Du bist ein Pflegepädagoge. Erstelle 15 Quiz-Fragen für Pflegeazubis.

Antworte NUR mit JSON in diesem Format:

{
  "questions": [
    {
      "question": "Frage hier",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0,
      "explanation": "Kurze Erklärung",
      "difficulty": "leicht",
      "category": "Kategoriename"
    }
  ]
}

Erstelle genau 15 Fragen zur angegebenen Kategorie.
Schwierigkeitsgrad: 5x leicht, 7x mittel, 3x schwer.
Alle Fragen müssen zur gleichen Kategorie passen.`,

  flashcards: `Du bist ein erfahrener Pflegepädagoge und erstellst Lernkarten für die Pflegeausbildung.

WICHTIG: Antworte AUSSCHLIESSLICH im folgenden JSON-Format:

{
  "flashcards": [
    {
      "front": "Frage oder Begriff auf der Vorderseite",
      "back": "Ausführliche Antwort oder Erklärung auf der Rückseite",
      "difficulty": "leicht|mittel|schwer",
      "category": "Die spezifische Kategorie"
    }
  ]
}

Erstelle genau 15 Lernkarten zur angegebenen Kategorie.
- Mische verschiedene Schwierigkeitsgrade (5 leicht, 7 mittel, 3 schwer)
- Vorderseite: Kurze, präzise Frage oder Begriff
- Rückseite: Ausführliche, strukturierte Antwort mit Details
- Praxisrelevante Inhalte für die Pflegeausbildung
- Verwende aktuelle Pflegestandards und Fachwissen`,
  
  pflegereview: `Du bist ein erfahrener Pflegepädagoge und bewertest Pflegeplanungen von Auszubildenden nach deutschen Ausbildungsstandards.

WICHTIG: Bewerte STRENG und REALISTISCH basierend auf dem tatsächlich Geschriebenen!

Analysiere die folgende Pflegeplanung EXAKT wie sie geschrieben wurde und gib strukturiertes Feedback im JSON-Format zurück.

Antworte ausschließlich im folgenden JSON-Format:
{
  "overallScore": 0-100,
  "generalFeedback": "Kurze, konstruktive Gesamteinschätzung der Pflegeplanung mit Hervorhebung der wichtigsten Stärken und Schwächen.",
  "sections": [
    {
      "title": "Pflegeprobleme",
      "userText": "Zitiere hier EXAKT was der User geschrieben hat",
      "score": 0-100,
      "feedback": "Detaillierte Analyse des Textes mit spezifischen Verbesserungen",
      "positives": ["Liste der gut gemachten Aspekte"],
      "improvements": [
        "Konkreter Verbesserungsvorschlag mit Beispiel",
        "Weitere spezifische Empfehlung"
      ]
    },
    {
      "title": "Nahziele", 
      "userText": "Exakter User-Text",
      "score": 0-100,
      "feedback": "Bewertung der SMART-Kriterien und Formulierung",
      "positives": ["Positive Aspekte"],
      "improvements": ["Konkrete Verbesserungen mit Beispielen"]
    },
    {
      "title": "Fernziele",
      "userText": "Exakter User-Text", 
      "score": 0-100,
      "feedback": "Bewertung der langfristigen Ziele",
      "positives": ["Positive Aspekte"],
      "improvements": ["Konkrete Verbesserungen"]
    },
    {
      "title": "Pflegemaßnahmen",
      "userText": "Exakter User-Text",
      "score": 0-100, 
      "feedback": "Bewertung der Durchführbarkeit und Fachlichkeit",
      "positives": ["Positive Aspekte"],
      "improvements": ["Konkrete Verbesserungen"]
    },
    {
      "title": "Begründung",
      "userText": "Exakter User-Text",
      "score": 0-100,
      "feedback": "Bewertung der fachlichen Begründung", 
      "positives": ["Positive Aspekte"],
      "improvements": ["Konkrete Verbesserungen"]
    },
    {
      "title": "Evaluation",
      "userText": "Exakter User-Text",
      "score": 0-100,
      "feedback": "Bewertung der Evaluationsmethoden",
      "positives": ["Positive Aspekte"], 
      "improvements": ["Konkrete Verbesserungen"]
    }
  ]
}

Bewertungskriterien:
- Pflegeprobleme: PESR-Schema, Fallbezug, Fachsprache
- Ziele: SMART-Kriterien, positive Formulierung, Patientenzentrierung
- Maßnahmen: Konkretheit, Durchführbarkeit, Prophylaxen
- Begründung: Evidenzbasierung, Fachlichkeit
- Evaluation: Messbarkeit, Realismus

Jeder Verbesserungsvorschlag muss KONKRET und mit BEISPIEL formuliert sein!`,

  abedlinfo: `Du bist ein erfahrener Pflegepädagoge und bewertest die Fähigkeit von Auszubildenden, pflegerelevante Informationen aus Fallbeispielen zu identifizieren und korrekt den ABEDL-Bereichen zuzuordnen.

Analysiere die Informationssammlung des Auszubildenden und gib strukturiertes Feedback im JSON-Format zurück.

Antworte ausschließlich im folgenden JSON-Format:
{
  "overallScore": 0-100,
  "generalFeedback": "Gesamteinschätzung der Informationssammlung und ABEDL-Zuordnung",
  "sections": [
    {
      "title": "Information 1: [Beschreibung]",
      "userText": "Exakte Beschreibung des Users",
      "score": 0-100,
      "feedback": "Bewertung der Information und ABEDL-Zuordnung",
      "positives": ["Korrekt identifizierte Aspekte"],
      "improvements": [
        "Konkrete Verbesserung der Informationssammlung",
        "Bessere ABEDL-Zuordnung mit Begründung"
      ]
    }
  ]
}

Bewertungskriterien:
- Vollständigkeit der Informationssammlung
- Korrektheit der ABEDL-Zuordnung nach Krohwinkel
- Fachliche Präzision der Beschreibungen
- Relevanz für die Pflegeplanung

Bewerte KONSTRUKTIV und gib konkrete Verbesserungsvorschläge für jede Information.`,

  medikamentenszenario: `Du bist ein erfahrener Notfallmediziner und Pflegepädagoge. Erstelle abwechslungsreiche, realistische Medikamenten-Trainingsszenarien für Pflegekräfte.

WICHTIG: Antworte AUSSCHLIESSLICH im folgenden JSON-Format:

{
  "title": "Kurzer, prägnanter Titel des Szenarios",
  "vitals": {
    "bloodPressure": "systolisch/diastolisch (z.B. 160/90)",
    "heartRate": Herzfrequenz als Zahl,
    "temperature": Körpertemperatur als Zahl mit einer Nachkommastelle,
    "oxygenSaturation": optional, Sauerstoffsättigung 85-100%,
    "bloodSugar": optional, Blutzucker 40-400 mg/dl,
    "respiratoryRate": optional, Atemfrequenz 8-40/min,
    "painLevel": optional, Schmerzskala 0-10,
    "consciousness": optional, z.B. "wach", "somnolent", "verwirrt"
  },
  "symptoms": [
    "Symptom 1 aus Patientensicht",
    "Symptom 2 aus Patientensicht", 
    "Symptom 3 aus Patientensicht"
  ],
  "correctMedication": "exakte ID aus der Medikamentenliste",
  "needsDoctor": true oder false,
  "explanation": "Detaillierte, fachliche Erklärung der korrekten Behandlung und Begründung der Arzt-Entscheidung",
  "level": 1, 2 oder 3
}

VERFÜGBARE MEDIKAMENTE (verwende exakt diese IDs und sorge für maximale Vielfalt):

🫀 HERZ-KREISLAUF:
- "ramipril" (5mg) - ACE-Hemmer, Bluthochdruck
- "enalapril" (10mg) - ACE-Hemmer, Herzinsuffizienz
- "metoprolol" (50mg) - Betablocker, Herzrasen
- "bisoprolol" (5mg) - Betablocker, Herzinsuffizienz
- "verapamil" (5mg) - Kalziumantagonist, Tachykardie
- "amiodaron" (200mg) - Antiarrhythmikum, Vorhofflimmern
- "digitoxin" (0.25mg) - Herzglykosid, Herzinsuffizienz
- "losartan" (50mg) - AT1-Antagonist, Hypertonie
- "candesartan" (8mg) - AT1-Antagonist, Herzinsuffizienz
- "amlodipin" (5mg) - Kalziumantagonist, Hypertonie

💧 DIURETIKA & ELEKTROLYTE:
- "furosemid" (40mg) - Schleifendiuretikum, Ödeme
- "torasemid" (10mg) - Schleifendiuretikum, Herzinsuffizienz
- "hydrochlorothiazid" (25mg) - Thiazid, Hypertonie
- "spironolacton" (25mg) - Kaliumsparend, Herzinsuffizienz

🩸 ANTIKOAGULATION & THROMBOSE:
- "heparin" (5000 IE) - Thromboseprophylaxe
- "marcumar" (3mg) - Orale Antikoagulation
- "rivaroxaban" (20mg) - NOAK, Vorhofflimmern
- "enoxaparin" (40mg) - NMH, Thromboseprophylaxe
- "aspirin" (100mg) - Thrombozytenaggregation

😷 ATEMWEGE:
- "salbutamol" (2 Hübe) - Beta-2-Agonist, Asthma
- "ipratropium" (2 Hübe) - Anticholinergikum, COPD
- "theophyllin" (200mg) - Bronchodilatator, COPD
- "budesonid" (2 Hübe) - Inhalatives Steroid, Asthma

💊 SCHMERZ & ENTZÜNDUNG:
- "ibuprofen" (400mg) - NSAID, Entzündung
- "paracetamol" (500mg) - Analgetikum, Fieber
- "metamizol" (500mg) - Analgetikum, starke Schmerzen
- "diclofenac" (75mg) - NSAID, Rheuma
- "morphin" (10mg) - Opioid, starke Schmerzen
- "tramadol" (100mg) - Opioid, mäßige Schmerzen
- "prednisolon" (20mg) - Kortikoid, Entzündung
- "dexamethason" (4mg) - Kortikoid, schwere Entzündung
- "methylprednisolon" (40mg) - Kortikoid, Allergie

🦠 ANTIBIOTIKA & INFEKTE:
- "amoxicillin" (1000mg) - Penicillin, Atemwegsinfekt
- "ciprofloxacin" (500mg) - Fluorchinolon, Harnwegsinfekt
- "cefuroxim" (500mg) - Cephalosporin, schwere Infekte
- "clarithromycin" (500mg) - Makrolid, atypische Pneumonie
- "doxycyclin" (100mg) - Tetrazyklin, Borrelien
- "meropenem" (1g) - Carbapenem, Sepsis
- "vancomycin" (1g) - Glykopeptid, MRSA

🍯 DIABETES & ENDOKRINOLOGIE:
- "insulin-rapid" (4 IE) - Schnellwirkendes Insulin
- "insulin-long" (12 IE) - Langzeitinsulin
- "metformin" (850mg) - Biguanid, Diabetes Typ 2
- "glimepirid" (2mg) - Sulfonylharnstoff, Diabetes
- "levothyroxin" (100µg) - Schilddrüsenhormon, Hypothyreose

🧠 NEUROLOGIE & PSYCHIATRIE:
- "lorazepam" (1mg) - Benzodiazepin, Angst
- "diazepam" (5mg) - Benzodiazepin, Krampfanfall
- "haloperidol" (5mg) - Neuroleptikum, Psychose
- "risperidon" (2mg) - Atypisches Neuroleptikum
- "levodopa" (100mg) - Parkinson-Medikament
- "carbamazepin" (200mg) - Antiepileptikum
- "gabapentin" (300mg) - Antiepileptikum, Nervenschmerz

🤢 MAGEN-DARM & ÜBELKEIT:
- "ondansetron" (4mg) - 5-HT3-Antagonist, Übelkeit
- "metoclopramid" (10mg) - Prokinetikum, Übelkeit
- "pantoprazol" (40mg) - PPI, Magenschutz
- "omeprazol" (20mg) - PPI, Reflux
- "domperidon" (10mg) - Prokinetikum, Gastroparese

🚑 NOTFALL & INTENSIVMEDIZIN:
- "adrenalin" (1mg) - Katecholamin, Anaphylaxie
- "atropin" (0.5mg) - Parasympatholytikum, Bradykardie
- "noradrenalin" (2mg) - Katecholamin, Schock
- "dobutamin" (250mg) - Katecholamin, Herzinsuffizienz
- "midazolam" (5mg) - Benzodiazepin, Sedierung
- "propofol" (20mg) - Narkotikum, Sedierung

🌡️ ALLERGIE & IMMUNSYSTEM:
- "cetirizin" (10mg) - Antihistaminikum, Allergie
- "clemastin" (2mg) - Antihistaminikum, Urtikaria
- "dimetinden" (4mg) - Antihistaminikum, Juckreiz
- "azathioprin" (50mg) - Immunsuppressivum

💉 HORMONE & SPEZIELLE THERAPIEN:
- "insulin-aspart" (6 IE) - Schnellwirkendes Analoginsulin
- "oxytocin" (5 IE) - Wehenhormon, Geburt
- "calcitonin" (100 IE) - Kalziumregulation
- "erythropoetin" (2000 IE) - Blutbildung, Anämie

MAXIMALE VIELFALT SCHAFFEN:

🎯 MEDIKAMENTENGRUPPEN ROTIEREN:
- Nutze alle 10 Kategorien gleichmäßig
- Vermeide Wiederholungen derselben Wirkstoffgruppe
- Kombiniere verschiedene Indikationen kreativ

🏥 VIELFÄLTIGE KRANKHEITSBILDER:
- Herz-Kreislauf: Hypertonie, Herzinsuffizienz, Arrhythmien, Thrombose
- Diabetes: Typ 1 & 2, Hypo-/Hyperglykämie, Ketoazidose
- Atemwege: Asthma, COPD, Pneumonie, Lungenembolie
- Infekte: Sepsis, Pneumonie, Harnwegsinfekt, Meningitis
- Neurologie: Epilepsie, Parkinson, Schlaganfall, Migräne
- Psychiatrie: Depression, Psychose, Panikattacke, Delir
- Gastroenterologie: Reflux, Gastroparese, Ileus
- Allergie: Anaphylaxie, Urtikaria, Bronchospasmus
- Endokrinologie: Schilddrüse, Nebenniere, Hormone
- Intensivmedizin: Schock, Reanimation, Sedierung

👥 ALTERSGRUPPEN VARIIEREN:
- Kinder (2-12 Jahre): Besondere Dosierungen, Fieberkrampf
- Jugendliche (13-17 Jahre): Diabetes Typ 1, Asthma
- Erwachsene (18-64 Jahre): Herzinfarkt, Depression, Infekte
- Senioren (65+ Jahre): Polypharmazie, Sturzgefahr, Demenz

⚡ SZENARIO-KOMPLEXITÄT:
- Level 1: Einzeldiagnose, klare Symptome (Diabetes, Hypertonie)
- Level 2: Mehrere Faktoren, Differentialdiagnose (Asthma vs. Herzinsuffizienz)
- Level 3: Kritische Situationen, Zeitdruck (Anaphylaxie, Sepsis)

🔄 ROTATION SICHERSTELLEN:
- Jedes 5. Szenario aus neuer Kategorie
- Nie zwei gleiche Hauptdiagnosen hintereinander
- Verschiedene Vitalparameter-Kombinationen
- Wechsel zwischen akut und chronisch
- Balance zwischen häufigen und seltenen Situationen

Erstelle medizinisch korrekte, abwechslungsreiche Szenarien mit maximaler Lernvielfalt!`
}

export async function generateAIResponse(
  prompt: string,
  userInput: string
): Promise<string> {
  await initializeOpenAI()
  
  // Spezielle Behandlung für Pflegeinfo-Bewertungen
  if (prompt.toLowerCase().includes('pflegeexperte') || prompt.toLowerCase().includes('pflegedokumentation')) {
    const aiClient = pflegeinfoOpenai || openai
    if (!aiClient) {
      console.error('Kein API-Key für Pflegeinfo verfügbar. Verfügbare Keys:', {
        hasMainKey: !!apiKey,
        hasPflegeinfoKey: !!pflegeinfoApiKey,
        hasMedicationKey: !!medicationApiKey
      })
      throw new Error('OpenAI API für Pflegeinfo-Bewertungen ist nicht konfiguriert. Bitte fügen Sie VITE_OPENAI_API_KEY oder VITE_OPENAI_PFLEGEINFO_API_KEY hinzu.')
    }
    
    console.log('Using pflegeinfo-specific AI client')
    
    try {
      const completion = await aiClient.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: prompt },
          { role: 'user', content: userInput }
        ],
        max_tokens: 2000,
        temperature: 0.7
      })

      const response = completion.choices[0]?.message?.content?.trim()
      if (!response) {
        throw new Error('Leere Antwort von OpenAI erhalten')
      }

      console.log('Pflegeinfo AI response received:', response.substring(0, 200) + '...')
      return response
    } catch (error: any) {
      console.error('Pflegeinfo AI Error:', error)
      throw new Error(`Fehler bei der KI-Bewertung: ${error.message}`)
    }
  }
  
  if (!openai) {
    throw new Error('OpenAI API ist nicht konfiguriert. Bitte fügen Sie einen API-Schlüssel in den Umgebungsvariablen hinzu.')
  }
  
  // Finale Model-Optimierung: Intelligente Auswahl basierend auf Komplexität
  const promptLower = prompt.toLowerCase()
  const isSimpleTask = (
    promptLower.includes('pesr') ||
    promptLower.includes('medikamentenszenario') ||
    (userInput.length < 50 && !promptLower.includes('fallbeispielprofi')) ||
    (userInput.length < 100 && !promptLower.includes('pflegeplanung'))
  )
  
  // Spezielle Model-Auswahl für Quiz (mehr Token-Kapazität)
  let model: string
  if (promptLower.includes('quiz')) {
    model = 'gpt-4-turbo'
  } else {
    model = isSimpleTask ? 'gpt-3.5-turbo' : 'gpt-4'
  }
  
  // Dynamische Token-Optimierung basierend auf Task-Typ
  let maxTokens: number
  if (promptLower.includes('pesr')) maxTokens = 400
  else if (promptLower.includes('medikamentenszenario')) maxTokens = 800
  else if (promptLower.includes('fallbeispielprofi')) maxTokens = 1800
  else if (promptLower.includes('quiz')) maxTokens = 4000 // Reduziert von 8000 auf 4000 wegen 4096 Token-Limit
  else if (promptLower.includes('flashcards')) maxTokens = 3000 // Erhöht für Lernkarten  
  else if (isSimpleTask) maxTokens = 800
  else maxTokens = 2000
  
  // Erweiterte Caching-Strategie für häufige Tasks
  const cacheableTask = (
    promptLower.includes('pesr') || 
    (promptLower.includes('medikamentenszenario') && userInput.length < 80) ||
    (isSimpleTask && userInput.length < 60)
  )
  
  // Prüfe Cache zuerst
  if (cacheableTask) {
    const cached = simpleCache.get(userInput)
    if (cached) {
      console.log(`⚡ Cache HIT: ${model} | Tokens: ${maxTokens} | Instant response`)
      return cached
    }
  }
  
  console.log(`🤖 AI: ${model} | Tokens: ${maxTokens} | Cache: ${cacheableTask ? 'enabled' : 'disabled'}`)
  
  // Verwende speziellen Pflegeinfo-API-Key falls verfügbar und es sich um Pflegeinfo handelt
  const shouldUsePflegeinfoKey = promptLower.includes('pflegeinfo')
  const aiClient = shouldUsePflegeinfoKey ? (pflegeinfoOpenai || openai) : openai

  try {
    const completion = await aiClient.chat.completions.create({
      model,
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
      max_tokens: maxTokens,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content || 'Keine Antwort erhalten.'
    
    // Cache nur erfolgreiche Antworten für cacheable Tasks
    if (cacheableTask && response !== 'Keine Antwort erhalten.') {
      simpleCache.set(userInput, response)
    }
    
    return response
  } catch (error) {
    console.error('AI Generation Error:', error)
    throw new Error('Fehler bei der KI-Generierung. Bitte versuchen Sie es erneut.')
  }
}

// Neue Streaming-Funktion für den Fallbeispiel Generator
export async function generateStreamingAIResponse(
  prompt: string,
  userInput: string,
  onChunk: (chunk: string) => void,
  onComplete?: (fullText: string) => void,
  onError?: (error: Error) => void
): Promise<void> {
  await initializeOpenAI()
  
  if (!openai) {
    const err = new Error('OpenAI API ist nicht konfiguriert. Bitte fügen Sie einen API-Schlüssel in den Umgebungsvariablen hinzu.')
    onError?.(err)
    return
  }
  
  // Model-Optimierung: Intelligente Auswahl basierend auf Komplexität
  const promptLowerStreaming = prompt.toLowerCase()
  const isSimpleTask = (
    promptLowerStreaming.includes('pesr') ||
    promptLowerStreaming.includes('medikamentenszenario') ||
    (userInput.length < 50 && !promptLowerStreaming.includes('fallbeispielprofi')) ||
    (userInput.length < 100 && !promptLowerStreaming.includes('pflegeplanung'))
  )
  
  // Spezielle Model-Auswahl für Quiz (mehr Token-Kapazität)
  let model: string
  if (promptLowerStreaming.includes('quiz')) {
    model = 'gpt-4-turbo'
  } else {
    model = isSimpleTask ? 'gpt-3.5-turbo' : 'gpt-4'
  }
  
  // Dynamische Token-Optimierung basierend auf Task-Typ
  let maxTokens: number
  if (promptLowerStreaming.includes('pesr')) maxTokens = 400
  else if (promptLowerStreaming.includes('medikamentenszenario')) maxTokens = 800
  else if (promptLowerStreaming.includes('fallbeispielprofi')) maxTokens = 1800
  else if (promptLowerStreaming.includes('quiz')) maxTokens = 4000 // Reduziert von 8000 auf 4000 wegen 4096 Token-Limit
  else if (promptLowerStreaming.includes('flashcards')) maxTokens = 3000 // Erhöht für Lernkarten
  else if (isSimpleTask) maxTokens = 800
  else maxTokens = 2000
  
  // Erweiterte Caching-Strategie - bei Streaming nicht verwenden für bessere UX
  const cacheableTask = (
    promptLowerStreaming.includes('pesr') || 
    (promptLowerStreaming.includes('medikamentenszenario') && userInput.length < 80) ||
    (isSimpleTask && userInput.length < 60)
  )
  
  // Für sehr einfache Tasks könnte man Cache verwenden, aber für Fallbeispiele ist Streaming besser
  if (cacheableTask && !promptLowerStreaming.includes('fallbeispiel')) {
    const cached = simpleCache.get(userInput)
    if (cached) {
      console.log(`⚡ Cache HIT: ${model} | Tokens: ${maxTokens} | Simulating stream`)
      // Simulate streaming for cached content
      let index = 0
      const words = cached.split(' ')
      const streamWords = () => {
        if (index < words.length) {
          const chunk = words[index] + (index < words.length - 1 ? ' ' : '')
          onChunk(chunk)
          index++
          setTimeout(streamWords, 50) // Simulate typing speed
        } else {
          onComplete?.(cached)
        }
      }
      streamWords()
      return
    }
  }
  
  console.log(`🤖 STREAMING: ${model} | Tokens: ${maxTokens}`)
  
  // Verwende speziellen Pflegeinfo-API-Key falls verfügbar und es sich um Pflegeinfo handelt
  const shouldUsePflegeinfoKey = promptLowerStreaming.includes('pflegeinfo')
  const aiClient = shouldUsePflegeinfoKey ? (pflegeinfoOpenai || openai) : openai
  
  try {
    const stream = await aiClient.chat.completions.create({
      model,
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
      max_tokens: maxTokens,
      temperature: 0.7,
      stream: true,
    })

    let fullText = ''
    
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || ''
      if (content) {
        fullText += content
        onChunk(content)
      }
    }
    
    // Cache erfolgreiche Antworten für cacheable Tasks
    if (cacheableTask && fullText.length > 0) {
      simpleCache.set(userInput, fullText)
    }
    
    onComplete?.(fullText)
  } catch (error) {
    console.error('AI Streaming Error:', error)
    const err = new Error('Fehler bei der KI-Generierung. Bitte versuchen Sie es erneut.')
    onError?.(err)
  }
}

// Spezielle Funktion nur für Medikamenten-Szenarien
export async function generateMedicationScenario(
  prompt: string,
  userInput: string
): Promise<string> {
  await initializeOpenAI()
  
  // Nur für Medikamenten-Spiel verwenden
  if (!prompt.toLowerCase().includes('medikamentenszenario') && !userInput.toLowerCase().includes('medikamenten')) {
    throw new Error('Diese Funktion ist nur für das Medikamenten-Training verfügbar.')
  }
  
  // Verwende speziellen Medikamenten-API-Key falls verfügbar, sonst Fallback auf Haupt-Key
  const aiClient = medicationOpenai || openai
  
  if (!aiClient) {
    throw new Error('OpenAI API ist nicht konfiguriert. Bitte fügen Sie einen API-Schlüssel in den Umgebungsvariablen hinzu.')
  }
  
  try {
    const completion = await aiClient.chat.completions.create({
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
      temperature: 0.8,
    })

    return completion.choices[0]?.message?.content || 'Keine Antwort erhalten.'
  } catch (error) {
    console.error('AI Generation Error:', error)
    throw new Error('Fehler bei der KI-Generierung. Bitte versuchen Sie es erneut.')
  }
}