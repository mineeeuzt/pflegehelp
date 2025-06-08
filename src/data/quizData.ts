import { QuizCategory, QuizQuestion, Flashcard } from '../types/quiz'

export const quizCategories: QuizCategory[] = [
  // ANATOMIE & PHYSIOLOGIE - HERZ-KREISLAUF-SYSTEM (Detailliert)
  {
    id: 'cardiovascular-system',
    name: 'Herz-Kreislauf-System',
    description: 'Herz, Blutkreislauf und kardiovaskuläre Physiologie',
    color: 'bg-blue-500',
    icon: '🫀'
  },
  // Herzanatomie
  {
    id: 'heart-anatomy',
    name: 'Herzanatomie',
    description: 'Aufbau und Struktur des Herzens',
    color: 'bg-red-500',
    icon: '❤️'
  },
  {
    id: 'heart-wall',
    name: 'Herzwand (Epi-, Myo-, Endokard)',
    description: 'Die drei Schichten der Herzwand',
    color: 'bg-red-400',
    icon: '🔬'
  },
  {
    id: 'heart-chambers',
    name: 'Herzkammern (Vorhöfe, Ventrikel)',
    description: 'Aufbau der vier Herzkammern',
    color: 'bg-red-300',
    icon: '🏠'
  },
  {
    id: 'heart-valves',
    name: 'Herzklappen (AV-Klappen, Taschenklappen)',
    description: 'Atrioventrikuläre und Taschenklappen',
    color: 'bg-red-600',
    icon: '🚪'
  },
  {
    id: 'conduction-system',
    name: 'Reizleitungssystem (Sinusknoten, AV-Knoten, His-Bündel, Purkinje-Fasern)',
    description: 'Elektrisches Leitungssystem des Herzens',
    color: 'bg-red-700',
    icon: '⚡'
  },
  {
    id: 'coronary-vessels',
    name: 'Koronargefäße (RCA, LAD, LCX, Ramus intermedius)',
    description: 'Herzkranzgefäße und Blutversorgung des Herzens',
    color: 'bg-red-800',
    icon: '🌊'
  },
  {
    id: 'heart-innervation',
    name: 'Herzinnervation (Sympathikus, Parasympathikus)',
    description: 'Vegetative Innervation des Herzens',
    color: 'bg-red-900',
    icon: '🧠'
  },
  {
    id: 'pericardium',
    name: 'Herzbeutel (Perikard - viszeral/parietal)',
    description: 'Herzbeutel und seine Schichten',
    color: 'bg-red-200',
    icon: '🛡️'
  },
  // Blutkreislauf
  {
    id: 'blood-circulation',
    name: 'Blutkreislauf',
    description: 'Großer und kleiner Kreislauf',
    color: 'bg-purple-500',
    icon: '🔄'
  },
  {
    id: 'systemic-circulation',
    name: 'Großer Kreislauf',
    description: 'Körperkreislauf vom linken Herzen durch den Körper',
    color: 'bg-purple-400',
    icon: '🌍'
  },
  {
    id: 'pulmonary-circulation',
    name: 'Kleiner Kreislauf',
    description: 'Lungenkreislauf vom rechten Herzen zur Lunge',
    color: 'bg-purple-300',
    icon: '🫁'
  },
  {
    id: 'portal-circulation',
    name: 'Pfortaderkreislauf',
    description: 'Leberkreislauf über die Pfortader',
    color: 'bg-purple-600',
    icon: '🍯'
  },
  {
    id: 'coronary-circulation',
    name: 'Koronarkreislauf',
    description: 'Durchblutung des Herzmuskels',
    color: 'bg-purple-700',
    icon: '💖'
  },
  {
    id: 'cerebral-circulation',
    name: 'Zerebrale Durchblutung (Willis-Kreis)',
    description: 'Hirndurchblutung und Circulus arteriosus',
    color: 'bg-purple-800',
    icon: '🧠'
  },
  {
    id: 'fetal-circulation',
    name: 'Fetaler Kreislauf (Ductus arteriosus, Foramen ovale)',
    description: 'Besonderheiten des Kreislaufs vor der Geburt',
    color: 'bg-purple-900',
    icon: '👶'
  },
  // Blutdruck & Regulation
  {
    id: 'blood-pressure-regulation',
    name: 'Blutdruck & Regulation',
    description: 'Blutdruckregulation und Kontrollmechanismen',
    color: 'bg-green-500',
    icon: '📊'
  },
  {
    id: 'systolic-diastolic',
    name: 'Systolisch/Diastolisch',
    description: 'Systolischer und diastolischer Blutdruck',
    color: 'bg-green-400',
    icon: '📈'
  },
  {
    id: 'mean-arterial-pressure',
    name: 'Mittlerer arterieller Druck (MAD)',
    description: 'Berechnung und Bedeutung des MAD',
    color: 'bg-green-300',
    icon: '📊'
  },
  {
    id: 'baroreceptors',
    name: 'Blutdruckregulation (Barorezeptoren)',
    description: 'Kurzfristige Blutdruckregulation über Barorezeptoren',
    color: 'bg-green-200',
    icon: '🎛️'
  },
  {
    id: 'raas-system',
    name: 'RAAS-System (Renin-Angiotensin-Aldosteron)',
    description: 'Langfristige Blutdruckregulation über RAAS',
    color: 'bg-green-600',
    icon: '🫘'
  },
  {
    id: 'adh-regulation',
    name: 'ADH-Regulation (Vasopressin)',
    description: 'Antidiuretisches Hormon und Wasserhaushalt',
    color: 'bg-green-700',
    icon: '💧'
  },
  {
    id: 'sympathetic-parasympathetic',
    name: 'Sympathikus/Parasympathikus',
    description: 'Vegetative Blutdruckregulation',
    color: 'bg-green-800',
    icon: '⚖️'
  },
  {
    id: 'long-short-term',
    name: 'Langzeit-/Kurzeitregulation',
    description: 'Verschiedene Zeitebenen der Blutdruckregulation',
    color: 'bg-green-900',
    icon: '⏰'
  },
  {
    id: 'natriuretic-peptides',
    name: 'Natriuretische Peptide (ANP, BNP)',
    description: 'Hormonelle Volumenregulation',
    color: 'bg-green-100',
    icon: '🧪'
  },
  // Herzphysiologie
  {
    id: 'heart-physiology',
    name: 'Herzphysiologie',
    description: 'Physiologische Prozesse des Herzens',
    color: 'bg-indigo-500',
    icon: '⚡'
  },
  {
    id: 'cardiac-cycle',
    name: 'Herzaktion (Systole/Diastole)',
    description: 'Der Herzzyklus und seine Phasen',
    color: 'bg-indigo-400',
    icon: '🔄'
  },
  {
    id: 'cardiac-output',
    name: 'Herzzeitvolumen (HZV = HF × SV)',
    description: 'Berechnung und Regulation des Herzzeitvolumens',
    color: 'bg-indigo-300',
    icon: '💨'
  },
  {
    id: 'preload-afterload',
    name: 'Preload/Afterload',
    description: 'Vor- und Nachlast des Herzens',
    color: 'bg-indigo-600',
    icon: '⚖️'
  },
  {
    id: 'contractility',
    name: 'Kontraktilität',
    description: 'Herzmuskelkontraktilität und Einflussfaktoren',
    color: 'bg-indigo-800',
    icon: '💪'
  },
  {
    id: 'frank-starling',
    name: 'Frank-Starling-Mechanismus',
    description: 'Autoregulation der Herzleistung',
    color: 'bg-indigo-700',
    icon: '🎯'
  },
  {
    id: 'heart-metabolism',
    name: 'Energiestoffwechsel des Herzens',
    description: 'Energieversorgung des Herzmuskels',
    color: 'bg-indigo-900',
    icon: '⚡'
  },
  {
    id: 'coronary-flow-reserve',
    name: 'Koronare Flussreserve',
    description: 'Reservekapazität der Koronardurchblutung',
    color: 'bg-indigo-200',
    icon: '🌊'
  },
  // Gefäßsystem
  {
    id: 'vascular-system',
    name: 'Gefäßsystem',
    description: 'Aufbau und Funktion der Blutgefäße',
    color: 'bg-cyan-500',
    icon: '🌊'
  },
  {
    id: 'arteries',
    name: 'Arterien (Windkessel-, Muskel-, Widerstandsgefäße)',
    description: 'Verschiedene Arterientypen und ihre Funktionen',
    color: 'bg-cyan-400',
    icon: '🔴'
  },
  {
    id: 'veins',
    name: 'Venen (Kapazitätsgefäße)',
    description: 'Venensystem und Blutspeicherung',
    color: 'bg-cyan-300',
    icon: '🔵'
  },
  {
    id: 'capillaries',
    name: 'Kapillaren (kontinuierlich, fenestriert, diskontinuierlich)',
    description: 'Kapillartypen und Stoffaustausch',
    color: 'bg-cyan-600',
    icon: '💫'
  },
  {
    id: 'lymph-vessels',
    name: 'Lymphgefäße',
    description: 'Lymphatisches System und Lymphdrainage',
    color: 'bg-cyan-200',
    icon: '🌿'
  },
  {
    id: 'endothelial-function',
    name: 'Endothelfunktion (NO, Prostacyclin, Endothelin)',
    description: 'Endothel und Gefäßregulation',
    color: 'bg-cyan-700',
    icon: '🧬'
  },
  {
    id: 'microcirculation',
    name: 'Mikrozirkulation',
    description: 'Durchblutung in den kleinsten Gefäßen',
    color: 'bg-cyan-800',
    icon: '🔬'
  },
  // EKG & Herzrhythmus
  {
    id: 'ecg-rhythm',
    name: 'EKG & Herzrhythmus',
    description: 'Elektrokardiographie und Rhythmusstörungen',
    color: 'bg-orange-500',
    icon: '📈'
  },
  {
    id: 'ecg-interpretation',
    name: 'EKG-Ableitung & -Deutung (12-Kanal-EKG)',
    description: 'EKG-Technik und Interpretation',
    color: 'bg-orange-400',
    icon: '📊'
  },
  {
    id: 'ecg-waves',
    name: 'P-QRS-T-Wellen (U-Welle)',
    description: 'EKG-Wellen und ihre Bedeutung',
    color: 'bg-orange-300',
    icon: '〰️'
  },
  {
    id: 'arrhythmias',
    name: 'Herzrhythmusstörungen',
    description: 'Verschiedene Rhythmusstörungen',
    color: 'bg-orange-600',
    icon: '💓'
  },
  {
    id: 'pacemaker-ecg',
    name: 'Schrittmacher-EKG',
    description: 'EKG-Veränderungen bei Schrittmachern',
    color: 'bg-orange-700',
    icon: '🔋'
  },
  {
    id: 'stress-ecg',
    name: 'Belastungs-EKG',
    description: 'EKG unter körperlicher Belastung',
    color: 'bg-orange-800',
    icon: '🏃'
  },
  {
    id: 'holter-ecg',
    name: 'Langzeit-EKG (Holter)',
    description: '24-Stunden-EKG-Aufzeichnung',
    color: 'bg-orange-900',
    icon: '⏱️'
  },
  {
    id: 'event-recorder',
    name: 'Event-Recorder',
    description: 'Ereignisrekorder für seltene Rhythmusstörungen',
    color: 'bg-orange-200',
    icon: '📱'
  },
  // ATMUNGSSYSTEM (Detailliert)
  {
    id: 'respiratory-system',
    name: 'ATMUNGSSYSTEM',
    description: 'Anatomie und Physiologie der Atmung',
    color: 'bg-blue-400',
    icon: '🫁'
  },
  // Anatomie der Atemwege
  {
    id: 'airway-anatomy',
    name: 'Anatomie der Atemwege',
    description: 'Aufbau der oberen und unteren Atemwege',
    color: 'bg-sky-500',
    icon: '🌬️'
  },
  {
    id: 'upper-airways',
    name: 'Obere Atemwege (Nase, Rachen, Kehlkopf)',
    description: 'Anatomie der oberen Atemwege',
    color: 'bg-sky-400',
    icon: '👃'
  },
  {
    id: 'lower-airways',
    name: 'Untere Atemwege (Trachea, Bronchien, Bronchiolen)',
    description: 'Anatomie der unteren Atemwege',
    color: 'bg-sky-300',
    icon: '🌳'
  },
  {
    id: 'alveoli',
    name: 'Alveolen & Kapillarnetz',
    description: 'Lungenbläschen und Gasaustausch',
    color: 'bg-sky-600',
    icon: '🫧'
  },
  {
    id: 'pleura',
    name: 'Pleura (Ripp-/Lungenfell)',
    description: 'Brustfell und Pleurahöhle',
    color: 'bg-sky-700',
    icon: '🛡️'
  },
  {
    id: 'respiratory-muscles',
    name: 'Atemmuskulatur (Zwerchfell, Intercostalmuskeln)',
    description: 'Hauptatemmuskeln',
    color: 'bg-sky-800',
    icon: '💪'
  },
  {
    id: 'accessory-muscles',
    name: 'Atemhilfsmuskeln (Mm. scaleni, M. sternocleidomastoideus)',
    description: 'Zusätzliche Atemmuskeln',
    color: 'bg-sky-900',
    icon: '🆘'
  },
  {
    id: 'surfactant',
    name: 'Surfactant-System',
    description: 'Oberflächenaktive Substanz in den Alveolen',
    color: 'bg-sky-200',
    icon: '🧪'
  },
  // Atmungsphysiologie
  {
    id: 'respiratory-physiology',
    name: 'Atmungsphysiologie',
    description: 'Physiologische Prozesse der Atmung',
    color: 'bg-teal-500',
    icon: '⚡'
  },
  {
    id: 'ventilation',
    name: 'Ventilation (Belüftung)',
    description: 'Belüftung der Lunge',
    color: 'bg-teal-400',
    icon: '💨'
  },
  {
    id: 'diffusion',
    name: 'Diffusion (Gasaustausch)',
    description: 'Gasaustausch in den Alveolen',
    color: 'bg-teal-300',
    icon: '↔️'
  },
  {
    id: 'perfusion',
    name: 'Perfusion (Durchblutung)',
    description: 'Durchblutung der Lunge',
    color: 'bg-teal-600',
    icon: '🩸'
  },
  {
    id: 'vq-ratio',
    name: 'Ventilations-Perfusions-Verhältnis (V/Q)',
    description: 'Verhältnis von Belüftung zu Durchblutung',
    color: 'bg-teal-700',
    icon: '⚖️'
  },
  {
    id: 'dead-space',
    name: 'Totraum (anatomisch/funktionell)',
    description: 'Nicht am Gasaustausch beteiligte Bereiche',
    color: 'bg-teal-800',
    icon: '🚫'
  },
  {
    id: 'shunt',
    name: 'Shunt-Effekte',
    description: 'Rechts-Links-Shunt in der Lunge',
    color: 'bg-teal-900',
    icon: '🔄'
  },
  {
    id: 'hpv',
    name: 'Hypoxisch pulmonale Vasokonstriktion (Euler-Liljestrand)',
    description: 'Regulation der Lungendurchblutung',
    color: 'bg-teal-200',
    icon: '🎯'
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
  // Anatomie & Physiologie - Herz-Kreislauf-System (Allgemein)
  {
    id: 'anat_001',
    question: 'Wie viele Herzkammern hat das menschliche Herz?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: 'Das menschliche Herz hat 4 Kammern: 2 Vorhöfe (Atrien) und 2 Hauptkammern (Ventrikel).',
    category: quizCategories[0], // cardiovascular-system
    difficulty: 'leicht',
    tags: ['herz', 'anatomie', 'kreislauf']
  },
  
  // Herzanatomie
  {
    id: 'heart_001',
    question: 'Welche drei Schichten bilden die Herzwand?',
    options: ['Epikard, Myokard, Endokard', 'Perikard, Myokard, Pleura', 'Epikard, Perikard, Endokard', 'Myokard, Pleura, Endokard'],
    correctAnswer: 0,
    explanation: 'Die Herzwand besteht aus drei Schichten: Epikard (äußere Schicht), Myokard (Herzmuskel) und Endokard (innere Schicht).',
    category: quizCategories[2], // heart-wall
    difficulty: 'mittel',
    tags: ['herzwand', 'anatomie', 'epikard', 'myokard', 'endokard']
  },
  {
    id: 'heart_002',
    question: 'Welche Herzklappen befinden sich zwischen den Vorhöfen und Kammern?',
    options: ['Taschenklappen', 'Atrioventrikuläre Klappen', 'Semilunarklappen', 'Pulmonalklappen'],
    correctAnswer: 1,
    explanation: 'Die AV-Klappen (Trikuspidal- und Mitralklappen) befinden sich zwischen Vorhöfen und Kammern und verhindern den Rückfluss des Blutes.',
    category: quizCategories[4], // heart-valves
    difficulty: 'mittel',
    tags: ['herzklappen', 'av-klappen', 'anatomie']
  },
  {
    id: 'heart_003',
    question: 'Wo befindet sich der Sinusknoten?',
    options: ['Linker Vorhof', 'Rechter Vorhof', 'Rechte Kammer', 'Linke Kammer'],
    correctAnswer: 1,
    explanation: 'Der Sinusknoten ist der natürliche Schrittmacher des Herzens und befindet sich im rechten Vorhof.',
    category: quizCategories[5], // conduction-system
    difficulty: 'mittel',
    tags: ['sinusknoten', 'reizleitung', 'schrittmacher']
  },
  
  // Blutkreislauf
  {
    id: 'circ_001',
    question: 'Welche Struktur trennt den großen vom kleinen Kreislauf?',
    options: ['Die Lunge', 'Das Herz', 'Die Leber', 'Die Nieren'],
    correctAnswer: 1,
    explanation: 'Das Herz trennt den großen (Körper-) vom kleinen (Lungen-)Kreislauf. Die rechte Herzseite pumpt zum kleinen, die linke zum großen Kreislauf.',
    category: quizCategories[8], // blood-circulation
    difficulty: 'leicht',
    tags: ['kreislauf', 'herz', 'lungenkreislauf']
  },
  {
    id: 'circ_002',
    question: 'Welche Arterie versorgt das Gehirn über den Willis-Kreis?',
    options: ['A. carotis und A. vertebralis', 'A. femoralis', 'A. brachialis', 'A. renalis'],
    correctAnswer: 0,
    explanation: 'Die Hirndurchblutung erfolgt über die A. carotis interna und A. vertebralis, die den Circulus arteriosus (Willis-Kreis) bilden.',
    category: quizCategories[13], // cerebral-circulation
    difficulty: 'schwer',
    tags: ['hirndurchblutung', 'willis-kreis', 'carotis']
  },
  
  // Blutdruckregulation
  {
    id: 'bp_001',
    question: 'Was sind normale Blutdruckwerte für einen gesunden Erwachsenen?',
    options: ['90/60 mmHg', '120/80 mmHg', '140/90 mmHg', '160/100 mmHg'],
    correctAnswer: 1,
    explanation: 'Normale Blutdruckwerte liegen bei etwa 120/80 mmHg. Werte über 140/90 mmHg gelten als erhöht.',
    category: quizCategories[15], // systolic-diastolic
    difficulty: 'leicht',
    tags: ['blutdruck', 'normalwerte', 'vitalzeichen']
  },
  {
    id: 'bp_002',
    question: 'Welches Hormonsystem reguliert langfristig den Blutdruck?',
    options: ['Sympathikus', 'RAAS-System', 'Parasympathikus', 'Insulin'],
    correctAnswer: 1,
    explanation: 'Das Renin-Angiotensin-Aldosteron-System (RAAS) ist hauptverantwortlich für die langfristige Blutdruckregulation.',
    category: quizCategories[18], // raas-system
    difficulty: 'schwer',
    tags: ['raas', 'blutdruckregulation', 'renin', 'angiotensin']
  },
  
  // Herzphysiologie
  {
    id: 'phys_001',
    question: 'Wie berechnet sich das Herzzeitvolumen (HZV)?',
    options: ['Herzfrequenz + Schlagvolumen', 'Herzfrequenz × Schlagvolumen', 'Herzfrequenz ÷ Schlagvolumen', 'Schlagvolumen ÷ Herzfrequenz'],
    correctAnswer: 1,
    explanation: 'Das Herzzeitvolumen (HZV) berechnet sich aus Herzfrequenz × Schlagvolumen und beträgt normalerweise ca. 5 L/min.',
    category: quizCategories[22], // cardiac-output
    difficulty: 'mittel',
    tags: ['herzzeitvolumen', 'herzfrequenz', 'schlagvolumen']
  },
  {
    id: 'phys_002',
    question: 'Was beschreibt der Frank-Starling-Mechanismus?',
    options: ['Herzfrequenz steigt bei Belastung', 'Herzleistung steigt mit der Vorlast', 'Blutdruck steigt bei Stress', 'Herzrhythmus wird regelmäßiger'],
    correctAnswer: 1,
    explanation: 'Der Frank-Starling-Mechanismus besagt, dass die Herzleistung mit der Vorlast (Füllung) steigt - je mehr Blut ins Herz kommt, desto kräftiger pumpt es.',
    category: quizCategories[24], // frank-starling
    difficulty: 'schwer',
    tags: ['frank-starling', 'vorlast', 'herzleistung']
  },
  
  // EKG & Herzrhythmus
  {
    id: 'ecg_001',
    question: 'Welche EKG-Welle repräsentiert die Vorhofkontraktion?',
    options: ['P-Welle', 'QRS-Komplex', 'T-Welle', 'U-Welle'],
    correctAnswer: 0,
    explanation: 'Die P-Welle zeigt die Erregung und Kontraktion der Vorhöfe (atriale Depolarisation).',
    category: quizCategories[30], // ecg-waves
    difficulty: 'mittel',
    tags: ['ekg', 'p-welle', 'vorhof', 'depolarisation']
  },
  {
    id: 'anat_002',
    question: 'Welche Aufgabe hat das Zwerchfell?',
    options: ['Blutreinigung', 'Atmung', 'Verdauung', 'Immunabwehr'],
    correctAnswer: 1,
    explanation: 'Das Zwerchfell ist der wichtigste Atemmuskel und ermöglicht durch seine Kontraktion die Einatmung.',
    category: quizCategories[56], // respiratory-muscles (jetzt verschoben durch neue Kategorien)
    difficulty: 'mittel',
    tags: ['atmung', 'muskel', 'physiologie']
  },

  // Atmungssystem - Neue Fragen
  {
    id: 'resp_001',
    question: 'Welche Strukturen gehören zu den oberen Atemwegen?',
    options: ['Trachea und Bronchien', 'Nase, Rachen und Kehlkopf', 'Alveolen und Kapillaren', 'Bronchiolen und Lungenbläschen'],
    correctAnswer: 1,
    explanation: 'Die oberen Atemwege umfassen Nase, Rachen (Pharynx) und Kehlkopf (Larynx). Sie dienen der Lufterwärmung, -befeuchtung und -filterung.',
    category: quizCategories[50], // upper-airways
    difficulty: 'leicht',
    tags: ['obere-atemwege', 'anatomie', 'nase', 'rachen', 'kehlkopf']
  },
  {
    id: 'resp_002',
    question: 'Was ist Surfactant und welche Funktion hat es?',
    options: ['Ein Atemmuskel', 'Ein oberflächenaktiver Stoff in den Alveolen', 'Ein Blutgefäß in der Lunge', 'Ein Nervensystem'],
    correctAnswer: 1,
    explanation: 'Surfactant ist eine oberflächenaktive Substanz, die die Oberflächenspannung in den Alveolen reduziert und damit das Kollabieren der Lungenbläschen verhindert.',
    category: quizCategories[54], // surfactant
    difficulty: 'schwer',
    tags: ['surfactant', 'alveolen', 'oberflächenspannung']
  },
  {
    id: 'resp_003',
    question: 'Wo findet der eigentliche Gasaustausch in der Lunge statt?',
    options: ['In den Bronchien', 'In der Trachea', 'In den Alveolen', 'Im Kehlkopf'],
    correctAnswer: 2,
    explanation: 'Der Gasaustausch zwischen Luft und Blut findet in den Alveolen (Lungenbläschen) statt, wo Sauerstoff ins Blut aufgenommen und Kohlendioxid abgegeben wird.',
    category: quizCategories[52], // alveoli
    difficulty: 'leicht',
    tags: ['gasaustausch', 'alveolen', 'sauerstoff', 'kohlendioxid']
  },
  {
    id: 'resp_004',
    question: 'Was beschreibt das Ventilations-Perfusions-Verhältnis (V/Q)?',
    options: ['Verhältnis von Ein- zu Ausatmung', 'Verhältnis von Belüftung zu Durchblutung', 'Verhältnis von Sauerstoff zu Kohlendioxid', 'Verhältnis von Totraum zu Alveolarraum'],
    correctAnswer: 1,
    explanation: 'Das V/Q-Verhältnis beschreibt das Verhältnis von Ventilation (Belüftung) zu Perfusion (Durchblutung) in der Lunge. Ein optimales V/Q-Verhältnis ist für einen effizienten Gasaustausch wichtig.',
    category: quizCategories[59], // vq-ratio
    difficulty: 'schwer',
    tags: ['v/q-verhältnis', 'ventilation', 'perfusion', 'gasaustausch']
  },
  {
    id: 'resp_005',
    question: 'Welche Muskeln werden bei der normalen, ruhigen Einatmung verwendet?',
    options: ['Nur das Zwerchfell', 'Zwerchfell und Zwischenrippenmuskeln', 'Atemhilfsmuskeln', 'Bauchmuskeln'],
    correctAnswer: 1,
    explanation: 'Bei der normalen Inspiration werden das Zwerchfell (Hauptatemmuskel) und die äußeren Zwischenrippenmuskeln (Mm. intercostales externi) verwendet.',
    category: quizCategories[56], // respiratory-muscles
    difficulty: 'mittel',
    tags: ['atemmuskulatur', 'inspiration', 'zwerchfell', 'intercostalmuskeln']
  },
  {
    id: 'resp_006',
    question: 'Was ist ein Totraum in der Lunge?',
    options: ['Bereich ohne Alveolen', 'Bereich der nicht am Gasaustausch beteiligt ist', 'Kollabierte Lungenbereiche', 'Entzündete Lungenbereiche'],
    correctAnswer: 1,
    explanation: 'Der Totraum umfasst alle Bereiche der Atemwege, die nicht am Gasaustausch beteiligt sind, wie Trachea, Bronchien und Bronchiolen (anatomischer Totraum).',
    category: quizCategories[60], // dead-space
    difficulty: 'mittel',
    tags: ['totraum', 'gasaustausch', 'anatomisch', 'funktionell']
  },

  // Medikamentenlehre
  {
    id: 'med_001',
    question: 'Was bedeutet "p.o." bei der Medikamentengabe?',
    options: ['per os (oral)', 'per injectionem', 'per rectum', 'per inhalation'],
    correctAnswer: 0,
    explanation: '"p.o." steht für "per os" und bedeutet orale Medikamentengabe über den Mund.',
    category: quizCategories[63], // medikamente
    difficulty: 'leicht',
    tags: ['medikamente', 'verabreichung', 'abkürzung']
  },
  {
    id: 'med_002',
    question: 'Welche Nebenwirkung kann bei ACE-Hemmern auftreten?',
    options: ['Gewichtszunahme', 'Trockener Husten', 'Haarausfall', 'Sehstörungen'],
    correctAnswer: 1,
    explanation: 'ACE-Hemmer können als typische Nebenwirkung einen trockenen Reizhusten verursachen.',
    category: quizCategories[63], // medikamente
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
    category: quizCategories[64], // hygiene
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
    category: quizCategories[65], // notfall
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
    category: quizCategories[70], // gerontologie
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
    category: quizCategories[76], // kommunikation
    difficulty: 'leicht',
    tags: ['demenz', 'kommunikation', 'patientengespräch']
  }
]

export const sampleFlashcards: Flashcard[] = [
  {
    id: 'fc_001',
    front: 'Was ist die normale Körpertemperatur beim Menschen?',
    back: '36,5 - 37,5°C (durchschnittlich 37°C)\n\nVariationen:\n• Morgens: niedriger\n• Abends: höher\n• Rektal: +0,5°C\n• Axillär: -0,5°C',
    category: quizCategories[0], // cardiovascular-system (Vitalzeichen gehören zum Herz-Kreislauf)
    difficulty: 'leicht',
    tags: ['vitalzeichen', 'temperatur'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_002',
    front: 'Normale Blutdruckwerte nach ESH/ESC',
    back: 'Optimal: <120/80 mmHg\nNormal: 120-129 / 80-84 mmHg\nHoch-normal: 130-139 / 85-89 mmHg\n\nHypertonie Grad 1: 140-159 / 90-99 mmHg\nHypertonie Grad 2: 160-179 / 100-109 mmHg\nHypertonie Grad 3: ≥180 / ≥110 mmHg',
    category: quizCategories[15], // systolic-diastolic
    difficulty: 'mittel',
    tags: ['blutdruck', 'vitalzeichen'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  
  // Neue Herz-Kreislauf-Lernkarten
  {
    id: 'fc_heart_001',
    front: 'Herzwand - Die drei Schichten',
    back: '1. **Epikard** (äußere Schicht)\n• Seröse Haut\n• Entspricht dem viszeralen Perikard\n\n2. **Myokard** (mittlere Schicht)\n• Herzmuskel\n• Kontraktile Schicht\n\n3. **Endokard** (innere Schicht)\n• Glatte Auskleidung\n• Bildet die Herzklappen',
    category: quizCategories[2], // heart-wall
    difficulty: 'mittel',
    tags: ['herzwand', 'epikard', 'myokard', 'endokard'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_heart_002',
    front: 'Reizleitungssystem des Herzens',
    back: '1. **Sinusknoten** (SA-Knoten)\n• Primärer Schrittmacher\n• 60-100 Schläge/min\n\n2. **AV-Knoten** (Atrioventrikulärer Knoten)\n• Verzögerung der Erregung\n• 40-60 Schläge/min\n\n3. **His-Bündel**\n• Weiterleitung zu den Kammern\n\n4. **Purkinje-Fasern**\n• Erregung der Kammermuskulatur\n• 20-40 Schläge/min',
    category: quizCategories[5], // conduction-system
    difficulty: 'schwer',
    tags: ['reizleitung', 'sinusknoten', 'av-knoten', 'purkinje'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_heart_003',
    front: 'Herzzeitvolumen (HZV) - Berechnung',
    back: '**Formel:**\nHZV = Herzfrequenz × Schlagvolumen\n\n**Normalwerte:**\n• HZV: 4-6 L/min\n• Herzfrequenz: 60-100/min\n• Schlagvolumen: 60-80 ml\n\n**Einflussfaktoren:**\n• Vorlast (Preload)\n• Nachlast (Afterload)\n• Kontraktilität\n• Herzfrequenz',
    category: quizCategories[22], // cardiac-output
    difficulty: 'mittel',
    tags: ['herzzeitvolumen', 'hzv', 'schlagvolumen'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_heart_004',
    front: 'RAAS-System (Renin-Angiotensin-Aldosteron)',
    back: '**Ablauf:**\n1. **Renin** (Niere)\n↓\n2. Angiotensinogen → **Angiotensin I**\n↓\n3. ACE → **Angiotensin II**\n↓\n4. **Aldosteron** (Nebenniere)\n\n**Wirkungen:**\n• Vasokonstriktion\n• Na+/H₂O-Retention\n• Blutdrucksteigerung\n• Herzlast-Erhöhung',
    category: quizCategories[18], // raas-system
    difficulty: 'schwer',
    tags: ['raas', 'renin', 'angiotensin', 'aldosteron'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_heart_005',
    front: 'EKG-Wellen und ihre Bedeutung',
    back: '**P-Welle:**\n• Vorhofkontraktion (Depolarisation)\n• Normal: <0,12s, <2,5mm\n\n**QRS-Komplex:**\n• Kammerkontraktion\n• Normal: <0,12s\n\n**T-Welle:**\n• Kammer-Repolarisation\n• Gleiche Richtung wie QRS\n\n**U-Welle:**\n• Nachpotentiale\n• Sichtbar bei Hypokaliämie',
    category: quizCategories[30], // ecg-waves
    difficulty: 'mittel',
    tags: ['ekg', 'p-welle', 'qrs', 't-welle'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  
  // Neue Atmungssystem-Lernkarten
  {
    id: 'fc_resp_001',
    front: 'Obere vs. Untere Atemwege',
    back: '**Obere Atemwege:**\n• Nase (Nasus)\n• Rachen (Pharynx)\n• Kehlkopf (Larynx)\n\n**Untere Atemwege:**\n• Luftröhre (Trachea)\n• Bronchien & Bronchiolen\n• Alveolen (Lungenbläschen)\n\n**Funktionen:**\n• Obere: Erwärmung, Befeuchtung, Filterung\n• Untere: Gasaustausch',
    category: quizCategories[49], // airway-anatomy
    difficulty: 'leicht',
    tags: ['atemwege', 'anatomie', 'obere', 'untere'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_resp_002',
    front: 'Surfactant-System',
    back: '**Definition:**\nOberflächenaktive Substanz in den Alveolen\n\n**Zusammensetzung:**\n• 90% Phospholipide (v.a. Dipalmitoyl-Phosphatidylcholin)\n• 10% Proteine (SP-A, SP-B, SP-C, SP-D)\n\n**Funktionen:**\n• ↓ Oberflächenspannung in Alveolen\n• Verhindert Kollaps der Lungenbläschen\n• Stabilisiert unterschiedlich große Alveolen\n\n**Klinik:**\n• Mangel → Atemnotsyndrom (ARDS)',
    category: quizCategories[54], // surfactant
    difficulty: 'schwer',
    tags: ['surfactant', 'alveolen', 'oberflächenspannung', 'phospholipide'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_resp_003',
    front: 'Atemmuskulatur - Inspiration & Expiration',
    back: '**Inspiration (Einatmung):**\n• **Hauptmuskeln:** Zwerchfell, äußere Intercostalmuskeln\n• **Hilfsmuskeln:** Mm. scaleni, M. sternocleidomastoideus\n\n**Expiration (Ausatmung):**\n• **Ruhig:** Passiv durch elastische Rückstellkraft\n• **Forciert:** Innere Intercostalmuskeln, Bauchmuskeln\n\n**Zwerchfell:**\n• Wichtigster Atemmuskel\n• Kontraktion → Thoraxerweiterung\n• Innervation: N. phrenicus (C3-C5)',
    category: quizCategories[56], // respiratory-muscles
    difficulty: 'mittel',
    tags: ['atemmuskulatur', 'zwerchfell', 'inspiration', 'expiration'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_resp_004',
    front: 'Ventilations-Perfusions-Verhältnis (V/Q)',
    back: '**Definition:**\nVerhältnis von Ventilation zu Perfusion\n\n**Normalwerte:**\n• Gesamt-V/Q: ≈ 0,8\n• Lungenspitze: V/Q > 1 (mehr Ventilation)\n• Lungenbasis: V/Q < 1 (mehr Perfusion)\n\n**Störungen:**\n• **V/Q = 0:** Shunt (keine Ventilation)\n• **V/Q = ∞:** Totraum (keine Perfusion)\n\n**Regulation:**\n• Hypoxische pulmonale Vasokonstriktion\n• Bronchiale CO₂-Regulation',
    category: quizCategories[59], // vq-ratio
    difficulty: 'schwer',
    tags: ['v/q-verhältnis', 'ventilation', 'perfusion', 'shunt', 'totraum'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_resp_005',
    front: 'Totraum (anatomisch vs. funktionell)',
    back: '**Anatomischer Totraum:**\n• Leitende Atemwege ohne Gasaustausch\n• Trachea, Bronchien, Bronchiolen\n• ≈ 150 ml beim Erwachsenen\n\n**Funktioneller Totraum:**\n• Anatomischer + Alveolar-Totraum\n• Bereiche mit V/Q-Mismatch\n• Erhöht bei Lungenerkrankungen\n\n**Klinische Bedeutung:**\n• ↑ Totraum → ineffiziente Ventilation\n• Kompensation durch ↑ Atemfrequenz',
    category: quizCategories[60], // dead-space
    difficulty: 'mittel',
    tags: ['totraum', 'anatomisch', 'funktionell', 'ventilation'],
    reviewCount: 0,
    easeFactor: 2.5
  },

  {
    id: 'fc_003',
    front: 'Die 5-R-Regel bei der Medikamentengabe',
    back: '1. Richtiger Patient\n2. Richtiges Medikament\n3. Richtige Dosis\n4. Richtige Zeit\n5. Richtige Applikationsart\n\n+ Zusätzlich:\n• Richtige Dokumentation\n• Richtige Aufklärung',
    category: quizCategories[63], // medikamente
    difficulty: 'leicht',
    tags: ['medikamentengabe', 'sicherheit'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_004',
    front: 'Händehygiene - Die 5 Momente der WHO',
    back: '1. VOR Patientenkontakt\n2. VOR aseptischen Tätigkeiten\n3. NACH Kontakt mit potenziell infektiösen Materialien\n4. NACH Patientenkontakt\n5. NACH Kontakt mit der Patientenumgebung',
    category: quizCategories[64], // hygiene
    difficulty: 'mittel',
    tags: ['händehygiene', 'who', 'infektionsschutz'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_005',
    front: 'Glasgow Coma Scale (GCS) - Bewertungskriterien',
    back: 'Augen öffnen (E):\n• Spontan: 4\n• Auf Ansprache: 3\n• Auf Schmerzreiz: 2\n• Kein: 1\n\nVerbale Reaktion (V):\n• Orientiert: 5\n• Verwirrt: 4\n• Unpassende Worte: 3\n• Unverständliche Laute: 2\n• Keine: 1\n\nMotorische Reaktion (M):\n• Befolgt Aufforderungen: 6\n• Lokalisation: 5\n• Beugeabwehr: 4\n• Beugesynergismen: 3\n• Strecksynergismen: 2\n• Keine: 1\n\nGesamt: 3-15 Punkte',
    category: quizCategories[65], // notfall
    difficulty: 'schwer',
    tags: ['gcs', 'bewusstsein', 'neurologie'],
    reviewCount: 0,
    easeFactor: 2.5
  }
]