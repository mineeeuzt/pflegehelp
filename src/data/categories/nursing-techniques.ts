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
          },
          {
            id: 'nutrition',
            name: 'Ernährung',
            description: 'Ernährungsmanagement und Nahrungsaufnahme',
            icon: '🍽️',
            difficulty: 'medium',
            parentId: 'basic-care',
            children: [
              {
                id: 'food-intake',
                name: 'Nahrungsaufnahme',
                description: 'Unterstützung bei der Nahrungsaufnahme',
                icon: '🥄',
                difficulty: 'easy',
                parentId: 'nutrition',
                children: [
                  {
                    id: 'independent-eating',
                    name: 'Selbstständig',
                    description: 'Förderung der selbstständigen Nahrungsaufnahme',
                    icon: '👤',
                    difficulty: 'easy',
                    parentId: 'food-intake'
                  },
                  {
                    id: 'assisted-eating',
                    name: 'Mit Hilfestellung',
                    description: 'Teilweise Unterstützung beim Essen',
                    icon: '🤝',
                    difficulty: 'easy',
                    parentId: 'food-intake'
                  },
                  {
                    id: 'complete-feeding',
                    name: 'Vollständige Übernahme',
                    description: 'Vollständige Hilfe bei der Nahrungsaufnahme',
                    icon: '🍴',
                    difficulty: 'medium',
                    parentId: 'food-intake'
                  },
                  {
                    id: 'aspiration-prevention',
                    name: 'Aspirationsprophylaxe',
                    description: 'Vorbeugung des Verschluckens',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'food-intake'
                  },
                  {
                    id: 'swallowing-training',
                    name: 'Schlucktraining',
                    description: 'Training der Schluckfunktion',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'food-intake'
                  }
                ]
              },
              {
                id: 'diet-forms',
                name: 'Kostformen',
                description: 'Verschiedene Ernährungsformen',
                icon: '🥗',
                difficulty: 'medium',
                parentId: 'nutrition',
                children: [
                  {
                    id: 'full-diet',
                    name: 'Vollkost',
                    description: 'Normale, vollwertige Ernährung',
                    icon: '🍽️',
                    difficulty: 'easy',
                    parentId: 'diet-forms'
                  },
                  {
                    id: 'light-diet',
                    name: 'Leichte Vollkost',
                    description: 'Schonkost bei Verdauungsproblemen',
                    icon: '🥙',
                    difficulty: 'easy',
                    parentId: 'diet-forms'
                  },
                  {
                    id: 'diabetic-diet',
                    name: 'Diabeteskost',
                    description: 'Spezielle Ernährung für Diabetiker',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'diet-forms'
                  },
                  {
                    id: 'pureed-diet',
                    name: 'Pürierte Kost',
                    description: 'Zerkleinerte Nahrung bei Schluckstörungen',
                    icon: '🥣',
                    difficulty: 'medium',
                    parentId: 'diet-forms'
                  },
                  {
                    id: 'liquid-diet',
                    name: 'Flüssigkost',
                    description: 'Reine Flüssignahrung',
                    icon: '🥤',
                    difficulty: 'medium',
                    parentId: 'diet-forms'
                  },
                  {
                    id: 'parenteral-nutrition',
                    name: 'Parenterale Ernährung',
                    description: 'Intravenöse Nährstoffzufuhr',
                    icon: '💉',
                    difficulty: 'hard',
                    parentId: 'diet-forms'
                  }
                ]
              },
              {
                id: 'enteral-nutrition',
                name: 'Enterale Ernährung',
                description: 'Ernährung über Sonden',
                icon: '🔗',
                difficulty: 'hard',
                parentId: 'nutrition',
                children: [
                  {
                    id: 'peg-pej-care',
                    name: 'PEG/PEJ-Versorgung',
                    description: 'Pflege von perkutanen Ernährungssonden',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'enteral-nutrition'
                  },
                  {
                    id: 'nasogastric-tube',
                    name: 'Nasogastrale Sonde',
                    description: 'Magensonde über die Nase',
                    icon: '📏',
                    difficulty: 'hard',
                    parentId: 'enteral-nutrition'
                  },
                  {
                    id: 'application-technique',
                    name: 'Applikationstechnik',
                    description: 'Verabreichung von Sondennahrung',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'enteral-nutrition'
                  },
                  {
                    id: 'enteral-complications',
                    name: 'Komplikationen',
                    description: 'Komplikationen der enteralen Ernährung',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'enteral-nutrition'
                  },
                  {
                    id: 'enteral-hygiene',
                    name: 'Hygiene',
                    description: 'Hygienemaßnahmen bei Sondenernährung',
                    icon: '🧼',
                    difficulty: 'medium',
                    parentId: 'enteral-nutrition'
                  }
                ]
              },
              {
                id: 'fluid-balance',
                name: 'Flüssigkeitsbilanz',
                description: 'Überwachung des Flüssigkeitshaushalts',
                icon: '💧',
                difficulty: 'medium',
                parentId: 'nutrition',
                children: [
                  {
                    id: 'intake-output-control',
                    name: 'Ein-/Ausfuhrkontrolle',
                    description: 'Messung von Flüssigkeitsaufnahme und -abgabe',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'fluid-balance'
                  },
                  {
                    id: 'balance-calculation',
                    name: 'Bilanzierung',
                    description: 'Berechnung der Flüssigkeitsbilanz',
                    icon: '🧮',
                    difficulty: 'medium',
                    parentId: 'fluid-balance'
                  },
                  {
                    id: 'dehydration-prevention',
                    name: 'Dehydratationsprophylaxe',
                    description: 'Vorbeugung von Flüssigkeitsmangel',
                    icon: '🚰',
                    difficulty: 'medium',
                    parentId: 'fluid-balance'
                  },
                  {
                    id: 'edema-control',
                    name: 'Ödemkontrolle',
                    description: 'Überwachung von Wassereinlagerungen',
                    icon: '👀',
                    difficulty: 'medium',
                    parentId: 'fluid-balance'
                  }
                ]
              }
            ]
          },
          {
            id: 'elimination',
            name: 'Ausscheidung',
            description: 'Management von Harn- und Stuhlausscheidung',
            icon: '🚽',
            difficulty: 'medium',
            parentId: 'basic-care',
            children: [
              {
                id: 'continence-promotion',
                name: 'Kontinenzförderung',
                description: 'Förderung der Harn- und Stuhlkontinenz',
                icon: '🎯',
                difficulty: 'medium',
                parentId: 'elimination',
                children: [
                  {
                    id: 'toilet-training',
                    name: 'Toilettentraining',
                    description: 'Training der regelmäßigen Toilettengänge',
                    icon: '⏰',
                    difficulty: 'easy',
                    parentId: 'continence-promotion'
                  },
                  {
                    id: 'micturition-protocol',
                    name: 'Miktionsprotokoll',
                    description: 'Dokumentation der Blasenentleerung',
                    icon: '📋',
                    difficulty: 'easy',
                    parentId: 'continence-promotion'
                  },
                  {
                    id: 'pelvic-floor-training',
                    name: 'Beckenbodentraining',
                    description: 'Kräftigung der Beckenbodenmuskulatur',
                    icon: '💪',
                    difficulty: 'medium',
                    parentId: 'continence-promotion'
                  },
                  {
                    id: 'behavioral-therapy',
                    name: 'Verhaltenstherapie',
                    description: 'Verhaltensmodifikation bei Inkontinenz',
                    icon: '🧠',
                    difficulty: 'hard',
                    parentId: 'continence-promotion'
                  },
                  {
                    id: 'incontinence-aids-counseling',
                    name: 'Hilfsmittelberatung',
                    description: 'Beratung zu Inkontinenzhilfsmitteln',
                    icon: '💬',
                    difficulty: 'medium',
                    parentId: 'continence-promotion'
                  }
                ]
              },
              {
                id: 'incontinence-care',
                name: 'Inkontinenzversorgung',
                description: 'Versorgung bei Harn- und Stuhlinkontinenz',
                icon: '🛡️',
                difficulty: 'medium',
                parentId: 'elimination',
                children: [
                  {
                    id: 'absorbent-aids',
                    name: 'Aufsaugende Hilfsmittel',
                    description: 'Windeln, Vorlagen und Einlagen',
                    icon: '🧷',
                    difficulty: 'easy',
                    parentId: 'incontinence-care'
                  },
                  {
                    id: 'drainage-systems',
                    name: 'Ableitende Systeme',
                    description: 'Katheter und Urinsammelsysteme',
                    icon: '🔗',
                    difficulty: 'medium',
                    parentId: 'incontinence-care'
                  },
                  {
                    id: 'skin-protection-incontinence',
                    name: 'Hautschutz',
                    description: 'Schutz der Haut vor Feuchtigkeit',
                    icon: '🧴',
                    difficulty: 'medium',
                    parentId: 'incontinence-care'
                  },
                  {
                    id: 'odor-management',
                    name: 'Geruchsmanagement',
                    description: 'Bekämpfung von unangenehmen Gerüchen',
                    icon: '💨',
                    difficulty: 'easy',
                    parentId: 'incontinence-care'
                  },
                  {
                    id: 'dignity-preservation',
                    name: 'Würde wahren',
                    description: 'Erhaltung der Patientenwürde bei Inkontinenz',
                    icon: '👑',
                    difficulty: 'medium',
                    parentId: 'incontinence-care'
                  }
                ]
              },
              {
                id: 'bladder-catheter',
                name: 'Blasenkatheter',
                description: 'Katheterversorgung und -pflege',
                icon: '🔗',
                difficulty: 'hard',
                parentId: 'elimination',
                children: [
                  {
                    id: 'transurethral-catheter',
                    name: 'Transurethraler Katheter',
                    description: 'Katheter durch die Harnröhre',
                    icon: '📏',
                    difficulty: 'hard',
                    parentId: 'bladder-catheter'
                  },
                  {
                    id: 'suprapubic-catheter',
                    name: 'Suprapubischer Katheter',
                    description: 'Katheter durch die Bauchdecke',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'bladder-catheter'
                  },
                  {
                    id: 'catheter-care',
                    name: 'Katheterpflege',
                    description: 'Pflege und Wartung von Blasenkathetern',
                    icon: '🧼',
                    difficulty: 'medium',
                    parentId: 'bladder-catheter'
                  },
                  {
                    id: 'infection-prevention-catheter',
                    name: 'Infektionsprophylaxe',
                    description: 'Vorbeugung von Harnwegsinfektionen',
                    icon: '🛡️',
                    difficulty: 'hard',
                    parentId: 'bladder-catheter'
                  },
                  {
                    id: 'catheter-complications',
                    name: 'Komplikationen',
                    description: 'Komplikationen der Katheterversorgung',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'bladder-catheter'
                  }
                ]
              },
              {
                id: 'stool-management',
                name: 'Stuhlmanagement',
                description: 'Management der Stuhlausscheidung',
                icon: '📊',
                difficulty: 'medium',
                parentId: 'elimination',
                children: [
                  {
                    id: 'constipation-prevention',
                    name: 'Obstipationsprophylaxe',
                    description: 'Vorbeugung von Verstopfung',
                    icon: '🌿',
                    difficulty: 'medium',
                    parentId: 'stool-management'
                  },
                  {
                    id: 'diarrhea-management',
                    name: 'Diarrhö-Management',
                    description: 'Behandlung von Durchfall',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'stool-management'
                  },
                  {
                    id: 'enema-suppository',
                    name: 'Einlauf/Klistier',
                    description: 'Darmspülungen und Zäpfchen',
                    icon: '💉',
                    difficulty: 'hard',
                    parentId: 'stool-management'
                  },
                  {
                    id: 'digital-evacuation',
                    name: 'Digitale Ausräumung',
                    description: 'Manuelle Entfernung von Stuhl',
                    icon: '🤏',
                    difficulty: 'hard',
                    parentId: 'stool-management'
                  },
                  {
                    id: 'stoma-care',
                    name: 'Stomapflege',
                    description: 'Pflege künstlicher Darmausgänge',
                    icon: '⭕',
                    difficulty: 'hard',
                    parentId: 'stool-management'
                  }
                ]
              }
            ]
          },
          {
            id: 'prophylaxis',
            name: 'Prophylaxen',
            description: 'Vorbeugende Maßnahmen in der Pflege',
            icon: '🛡️',
            difficulty: 'medium',
            parentId: 'basic-care',
            children: [
              {
                id: 'pressure-ulcer-prevention',
                name: 'Dekubitusprophylaxe',
                description: 'Vorbeugung von Druckgeschwüren',
                icon: '🛌',
                difficulty: 'hard',
                parentId: 'prophylaxis',
                children: [
                  {
                    id: 'risk-assessment-pressure',
                    name: 'Risikoassessment (Braden, Norton)',
                    description: 'Bewertung des Dekubitusrisikos',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'pressure-ulcer-prevention'
                  },
                  {
                    id: 'pressure-relief',
                    name: 'Druckentlastung',
                    description: 'Maßnahmen zur Druckreduzierung',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'pressure-ulcer-prevention'
                  },
                  {
                    id: 'skin-inspection-pressure',
                    name: 'Hautinspektion',
                    description: 'Regelmäßige Überprüfung der Haut',
                    icon: '👁️',
                    difficulty: 'easy',
                    parentId: 'pressure-ulcer-prevention'
                  },
                  {
                    id: 'movement-promotion-pressure',
                    name: 'Bewegungsförderung',
                    description: 'Mobilisation zur Dekubitusvorbeugung',
                    icon: '🏃',
                    difficulty: 'medium',
                    parentId: 'pressure-ulcer-prevention'
                  },
                  {
                    id: 'pressure-aids',
                    name: 'Hilfsmittel',
                    description: 'Spezielle Matratzen und Lagerungshilfen',
                    icon: '🛠️',
                    difficulty: 'medium',
                    parentId: 'pressure-ulcer-prevention'
                  }
                ]
              },
              {
                id: 'fall-prevention',
                name: 'Sturzprophylaxe',
                description: 'Vorbeugung von Stürzen',
                icon: '⚠️',
                difficulty: 'medium',
                parentId: 'prophylaxis',
                children: [
                  {
                    id: 'fall-risk-factors',
                    name: 'Sturzrisikofaktoren',
                    description: 'Identifikation von Risikofaktoren',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'fall-prevention'
                  },
                  {
                    id: 'fall-assessment',
                    name: 'Assessment (Tinetti, STRATIFY)',
                    description: 'Bewertung des Sturzrisikos',
                    icon: '📋',
                    difficulty: 'medium',
                    parentId: 'fall-prevention'
                  },
                  {
                    id: 'environment-design',
                    name: 'Umgebungsgestaltung',
                    description: 'Sichere Gestaltung der Umgebung',
                    icon: '🏠',
                    difficulty: 'easy',
                    parentId: 'fall-prevention'
                  },
                  {
                    id: 'strength-balance-training',
                    name: 'Kraft- und Balancetraining',
                    description: 'Training zur Sturzvorbeugung',
                    icon: '💪',
                    difficulty: 'medium',
                    parentId: 'fall-prevention'
                  },
                  {
                    id: 'hip-protectors',
                    name: 'Hüftprotektoren',
                    description: 'Schutzausrüstung für die Hüfte',
                    icon: '🦴',
                    difficulty: 'easy',
                    parentId: 'fall-prevention'
                  }
                ]
              },
              {
                id: 'thrombosis-prevention',
                name: 'Thromboseprophylaxe',
                description: 'Vorbeugung von Blutgerinnseln',
                icon: '🩸',
                difficulty: 'medium',
                parentId: 'prophylaxis',
                children: [
                  {
                    id: 'early-mobilization',
                    name: 'Frühmobilisation',
                    description: 'Frühe Bewegung zur Thrombosevorbeugung',
                    icon: '🚶',
                    difficulty: 'easy',
                    parentId: 'thrombosis-prevention'
                  },
                  {
                    id: 'compression-stockings',
                    name: 'Kompressionsstrümpfe',
                    description: 'Anlegen und Pflege von Kompressionsstrümpfen',
                    icon: '🧦',
                    difficulty: 'medium',
                    parentId: 'thrombosis-prevention'
                  },
                  {
                    id: 'medication-prophylaxis',
                    name: 'Medikamentöse Prophylaxe',
                    description: 'Verabreichung gerinnungshemmender Medikamente',
                    icon: '💊',
                    difficulty: 'hard',
                    parentId: 'thrombosis-prevention'
                  },
                  {
                    id: 'fluid-intake-thrombosis',
                    name: 'Flüssigkeitszufuhr',
                    description: 'Ausreichende Flüssigkeitsversorgung',
                    icon: '💧',
                    difficulty: 'easy',
                    parentId: 'thrombosis-prevention'
                  },
                  {
                    id: 'vein-exercises',
                    name: 'Venengymnastik',
                    description: 'Spezielle Übungen für die Venen',
                    icon: '🤸',
                    difficulty: 'easy',
                    parentId: 'thrombosis-prevention'
                  }
                ]
              },
              {
                id: 'pneumonia-prevention',
                name: 'Pneumonieprophylaxe',
                description: 'Vorbeugung von Lungenentzündung',
                icon: '🫁',
                difficulty: 'medium',
                parentId: 'prophylaxis',
                children: [
                  {
                    id: 'breathing-exercises',
                    name: 'Atemgymnastik',
                    description: 'Übungen zur Atemverbesserung',
                    icon: '🌬️',
                    difficulty: 'medium',
                    parentId: 'pneumonia-prevention'
                  },
                  {
                    id: 'positioning-pneumonia',
                    name: 'Lagerung',
                    description: 'Spezielle Lagerung zur Pneumonievorbeugung',
                    icon: '🛏️',
                    difficulty: 'medium',
                    parentId: 'pneumonia-prevention'
                  },
                  {
                    id: 'mobilization-pneumonia',
                    name: 'Mobilisation',
                    description: 'Bewegung zur Lungenfunktionsverbesserung',
                    icon: '🏃',
                    difficulty: 'easy',
                    parentId: 'pneumonia-prevention'
                  },
                  {
                    id: 'coughing-techniques',
                    name: 'Hustentechniken',
                    description: 'Effektive Hustentechniken',
                    icon: '🗣️',
                    difficulty: 'medium',
                    parentId: 'pneumonia-prevention'
                  },
                  {
                    id: 'inhalation',
                    name: 'Inhalation',
                    description: 'Inhalationstherapie',
                    icon: '💨',
                    difficulty: 'medium',
                    parentId: 'pneumonia-prevention'
                  }
                ]
              },
              {
                id: 'additional-prophylaxis',
                name: 'Weitere Prophylaxen',
                description: 'Zusätzliche vorbeugende Maßnahmen',
                icon: '➕',
                difficulty: 'medium',
                parentId: 'prophylaxis',
                children: [
                  {
                    id: 'contracture-prevention-additional',
                    name: 'Kontrakturenprophylaxe',
                    description: 'Vorbeugung von Gelenkversteifungen',
                    icon: '🔧',
                    difficulty: 'medium',
                    parentId: 'additional-prophylaxis'
                  },
                  {
                    id: 'intertrigo-prevention-additional',
                    name: 'Intertrigoprophylaxe',
                    description: 'Vorbeugung von Hautwolf in Hautfalten',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'additional-prophylaxis'
                  },
                  {
                    id: 'thrush-parotitis-prevention',
                    name: 'Soor-/Parotitisprophylaxe',
                    description: 'Vorbeugung von Mund- und Ohrspeicheldrüseninfektionen',
                    icon: '🦷',
                    difficulty: 'medium',
                    parentId: 'additional-prophylaxis'
                  },
                  {
                    id: 'cystitis-prevention',
                    name: 'Zystitis prophylaxe',
                    description: 'Vorbeugung von Blasenentzündungen',
                    icon: '🚽',
                    difficulty: 'medium',
                    parentId: 'additional-prophylaxis'
                  },
                  {
                    id: 'constipation-prevention-additional',
                    name: 'Obstipationsprophylaxe',
                    description: 'Vorbeugung von Verstopfung',
                    icon: '🌿',
                    difficulty: 'medium',
                    parentId: 'additional-prophylaxis'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'treatment-care',
        name: 'BEHANDLUNGSPFLEGE',
        description: 'Medizinische Behandlungspflege und therapeutische Maßnahmen',
        icon: '💊',
        difficulty: 'hard',
        parentId: 'nursing-techniques',
        children: [
          {
            id: 'medication-management',
            name: 'Medikamentenmanagement',
            description: 'Sichere Medikamentengabe und -verwaltung',
            icon: '💊',
            difficulty: 'hard',
            parentId: 'treatment-care',
            children: [
              {
                id: 'medication-administration',
                name: 'Medikamentengabe',
                description: 'Verschiedene Applikationsformen von Medikamenten',
                icon: '💉',
                difficulty: 'medium',
                parentId: 'medication-management',
                children: [
                  {
                    id: 'six-ten-r-rule',
                    name: '6-R-Regel/10-R-Regel',
                    description: 'Sicherheitsregeln für die Medikamentengabe',
                    icon: '✅',
                    difficulty: 'medium',
                    parentId: 'medication-administration'
                  },
                  {
                    id: 'oral-application',
                    name: 'Orale Applikation',
                    description: 'Verabreichung von Medikamenten über den Mund',
                    icon: '💊',
                    difficulty: 'easy',
                    parentId: 'medication-administration'
                  },
                  {
                    id: 'rectal-vaginal-application',
                    name: 'Rektale/vaginale Applikation',
                    description: 'Verabreichung über Rektum oder Vagina',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'medication-administration'
                  },
                  {
                    id: 'transdermal-application',
                    name: 'Transdermale Applikation',
                    description: 'Medikamentengabe über die Haut (Pflaster, Salben)',
                    icon: '🩹',
                    difficulty: 'easy',
                    parentId: 'medication-administration'
                  },
                  {
                    id: 'inhalation-application',
                    name: 'Inhalative Applikation',
                    description: 'Verabreichung über die Atemwege',
                    icon: '💨',
                    difficulty: 'medium',
                    parentId: 'medication-administration'
                  },
                  {
                    id: 'eye-drops-ointments',
                    name: 'Augentropfen/Salben',
                    description: 'Applikation von Augentropfen und -salben',
                    icon: '👁️',
                    difficulty: 'easy',
                    parentId: 'medication-administration'
                  }
                ]
              },
              {
                id: 'injections',
                name: 'Injektionen',
                description: 'Parenterale Medikamentengabe durch Injektionen',
                icon: '💉',
                difficulty: 'hard',
                parentId: 'medication-management',
                children: [
                  {
                    id: 'subcutaneous',
                    name: 'Subkutan (s.c.)',
                    description: 'Injektion ins Unterhautfettgewebe',
                    icon: '💉',
                    difficulty: 'medium',
                    parentId: 'injections',
                    children: [
                      {
                        id: 'sc-injection-sites',
                        name: 'Injektionsorte',
                        description: 'Geeignete Stellen für subkutane Injektionen',
                        icon: '📍',
                        difficulty: 'easy',
                        parentId: 'subcutaneous'
                      },
                      {
                        id: 'insulin-application',
                        name: 'Insulin-Applikation',
                        description: 'Spezielle Techniken für Insulininjektionen',
                        icon: '🩸',
                        difficulty: 'medium',
                        parentId: 'subcutaneous'
                      },
                      {
                        id: 'heparin-injection',
                        name: 'Heparin-Injektion',
                        description: 'Besonderheiten bei Antikoagulantien',
                        icon: '💊',
                        difficulty: 'medium',
                        parentId: 'subcutaneous'
                      },
                      {
                        id: 'sc-complications',
                        name: 'Komplikationen',
                        description: 'Mögliche Komplikationen und deren Vermeidung',
                        icon: '⚠️',
                        difficulty: 'medium',
                        parentId: 'subcutaneous'
                      }
                    ]
                  },
                  {
                    id: 'intramuscular',
                    name: 'Intramuskulär (i.m.)',
                    description: 'Injektion in den Muskel',
                    icon: '💪',
                    difficulty: 'hard',
                    parentId: 'injections',
                    children: [
                      {
                        id: 'im-injection-sites',
                        name: 'Injektionsorte (ventrogluteal)',
                        description: 'Sichere Injektionsstellen für i.m.-Injektionen',
                        icon: '📍',
                        difficulty: 'medium',
                        parentId: 'intramuscular'
                      },
                      {
                        id: 'z-technique',
                        name: 'Z-Technik',
                        description: 'Spezielle Injektionstechnik zur Vermeidung von Leckage',
                        icon: '🔄',
                        difficulty: 'hard',
                        parentId: 'intramuscular'
                      },
                      {
                        id: 'aspiration-control',
                        name: 'Aspirationskontrolle',
                        description: 'Prüfung auf intravasale Lage',
                        icon: '🔍',
                        difficulty: 'medium',
                        parentId: 'intramuscular'
                      },
                      {
                        id: 'im-contraindications',
                        name: 'Kontraindikationen',
                        description: 'Situationen, in denen i.m.-Injektionen vermieden werden sollten',
                        icon: '🚫',
                        difficulty: 'medium',
                        parentId: 'intramuscular'
                      }
                    ]
                  },
                  {
                    id: 'intradermal',
                    name: 'Intradermal (i.d.)',
                    description: 'Injektion in die Haut',
                    icon: '🔬',
                    difficulty: 'medium',
                    parentId: 'injections',
                    children: [
                      {
                        id: 'tuberculin-test',
                        name: 'Tuberkulintest',
                        description: 'Durchführung des Tuberkulin-Hauttests',
                        icon: '🔬',
                        difficulty: 'medium',
                        parentId: 'intradermal'
                      },
                      {
                        id: 'allergy-testing',
                        name: 'Allergietestung',
                        description: 'Intrakutane Allergietests',
                        icon: '🌿',
                        difficulty: 'medium',
                        parentId: 'intradermal'
                      }
                    ]
                  },
                  {
                    id: 'intravenous',
                    name: 'Intravenös (i.v.)',
                    description: 'Injektion in die Vene',
                    icon: '🩸',
                    difficulty: 'hard',
                    parentId: 'injections',
                    children: [
                      {
                        id: 'venipuncture',
                        name: 'Venenpunktion',
                        description: 'Technik der Venenpunktion',
                        icon: '💉',
                        difficulty: 'hard',
                        parentId: 'intravenous'
                      },
                      {
                        id: 'peripheral-venous-catheter',
                        name: 'Venenverweilkanüle',
                        description: 'Anlage und Pflege peripherer Venenkatheter',
                        icon: '🔗',
                        difficulty: 'hard',
                        parentId: 'intravenous'
                      },
                      {
                        id: 'infusion-management',
                        name: 'Infusionsmanagement',
                        description: 'Verwaltung und Überwachung von Infusionen',
                        icon: '💧',
                        difficulty: 'medium',
                        parentId: 'intravenous'
                      },
                      {
                        id: 'iv-complications',
                        name: 'Komplikationen',
                        description: 'Erkennung und Management von i.v.-Komplikationen',
                        icon: '⚠️',
                        difficulty: 'hard',
                        parentId: 'intravenous'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'infusion-therapy',
                name: 'Infusionstherapie',
                description: 'Management von Infusionen und Kathetersystemen',
                icon: '💧',
                difficulty: 'hard',
                parentId: 'medication-management',
                children: [
                  {
                    id: 'peripheral-venous-catheter-pvk',
                    name: 'Peripherer Venenkatheter (PVK)',
                    description: 'Anlage und Pflege peripherer Zugänge',
                    icon: '💉',
                    difficulty: 'medium',
                    parentId: 'infusion-therapy'
                  },
                  {
                    id: 'central-venous-catheter',
                    name: 'Zentraler Venenkatheter (ZVK)',
                    description: 'Management zentralvenöser Zugänge',
                    icon: '🔗',
                    difficulty: 'hard',
                    parentId: 'infusion-therapy'
                  },
                  {
                    id: 'port-systems',
                    name: 'Port-Systeme',
                    description: 'Handhabung und Pflege von Portsystemen',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'infusion-therapy'
                  },
                  {
                    id: 'infusion-pumps',
                    name: 'Infusionspumpen',
                    description: 'Bedienung verschiedener Pumpsysteme',
                    icon: '🔌',
                    difficulty: 'medium',
                    parentId: 'infusion-therapy'
                  },
                  {
                    id: 'complication-management',
                    name: 'Komplikationsmanagement',
                    description: 'Erkennung und Behandlung von Infusionskomplikationen',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'infusion-therapy'
                  }
                ]
              },
              {
                id: 'pain-management',
                name: 'Schmerzmanagement',
                description: 'Umfassende Schmerzerfassung und -behandlung',
                icon: '🩹',
                difficulty: 'hard',
                parentId: 'medication-management',
                children: [
                  {
                    id: 'pain-assessment',
                    name: 'Schmerzassessment',
                    description: 'Systematische Schmerzerfassung',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'pain-management',
                    children: [
                      {
                        id: 'vas-nrs',
                        name: 'VAS/NRS',
                        description: 'Visuelle Analogskala und Numerische Rating-Skala',
                        icon: '📏',
                        difficulty: 'easy',
                        parentId: 'pain-assessment'
                      },
                      {
                        id: 'pain-diary',
                        name: 'Schmerztagebuch',
                        description: 'Dokumentation des Schmerzverlaufs',
                        icon: '📔',
                        difficulty: 'easy',
                        parentId: 'pain-assessment'
                      },
                      {
                        id: 'besd-dementia',
                        name: 'BESD (bei Demenz)',
                        description: 'Beurteilung von Schmerzen bei Demenz',
                        icon: '🧠',
                        difficulty: 'hard',
                        parentId: 'pain-assessment'
                      },
                      {
                        id: 'pain-types',
                        name: 'Schmerzarten',
                        description: 'Unterscheidung verschiedener Schmerztypen',
                        icon: '🔍',
                        difficulty: 'medium',
                        parentId: 'pain-assessment'
                      }
                    ]
                  },
                  {
                    id: 'medication-therapy',
                    name: 'Medikamentöse Therapie',
                    description: 'Pharmakologische Schmerzbehandlung',
                    icon: '💊',
                    difficulty: 'hard',
                    parentId: 'pain-management',
                    children: [
                      {
                        id: 'who-step-scheme',
                        name: 'WHO-Stufenschema',
                        description: 'Stufenweise Schmerztherapie nach WHO',
                        icon: '📈',
                        difficulty: 'medium',
                        parentId: 'medication-therapy'
                      },
                      {
                        id: 'basic-analgesia',
                        name: 'Basisanalgesie',
                        description: 'Grundversorgung mit Schmerzmitteln',
                        icon: '💉',
                        difficulty: 'medium',
                        parentId: 'medication-therapy'
                      },
                      {
                        id: 'as-needed-medication',
                        name: 'Bedarfsmedikation',
                        description: 'Schmerzmittel bei Bedarf',
                        icon: '🔔',
                        difficulty: 'medium',
                        parentId: 'medication-therapy'
                      },
                      {
                        id: 'pca-pump',
                        name: 'PCA-Pumpe',
                        description: 'Patientenkontrollierte Analgesie',
                        icon: '🎛️',
                        difficulty: 'hard',
                        parentId: 'medication-therapy'
                      }
                    ]
                  },
                  {
                    id: 'non-medication-measures',
                    name: 'Nicht-medikamentöse Maßnahmen',
                    description: 'Alternative Schmerzlinderungsmethoden',
                    icon: '🌿',
                    difficulty: 'medium',
                    parentId: 'pain-management',
                    children: [
                      {
                        id: 'positioning-pain',
                        name: 'Lagerung',
                        description: 'Schmerzlindernde Lagerungstechniken',
                        icon: '🛏️',
                        difficulty: 'easy',
                        parentId: 'non-medication-measures'
                      },
                      {
                        id: 'heat-cold-therapy',
                        name: 'Wärme-/Kältetherapie',
                        description: 'Thermische Anwendungen zur Schmerzlinderung',
                        icon: '🌡️',
                        difficulty: 'easy',
                        parentId: 'non-medication-measures'
                      },
                      {
                        id: 'relaxation-techniques',
                        name: 'Entspannungstechniken',
                        description: 'Progressive Muskelentspannung, Atemübungen',
                        icon: '🧘',
                        difficulty: 'medium',
                        parentId: 'non-medication-measures'
                      },
                      {
                        id: 'distraction',
                        name: 'Ablenkung',
                        description: 'Ablenkungsstrategien zur Schmerzreduktion',
                        icon: '🎯',
                        difficulty: 'easy',
                        parentId: 'non-medication-measures'
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
  }
]

export default nursingTechniquesCategories