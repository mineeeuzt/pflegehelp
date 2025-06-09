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
    category: quizCategories[932], // compact-spongy
    difficulty: 'leicht',
    tags: ['knochen', 'histologie', 'kompakta', 'spongiosa']
  },
  {
    id: 'musculo_002',
    question: 'Welche Zellen sind für den Knochenabbau verantwortlich?',
    options: ['Osteoblasten', 'Osteozyten', 'Osteoklasten', 'Chondrozyten'],
    correctAnswer: 2,
    explanation: 'Osteoklasten sind die Zellen, die für den Knochenabbau (Resorption) verantwortlich sind. Osteoblasten bauen Knochen auf, Osteozyten sind reife Knochenzellen.',
    category: quizCategories[935], // bone-cells
    difficulty: 'mittel',
    tags: ['osteoklasten', 'knochenabbau', 'remodeling']
  },
  {
    id: 'musculo_003',
    question: 'Was besagt das Wolff\'sche Gesetz?',
    options: ['Knochen wachsen nur bis zum 25. Lebensjahr', 'Knochen passen sich der Belastung an', 'Alle Knochen haben die gleiche Dichte', 'Knochenbruch heilt immer vollständig'],
    correctAnswer: 1,
    explanation: 'Das Wolff\'sche Gesetz besagt, dass sich Knochen an die mechanische Belastung anpassen: Bei höherer Belastung werden sie stärker, bei fehlender Belastung schwächer.',
    category: quizCategories[952], // wolffs-law
    difficulty: 'mittel',
    tags: ['wolff-gesetz', 'anpassung', 'belastung']
  },
  {
    id: 'musculo_004',
    question: 'Welcher Gelenktyp erlaubt Bewegung in drei Achsen?',
    options: ['Scharniergelenk', 'Kugelgelenk', 'Sattelgelenk', 'Drehgelenk'],
    correctAnswer: 1,
    explanation: 'Das Kugelgelenk (z.B. Schulter- und Hüftgelenk) ist ein dreiachsiges Gelenk, das Bewegungen in allen drei Raumachsen ermöglicht.',
    category: quizCategories[960], // ball-socket
    difficulty: 'leicht',
    tags: ['kugelgelenk', 'bewegungsachsen', 'schulter', 'hüfte']
  },
  {
    id: 'musculo_005',
    question: 'Was unterscheidet Skelettmuskel von glattem Muskel?',
    options: ['Skelettmuskel ist unwillkürlich', 'Glatter Muskel ist quergestreift', 'Skelettmuskel ist willkürlich steuerbar', 'Beide sind identisch'],
    correctAnswer: 2,
    explanation: 'Skelettmuskel ist quergestreift und willkürlich steuerbar, während glatter Muskel nicht quergestreift und unwillkürlich (autonom) gesteuert wird.',
    category: quizCategories[967], // skeletal-muscle
    difficulty: 'leicht',
    tags: ['skelettmuskel', 'willkürlich', 'quergestreift']
  },
  {
    id: 'musculo_006',
    question: 'Welche Struktur verbindet Muskeln mit Knochen?',
    options: ['Bänder', 'Sehnen', 'Knorpel', 'Faszien'],
    correctAnswer: 1,
    explanation: 'Sehnen (Tendines) verbinden Muskeln mit Knochen und übertragen die Muskelkraft auf das Skelett. Bänder verbinden Knochen mit Knochen.',
    category: quizCategories[967], // skeletal-muscle
    difficulty: 'leicht',
    tags: ['sehnen', 'muskeln', 'knochen', 'kraftübertragung']
  },
  {
    id: 'musculo_007',
    question: 'Was ist das Havers-System?',
    options: ['Ein Muskeltyp', 'Strukturelle Einheit der Kompakta', 'Ein Gelenktyp', 'Eine Knochenerkrankung'],
    correctAnswer: 1,
    explanation: 'Das Havers-System (Osteon) ist die strukturelle und funktionelle Grundeinheit der Kompakta, bestehend aus konzentrisch angeordneten Knochenlamellen um einen Zentralkanal.',
    category: quizCategories[940], // haversian-system
    difficulty: 'schwer',
    tags: ['havers-system', 'osteon', 'kompakta', 'histologie']
  },
  {
    id: 'musculo_008',
    question: 'Welches ist das beweglichste Gelenk im menschlichen Körper?',
    options: ['Kniegelenk', 'Ellenbogengelenk', 'Schultergelenk', 'Handgelenk'],
    correctAnswer: 2,
    explanation: 'Das Schultergelenk ist als Kugelgelenk das beweglichste Gelenk des Körpers, allerdings auf Kosten der Stabilität.',
    category: quizCategories[960], // ball-socket
    difficulty: 'leicht',
    tags: ['schultergelenk', 'beweglichkeit', 'kugelgelenk']
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
    category: quizCategories[932], // compact-spongy
    difficulty: 'mittel',
    tags: ['kompakta', 'spongiosa', 'knochenaufbau', 'histologie'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_musculo_002',
    front: 'Knochenzellen - Funktionen und Bedeutung',
    back: '**Osteoblasten:**\n• Knochenaufbauende Zellen\n• Produzieren Osteoid (Knochenmatrix)\n• Werden zu Osteozyten\n\n**Osteozyten:**\n• Reife Knochenzellen\n• In Lakunen eingeschlossen\n• Mechanosensoren für Belastung\n• Regulation des Knochenumbaus\n\n**Osteoklasten:**\n• Knochenabbauende Riesenzellen\n• Resorption alter Knochensubstanz\n• Schaffen Platz für Neubau\n\n**Klinische Bedeutung:**\n• Balance bestimmt Knochenstabilität\n• Störungen → Osteoporose/Osteosklerose',
    category: quizCategories[935], // bone-cells
    difficulty: 'schwer',
    tags: ['osteoblasten', 'osteozyten', 'osteoklasten', 'knochenumbau'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_musculo_003',
    front: 'Gelenktypen nach Beweglichkeit und Achsen',
    back: '**Nach Beweglichkeit:**\n• **Synarthrosen:** Unbeweglich (Schädelnähte)\n• **Amphiarthrosen:** Wenig beweglich (Symphysen)\n• **Diarthrosen:** Frei beweglich (echte Gelenke)\n\n**Nach Bewegungsachsen:**\n• **Einachsig:** Scharniergelenk (Ellenbogen)\n• **Zweiachsig:** Eigelenk (Handgelenk), Sattelgelenk (Daumen)\n• **Dreiachsig:** Kugelgelenk (Schulter, Hüfte)\n• **Rotationsgelenk:** Drehgelenk (Atlas-Axis)\n\n**Bewegungsarten:**\n• Flexion/Extension, Abduktion/Adduktion\n• Innen-/Außenrotation, Zirkumduktion',
    category: quizCategories[955], // joint-types
    difficulty: 'schwer',
    tags: ['gelenktypen', 'bewegungsachsen', 'diarthrosen', 'biomechanik'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_musculo_004',
    front: 'Muskeltypen - Eigenschaften und Funktionen',
    back: '**Skelettmuskel:**\n• Quergestreift, multinukleär\n• Willkürlich steuerbar\n• Kraftvolle, schnelle Kontraktionen\n• Ermüdet schnell\n\n**Herzmuskel:**\n• Quergestreift, aber unwillkürlich\n• Glanzstreifen (Intercalated discs)\n• Autorhythmisch, ermüdungsresistent\n• Spezielle Leitungssystem\n\n**Glatte Muskulatur:**\n• Nicht quergestreift, einkernig\n• Unwillkürlich (autonom)\n• Langsame, anhaltende Kontraktionen\n• In Organen, Gefäßen, Verdauungstrakt\n\n**Neuromuskuläre Übertragung:**\n• Motorische Endplatte (Skelettmuskel)\n• Autonome Innervation (glatt)',
    category: quizCategories[967], // skeletal-muscle
    difficulty: 'schwer',
    tags: ['skelettmuskel', 'herzmuskel', 'glatte-muskulatur', 'kontraktion'],
    reviewCount: 0,
    easeFactor: 2.5
  },
  {
    id: 'fc_musculo_005',
    front: 'Wolff\'sches Gesetz und Knochenanpassung',
    back: '**Definition:**\n"Die Knochen passen sich in ihrer Struktur den mechanischen Anforderungen an"\n\n**Mechanismus:**\n• Belastung aktiviert Osteozyten\n• Mechanosignale triggern Remodeling\n• Erhöhte Belastung → Stärkung\n• Fehlende Belastung → Abbau\n\n**Klinische Beispiele:**\n• **Immobilisation:** Knochenabbau\n• **Sport:** Knochenverdichtung\n• **Schwerelosigkeit:** Osteoporose\n• **Frakturbeilung:** Anpassung an neue Belastung\n\n**Therapeutische Bedeutung:**\n• Kraft-/Widerstandstraining\n• Frühe Mobilisation\n• Prävention von Osteoporose',
    category: quizCategories[952], // wolffs-law
    difficulty: 'mittel',
    tags: ['wolff-gesetz', 'knochenanpassung', 'belastung', 'remodeling'],
    reviewCount: 0,
    easeFactor: 2.5
  }
]