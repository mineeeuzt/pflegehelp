import { QuizCategory, QuizQuestion, Flashcard } from '../types/quiz'

export const quizCategories: QuizCategory[] = [
  // ANATOMIE & PHYSIOLOGIE
  {
    id: 'cardiovascular-system',
    name: 'Herz-Kreislauf-System',
    description: 'Herz, Blutkreislauf und kardiovaskuläre Physiologie',
    color: 'bg-blue-500',
    icon: '🫀'
  },
  {
    id: 'respiratory-system',
    name: 'Atmungssystem',
    description: 'Anatomie und Physiologie der Atmung',
    color: 'bg-blue-400',
    icon: '🫁'
  },
  {
    id: 'nervous-system',
    name: 'Nervensystem',
    description: 'Zentrales und peripheres Nervensystem',
    color: 'bg-blue-600',
    icon: '🧠'
  },
  {
    id: 'musculoskeletal-system',
    name: 'Bewegungsapparat',
    description: 'Knochen, Gelenke, Muskeln und Bewegung',
    color: 'bg-blue-300',
    icon: '🦴'
  },
  {
    id: 'renal-system',
    name: 'Nieren & Harnwege',
    description: 'Nierenfunktion und Harnwege',
    color: 'bg-blue-700',
    icon: '🫘'
  },
  {
    id: 'blood-immune-system',
    name: 'Blut & Immunsystem',
    description: 'Blutsystem und Immunabwehr',
    color: 'bg-blue-800',
    icon: '🩸'
  },
  {
    id: 'metabolism-hormones',
    name: 'Stoffwechsel & Hormone',
    description: 'Stoffwechselprozesse und Hormonregulation',
    color: 'bg-blue-900',
    icon: '🔄'
  },
  {
    id: 'digestive-system',
    name: 'Verdauungssystem',
    description: 'Gastrointestinaltrakt und Verdauungsorgane',
    color: 'bg-blue-200',
    icon: '🍯'
  },
  {
    id: 'integumentary-system',
    name: 'Haut & Sinnesorgane',
    description: 'Haut, Sinnesorgane und Wahrnehmung',
    color: 'bg-blue-100',
    icon: '👁️'
  },
  // KRANKHEITSLEHRE
  {
    id: 'cardiovascular-diseases',
    name: 'Herz-Kreislauf-Erkrankungen',
    description: 'Kardiovaskuläre Pathologie',
    color: 'bg-red-500',
    icon: '💔'
  },
  {
    id: 'respiratory-diseases',
    name: 'Atemwegserkrankungen',
    description: 'Erkrankungen der Atemwege und Lunge',
    color: 'bg-red-400',
    icon: '🫁'
  },
  {
    id: 'neurological-diseases',
    name: 'Neurologische Erkrankungen',
    description: 'Erkrankungen des Nervensystems',
    color: 'bg-red-600',
    icon: '🧠'
  },
  {
    id: 'renal-diseases',
    name: 'Nierenerkrankungen',
    description: 'Erkrankungen der Nieren und Harnwege',
    color: 'bg-red-700',
    icon: '🫘'
  },
  {
    id: 'endocrine-diseases',
    name: 'Endokrine Erkrankungen',
    description: 'Hormonelle Störungen und Stoffwechselerkrankungen',
    color: 'bg-red-800',
    icon: '🧪'
  },
  {
    id: 'gastrointestinal-diseases',
    name: 'Magen-Darm-Erkrankungen',
    description: 'Erkrankungen des Verdauungssystems',
    color: 'bg-red-300',
    icon: '🫄'
  },
  {
    id: 'musculoskeletal-diseases',
    name: 'Muskuloskelettale Erkrankungen',
    description: 'Erkrankungen von Knochen, Muskeln und Gelenken',
    color: 'bg-red-200',
    icon: '🦴'
  },
  {
    id: 'infectious-diseases',
    name: 'Infektionskrankheiten',
    description: 'Bakterielle, virale und andere Infektionen',
    color: 'bg-red-900',
    icon: '🦠'
  },
  // PFLEGEPRAXIS
  {
    id: 'medikamente',
    name: 'Medikamentenlehre',
    description: 'Arzneimittel und ihre Wirkungen',
    color: 'bg-green-500',
    icon: '💊'
  },
  {
    id: 'hygiene',
    name: 'Hygiene & Infektionsschutz',
    description: 'Infektionsprevention und Hygienemaßnahmen',
    color: 'bg-yellow-500',
    icon: '🧼'
  },
  {
    id: 'notfall',
    name: 'Notfallmedizin',
    description: 'Erste Hilfe und Notfallsituationen',
    color: 'bg-orange-500',
    icon: '🚨'
  },
  {
    id: 'wound-care',
    name: 'Wundversorgung',
    description: 'Wundheilung und Wundmanagement',
    color: 'bg-pink-500',
    icon: '🩹'
  },
  {
    id: 'nursing-techniques',
    name: 'Pflegetechniken',
    description: 'Grundlegende pflegerische Tätigkeiten',
    color: 'bg-cyan-500',
    icon: '🏥'
  },
  // SPEZIELLE PFLEGEBEREICHE
  {
    id: 'gerontologie',
    name: 'Gerontologie',
    description: 'Pflege älterer Menschen',
    color: 'bg-purple-500',
    icon: '👴'
  },
  {
    id: 'paediatrie',
    name: 'Pädiatrie',
    description: 'Kinderpflege und Entwicklung',
    color: 'bg-pink-400',
    icon: '👶'
  },
  {
    id: 'intensive-care',
    name: 'Intensivpflege',
    description: 'Intensivmedizin und kritische Pflege',
    color: 'bg-gray-600',
    icon: '🏥'
  },
  {
    id: 'psychiatric-care',
    name: 'Psychiatrische Pflege',
    description: 'Psychiatrie und psychische Gesundheit',
    color: 'bg-indigo-400',
    icon: '🧘'
  },
  // RECHTLICHE & ETHISCHE GRUNDLAGEN
  {
    id: 'recht',
    name: 'Pflegrecht & Ethik',
    description: 'Rechtliche und ethische Grundlagen',
    color: 'bg-indigo-500',
    icon: '⚖️'
  },
  {
    id: 'kommunikation',
    name: 'Kommunikation',
    description: 'Gesprächsführung und Teamarbeit',
    color: 'bg-teal-500',
    icon: '💬'
  },
  {
    id: 'quality-management',
    name: 'Qualitätsmanagement',
    description: 'Pflegequalität und Prozessoptimierung',
    color: 'bg-emerald-500',
    icon: '📊'
  }
]

