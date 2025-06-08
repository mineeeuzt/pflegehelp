export interface Category {
  id: string
  name: string
  description: string
  icon: string
  difficulty: 'easy' | 'medium' | 'hard'
  parentId?: string
  children?: Category[]
}

export const medicalBasicsCategories: Category[] = [
  {
    id: 'anatomy-physiology',
    name: 'ANATOMIE & PHYSIOLOGIE',
    description: 'Grundlagen der menschlichen Anatomie und physiologischen Prozesse',
    icon: '🏥',
    difficulty: 'medium',
    children: [
      {
        id: 'cardiovascular-system',
        name: 'HERZ-KREISLAUF-SYSTEM',
        description: 'Herz, Blutkreislauf und kardiovaskuläre Physiologie',
        icon: '🫀',
        difficulty: 'medium',
        parentId: 'anatomy-physiology',
        children: [
          {
            id: 'heart-anatomy',
            name: 'Herzanatomie',
            description: 'Aufbau und Struktur des Herzens',
            icon: '❤️',
            difficulty: 'medium',
            parentId: 'cardiovascular-system',
            children: [
              {
                id: 'heart-wall',
                name: 'Herzwand (Epi-, Myo-, Endokard)',
                description: 'Die drei Schichten der Herzwand',
                icon: '🔬',
                difficulty: 'medium',
                parentId: 'heart-anatomy'
              },
              {
                id: 'heart-chambers',
                name: 'Herzkammern (Vorhöfe, Ventrikel)',
                description: 'Aufbau der vier Herzkammern',
                icon: '🏠',
                difficulty: 'easy',
                parentId: 'heart-anatomy'
              },
              {
                id: 'heart-valves',
                name: 'Herzklappen (AV-Klappen, Taschenklappen)',
                description: 'Atrioventrikuläre und Taschenklappen',
                icon: '🚪',
                difficulty: 'medium',
                parentId: 'heart-anatomy'
              },
              {
                id: 'conduction-system',
                name: 'Reizleitungssystem (Sinusknoten, AV-Knoten, His-Bündel, Purkinje-Fasern)',
                description: 'Elektrisches Leitungssystem des Herzens',
                icon: '⚡',
                difficulty: 'hard',
                parentId: 'heart-anatomy'
              },
              {
                id: 'coronary-vessels',
                name: 'Koronargefäße (RCA, LAD, LCX, Ramus intermedius)',
                description: 'Herzkranzgefäße und Blutversorgung des Herzens',
                icon: '🌊',
                difficulty: 'hard',
                parentId: 'heart-anatomy'
              },
              {
                id: 'heart-innervation',
                name: 'Herzinnervation (Sympathikus, Parasympathikus)',
                description: 'Vegetative Innervation des Herzens',
                icon: '🧠',
                difficulty: 'hard',
                parentId: 'heart-anatomy'
              },
              {
                id: 'pericardium',
                name: 'Herzbeutel (Perikard - viszeral/parietal)',
                description: 'Herzbeutel und seine Schichten',
                icon: '🛡️',
                difficulty: 'medium',
                parentId: 'heart-anatomy'
              }
            ]
          },
          {
            id: 'blood-circulation',
            name: 'Blutkreislauf',
            description: 'Großer und kleiner Kreislauf',
            icon: '🔄',
            difficulty: 'medium',
            parentId: 'cardiovascular-system',
            children: [
              {
                id: 'systemic-circulation',
                name: 'Großer Kreislauf (Systemkreislauf)',
                description: 'Körperkreislauf vom linken Herzen durch den Körper',
                icon: '🌍',
                difficulty: 'easy',
                parentId: 'blood-circulation'
              },
              {
                id: 'pulmonary-circulation',
                name: 'Kleiner Kreislauf (Lungenkreislauf)',
                description: 'Lungenkreislauf vom rechten Herzen zur Lunge',
                icon: '🫁',
                difficulty: 'easy',
                parentId: 'blood-circulation'
              },
              {
                id: 'portal-circulation',
                name: 'Pfortaderkreislauf (Leber)',
                description: 'Leberkreislauf über die Pfortader',
                icon: '🍯',
                difficulty: 'medium',
                parentId: 'blood-circulation'
              },
              {
                id: 'renal-circulation',
                name: 'Nierenkreislauf',
                description: 'Durchblutung der Nieren',
                icon: '🫘',
                difficulty: 'medium',
                parentId: 'blood-circulation'
              },
              {
                id: 'coronary-circulation',
                name: 'Koronarkreislauf',
                description: 'Durchblutung des Herzmuskels',
                icon: '💖',
                difficulty: 'medium',
                parentId: 'blood-circulation'
              },
              {
                id: 'cerebral-circulation',
                name: 'Zerebrale Durchblutung (Willis-Kreis)',
                description: 'Hirndurchblutung und Circulus arteriosus',
                icon: '🧠',
                difficulty: 'hard',
                parentId: 'blood-circulation'
              },
              {
                id: 'fetal-circulation',
                name: 'Fetaler Kreislauf (Ductus arteriosus, Foramen ovale)',
                description: 'Besonderheiten des Kreislaufs vor der Geburt',
                icon: '👶',
                difficulty: 'hard',
                parentId: 'blood-circulation'
              }
            ]
          },
          {
            id: 'blood-pressure-regulation',
            name: 'Blutdruck & Regulation',
            description: 'Blutdruckregulation und Kontrollmechanismen',
            icon: '📊',
            difficulty: 'medium',
            parentId: 'cardiovascular-system',
            children: [
              {
                id: 'systolic-diastolic',
                name: 'Systolisch/Diastolisch',
                description: 'Systolischer und diastolischer Blutdruck',
                icon: '📈',
                difficulty: 'easy',
                parentId: 'blood-pressure-regulation'
              },
              {
                id: 'mean-arterial-pressure',
                name: 'Mittlerer arterieller Druck (MAD)',
                description: 'Berechnung und Bedeutung des MAD',
                icon: '📊',
                difficulty: 'medium',
                parentId: 'blood-pressure-regulation'
              },
              {
                id: 'baroreceptors',
                name: 'Blutdruckregulation (Barorezeptoren)',
                description: 'Kurzfristige Blutdruckregulation über Barorezeptoren',
                icon: '🎛️',
                difficulty: 'medium',
                parentId: 'blood-pressure-regulation'
              },
              {
                id: 'raas-system',
                name: 'RAAS-System (Renin-Angiotensin-Aldosteron)',
                description: 'Langfristige Blutdruckregulation über RAAS',
                icon: '🫘',
                difficulty: 'hard',
                parentId: 'blood-pressure-regulation'
              },
              {
                id: 'adh-regulation',
                name: 'ADH-Regulation (Vasopressin)',
                description: 'Antidiuretisches Hormon und Wasserhaushalt',
                icon: '💧',
                difficulty: 'medium',
                parentId: 'blood-pressure-regulation'
              },
              {
                id: 'sympathetic-parasympathetic',
                name: 'Sympathikus/Parasympathikus',
                description: 'Vegetative Blutdruckregulation',
                icon: '⚖️',
                difficulty: 'medium',
                parentId: 'blood-pressure-regulation'
              },
              {
                id: 'long-short-term',
                name: 'Langzeit-/Kurzeitregulation',
                description: 'Verschiedene Zeitebenen der Blutdruckregulation',
                icon: '⏰',
                difficulty: 'medium',
                parentId: 'blood-pressure-regulation'
              },
              {
                id: 'natriuretic-peptides',
                name: 'Natriuretische Peptide (ANP, BNP)',
                description: 'Hormonelle Volumenregulation',
                icon: '🧪',
                difficulty: 'hard',
                parentId: 'blood-pressure-regulation'
              }
            ]
          },
          {
            id: 'heart-physiology',
            name: 'Herzphysiologie',
            description: 'Physiologische Prozesse des Herzens',
            icon: '⚡',
            difficulty: 'medium',
            parentId: 'cardiovascular-system',
            children: [
              {
                id: 'cardiac-cycle',
                name: 'Herzaktion (Systole/Diastole)',
                description: 'Der Herzzyklus und seine Phasen',
                icon: '🔄',
                difficulty: 'medium',
                parentId: 'heart-physiology'
              },
              {
                id: 'cardiac-output',
                name: 'Herzzeitvolumen (HZV = HF × SV)',
                description: 'Berechnung und Regulation des Herzzeitvolumens',
                icon: '💨',
                difficulty: 'medium',
                parentId: 'heart-physiology'
              },
              {
                id: 'preload-afterload',
                name: 'Preload/Afterload',
                description: 'Vor- und Nachlast des Herzens',
                icon: '⚖️',
                difficulty: 'hard',
                parentId: 'heart-physiology'
              },
              {
                id: 'contractility',
                name: 'Kontraktilität',
                description: 'Herzmuskelkontraktilität und Einflussfaktoren',
                icon: '💪',
                difficulty: 'medium',
                parentId: 'heart-physiology'
              },
              {
                id: 'frank-starling',
                name: 'Frank-Starling-Mechanismus',
                description: 'Autoregulation der Herzleistung',
                icon: '🎯',
                difficulty: 'hard',
                parentId: 'heart-physiology'
              },
              {
                id: 'heart-metabolism',
                name: 'Energiestoffwechsel des Herzens',
                description: 'Energieversorgung des Herzmuskels',
                icon: '⚡',
                difficulty: 'medium',
                parentId: 'heart-physiology'
              },
              {
                id: 'coronary-flow-reserve',
                name: 'Koronare Flussreserve',
                description: 'Reservekapazität der Koronardurchblutung',
                icon: '🌊',
                difficulty: 'hard',
                parentId: 'heart-physiology'
              }
            ]
          },
          {
            id: 'vascular-system',
            name: 'Gefäßsystem',
            description: 'Aufbau und Funktion der Blutgefäße',
            icon: '🌊',
            difficulty: 'medium',
            parentId: 'cardiovascular-system',
            children: [
              {
                id: 'arteries',
                name: 'Arterien (Windkessel-, Muskel-, Widerstandsgefäße)',
                description: 'Verschiedene Arterientypen und ihre Funktionen',
                icon: '🔴',
                difficulty: 'medium',
                parentId: 'vascular-system'
              },
              {
                id: 'veins',
                name: 'Venen (Kapazitätsgefäße)',
                description: 'Venensystem und Blutspeicherung',
                icon: '🔵',
                difficulty: 'easy',
                parentId: 'vascular-system'
              },
              {
                id: 'capillaries',
                name: 'Kapillaren (kontinuierlich, fenestriert, diskontinuierlich)',
                description: 'Kapillartypen und Stoffaustausch',
                icon: '💫',
                difficulty: 'medium',
                parentId: 'vascular-system'
              },
              {
                id: 'lymph-vessels',
                name: 'Lymphgefäße',
                description: 'Lymphatisches System und Lymphdrainage',
                icon: '🌿',
                difficulty: 'medium',
                parentId: 'vascular-system'
              },
              {
                id: 'endothelial-function',
                name: 'Endothelfunktion (NO, Prostacyclin, Endothelin)',
                description: 'Endothel und Gefäßregulation',
                icon: '🧬',
                difficulty: 'hard',
                parentId: 'vascular-system'
              },
              {
                id: 'microcirculation',
                name: 'Mikrozirkulation',
                description: 'Durchblutung in den kleinsten Gefäßen',
                icon: '🔬',
                difficulty: 'medium',
                parentId: 'vascular-system'
              }
            ]
          },
          {
            id: 'ecg-rhythm',
            name: 'EKG & Herzrhythmus',
            description: 'Elektrokardiographie und Rhythmusstörungen',
            icon: '📈',
            difficulty: 'hard',
            parentId: 'cardiovascular-system',
            children: [
              {
                id: 'ecg-interpretation',
                name: 'EKG-Ableitung & -Deutung (12-Kanal-EKG)',
                description: 'EKG-Technik und Interpretation',
                icon: '📊',
                difficulty: 'hard',
                parentId: 'ecg-rhythm'
              },
              {
                id: 'ecg-waves',
                name: 'P-QRS-T-Wellen (U-Welle)',
                description: 'EKG-Wellen und ihre Bedeutung',
                icon: '〰️',
                difficulty: 'medium',
                parentId: 'ecg-rhythm'
              },
              {
                id: 'arrhythmias',
                name: 'Herzrhythmusstörungen',
                description: 'Verschiedene Rhythmusstörungen',
                icon: '💓',
                difficulty: 'hard',
                parentId: 'ecg-rhythm'
              },
              {
                id: 'pacemaker-ecg',
                name: 'Schrittmacher-EKG',
                description: 'EKG-Veränderungen bei Schrittmachern',
                icon: '🔋',
                difficulty: 'hard',
                parentId: 'ecg-rhythm'
              },
              {
                id: 'stress-ecg',
                name: 'Belastungs-EKG',
                description: 'EKG unter körperlicher Belastung',
                icon: '🏃',
                difficulty: 'medium',
                parentId: 'ecg-rhythm'
              },
              {
                id: 'holter-ecg',
                name: 'Langzeit-EKG (Holter)',
                description: '24-Stunden-EKG-Aufzeichnung',
                icon: '⏱️',
                difficulty: 'medium',
                parentId: 'ecg-rhythm'
              },
              {
                id: 'event-recorder',
                name: 'Event-Recorder',
                description: 'Ereignisrekorder für seltene Rhythmusstörungen',
                icon: '📱',
                difficulty: 'medium',
                parentId: 'ecg-rhythm'
              }
            ]
          }
        ]
      },
      {
        id: 'respiratory-system',
        name: 'ATMUNGSSYSTEM',
        description: 'Anatomie und Physiologie der Atmung',
        icon: '🫁',
        difficulty: 'medium',
        parentId: 'anatomy-physiology',
        children: [
          {
            id: 'airway-anatomy',
            name: 'Anatomie der Atemwege',
            description: 'Aufbau der oberen und unteren Atemwege',
            icon: '🌬️',
            difficulty: 'medium',
            parentId: 'respiratory-system',
            children: [
              {
                id: 'upper-airways',
                name: 'Obere Atemwege (Nase, Rachen, Kehlkopf)',
                description: 'Anatomie der oberen Atemwege',
                icon: '👃',
                difficulty: 'easy',
                parentId: 'airway-anatomy'
              },
              {
                id: 'lower-airways',
                name: 'Untere Atemwege (Trachea, Bronchien, Bronchiolen)',
                description: 'Anatomie der unteren Atemwege',
                icon: '🌳',
                difficulty: 'medium',
                parentId: 'airway-anatomy'
              },
              {
                id: 'alveoli',
                name: 'Alveolen & Kapillarnetz',
                description: 'Lungenbläschen und Gasaustausch',
                icon: '🫧',
                difficulty: 'medium',
                parentId: 'airway-anatomy'
              },
              {
                id: 'pleura',
                name: 'Pleura (Ripp-/Lungenfell)',
                description: 'Brustfell und Pleurahöhle',
                icon: '🛡️',
                difficulty: 'medium',
                parentId: 'airway-anatomy'
              },
              {
                id: 'respiratory-muscles',
                name: 'Atemmuskulatur (Zwerchfell, Intercostalmuskeln)',
                description: 'Hauptatemmuskeln',
                icon: '💪',
                difficulty: 'medium',
                parentId: 'airway-anatomy'
              },
              {
                id: 'accessory-muscles',
                name: 'Atemhilfsmuskeln (Mm. scaleni, M. sternocleidomastoideus)',
                description: 'Zusätzliche Atemmuskeln',
                icon: '🆘',
                difficulty: 'medium',
                parentId: 'airway-anatomy'
              },
              {
                id: 'surfactant',
                name: 'Surfactant-System',
                description: 'Oberflächenaktive Substanz in den Alveolen',
                icon: '🧪',
                difficulty: 'hard',
                parentId: 'airway-anatomy'
              }
            ]
          },
          {
            id: 'respiratory-physiology',
            name: 'Atmungsphysiologie',
            description: 'Physiologische Prozesse der Atmung',
            icon: '⚡',
            difficulty: 'medium',
            parentId: 'respiratory-system',
            children: [
              {
                id: 'ventilation',
                name: 'Ventilation (Belüftung)',
                description: 'Belüftung der Lunge',
                icon: '💨',
                difficulty: 'easy',
                parentId: 'respiratory-physiology'
              },
              {
                id: 'diffusion',
                name: 'Diffusion (Gasaustausch)',
                description: 'Gasaustausch in den Alveolen',
                icon: '↔️',
                difficulty: 'medium',
                parentId: 'respiratory-physiology'
              },
              {
                id: 'perfusion',
                name: 'Perfusion (Durchblutung)',
                description: 'Durchblutung der Lunge',
                icon: '🩸',
                difficulty: 'medium',
                parentId: 'respiratory-physiology'
              },
              {
                id: 'vq-ratio',
                name: 'Ventilations-Perfusions-Verhältnis (V/Q)',
                description: 'Verhältnis von Belüftung zu Durchblutung',
                icon: '⚖️',
                difficulty: 'hard',
                parentId: 'respiratory-physiology'
              },
              {
                id: 'dead-space',
                name: 'Totraum (anatomisch/funktionell)',
                description: 'Nicht am Gasaustausch beteiligte Bereiche',
                icon: '🚫',
                difficulty: 'medium',
                parentId: 'respiratory-physiology'
              },
              {
                id: 'shunt',
                name: 'Shunt-Effekte',
                description: 'Rechts-Links-Shunt in der Lunge',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'respiratory-physiology'
              },
              {
                id: 'hpv',
                name: 'Hypoxisch pulmonale Vasokonstriktion (Euler-Liljestrand)',
                description: 'Regulation der Lungendurchblutung',
                icon: '🎯',
                difficulty: 'hard',
                parentId: 'respiratory-physiology'
              }
            ]
          }
        ]
      },
      {
        id: 'nervous-system',
        name: 'NERVENSYSTEM',
        description: 'Zentrales und peripheres Nervensystem',
        icon: '🧠',
        difficulty: 'hard',
        parentId: 'anatomy-physiology'
      },
      {
        id: 'musculoskeletal-system',
        name: 'BEWEGUNGSAPPARAT',
        description: 'Knochen, Gelenke, Muskeln und Bewegung',
        icon: '🦴',
        difficulty: 'medium',
        parentId: 'anatomy-physiology'
      },
      {
        id: 'renal-system',
        name: 'NIEREN & HARNWEGE',
        description: 'Nierenfunktion und Harnwege',
        icon: '🫘',
        difficulty: 'medium',
        parentId: 'anatomy-physiology'
      },
      {
        id: 'blood-immune-system',
        name: 'BLUT & IMMUNSYSTEM',
        description: 'Blutsystem und Immunabwehr',
        icon: '🩸',
        difficulty: 'medium',
        parentId: 'anatomy-physiology'
      },
      {
        id: 'metabolism-hormones',
        name: 'STOFFWECHSEL & HORMONE',
        description: 'Stoffwechselprozesse und Hormonregulation',
        icon: '🔄',
        difficulty: 'hard',
        parentId: 'anatomy-physiology'
      }
    ]
  }
]

export default medicalBasicsCategories