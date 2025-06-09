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
  // Lungenfunktion
  {
    id: 'lung-function',
    name: 'Lungenfunktion',
    description: 'Atemvolumina, Kapazitäten und Funktionsparameter',
    color: 'bg-purple-500',
    icon: '📏'
  },
  {
    id: 'lung-volumes',
    name: 'Atemvolumina (AZV, IRV, ERV, RV)',
    description: 'Atemzugvolumen, Inspiratorisches/Exspiratorisches Reservevolumen, Residualvolumen',
    color: 'bg-purple-400',
    icon: '📊'
  },
  {
    id: 'lung-capacities',
    name: 'Lungenkapazitäten (TLC, FRC, VC, IC)',
    description: 'Totale Lungenkapazität, Funktionelle Residualkapazität, Vitalkapazität, Inspiratorische Kapazität',
    color: 'bg-purple-300',
    icon: '📈'
  },
  {
    id: 'compliance-resistance',
    name: 'Compliance & Resistance',
    description: 'Lungendehnbarkeit und Atemwegswiderstand',
    color: 'bg-purple-600',
    icon: '⚖️'
  },
  {
    id: 'fev1-fvc',
    name: 'FEV1/FVC (Tiffeneau-Index)',
    description: 'Forciertes exspiratorisches Volumen in 1 Sekunde zu forcierter Vitalkapazität',
    color: 'bg-purple-700',
    icon: '⏱️'
  },
  {
    id: 'peak-flow',
    name: 'Peak Flow',
    description: 'Maximaler exspiratorischer Fluss',
    color: 'bg-purple-800',
    icon: '🌪️'
  },
  {
    id: 'dlco',
    name: 'Diffusionskapazität (DLCO)',
    description: 'Kohlenmonoxid-Diffusionskapazität',
    color: 'bg-purple-900',
    icon: '🔄'
  },
  {
    id: 'mef-flows',
    name: 'MEF25/50/75 (Maximale exspiratorische Flüsse)',
    description: 'Maximale exspiratorische Flüsse bei 25%, 50% und 75% der FVC',
    color: 'bg-purple-200',
    icon: '💨'
  },
  // Gasaustausch & Transport
  {
    id: 'gas-exchange-transport',
    name: 'Gasaustausch & Transport',
    description: 'Sauerstoff- und Kohlendioxidtransport im Blut',
    color: 'bg-amber-500',
    icon: '🔄'
  },
  {
    id: 'o2-hemoglobin-binding',
    name: 'O2-Bindung an Hämoglobin',
    description: 'Sauerstoffbindung und -transport durch Hämoglobin',
    color: 'bg-amber-400',
    icon: '🔴'
  },
  {
    id: 'o2-saturation-curve',
    name: 'O2-Sättigungskurve (Rechts-/Linksverschiebung)',
    description: 'Sauerstoff-Dissoziationskurve und ihre Verschiebungen',
    color: 'bg-amber-300',
    icon: '📈'
  },
  {
    id: 'co2-transport',
    name: 'CO2-Transport (HCO3-, Carbamino)',
    description: 'Kohlendioxidtransport als Bikarbonat und Carbaminoverbindungen',
    color: 'bg-amber-600',
    icon: '🫧'
  },
  {
    id: 'haldane-bohr-effect',
    name: 'Haldane-/Bohr-Effekt',
    description: 'Physiologische Effekte bei Gasaustausch',
    color: 'bg-amber-700',
    icon: '⚗️'
  },
  {
    id: 'hyperoxia-hypoxia',
    name: 'Hyperoxie/Hypoxie',
    description: 'Sauerstoffüberschuss und -mangel',
    color: 'bg-amber-800',
    icon: '📊'
  },
  {
    id: 'hypercapnia-hypocapnia',
    name: 'Hyperkapnie/Hypokapnie',
    description: 'Kohlendioxidüberschuss und -mangel',
    color: 'bg-amber-900',
    icon: '💨'
  },
  {
    id: 'methemoglobin-carboxyhemoglobin',
    name: 'Methämoglobin/Carboxyhämoglobin',
    description: 'Pathologische Hämoglobinformen',
    color: 'bg-amber-200',
    icon: '⚠️'
  },
  // Atemregulation
  {
    id: 'respiratory-control',
    name: 'Atemregulation',
    description: 'Zentrale und periphere Atemkontrolle',
    color: 'bg-emerald-500',
    icon: '🧠'
  },
  {
    id: 'respiratory-centers',
    name: 'Atemzentrum (Medulla oblongata, Pons)',
    description: 'Zentrale Atemregulation im Hirnstamm',
    color: 'bg-emerald-400',
    icon: '🧠'
  },
  {
    id: 'chemoreceptors',
    name: 'Chemoreceptoren (zentral/peripher)',
    description: 'Zentrale und periphere Chemorezeptoren',
    color: 'bg-emerald-300',
    icon: '🔬'
  },
  {
    id: 'co2-o2-control',
    name: 'CO2-/O2-gesteuerte Atmung',
    description: 'Atemregulation durch CO2 und O2',
    color: 'bg-emerald-600',
    icon: '⚖️'
  },
  {
    id: 'ph-regulation',
    name: 'pH-Regulation',
    description: 'Säure-Basen-Regulation durch Atmung',
    color: 'bg-emerald-700',
    icon: '🧪'
  },
  {
    id: 'voluntary-control',
    name: 'Willkürliche Atemkontrolle',
    description: 'Bewusste Atemsteuerung',
    color: 'bg-emerald-800',
    icon: '🧘'
  },
  {
    id: 'breathing-disorders',
    name: 'Atemrhythmus-Störungen',
    description: 'Pathologische Atemmuster',
    color: 'bg-emerald-900',
    icon: '💔'
  },
  {
    id: 'hering-breuer-reflex',
    name: 'Hering-Breuer-Reflex',
    description: 'Selbstregulatorischer Atemreflex',
    color: 'bg-emerald-200',
    icon: '🔄'
  },
  // NERVENSYSTEM - ZENTRALNERVENSYSTEM (ZNS)
  {
    id: 'nervous-system',
    name: 'NERVENSYSTEM',
    description: 'Zentrales und peripheres Nervensystem',
    color: 'bg-purple-600',
    icon: '🧠'
  },
  {
    id: 'central-nervous-system',
    name: 'Zentralnervensystem (ZNS)',
    description: 'Gehirn und Rückenmark',
    color: 'bg-purple-500',
    icon: '🧠'
  },
  // Großhirn
  {
    id: 'cerebrum',
    name: 'Großhirn',
    description: 'Kortex und subkortikale Strukturen',
    color: 'bg-purple-400',
    icon: '🧠'
  },
  {
    id: 'frontal-lobe',
    name: 'Frontallappen (Motorik, Persönlichkeit, Broca-Areal)',
    description: 'Stirnlappen mit motorischen und exekutiven Funktionen',
    color: 'bg-purple-300',
    icon: '⚡'
  },
  {
    id: 'parietal-lobe',
    name: 'Parietallappen (Sensorik, Raumwahrnehmung)',
    description: 'Scheitellappen für sensorische Verarbeitung',
    color: 'bg-purple-200',
    icon: '👋'
  },
  {
    id: 'temporal-lobe',
    name: 'Temporallappen (Hören, Gedächtnis, Wernicke-Areal)',
    description: 'Schläfenlappen für Hören und Sprachverständnis',
    color: 'bg-purple-100',
    icon: '👂'
  },
  {
    id: 'occipital-lobe',
    name: 'Okzipitallappen (Sehen, visueller Kortex)',
    description: 'Hinterhauptslappen für visuelle Verarbeitung',
    color: 'bg-purple-600',
    icon: '👁️'
  },
  {
    id: 'insula',
    name: 'Insula (Geschmack, viszerale Sensibilität)',
    description: 'Inselrinde für Geschmack und Körperwahrnehmung',
    color: 'bg-purple-700',
    icon: '👅'
  },
  {
    id: 'basal-ganglia',
    name: 'Basalganglien (Bewegungskontrolle)',
    description: 'Subkortikale Kerne für Motorik',
    color: 'bg-purple-800',
    icon: '🎯'
  },
  {
    id: 'limbic-system',
    name: 'Limbisches System (Emotionen, Gedächtnis)',
    description: 'Emotionales Gehirn und Gedächtnisbildung',
    color: 'bg-purple-900',
    icon: '❤️'
  },
  {
    id: 'corpus-callosum',
    name: 'Kommissurenbahnen (Corpus callosum)',
    description: 'Verbindung zwischen den Hemisphären',
    color: 'bg-purple-50',
    icon: '🌉'
  },
  // Kleinhirn
  {
    id: 'cerebellum',
    name: 'Kleinhirn',
    description: 'Koordination und Bewegungslernen',
    color: 'bg-indigo-500',
    icon: '⚖️'
  },
  {
    id: 'balance-coordination',
    name: 'Gleichgewicht & Koordination',
    description: 'Motorische Koordination',
    color: 'bg-indigo-400',
    icon: '🤸'
  },
  {
    id: 'movement-planning',
    name: 'Bewegungsplanung',
    description: 'Planung komplexer Bewegungen',
    color: 'bg-indigo-300',
    icon: '🎯'
  },
  {
    id: 'motor-learning',
    name: 'Lernen von Bewegungsabläufen',
    description: 'Erlernen neuer motorischer Fähigkeiten',
    color: 'bg-indigo-200',
    icon: '📚'
  },
  {
    id: 'cerebellum-subdivisions',
    name: 'Vestibulozerebellum, Spinozerebellum, Pontozerebellum',
    description: 'Funktionelle Unterteilungen des Kleinhirns',
    color: 'bg-indigo-600',
    icon: '🧩'
  },
  // Hirnstamm
  {
    id: 'brainstem',
    name: 'Hirnstamm',
    description: 'Medulla, Pons und Mesenzephalon',
    color: 'bg-slate-500',
    icon: '🌳'
  },
  {
    id: 'medulla-oblongata',
    name: 'Medulla oblongata (Atemzentrum, Kreislauf)',
    description: 'Verlängertes Mark mit Vitalfunktionen',
    color: 'bg-slate-400',
    icon: '💨'
  },
  {
    id: 'pons',
    name: 'Pons (Schlaf-Wach-Rhythmus)',
    description: 'Brücke mit Schlafregulation',
    color: 'bg-slate-300',
    icon: '😴'
  },
  {
    id: 'mesencephalon',
    name: 'Mesenzephalon (Augenbewegung, Reflexe)',
    description: 'Mittelhirn mit okulomotorischen Funktionen',
    color: 'bg-slate-600',
    icon: '👁️'
  },
  {
    id: 'reticular-formation',
    name: 'Formatio reticularis (ARAS)',
    description: 'Aufsteigendes retikuläres Aktivierungssystem',
    color: 'bg-slate-700',
    icon: '⚡'
  },
  // Dienzephalon
  {
    id: 'diencephalon',
    name: 'Dienzephalon',
    description: 'Zwischenhirn mit Thalamus und Hypothalamus',
    color: 'bg-gray-500',
    icon: '🏛️'
  },
  {
    id: 'thalamus',
    name: 'Thalamus (Verschaltung sensorischer Bahnen)',
    description: 'Tor zum Bewusstsein',
    color: 'bg-gray-400',
    icon: '🚪'
  },
  {
    id: 'hypothalamus',
    name: 'Hypothalamus (Hormonregulation, Temperatur)',
    description: 'Hormonales Kontrollzentrum',
    color: 'bg-gray-300',
    icon: '🌡️'
  },
  {
    id: 'pituitary',
    name: 'Hypophyse (Adeno-/Neurohypophyse)',
    description: 'Hirnanhangsdrüse',
    color: 'bg-gray-600',
    icon: '🫖'
  },
  {
    id: 'pineal',
    name: 'Epiphyse (Melatonin, Circadianrhythmus)',
    description: 'Zirbeldrüse und Schlaf-Wach-Rhythmus',
    color: 'bg-gray-700',
    icon: '🌙'
  },
  {
    id: 'subthalamus',
    name: 'Subthalamus',
    description: 'Teil des Bewegungssystems',
    color: 'bg-gray-800',
    icon: '⚙️'
  },
  // Rückenmark
  {
    id: 'spinal-cord',
    name: 'Rückenmark',
    description: 'Spinales Nervensystem',
    color: 'bg-stone-500',
    icon: '🦴'
  },
  {
    id: 'spinal-structure',
    name: 'Aufbau (graue/weiße Substanz)',
    description: 'Histologischer Aufbau des Rückenmarks',
    color: 'bg-stone-400',
    icon: '🔬'
  },
  {
    id: 'spinal-segments',
    name: 'Segmentale Gliederung',
    description: 'Zervikale, thorakale, lumbale, sakrale Segmente',
    color: 'bg-stone-300',
    icon: '📏'
  },
  {
    id: 'ascending-tracts',
    name: 'Aufsteigende Bahnen (Hinterstrang-, Vorderseitenstrang)',
    description: 'Sensorische Leitungsbahnen',
    color: 'bg-stone-600',
    icon: '⬆️'
  },
  {
    id: 'descending-tracts',
    name: 'Absteigende Bahnen (Pyramiden-, Extrapyramidalbahn)',
    description: 'Motorische Leitungsbahnen',
    color: 'bg-stone-700',
    icon: '⬇️'
  },
  {
    id: 'reflexes',
    name: 'Reflexbögen (mono-/polysynaptisch)',
    description: 'Spinale Reflexmechanismen',
    color: 'bg-stone-800',
    icon: '🔄'
  },
  {
    id: 'rexed-laminae',
    name: 'Rexed-Laminae',
    description: 'Histologische Schichtung der grauen Substanz',
    color: 'bg-stone-900',
    icon: '🧱'
  },
  // Liquorsystem
  {
    id: 'csf-system',
    name: 'Liquorsystem',
    description: 'Hirnwasser und Liquorzirkulation',
    color: 'bg-cyan-500',
    icon: '💧'
  },
  {
    id: 'csf-production',
    name: 'Liquorproduktion (Plexus choroideus)',
    description: 'Bildung des Liquor cerebrospinalis',
    color: 'bg-cyan-400',
    icon: '🏭'
  },
  {
    id: 'csf-circulation',
    name: 'Liquorzirkulation',
    description: 'Fluss des Liquors durch das ZNS',
    color: 'bg-cyan-300',
    icon: '🌊'
  },
  {
    id: 'csf-resorption',
    name: 'Liquorresorption (Pacchioni-Granulationen)',
    description: 'Rückresorption des Liquors',
    color: 'bg-cyan-600',
    icon: '♻️'
  },
  {
    id: 'blood-brain-barrier',
    name: 'Blut-Hirn-Schranke',
    description: 'Selektive Barriere zwischen Blut und Gehirn',
    color: 'bg-cyan-700',
    icon: '🛡️'
  },
  // BEWEGUNGSAPPARAT - MUSKULOSKELETTALES SYSTEM
  {
    id: 'musculoskeletal-system',
    name: 'BEWEGUNGSAPPARAT',
    description: 'Knochen, Gelenke, Muskeln und Bewegung',
    color: 'bg-orange-600',
    icon: '🦴'
  },
  {
    id: 'bone-system',
    name: 'Knochensystem',
    description: 'Anatomie und Physiologie der Knochen',
    color: 'bg-orange-500',
    icon: '🦴'
  },
  // Knochenaufbau & -struktur
  {
    id: 'bone-structure',
    name: 'Knochenaufbau & -struktur',
    description: 'Histologie und Anatomie der Knochen',
    color: 'bg-orange-400',
    icon: '🔬'
  },
  {
    id: 'compact-spongy',
    name: 'Kompakta & Spongiosa',
    description: 'Kompakte und schwammartige Knochensubstanz',
    color: 'bg-orange-300',
    icon: '🧱'
  },
  {
    id: 'periost-endost',
    name: 'Periost & Endost',
    description: 'Knochenhaut und Endosteum',
    color: 'bg-orange-200',
    icon: '🛡️'
  },
  {
    id: 'bone-cells',
    name: 'Osteozyten, Osteoblasten, Osteoklasten',
    description: 'Knochenzellen und ihre Funktionen',
    color: 'bg-orange-700',
    icon: '🔬'
  },
  {
    id: 'bone-marrow',
    name: 'Knochenmark (rot/gelb)',
    description: 'Hämatopoetisches und Fettmark',
    color: 'bg-orange-800',
    icon: '🩸'
  },
  {
    id: 'bone-blood-supply',
    name: 'Blutversorgung des Knochens',
    description: 'Gefäßversorgung der Knochen',
    color: 'bg-orange-900',
    icon: '🩸'
  },
  {
    id: 'haversian-system',
    name: 'Havers-System (Osteone)',
    description: 'Strukturelle Einheiten der Kompakta',
    color: 'bg-orange-100',
    icon: '🎯'
  },
  // Knochenentwicklung & -wachstum
  {
    id: 'bone-development',
    name: 'Knochenentwicklung & -wachstum',
    description: 'Ossifikation und Wachstumsprozesse',
    color: 'bg-amber-500',
    icon: '📈'
  },
  {
    id: 'ossification',
    name: 'Desmale/chondrale Ossifikation',
    description: 'Direkte und indirekte Knochenbildung',
    color: 'bg-amber-400',
    icon: '🏗️'
  },
  {
    id: 'growth-plates',
    name: 'Epiphysenfugen',
    description: 'Wachstumszonen der Röhrenknochen',
    color: 'bg-amber-300',
    icon: '📏'
  },
  {
    id: 'growth-hormones',
    name: 'Wachstumshormone (GH, IGF-1)',
    description: 'Hormonelle Regulation des Knochenwachstums',
    color: 'bg-amber-600',
    icon: '🧪'
  },
  {
    id: 'bone-remodeling',
    name: 'Knochenumbau (Remodeling)',
    description: 'Kontinuierlicher Knochenumbau',
    color: 'bg-amber-700',
    icon: '🔄'
  },
  {
    id: 'wolffs-law',
    name: 'Wolff\'sches Gesetz',
    description: 'Anpassung der Knochen an Belastung',
    color: 'bg-amber-800',
    icon: '💪'
  },
  {
    id: 'peak-bone-mass',
    name: 'Peak Bone Mass',
    description: 'Maximale Knochenmasse im jungen Erwachsenenalter',
    color: 'bg-amber-900',
    icon: '🏔️'
  },
  // Frakturheilung
  {
    id: 'fracture-healing',
    name: 'Frakturheilung',
    description: 'Phasen der Knochenheilung',
    color: 'bg-rose-500',
    icon: '🩹'
  },
  {
    id: 'hematoma-inflammation',
    name: 'Hämatom- & Entzündungsphase',
    description: 'Initiale Phase der Frakturheilung',
    color: 'bg-rose-400',
    icon: '🩸'
  },
  {
    id: 'repair-phase',
    name: 'Reparationsphase (weicher/harter Kallus)',
    description: 'Kallusbildung bei der Frakturheilung',
    color: 'bg-rose-300',
    icon: '🦴'
  },
  {
    id: 'remodeling-phase',
    name: 'Umbauphase (Remodeling)',
    description: 'Finale Knochenumbauprozesse',
    color: 'bg-rose-600',
    icon: '🔄'
  },
  {
    id: 'fracture-types',
    name: 'Frakturtypen (AO-Klassifikation)',
    description: 'Systematische Fraktureinteilung',
    color: 'bg-rose-700',
    icon: '📋'
  },
  {
    id: 'fracture-complications',
    name: 'Komplikationen (Pseudarthrose, Osteomyelitis)',
    description: 'Heilungsstörungen und Komplikationen',
    color: 'bg-rose-800',
    icon: '⚠️'
  },
  {
    id: 'healing-disorders',
    name: 'Heilungsstörungen',
    description: 'Störungen der Frakturheilung',
    color: 'bg-rose-900',
    icon: '🚫'
  },
  // Knochenstoffwechsel
  {
    id: 'bone-metabolism',
    name: 'Knochenstoffwechsel',
    description: 'Regulation des Knochenstoffwechsels',
    color: 'bg-lime-500',
    icon: '🧪'
  },
  {
    id: 'calcium-phosphate',
    name: 'Kalzium-Phosphat-Haushalt',
    description: 'Mineralstoffwechsel des Knochens',
    color: 'bg-lime-400',
    icon: '🧱'
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin D (Cholecalciferol → Calcitriol)',
    description: 'Vitamin D-Stoffwechsel und Knochengesundheit',
    color: 'bg-lime-300',
    icon: '☀️'
  },
  {
    id: 'parathyroid-hormone',
    name: 'Parathormon (PTH)',
    description: 'Kalziumregulation durch Parathormon',
    color: 'bg-lime-600',
    icon: '🧬'
  },
  {
    id: 'calcitonin',
    name: 'Calcitonin',
    description: 'Kalziumsenkung durch Calcitonin',
    color: 'bg-lime-700',
    icon: '🎯'
  },
  {
    id: 'osteoporosis-pathophysiology',
    name: 'Osteoporose-Pathophysiologie',
    description: 'Entstehung und Mechanismen der Osteoporose',
    color: 'bg-lime-800',
    icon: '🕳️'
  },
  {
    id: 'rank-rankl-opg',
    name: 'RANK/RANKL/OPG-System',
    description: 'Molekulare Regulation des Knochenumbaus',
    color: 'bg-lime-900',
    icon: '🔬'
  },
  // Gelenksystem
  {
    id: 'joint-system',
    name: 'Gelenksystem',
    description: 'Anatomie und Biomechanik der Gelenke',
    color: 'bg-yellow-500',
    icon: '🔗'
  },
  {
    id: 'joint-types',
    name: 'Gelenktypen',
    description: 'Klassifikation der Gelenke',
    color: 'bg-yellow-400',
    icon: '🔗'
  },
  {
    id: 'synarthroses',
    name: 'Synarthrosen (unbeweglich)',
    description: 'Unbewegliche Verbindungen',
    color: 'bg-yellow-300',
    icon: '🧱'
  },
  {
    id: 'amphiarthroses',
    name: 'Amphiarthrosen (wenig beweglich)',
    description: 'Straffe Gelenke',
    color: 'bg-yellow-200',
    icon: '⚖️'
  },
  {
    id: 'diarthroses',
    name: 'Diarthrosen (frei beweglich)',
    description: 'Echte Gelenke',
    color: 'bg-yellow-600',
    icon: '🔄'
  },
  {
    id: 'ball-socket',
    name: 'Kugelgelenk (Schulter, Hüfte)',
    description: 'Dreiachsige Gelenke',
    color: 'bg-yellow-700',
    icon: '⚽'
  },
  {
    id: 'hinge-joint',
    name: 'Scharniergelenk (Ellenbogen, Knie)',
    description: 'Einachsige Gelenke',
    color: 'bg-yellow-800',
    icon: '🚪'
  },
  {
    id: 'saddle-joint',
    name: 'Sattelgelenk (Daumen)',
    description: 'Zweiachsiges Gelenk des Daumens',
    color: 'bg-yellow-900',
    icon: '🏇'
  },
  {
    id: 'pivot-joint',
    name: 'Drehgelenk (Atlantoaxial)',
    description: 'Rotationsgelenk der Halswirbelsäule',
    color: 'bg-yellow-100',
    icon: '🔄'
  },
  {
    id: 'ellipsoid-joint',
    name: 'Eigelenk (Handgelenk)',
    description: 'Zweiachsiges ellipsoides Gelenk',
    color: 'bg-yellow-50',
    icon: '🥚'
  },
  // Gelenkaufbau
  {
    id: 'joint-structure',
    name: 'Gelenkaufbau',
    description: 'Anatomische Strukturen der Gelenke',
    color: 'bg-teal-500',
    icon: '🏗️'
  },
  {
    id: 'articular-cartilage',
    name: 'Gelenkknorpel (hyaliner Knorpel)',
    description: 'Knorpelüberzug der Gelenkflächen',
    color: 'bg-teal-400',
    icon: '🔵'
  },
  {
    id: 'joint-capsule',
    name: 'Gelenkkapsel (Stratum fibrosum/synoviale)',
    description: 'Zweischichtiger Aufbau der Gelenkkapsel',
    color: 'bg-teal-300',
    icon: '🏛️'
  },
  {
    id: 'synovial-fluid',
    name: 'Synovialflüssigkeit (Hyaluronsäure)',
    description: 'Gelenkschmiere und Nährstoffversorgung',
    color: 'bg-teal-600',
    icon: '💧'
  },
  {
    id: 'ligaments-tendons',
    name: 'Bänder & Sehnen',
    description: 'Stabilisierung und Kraftübertragung',
    color: 'bg-teal-700',
    icon: '🔗'
  },
  {
    id: 'menisci-disci',
    name: 'Menisken & Disci',
    description: 'Zusätzliche Gelenkstrukturen',
    color: 'bg-teal-800',
    icon: '🌙'
  },
  {
    id: 'bursae',
    name: 'Schleimbeutel (Bursae)',
    description: 'Polster zur Druckverteilung',
    color: 'bg-teal-900',
    icon: '🫧'
  },
  {
    id: 'joint-innervation',
    name: 'Gelenkinnervation',
    description: 'Nervale Versorgung der Gelenke',
    color: 'bg-teal-200',
    icon: '⚡'
  },
  // Bewegungslehre
  {
    id: 'movement-theory',
    name: 'Bewegungslehre',
    description: 'Biomechanik und Bewegungsarten',
    color: 'bg-indigo-500',
    icon: '🏃'
  },
  {
    id: 'flexion-extension',
    name: 'Flexion/Extension',
    description: 'Beugung und Streckung',
    color: 'bg-indigo-400',
    icon: '↕️'
  },
  {
    id: 'abduction-adduction',
    name: 'Abduktion/Adduktion',
    description: 'Abspreizen und Heranführen',
    color: 'bg-indigo-300',
    icon: '↔️'
  },
  {
    id: 'internal-external-rotation',
    name: 'Innen-/Außenrotation',
    description: 'Drehbewegungen um die Längsachse',
    color: 'bg-indigo-600',
    icon: '🔄'
  },
  {
    id: 'circumduction',
    name: 'Zirkumduktion',
    description: 'Kreisende Bewegung',
    color: 'bg-indigo-700',
    icon: '🔃'
  },
  {
    id: 'pronation-supination',
    name: 'Pro-/Supination',
    description: 'Drehbewegungen des Unterarms',
    color: 'bg-indigo-800',
    icon: '🤲'
  },
  {
    id: 'dorsal-plantar-flexion',
    name: 'Dorsalflexion/Plantarflexion',
    description: 'Fußbewegungen nach oben/unten',
    color: 'bg-indigo-900',
    icon: '🦶'
  },
  {
    id: 'neutral-null-method',
    name: 'Neutral-Null-Methode',
    description: 'Standardisierte Bewegungsmessung',
    color: 'bg-indigo-200',
    icon: '📐'
  },
  // Gelenkpathologie
  {
    id: 'joint-pathology',
    name: 'Gelenkpathologie',
    description: 'Erkrankungen und Verletzungen der Gelenke',
    color: 'bg-red-600',
    icon: '⚠️'
  },
  {
    id: 'arthrosis',
    name: 'Arthrose (degenerativ)',
    description: 'Verschleißerkrankung der Gelenke',
    color: 'bg-red-500',
    icon: '⚙️'
  },
  {
    id: 'arthritis',
    name: 'Arthritis (entzündlich)',
    description: 'Entzündliche Gelenkerkrankungen',
    color: 'bg-red-400',
    icon: '🔥'
  },
  {
    id: 'joint-effusion',
    name: 'Gelenkerguss',
    description: 'Flüssigkeitsansammlung im Gelenk',
    color: 'bg-red-700',
    icon: '💧'
  },
  {
    id: 'luxation-subluxation',
    name: 'Luxation/Subluxation',
    description: 'Vollständige/teilweise Gelenkausrenkung',
    color: 'bg-red-800',
    icon: '🦴'
  },
  {
    id: 'joint-stiffness',
    name: 'Gelenksteife/Ankylose',
    description: 'Bewegungseinschränkung bis Versteifung',
    color: 'bg-red-900',
    icon: '🔒'
  },
  {
    id: 'joint-instability',
    name: 'Gelenkinstabilität',
    description: 'Insuffizienz der Gelenkstabilisatoren',
    color: 'bg-red-300',
    icon: '⚡'
  },
  // Muskelsystem
  {
    id: 'muscle-system',
    name: 'Muskelsystem',
    description: 'Anatomie und Physiologie der Muskulatur',
    color: 'bg-red-500',
    icon: '💪'
  },
  {
    id: 'muscle-types',
    name: 'Muskeltypen',
    description: 'Klassifikation der Muskulatur',
    color: 'bg-red-400',
    icon: '🔬'
  },
  {
    id: 'skeletal-muscle',
    name: 'Skelettmuskel (quergestreift, willkürlich)',
    description: 'Willkürliche Muskulatur',
    color: 'bg-red-300',
    icon: '💪'
  },
  {
    id: 'cardiac-muscle',
    name: 'Herzmuskel (quergestreift, unwillkürlich)',
    description: 'Myokard',
    color: 'bg-red-600',
    icon: '❤️'
  },
  {
    id: 'smooth-muscle',
    name: 'Glatte Muskulatur (unwillkürlich)',
    description: 'Eingeweidemuskulatur',
    color: 'bg-red-700',
    icon: '🌊'
  },
  {
    id: 'muscle-transitions',
    name: 'Mischformen & Übergänge',
    description: 'Intermediäre Muskeltypen',
    color: 'bg-red-800',
    icon: '🔄'
  },
  // Erweiterte Muskelsystem-Kategorien
  {
    id: 'muscle-physiology',
    name: 'Muskelphysiologie',
    description: 'Funktion und Arbeitsweise der Muskulatur',
    color: 'bg-red-300',
    icon: '⚡'
  },
  {
    id: 'muscle-contraction',
    name: 'Muskelkontraktion',
    description: 'Mechanismus der Muskelkontraktion',
    color: 'bg-red-400',
    icon: '🤏'
  },
  {
    id: 'sliding-filament-theory',
    name: 'Gleitfilament-Theorie',
    description: 'Aktin-Myosin-Interaktion',
    color: 'bg-red-500',
    icon: '🧬'
  },
  {
    id: 'excitation-contraction-coupling',
    name: 'Erregungs-Kontraktions-Kopplung',
    description: 'Signalübertragung zur Kontraktion',
    color: 'bg-red-600',
    icon: '⚡'
  },
  {
    id: 'calcium-regulation',
    name: 'Kalzium-Regulation',
    description: 'Troponin-Tropomyosin-System',
    color: 'bg-red-700',
    icon: '🧪'
  },
  {
    id: 'muscle-fiber-types',
    name: 'Muskelfasertypen',
    description: 'Typ I und Typ II Fasern',
    color: 'bg-red-200',
    icon: '🎯'
  },
  {
    id: 'type-i-fibers',
    name: 'Typ I Fasern (langsam, oxidativ)',
    description: 'Ausdauerfasern, rote Fasern',
    color: 'bg-red-100',
    icon: '🟥'
  },
  {
    id: 'type-iia-fibers',
    name: 'Typ IIa Fasern (schnell, oxidativ-glykolytisch)',
    description: 'Intermediäre Fasern',
    color: 'bg-pink-200',
    icon: '🟡'
  },
  {
    id: 'type-iix-fibers',
    name: 'Typ IIx Fasern (schnell, glykolytisch)',
    description: 'Schnellkraftfasern, weiße Fasern',
    color: 'bg-pink-300',
    icon: '⚪'
  },
  {
    id: 'motor-units',
    name: 'Motorische Einheiten',
    description: 'Motoneuron und Muskelfasern',
    color: 'bg-pink-400',
    icon: '🎛️'
  },
  {
    id: 'muscle-metabolism',
    name: 'Muskelstoffwechsel',
    description: 'Energiebereitstellung im Muskel',
    color: 'bg-pink-500',
    icon: '⚡'
  },
  {
    id: 'atp-pcr-system',
    name: 'ATP-Phosphokreatin-System',
    description: 'Schnelle anaerobe Energiebereitstellung',
    color: 'bg-pink-600',
    icon: '💨'
  },
  {
    id: 'glycolytic-system',
    name: 'Glykolytisches System',
    description: 'Anaerobe Glykolyse',
    color: 'bg-pink-700',
    icon: '🍯'
  },
  {
    id: 'oxidative-system',
    name: 'Oxidatives System',
    description: 'Aerobe Energiebereitstellung',
    color: 'bg-pink-800',
    icon: '🫁'
  },
  {
    id: 'muscle-fatigue',
    name: 'Muskelermüdung',
    description: 'Ursachen und Mechanismen der Ermüdung',
    color: 'bg-red-900',
    icon: '😴'
  },
  {
    id: 'muscle-adaptation',
    name: 'Muskeladaptation',
    description: 'Anpassung an Training',
    color: 'bg-rose-200',
    icon: '📈'
  },
  {
    id: 'muscle-hypertrophy',
    name: 'Muskelhypertrophie',
    description: 'Dickenwachstum der Muskelfasern',
    color: 'bg-rose-300',
    icon: '💪'
  },
  {
    id: 'muscle-hyperplasia',
    name: 'Muskelhyperplasie',
    description: 'Vermehrung der Muskelfasern',
    color: 'bg-rose-400',
    icon: '🔢'
  },
  {
    id: 'muscle-atrophy',
    name: 'Muskelatrophie',
    description: 'Muskelschwund und Ursachen',
    color: 'bg-rose-500',
    icon: '📉'
  },
  {
    id: 'neuromuscular-junction',
    name: 'Neuromuskuläre Endplatte',
    description: 'Synapse zwischen Nerv und Muskel',
    color: 'bg-rose-600',
    icon: '🔗'
  },
  {
    id: 'acetylcholine-release',
    name: 'Acetylcholin-Freisetzung',
    description: 'Neurotransmitter-Freisetzung',
    color: 'bg-rose-700',
    icon: '💊'
  },
  {
    id: 'muscle-receptors',
    name: 'Muskelrezeptoren',
    description: 'Propriozeption und Muskelspindeln',
    color: 'bg-rose-800',
    icon: '📡'
  },
  {
    id: 'muscle-spindles',
    name: 'Muskelspindeln',
    description: 'Dehnungsrezeptoren im Muskel',
    color: 'bg-rose-900',
    icon: '🌀'
  },
  {
    id: 'golgi-tendon-organs',
    name: 'Golgi-Sehnenorgane',
    description: 'Spannungsrezeptoren in Sehnen',
    color: 'bg-violet-200',
    icon: '⚖️'
  },
  // Weitere Muskelsystem-Kategorien
  {
    id: 'skeletal-muscle-anatomy',
    name: 'Skelettmuskel-Anatomie',
    description: 'Aufbau und Struktur der Skelettmuskulatur',
    color: 'bg-violet-300',
    icon: '🏗️'
  },
  {
    id: 'muscle-origin-insertion',
    name: 'Ursprung & Ansatz',
    description: 'Muskelursprung und -ansatz an Knochen',
    color: 'bg-violet-400',
    icon: '🔗'
  },
  {
    id: 'muscle-fiber-architecture',
    name: 'Faserarchitektur',
    description: 'Parallelfaserig, gefiedert, spiral',
    color: 'bg-violet-500',
    icon: '🪶'
  },
  {
    id: 'fascia-aponeurosis',
    name: 'Faszien & Aponeurosen',
    description: 'Bindegewebige Muskelhüllen',
    color: 'bg-violet-600',
    icon: '🕸️'
  },
  {
    id: 'muscle-mechanics',
    name: 'Muskelmechanik',
    description: 'Biomechanik der Muskelkraft',
    color: 'bg-violet-700',
    icon: '⚙️'
  },
  {
    id: 'lever-systems',
    name: 'Hebelsysteme',
    description: 'Hebel 1., 2. und 3. Grades im Körper',
    color: 'bg-violet-800',
    icon: '🎯'
  },
  {
    id: 'muscle-moment-arms',
    name: 'Kraftarme & Drehmomente',
    description: 'Mechanische Vorteile der Muskeln',
    color: 'bg-violet-900',
    icon: '🔧'
  },
  {
    id: 'length-tension-relationship',
    name: 'Länge-Kraft-Beziehung',
    description: 'Optimale Muskellänge für Kraftentwicklung',
    color: 'bg-purple-200',
    icon: '📏'
  },
  {
    id: 'force-velocity-relationship',
    name: 'Kraft-Geschwindigkeits-Beziehung',
    description: 'Hill-Gleichung der Muskelkontraktion',
    color: 'bg-purple-300',
    icon: '🏃'
  },
  {
    id: 'muscle-groups-head-neck',
    name: 'Kopf- & Halsmuskulatur',
    description: 'Mimische und Kaumuskulatur',
    color: 'bg-purple-400',
    icon: '🗣️'
  },
  {
    id: 'muscle-groups-trunk',
    name: 'Rumpfmuskulatur',
    description: 'Rücken-, Bauch- und Atemmuskulatur',
    color: 'bg-purple-500',
    icon: '🫁'
  },
  {
    id: 'muscle-groups-upper-limb',
    name: 'Obere Extremität',
    description: 'Arm-, Schulter- und Handmuskulatur',
    color: 'bg-purple-600',
    icon: '💪'
  },
  {
    id: 'muscle-groups-lower-limb',
    name: 'Untere Extremität',
    description: 'Bein-, Hüft- und Fußmuskulatur',
    color: 'bg-purple-700',
    icon: '🦵'
  },
  {
    id: 'core-muscles',
    name: 'Core-Muskulatur',
    description: 'Stabilisierende Rumpfmuskulatur',
    color: 'bg-purple-800',
    icon: '🎯'
  },
  {
    id: 'postural-muscles',
    name: 'Haltungsmuskulatur',
    description: 'Tonische vs. phasische Muskulatur',
    color: 'bg-purple-900',
    icon: '🧘'
  },
  // Wirbelsäule & Rücken-Kategorien
  {
    id: 'spine-anatomy',
    name: 'Wirbelsäulen-Anatomie',
    description: 'Aufbau und Struktur der Wirbelsäule',
    color: 'bg-amber-200',
    icon: '🦴'
  },
  {
    id: 'vertebral-column-overview',
    name: 'Wirbelsäule Übersicht',
    description: 'Allgemeiner Aufbau und Krümmungen',
    color: 'bg-amber-300',
    icon: '🌊'
  },
  {
    id: 'cervical-vertebrae',
    name: 'Halswirbelsäule (C1-C7)',
    description: 'Zervikale Wirbel und Besonderheiten',
    color: 'bg-amber-400',
    icon: '🔝'
  },
  {
    id: 'atlas-axis',
    name: 'Atlas & Axis (C1/C2)',
    description: 'Besondere Halswirbel',
    color: 'bg-amber-500',
    icon: '👑'
  },
  {
    id: 'thoracic-vertebrae',
    name: 'Brustwirbelsäule (T1-T12)',
    description: 'Thorakale Wirbel mit Rippenansätzen',
    color: 'bg-amber-600',
    icon: '🫁'
  },
  {
    id: 'lumbar-vertebrae',
    name: 'Lendenwirbelsäule (L1-L5)',
    description: 'Lumbale Wirbel, größte Belastung',
    color: 'bg-amber-700',
    icon: '💪'
  },
  {
    id: 'sacrum-coccyx',
    name: 'Kreuzbein & Steißbein',
    description: 'Verwachsene Wirbel des Beckens',
    color: 'bg-amber-800',
    icon: '🔺'
  },
  {
    id: 'vertebral-structure',
    name: 'Wirbelaufbau',
    description: 'Anatomie eines einzelnen Wirbels',
    color: 'bg-amber-900',
    icon: '🔧'
  },
  {
    id: 'vertebral-body',
    name: 'Wirbelkörper',
    description: 'Lasttragende Struktur',
    color: 'bg-yellow-200',
    icon: '🧱'
  },
  {
    id: 'vertebral-arch',
    name: 'Wirbelbogen',
    description: 'Schützende Struktur um Rückenmark',
    color: 'bg-yellow-300',
    icon: '🌉'
  },
  {
    id: 'spinous-transverse-processes',
    name: 'Dorn- & Querfortsätze',
    description: 'Ansatzstellen für Muskeln und Bänder',
    color: 'bg-yellow-400',
    icon: '🔱'
  },
  {
    id: 'intervertebral-discs',
    name: 'Bandscheiben',
    description: 'Pufferkissen zwischen Wirbeln',
    color: 'bg-yellow-500',
    icon: '💿'
  },
  {
    id: 'spinal-biomechanics',
    name: 'Wirbelsäulen-Biomechanik',
    description: 'Bewegung und Belastung der Wirbelsäule',
    color: 'bg-yellow-600',
    icon: '⚙️'
  },
  {
    id: 'spinal-curvatures',
    name: 'Wirbelsäulenkrümmungen',
    description: 'Lordose und Kyphose',
    color: 'bg-yellow-700',
    icon: '🌊'
  },
  {
    id: 'cervical-lordosis',
    name: 'Halslordose',
    description: 'Natürliche Vorwärtskrümmung der HWS',
    color: 'bg-yellow-800',
    icon: '🦢'
  },
  {
    id: 'thoracic-kyphosis',
    name: 'Brustkyphose',
    description: 'Natürliche Rückwärtskrümmung der BWS',
    color: 'bg-yellow-900',
    icon: '🏔️'
  },
  {
    id: 'lumbar-lordosis',
    name: 'Lendenlordose',
    description: 'Natürliche Vorwärtskrümmung der LWS',
    color: 'bg-orange-200',
    icon: '🌙'
  },
  {
    id: 'spinal-movements',
    name: 'Wirbelsäulenbewegungen',
    description: 'Flexion, Extension, Lateralflexion, Rotation',
    color: 'bg-orange-300',
    icon: '🤸'
  },
  {
    id: 'segmental-mobility',
    name: 'Segmentale Beweglichkeit',
    description: 'Bewegung zwischen einzelnen Wirbeln',
    color: 'bg-orange-400',
    icon: '🔗'
  },
  {
    id: 'spinal-stability',
    name: 'Wirbelsäulenstabilität',
    description: 'Passive und aktive Stabilisierung',
    color: 'bg-orange-500',
    icon: '🏛️'
  },
  {
    id: 'load-distribution',
    name: 'Lastverteilung',
    description: 'Kraftübertragung in der Wirbelsäule',
    color: 'bg-orange-600',
    icon: '⚖️'
  },
  {
    id: 'back-muscles',
    name: 'Rückenmuskulatur',
    description: 'Muskulatur des Rückens',
    color: 'bg-orange-700',
    icon: '💪'
  },
  {
    id: 'deep-back-muscles',
    name: 'Tiefe Rückenmuskulatur',
    description: 'Autochthone Rückenmuskulatur',
    color: 'bg-orange-800',
    icon: '🏗️'
  },
  {
    id: 'erector-spinae',
    name: 'M. erector spinae',
    description: 'Rückenstrecker-Komplex',
    color: 'bg-orange-900',
    icon: '🏛️'
  },
  {
    id: 'multifidus',
    name: 'M. multifidus',
    description: 'Tiefe segmentale Stabilisatoren',
    color: 'bg-red-200',
    icon: '🕸️'
  },
  {
    id: 'superficial-back-muscles',
    name: 'Oberflächliche Rückenmuskulatur',
    description: 'Sekundäre Rückenmuskulatur',
    color: 'bg-red-300',
    icon: '🦅'
  },
  {
    id: 'trapezius',
    name: 'M. trapezius',
    description: 'Kapuzenmuskel',
    color: 'bg-red-400',
    icon: '🔺'
  },
  {
    id: 'latissimus-dorsi',
    name: 'M. latissimus dorsi',
    description: 'Breitester Rückenmuskel',
    color: 'bg-red-500',
    icon: '🦅'
  },
  {
    id: 'rhomboids',
    name: 'M. rhomboideus',
    description: 'Rautenmuskel',
    color: 'bg-red-600',
    icon: '◊'
  },
  {
    id: 'serratus-posterior',
    name: 'M. serratus posterior',
    description: 'Hinterer Sägemuskel',
    color: 'bg-red-700',
    icon: '🪚'
  },
  {
    id: 'levator-scapulae',
    name: 'M. levator scapulae',
    description: 'Schulterblattheber',
    color: 'bg-red-800',
    icon: '⬆️'
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
    category: quizCategories[131], // respiratory-muscles (jetzt verschoben durch neue Kategorien)
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
    category: quizCategories[125], // upper-airways
    difficulty: 'leicht',
    tags: ['obere-atemwege', 'anatomie', 'nase', 'rachen', 'kehlkopf']
  },
  {
    id: 'resp_002',
    question: 'Was ist Surfactant und welche Funktion hat es?',
    options: ['Ein Atemmuskel', 'Ein oberflächenaktiver Stoff in den Alveolen', 'Ein Blutgefäß in der Lunge', 'Ein Nervensystem'],
    correctAnswer: 1,
    explanation: 'Surfactant ist eine oberflächenaktive Substanz, die die Oberflächenspannung in den Alveolen reduziert und damit das Kollabieren der Lungenbläschen verhindert.',
    category: quizCategories[129], // surfactant
    difficulty: 'schwer',
    tags: ['surfactant', 'alveolen', 'oberflächenspannung']
  },
  {
    id: 'resp_003',
    question: 'Wo findet der eigentliche Gasaustausch in der Lunge statt?',
    options: ['In den Bronchien', 'In der Trachea', 'In den Alveolen', 'Im Kehlkopf'],
    correctAnswer: 2,
    explanation: 'Der Gasaustausch zwischen Luft und Blut findet in den Alveolen (Lungenbläschen) statt, wo Sauerstoff ins Blut aufgenommen und Kohlendioxid abgegeben wird.',
    category: quizCategories[127], // alveoli
    difficulty: 'leicht',
    tags: ['gasaustausch', 'alveolen', 'sauerstoff', 'kohlendioxid']
  },
  {
    id: 'resp_004',
    question: 'Was beschreibt das Ventilations-Perfusions-Verhältnis (V/Q)?',
    options: ['Verhältnis von Ein- zu Ausatmung', 'Verhältnis von Belüftung zu Durchblutung', 'Verhältnis von Sauerstoff zu Kohlendioxid', 'Verhältnis von Totraum zu Alveolarraum'],
    correctAnswer: 1,
    explanation: 'Das V/Q-Verhältnis beschreibt das Verhältnis von Ventilation (Belüftung) zu Perfusion (Durchblutung) in der Lunge. Ein optimales V/Q-Verhältnis ist für einen effizienten Gasaustausch wichtig.',
    category: quizCategories[134], // vq-ratio
    difficulty: 'schwer',
    tags: ['v/q-verhältnis', 'ventilation', 'perfusion', 'gasaustausch']
  },
  {
    id: 'resp_005',
    question: 'Welche Muskeln werden bei der normalen, ruhigen Einatmung verwendet?',
    options: ['Nur das Zwerchfell', 'Zwerchfell und Zwischenrippenmuskeln', 'Atemhilfsmuskeln', 'Bauchmuskeln'],
    correctAnswer: 1,
    explanation: 'Bei der normalen Inspiration werden das Zwerchfell (Hauptatemmuskel) und die äußeren Zwischenrippenmuskeln (Mm. intercostales externi) verwendet.',
    category: quizCategories[131], // respiratory-muscles
    difficulty: 'mittel',
    tags: ['atemmuskulatur', 'inspiration', 'zwerchfell', 'intercostalmuskeln']
  },
  {
    id: 'resp_006',
    question: 'Was ist ein Totraum in der Lunge?',
    options: ['Bereich ohne Alveolen', 'Bereich der nicht am Gasaustausch beteiligt ist', 'Kollabierte Lungenbereiche', 'Entzündete Lungenbereiche'],
    correctAnswer: 1,
    explanation: 'Der Totraum umfasst alle Bereiche der Atemwege, die nicht am Gasaustausch beteiligt sind, wie Trachea, Bronchien und Bronchiolen (anatomischer Totraum).',
    category: quizCategories[135], // dead-space
    difficulty: 'mittel',
    tags: ['totraum', 'gasaustausch', 'anatomisch', 'funktionell']
  },

  // Lungenfunktion - Neue Fragen
  {
    id: 'lung_001',
    question: 'Welches Atemvolumen beträgt normalerweise etwa 500 ml?',
    options: ['Residualvolumen (RV)', 'Atemzugvolumen (AZV)', 'Inspiratorisches Reservevolumen (IRV)', 'Exspiratorisches Reservevolumen (ERV)'],
    correctAnswer: 1,
    explanation: 'Das Atemzugvolumen (AZV oder auch TV = Tidal Volume) beträgt bei ruhiger Atmung etwa 500 ml und ist das Volumen, das bei jedem normalen Atemzug ein- und ausgeatmet wird.',
    category: quizCategories[132], // lung-volumes
    difficulty: 'leicht',
    tags: ['lungenfunktion', 'atemvolumen', 'azv', 'spirometrie']
  },
  {
    id: 'lung_002',
    question: 'Was ist der Tiffeneau-Index (FEV1/FVC)?',
    options: ['Verhältnis von Vitalkapazität zu Totalkapazität', 'Verhältnis von forciertem exspiratorischem Volumen in 1s zur forcierten Vitalkapazität', 'Verhältnis von Residualvolumen zur Funktionellen Residualkapazität', 'Verhältnis von Inspirations- zur Exspirationszeit'],
    correctAnswer: 1,
    explanation: 'Der Tiffeneau-Index ist das Verhältnis von FEV1 (Forciertes exspiratorisches Volumen in 1 Sekunde) zur FVC (Forcierte Vitalkapazität). Normal ist ein Wert >70%. Bei obstruktiven Erkrankungen ist er erniedrigt.',
    category: quizCategories[136], // fev1-fvc
    difficulty: 'schwer',
    tags: ['tiffeneau', 'fev1', 'fvc', 'obstruktion', 'spirometrie']
  },
  {
    id: 'lung_003',
    question: 'Was misst die Diffusionskapazität (DLCO)?',
    options: ['Die Elastizität der Lunge', 'Den Widerstand der Atemwege', 'Die Gasaustauschfähigkeit der Lunge', 'Das maximale Atemvolumen'],
    correctAnswer: 2,
    explanation: 'Die DLCO (Diffusion capacity for carbon monoxide) misst die Fähigkeit der Lunge, Gase von den Alveolen ins Blut zu transportieren. Sie ist ein Maß für die Gasaustauschfähigkeit.',
    category: quizCategories[138], // dlco
    difficulty: 'schwer',
    tags: ['dlco', 'diffusion', 'gasaustausch', 'kohlenmonoxid']
  },

  // Gasaustausch & Transport - Neue Fragen
  {
    id: 'gas_001',
    question: 'Was bewirkt eine Rechtsverschiebung der Sauerstoff-Bindungskurve?',
    options: ['Erhöhte O2-Affinität des Hämoglobins', 'Verminderte O2-Affinität des Hämoglobins', 'Keine Veränderung der O2-Bindung', 'Erhöhte CO2-Bindung'],
    correctAnswer: 1,
    explanation: 'Eine Rechtsverschiebung der O2-Bindungskurve bedeutet verminderte O2-Affinität. Ursachen: ↑pH, ↑CO2, ↑Temperatur, ↑2,3-DPG. Dies erleichtert die O2-Abgabe im Gewebe.',
    category: quizCategories[141], // o2-saturation-curve
    difficulty: 'schwer',
    tags: ['sauerstoffbindungskurve', 'rechtsverschiebung', 'hämoglobin', 'bohr-effekt']
  },
  {
    id: 'gas_002',
    question: 'Wie wird der größte Teil des CO2 im Blut transportiert?',
    options: ['Als freies CO2 im Plasma', 'Als Carboxyhämoglobin', 'Als Bikarbonat (HCO3-)', 'Als Carbaminoverbindungen'],
    correctAnswer: 2,
    explanation: 'Etwa 70% des CO2 wird als Bikarbonat (HCO3-) transportiert, 23% als Carbaminoverbindungen am Hämoglobin und nur 7% physikalisch gelöst im Plasma.',
    category: quizCategories[143], // co2-transport
    difficulty: 'mittel',
    tags: ['co2-transport', 'bikarbonat', 'carbamino', 'säure-basen']
  },
  {
    id: 'gas_003',
    question: 'Was ist Carboxyhämoglobin (COHb)?',
    options: ['CO2 gebunden an Hämoglobin', 'CO gebunden an Hämoglobin', 'O2 gebunden an Methämoglobin', 'HCO3- gebunden an Hämoglobin'],
    correctAnswer: 1,
    explanation: 'Carboxyhämoglobin ist Kohlenmonoxid (CO) gebunden an Hämoglobin. CO hat eine 200-300x höhere Affinität als O2 und führt zur CO-Vergiftung durch blockierte O2-Bindungsstellen.',
    category: quizCategories[146], // methemoglobin-carboxyhemoglobin
    difficulty: 'mittel',
    tags: ['carboxyhämoglobin', 'kohlenmonoxid', 'vergiftung', 'co']
  },

  // Atemregulation - Neue Fragen
  {
    id: 'control_001',
    question: 'Wo befindet sich das primäre Atemzentrum?',
    options: ['Im Kleinhirn', 'In der Medulla oblongata', 'Im Thalamus', 'Im Großhirn'],
    correctAnswer: 1,
    explanation: 'Das primäre Atemzentrum liegt in der Medulla oblongata (verlängertes Mark). Es steuert den automatischen Atemrhythmus und reagiert auf CO2- und pH-Änderungen.',
    category: quizCategories[148], // respiratory-centers
    difficulty: 'mittel',
    tags: ['atemzentrum', 'medulla', 'hirnstamm', 'atemregulation']
  },
  {
    id: 'control_002',
    question: 'Was ist der Hauptstimulus für die normale Atmung?',
    options: ['O2-Mangel', 'CO2-Erhöhung', 'pH-Erniedrigung', 'Blutdruckänderung'],
    correctAnswer: 1,
    explanation: 'Der Hauptstimulus für die normale Atmung ist die CO2-Erhöhung im Blut. Zentrale Chemorezeptoren in der Medulla reagieren auf pH-Änderungen durch CO2.',
    category: quizCategories[151], // co2-o2-control
    difficulty: 'mittel',
    tags: ['atemregulation', 'co2', 'chemorezeptoren', 'hypercapnie']
  },
  {
    id: 'control_003',
    question: 'Was ist der Hering-Breuer-Reflex?',
    options: ['Atemstillstand bei hohem CO2', 'Inspirationshemmung bei Lungendehnung', 'Atemfrequenzsteigerung bei O2-Mangel', 'Hustenstimulus bei Reizung'],
    correctAnswer: 1,
    explanation: 'Der Hering-Breuer-Reflex führt zur Inspirationshemmung bei starker Lungendehnung. Dehnungsrezeptoren in den Atemwegen verhindern eine Überblähung der Lunge.',
    category: quizCategories[155], // hering-breuer-reflex
    difficulty: 'schwer',
    tags: ['hering-breuer', 'dehnungsrezeptoren', 'inspirationshemmung', 'reflex']
  },

  // Nervensystem - ZNS Fragen
  {
    id: 'cns_001',
    question: 'Welcher Gehirnlappen ist hauptsächlich für die Motorik verantwortlich?',
    options: ['Frontallappen', 'Parietallappen', 'Temporallappen', 'Okzipitallappen'],
    correctAnswer: 0,
    explanation: 'Der Frontallappen enthält den primären motorischen Kortex und ist für willkürliche Bewegungen verantwortlich. Hier liegt auch das Broca-Areal für die Sprachproduktion.',
    category: quizCategories[664], // frontal-lobe
    difficulty: 'leicht',
    tags: ['großhirn', 'motorik', 'frontallappen']
  },
  {
    id: 'cns_002',
    question: 'Wo befindet sich das Wernicke-Areal?',
    options: ['Frontallappen', 'Parietallappen', 'Temporallappen', 'Okzipitallappen'],
    correctAnswer: 2,
    explanation: 'Das Wernicke-Areal liegt im Temporallappen und ist für das Sprachverständnis zuständig. Schädigungen führen zur sensorischen Aphasie.',
    category: quizCategories[678], // temporal-lobe
    difficulty: 'mittel',
    tags: ['temporallappen', 'sprache', 'wernicke-areal']
  },
  {
    id: 'cns_003',
    question: 'Welche Hauptfunktion hat das Kleinhirn?',
    options: ['Bewusstsein', 'Koordination und Gleichgewicht', 'Hormonregulation', 'Gedächtnisbildung'],
    correctAnswer: 1,
    explanation: 'Das Kleinhirn (Cerebellum) ist hauptverantwortlich für die Koordination von Bewegungen, das Gleichgewicht und das Erlernen motorischer Fähigkeiten.',
    category: quizCategories[721], // cerebellum
    difficulty: 'leicht',
    tags: ['kleinhirn', 'koordination', 'gleichgewicht']
  },
  {
    id: 'cns_004',
    question: 'Welche Struktur wird als "Tor zum Bewusstsein" bezeichnet?',
    options: ['Hypothalamus', 'Thalamus', 'Hippocampus', 'Corpus callosum'],
    correctAnswer: 1,
    explanation: 'Der Thalamus fungiert als Relaisstation für sensorische Informationen zum Kortex und wird daher als "Tor zum Bewusstsein" bezeichnet.',
    category: quizCategories[800], // thalamus
    difficulty: 'mittel',
    tags: ['thalamus', 'bewusstsein', 'sensorik']
  },
  {
    id: 'cns_005',
    question: 'Wo liegt das Atemzentrum?',
    options: ['Pons', 'Medulla oblongata', 'Mesenzephalon', 'Thalamus'],
    correctAnswer: 1,
    explanation: 'Das Atemzentrum befindet sich in der Medulla oblongata (verlängertes Mark) und steuert die automatische Atmung.',
    category: quizCategories[764], // medulla-oblongata
    difficulty: 'mittel',
    tags: ['hirnstamm', 'atemzentrum', 'medulla']
  },
  {
    id: 'cns_006',
    question: 'Was verbindet das Corpus callosum?',
    options: ['Groß- und Kleinhirn', 'Die beiden Großhirnhemisphären', 'Hirnstamm und Großhirn', 'Rückenmark und Gehirn'],
    correctAnswer: 1,
    explanation: 'Das Corpus callosum ist die größte Kommissurenbahn und verbindet die beiden Großhirnhemisphären miteinander.',
    category: quizCategories[713], // corpus-callosum
    difficulty: 'mittel',
    tags: ['corpus-callosum', 'hemisphären', 'kommissuren']
  },
  {
    id: 'cns_007',
    question: 'Welche Struktur produziert den Liquor cerebrospinalis?',
    options: ['Arachnoidea', 'Plexus choroideus', 'Ependym', 'Dura mater'],
    correctAnswer: 1,
    explanation: 'Der Plexus choroideus in den Hirnventrikeln produziert den Liquor cerebrospinalis (Hirnwasser).',
    category: quizCategories[893], // csf-production
    difficulty: 'mittel',
    tags: ['liquor', 'plexus-choroideus', 'hirnwasser']
  },
  {
    id: 'cns_008',
    question: 'Was ist die Blut-Hirn-Schranke?',
    options: ['Eine physische Barriere um das Gehirn', 'Eine selektive Membranbarriere', 'Eine Knochenstruktur', 'Ein Liquorraum'],
    correctAnswer: 1,
    explanation: 'Die Blut-Hirn-Schranke ist eine selektive Barriere aus tight junctions zwischen Blutgefäßen und Gehirn, die das Gehirn vor schädlichen Substanzen schützt.',
    category: quizCategories[914], // blood-brain-barrier
    difficulty: 'schwer',
    tags: ['blut-hirn-schranke', 'schutz', 'selektiv']
  },
  {
    id: 'cns_009',
    question: 'Welche Bahnen leiten motorische Impulse vom Gehirn zum Rückenmark?',
    options: ['Aufsteigende Bahnen', 'Absteigende Bahnen', 'Kommissurenbahnen', 'Assoziationsbahnen'],
    correctAnswer: 1,
    explanation: 'Absteigende Bahnen (wie die Pyramidenbahn) leiten motorische Befehle vom Gehirn zum Rückenmark und zu den Muskeln.',
    category: quizCategories[864], // descending-tracts
    difficulty: 'mittel',
    tags: ['motorische-bahnen', 'pyramidenbahn', 'rückenmark']
  },
  {
    id: 'cns_010',
    question: 'Was sind Reflexbögen?',
    options: ['Bewusste Bewegungen', 'Automatische Antworten ohne Gehirnbeteiligung', 'Lernprozesse', 'Gedächtnisspeicher'],
    correctAnswer: 1,
    explanation: 'Reflexbögen sind automatische, schnelle Antworten des Nervensystems auf Reize, die oft ohne direkte Beteiligung des Gehirns ablaufen.',
    category: quizCategories[871], // reflexes
    difficulty: 'leicht',
    tags: ['reflexe', 'automatisch', 'spinal']
  },

  // Bewegungsapparat - Fragen
  {
    id: 'musculo_001',
    question: 'Aus welchen zwei Hauptbestandteilen besteht Knochengewebe?',
    options: ['Kompakta und Spongiosa', 'Periost und Endost', 'Osteozyten und Osteoblasten', 'Mark und Kortex'],
    correctAnswer: 0,
    explanation: 'Knochengewebe besteht aus Kompakta (kompakte, dichte Knochensubstanz) und Spongiosa (schwammartige, poröse Knochensubstanz).',
    category: quizCategories[944], // compact-spongy
    difficulty: 'leicht',
    tags: ['knochen', 'histologie', 'kompakta', 'spongiosa']
  },
  {
    id: 'musculo_002',
    question: 'Welche Zellen sind für den Knochenabbau verantwortlich?',
    options: ['Osteoblasten', 'Osteozyten', 'Osteoklasten', 'Chondrozyten'],
    correctAnswer: 2,
    explanation: 'Osteoklasten sind die Zellen, die für den Knochenabbau (Resorption) verantwortlich sind. Osteoblasten bauen Knochen auf, Osteozyten sind reife Knochenzellen.',
    category: quizCategories[947], // bone-cells
    difficulty: 'mittel',
    tags: ['osteoklasten', 'knochenabbau', 'remodeling']
  },
  {
    id: 'musculo_003',
    question: 'Was besagt das Wolff\'sche Gesetz?',
    options: ['Knochen wachsen nur bis zum 25. Lebensjahr', 'Knochen passen sich der Belastung an', 'Alle Knochen haben die gleiche Dichte', 'Knochenbruch heilt immer vollständig'],
    correctAnswer: 1,
    explanation: 'Das Wolff\'sche Gesetz besagt, dass sich Knochen an die mechanische Belastung anpassen: Bei höherer Belastung werden sie stärker, bei fehlender Belastung schwächer.',
    category: quizCategories[964], // wolffs-law
    difficulty: 'mittel',
    tags: ['wolff-gesetz', 'anpassung', 'belastung']
  },
  {
    id: 'musculo_004',
    question: 'Welcher Gelenktyp erlaubt Bewegung in drei Achsen?',
    options: ['Scharniergelenk', 'Kugelgelenk', 'Sattelgelenk', 'Drehgelenk'],
    correctAnswer: 1,
    explanation: 'Das Kugelgelenk (z.B. Schulter- und Hüftgelenk) ist ein dreiachsiges Gelenk, das Bewegungen in allen drei Raumachsen ermöglicht.',
    category: quizCategories[972], // ball-socket
    difficulty: 'leicht',
    tags: ['kugelgelenk', 'bewegungsachsen', 'schulter', 'hüfte']
  },
  {
    id: 'musculo_005',
    question: 'Was unterscheidet Skelettmuskel von glattem Muskel?',
    options: ['Skelettmuskel ist unwillkürlich', 'Glatter Muskel ist quergestreift', 'Skelettmuskel ist willkürlich steuerbar', 'Beide sind identisch'],
    correctAnswer: 2,
    explanation: 'Skelettmuskel ist quergestreift und willkürlich steuerbar, während glatter Muskel nicht quergestreift und unwillkürlich (autonom) gesteuert wird.',
    category: quizCategories[979], // skeletal-muscle
    difficulty: 'leicht',
    tags: ['skelettmuskel', 'willkürlich', 'quergestreift']
  },
  {
    id: 'musculo_006',
    question: 'Welche Struktur verbindet Muskeln mit Knochen?',
    options: ['Bänder', 'Sehnen', 'Knorpel', 'Faszien'],
    correctAnswer: 1,
    explanation: 'Sehnen (Tendines) verbinden Muskeln mit Knochen und übertragen die Muskelkraft auf das Skelett. Bänder verbinden Knochen mit Knochen.',
    category: quizCategories[979], // skeletal-muscle
    difficulty: 'leicht',
    tags: ['sehnen', 'muskeln', 'knochen', 'kraftübertragung']
  },
  {
    id: 'musculo_007',
    question: 'Was ist das Havers-System?',
    options: ['Ein Muskeltyp', 'Strukturelle Einheit der Kompakta', 'Ein Gelenktyp', 'Eine Knochenerkrankung'],
    correctAnswer: 1,
    explanation: 'Das Havers-System (Osteon) ist die strukturelle und funktionelle Grundeinheit der Kompakta, bestehend aus konzentrisch angeordneten Knochenlamellen um einen Zentralkanal.',
    category: quizCategories[952], // haversian-system
    difficulty: 'schwer',
    tags: ['havers-system', 'osteon', 'kompakta', 'histologie']
  },
  {
    id: 'musculo_008',
    question: 'Welches ist das beweglichste Gelenk im menschlichen Körper?',
    options: ['Kniegelenk', 'Ellenbogengelenk', 'Schultergelenk', 'Handgelenk'],
    correctAnswer: 2,
    explanation: 'Das Schultergelenk ist als Kugelgelenk das beweglichste Gelenk des Körpers, allerdings auf Kosten der Stabilität.',
    category: quizCategories[972], // ball-socket
    difficulty: 'leicht',
    tags: ['schultergelenk', 'beweglichkeit', 'kugelgelenk']
  },

  // Neue Muskelsystem-Fragen
  {
    id: 'muscle_001',
    question: 'Welche Proteine sind hauptsächlich für die Muskelkontraktion verantwortlich?',
    options: ['Kollagen und Elastin', 'Aktin und Myosin', 'Troponin und Albumin', 'Keratin und Fibrin'],
    correctAnswer: 1,
    explanation: 'Aktin und Myosin sind die Hauptproteine der Muskelkontraktion. Sie bilden die dünnen und dicken Filamente, die sich nach der Gleitfilament-Theorie gegeneinander verschieben.',
    category: quizCategories[1417], // sliding-filament-theory
    difficulty: 'mittel',
    tags: ['aktin', 'myosin', 'gleitfilament', 'kontraktion']
  },
  {
    id: 'muscle_002',
    question: 'Was charakterisiert Typ I Muskelfasern?',
    options: ['Schnelle Kontraktion, glykolytisch', 'Langsame Kontraktion, oxidativ', 'Mittlere Geschwindigkeit, gemischt', 'Sehr schnell, anaerob'],
    correctAnswer: 1,
    explanation: 'Typ I Fasern (rote Fasern) sind langsam kontrahierend und oxidativ. Sie sind ausdauernd, ermüden langsam und eignen sich für langanhaltende Aktivitäten.',
    category: quizCategories[1421], // type-i-fibers
    difficulty: 'mittel',
    tags: ['muskelfasertypen', 'typ-i', 'ausdauer', 'oxidativ']
  },
  {
    id: 'muscle_003',
    question: 'Welches System stellt bei hochintensiven, kurzen Belastungen primär Energie bereit?',
    options: ['Oxidatives System', 'Glykolytisches System', 'ATP-Phosphokreatin-System', 'Lipolytisches System'],
    correctAnswer: 2,
    explanation: 'Das ATP-Phosphokreatin-System stellt bei hochintensiven, kurzen Belastungen (0-10 Sekunden) sofort verfügbare Energie bereit, ohne Sauerstoff zu benötigen.',
    category: quizCategories[1426], // atp-pcr-system
    difficulty: 'mittel',
    tags: ['energiebereitstellung', 'phosphokreatin', 'anaerob', 'kurzzeitbelastung']
  },
  {
    id: 'muscle_004',
    question: 'Was ist eine motorische Einheit?',
    options: ['Ein Muskel mit allen Sehnen', 'Ein Motoneuron mit allen innervierten Muskelfasern', 'Eine Muskelfaser mit ihrer Endplatte', 'Ein Nerv mit einem Muskel'],
    correctAnswer: 1,
    explanation: 'Eine motorische Einheit besteht aus einem α-Motoneuron und allen von ihm innervierten Muskelfasern. Die Größe variiert je nach erforderlicher Präzision.',
    category: quizCategories[1424], // motor-units
    difficulty: 'mittel',
    tags: ['motorische-einheit', 'motoneuron', 'innervation']
  },
  {
    id: 'muscle_005',
    question: 'Welche Funktion haben Muskelspindeln?',
    options: ['Kraftmessung', 'Dehnungsmessung', 'Temperaturmessung', 'Geschwindigkeitsmessung'],
    correctAnswer: 1,
    explanation: 'Muskelspindeln sind Dehnungsrezeptoren, die die Länge und Längenänderung des Muskels messen. Sie sind wichtig für Propriozeption und Reflexe.',
    category: quizCategories[1435], // muscle-spindles
    difficulty: 'mittel',
    tags: ['muskelspindeln', 'propriozeption', 'dehnungsrezeptoren']
  },
  {
    id: 'muscle_006',
    question: 'Was ist Muskelhypertrophie?',
    options: ['Zunahme der Muskelfaseranzahl', 'Zunahme der Muskelfaserdicke', 'Abnahme der Muskelmasse', 'Verkürzung der Muskeln'],
    correctAnswer: 1,
    explanation: 'Muskelhypertrophie ist die Zunahme der Muskelfaserdicke durch vermehrte Proteinsynthese, besonders bei Krafttraining. Die Faseranzahl bleibt gleich.',
    category: quizCategories[1430], // muscle-hypertrophy
    difficulty: 'leicht',
    tags: ['hypertrophie', 'krafttraining', 'proteinsynthese']
  },
  {
    id: 'muscle_007',
    question: 'Welcher Hebeltyp wird am häufigsten im menschlichen Körper verwendet?',
    options: ['Hebel 1. Grades', 'Hebel 2. Grades', 'Hebel 3. Grades', 'Alle gleich häufig'],
    correctAnswer: 2,
    explanation: 'Hebel 3. Grades sind am häufigsten: Gelenk als Drehpunkt, Muskelkraft zwischen Gelenk und Last. Vorteil: Geschwindigkeit, Nachteil: geringere Kraft.',
    category: quizCategories[1441], // lever-systems
    difficulty: 'mittel',
    tags: ['hebelsysteme', 'biomechanik', 'mechanik']
  },
  {
    id: 'muscle_008',
    question: 'Was charakterisiert die Core-Muskulatur?',
    options: ['Nur die Bauchmuskeln', 'Stabilisierung der Wirbelsäule und des Beckens', 'Nur die Rückenstrecker', 'Muskeln für Armbewegungen'],
    correctAnswer: 1,
    explanation: 'Die Core-Muskulatur umfasst alle tiefen Rumpfmuskeln, die Wirbelsäule und Becken stabilisieren: Zwerchfell, Beckenboden, tiefe Bauch- und Rückenmuskulatur.',
    category: quizCategories[1449], // core-muscles
    difficulty: 'mittel',
    tags: ['core', 'stabilisation', 'rumpf', 'wirbelsäule']
  },

  // Wirbelsäule & Rücken - Fragen
  {
    id: 'spine_001',
    question: 'Wie viele Wirbel hat die menschliche Wirbelsäule normalerweise?',
    options: ['32-34 Wirbel', '30-32 Wirbel', '34-36 Wirbel', '28-30 Wirbel'],
    correctAnswer: 0,
    explanation: 'Die Wirbelsäule besteht aus 32-34 Wirbeln: 7 Halswirbel, 12 Brustwirbel, 5 Lendenwirbel, 5 Kreuzbeinwirbel (verwachsen) und 3-5 Steißbeinwirbel (verwachsen).',
    category: quizCategories[1453], // vertebral-column-overview
    difficulty: 'leicht',
    tags: ['wirbelsäule', 'anatomie', 'anzahl', 'aufbau']
  },
  {
    id: 'spine_002',
    question: 'Welche natürlichen Krümmungen hat die Wirbelsäule?',
    options: ['Nur Lordosen', 'Nur Kyphosen', 'Wechselnd Lordosen und Kyphosen', 'Eine einzige S-Krümmung'],
    correctAnswer: 2,
    explanation: 'Die Wirbelsäule hat vier natürliche Krümmungen: Halslordose, Brustkyphose, Lendenlordose und Kreuzbeinkyphose. Dies ermöglicht optimale Lastverteilung.',
    category: quizCategories[1464], // spinal-curvatures
    difficulty: 'mittel',
    tags: ['krümmungen', 'lordose', 'kyphose', 'biomechanik']
  },
  {
    id: 'spine_003',
    question: 'Was ist die Hauptfunktion der Bandscheiben?',
    options: ['Muskelansatz', 'Stoßdämpfung und Beweglichkeit', 'Nervenleitung', 'Blutversorgung'],
    correctAnswer: 1,
    explanation: 'Bandscheiben dienen als Stoßdämpfer zwischen den Wirbeln und ermöglichen Beweglichkeit. Sie bestehen aus Faserring (Anulus fibrosus) und Gallertkern (Nucleus pulposus).',
    category: quizCategories[1463], // intervertebral-discs
    difficulty: 'leicht',
    tags: ['bandscheiben', 'stoßdämpfung', 'beweglichkeit']
  },
  {
    id: 'spine_004',
    question: 'Welcher Muskel gehört zur tiefen Rückenmuskulatur?',
    options: ['M. trapezius', 'M. latissimus dorsi', 'M. multifidus', 'M. rhomboideus'],
    correctAnswer: 2,
    explanation: 'Der M. multifidus gehört zur autochthonen (tiefen) Rückenmuskulatur und dient der segmentalen Stabilisierung der Wirbelsäule. Die anderen sind oberflächliche Muskeln.',
    category: quizCategories[1476], // multifidus
    difficulty: 'mittel',
    tags: ['multifidus', 'tiefe-rückenmuskulatur', 'stabilisation']
  },
  {
    id: 'spine_005',
    question: 'Was charakterisiert den Atlas (C1)?',
    options: ['Hat einen Dornfortsatz', 'Hat keinen Wirbelkörper', 'Ist der größte Halswirbel', 'Hat einen Dens'],
    correctAnswer: 1,
    explanation: 'Der Atlas (C1) hat keinen Wirbelkörper, sondern nur einen vorderen und hinteren Bogen. Er trägt den Kopf und artikuliert mit dem Hinterhauptbein.',
    category: quizCategories[1455], // atlas-axis
    difficulty: 'mittel',
    tags: ['atlas', 'c1', 'halswirbel', 'besonderheiten']
  },
  {
    id: 'spine_006',
    question: 'Welche Bewegung ist in der Lendenwirbelsäule am eingeschränktesten?',
    options: ['Flexion', 'Extension', 'Rotation', 'Lateralflexion'],
    correctAnswer: 2,
    explanation: 'Die Rotation ist in der Lendenwirbelsäule am stärksten eingeschränkt aufgrund der sagittalen Ausrichtung der Gelenkfortsätze. Dies schützt vor Bandscheibenverletzungen.',
    category: quizCategories[1469], // spinal-movements
    difficulty: 'mittel',
    tags: ['lendenwirbelsäule', 'rotation', 'bewegungseinschränkung']
  },
  
  // Frakturheilung & Knochenstoffwechsel - Fragen
  {
    id: 'bone_fx_001',
    question: 'Welche ist die erste Phase der Frakturheilung?',
    options: ['Kallusbildung', 'Hämatom- und Entzündungsphase', 'Remodeling', 'Knöcherne Überbrückung'],
    correctAnswer: 1,
    explanation: 'Die Hämatom- und Entzündungsphase ist die erste Phase der Frakturheilung. Es bildet sich ein Bluterguss und Entzündungszellen wandern ein.',
    category: quizCategories[1036], // hematoma-inflammation
    difficulty: 'leicht',
    tags: ['frakturheilung', 'hämatom', 'entzündung']
  },
  {
    id: 'bone_fx_002',
    question: 'Was ist eine Pseudarthrose?',
    options: ['Normale Knochenheilung', 'Falschgelenkbildung', 'Zu schnelle Heilung', 'Knocheninfektion'],
    correctAnswer: 1,
    explanation: 'Eine Pseudarthrose ist eine Falschgelenkbildung, bei der die Fraktur nicht knöchern heilt, sondern bindegewebig überbrückt wird.',
    category: quizCategories[1041], // fracture-complications
    difficulty: 'mittel',
    tags: ['pseudarthrose', 'komplikationen', 'heilungsstörung']
  },
  {
    id: 'bone_fx_003',
    question: 'Welches Vitamin ist essentiell für die Kalziumaufnahme im Darm?',
    options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
    correctAnswer: 3,
    explanation: 'Vitamin D (Calcitriol) ist essentiell für die Kalziumaufnahme im Darm und spielt eine zentrale Rolle im Knochenstoffwechsel.',
    category: quizCategories[1046], // vitamin-d
    difficulty: 'leicht',
    tags: ['vitamin-d', 'kalzium', 'knochenstoffwechsel']
  },
  {
    id: 'bone_fx_004',
    question: 'Welches Hormon erhöht den Kalziumspiegel im Blut?',
    options: ['Calcitonin', 'Parathormon', 'Insulin', 'Cortisol'],
    correctAnswer: 1,
    explanation: 'Parathormon (PTH) erhöht den Kalziumspiegel im Blut durch Freisetzung aus den Knochen, erhöhte Resorption in der Niere und Aktivierung von Vitamin D.',
    category: quizCategories[1047], // parathyroid-hormone
    difficulty: 'mittel',
    tags: ['parathormon', 'kalzium', 'hormonregulation']
  },
  {
    id: 'bone_fx_005',
    question: 'Was bedeutet RANK/RANKL im Knochenstoffwechsel?',
    options: ['Vitaminrezeptoren', 'Osteoklasten-Aktivierungssystem', 'Knochenwachstumsfaktoren', 'Kalziumtransporter'],
    correctAnswer: 1,
    explanation: 'RANK/RANKL ist ein Rezeptor-Ligand-System, das die Osteoklasten-Differenzierung und -Aktivierung reguliert. OPG wirkt als Decoy-Rezeptor und hemmt die Osteoklasten.',
    category: quizCategories[1051], // rank-rankl-opg
    difficulty: 'schwer',
    tags: ['rank-rankl', 'osteoklasten', 'knochenumbau']
  },
  
  // Gelenksystem - Fragen
  {
    id: 'joint_001',
    question: 'Welche Funktion hat die Synovialflüssigkeit?',
    options: ['Nur Schmierung', 'Schmierung und Nährstoffversorgung', 'Nur Stoßdämpfung', 'Bildung von Knorpel'],
    correctAnswer: 1,
    explanation: 'Die Synovialflüssigkeit (Synovia) hat zwei Hauptfunktionen: Schmierung der Gelenkflächen zur Reibungsminderung und Nährstoffversorgung des gefäßlosen Gelenkknorpels durch Diffusion.',
    category: quizCategories[1229], // synovial-fluid
    difficulty: 'mittel',
    tags: ['synovialflüssigkeit', 'gelenkschmiere', 'nährstoffe']
  },
  {
    id: 'joint_002',
    question: 'Was ist der Unterschied zwischen Bändern und Sehnen?',
    options: ['Kein Unterschied', 'Bänder verbinden Knochen-Knochen, Sehnen Muskel-Knochen', 'Bänder sind elastischer', 'Sehnen verbinden Knochen-Knochen'],
    correctAnswer: 1,
    explanation: 'Bänder (Ligamente) verbinden Knochen mit Knochen und stabilisieren Gelenke. Sehnen (Tendines) verbinden Muskeln mit Knochen und übertragen die Muskelkraft.',
    category: quizCategories[1236], // ligaments-tendons
    difficulty: 'leicht',
    tags: ['bänder', 'sehnen', 'bindegewebe']
  },
  {
    id: 'joint_003',
    question: 'Welche Bewegung bezeichnet man als Zirkumduktion?',
    options: ['Beugung', 'Streckung', 'Drehung', 'Kreisende Bewegung'],
    correctAnswer: 3,
    explanation: 'Die Zirkumduktion ist eine kreisende Bewegung, bei der das distale Ende einer Extremität einen Kreis beschreibt, während das proximale Ende fixiert bleibt.',
    category: quizCategories[1293], // circumduction
    difficulty: 'mittel',
    tags: ['zirkumduktion', 'bewegung', 'biomechanik']
  },
  {
    id: 'joint_004',
    question: 'Was ist die Neutral-Null-Methode?',
    options: ['Eine Behandlungsmethode', 'Standardisierte Bewegungsmessung', 'Eine Operationstechnik', 'Ein Schmerztest'],
    correctAnswer: 1,
    explanation: 'Die Neutral-Null-Methode ist ein standardisiertes Verfahren zur Messung und Dokumentation von Gelenkbewegungen. Die Neutralstellung (0°) ist die anatomische Grundstellung.',
    category: quizCategories[1223], // neutral-null-method
    difficulty: 'mittel',
    tags: ['neutral-null', 'bewegungsmessung', 'dokumentation']
  },
  {
    id: 'joint_005',
    question: 'Was ist der Hauptunterschied zwischen Arthrose und Arthritis?',
    options: ['Kein Unterschied', 'Arthrose ist degenerativ, Arthritis ist entzündlich', 'Arthrose betrifft nur alte Menschen', 'Arthritis ist heilbar'],
    correctAnswer: 1,
    explanation: 'Arthrose ist eine degenerative Gelenkerkrankung (Verschleiß), während Arthritis eine entzündliche Gelenkerkrankung ist, die verschiedene Ursachen haben kann.',
    category: quizCategories[1322], // joint-pathology
    difficulty: 'mittel',
    tags: ['arthrose', 'arthritis', 'gelenkerkrankungen']
  },
  {
    id: 'joint_006',
    question: 'Was sind Menisken?',
    options: ['Bänder im Knie', 'Halbmondförmige Knorpelscheiben', 'Schleimbeutel', 'Muskelsehnen'],
    correctAnswer: 1,
    explanation: 'Menisken sind halbmondförmige Faserknorpelscheiben im Kniegelenk, die als Stoßdämpfer fungieren und die Druckverteilung verbessern.',
    category: quizCategories[1243], // menisci-disci
    difficulty: 'leicht',
    tags: ['menisken', 'kniegelenk', 'knorpel']
  },

  // Medikamentenlehre
  {
    id: 'med_001',
    question: 'Was bedeutet "p.o." bei der Medikamentengabe?',
    options: ['per os (oral)', 'per injectionem', 'per rectum', 'per inhalation'],
    correctAnswer: 0,
    explanation: '"p.o." steht für "per os" und bedeutet orale Medikamentengabe über den Mund.',
    category: quizCategories[138], // medikamente
    difficulty: 'leicht',
    tags: ['medikamente', 'verabreichung', 'abkürzung']
  },
  {
    id: 'med_002',
    question: 'Welche Nebenwirkung kann bei ACE-Hemmern auftreten?',
    options: ['Gewichtszunahme', 'Trockener Husten', 'Haarausfall', 'Sehstörungen'],
    correctAnswer: 1,
    explanation: 'ACE-Hemmer können als typische Nebenwirkung einen trockenen Reizhusten verursachen.',
    category: quizCategories[138], // medikamente
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
    category: quizCategories[139], // hygiene
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
    category: quizCategories[140], // notfall
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
    category: quizCategories[145], // gerontologie
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
    category: quizCategories[151], // kommunikation
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
    category: quizCategories[129], // surfactant
    difficulty: 'schwer',
    tags: ['surfactant', 'alveolen', 'oberflächenspannung', 'phospholipide'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_resp_003',
    front: 'Atemmuskulatur - Inspiration & Expiration',
    back: '**Inspiration (Einatmung):**\n• **Hauptmuskeln:** Zwerchfell, äußere Intercostalmuskeln\n• **Hilfsmuskeln:** Mm. scaleni, M. sternocleidomastoideus\n\n**Expiration (Ausatmung):**\n• **Ruhig:** Passiv durch elastische Rückstellkraft\n• **Forciert:** Innere Intercostalmuskeln, Bauchmuskeln\n\n**Zwerchfell:**\n• Wichtigster Atemmuskel\n• Kontraktion → Thoraxerweiterung\n• Innervation: N. phrenicus (C3-C5)',
    category: quizCategories[131], // respiratory-muscles
    difficulty: 'mittel',
    tags: ['atemmuskulatur', 'zwerchfell', 'inspiration', 'expiration'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_resp_004',
    front: 'Ventilations-Perfusions-Verhältnis (V/Q)',
    back: '**Definition:**\nVerhältnis von Ventilation zu Perfusion\n\n**Normalwerte:**\n• Gesamt-V/Q: ≈ 0,8\n• Lungenspitze: V/Q > 1 (mehr Ventilation)\n• Lungenbasis: V/Q < 1 (mehr Perfusion)\n\n**Störungen:**\n• **V/Q = 0:** Shunt (keine Ventilation)\n• **V/Q = ∞:** Totraum (keine Perfusion)\n\n**Regulation:**\n• Hypoxische pulmonale Vasokonstriktion\n• Bronchiale CO₂-Regulation',
    category: quizCategories[134], // vq-ratio
    difficulty: 'schwer',
    tags: ['v/q-verhältnis', 'ventilation', 'perfusion', 'shunt', 'totraum'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_resp_005',
    front: 'Totraum (anatomisch vs. funktionell)',
    back: '**Anatomischer Totraum:**\n• Leitende Atemwege ohne Gasaustausch\n• Trachea, Bronchien, Bronchiolen\n• ≈ 150 ml beim Erwachsenen\n\n**Funktioneller Totraum:**\n• Anatomischer + Alveolar-Totraum\n• Bereiche mit V/Q-Mismatch\n• Erhöht bei Lungenerkrankungen\n\n**Klinische Bedeutung:**\n• ↑ Totraum → ineffiziente Ventilation\n• Kompensation durch ↑ Atemfrequenz',
    category: quizCategories[135], // dead-space
    difficulty: 'mittel',
    tags: ['totraum', 'anatomisch', 'funktionell', 'ventilation'],
    reviewCount: 0,
    easeFactor: 2.5
  },

  // Neue Lungenfunktion-Lernkarten
  {
    id: 'fc_lung_001',
    front: 'Atemvolumina & Lungenkapazitäten',
    back: '**Atemvolumina:**\n• **AZV** (Atemzugvolumen): 500 ml\n• **IRV** (Inspirat. Reservevol.): 3000 ml\n• **ERV** (Exspirat. Reservevol.): 1100 ml\n• **RV** (Residualvolumen): 1200 ml\n\n**Lungenkapazitäten:**\n• **IC** (Inspirat. Kapazität): AZV + IRV = 3500 ml\n• **FRC** (Funktionelle Residualkapazität): ERV + RV = 2300 ml\n• **VC** (Vitalkapazität): IRV + AZV + ERV = 4600 ml\n• **TLC** (Totale Lungenkapazität): VC + RV = 5800 ml',
    category: quizCategories[132], // lung-volumes
    difficulty: 'schwer',
    tags: ['lungenfunktion', 'spirometrie', 'atemvolumen', 'kapazitäten'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_lung_002',
    front: 'Tiffeneau-Index (FEV1/FVC) & Peak Flow',
    back: '**Tiffeneau-Index (FEV1/FVC):**\n• Normal: >70% (>0,7)\n• Obstruktion: <70%\n• Restriktion: Normal oder ↑\n\n**FEV1:** Forciertes exspir. Volumen in 1s\n**FVC:** Forcierte Vitalkapazität\n\n**Peak Flow:**\n• Maximaler exspiratorischer Fluss\n• Normal: 400-600 L/min\n• Einfache Verlaufskontrolle\n• Besonders bei Asthma wichtig\n\n**Klinische Bedeutung:**\n• Differenzierung Obstruktion/Restriktion\n• Verlaufskontrolle bei Lungenerkrankungen',
    category: quizCategories[136], // fev1-fvc
    difficulty: 'schwer',
    tags: ['tiffeneau', 'peak-flow', 'obstruktion', 'spirometrie'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_lung_003',
    front: 'Compliance & Resistance',
    back: '**Compliance (Dehnbarkeit):**\n• Normal: 200 ml/cmH₂O\n• ↓ bei: Fibrose, Ödem, Pneumothorax\n• ↑ bei: Emphysem\n\n**Resistance (Widerstand):**\n• Normal: 1-3 cmH₂O/L/s\n• ↑ bei: Asthma, COPD, Bronchospasmus\n• Hauptsächlich in mittleren Atemwegen\n\n**Arbeitsdiagramm:**\n• Fläche = Atemarbeit\n• Elastische + resistive Arbeit\n• Bei Erkrankungen ↑ Atemarbeit',
    category: quizCategories[111], // compliance-resistance
    difficulty: 'schwer',
    tags: ['compliance', 'resistance', 'atemarbeit', 'lungenmechanik'],
    reviewCount: 0,
    easeFactor: 2.5
  },

  // Neue Gasaustausch-Lernkarten
  {
    id: 'fc_gas_001',
    front: 'Sauerstoff-Bindungskurve & Verschiebungen',
    back: '**Normale O₂-Bindungskurve:**\n• Sigmoide Form\n• P50 = 26 mmHg (50% Sättigung)\n• Plateau ab 60 mmHg\n\n**Rechtsverschiebung** (↓ O₂-Affinität):\n• ↑ CO₂, ↑ H⁺ (↓ pH), ↑ Temperatur\n• ↑ 2,3-DPG\n• → Erleichterte O₂-Abgabe im Gewebe\n\n**Linksverschiebung** (↑ O₂-Affinität):\n• ↓ CO₂, ↓ H⁺ (↑ pH), ↓ Temperatur\n• → Erschwerte O₂-Abgabe\n• Fetales Hb, CO-Hb\n\n**Klinische Bedeutung:**\n• Anpassung an Gewebebedarf',
    category: quizCategories[141], // o2-saturation-curve
    difficulty: 'schwer',
    tags: ['sauerstoffbindung', 'bohr-effekt', 'hämoglobin', 'o2-transport'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_gas_002',
    front: 'CO₂-Transport & Haldane-Effekt',
    back: '**CO₂-Transport im Blut:**\n• 70% als HCO₃⁻ (Bikarbonat)\n• 23% als Carbamino-Hb\n• 7% physikalisch gelöst\n\n**Chlorid-Shift:**\n• CO₂ + H₂O → HCO₃⁻ + H⁺\n• HCO₃⁻ raus, Cl⁻ rein\n• Puffert pH-Änderungen\n\n**Haldane-Effekt:**\n• Desoxygeniertes Hb bindet mehr CO₂\n• In Lunge: O₂-Bindung → CO₂-Abgabe\n• Im Gewebe: O₂-Abgabe → CO₂-Aufnahme\n\n**Bohr-Effekt:**\n• ↑ CO₂/H⁺ → ↓ O₂-Affinität',
    category: quizCategories[143], // co2-transport
    difficulty: 'schwer',
    tags: ['co2-transport', 'haldane-effekt', 'bikarbonat', 'chlorid-shift'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_gas_003',
    front: 'Pathologische Hämoglobinformen',
    back: '**Methämoglobin (MetHb):**\n• Fe³⁺ statt Fe²⁺\n• Kann kein O₂ binden\n• Normal: <1%\n• Ursachen: Nitrite, Sulfonamide\n• Therapie: Methylenblau\n\n**Carboxyhämoglobin (COHb):**\n• CO-Vergiftung\n• 200-300x höhere Affinität als O₂\n• Normal: <5% (Raucher <10%)\n• Therapie: 100% O₂, hyperbarer O₂\n\n**Sulfhämoglobin:**\n• Irreversibel\n• Medikamente (Phenacetin)\n\n**Klinische Zeichen:**\n• Zyanose trotz normaler pO₂\n• Pulsoximetrie unzuverlässig',
    category: quizCategories[146], // methemoglobin-carboxyhemoglobin
    difficulty: 'schwer',
    tags: ['methämoglobin', 'carboxyhämoglobin', 'co-vergiftung', 'zyanose'],
    reviewCount: 0,
    easeFactor: 2.5
  },

  // Neue Atemregulation-Lernkarten
  {
    id: 'fc_control_001',
    front: 'Atemzentrum & zentrale Regulation',
    back: '**Atemzentrum (Medulla oblongata):**\n• **Inspiratorisches Zentrum:** Rhythmusgenerator\n• **Exspiratorisches Zentrum:** Bei forcierter Ausatmung\n• **Pneumotaxisches Zentrum (Pons):** Feinregulation\n\n**Zentrale Chemorezeptoren:**\n• In Medulla oblongata\n• Reagieren auf pH im Liquor\n• CO₂ passiert Blut-Hirn-Schranke → pH ↓\n• Hauptregulator der Atmung (80%)\n\n**Automatismus:**\n• Grundrhythmus unabhängig von Bewusstsein\n• Modulation durch übergeordnete Zentren\n• Bei Hirnstammschäden → Atemstillstand',
    category: quizCategories[148], // respiratory-centers
    difficulty: 'schwer',
    tags: ['atemzentrum', 'medulla', 'chemorezeptoren', 'automatismus'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_control_002',
    front: 'Periphere Chemorezeptoren & O₂-Regulation',
    back: '**Periphere Chemorezeptoren:**\n• Glomus caroticum & aorticum\n• Reagieren auf:\n  - ↓ pO₂ (<60 mmHg)\n  - ↑ pCO₂\n  - ↓ pH\n\n**Hypoxischer Atemantrieb:**\n• Bei pO₂ <60 mmHg\n• Wichtig bei COPD-Patienten\n• Vorsicht mit O₂-Gabe!\n\n**CO₂-Atemantrieb:**\n• Primärer Stimulus (80%)\n• Reagiert auf pCO₂ ↑\n• Bei COPD oft abgestumpft\n\n**Klinische Bedeutung:**\n• COPD: Hypoxischer Atemantrieb dominant\n• Gesunde: CO₂-Atemantrieb dominant',
    category: quizCategories[599], // chemoreceptors
    difficulty: 'schwer',
    tags: ['chemorezeptoren', 'hypoxie', 'atemantrieb', 'copd'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_control_003',
    front: 'Atemreflexe & Störungen',
    back: '**Hering-Breuer-Reflex:**\n• Dehnungsrezeptoren in Atemwegen\n• Inspiration ↑ → Inspirationshemmung\n• Verhindert Lungenüberblähung\n• Bei Erwachsenen schwach ausgeprägt\n\n**Atemrhythmus-Störungen:**\n• **Cheyne-Stokes:** Periodische Atmung\n• **Biot-Atmung:** Unregelmäßige Gruppen\n• **Kussmaul-Atmung:** Tiefe, regelmäßige Atmung\n• **Schnappatmung:** Agonale Atmung\n\n**J-Rezeptoren:**\n• In Alveolarwand\n• Reagieren auf Ödem, Embolie\n• → Tachypnoe, Dyspnoe',
    category: quizCategories[155], // hering-breuer-reflex
    difficulty: 'mittel',
    tags: ['atemreflexe', 'hering-breuer', 'atemstörungen', 'cheyne-stokes'],
    reviewCount: 0,
    easeFactor: 2.5
  },

  {
    id: 'fc_003',
    front: 'Die 5-R-Regel bei der Medikamentengabe',
    back: '1. Richtiger Patient\n2. Richtiges Medikament\n3. Richtige Dosis\n4. Richtige Zeit\n5. Richtige Applikationsart\n\n+ Zusätzlich:\n• Richtige Dokumentation\n• Richtige Aufklärung',
    category: quizCategories[138], // medikamente
    difficulty: 'leicht',
    tags: ['medikamentengabe', 'sicherheit'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_004',
    front: 'Händehygiene - Die 5 Momente der WHO',
    back: '1. VOR Patientenkontakt\n2. VOR aseptischen Tätigkeiten\n3. NACH Kontakt mit potenziell infektiösen Materialien\n4. NACH Patientenkontakt\n5. NACH Kontakt mit der Patientenumgebung',
    category: quizCategories[139], // hygiene
    difficulty: 'mittel',
    tags: ['händehygiene', 'who', 'infektionsschutz'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_005',
    front: 'Glasgow Coma Scale (GCS) - Bewertungskriterien',
    back: 'Augen öffnen (E):\n• Spontan: 4\n• Auf Ansprache: 3\n• Auf Schmerzreiz: 2\n• Kein: 1\n\nVerbale Reaktion (V):\n• Orientiert: 5\n• Verwirrt: 4\n• Unpassende Worte: 3\n• Unverständliche Laute: 2\n• Keine: 1\n\nMotorische Reaktion (M):\n• Befolgt Aufforderungen: 6\n• Lokalisation: 5\n• Beugeabwehr: 4\n• Beugesynergismen: 3\n• Strecksynergismen: 2\n• Keine: 1\n\nGesamt: 3-15 Punkte',
    category: quizCategories[140], // notfall
    difficulty: 'schwer',
    tags: ['gcs', 'bewusstsein', 'neurologie'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  
  // Neue Nervensystem-Lernkarten
  {
    id: 'fc_cns_001',
    front: 'Großhirnlappen & ihre Hauptfunktionen',
    back: '**Frontallappen:**\n• Primärer motorischer Kortex\n• Broca-Areal (Sprachproduktion)\n• Exekutive Funktionen, Persönlichkeit\n\n**Parietallappen:**\n• Primärer sensorischer Kortex\n• Raumwahrnehmung, Körperschema\n• Integration sensorischer Informationen\n\n**Temporallappen:**\n• Primärer auditiver Kortex\n• Wernicke-Areal (Sprachverständnis)\n• Hippocampus (Gedächtnis)\n\n**Okzipitallappen:**\n• Primärer visueller Kortex\n• Visuelle Verarbeitung',
    category: quizCategories[94], // cerebrum
    difficulty: 'schwer',
    tags: ['großhirn', 'kortex', 'lappen', 'funktionen'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_cns_002',
    front: 'Hirnstamm - Aufbau und Funktionen',
    back: '**Medulla oblongata:**\n• Atemzentrum\n• Kreislaufzentrum\n• Schluck- und Brechzentrum\n• Pyramidenkreuzung\n\n**Pons:**\n• Schlaf-Wach-Regulation\n• Bruiẗcke zwischen Groß- und Kleinhirn\n• Trigeminus-, Facialis-, Vestibulocochleariskerne\n\n**Mesenzephalon:**\n• Augenbewegungssteuerung\n• Pupillenreflexzentrum\n• Substantia nigra (Dopamin)\n• Formatio reticularis (ARAS)',
    category: quizCategories[757], // brainstem
    difficulty: 'schwer',
    tags: ['hirnstamm', 'medulla', 'pons', 'mesenzephalon'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_cns_003',
    front: 'Dienzephalon - Strukturen und Funktionen',
    back: '**Thalamus:**\n• "Tor zum Bewusstsein"\n• Relaisstation für sensorische Bahnen\n• Verschaltung zum Kortex\n\n**Hypothalamus:**\n• Hormonales Kontrollzentrum\n• Temperaturregulation\n• Hunger/Durst, Tag-Nacht-Rhythmus\n• Verbindung zur Hypophyse\n\n**Hypophyse:**\n• Adenohypophyse: Trophine Hormone\n• Neurohypophyse: ADH, Oxytocin\n\n**Epiphyse:**\n• Melatoninproduktion\n• Circadianrhythmus',
    category: quizCategories[793], // diencephalon
    difficulty: 'schwer',
    tags: ['dienzephalon', 'thalamus', 'hypothalamus', 'hormone'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_cns_004',
    front: 'Liquorsystem - Produktion, Zirkulation, Resorption',
    back: '**Liquorproduktion:**\n• Plexus choroideus in den Ventrikeln\n• Ca. 500 ml/Tag\n• Gesamtvolumen: 150 ml\n\n**Zirkulation:**\n• Seitenventrikel → III. Ventrikel\n• Aquaeductus sylvii → IV. Ventrikel\n• Subarachnoidalraum\n\n**Resorption:**\n• Pacchioni-Granulationen\n• In den Sinus sagittalis superior\n\n**Funktion:**\n• Mechanischer Schutz\n• Nährstofftransport\n• Druckregulation',
    category: quizCategories[886], // csf-system
    difficulty: 'schwer',
    tags: ['liquor', 'hirnwasser', 'ventrikelsystem', 'schutz'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_cns_005',
    front: 'Rückenmark - Aufbau und Leitungsbahnen',
    back: '**Histologischer Aufbau:**\n• Graue Substanz: Nervenzellkörper (innen)\n• Weiße Substanz: Myelinisierte Axone (außen)\n\n**Aufsteigende Bahnen (sensorisch):**\n• Hinterstrangbahn: Tiefensensibilität\n• Vorderseitenstrangbahn: Schmerz, Temperatur\n\n**Absteigende Bahnen (motorisch):**\n• Pyramidenbahn: Willkürliche Motorik\n• Extrapyramidalbahn: Unwillkürliche Motorik\n\n**Segmente:**\n• 8 zervikal, 12 thorakal\n• 5 lumbal, 5 sakral, 1 kokzygeal',
    category: quizCategories[836], // spinal-cord
    difficulty: 'schwer',
    tags: ['rückenmark', 'leitungsbahnen', 'segmente', 'reflexe'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_cns_006',
    front: 'Blut-Hirn-Schranke - Aufbau und Funktion',
    back: '**Anatomische Grundlage:**\n• Tight Junctions zwischen Endothelzellen\n• Astrozyten-Endfüße\n• Kontinuierliche Basalmembran\n\n**Funktionen:**\n• Schutz vor Toxinen\n• Kontrolle des Stoffaustauschs\n• Aufrechterhaltung des Hirnmilieus\n\n**Durchlässigkeit:**\n• Gut: Wasser, O₂, CO₂, Glukose\n• Schlecht: Proteine, viele Medikamente\n• Aktiver Transport: Glukose, Aminosäuren\n\n**Klinische Bedeutung:**\n• Medikamentenentwicklung\n• Bei Entzündungen durchlässiger',
    category: quizCategories[914], // blood-brain-barrier
    difficulty: 'schwer',
    tags: ['blut-hirn-schranke', 'endothel', 'schutz', 'transport'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  
  // Neue Bewegungsapparat-Lernkarten
  {
    id: 'fc_musculo_001',
    front: 'Knochenaufbau - Kompakta vs. Spongiosa',
    back: '**Kompakta (Corticalis):**\n• Dichte, kompakte Knochensubstanz\n• Außenschicht der Röhrenknochen\n• Hohe mechanische Festigkeit\n• Havers-Systeme (Osteone)\n\n**Spongiosa (Trabeculae):**\n• Schwammartige, poröse Struktur\n• Innenschicht, Epiphysen\n• Gerüstartige Knochenbälkchen\n• Enthält rotes Knochenmark\n\n**Funktionale Bedeutung:**\n• Kompakta: Stabilität, Biegefestigkeit\n• Spongiosa: Gewichtsreduktion, Hämatopoese',
    category: quizCategories[944], // compact-spongy
    difficulty: 'mittel',
    tags: ['kompakta', 'spongiosa', 'knochenaufbau', 'histologie'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_musculo_002',
    front: 'Knochenzellen - Funktionen und Bedeutung',
    back: '**Osteoblasten:**\n• Knochenaufbauende Zellen\n• Produzieren Osteoid (Knochenmatrix)\n• Werden zu Osteozyten\n\n**Osteozyten:**\n• Reife Knochenzellen\n• In Lakunen eingeschlossen\n• Mechanosensoren für Belastung\n• Regulation des Knochenumbaus\n\n**Osteoklasten:**\n• Knochenabbauende Riesenzellen\n• Resorption alter Knochensubstanz\n• Schaffen Platz für Neubau\n\n**Klinische Bedeutung:**\n• Balance bestimmt Knochenstabilität\n• Störungen → Osteoporose/Osteosklerose',
    category: quizCategories[947], // bone-cells
    difficulty: 'schwer',
    tags: ['osteoblasten', 'osteozyten', 'osteoklasten', 'knochenumbau'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_musculo_003',
    front: 'Gelenktypen nach Beweglichkeit und Achsen',
    back: '**Nach Beweglichkeit:**\n• **Synarthrosen:** Unbeweglich (Schädelnähte)\n• **Amphiarthrosen:** Wenig beweglich (Symphysen)\n• **Diarthrosen:** Frei beweglich (echte Gelenke)\n\n**Nach Bewegungsachsen:**\n• **Einachsig:** Scharniergelenk (Ellenbogen)\n• **Zweiachsig:** Eigelenk (Handgelenk), Sattelgelenk (Daumen)\n• **Dreiachsig:** Kugelgelenk (Schulter, Hüfte)\n• **Rotationsgelenk:** Drehgelenk (Atlas-Axis)\n\n**Bewegungsarten:**\n• Flexion/Extension, Abduktion/Adduktion\n• Innen-/Außenrotation, Zirkumduktion',
    category: quizCategories[967], // joint-types
    difficulty: 'schwer',
    tags: ['gelenktypen', 'bewegungsachsen', 'diarthrosen', 'biomechanik'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_musculo_004',
    front: 'Muskeltypen - Eigenschaften und Funktionen',
    back: '**Skelettmuskel:**\n• Quergestreift, multinukleär\n• Willkürlich steuerbar\n• Kraftvolle, schnelle Kontraktionen\n• Ermüdet schnell\n\n**Herzmuskel:**\n• Quergestreift, aber unwillkürlich\n• Glanzstreifen (Intercalated discs)\n• Autorhythmisch, ermüdungsresistent\n• Spezielle Leitungssystem\n\n**Glatte Muskulatur:**\n• Nicht quergestreift, einkernig\n• Unwillkürlich (autonom)\n• Langsame, anhaltende Kontraktionen\n• In Organen, Gefäßen, Verdauungstrakt\n\n**Neuromuskuläre Übertragung:**\n• Motorische Endplatte (Skelettmuskel)\n• Autonome Innervation (glatt)',
    category: quizCategories[979], // skeletal-muscle
    difficulty: 'schwer',
    tags: ['skelettmuskel', 'herzmuskel', 'glatte-muskulatur', 'kontraktion'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_musculo_005',
    front: 'Wolff\'sches Gesetz und Knochenanpassung',
    back: '**Definition:**\n"Die Knochen passen sich in ihrer Struktur den mechanischen Anforderungen an"\n\n**Mechanismus:**\n• Belastung aktiviert Osteozyten\n• Mechanosignale triggern Remodeling\n• Erhöhte Belastung → Stärkung\n• Fehlende Belastung → Abbau\n\n**Klinische Beispiele:**\n• **Immobilisation:** Knochenabbau\n• **Sport:** Knochenverdichtung\n• **Schwerelosigkeit:** Osteoporose\n• **Frakturbeilung:** Anpassung an neue Belastung\n\n**Therapeutische Bedeutung:**\n• Kraft-/Widerstandstraining\n• Frühe Mobilisation\n• Prävention von Osteoporose',
    category: quizCategories[964], // wolffs-law
    difficulty: 'mittel',
    tags: ['wolff-gesetz', 'knochenanpassung', 'belastung', 'remodeling'],
    reviewCount: 0,
    easeFactor: 2.5
  },

  // Neue Muskelsystem-Lernkarten
  {
    id: 'fc_muscle_001',
    front: 'Gleitfilament-Theorie - Mechanismus der Muskelkontraktion',
    back: '**Grundprinzip:**\n• Aktin (dünne Filamente) und Myosin (dicke Filamente)\n• Querverbindungen (Cross-Bridges) zwischen Filamenten\n• Filamente gleiten aneinander vorbei (verkürzen sich nicht)\n\n**Kontraktionszyklus:**\n1. **Bindung:** Myosin bindet an Aktin\n2. **Kraftschlag:** Myosin kippt um → Filamente gleiten\n3. **ATP-Bindung:** Myosin löst sich von Aktin\n4. **Hydrolyse:** ATP → ADP + Pi (Energie für nächsten Zyklus)\n\n**Regulation:**\n• Ca²⁺ bindet an Troponin\n• Tropomyosin gibt Bindungsstellen frei\n• Ohne Ca²⁺: Ruhezustand',
    category: quizCategories[1417], // sliding-filament-theory
    difficulty: 'schwer',
    tags: ['gleitfilament', 'aktin', 'myosin', 'kontraktion'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_muscle_002',
    front: 'Muskelfasertypen - Typ I vs. Typ II',
    back: '**Typ I (Slow-Twitch, rote Fasern):**\n• Langsame Kontraktion, ermüden langsam\n• Oxidativer Stoffwechsel (O₂-abhängig)\n• Viele Mitochondrien, Myoglobin\n• Ausdauerleistung (Marathonläufer)\n\n**Typ IIa (Fast-Twitch oxidativ-glykolytisch):**\n• Schnelle Kontraktion, mittlere Ermüdung\n• Gemischter Stoffwechsel\n• Mittlere Kraft und Ausdauer\n\n**Typ IIx (Fast-Twitch glykolytisch, weiße Fasern):**\n• Sehr schnelle Kontraktion, schnelle Ermüdung\n• Anaerober Stoffwechsel\n• Hohe Kraft, kurze Dauer (Sprinter)\n\n**Verteilung:** Genetisch + Training bestimmt',
    category: quizCategories[1420], // muscle-fiber-types
    difficulty: 'mittel',
    tags: ['muskelfasertypen', 'typ-i', 'typ-ii', 'stoffwechsel'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_muscle_003',
    front: 'Energiebereitstellung im Muskel - Drei Systeme',
    back: '**1. ATP-Phosphokreatin-System (0-10s):**\n• Sofort verfügbar, anaerob\n• Phosphokreatin + ADP → ATP + Kreatin\n• Hochintensive, kurze Belastungen\n• Kapazität: ~10 Sekunden\n\n**2. Glykolytisches System (10s-2min):**\n• Glukose/Glykogen → Laktat\n• Anaerob, schnell verfügbar\n• Mittlere Intensität und Dauer\n• Nebenprodukt: Laktat (Übersäuerung)\n\n**3. Oxidatives System (>2min):**\n• Glukose/Fette + O₂ → CO₂ + H₂O\n• Aerob, langsam, aber nachhaltig\n• Ausdauerbelastungen\n• Höchste ATP-Ausbeute',
    category: quizCategories[1425], // muscle-metabolism
    difficulty: 'mittel',
    tags: ['energiebereitstellung', 'atp', 'phosphokreatin', 'glykolyse'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_muscle_004',
    front: 'Motorische Einheiten und Rekrutierung',
    back: '**Definition:**\n• 1 α-Motoneuron + alle innervierte Muskelfasern\n• Funktionelle Grundeinheit der Bewegung\n\n**Größen:**\n• **Klein:** 10-100 Fasern (Augenmuskeln, feine Motorik)\n• **Groß:** 1000-2000 Fasern (Beinmuskeln, grobe Kraft)\n\n**Rekrutierungsprinzip (Hennéman):**\n1. **Typ I** zuerst (niedrige Schwelle)\n2. **Typ IIa** bei höherer Anforderung\n3. **Typ IIx** bei maximaler Kraft\n\n**Kraftregulation:**\n• Rekrutierung: Anzahl aktiver Einheiten\n• Frequenzierung: Impulsfrequenz\n• Synchronisation: zeitliche Koordination',
    category: quizCategories[1424], // motor-units
    difficulty: 'mittel',
    tags: ['motorische-einheit', 'rekrutierung', 'hennéman', 'kraftregulation'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_muscle_005',
    front: 'Hebelsysteme im menschlichen Körper',
    back: '**Hebel 1. Grades (Drehpunkt zwischen Kraft und Last):**\n• Beispiel: Kopfneigung (Atlas-Okziput)\n• Gleichgewichtshebel, mechanischer Vorteil möglich\n\n**Hebel 2. Grades (Last zwischen Drehpunkt und Kraft):**\n• Beispiel: Zehenstand (Sprunggelenk-Drehpunkt)\n• Krafthebel, mechanischer Vorteil\n• Selten im Körper\n\n**Hebel 3. Grades (Kraft zwischen Drehpunkt und Last):**\n• Häufigster Typ im Körper\n• Beispiel: Bizeps-Kontraktion (Ellenbogen-Drehpunkt)\n• Geschwindigkeitshebel, mechanischer Nachteil\n• Vorteil: Schnelle, weite Bewegungen\n\n**Biologischer Sinn:** Geschwindigkeit > Kraft für Überleben',
    category: quizCategories[1441], // lever-systems
    difficulty: 'mittel',
    tags: ['hebelsysteme', 'biomechanik', 'mechanik', 'kraft'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_muscle_006',
    front: 'Core-Muskulatur - Aufbau und Funktion',
    back: '**Definition:**\n• Tiefe Rumpfmuskulatur zur Stabilisation\n• „Muskeläre Korsett“ der Wirbelsäule\n\n**Komponenten:**\n• **Oben:** Zwerchfell (Diaphragma)\n• **Unten:** Beckenboden (M. levator ani)\n• **Hinten:** M. multifidus, M. erector spinae\n• **Vorne:** M. transversus abdominis\n• **Seitlich:** M. quadratus lumborum\n\n**Funktionen:**\n• Stabilisation der Lendenwirbelsäule\n• Intraabdomineller Druckaufbau\n• Koordination mit Atmung\n• Basis für alle Extremitätenbewegungen\n\n**Klinische Bedeutung:**\n• Rückenschmerzprävention\n• Leistungssteigerung im Sport',
    category: quizCategories[1449], // core-muscles
    difficulty: 'mittel',
    tags: ['core', 'stabilisation', 'rumpf', 'wirbelsäule'],
    reviewCount: 0,
    easeFactor: 2.5
  },

  // Wirbelsäule & Rücken - Lernkarten
  {
    id: 'fc_spine_001',
    front: 'Wirbelsäule - Aufbau und Krümmungen',
    back: '**Gliederung (32-34 Wirbel):**\n• **Halswirbelsäule (HWS):** C1-C7\n• **Brustwirbelsäule (BWS):** T1-T12\n• **Lendenwirbelsäule (LWS):** L1-L5\n• **Kreuzbein:** 5 verwachsene Wirbel\n• **Steißbein:** 3-5 verwachsene Wirbel\n\n**Natürliche Krümmungen:**\n• **Halslordose:** Vorwärtskrümmung (konvex nach vorn)\n• **Brustkyphose:** Rückwärtskrümmung (konvex nach hinten)\n• **Lendenlordose:** Vorwärtskrümmung\n• **Kreuzbeinkyphose:** Rückwärtskrümmung\n\n**Funktion:** Optimale Lastverteilung, Federung',
    category: quizCategories[1453], // vertebral-column-overview
    difficulty: 'mittel',
    tags: ['wirbelsäule', 'krümmungen', 'anatomie', 'gliederung'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_spine_002',
    front: 'Bandscheiben - Aufbau und Funktion',
    back: '**Anatomischer Aufbau:**\n• **Anulus fibrosus:** Äußerer Faserring\n  - Kollagenfasern in Schichten\n  - Hohe Zugfestigkeit\n• **Nucleus pulposus:** Innerer Gallertkern\n  - 80% Wasser bei Jugendlichen\n  - Proteoglykane, Kollagen Typ II\n\n**Funktionen:**\n• Stoßdämpfung zwischen Wirbeln\n• Lastverteilung\n• Ermöglichung von Wirbelsäulenbewegungen\n• Druckresistenz (bis 1000 kg)\n\n**Alterung:**\n• Wassergehalt nimmt ab (70% → 30%)\n• Höhenverlust, Rissbildung\n• Bandscheibenvorfall-Risiko',
    category: quizCategories[1463], // intervertebral-discs
    difficulty: 'mittel',
    tags: ['bandscheiben', 'anulus', 'nucleus', 'stoßdämpfung'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_spine_003',
    front: 'Tiefe Rückenmuskulatur - Stabilisation',
    back: '**Autochthone Rückenmuskulatur:**\n• Entwickelt sich aus Myotomen\n• Innervation durch R. dorsales der Spinalnerven\n\n**Wichtigste Muskeln:**\n• **M. multifidus:**\n  - Segmentale Stabilisation\n  - Span 2-4 Wirbelsegmente\n  - Rotations- und Extensionshemmung\n\n• **M. erector spinae:**\n  - M. iliocostalis, M. longissimus, M. spinalis\n  - Wirbelsäulenaufrichtung\n  - Beidseitig: Extension, einseitig: Lateralflexion\n\n**Funktionen:**\n• Segmentale Stabilisation\n• Propriozeptive Rückmeldung\n• Kontrolle der neutralen Zone\n• Schutz vor Überlastung',
    category: quizCategories[1474], // deep-back-muscles
    difficulty: 'schwer',
    tags: ['tiefe-rückenmuskulatur', 'multifidus', 'erector-spinae', 'stabilisation'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_spine_004',
    front: 'Atlas & Axis - Besondere Halswirbel',
    back: '**Atlas (C1):**\n• Kein Wirbelkörper\n• Vorderer und hinterer Bogen\n• Masse laterales mit Gelenkflächen\n• Trägt den Kopf (Atlanto-okzipital-Gelenk)\n• Nickbewegungen (Ja-Bewegung)\n\n**Axis (C2):**\n• **Dens axis:** Zahnfortsatz\n• Zapfen für Atlanto-axial-Gelenk\n• Ermöglicht Kopfrotation (Nein-Bewegung)\n• Querband des Atlas hält Dens\n\n**Klinische Bedeutung:**\n• Häufigste Verletzungsregion der HWS\n• „Whiplash“-Verletzungen\n• Dens-Frakturen bei älteren Patienten\n• Instabilitäten bei rheumatoider Arthritis',
    category: quizCategories[1455], // atlas-axis
    difficulty: 'mittel',
    tags: ['atlas', 'axis', 'dens', 'halswirbel'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  
  // Neue Frakturheilung & Knochenstoffwechsel-Lernkarten
  {
    id: 'fc_bone_fx_001',
    front: 'Phasen der Frakturheilung',
    back: '**1. Hämatom- & Entzündungsphase (0-5 Tage):**\n• Blutung → Hämatom\n• Entzündungszellen (Granulozyten, Makrophagen)\n• Abbau nekrotischen Gewebes\n• Wachstumsfaktoren-Freisetzung\n\n**2. Reparationsphase (5 Tage - 4 Wochen):**\n• **Weicher Kallus:** Bindegewebe, Knorpel\n• **Harter Kallus:** Geflechtknochen\n• Überbrückung der Fraktur\n\n**3. Umbauphase (Wochen - Jahre):**\n• Geflechtknochen → Lamellenknochen\n• Wiederherstellung der Knochenstruktur\n• Anpassung an Belastung (Wolff)\n\n**Störungsfaktoren:**\n• Bewegung, Infektion, Durchblutung↓\n• Rauchen, Diabetes, Steroide',
    category: quizCategories[1035], // fracture-healing
    difficulty: 'schwer',
    tags: ['frakturheilung', 'kallus', 'knochenheilung', 'phasen'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_bone_fx_002',
    front: 'Kalzium-Hormon-Regulation',
    back: '**Parathormon (PTH) - Kalzium ↑:**\n• Knochen: Osteoklastenaktivierung\n• Niere: Ca²⁺-Rückresorption ↑, Phosphat ↓\n• Darm: Vitamin D-Aktivierung → Ca-Resorption ↑\n\n**Calcitonin - Kalzium ↓:**\n• Knochen: Osteoblastenaktivierung\n• Niere: Ca²⁺-Ausscheidung ↑\n• Gegenspieler zu PTH\n\n**Vitamin D (Calcitriol):**\n• Haut: 7-Dehydrocholesterol + UV → Cholecalciferol\n• Leber: → 25-OH-D₃ (Speicherform)\n• Niere: → 1,25-(OH)₂-D₃ (aktive Form)\n• Darm: Ca²⁺-Resorption ↑\n\n**Regelkreis:**\nCa²⁺ ↓ → PTH ↑ → Ca²⁺ ↑ → PTH ↓',
    category: quizCategories[1044], // bone-metabolism
    difficulty: 'schwer',
    tags: ['kalzium', 'parathormon', 'calcitonin', 'vitamin-d'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_bone_fx_003',
    front: 'RANK/RANKL/OPG-System',
    back: '**Komponenten:**\n• **RANKL:** Ligand auf Osteoblasten\n• **RANK:** Rezeptor auf Osteoklastenvorläufern\n• **OPG:** Decoy-Rezeptor (Osteoprotegerin)\n\n**Funktion:**\n• RANKL + RANK → Osteoklastenreifung\n• OPG bindet RANKL → Hemmung\n• Balance bestimmt Knochenumbau\n\n**Regulation:**\n• **Pro-resorptiv:** PTH, Cortisol, IL-1, TNF-α\n• **Anti-resorptiv:** Östrogen, Calcitonin\n\n**Klinische Bedeutung:**\n• **Denosumab:** RANKL-Antikörper\n• Osteoporose-Therapie\n• Knochenmetastasen\n\n**Pathologie:**\n• RANKL ↑ → Osteoporose\n• OPG ↑ → Osteopetrose',
    category: quizCategories[1051], // rank-rankl-opg
    difficulty: 'schwer',
    tags: ['rank', 'rankl', 'opg', 'osteoklasten', 'knochenumbau'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  
  // Neue Gelenksystem-Lernkarten
  {
    id: 'fc_joint_001',
    front: 'Gelenkaufbau - Schichten und Strukturen',
    back: '**Gelenkknorpel (Cartilago articularis):**\n• Hyaliner Knorpel, 2-4 mm dick\n• Gefäß- und nervenlos\n• Ernährung durch Diffusion\n\n**Gelenkkapsel:**\n• **Stratum fibrosum:** Außen, straffes Bindegewebe\n• **Stratum synoviale:** Innen, produziert Synovia\n\n**Synovialflüssigkeit:**\n• Hyaluronsäure + Proteine\n• Schmierung & Nährstoffversorgung\n• Viskoelastisch (thixotrop)\n\n**Stabilisatoren:**\n• **Bänder:** Knochen-Knochen\n• **Sehnen:** Muskel-Knochen\n• **Menisken:** Druckverteilung\n• **Bursae:** Reibungsminderung',
    category: quizCategories[1208], // joint-structure
    difficulty: 'schwer',
    tags: ['gelenkaufbau', 'knorpel', 'synovia', 'gelenkkapsel'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_joint_002',
    front: 'Bewegungsarten der Gelenke',
    back: '**Hauptbewegungsrichtungen:**\n\n**Sagittalebene:**\n• **Flexion:** Beugung (Winkelverkleinerung)\n• **Extension:** Streckung (Winkelvergrößerung)\n\n**Frontalebene:**\n• **Abduktion:** Abspreizen vom Körper\n• **Adduktion:** Heranführen zum Körper\n\n**Transversalebene:**\n• **Innenrotation:** Drehung nach innen\n• **Außenrotation:** Drehung nach außen\n\n**Spezialbewegungen:**\n• **Zirkumduktion:** Kreisende Bewegung\n• **Pronation:** Handfläche nach unten\n• **Supination:** Handfläche nach oben\n• **Dorsalflexion:** Fuß nach oben\n• **Plantarflexion:** Fuß nach unten',
    category: quizCategories[1214], // movement-theory
    difficulty: 'mittel',
    tags: ['bewegungslehre', 'flexion', 'extension', 'rotation'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_joint_003',
    front: 'Arthrose vs. Arthritis',
    back: '**Arthrose (Osteoarthrose):**\n• Degenerative Gelenkerkrankung\n• Knorpelverschleiß\n• Alter, Überbelastung, Fehlstellung\n• Schmerz bei Belastung\n• Anlaufschmerz, Ermüdungsschmerz\n\n**Arthritis:**\n• Entzündliche Gelenkerkrankung\n• Synovialitis (Gelenkschleimhautentzündung)\n• Autoimmun, infektiös, metabolisch\n• Ruheschmerz, Nachtschmerz\n• Schwellung, Überwärmung, Rötung\n\n**Diagnostik:**\n• **Arthrose:** Röntgen (Gelenkspaltverschmälerung)\n• **Arthritis:** Labor (CRP, BSG, RF)\n\n**Therapie:**\n• **Arthrose:** Bewegung, Entlastung, TEP\n• **Arthritis:** Antirheumatika, Immunsuppression',
    category: quizCategories[1322], // joint-pathology
    difficulty: 'schwer',
    tags: ['arthrose', 'arthritis', 'gelenkerkrankungen', 'differenzialdiagnose'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_joint_004',
    front: 'Neutral-Null-Methode',
    back: '**Definition:**\nStandardisierte Methode zur Messung und Dokumentation von Gelenkbewegungen\n\n**Grundprinzipien:**\n• **Nullstellung:** Anatomische Grundstellung\n• **3 Zahlen:** Extension/Flexion/0\n• **Dokumentation:** Ext/Flex 10-0-120\n\n**Beispiele:**\n• **Knie normal:** 5-0-140°\n• **Knie Streckdefizit:** 0-10-140°\n• **Ellenbogen normal:** 10-0-150°\n\n**Bewegungsebenen:**\n• **Sagittal:** Flexion/Extension\n• **Frontal:** Abduktion/Adduktion\n• **Transversal:** Rotation\n\n**Klinische Bedeutung:**\n• Verlaufskontrolle\n• Gutachten\n• Therapieplanung',
    category: quizCategories[1223], // neutral-null-method
    difficulty: 'mittel',
    tags: ['neutral-null', 'bewegungsmessung', 'goniometrie', 'dokumentation'],
    reviewCount: 0,
    easeFactor: 2.5
  }
]