export const sampleQuestions: QuizQuestion[] = [
  // Anatomie & Physiologie
  {
    id: 'anat_001',
    question: 'Wie viele Herzkammern hat das menschliche Herz?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: 'Das menschliche Herz hat 4 Kammern: 2 Vorhöfe (Atrien) und 2 Hauptkammern (Ventrikel).',
    category: quizCategories[0],
    difficulty: 'leicht',
    tags: ['herz', 'anatomie', 'kreislauf']
  },
  {
    id: 'anat_002',
    question: 'Welche Aufgabe hat das Zwerchfell?',
    options: ['Blutreinigung', 'Atmung', 'Verdauung', 'Immunabwehr'],
    correctAnswer: 1,
    explanation: 'Das Zwerchfell ist der wichtigste Atemmuskel und ermöglicht durch seine Kontraktion die Einatmung.',
    category: quizCategories[0],
    difficulty: 'mittel',
    tags: ['atmung', 'muskel', 'physiologie']
  },

  // Medikamentenlehre
  {
    id: 'med_001',
    question: 'Was bedeutet "p.o." bei der Medikamentengabe?',
    options: ['per os (oral)', 'per injectionem', 'per rectum', 'per inhalation'],
    correctAnswer: 0,
    explanation: '"p.o." steht für "per os" und bedeutet orale Medikamentengabe über den Mund.',
    category: quizCategories[1],
    difficulty: 'leicht',
    tags: ['medikamente', 'verabreichung', 'abkürzung']
  },
  {
    id: 'med_002',
    question: 'Welche Nebenwirkung kann bei ACE-Hemmern auftreten?',
    options: ['Gewichtszunahme', 'Trockener Husten', 'Haarausfall', 'Sehstörungen'],
    correctAnswer: 1,
    explanation: 'ACE-Hemmer können als typische Nebenwirkung einen trockenen Reizhusten verursachen.',
    category: quizCategories[1],
    difficulty: 'mittel',
    tags: ['ace-hemmer', 'nebenwirkungen', 'herz-kreislauf']
  },

  // Hygiene & Infektionsschutz
  {
    id: 'hyg_001',
    question: 'Wie lange sollte eine hygienische Händedesinfektion dauern?',
    options: ['10 Sekunden', '15 Sekunden', '30 Sekunden', '60 Sekunden'],
    correctAnswer: 2,
    explanation: 'Eine hygienische Händedesinfektion sollte mindestens 30 Sekunden dauern, um wirksam zu sein.',
    category: quizCategories[2],
    difficulty: 'leicht',
    tags: ['händehygiene', 'desinfektion', 'infektionsschutz']
  },

  // Notfallmedizin
  {
    id: 'not_001',
    question: 'Welche Herzdruckmassage-Frequenz wird bei der Reanimation empfohlen?',
    options: ['80-90/min', '100-120/min', '130-140/min', '150-160/min'],
    correctAnswer: 1,
    explanation: 'Die empfohlene Frequenz für die Herzdruckmassage liegt bei 100-120 Kompressionen pro Minute.',
    category: quizCategories[3],
    difficulty: 'mittel',
    tags: ['reanimation', 'herzdruckmassage', 'erste-hilfe']
  },

  // Gerontologie
  {
    id: 'ger_001',
    question: 'Was versteht man unter dem Begriff "Polypharmazie"?',
    options: ['Mehrere Ärzte', 'Mehrere Krankheiten', 'Mehrere Medikamente', 'Mehrere Therapien'],
    correctAnswer: 2,
    explanation: 'Polypharmazie bezeichnet die gleichzeitige Einnahme von 5 oder mehr Medikamenten, häufig bei älteren Menschen.',
    category: quizCategories[4],
    difficulty: 'mittel',
    tags: ['polypharmazie', 'alter', 'medikamente']
  },

  // Kommunikation
  {
    id: 'kom_001',
    question: 'Was ist bei der Kommunikation mit dementen Patienten besonders wichtig?',
    options: ['Laut sprechen', 'Kurze, einfache Sätze', 'Viele Informationen geben', 'Schnell sprechen'],
    correctAnswer: 1,
    explanation: 'Bei dementen Patienten sind kurze, einfache Sätze und ruhige Kommunikation besonders wichtig.',
    category: quizCategories[7],
    difficulty: 'leicht',
    tags: ['demenz', 'kommunikation', 'patientengespräch']
  }
]

