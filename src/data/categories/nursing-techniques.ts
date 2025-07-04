import { Category } from '../../types/Category'

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
          },
          {
            id: 'wound-management',
            name: 'Wundmanagement',
            description: 'Professionelle Wundversorgung und -behandlung',
            icon: '🩹',
            difficulty: 'hard',
            parentId: 'treatment-care',
            children: [
              {
                id: 'wound-assessment',
                name: 'Wundbeurteilung',
                description: 'Systematische Bewertung von Wunden',
                icon: '🔍',
                difficulty: 'medium',
                parentId: 'wound-management',
                children: [
                  {
                    id: 'wound-type',
                    name: 'Wundart',
                    description: 'Klassifikation verschiedener Wundarten',
                    icon: '📋',
                    difficulty: 'medium',
                    parentId: 'wound-assessment'
                  },
                  {
                    id: 'wound-stage',
                    name: 'Wundstadium',
                    description: 'Bestimmung des Heilungsstadiums',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'wound-assessment'
                  },
                  {
                    id: 'wound-size-depth',
                    name: 'Wundgröße/-tiefe',
                    description: 'Messung von Ausdehnung und Tiefe',
                    icon: '📏',
                    difficulty: 'easy',
                    parentId: 'wound-assessment'
                  },
                  {
                    id: 'exudate',
                    name: 'Exsudat',
                    description: 'Beurteilung von Wundsekretion',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'wound-assessment'
                  },
                  {
                    id: 'wound-edge-surrounding',
                    name: 'Wundrand/-umgebung',
                    description: 'Bewertung von Wundrand und umgebendem Gewebe',
                    icon: '⭕',
                    difficulty: 'medium',
                    parentId: 'wound-assessment'
                  },
                  {
                    id: 'photo-documentation',
                    name: 'Fotodokumentation',
                    description: 'Standardisierte fotografische Dokumentation',
                    icon: '📸',
                    difficulty: 'easy',
                    parentId: 'wound-assessment'
                  }
                ]
              },
              {
                id: 'wound-care',
                name: 'Wundversorgung',
                description: 'Praktische Wundbehandlung',
                icon: '🏥',
                difficulty: 'hard',
                parentId: 'wound-management',
                children: [
                  {
                    id: 'wound-cleaning',
                    name: 'Wundreinigung',
                    description: 'Reinigung und Spülung von Wunden',
                    icon: '🚿',
                    difficulty: 'medium',
                    parentId: 'wound-care'
                  },
                  {
                    id: 'debridement',
                    name: 'Débridement',
                    description: 'Entfernung von nekrotischem Gewebe',
                    icon: '🔪',
                    difficulty: 'hard',
                    parentId: 'wound-care'
                  },
                  {
                    id: 'modern-wound-dressings',
                    name: 'Moderne Wundauflagen',
                    description: 'Anwendung moderner Wundversorgungsmaterialien',
                    icon: '🩹',
                    difficulty: 'medium',
                    parentId: 'wound-care'
                  },
                  {
                    id: 'phase-appropriate-care',
                    name: 'Phasengerechte Versorgung',
                    description: 'Anpassung der Versorgung an Heilungsphase',
                    icon: '📈',
                    difficulty: 'hard',
                    parentId: 'wound-care'
                  },
                  {
                    id: 'dressing-change',
                    name: 'Verbandwechsel',
                    description: 'Durchführung aseptischer Verbandwechsel',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'wound-care'
                  }
                ]
              },
              {
                id: 'special-wounds',
                name: 'Spezielle Wunden',
                description: 'Versorgung spezieller Wundarten',
                icon: '⚕️',
                difficulty: 'hard',
                parentId: 'wound-management',
                children: [
                  {
                    id: 'chronic-wounds',
                    name: 'Chronische Wunden',
                    description: 'Management langwieriger Wundheilungsstörungen',
                    icon: '⏳',
                    difficulty: 'hard',
                    parentId: 'special-wounds'
                  },
                  {
                    id: 'pressure-ulcer',
                    name: 'Dekubitus',
                    description: 'Behandlung von Druckgeschwüren',
                    icon: '🛏️',
                    difficulty: 'hard',
                    parentId: 'special-wounds'
                  },
                  {
                    id: 'leg-ulcer',
                    name: 'Ulcus cruris',
                    description: 'Versorgung von Unterschenkelgeschwüren',
                    icon: '🦵',
                    difficulty: 'hard',
                    parentId: 'special-wounds'
                  },
                  {
                    id: 'diabetic-foot-syndrome',
                    name: 'Diabetisches Fußsyndrom',
                    description: 'Spezialversorgung bei Diabetes',
                    icon: '🦶',
                    difficulty: 'hard',
                    parentId: 'special-wounds'
                  },
                  {
                    id: 'tumor-wounds',
                    name: 'Tumorwunden',
                    description: 'Palliative Wundversorgung bei Tumoren',
                    icon: '🏥',
                    difficulty: 'hard',
                    parentId: 'special-wounds'
                  }
                ]
              },
              {
                id: 'wound-healing',
                name: 'Wundheilung',
                description: 'Physiologie und Pathologie der Wundheilung',
                icon: '🌱',
                difficulty: 'medium',
                parentId: 'wound-management',
                children: [
                  {
                    id: 'primary-healing',
                    name: 'Primäre Wundheilung',
                    description: 'Direkte Wundheilung ohne Komplikationen',
                    icon: '✨',
                    difficulty: 'easy',
                    parentId: 'wound-healing'
                  },
                  {
                    id: 'secondary-healing',
                    name: 'Sekundäre Wundheilung',
                    description: 'Heilung mit Gewebeneubildung',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'wound-healing'
                  },
                  {
                    id: 'healing-phases',
                    name: 'Heilungsphasen',
                    description: 'Die Phasen der Wundheilung',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'wound-healing'
                  },
                  {
                    id: 'disturbing-factors',
                    name: 'Störfaktoren',
                    description: 'Faktoren, die Heilung beeinträchtigen',
                    icon: '⚠️',
                    difficulty: 'medium',
                    parentId: 'wound-healing'
                  },
                  {
                    id: 'healing-complications',
                    name: 'Komplikationen',
                    description: 'Wundheilungsstörungen und deren Management',
                    icon: '🚨',
                    difficulty: 'hard',
                    parentId: 'wound-healing'
                  }
                ]
              }
            ]
          },
          {
            id: 'vital-signs-monitoring',
            name: 'Vitalzeichenkontrolle',
            description: 'Überwachung lebenswichtiger Parameter',
            icon: '📊',
            difficulty: 'medium',
            parentId: 'treatment-care',
            children: [
              {
                id: 'blood-pressure',
                name: 'Blutdruck',
                description: 'Blutdruckmessung und -interpretation',
                icon: '🩺',
                difficulty: 'medium',
                parentId: 'vital-signs-monitoring',
                children: [
                  {
                    id: 'manual-measurement',
                    name: 'Manuelle Messung',
                    description: 'Messung mit Stethoskop und Manschette',
                    icon: '👂',
                    difficulty: 'medium',
                    parentId: 'blood-pressure'
                  },
                  {
                    id: 'automatic-measurement',
                    name: 'Automatische Messung',
                    description: 'Messung mit digitalen Geräten',
                    icon: '🔌',
                    difficulty: 'easy',
                    parentId: 'blood-pressure'
                  },
                  {
                    id: '24h-blood-pressure',
                    name: '24h-RR',
                    description: 'Langzeitblutdruckmessung',
                    icon: '⏰',
                    difficulty: 'medium',
                    parentId: 'blood-pressure'
                  },
                  {
                    id: 'orthostatic-test',
                    name: 'Orthostase-Test',
                    description: 'Blutdruck in verschiedenen Körperpositionen',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'blood-pressure'
                  },
                  {
                    id: 'error-sources',
                    name: 'Fehlerquellen',
                    description: 'Häufige Messfehler und deren Vermeidung',
                    icon: '⚠️',
                    difficulty: 'easy',
                    parentId: 'blood-pressure'
                  }
                ]
              },
              {
                id: 'pulse',
                name: 'Puls',
                description: 'Pulsmessung und -beurteilung',
                icon: '💓',
                difficulty: 'easy',
                parentId: 'vital-signs-monitoring',
                children: [
                  {
                    id: 'palpation',
                    name: 'Palpation',
                    description: 'Tastbare Pulsmessung',
                    icon: '👆',
                    difficulty: 'easy',
                    parentId: 'pulse'
                  },
                  {
                    id: 'pulse-characteristics',
                    name: 'Pulseigenschaften',
                    description: 'Frequenz, Rhythmus, Qualität',
                    icon: '📈',
                    difficulty: 'medium',
                    parentId: 'pulse'
                  },
                  {
                    id: 'pulse-deficit',
                    name: 'Pulsdefizit',
                    description: 'Differenz zwischen Herz- und Pulsfrequenz',
                    icon: '⚠️',
                    difficulty: 'medium',
                    parentId: 'pulse'
                  },
                  {
                    id: 'peripheral-pulses',
                    name: 'Periphere Pulse',
                    description: 'Prüfung verschiedener Pulstaststellen',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'pulse'
                  }
                ]
              },
              {
                id: 'respiration',
                name: 'Atmung',
                description: 'Atemkontrolle und -überwachung',
                icon: '🫁',
                difficulty: 'medium',
                parentId: 'vital-signs-monitoring',
                children: [
                  {
                    id: 'respiratory-rate',
                    name: 'Atemfrequenz',
                    description: 'Zählung der Atemzüge',
                    icon: '🔢',
                    difficulty: 'easy',
                    parentId: 'respiration'
                  },
                  {
                    id: 'breathing-quality',
                    name: 'Atemqualität',
                    description: 'Beurteilung von Atemtiefe und -muster',
                    icon: '🌊',
                    difficulty: 'medium',
                    parentId: 'respiration'
                  },
                  {
                    id: 'spo2-measurement',
                    name: 'SpO2-Messung',
                    description: 'Pulsoxymetrie zur Sauerstoffsättigung',
                    icon: '📊',
                    difficulty: 'easy',
                    parentId: 'respiration'
                  },
                  {
                    id: 'peak-flow',
                    name: 'Peak-Flow',
                    description: 'Messung der maximalen Ausatemgeschwindigkeit',
                    icon: '💨',
                    difficulty: 'medium',
                    parentId: 'respiration'
                  }
                ]
              },
              {
                id: 'temperature',
                name: 'Temperatur',
                description: 'Körpertemperaturmessung',
                icon: '🌡️',
                difficulty: 'easy',
                parentId: 'vital-signs-monitoring',
                children: [
                  {
                    id: 'measurement-sites',
                    name: 'Messorte',
                    description: 'Verschiedene Körperstellen zur Messung',
                    icon: '📍',
                    difficulty: 'easy',
                    parentId: 'temperature'
                  },
                  {
                    id: 'fever-progression',
                    name: 'Fieberverlauf',
                    description: 'Dokumentation und Interpretation',
                    icon: '📈',
                    difficulty: 'medium',
                    parentId: 'temperature'
                  },
                  {
                    id: 'hypothermia',
                    name: 'Hypothermie',
                    description: 'Erkennung und Management von Unterkühlung',
                    icon: '❄️',
                    difficulty: 'medium',
                    parentId: 'temperature'
                  },
                  {
                    id: 'fever-management',
                    name: 'Fiebermanagement',
                    description: 'Maßnahmen bei erhöhter Temperatur',
                    icon: '🔥',
                    difficulty: 'medium',
                    parentId: 'temperature'
                  }
                ]
              },
              {
                id: 'additional-parameters',
                name: 'Weitere Parameter',
                description: 'Zusätzliche Vitalwerte',
                icon: '➕',
                difficulty: 'medium',
                parentId: 'vital-signs-monitoring',
                children: [
                  {
                    id: 'blood-glucose',
                    name: 'Blutzucker',
                    description: 'Blutzuckermessung und -kontrolle',
                    icon: '🩸',
                    difficulty: 'easy',
                    parentId: 'additional-parameters'
                  },
                  {
                    id: 'weight-bmi',
                    name: 'Gewicht/BMI',
                    description: 'Gewichtskontrolle und Body-Mass-Index',
                    icon: '⚖️',
                    difficulty: 'easy',
                    parentId: 'additional-parameters'
                  },
                  {
                    id: 'pain-scale',
                    name: 'Schmerzskala',
                    description: 'Schmerzerfassung mit Skalen',
                    icon: '📏',
                    difficulty: 'easy',
                    parentId: 'additional-parameters'
                  },
                  {
                    id: 'consciousness-gcs',
                    name: 'Bewusstsein (GCS)',
                    description: 'Glasgow Coma Scale zur Bewusstseinsbeurteilung',
                    icon: '🧠',
                    difficulty: 'hard',
                    parentId: 'additional-parameters'
                  }
                ]
              }
            ]
          },
          {
            id: 'special-nursing-techniques',
            name: 'Spezielle Pflegetechniken',
            description: 'Fortgeschrittene pflegerische Verfahren',
            icon: '🔧',
            difficulty: 'hard',
            parentId: 'treatment-care',
            children: [
              {
                id: 'tubes-catheters',
                name: 'Sonden & Katheter',
                description: 'Management verschiedener Sonden und Katheter',
                icon: '🔗',
                difficulty: 'hard',
                parentId: 'special-nursing-techniques',
                children: [
                  {
                    id: 'nasogastric-tube',
                    name: 'Magensonde',
                    description: 'Legen und Pflege von Magensonden',
                    icon: '📏',
                    difficulty: 'hard',
                    parentId: 'tubes-catheters'
                  },
                  {
                    id: 'peg-care',
                    name: 'PEG-Pflege',
                    description: 'Pflege perkutaner endoskopischer Gastrostomie',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'tubes-catheters'
                  },
                  {
                    id: 'bladder-catheter-special',
                    name: 'Blasenkatheter',
                    description: 'Anlage und Pflege von Blasenkathetern',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'tubes-catheters'
                  },
                  {
                    id: 'nephrostomy',
                    name: 'Nephrostomie',
                    description: 'Pflege von Nierenfisteln',
                    icon: '🏥',
                    difficulty: 'hard',
                    parentId: 'tubes-catheters'
                  },
                  {
                    id: 'drains',
                    name: 'Drainagen',
                    description: 'Management verschiedener Drainagesysteme',
                    icon: '🚰',
                    difficulty: 'medium',
                    parentId: 'tubes-catheters'
                  }
                ]
              },
              {
                id: 'stoma-care',
                name: 'Stomapflege',
                description: 'Versorgung künstlicher Körperöffnungen',
                icon: '⭕',
                difficulty: 'hard',
                parentId: 'special-nursing-techniques',
                children: [
                  {
                    id: 'colostomy',
                    name: 'Kolostomie',
                    description: 'Pflege eines Dickdarmausgangs',
                    icon: '🔴',
                    difficulty: 'hard',
                    parentId: 'stoma-care'
                  },
                  {
                    id: 'ileostomy',
                    name: 'Ileostomie',
                    description: 'Pflege eines Dünndarmausgangs',
                    icon: '🟠',
                    difficulty: 'hard',
                    parentId: 'stoma-care'
                  },
                  {
                    id: 'urostomy',
                    name: 'Urostomie',
                    description: 'Pflege einer Harnableitung',
                    icon: '🟡',
                    difficulty: 'hard',
                    parentId: 'stoma-care'
                  },
                  {
                    id: 'stoma-supplies',
                    name: 'Stomaversorgung',
                    description: 'Materialien und Versorgungstechniken',
                    icon: '🩹',
                    difficulty: 'medium',
                    parentId: 'stoma-care'
                  },
                  {
                    id: 'stoma-complications',
                    name: 'Komplikationen',
                    description: 'Erkennung und Management von Stomakomplikationen',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'stoma-care'
                  }
                ]
              },
              {
                id: 'oxygen-therapy',
                name: 'Sauerstofftherapie',
                description: 'Verabreichung und Überwachung von Sauerstoff',
                icon: '💨',
                difficulty: 'medium',
                parentId: 'special-nursing-techniques',
                children: [
                  {
                    id: 'nasal-cannula',
                    name: 'Nasenbrille',
                    description: 'Low-Flow-Sauerstoffgabe',
                    icon: '👃',
                    difficulty: 'easy',
                    parentId: 'oxygen-therapy'
                  },
                  {
                    id: 'oxygen-mask',
                    name: 'Maske',
                    description: 'Verschiedene Maskentypen',
                    icon: '😷',
                    difficulty: 'medium',
                    parentId: 'oxygen-therapy'
                  },
                  {
                    id: 'high-flow',
                    name: 'High-Flow',
                    description: 'Hochdosierte Sauerstofftherapie',
                    icon: '🌊',
                    difficulty: 'hard',
                    parentId: 'oxygen-therapy'
                  },
                  {
                    id: 'humidification',
                    name: 'Befeuchtung',
                    description: 'Atemgasbefeuchtung',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'oxygen-therapy'
                  },
                  {
                    id: 'oxygen-safety',
                    name: 'Sicherheit',
                    description: 'Sicherheitsaspekte bei Sauerstofftherapie',
                    icon: '🔥',
                    difficulty: 'medium',
                    parentId: 'oxygen-therapy'
                  }
                ]
              },
              {
                id: 'airway-management',
                name: 'Atemwegsmanagement',
                description: 'Sicherung und Pflege der Atemwege',
                icon: '🫁',
                difficulty: 'hard',
                parentId: 'special-nursing-techniques',
                children: [
                  {
                    id: 'inhalation-therapy',
                    name: 'Inhalation',
                    description: 'Verabreichung von Medikamenten per Inhalation',
                    icon: '💨',
                    difficulty: 'medium',
                    parentId: 'airway-management'
                  },
                  {
                    id: 'suctioning',
                    name: 'Absaugen',
                    description: 'Endotracheales und orales Absaugen',
                    icon: '🔌',
                    difficulty: 'hard',
                    parentId: 'airway-management'
                  },
                  {
                    id: 'tracheostomy-care',
                    name: 'Tracheostomapflege',
                    description: 'Pflege von Tracheostoma und Kanüle',
                    icon: '⭕',
                    difficulty: 'hard',
                    parentId: 'airway-management'
                  },
                  {
                    id: 'niv-management',
                    name: 'NIV-Management',
                    description: 'Nicht-invasive Beatmung',
                    icon: '😷',
                    difficulty: 'hard',
                    parentId: 'airway-management'
                  },
                  {
                    id: 'emergency-management',
                    name: 'Notfallmanagement',
                    description: 'Notfallmaßnahmen bei Atemwegsproblemen',
                    icon: '🚨',
                    difficulty: 'hard',
                    parentId: 'airway-management'
                  }
                ]
              }
            ]
          },
          {
            id: 'diagnostic-procedures',
            name: 'Diagnostische Maßnahmen',
            description: 'Durchführung diagnostischer Verfahren',
            icon: '🔬',
            difficulty: 'medium',
            parentId: 'treatment-care',
            children: [
              {
                id: 'blood-collection',
                name: 'Blutentnahme',
                description: 'Verschiedene Blutentnahmetechniken',
                icon: '💉',
                difficulty: 'medium',
                parentId: 'diagnostic-procedures',
                children: [
                  {
                    id: 'venous-blood-collection',
                    name: 'Venöse Blutentnahme',
                    description: 'Standardblutentnahme aus der Vene',
                    icon: '🩸',
                    difficulty: 'medium',
                    parentId: 'blood-collection'
                  },
                  {
                    id: 'capillary-blood-collection',
                    name: 'Kapilläre Blutentnahme',
                    description: 'Blutentnahme aus der Fingerbeere',
                    icon: '👆',
                    difficulty: 'easy',
                    parentId: 'blood-collection'
                  },
                  {
                    id: 'arterial-blood-collection',
                    name: 'Arterielle Blutentnahme',
                    description: 'Blutgasanalyse aus der Arterie',
                    icon: '🔴',
                    difficulty: 'hard',
                    parentId: 'blood-collection'
                  },
                  {
                    id: 'blood-culture',
                    name: 'Blutkultur',
                    description: 'Sterile Entnahme für Bakteriennachweis',
                    icon: '🧫',
                    difficulty: 'hard',
                    parentId: 'blood-collection'
                  },
                  {
                    id: 'preanalytics',
                    name: 'Präanalytik',
                    description: 'Vorbereitung und Handling von Proben',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'blood-collection'
                  }
                ]
              },
              {
                id: 'urine-diagnostics',
                name: 'Urindiagnostik',
                description: 'Gewinnung und Analyse von Urinproben',
                icon: '🧪',
                difficulty: 'easy',
                parentId: 'diagnostic-procedures',
                children: [
                  {
                    id: 'midstream-urine',
                    name: 'Mittelstrahlurin',
                    description: 'Standardtechnik der Uringewinnung',
                    icon: '💧',
                    difficulty: 'easy',
                    parentId: 'urine-diagnostics'
                  },
                  {
                    id: 'catheter-urine',
                    name: 'Katheterurin',
                    description: 'Uringewinnung über Katheter',
                    icon: '🔗',
                    difficulty: 'medium',
                    parentId: 'urine-diagnostics'
                  },
                  {
                    id: '24h-urine-collection',
                    name: '24h-Sammelurin',
                    description: 'Sammlung über 24 Stunden',
                    icon: '⏰',
                    difficulty: 'medium',
                    parentId: 'urine-diagnostics'
                  },
                  {
                    id: 'urine-dipstick',
                    name: 'Urin-Stix',
                    description: 'Schnelltest mit Teststreifen',
                    icon: '📊',
                    difficulty: 'easy',
                    parentId: 'urine-diagnostics'
                  },
                  {
                    id: 'urine-culture',
                    name: 'Urinkultur',
                    description: 'Bakteriologische Untersuchung',
                    icon: '🦠',
                    difficulty: 'medium',
                    parentId: 'urine-diagnostics'
                  }
                ]
              },
              {
                id: 'stool-diagnostics',
                name: 'Stuhldiagnostik',
                description: 'Stuhlprobengewinnung und -analyse',
                icon: '🔬',
                difficulty: 'medium',
                parentId: 'diagnostic-procedures',
                children: [
                  {
                    id: 'stool-sample',
                    name: 'Stuhlprobe',
                    description: 'Standardgewinnung von Stuhlproben',
                    icon: '🥄',
                    difficulty: 'easy',
                    parentId: 'stool-diagnostics'
                  },
                  {
                    id: 'hemoccult-test',
                    name: 'Hämoccult-Test',
                    description: 'Test auf okkultes Blut im Stuhl',
                    icon: '🩸',
                    difficulty: 'easy',
                    parentId: 'stool-diagnostics'
                  },
                  {
                    id: 'stool-culture',
                    name: 'Stuhlkultur',
                    description: 'Bakteriologische Stuhluntersuchung',
                    icon: '🧫',
                    difficulty: 'medium',
                    parentId: 'stool-diagnostics'
                  },
                  {
                    id: 'calprotectin',
                    name: 'Calprotectin',
                    description: 'Entzündungsmarker im Stuhl',
                    icon: '🔥',
                    difficulty: 'medium',
                    parentId: 'stool-diagnostics'
                  }
                ]
              },
              {
                id: 'further-diagnostics',
                name: 'Weitere Diagnostik',
                description: 'Zusätzliche diagnostische Verfahren',
                icon: '➕',
                difficulty: 'medium',
                parentId: 'diagnostic-procedures',
                children: [
                  {
                    id: 'sputum-collection',
                    name: 'Sputumgewinnung',
                    description: 'Gewinnung von Auswurf zur Analyse',
                    icon: '🫁',
                    difficulty: 'medium',
                    parentId: 'further-diagnostics'
                  },
                  {
                    id: 'swabs',
                    name: 'Abstriche',
                    description: 'Verschiedene Abstrichtechniken',
                    icon: '🦠',
                    difficulty: 'easy',
                    parentId: 'further-diagnostics'
                  },
                  {
                    id: 'ecg-recording',
                    name: 'EKG-Ableitung',
                    description: 'Durchführung eines Elektrokardiogramms',
                    icon: '💓',
                    difficulty: 'medium',
                    parentId: 'further-diagnostics'
                  },
                  {
                    id: 'blood-glucose-profile',
                    name: 'Blutzuckerprofil',
                    description: 'Erstellung von Blutzuckertagesprofilen',
                    icon: '📈',
                    difficulty: 'easy',
                    parentId: 'further-diagnostics'
                  },
                  {
                    id: 'function-tests',
                    name: 'Funktionstests',
                    description: 'Verschiedene Funktionsprüfungen',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'further-diagnostics'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'special-care-situations',
        name: 'SPEZIELLE PFLEGESITUATIONEN',
        description: 'Pflege in besonderen und kritischen Situationen',
        icon: '🏃',
        difficulty: 'hard',
        parentId: 'nursing-techniques',
        children: [
          {
            id: 'emergency-care',
            name: 'Notfallpflege',
            description: 'Pflegerische Maßnahmen in Notfallsituationen',
            icon: '🚨',
            difficulty: 'hard',
            parentId: 'special-care-situations',
            children: [
              {
                id: 'emergency-recognition',
                name: 'Notfallerkennung',
                description: 'Systematische Erkennung von Notfallsituationen',
                icon: '🔍',
                difficulty: 'hard',
                parentId: 'emergency-care',
                children: [
                  {
                    id: 'abcde-schema',
                    name: 'ABCDE-Schema',
                    description: 'Systematisches Vorgehen zur Notfallbeurteilung',
                    icon: '📋',
                    difficulty: 'hard',
                    parentId: 'emergency-recognition'
                  },
                  {
                    id: 'vital-signs-emergency',
                    name: 'Vitalzeichenkontrolle',
                    description: 'Schnelle Erfassung vitaler Parameter',
                    icon: '💓',
                    difficulty: 'medium',
                    parentId: 'emergency-recognition'
                  },
                  {
                    id: 'consciousness-check',
                    name: 'Bewusstseinsprüfung',
                    description: 'Bewusstseinsbeurteilung in Notfällen',
                    icon: '🧠',
                    difficulty: 'medium',
                    parentId: 'emergency-recognition'
                  },
                  {
                    id: 'news-mews-score',
                    name: 'NEWS/MEWS-Score',
                    description: 'Frühwarnsysteme für klinische Verschlechterung',
                    icon: '📊',
                    difficulty: 'hard',
                    parentId: 'emergency-recognition'
                  },
                  {
                    id: 'alert-system',
                    name: 'Alarmierung',
                    description: 'Strukturierte Alarmierung und Kommunikation',
                    icon: '📞',
                    difficulty: 'medium',
                    parentId: 'emergency-recognition'
                  }
                ]
              },
              {
                id: 'first-aid',
                name: 'Erste Hilfe',
                description: 'Sofortmaßnahmen in Notfallsituationen',
                icon: '🏥',
                difficulty: 'medium',
                parentId: 'emergency-care',
                children: [
                  {
                    id: 'recovery-position',
                    name: 'Stabile Seitenlage',
                    description: 'Positionierung bewusstloser Patienten',
                    icon: '↩️',
                    difficulty: 'easy',
                    parentId: 'first-aid'
                  },
                  {
                    id: 'chest-compressions',
                    name: 'Herzdruckmassage',
                    description: 'Externe Herzdruckmassage',
                    icon: '👐',
                    difficulty: 'medium',
                    parentId: 'first-aid'
                  },
                  {
                    id: 'rescue-breathing',
                    name: 'Beatmung',
                    description: 'Mund-zu-Mund und Beutelbeatmung',
                    icon: '💨',
                    difficulty: 'medium',
                    parentId: 'first-aid'
                  },
                  {
                    id: 'aed-application',
                    name: 'AED-Anwendung',
                    description: 'Bedienung automatischer externer Defibrillatoren',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'first-aid'
                  },
                  {
                    id: 'bleeding-control',
                    name: 'Blutstillung',
                    description: 'Maßnahmen zur Blutungskontrolle',
                    icon: '🩸',
                    difficulty: 'medium',
                    parentId: 'first-aid'
                  }
                ]
              },
              {
                id: 'resuscitation',
                name: 'Reanimation',
                description: 'Erweiterte Reanimationsmaßnahmen',
                icon: '⚡',
                difficulty: 'hard',
                parentId: 'emergency-care',
                children: [
                  {
                    id: 'bls',
                    name: 'BLS (Basic Life Support)',
                    description: 'Grundlegende lebensrettende Maßnahmen',
                    icon: '💓',
                    difficulty: 'medium',
                    parentId: 'resuscitation'
                  },
                  {
                    id: 'als',
                    name: 'ALS (Advanced Life Support)',
                    description: 'Erweiterte lebensrettende Maßnahmen',
                    icon: '🏥',
                    difficulty: 'hard',
                    parentId: 'resuscitation'
                  },
                  {
                    id: 'emergency-medications',
                    name: 'Medikamente',
                    description: 'Notfallmedikamente und deren Anwendung',
                    icon: '💉',
                    difficulty: 'hard',
                    parentId: 'resuscitation'
                  },
                  {
                    id: 'team-work',
                    name: 'Teamarbeit',
                    description: 'Koordination im Reanimationsteam',
                    icon: '👥',
                    difficulty: 'hard',
                    parentId: 'resuscitation'
                  },
                  {
                    id: 'resuscitation-documentation',
                    name: 'Dokumentation',
                    description: 'Dokumentation von Reanimationsmaßnahmen',
                    icon: '📝',
                    difficulty: 'medium',
                    parentId: 'resuscitation'
                  }
                ]
              },
              {
                id: 'special-emergencies',
                name: 'Spezielle Notfälle',
                description: 'Management spezieller Notfallsituationen',
                icon: '⚠️',
                difficulty: 'hard',
                parentId: 'emergency-care',
                children: [
                  {
                    id: 'anaphylaxis',
                    name: 'Anaphylaxie',
                    description: 'Management schwerer allergischer Reaktionen',
                    icon: '🚨',
                    difficulty: 'hard',
                    parentId: 'special-emergencies'
                  },
                  {
                    id: 'acute-coronary-syndrome',
                    name: 'Akutes Koronarsyndrom',
                    description: 'Herzinfarkt und instabile Angina pectoris',
                    icon: '💔',
                    difficulty: 'hard',
                    parentId: 'special-emergencies'
                  },
                  {
                    id: 'stroke',
                    name: 'Schlaganfall',
                    description: 'Erkennung und Erstversorgung bei Schlaganfall',
                    icon: '🧠',
                    difficulty: 'hard',
                    parentId: 'special-emergencies'
                  },
                  {
                    id: 'status-epilepticus',
                    name: 'Status epilepticus',
                    description: 'Management anhaltender epileptischer Anfälle',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'special-emergencies'
                  },
                  {
                    id: 'hypoglycemia',
                    name: 'Hypoglykämie',
                    description: 'Unterzuckerung erkennen und behandeln',
                    icon: '🩸',
                    difficulty: 'medium',
                    parentId: 'special-emergencies'
                  }
                ]
              }
            ]
          },
          {
            id: 'intensive-care',
            name: 'Intensivpflege',
            description: 'Pflege auf der Intensivstation',
            icon: '🏥',
            difficulty: 'hard',
            parentId: 'special-care-situations',
            children: [
              {
                id: 'monitoring',
                name: 'Monitoring',
                description: 'Überwachung kritisch kranker Patienten',
                icon: '📊',
                difficulty: 'hard',
                parentId: 'intensive-care',
                children: [
                  {
                    id: 'invasive-monitoring',
                    name: 'Invasive Überwachung',
                    description: 'Invasive Überwachungsverfahren',
                    icon: '🔌',
                    difficulty: 'hard',
                    parentId: 'monitoring'
                  },
                  {
                    id: 'cvp-measurement',
                    name: 'ZVD-Messung',
                    description: 'Zentraler Venendruck',
                    icon: '📈',
                    difficulty: 'hard',
                    parentId: 'monitoring'
                  },
                  {
                    id: 'arterial-pressure-monitoring',
                    name: 'Arterielle Druckmessung',
                    description: 'Invasive arterielle Blutdruckmessung',
                    icon: '🩸',
                    difficulty: 'hard',
                    parentId: 'monitoring'
                  },
                  {
                    id: 'cardiac-output-monitoring',
                    name: 'HZV-Monitoring',
                    description: 'Herzzeitvolumen-Überwachung',
                    icon: '💓',
                    difficulty: 'hard',
                    parentId: 'monitoring'
                  },
                  {
                    id: 'icp-measurement',
                    name: 'ICP-Messung',
                    description: 'Intrakranieller Druckmonitoring',
                    icon: '🧠',
                    difficulty: 'hard',
                    parentId: 'monitoring'
                  }
                ]
              },
              {
                id: 'ventilation',
                name: 'Beatmung',
                description: 'Maschinelle Beatmung und Atemwegsmanagement',
                icon: '🫁',
                difficulty: 'hard',
                parentId: 'intensive-care',
                children: [
                  {
                    id: 'ventilation-modes',
                    name: 'Beatmungsmodi',
                    description: 'Verschiedene Beatmungsformen und -einstellungen',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'ventilation'
                  },
                  {
                    id: 'weaning',
                    name: 'Weaning',
                    description: 'Entwöhnung von der maschinellen Beatmung',
                    icon: '📉',
                    difficulty: 'hard',
                    parentId: 'ventilation'
                  },
                  {
                    id: 'tracheostomy-intensive',
                    name: 'Tracheostomapflege',
                    description: 'Intensivpflegerische Tracheostomapflege',
                    icon: '⭕',
                    difficulty: 'hard',
                    parentId: 'ventilation'
                  },
                  {
                    id: 'bronchial-hygiene',
                    name: 'Bronchialtoilette',
                    description: 'Atemwegsreinigung und Sekretmanagement',
                    icon: '🧽',
                    difficulty: 'medium',
                    parentId: 'ventilation'
                  },
                  {
                    id: 'extubation',
                    name: 'Extubation',
                    description: 'Entfernung des Endotrachealtubus',
                    icon: '↗️',
                    difficulty: 'hard',
                    parentId: 'ventilation'
                  }
                ]
              },
              {
                id: 'renal-replacement',
                name: 'Nierenersatzverfahren',
                description: 'Dialyse und Nierenersatztherapie',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'intensive-care',
                children: [
                  {
                    id: 'hemodialysis',
                    name: 'Hämodialyse',
                    description: 'Extrakorporale Blutreinigung',
                    icon: '🩸',
                    difficulty: 'hard',
                    parentId: 'renal-replacement'
                  },
                  {
                    id: 'hemofiltration',
                    name: 'Hämofiltration',
                    description: 'Kontinuierliche Flüssigkeitsentfernung',
                    icon: '💧',
                    difficulty: 'hard',
                    parentId: 'renal-replacement'
                  },
                  {
                    id: 'cvvh-cvvhd',
                    name: 'CVVH/CVVHD',
                    description: 'Kontinuierliche veno-venöse Verfahren',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'renal-replacement'
                  },
                  {
                    id: 'peritoneal-dialysis',
                    name: 'Peritonealdialyse',
                    description: 'Dialyse über das Bauchfell',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'renal-replacement'
                  },
                  {
                    id: 'shunt-care',
                    name: 'Shuntpflege',
                    description: 'Pflege von Dialysezugängen',
                    icon: '🔗',
                    difficulty: 'medium',
                    parentId: 'renal-replacement'
                  }
                ]
              },
              {
                id: 'sedation-analgesia',
                name: 'Sedierung & Analgesie',
                description: 'Schmerztherapie und Sedierung auf der Intensivstation',
                icon: '😴',
                difficulty: 'hard',
                parentId: 'intensive-care',
                children: [
                  {
                    id: 'sedation-scales',
                    name: 'Sedierungsskalen (RASS, SAS)',
                    description: 'Bewertung des Sedierungsgrades',
                    icon: '📏',
                    difficulty: 'medium',
                    parentId: 'sedation-analgesia'
                  },
                  {
                    id: 'delirium-management',
                    name: 'Delirmanagement (CAM-ICU)',
                    description: 'Erkennung und Management von Delir',
                    icon: '🌀',
                    difficulty: 'hard',
                    parentId: 'sedation-analgesia'
                  },
                  {
                    id: 'analgosedation',
                    name: 'Analgosedierung',
                    description: 'Kombinierte Schmerz- und Sedierungstherapie',
                    icon: '💊',
                    difficulty: 'hard',
                    parentId: 'sedation-analgesia'
                  },
                  {
                    id: 'awakening-phase',
                    name: 'Aufwachphase',
                    description: 'Management der Sedierungsreduktion',
                    icon: '👁️',
                    difficulty: 'medium',
                    parentId: 'sedation-analgesia'
                  }
                ]
              }
            ]
          },
          {
            id: 'palliative-care',
            name: 'Palliativpflege',
            description: 'Pflege in der letzten Lebensphase',
            icon: '🕊️',
            difficulty: 'hard',
            parentId: 'special-care-situations',
            children: [
              {
                id: 'symptom-control',
                name: 'Symptomkontrolle',
                description: 'Management belastender Symptome',
                icon: '🩹',
                difficulty: 'hard',
                parentId: 'palliative-care',
                children: [
                  {
                    id: 'pain-therapy-palliative',
                    name: 'Schmerztherapie',
                    description: 'Spezialisierte Schmerzbehandlung in der Palliativpflege',
                    icon: '💊',
                    difficulty: 'hard',
                    parentId: 'symptom-control'
                  },
                  {
                    id: 'dyspnea',
                    name: 'Dyspnoe',
                    description: 'Atemnot lindern und bewältigen',
                    icon: '🫁',
                    difficulty: 'medium',
                    parentId: 'symptom-control'
                  },
                  {
                    id: 'nausea-vomiting',
                    name: 'Übelkeit/Erbrechen',
                    description: 'Antiemetische Therapie und pflegerische Maßnahmen',
                    icon: '🤢',
                    difficulty: 'medium',
                    parentId: 'symptom-control'
                  },
                  {
                    id: 'constipation-palliative',
                    name: 'Obstipation',
                    description: 'Verstopfung in der Palliativversorgung',
                    icon: '🌿',
                    difficulty: 'medium',
                    parentId: 'symptom-control'
                  },
                  {
                    id: 'anxiety-restlessness',
                    name: 'Angst/Unruhe',
                    description: 'Psychische Symptome lindern',
                    icon: '😰',
                    difficulty: 'hard',
                    parentId: 'symptom-control'
                  },
                  {
                    id: 'delirium-palliative',
                    name: 'Delir',
                    description: 'Verwirrtheitszustände in der Sterbephase',
                    icon: '🌀',
                    difficulty: 'hard',
                    parentId: 'symptom-control'
                  }
                ]
              },
              {
                id: 'psychosocial-care',
                name: 'Psychosoziale Betreuung',
                description: 'Emotionale und spirituelle Begleitung',
                icon: '🤝',
                difficulty: 'hard',
                parentId: 'palliative-care',
                children: [
                  {
                    id: 'communication-skills',
                    name: 'Gesprächsführung',
                    description: 'Kommunikation mit Sterbenden und Angehörigen',
                    icon: '💬',
                    difficulty: 'hard',
                    parentId: 'psychosocial-care'
                  },
                  {
                    id: 'family-support',
                    name: 'Angehörigenbegleitung',
                    description: 'Unterstützung der Familie',
                    icon: '👨‍👩‍👧‍👦',
                    difficulty: 'medium',
                    parentId: 'psychosocial-care'
                  },
                  {
                    id: 'spiritual-support',
                    name: 'Spirituelle Begleitung',
                    description: 'Unterstützung bei religiösen und spirituellen Bedürfnissen',
                    icon: '🙏',
                    difficulty: 'medium',
                    parentId: 'psychosocial-care'
                  },
                  {
                    id: 'grief-support',
                    name: 'Trauerbegleitung',
                    description: 'Unterstützung im Trauerprozess',
                    icon: '💙',
                    difficulty: 'hard',
                    parentId: 'psychosocial-care'
                  },
                  {
                    id: 'farewell-culture',
                    name: 'Abschiedskultur',
                    description: 'Rituale und Gestaltung des Abschieds',
                    icon: '🕯️',
                    difficulty: 'medium',
                    parentId: 'psychosocial-care'
                  }
                ]
              },
              {
                id: 'dying-phase',
                name: 'Sterbephase',
                description: 'Begleitung in der letzten Lebensphase',
                icon: '🌅',
                difficulty: 'hard',
                parentId: 'palliative-care',
                children: [
                  {
                    id: 'stages-of-dying',
                    name: 'Sterbephasen (Kübler-Ross)',
                    description: 'Die fünf Phasen des Sterbens',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'dying-phase'
                  },
                  {
                    id: 'final-phase',
                    name: 'Finalphase',
                    description: 'Die letzten Stunden und Tage',
                    icon: '⏰',
                    difficulty: 'hard',
                    parentId: 'dying-phase'
                  },
                  {
                    id: 'mouth-care-dying',
                    name: 'Mundpflege',
                    description: 'Spezielle Mundpflege in der Sterbephase',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'dying-phase'
                  },
                  {
                    id: 'positioning-dying',
                    name: 'Lagerung',
                    description: 'Komfortlagerung in der Sterbephase',
                    icon: '🛏️',
                    difficulty: 'medium',
                    parentId: 'dying-phase'
                  },
                  {
                    id: 'include-family',
                    name: 'Angehörige einbeziehen',
                    description: 'Teilhabe der Familie am Sterbeprozess',
                    icon: '🤗',
                    difficulty: 'medium',
                    parentId: 'dying-phase'
                  }
                ]
              },
              {
                id: 'after-death',
                name: 'Nach dem Tod',
                description: 'Maßnahmen nach dem Versterben',
                icon: '🕊️',
                difficulty: 'medium',
                parentId: 'palliative-care',
                children: [
                  {
                    id: 'postmortem-care',
                    name: 'Versorgung Verstorbener',
                    description: 'Würdevolle Versorgung nach dem Tod',
                    icon: '🤲',
                    difficulty: 'medium',
                    parentId: 'after-death'
                  },
                  {
                    id: 'cultural-aspects',
                    name: 'Kulturelle Aspekte',
                    description: 'Berücksichtigung kultureller und religiöser Gepflogenheiten',
                    icon: '🌍',
                    difficulty: 'medium',
                    parentId: 'after-death'
                  },
                  {
                    id: 'family-bereavement',
                    name: 'Angehörigenbetreuung',
                    description: 'Begleitung nach dem Verlust',
                    icon: '💙',
                    difficulty: 'medium',
                    parentId: 'after-death'
                  },
                  {
                    id: 'death-documentation',
                    name: 'Dokumentation',
                    description: 'Notwendige Dokumentation nach dem Tod',
                    icon: '📋',
                    difficulty: 'easy',
                    parentId: 'after-death'
                  }
                ]
              }
            ]
          },
          {
            id: 'psychiatric-care',
            name: 'Psychiatrische Pflege',
            description: 'Spezielle Pflege bei psychischen Erkrankungen',
            icon: '🧠',
            difficulty: 'hard',
            parentId: 'special-care-situations',
          children: [
            {
              id: 'milieu-therapy',
              name: 'Milieugestaltung',
              description: 'Gestaltung eines therapeutischen Umfelds',
              icon: '🏥',
              difficulty: 'medium',
              parentId: 'psychiatric-care',
              children: [
                {
                  id: 'therapeutic-milieu',
                  name: 'Therapeutisches Milieu',
                  description: 'Schaffung eines heilenden Umfelds',
                  icon: '🌱',
                  difficulty: 'medium',
                  parentId: 'milieu-therapy'
                },
                {
                  id: 'daily-structure',
                  name: 'Tagesstruktur',
                  description: 'Strukturierung des Tagesablaufs',
                  icon: '📅',
                  difficulty: 'easy',
                  parentId: 'milieu-therapy'
                },
                {
                  id: 'meaningful-activity',
                  name: 'Beschäftigung',
                  description: 'Sinnvolle Aktivitäten und Therapien',
                  icon: '🎨',
                  difficulty: 'easy',
                  parentId: 'milieu-therapy'
                },
                {
                  id: 'retreat-spaces',
                  name: 'Rückzugsräume',
                  description: 'Bereitstellung von Ruhe- und Rückzugsmöglichkeiten',
                  icon: '🏠',
                  difficulty: 'easy',
                  parentId: 'milieu-therapy'
                },
                {
                  id: 'safety-measures',
                  name: 'Sicherheit',
                  description: 'Gewährleistung der Sicherheit aller Beteiligten',
                  icon: '🛡️',
                  difficulty: 'medium',
                  parentId: 'milieu-therapy'
                }
              ]
            },
            {
              id: 'relationship-building',
              name: 'Beziehungsgestaltung',
              description: 'Aufbau therapeutischer Beziehungen',
              icon: '🤝',
              difficulty: 'hard',
              parentId: 'psychiatric-care',
              children: [
                {
                  id: 'trust-building',
                  name: 'Vertrauensaufbau',
                  description: 'Entwicklung einer vertrauensvollen Beziehung',
                  icon: '💙',
                  difficulty: 'medium',
                  parentId: 'relationship-building'
                },
                {
                  id: 'empathy',
                  name: 'Empathie',
                  description: 'Einfühlsames Verstehen und Mitfühlen',
                  icon: '💚',
                  difficulty: 'medium',
                  parentId: 'relationship-building'
                },
                {
                  id: 'boundary-setting',
                  name: 'Grenzen setzen',
                  description: 'Professionelle Grenzen definieren und wahren',
                  icon: '⚖️',
                  difficulty: 'hard',
                  parentId: 'relationship-building'
                },
                {
                  id: 'deescalation',
                  name: 'Deeskalation',
                  description: 'Beruhigung und Entspannung von Konfliktsituationen',
                  icon: '🕊️',
                  difficulty: 'hard',
                  parentId: 'relationship-building'
                },
                {
                  id: 'primary-nursing-psychiatric',
                  name: 'Bezugspflege',
                  description: 'Kontinuierliche Betreuung durch feste Bezugsperson',
                  icon: '👩‍⚕️',
                  difficulty: 'medium',
                  parentId: 'relationship-building'
                }
              ]
            },
            {
              id: 'crisis-intervention',
              name: 'Krisenintervention',
              description: 'Akute psychiatrische Notfallsituationen',
              icon: '🚨',
              difficulty: 'hard',
              parentId: 'psychiatric-care',
              children: [
                {
                  id: 'suicidality',
                  name: 'Suizidalität',
                  description: 'Erkennung und Management von Suizidrisiko',
                  icon: '⚠️',
                  difficulty: 'hard',
                  parentId: 'crisis-intervention'
                },
                {
                  id: 'self-harm',
                  name: 'Selbstverletzung',
                  description: 'Umgang mit selbstverletzendem Verhalten',
                  icon: '🩹',
                  difficulty: 'hard',
                  parentId: 'crisis-intervention'
                },
                {
                  id: 'aggression-psychiatric',
                  name: 'Aggression',
                  description: 'Management aggressiven Verhaltens',
                  icon: '⚡',
                  difficulty: 'hard',
                  parentId: 'crisis-intervention'
                },
                {
                  id: 'anxiety-panic',
                  name: 'Angst/Panik',
                  description: 'Intervention bei Angst- und Panikzuständen',
                  icon: '😰',
                  difficulty: 'medium',
                  parentId: 'crisis-intervention'
                },
                {
                  id: 'psychosis',
                  name: 'Psychose',
                  description: 'Umgang mit psychotischen Zuständen',
                  icon: '🌀',
                  difficulty: 'hard',
                  parentId: 'crisis-intervention'
                }
              ]
            },
            {
              id: 'special-psychiatric-interventions',
              name: 'Spezielle Interventionen',
              description: 'Spezifische therapeutische Maßnahmen',
              icon: '🎯',
              difficulty: 'hard',
              parentId: 'psychiatric-care',
              children: [
                {
                  id: 'adherence-promotion',
                  name: 'Adhärenzförderung',
                  description: 'Förderung der Therapietreue',
                  icon: '💊',
                  difficulty: 'medium',
                  parentId: 'special-psychiatric-interventions'
                },
                {
                  id: 'psychoeducation',
                  name: 'Psychoedukation',
                  description: 'Aufklärung über Erkrankung und Behandlung',
                  icon: '📚',
                  difficulty: 'medium',
                  parentId: 'special-psychiatric-interventions'
                },
                {
                  id: 'skills-training',
                  name: 'Skills-Training',
                  description: 'Training von Bewältigungsfertigkeiten',
                  icon: '🏋️',
                  difficulty: 'hard',
                  parentId: 'special-psychiatric-interventions'
                },
                {
                  id: 'recovery-approach',
                  name: 'Recovery-Ansatz',
                  description: 'Fokus auf Genesung und Selbstbestimmung',
                  icon: '🌟',
                  difficulty: 'hard',
                  parentId: 'special-psychiatric-interventions'
                },
                {
                  id: 'family-work',
                  name: 'Angehörigenarbeit',
                  description: 'Einbeziehung und Unterstützung der Familie',
                  icon: '👨‍👩‍👧‍👦',
                  difficulty: 'medium',
                  parentId: 'special-psychiatric-interventions'
                }
              ]
            }
          ]
        },
        {
          id: 'pediatric-care',
          name: 'Pädiatrische Pflege',
          description: 'Spezielle Pflege von Kindern und Jugendlichen',
          icon: '🧸',
          difficulty: 'hard',
          parentId: 'special-care-situations',
          children: [
            {
              id: 'developmental-care',
              name: 'Entwicklungsorientierte Pflege',
              description: 'Altersgerechte und entwicklungsfördernde Pflege',
              icon: '🌱',
              difficulty: 'medium',
              parentId: 'pediatric-care',
              children: [
                {
                  id: 'age-specific-care',
                  name: 'Altersspezifische Betreuung',
                  description: 'Anpassung der Pflege an Entwicklungsstand',
                  icon: '👶',
                  difficulty: 'medium',
                  parentId: 'developmental-care'
                },
                {
                  id: 'playful-elements',
                  name: 'Spielerische Elemente',
                  description: 'Integration von Spiel und Spaß in die Pflege',
                  icon: '🎈',
                  difficulty: 'easy',
                  parentId: 'developmental-care'
                },
                {
                  id: 'involve-caregivers',
                  name: 'Bezugspersonen einbeziehen',
                  description: 'Aktive Einbindung von Eltern und Familie',
                  icon: '👪',
                  difficulty: 'medium',
                  parentId: 'developmental-care'
                },
                {
                  id: 'school-education',
                  name: 'Schulunterricht',
                  description: 'Fortsetzung der Bildung während Krankenhausaufenthalt',
                  icon: '📚',
                  difficulty: 'easy',
                  parentId: 'developmental-care'
                },
                {
                  id: 'transition',
                  name: 'Transition',
                  description: 'Übergang zwischen verschiedenen Versorgungsebenen',
                  icon: '🚪',
                  difficulty: 'medium',
                  parentId: 'developmental-care'
                }
              ]
            },
            {
              id: 'special-pediatric-techniques',
              name: 'Spezielle Techniken',
              description: 'Kinderspezifische Pflegetechniken',
              icon: '🩺',
              difficulty: 'hard',
              parentId: 'pediatric-care',
              children: [
                {
                  id: 'medication-dosing',
                  name: 'Medikamentendosierung',
                  description: 'Gewichtsadaptierte Dosierung bei Kindern',
                  icon: '💊',
                  difficulty: 'hard',
                  parentId: 'special-pediatric-techniques'
                },
                {
                  id: 'pediatric-pain-assessment',
                  name: 'Schmerzassessment (KUSS, Wong-Baker)',
                  description: 'Altersentsprechende Schmerzerfassung',
                  icon: '😢',
                  difficulty: 'medium',
                  parentId: 'special-pediatric-techniques'
                },
                {
                  id: 'fever-management',
                  name: 'Fiebermanagement',
                  description: 'Umgang mit Fieber bei Kindern',
                  icon: '🌡️',
                  difficulty: 'medium',
                  parentId: 'special-pediatric-techniques'
                },
                {
                  id: 'infant-nutrition',
                  name: 'Ernährung (Stillen, Flasche)',
                  description: 'Säuglingsernährung und Fütterungstechniken',
                  icon: '🍼',
                  difficulty: 'medium',
                  parentId: 'special-pediatric-techniques'
                },
                {
                  id: 'developmental-promotion',
                  name: 'Entwicklungsförderung',
                  description: 'Gezielte Förderung der kindlichen Entwicklung',
                  icon: '🧩',
                  difficulty: 'medium',
                  parentId: 'special-pediatric-techniques'
                }
              ]
            },
            {
              id: 'family-centered-care',
              name: 'Familienorientierte Pflege',
              description: 'Einbeziehung der ganzen Familie in die Pflege',
              icon: '👨‍👩‍👧‍👦',
              difficulty: 'medium',
              parentId: 'pediatric-care',
              children: [
                {
                  id: 'rooming-in',
                  name: 'Rooming-in',
                  description: 'Unterbringung der Eltern mit dem Kind',
                  icon: '🛏️',
                  difficulty: 'easy',
                  parentId: 'family-centered-care'
                },
                {
                  id: 'parent-education',
                  name: 'Elternanleitung',
                  description: 'Schulung und Anleitung der Eltern',
                  icon: '👨‍🏫',
                  difficulty: 'medium',
                  parentId: 'family-centered-care'
                },
                {
                  id: 'sibling-care',
                  name: 'Geschwisterbetreuung',
                  description: 'Berücksichtigung der Geschwisterkinder',
                  icon: '👧👦',
                  difficulty: 'medium',
                  parentId: 'family-centered-care'
                },
                {
                  id: 'coping-support',
                  name: 'Coping-Unterstützung',
                  description: 'Hilfe bei der Krankheitsbewältigung',
                  icon: '💪',
                  difficulty: 'hard',
                  parentId: 'family-centered-care'
                },
                {
                  id: 'discharge-management-pediatric',
                  name: 'Entlassungsmanagement',
                  description: 'Planung und Vorbereitung der Entlassung',
                  icon: '🏠',
                  difficulty: 'medium',
                  parentId: 'family-centered-care'
                }
              ]
            },
            {
              id: 'child-protection',
              name: 'Kinderschutz',
              description: 'Schutz des Kindeswohls',
              icon: '🛡️',
              difficulty: 'hard',
              parentId: 'pediatric-care',
              children: [
                {
                  id: 'child-welfare-endangerment',
                  name: 'Kindeswohlgefährdung',
                  description: 'Erkennung und Beurteilung von Gefährdungslagen',
                  icon: '⚠️',
                  difficulty: 'hard',
                  parentId: 'child-protection'
                },
                {
                  id: 'protection-documentation',
                  name: 'Dokumentation',
                  description: 'Sorgfältige Dokumentation bei Verdachtsfällen',
                  icon: '📝',
                  difficulty: 'medium',
                  parentId: 'child-protection'
                },
                {
                  id: 'reporting-obligation',
                  name: 'Meldepflicht',
                  description: 'Rechtliche Verpflichtungen zur Meldung',
                  icon: '📞',
                  difficulty: 'hard',
                  parentId: 'child-protection'
                },
                {
                  id: 'interdisciplinary-collaboration',
                  name: 'Interdisziplinäre Zusammenarbeit',
                  description: 'Kooperation mit anderen Berufsgruppen',
                  icon: '🤝',
                  difficulty: 'medium',
                  parentId: 'child-protection'
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