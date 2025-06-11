export interface Category {
  id: string
  name: string
  description: string
  icon: string
  difficulty: 'easy' | 'medium' | 'hard'
  parentId?: string
  children?: Category[]
}

export const nursingTechniquesCategories: Category[] = [
  {
    id: 'nursing-techniques',
    name: 'PFLEGETECHNIKEN & INTERVENTIONEN',
    description: 'Praktische Fertigkeiten und Techniken in der Pflege',
    icon: '🩺',
    difficulty: 'medium',
    children: [
      {
        id: 'basic-care',
        name: 'GRUNDPFLEGE',
        description: 'Fundamentale pflegerische Tätigkeiten der Grundversorgung',
        icon: '🏥',
        difficulty: 'medium',
        parentId: 'nursing-techniques',
        children: [
          {
            id: 'body-care',
            name: 'Körperpflege',
            description: 'Umfassende Körperpflege und Hygiene',
            icon: '🛁',
            difficulty: 'easy',
            parentId: 'basic-care',
            children: [
              {
                id: 'full-body-care',
                name: 'Ganzkörperpflege',
                description: 'Vollständige Körperreinigung und -pflege',
                icon: '🧼',
                difficulty: 'medium',
                parentId: 'body-care',
                children: [
                  {
                    id: 'bed-washing',
                    name: 'Im Bett',
                    description: 'Ganzkörperpflege bei bettlägerigen Patienten',
                    icon: '🛏️',
                    difficulty: 'medium',
                    parentId: 'full-body-care'
                  },
                  {
                    id: 'sink-washing',
                    name: 'Am Waschbecken',
                    description: 'Körperpflege am Waschbecken bei mobilen Patienten',
                    icon: '🚿',
                    difficulty: 'easy',
                    parentId: 'full-body-care'
                  },
                  {
                    id: 'shower-bath',
                    name: 'Dusche/Badewanne',
                    description: 'Körperpflege in Dusche oder Badewanne',
                    icon: '🛀',
                    difficulty: 'medium',
                    parentId: 'full-body-care'
                  },
                  {
                    id: 'basal-stimulation-care',
                    name: 'Basale Stimulation',
                    description: 'Stimulierende Körperpflege bei beeinträchtigten Patienten',
                    icon: '👋',
                    difficulty: 'hard',
                    parentId: 'full-body-care'
                  },
                  {
                    id: 'skin-observation',
                    name: 'Hautbeobachtung',
                    description: 'Systematische Beurteilung des Hautzustands',
                    icon: '👁️',
                    difficulty: 'medium',
                    parentId: 'full-body-care'
                  }
                ]
              },
              {
                id: 'partial-body-care',
                name: 'Teilkörperpflege',
                description: 'Pflege einzelner Körperregionen',
                icon: '🫧',
                difficulty: 'easy',
                parentId: 'body-care',
                children: [
                  {
                    id: 'facial-care',
                    name: 'Gesichtspflege',
                    description: 'Reinigung und Pflege des Gesichts',
                    icon: '😊',
                    difficulty: 'easy',
                    parentId: 'partial-body-care'
                  },
                  {
                    id: 'intimate-care',
                    name: 'Intimpflege',
                    description: 'Hygiene des Intimbereichs',
                    icon: '🔒',
                    difficulty: 'medium',
                    parentId: 'partial-body-care'
                  },
                  {
                    id: 'hair-beard-care',
                    name: 'Haar- und Bartpflege',
                    description: 'Pflege von Haaren und Bart',
                    icon: '💇',
                    difficulty: 'easy',
                    parentId: 'partial-body-care'
                  },
                  {
                    id: 'nail-care',
                    name: 'Nagelpflege',
                    description: 'Schneiden und Pflege der Nägel',
                    icon: '💅',
                    difficulty: 'easy',
                    parentId: 'partial-body-care'
                  },
                  {
                    id: 'ear-care',
                    name: 'Ohrenpflege',
                    description: 'Reinigung der äußeren Ohren',
                    icon: '👂',
                    difficulty: 'easy',
                    parentId: 'partial-body-care'
                  }
                ]
              },
              {
                id: 'oral-care',
                name: 'Mundpflege',
                description: 'Pflege von Mund, Zähnen und Zahnersatz',
                icon: '🦷',
                difficulty: 'medium',
                parentId: 'body-care',
                children: [
                  {
                    id: 'dental-care',
                    name: 'Zahnpflege',
                    description: 'Reinigung und Pflege der natürlichen Zähne',
                    icon: '🪥',
                    difficulty: 'easy',
                    parentId: 'oral-care'
                  },
                  {
                    id: 'denture-care',
                    name: 'Prothesenpflege',
                    description: 'Reinigung und Pflege von Zahnprothesen',
                    icon: '🦷',
                    difficulty: 'medium',
                    parentId: 'oral-care'
                  },
                  {
                    id: 'oral-mucosa-care',
                    name: 'Mundschleimhautpflege',
                    description: 'Pflege der Mundschleimhaut',
                    icon: '👄',
                    difficulty: 'medium',
                    parentId: 'oral-care'
                  },
                  {
                    id: 'thrush-prevention',
                    name: 'Soor-Prophylaxe',
                    description: 'Vorbeugung von Pilzinfektionen im Mund',
                    icon: '🔬',
                    difficulty: 'medium',
                    parentId: 'oral-care'
                  },
                  {
                    id: 'special-oral-care',
                    name: 'Spezielle Mundpflege',
                    description: 'Mundpflege bei besonderen Situationen',
                    icon: '⚕️',
                    difficulty: 'hard',
                    parentId: 'oral-care'
                  }
                ]
              },
              {
                id: 'skin-care',
                name: 'Hautpflege',
                description: 'Umfassende Hautpflege und Hautschutz',
                icon: '🧴',
                difficulty: 'medium',
                parentId: 'body-care',
                children: [
                  {
                    id: 'skin-types',
                    name: 'Hauttypen',
                    description: 'Erkennung und Beurteilung verschiedener Hauttypen',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'skin-care'
                  },
                  {
                    id: 'care-products',
                    name: 'Pflegeprodukte',
                    description: 'Auswahl und Anwendung von Hautpflegeprodukten',
                    icon: '🧴',
                    difficulty: 'easy',
                    parentId: 'skin-care'
                  },
                  {
                    id: 'pressure-ulcer-prevention',
                    name: 'Dekubitus-Prophylaxe',
                    description: 'Vorbeugung von Druckgeschwüren',
                    icon: '🛡️',
                    difficulty: 'hard',
                    parentId: 'skin-care'
                  },
                  {
                    id: 'intertrigo-prevention',
                    name: 'Intertrigo-Prophylaxe',
                    description: 'Vorbeugung von Hautwolf in Hautfalten',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'skin-care'
                  },
                  {
                    id: 'allergy-considerations',
                    name: 'Allergien beachten',
                    description: 'Berücksichtigung von Hautallergien und Unverträglichkeiten',
                    icon: '⚠️',
                    difficulty: 'medium',
                    parentId: 'skin-care'
                  }
                ]
              }
            ]
          },
          {
            id: 'mobilization',
            name: 'Mobilisation',
            description: 'Förderung und Erhaltung der Bewegungsfähigkeit',
            icon: '🏃',
            difficulty: 'medium',
            parentId: 'basic-care',
            children: [
              {
                id: 'movement-promotion',
                name: 'Bewegungsförderung',
                description: 'Aktive und passive Bewegungstherapie',
                icon: '🤸',
                difficulty: 'medium',
                parentId: 'mobilization',
                children: [
                  {
                    id: 'passive-exercises',
                    name: 'Passive Bewegungsübungen',
                    description: 'Bewegungen durch externe Kraft ohne Eigenaktivität',
                    icon: '🤲',
                    difficulty: 'medium',
                    parentId: 'movement-promotion'
                  },
                  {
                    id: 'active-exercises',
                    name: 'Aktive Bewegungsübungen',
                    description: 'Selbstständige Bewegungen des Patienten',
                    icon: '💪',
                    difficulty: 'easy',
                    parentId: 'movement-promotion'
                  },
                  {
                    id: 'resistive-exercises',
                    name: 'Resistive Übungen',
                    description: 'Krafttraining gegen Widerstand',
                    icon: '🏋️',
                    difficulty: 'medium',
                    parentId: 'movement-promotion'
                  },
                  {
                    id: 'contracture-prevention',
                    name: 'Kontrakturenprophylaxe',
                    description: 'Vorbeugung von Gelenkversteifungen',
                    icon: '🔧',
                    difficulty: 'hard',
                    parentId: 'movement-promotion'
                  },
                  {
                    id: 'joint-mobilization',
                    name: 'Gelenkmobilisation',
                    description: 'Erhaltung und Verbesserung der Gelenkbeweglichkeit',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'movement-promotion'
                  }
                ]
              },
              {
                id: 'transfer',
                name: 'Transfer',
                description: 'Sicherer Transfer zwischen verschiedenen Positionen',
                icon: '🔄',
                difficulty: 'medium',
                parentId: 'mobilization',
                children: [
                  {
                    id: 'bed-chair-transfer',
                    name: 'Bett-Stuhl-Transfer',
                    description: 'Sichere Übertragung zwischen Bett und Stuhl',
                    icon: '🪑',
                    difficulty: 'medium',
                    parentId: 'transfer'
                  },
                  {
                    id: 'kinaesthetics-principles',
                    name: 'Kinästhetik-Prinzipien',
                    description: 'Anwendung kinästhetischer Bewegungsprinzipien',
                    icon: '🌊',
                    difficulty: 'hard',
                    parentId: 'transfer'
                  },
                  {
                    id: 'transfer-aids',
                    name: 'Hilfsmittel (Rutschbrett, Lifter)',
                    description: 'Einsatz von Transferhilfsmitteln',
                    icon: '🛠️',
                    difficulty: 'medium',
                    parentId: 'transfer'
                  },
                  {
                    id: 'fall-prevention-transfer',
                    name: 'Sturzprävention',
                    description: 'Maßnahmen zur Sturzvorbeugung beim Transfer',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'transfer'
                  },
                  {
                    id: 'back-friendly-work',
                    name: 'Rückenschonendes Arbeiten',
                    description: 'Ergonomische Arbeitstechniken zum Schutz des Rückens',
                    icon: '🦴',
                    difficulty: 'medium',
                    parentId: 'transfer'
                  }
                ]
              },
              {
                id: 'positioning',
                name: 'Positionierung',
                description: 'Therapeutische Lagerung und Positionierung',
                icon: '🛏️',
                difficulty: 'medium',
                parentId: 'mobilization',
                children: [
                  {
                    id: 'thirty-degree-positioning',
                    name: '30°-Lagerung',
                    description: 'Seitenlagerung in 30-Grad-Position',
                    icon: '📐',
                    difficulty: 'medium',
                    parentId: 'positioning'
                  },
                  {
                    id: 'hundred-thirty-five-positioning',
                    name: '135°-Lagerung',
                    description: 'Seitenlagerung in 135-Grad-Position',
                    icon: '📏',
                    difficulty: 'medium',
                    parentId: 'positioning'
                  },
                  {
                    id: 'micro-positioning',
                    name: 'Mikrolagerung',
                    description: 'Kleine Positionsveränderungen zur Druckentlastung',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'positioning'
                  },
                  {
                    id: 'positioning-aids',
                    name: 'Lagerungshilfsmittel',
                    description: 'Kissen, Keile und andere Lagerungshilfen',
                    icon: '🛌',
                    difficulty: 'easy',
                    parentId: 'positioning'
                  },
                  {
                    id: 'positioning-plan',
                    name: 'Lagerungsplan',
                    description: 'Systematische Planung und Dokumentation der Lagerung',
                    icon: '📋',
                    difficulty: 'medium',
                    parentId: 'positioning'
                  }
                ]
              },
              {
                id: 'gait-training',
                name: 'Gehtraining',
                description: 'Förderung und Wiederherstellung der Gehfähigkeit',
                icon: '🚶',
                difficulty: 'medium',
                parentId: 'mobilization',
                children: [
                  {
                    id: 'room-mobilization',
                    name: 'Mobilisation im Zimmer',
                    description: 'Erste Gehversuche im geschützten Rahmen',
                    icon: '🏠',
                    difficulty: 'easy',
                    parentId: 'gait-training'
                  },
                  {
                    id: 'gait-school',
                    name: 'Gangschule',
                    description: 'Systematisches Training des normalen Gangbilds',
                    icon: '🎓',
                    difficulty: 'medium',
                    parentId: 'gait-training'
                  },
                  {
                    id: 'stair-climbing',
                    name: 'Treppensteigen',
                    description: 'Training des sicheren Treppensteigens',
                    icon: '🪜',
                    difficulty: 'hard',
                    parentId: 'gait-training'
                  },
                  {
                    id: 'walking-aids',
                    name: 'Gehhilfen',
                    description: 'Einsatz und Training mit Gehhilfen',
                    icon: '🦯',
                    difficulty: 'medium',
                    parentId: 'gait-training'
                  },
                  {
                    id: 'fall-prevention-gait',
                    name: 'Sturzprophylaxe',
                    description: 'Maßnahmen zur Sturzvorbeugung beim Gehen',
                    icon: '⚠️',
                    difficulty: 'medium',
                    parentId: 'gait-training'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

export default nursingTechniquesCategories