export const sampleFlashcards: Flashcard[] = [
  {
    id: 'fc_001',
    front: 'Was ist die normale Körpertemperatur beim Menschen?',
    back: '36,5 - 37,5°C (durchschnittlich 37°C)\n\nVariationen:\n• Morgens: niedriger\n• Abends: höher\n• Rektal: +0,5°C\n• Axillär: -0,5°C',
    category: quizCategories[0],
    difficulty: 'leicht',
    tags: ['vitalzeichen', 'temperatur'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_002',
    front: 'Normale Blutdruckwerte nach ESH/ESC',
    back: 'Optimal: <120/80 mmHg\nNormal: 120-129 / 80-84 mmHg\nHoch-normal: 130-139 / 85-89 mmHg\n\nHypertonie Grad 1: 140-159 / 90-99 mmHg\nHypertonie Grad 2: 160-179 / 100-109 mmHg\nHypertonie Grad 3: ≥180 / ≥110 mmHg',
    category: quizCategories[0],
    difficulty: 'mittel',
    tags: ['blutdruck', 'vitalzeichen'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_003',
    front: 'Die 5-R-Regel bei der Medikamentengabe',
    back: '1. Richtiger Patient\n2. Richtiges Medikament\n3. Richtige Dosis\n4. Richtige Zeit\n5. Richtige Applikationsart\n\n+ Zusätzlich:\n• Richtige Dokumentation\n• Richtige Aufklärung',
    category: quizCategories[1],
    difficulty: 'leicht',
    tags: ['medikamentengabe', 'sicherheit'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_004',
    front: 'Händehygiene - Die 5 Momente der WHO',
    back: '1. VOR Patientenkontakt\n2. VOR aseptischen Tätigkeiten\n3. NACH Kontakt mit potenziell infektiösen Materialien\n4. NACH Patientenkontakt\n5. NACH Kontakt mit der Patientenumgebung',
    category: quizCategories[2],
    difficulty: 'mittel',
    tags: ['händehygiene', 'who', 'infektionsschutz'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_005',
    front: 'Glasgow Coma Scale (GCS) - Bewertungskriterien',
    back: 'Augen öffnen (E):\n• Spontan: 4\n• Auf Ansprache: 3\n• Auf Schmerzreiz: 2\n• Kein: 1\n\nVerbale Reaktion (V):\n• Orientiert: 5\n• Verwirrt: 4\n• Unpassende Worte: 3\n• Unverständliche Laute: 2\n• Keine: 1\n\nMotorische Reaktion (M):\n• Befolgt Aufforderungen: 6\n• Lokalisation: 5\n• Beugeabwehr: 4\n• Beugesynergismen: 3\n• Strecksynergismen: 2\n• Keine: 1\n\nGesamt: 3-15 Punkte',
    category: quizCategories[3],
    difficulty: 'schwer',
    tags: ['gcs', 'bewusstsein', 'neurologie'],
    reviewCount: 0,
    easeFactor: 2.5
  }
]