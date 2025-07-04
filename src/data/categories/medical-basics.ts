import { Category } from '../../types/Category'

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
          },
          {
            id: 'lung-function',
            name: 'Lungenfunktion',
            description: 'Atemvolumina, Kapazitäten und Funktionsparameter',
            icon: '📏',
            difficulty: 'hard',
            parentId: 'respiratory-system',
            children: [
              {
                id: 'lung-volumes',
                name: 'Atemvolumina (AZV, IRV, ERV, RV)',
                description: 'Atemzugvolumen, Inspiratorisches/Exspiratorisches Reservevolumen, Residualvolumen',
                icon: '📊',
                difficulty: 'medium',
                parentId: 'lung-function'
              },
              {
                id: 'lung-capacities',
                name: 'Lungenkapazitäten (TLC, FRC, VC, IC)',
                description: 'Totale Lungenkapazität, Funktionelle Residualkapazität, Vitalkapazität, Inspiratorische Kapazität',
                icon: '📈',
                difficulty: 'medium',
                parentId: 'lung-function'
              },
              {
                id: 'compliance-resistance',
                name: 'Compliance & Resistance',
                description: 'Lungendehnbarkeit und Atemwegswiderstand',
                icon: '⚖️',
                difficulty: 'hard',
                parentId: 'lung-function'
              },
              {
                id: 'fev1-fvc',
                name: 'FEV1/FVC (Tiffeneau-Index)',
                description: 'Forciertes exspiratorisches Volumen in 1 Sekunde zu forcierter Vitalkapazität',
                icon: '⏱️',
                difficulty: 'medium',
                parentId: 'lung-function'
              },
              {
                id: 'peak-flow',
                name: 'Peak Flow',
                description: 'Maximaler exspiratorischer Fluss',
                icon: '🌪️',
                difficulty: 'easy',
                parentId: 'lung-function'
              },
              {
                id: 'dlco',
                name: 'Diffusionskapazität (DLCO)',
                description: 'Kohlenmonoxid-Diffusionskapazität',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'lung-function'
              },
              {
                id: 'mef-flows',
                name: 'MEF25/50/75 (Maximale exspiratorische Flüsse)',
                description: 'Maximale exspiratorische Flüsse bei 25%, 50% und 75% der FVC',
                icon: '💨',
                difficulty: 'hard',
                parentId: 'lung-function'
              }
            ]
          },
          {
            id: 'gas-exchange-transport',
            name: 'Gasaustausch & Transport',
            description: 'Sauerstoff- und Kohlendioxidtransport im Blut',
            icon: '🔄',
            difficulty: 'hard',
            parentId: 'respiratory-system',
            children: [
              {
                id: 'o2-hemoglobin-binding',
                name: 'O2-Bindung an Hämoglobin',
                description: 'Sauerstoffbindung und -transport durch Hämoglobin',
                icon: '🔴',
                difficulty: 'medium',
                parentId: 'gas-exchange-transport'
              },
              {
                id: 'o2-saturation-curve',
                name: 'O2-Sättigungskurve (Rechts-/Linksverschiebung)',
                description: 'Sauerstoff-Dissoziationskurve und ihre Verschiebungen',
                icon: '📈',
                difficulty: 'hard',
                parentId: 'gas-exchange-transport'
              },
              {
                id: 'co2-transport',
                name: 'CO2-Transport (HCO3-, Carbamino)',
                description: 'Kohlendioxidtransport als Bikarbonat und Carbaminoverbindungen',
                icon: '🫧',
                difficulty: 'hard',
                parentId: 'gas-exchange-transport'
              },
              {
                id: 'haldane-bohr-effect',
                name: 'Haldane-/Bohr-Effekt',
                description: 'Physiologische Effekte bei Gasaustausch',
                icon: '⚗️',
                difficulty: 'hard',
                parentId: 'gas-exchange-transport'
              },
              {
                id: 'hyperoxia-hypoxia',
                name: 'Hyperoxie/Hypoxie',
                description: 'Sauerstoffüberschuss und -mangel',
                icon: '📊',
                difficulty: 'medium',
                parentId: 'gas-exchange-transport'
              },
              {
                id: 'hypercapnia-hypocapnia',
                name: 'Hyperkapnie/Hypokapnie',
                description: 'Kohlendioxidüberschuss und -mangel',
                icon: '💨',
                difficulty: 'medium',
                parentId: 'gas-exchange-transport'
              },
              {
                id: 'methemoglobin-carboxyhemoglobin',
                name: 'Methämoglobin/Carboxyhämoglobin',
                description: 'Pathologische Hämoglobinformen',
                icon: '⚠️',
                difficulty: 'hard',
                parentId: 'gas-exchange-transport'
              }
            ]
          },
          {
            id: 'respiratory-control',
            name: 'Atemregulation',
            description: 'Zentrale und periphere Atemkontrolle',
            icon: '🧠',
            difficulty: 'hard',
            parentId: 'respiratory-system',
            children: [
              {
                id: 'respiratory-centers',
                name: 'Atemzentrum (Medulla oblongata, Pons)',
                description: 'Zentrale Atemregulation im Hirnstamm',
                icon: '🧠',
                difficulty: 'hard',
                parentId: 'respiratory-control'
              },
              {
                id: 'chemoreceptors',
                name: 'Chemoreceptoren (zentral/peripher)',
                description: 'Zentrale und periphere Chemorezeptoren',
                icon: '🔬',
                difficulty: 'hard',
                parentId: 'respiratory-control'
              },
              {
                id: 'co2-o2-control',
                name: 'CO2-/O2-gesteuerte Atmung',
                description: 'Atemregulation durch CO2 und O2',
                icon: '⚖️',
                difficulty: 'medium',
                parentId: 'respiratory-control'
              },
              {
                id: 'ph-regulation',
                name: 'pH-Regulation',
                description: 'Säure-Basen-Regulation durch Atmung',
                icon: '🧪',
                difficulty: 'hard',
                parentId: 'respiratory-control'
              },
              {
                id: 'voluntary-control',
                name: 'Willkürliche Atemkontrolle',
                description: 'Bewusste Atemsteuerung',
                icon: '🧘',
                difficulty: 'easy',
                parentId: 'respiratory-control'
              },
              {
                id: 'breathing-disorders',
                name: 'Atemrhythmus-Störungen',
                description: 'Pathologische Atemmuster',
                icon: '💔',
                difficulty: 'medium',
                parentId: 'respiratory-control'
              },
              {
                id: 'hering-breuer-reflex',
                name: 'Hering-Breuer-Reflex',
                description: 'Selbstregulatorischer Atemreflex',
                icon: '🔄',
                difficulty: 'medium',
                parentId: 'respiratory-control'
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
        parentId: 'anatomy-physiology',
        children: [
          {
            id: 'central-nervous-system',
            name: 'Zentralnervensystem (ZNS)',
            description: 'Gehirn und Rückenmark',
            icon: '🧠',
            difficulty: 'hard',
            parentId: 'nervous-system',
            children: [
              {
                id: 'cerebrum',
                name: 'Großhirn',
                description: 'Kortex und subkortikale Strukturen',
                icon: '🧠',
                difficulty: 'hard',
                parentId: 'central-nervous-system',
                children: [
                  {
                    id: 'frontal-lobe',
                    name: 'Frontallappen (Motorik, Persönlichkeit, Broca-Areal)',
                    description: 'Stirnlappen mit motorischen und exekutiven Funktionen',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'cerebrum'
                  },
                  {
                    id: 'parietal-lobe',
                    name: 'Parietallappen (Sensorik, Raumwahrnehmung)',
                    description: 'Scheitellappen für sensorische Verarbeitung',
                    icon: '👋',
                    difficulty: 'medium',
                    parentId: 'cerebrum'
                  },
                  {
                    id: 'temporal-lobe',
                    name: 'Temporallappen (Hören, Gedächtnis, Wernicke-Areal)',
                    description: 'Schläfenlappen für Hören und Sprachverständnis',
                    icon: '👂',
                    difficulty: 'medium',
                    parentId: 'cerebrum'
                  },
                  {
                    id: 'occipital-lobe',
                    name: 'Okzipitallappen (Sehen, visueller Kortex)',
                    description: 'Hinterhauptslappen für visuelle Verarbeitung',
                    icon: '👁️',
                    difficulty: 'medium',
                    parentId: 'cerebrum'
                  },
                  {
                    id: 'insula',
                    name: 'Insula (Geschmack, viszerale Sensibilität)',
                    description: 'Inselrinde für Geschmack und Körperwahrnehmung',
                    icon: '👅',
                    difficulty: 'hard',
                    parentId: 'cerebrum'
                  },
                  {
                    id: 'basal-ganglia',
                    name: 'Basalganglien (Bewegungskontrolle)',
                    description: 'Subkortikale Kerne für Motorik',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'cerebrum'
                  },
                  {
                    id: 'limbic-system',
                    name: 'Limbisches System (Emotionen, Gedächtnis)',
                    description: 'Emotionales Gehirn und Gedächtnisbildung',
                    icon: '❤️',
                    difficulty: 'hard',
                    parentId: 'cerebrum'
                  },
                  {
                    id: 'corpus-callosum',
                    name: 'Kommissurenbahnen (Corpus callosum)',
                    description: 'Verbindung zwischen den Hemisphären',
                    icon: '🌉',
                    difficulty: 'hard',
                    parentId: 'cerebrum'
                  }
                ]
              },
              {
                id: 'cerebellum',
                name: 'Kleinhirn',
                description: 'Koordination und Bewegungslernen',
                icon: '⚖️',
                difficulty: 'medium',
                parentId: 'central-nervous-system',
                children: [
                  {
                    id: 'balance-coordination',
                    name: 'Gleichgewicht & Koordination',
                    description: 'Motorische Koordination',
                    icon: '🤸',
                    difficulty: 'medium',
                    parentId: 'cerebellum'
                  },
                  {
                    id: 'movement-planning',
                    name: 'Bewegungsplanung',
                    description: 'Planung komplexer Bewegungen',
                    icon: '🎯',
                    difficulty: 'medium',
                    parentId: 'cerebellum'
                  },
                  {
                    id: 'motor-learning',
                    name: 'Lernen von Bewegungsabläufen',
                    description: 'Erlernen neuer motorischer Fähigkeiten',
                    icon: '📚',
                    difficulty: 'medium',
                    parentId: 'cerebellum'
                  },
                  {
                    id: 'cerebellum-subdivisions',
                    name: 'Vestibulozerebellum, Spinozerebellum, Pontozerebellum',
                    description: 'Funktionelle Unterteilungen des Kleinhirns',
                    icon: '🧩',
                    difficulty: 'hard',
                    parentId: 'cerebellum'
                  }
                ]
              },
              {
                id: 'brainstem',
                name: 'Hirnstamm',
                description: 'Medulla, Pons und Mesenzephalon',
                icon: '🌳',
                difficulty: 'hard',
                parentId: 'central-nervous-system',
                children: [
                  {
                    id: 'medulla-oblongata',
                    name: 'Medulla oblongata (Atemzentrum, Kreislauf)',
                    description: 'Verlängertes Mark mit Vitalfunktionen',
                    icon: '💨',
                    difficulty: 'hard',
                    parentId: 'brainstem'
                  },
                  {
                    id: 'pons',
                    name: 'Pons (Schlaf-Wach-Rhythmus)',
                    description: 'Brücke mit Schlafregulation',
                    icon: '😴',
                    difficulty: 'medium',
                    parentId: 'brainstem'
                  },
                  {
                    id: 'mesencephalon',
                    name: 'Mesenzephalon (Augenbewegung, Reflexe)',
                    description: 'Mittelhirn mit okulomotorischen Funktionen',
                    icon: '👁️',
                    difficulty: 'hard',
                    parentId: 'brainstem'
                  },
                  {
                    id: 'reticular-formation',
                    name: 'Formatio reticularis (ARAS)',
                    description: 'Aufsteigendes retikuläres Aktivierungssystem',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'brainstem'
                  }
                ]
              },
              {
                id: 'diencephalon',
                name: 'Dienzephalon',
                description: 'Zwischenhirn mit Thalamus und Hypothalamus',
                icon: '🏛️',
                difficulty: 'hard',
                parentId: 'central-nervous-system',
                children: [
                  {
                    id: 'thalamus',
                    name: 'Thalamus (Verschaltung sensorischer Bahnen)',
                    description: 'Tor zum Bewusstsein',
                    icon: '🚪',
                    difficulty: 'hard',
                    parentId: 'diencephalon'
                  },
                  {
                    id: 'hypothalamus',
                    name: 'Hypothalamus (Hormonregulation, Temperatur)',
                    description: 'Hormonales Kontrollzentrum',
                    icon: '🌡️',
                    difficulty: 'hard',
                    parentId: 'diencephalon'
                  },
                  {
                    id: 'pituitary',
                    name: 'Hypophyse (Adeno-/Neurohypophyse)',
                    description: 'Hirnanhangsdrüse',
                    icon: '🫖',
                    difficulty: 'hard',
                    parentId: 'diencephalon'
                  },
                  {
                    id: 'pineal',
                    name: 'Epiphyse (Melatonin, Circadianrhythmus)',
                    description: 'Zirbeldrüse und Schlaf-Wach-Rhythmus',
                    icon: '🌙',
                    difficulty: 'medium',
                    parentId: 'diencephalon'
                  },
                  {
                    id: 'subthalamus',
                    name: 'Subthalamus',
                    description: 'Teil des Bewegungssystems',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'diencephalon'
                  }
                ]
              },
              {
                id: 'spinal-cord',
                name: 'Rückenmark',
                description: 'Spinales Nervensystem',
                icon: '🦴',
                difficulty: 'medium',
                parentId: 'central-nervous-system',
                children: [
                  {
                    id: 'spinal-structure',
                    name: 'Aufbau (graue/weiße Substanz)',
                    description: 'Histologischer Aufbau des Rückenmarks',
                    icon: '🔬',
                    difficulty: 'medium',
                    parentId: 'spinal-cord'
                  },
                  {
                    id: 'spinal-segments',
                    name: 'Segmentale Gliederung',
                    description: 'Zervikale, thorakale, lumbale, sakrale Segmente',
                    icon: '📏',
                    difficulty: 'medium',
                    parentId: 'spinal-cord'
                  },
                  {
                    id: 'ascending-tracts',
                    name: 'Aufsteigende Bahnen (Hinterstrang-, Vorderseitenstrang)',
                    description: 'Sensorische Leitungsbahnen',
                    icon: '⬆️',
                    difficulty: 'hard',
                    parentId: 'spinal-cord'
                  },
                  {
                    id: 'descending-tracts',
                    name: 'Absteigende Bahnen (Pyramiden-, Extrapyramidalbahn)',
                    description: 'Motorische Leitungsbahnen',
                    icon: '⬇️',
                    difficulty: 'hard',
                    parentId: 'spinal-cord'
                  },
                  {
                    id: 'reflexes',
                    name: 'Reflexbögen (mono-/polysynaptisch)',
                    description: 'Spinale Reflexmechanismen',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'spinal-cord'
                  },
                  {
                    id: 'rexed-laminae',
                    name: 'Rexed-Laminae',
                    description: 'Histologische Schichtung der grauen Substanz',
                    icon: '🧱',
                    difficulty: 'hard',
                    parentId: 'spinal-cord'
                  }
                ]
              },
              {
                id: 'csf-system',
                name: 'Liquorsystem',
                description: 'Hirnwasser und Liquorzirkulation',
                icon: '💧',
                difficulty: 'medium',
                parentId: 'central-nervous-system',
                children: [
                  {
                    id: 'csf-production',
                    name: 'Liquorproduktion (Plexus choroideus)',
                    description: 'Bildung des Liquor cerebrospinalis',
                    icon: '🏭',
                    difficulty: 'medium',
                    parentId: 'csf-system'
                  },
                  {
                    id: 'csf-circulation',
                    name: 'Liquorzirkulation',
                    description: 'Fluss des Liquors durch das ZNS',
                    icon: '🌊',
                    difficulty: 'medium',
                    parentId: 'csf-system'
                  },
                  {
                    id: 'csf-resorption',
                    name: 'Liquorresorption (Pacchioni-Granulationen)',
                    description: 'Rückresorption des Liquors',
                    icon: '♻️',
                    difficulty: 'medium',
                    parentId: 'csf-system'
                  },
                  {
                    id: 'blood-brain-barrier',
                    name: 'Blut-Hirn-Schranke',
                    description: 'Selektive Barriere zwischen Blut und Gehirn',
                    icon: '🛡️',
                    difficulty: 'hard',
                    parentId: 'csf-system'
                  }
                ]
              }
            ]
          },
          {
            id: 'peripheral-nervous-system',
            name: 'Peripheres Nervensystem (PNS)',
            description: 'Hirnnerven und Spinalnerven',
            icon: '🕸️',
            difficulty: 'medium',
            parentId: 'nervous-system',
            children: [
              {
                id: 'cranial-nerves',
                name: 'Hirnnerven (12 Paare)',
                description: 'Die zwölf Hirnnervenpaare',
                icon: '🧠',
                difficulty: 'hard',
                parentId: 'peripheral-nervous-system',
                children: [
                  {
                    id: 'cn-i',
                    name: 'N. olfactorius (I) - Riechen',
                    description: 'Riechnerv',
                    icon: '👃',
                    difficulty: 'easy',
                    parentId: 'cranial-nerves'
                  },
                  {
                    id: 'cn-ii',
                    name: 'N. opticus (II) - Sehen',
                    description: 'Sehnerv',
                    icon: '👁️',
                    difficulty: 'easy',
                    parentId: 'cranial-nerves'
                  },
                  {
                    id: 'cn-iii',
                    name: 'N. oculomotorius (III) - Augenbewegung',
                    description: 'Augenbewegungsnerv',
                    icon: '👀',
                    difficulty: 'medium',
                    parentId: 'cranial-nerves'
                  },
                  {
                    id: 'cn-iv',
                    name: 'N. trochlearis (IV) - Augenbewegung',
                    description: 'Rollmuskelnerv',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'cranial-nerves'
                  },
                  {
                    id: 'cn-v',
                    name: 'N. trigeminus (V) - Gesichtssensibilität',
                    description: 'Drillingsnerv',
                    icon: '😐',
                    difficulty: 'medium',
                    parentId: 'cranial-nerves'
                  },
                  {
                    id: 'cn-vi',
                    name: 'N. abducens (VI) - Augenbewegung',
                    description: 'Augenabziehnerv',
                    icon: '↔️',
                    difficulty: 'medium',
                    parentId: 'cranial-nerves'
                  },
                  {
                    id: 'cn-vii',
                    name: 'N. facialis (VII) - Gesichtsmimik',
                    description: 'Gesichtsnerv',
                    icon: '😊',
                    difficulty: 'medium',
                    parentId: 'cranial-nerves'
                  },
                  {
                    id: 'cn-viii',
                    name: 'N. vestibulocochlearis (VIII) - Hören/Gleichgewicht',
                    description: 'Hör-Gleichgewichtsnerv',
                    icon: '👂',
                    difficulty: 'medium',
                    parentId: 'cranial-nerves'
                  },
                  {
                    id: 'cn-ix',
                    name: 'N. glossopharyngeus (IX) - Geschmack/Schlucken',
                    description: 'Zungen-Rachen-Nerv',
                    icon: '👅',
                    difficulty: 'medium',
                    parentId: 'cranial-nerves'
                  },
                  {
                    id: 'cn-x',
                    name: 'N. vagus (X) - Parasympathikus',
                    description: 'Vagusnerv',
                    icon: '🌿',
                    difficulty: 'hard',
                    parentId: 'cranial-nerves'
                  },
                  {
                    id: 'cn-xi',
                    name: 'N. accessorius (XI) - Nackenmuskulatur',
                    description: 'Zusatznerv',
                    icon: '💪',
                    difficulty: 'medium',
                    parentId: 'cranial-nerves'
                  },
                  {
                    id: 'cn-xii',
                    name: 'N. hypoglossus (XII) - Zungenbewegung',
                    description: 'Unterzungennerv',
                    icon: '👅',
                    difficulty: 'medium',
                    parentId: 'cranial-nerves'
                  }
                ]
              }
            ]
          },
          {
            id: 'autonomic-nervous-system',
            name: 'Vegetatives Nervensystem',
            description: 'Sympathikus, Parasympathikus und enterisches NS',
            icon: '⚖️',
            difficulty: 'hard',
            parentId: 'nervous-system',
            children: [
              {
                id: 'sympathetic',
                name: 'Sympathikus',
                description: 'Fight-or-Flight System',
                icon: '⚡',
                difficulty: 'medium',
                parentId: 'autonomic-nervous-system',
                children: [
                  {
                    id: 'sympathetic-origin',
                    name: 'Thorakolumbaler Ausgang (Th1-L3)',
                    description: 'Ursprung des Sympathikus',
                    icon: '🦴',
                    difficulty: 'medium',
                    parentId: 'sympathetic'
                  },
                  {
                    id: 'sympathetic-chain',
                    name: 'Grenzstrang (Truncus sympathicus)',
                    description: 'Sympathische Ganglienkette',
                    icon: '⛓️',
                    difficulty: 'medium',
                    parentId: 'sympathetic'
                  },
                  {
                    id: 'catecholamines',
                    name: 'Noradrenalin/Adrenalin',
                    description: 'Sympathische Neurotransmitter',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'sympathetic'
                  },
                  {
                    id: 'fight-flight',
                    name: 'Fight-or-Flight-Response',
                    description: 'Stressreaktion des Sympathikus',
                    icon: '🏃',
                    difficulty: 'easy',
                    parentId: 'sympathetic'
                  },
                  {
                    id: 'adrenergic-receptors',
                    name: 'α-/β-Rezeptoren',
                    description: 'Adrenergische Rezeptortypen',
                    icon: '🔌',
                    difficulty: 'hard',
                    parentId: 'sympathetic'
                  },
                  {
                    id: 'sympathetic-blockade',
                    name: 'Sympathikusblockade',
                    description: 'Medikamentöse Sympathikushemmung',
                    icon: '🚫',
                    difficulty: 'medium',
                    parentId: 'sympathetic'
                  }
                ]
              },
              {
                id: 'parasympathetic',
                name: 'Parasympathikus',
                description: 'Rest-and-Digest System',
                icon: '🌿',
                difficulty: 'medium',
                parentId: 'autonomic-nervous-system',
                children: [
                  {
                    id: 'parasympathetic-origin',
                    name: 'Kraniosakraler Ausgang',
                    description: 'Ursprung des Parasympathikus',
                    icon: '🏛️',
                    difficulty: 'medium',
                    parentId: 'parasympathetic'
                  },
                  {
                    id: 'acetylcholine',
                    name: 'Acetylcholin',
                    description: 'Parasympathischer Neurotransmitter',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'parasympathetic'
                  },
                  {
                    id: 'rest-digest',
                    name: 'Rest-and-Digest-Response',
                    description: 'Erholungsreaktion des Parasympathikus',
                    icon: '😌',
                    difficulty: 'easy',
                    parentId: 'parasympathetic'
                  },
                  {
                    id: 'cholinergic-receptors',
                    name: 'Muskarinerge/Nikotinerge Rezeptoren',
                    description: 'Cholinerge Rezeptortypen',
                    icon: '🔌',
                    difficulty: 'hard',
                    parentId: 'parasympathetic'
                  },
                  {
                    id: 'parasympathetic-blockade',
                    name: 'Parasympathikusblockade',
                    description: 'Medikamentöse Parasympathikushemmung',
                    icon: '🚫',
                    difficulty: 'medium',
                    parentId: 'parasympathetic'
                  }
                ]
              },
              {
                id: 'enteric-nervous-system',
                name: 'Enterisches Nervensystem',
                description: 'Darmnervensystem',
                icon: '🌀',
                difficulty: 'medium',
                parentId: 'autonomic-nervous-system',
                children: [
                  {
                    id: 'enteric-plexuses',
                    name: 'Darmnervensystem (Meissner-, Auerbach-Plexus)',
                    description: 'Nervengeflechte in der Darmwand',
                    icon: '🕸️',
                    difficulty: 'medium',
                    parentId: 'enteric-nervous-system'
                  },
                  {
                    id: 'peristalsis-regulation',
                    name: 'Peristaltik-Regulation',
                    description: 'Steuerung der Darmbewegung',
                    icon: '🌊',
                    difficulty: 'medium',
                    parentId: 'enteric-nervous-system'
                  },
                  {
                    id: 'gut-neurotransmitters',
                    name: 'Neurotransmitter im Darm',
                    description: 'Enterische Signalstoffe',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'enteric-nervous-system'
                  }
                ]
              }
            ]
          },
          {
            id: 'sensory-organs',
            name: 'Sinnesorgane',
            description: 'Sehen, Hören, Riechen, Schmecken, Tasten',
            icon: '👁️',
            difficulty: 'medium',
            parentId: 'nervous-system',
            children: [
              {
                id: 'eye-vision',
                name: 'Auge & Sehen',
                description: 'Visuelles System',
                icon: '👁️',
                difficulty: 'medium',
                parentId: 'sensory-organs',
                children: [
                  {
                    id: 'eye-anatomy',
                    name: 'Augapfel (Cornea, Iris, Linse, Glaskörper)',
                    description: 'Anatomie des Auges',
                    icon: '👁️',
                    difficulty: 'medium',
                    parentId: 'eye-vision'
                  },
                  {
                    id: 'retina',
                    name: 'Retina (Stäbchen, Zapfen, Ganglienzellen)',
                    description: 'Netzhaut und Photorezeptoren',
                    icon: '📸',
                    difficulty: 'medium',
                    parentId: 'eye-vision'
                  },
                  {
                    id: 'visual-pathway',
                    name: 'Sehbahn (Chiasma opticum → Corpus geniculatum laterale → V1)',
                    description: 'Visuelle Leitungsbahn',
                    icon: '🛤️',
                    difficulty: 'hard',
                    parentId: 'eye-vision'
                  },
                  {
                    id: 'accommodation',
                    name: 'Akkommodation & Refraktion',
                    description: 'Scharfstellung und Lichtbrechung',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'eye-vision'
                  },
                  {
                    id: 'pupillary-reflex',
                    name: 'Pupillenreflex (direkt/indirekt)',
                    description: 'Lichtreaktion der Pupille',
                    icon: '💡',
                    difficulty: 'medium',
                    parentId: 'eye-vision'
                  },
                  {
                    id: 'visual-field-defects',
                    name: 'Gesichtsfeldausfälle',
                    description: 'Pathologische Sehfelddefekte',
                    icon: '🕳️',
                    difficulty: 'hard',
                    parentId: 'eye-vision'
                  },
                  {
                    id: 'color-vision',
                    name: 'Farbsehen (Trichromasie)',
                    description: 'Farbwahrnehmung durch drei Zapfentypen',
                    icon: '🌈',
                    difficulty: 'medium',
                    parentId: 'eye-vision'
                  }
                ]
              },
              {
                id: 'ear-hearing',
                name: 'Ohr & Hören',
                description: 'Auditives und vestibuläres System',
                icon: '👂',
                difficulty: 'medium',
                parentId: 'sensory-organs',
                children: [
                  {
                    id: 'outer-ear',
                    name: 'Äußeres Ohr (Ohrmuschel, Gehörgang)',
                    description: 'Schallaufnahme und -weiterleitung',
                    icon: '👂',
                    difficulty: 'easy',
                    parentId: 'ear-hearing'
                  },
                  {
                    id: 'middle-ear',
                    name: 'Mittelohr (Trommelfell, Gehörknöchelchen)',
                    description: 'Schallverstärkung und -übertragung',
                    icon: '🥁',
                    difficulty: 'medium',
                    parentId: 'ear-hearing'
                  },
                  {
                    id: 'inner-ear',
                    name: 'Innenohr (Cochlea, Vestibularorgan)',
                    description: 'Schallumwandlung und Gleichgewicht',
                    icon: '🐚',
                    difficulty: 'hard',
                    parentId: 'ear-hearing'
                  },
                  {
                    id: 'cochlea-tonotopy',
                    name: 'Hörschnecke & Tonotopie',
                    description: 'Frequenzaufteilung in der Cochlea',
                    icon: '🎵',
                    difficulty: 'hard',
                    parentId: 'ear-hearing'
                  },
                  {
                    id: 'vestibular-system',
                    name: 'Gleichgewichtsorgan (Bogengänge, Maculaorgane)',
                    description: 'Vestibuläre Wahrnehmung',
                    icon: '⚖️',
                    difficulty: 'medium',
                    parentId: 'ear-hearing'
                  },
                  {
                    id: 'hearing-loss',
                    name: 'Schwerhörigkeit (Schallleitungs-/Schallempfindungs-)',
                    description: 'Arten der Hörschädigung',
                    icon: '🔇',
                    difficulty: 'medium',
                    parentId: 'ear-hearing'
                  },
                  {
                    id: 'auditory-pathway',
                    name: 'Zentrale Hörbahn',
                    description: 'Auditive Leitungsbahn zum Kortex',
                    icon: '🛤️',
                    difficulty: 'hard',
                    parentId: 'ear-hearing'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'musculoskeletal-system',
        name: 'BEWEGUNGSAPPARAT',
        description: 'Knochen, Gelenke, Muskeln und Bewegung',
        icon: '🦴',
        difficulty: 'medium',
        parentId: 'anatomy-physiology',
        children: [
          {
            id: 'bone-system',
            name: 'Knochensystem',
            description: 'Anatomie und Physiologie der Knochen',
            icon: '🦴',
            difficulty: 'medium',
            parentId: 'musculoskeletal-system',
            children: [
              {
                id: 'bone-structure',
                name: 'Knochenaufbau & -struktur',
                description: 'Histologie und Anatomie der Knochen',
                icon: '🔬',
                difficulty: 'medium',
                parentId: 'bone-system',
                children: [
                  {
                    id: 'compact-spongy',
                    name: 'Kompakta & Spongiosa',
                    description: 'Kompakte und schwammartige Knochensubstanz',
                    icon: '🧱',
                    difficulty: 'medium',
                    parentId: 'bone-structure'
                  },
                  {
                    id: 'periost-endost',
                    name: 'Periost & Endost',
                    description: 'Knochenhaut und Endosteum',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'bone-structure'
                  },
                  {
                    id: 'bone-cells',
                    name: 'Osteozyten, Osteoblasten, Osteoklasten',
                    description: 'Knochenzellen und ihre Funktionen',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'bone-structure'
                  },
                  {
                    id: 'bone-marrow',
                    name: 'Knochenmark (rot/gelb)',
                    description: 'Hämatopoetisches und Fettmark',
                    icon: '🩸',
                    difficulty: 'medium',
                    parentId: 'bone-structure'
                  },
                  {
                    id: 'bone-blood-supply',
                    name: 'Blutversorgung des Knochens',
                    description: 'Gefäßversorgung der Knochen',
                    icon: '🩸',
                    difficulty: 'medium',
                    parentId: 'bone-structure'
                  },
                  {
                    id: 'haversian-system',
                    name: 'Havers-System (Osteone)',
                    description: 'Strukturelle Einheiten der Kompakta',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'bone-structure'
                  }
                ]
              },
              {
                id: 'bone-development',
                name: 'Knochenentwicklung & -wachstum',
                description: 'Ossifikation und Wachstumsprozesse',
                icon: '📈',
                difficulty: 'medium',
                parentId: 'bone-system',
                children: [
                  {
                    id: 'ossification',
                    name: 'Desmale/chondrale Ossifikation',
                    description: 'Direkte und indirekte Knochenbildung',
                    icon: '🏗️',
                    difficulty: 'hard',
                    parentId: 'bone-development'
                  },
                  {
                    id: 'growth-plates',
                    name: 'Epiphysenfugen',
                    description: 'Wachstumszonen der Röhrenknochen',
                    icon: '📏',
                    difficulty: 'medium',
                    parentId: 'bone-development'
                  },
                  {
                    id: 'growth-hormones',
                    name: 'Wachstumshormone (GH, IGF-1)',
                    description: 'Hormonelle Regulation des Knochenwachstums',
                    icon: '🧪',
                    difficulty: 'hard',
                    parentId: 'bone-development'
                  },
                  {
                    id: 'bone-remodeling',
                    name: 'Knochenumbau (Remodeling)',
                    description: 'Kontinuierlicher Knochenumbau',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'bone-development'
                  },
                  {
                    id: 'wolffs-law',
                    name: 'Wolff\'sches Gesetz',
                    description: 'Anpassung der Knochen an Belastung',
                    icon: '💪',
                    difficulty: 'medium',
                    parentId: 'bone-development'
                  },
                  {
                    id: 'peak-bone-mass',
                    name: 'Peak Bone Mass',
                    description: 'Maximale Knochenmasse im jungen Erwachsenenalter',
                    icon: '🏔️',
                    difficulty: 'medium',
                    parentId: 'bone-development'
                  }
                ]
              },
              {
                id: 'fracture-healing',
                name: 'Frakturheilung',
                description: 'Phasen und Prozesse der Knochenbruchheilung',
                icon: '🔨',
                difficulty: 'medium',
                parentId: 'bone-system',
                children: [
                  {
                    id: 'hematoma-inflammation-phase',
                    name: 'Hämatom- & Entzündungsphase',
                    description: 'Initiale Reaktion nach Fraktur (0-7 Tage)',
                    icon: '🩸',
                    difficulty: 'medium',
                    parentId: 'fracture-healing'
                  },
                  {
                    id: 'soft-callus-phase',
                    name: 'Reparationsphase - weicher Kallus',
                    description: 'Bildung von Granulationsgewebe und Knorpel (1-4 Wochen)',
                    icon: '🧽',
                    difficulty: 'medium',
                    parentId: 'fracture-healing'
                  },
                  {
                    id: 'hard-callus-phase',
                    name: 'Reparationsphase - harter Kallus',
                    description: 'Verknöcherung des weichen Kallus (4-16 Wochen)',
                    icon: '🧱',
                    difficulty: 'medium',
                    parentId: 'fracture-healing'
                  },
                  {
                    id: 'remodeling-phase',
                    name: 'Umbauphase (Remodeling)',
                    description: 'Wiederherstellung der ursprünglichen Knochenstruktur (Monate-Jahre)',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'fracture-healing'
                  },
                  {
                    id: 'fracture-classification',
                    name: 'Frakturtypen (AO-Klassifikation)',
                    description: 'Systematische Einteilung von Knochenbrüchen',
                    icon: '📊',
                    difficulty: 'hard',
                    parentId: 'fracture-healing'
                  },
                  {
                    id: 'fracture-complications',
                    name: 'Komplikationen (Pseudarthrose, Osteomyelitis)',
                    description: 'Heilungsstörungen und Infektionen',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'fracture-healing'
                  },
                  {
                    id: 'healing-disorders',
                    name: 'Heilungsstörungen',
                    description: 'Verzögerte Heilung, Nonunion, Malunion',
                    icon: '🚫',
                    difficulty: 'hard',
                    parentId: 'fracture-healing'
                  }
                ]
              },
              {
                id: 'bone-metabolism',
                name: 'Knochenstoffwechsel',
                description: 'Regulation des Knochen- und Mineralstoffwechsels',
                icon: '⚗️',
                difficulty: 'hard',
                parentId: 'bone-system',
                children: [
                  {
                    id: 'calcium-phosphate-homeostasis',
                    name: 'Kalzium-Phosphat-Haushalt',
                    description: 'Regulation der Mineralstoffkonzentrationen',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'bone-metabolism'
                  },
                  {
                    id: 'vitamin-d-metabolism',
                    name: 'Vitamin D (Cholecalciferol → Calcitriol)',
                    description: 'Synthese und Aktivierung von Vitamin D',
                    icon: '☀️',
                    difficulty: 'hard',
                    parentId: 'bone-metabolism'
                  },
                  {
                    id: 'parathyroid-hormone',
                    name: 'Parathormon (PTH)',
                    description: 'Regulation der Kalziumhomöostase',
                    icon: '🦋',
                    difficulty: 'hard',
                    parentId: 'bone-metabolism'
                  },
                  {
                    id: 'calcitonin',
                    name: 'Calcitonin',
                    description: 'Kalziumsenkende Wirkung der Schilddrüse',
                    icon: '🔽',
                    difficulty: 'medium',
                    parentId: 'bone-metabolism'
                  },
                  {
                    id: 'osteoporosis-pathophysiology',
                    name: 'Osteoporose-Pathophysiologie',
                    description: 'Mechanismen des Knochenmasseverlusts',
                    icon: '🕳️',
                    difficulty: 'hard',
                    parentId: 'bone-metabolism'
                  },
                  {
                    id: 'rank-rankl-opg-system',
                    name: 'RANK/RANKL/OPG-System',
                    description: 'Molekulare Regulation der Osteoklastenaktivität',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'bone-metabolism'
                  }
                ]
              }
            ]
          },
          {
            id: 'joint-system',
            name: 'Gelenksystem',
            description: 'Anatomie und Biomechanik der Gelenke',
            icon: '🔗',
            difficulty: 'medium',
            parentId: 'musculoskeletal-system',
            children: [
              {
                id: 'joint-types',
                name: 'Gelenktypen',
                description: 'Klassifikation der Gelenke',
                icon: '🔗',
                difficulty: 'medium',
                parentId: 'joint-system',
                children: [
                  {
                    id: 'synarthroses',
                    name: 'Synarthrosen (unbeweglich)',
                    description: 'Unbewegliche Verbindungen',
                    icon: '🧱',
                    difficulty: 'easy',
                    parentId: 'joint-types'
                  },
                  {
                    id: 'amphiarthroses',
                    name: 'Amphiarthrosen (wenig beweglich)',
                    description: 'Straffe Gelenke',
                    icon: '⚖️',
                    difficulty: 'easy',
                    parentId: 'joint-types'
                  },
                  {
                    id: 'diarthroses',
                    name: 'Diarthrosen (frei beweglich)',
                    description: 'Echte Gelenke',
                    icon: '🔄',
                    difficulty: 'easy',
                    parentId: 'joint-types'
                  },
                  {
                    id: 'ball-socket',
                    name: 'Kugelgelenk (Schulter, Hüfte)',
                    description: 'Dreiachsige Gelenke',
                    icon: '⚽',
                    difficulty: 'medium',
                    parentId: 'joint-types'
                  },
                  {
                    id: 'hinge-joint',
                    name: 'Scharniergelenk (Ellenbogen, Knie)',
                    description: 'Einachsige Gelenke',
                    icon: '🚪',
                    difficulty: 'medium',
                    parentId: 'joint-types'
                  },
                  {
                    id: 'saddle-joint',
                    name: 'Sattelgelenk (Daumen)',
                    description: 'Zweiachsiges Gelenk des Daumens',
                    icon: '🏇',
                    difficulty: 'medium',
                    parentId: 'joint-types'
                  },
                  {
                    id: 'pivot-joint',
                    name: 'Drehgelenk (Atlantoaxial)',
                    description: 'Rotationsgelenk der Halswirbelsäule',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'joint-types'
                  },
                  {
                    id: 'ellipsoid-joint',
                    name: 'Eigelenk (Handgelenk)',
                    description: 'Zweiachsiges ellipsoides Gelenk',
                    icon: '🥚',
                    difficulty: 'medium',
                    parentId: 'joint-types'
                  }
                ]
              },
              {
                id: 'joint-structure',
                name: 'Gelenkaufbau',
                description: 'Anatomie und Histologie der Gelenke',
                icon: '🏗️',
                difficulty: 'medium',
                parentId: 'joint-system',
                children: [
                  {
                    id: 'articular-cartilage',
                    name: 'Gelenkknorpel (hyaliner Knorpel)',
                    description: 'Knorpelüberzug der Gelenkflächen',
                    icon: '🦴',
                    difficulty: 'medium',
                    parentId: 'joint-structure'
                  },
                  {
                    id: 'joint-capsule',
                    name: 'Gelenkkapsel (Stratum fibrosum/synoviale)',
                    description: 'Äußere und innere Kapselschicht',
                    icon: '🫖',
                    difficulty: 'medium',
                    parentId: 'joint-structure'
                  },
                  {
                    id: 'synovial-fluid',
                    name: 'Synovialflüssigkeit (Hyaluronsäure)',
                    description: 'Gelenkschmiere und Nährstoffversorgung',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'joint-structure'
                  },
                  {
                    id: 'ligaments-tendons',
                    name: 'Bänder & Sehnen',
                    description: 'Stabilisierende Strukturen',
                    icon: '🪢',
                    difficulty: 'medium',
                    parentId: 'joint-structure'
                  },
                  {
                    id: 'menisci-discs',
                    name: 'Menisken & Disci',
                    description: 'Gelenkzwischenscheiben',
                    icon: '🌙',
                    difficulty: 'medium',
                    parentId: 'joint-structure'
                  },
                  {
                    id: 'bursae',
                    name: 'Schleimbeutel (Bursae)',
                    description: 'Reibungsreduzierende Strukturen',
                    icon: '🛍️',
                    difficulty: 'medium',
                    parentId: 'joint-structure'
                  },
                  {
                    id: 'joint-innervation',
                    name: 'Gelenkinnervation',
                    description: 'Nervale Versorgung der Gelenke',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'joint-structure'
                  }
                ]
              },
              {
                id: 'joint-movement',
                name: 'Bewegungslehre',
                description: 'Biomechanik und Bewegungsformen der Gelenke',
                icon: '🏃',
                difficulty: 'medium',
                parentId: 'joint-system',
                children: [
                  {
                    id: 'flexion-extension',
                    name: 'Flexion/Extension',
                    description: 'Beugung und Streckung',
                    icon: '↕️',
                    difficulty: 'easy',
                    parentId: 'joint-movement'
                  },
                  {
                    id: 'abduction-adduction',
                    name: 'Abduktion/Adduktion',
                    description: 'Abspreizung und Heranführung',
                    icon: '↔️',
                    difficulty: 'easy',
                    parentId: 'joint-movement'
                  },
                  {
                    id: 'rotation',
                    name: 'Innen-/Außenrotation',
                    description: 'Drehbewegungen um die Längsachse',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'joint-movement'
                  },
                  {
                    id: 'circumduction',
                    name: 'Zirkumduktion',
                    description: 'Kreisförmige Bewegung',
                    icon: '🌀',
                    difficulty: 'medium',
                    parentId: 'joint-movement'
                  },
                  {
                    id: 'pronation-supination',
                    name: 'Pro-/Supination',
                    description: 'Drehung des Unterarms',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'joint-movement'
                  },
                  {
                    id: 'dorsiflexion-plantarflexion',
                    name: 'Dorsalflexion/Plantarflexion',
                    description: 'Fuß heben und senken',
                    icon: '🦶',
                    difficulty: 'medium',
                    parentId: 'joint-movement'
                  },
                  {
                    id: 'neutral-zero-method',
                    name: 'Neutral-Null-Methode',
                    description: 'Standardisierte Bewegungsmessung',
                    icon: '📐',
                    difficulty: 'hard',
                    parentId: 'joint-movement'
                  }
                ]
              },
              {
                id: 'joint-pathology',
                name: 'Gelenkpathologie',
                description: 'Erkrankungen und Störungen der Gelenke',
                icon: '🩹',
                difficulty: 'hard',
                parentId: 'joint-system',
                children: [
                  {
                    id: 'osteoarthritis-joint',
                    name: 'Arthrose (degenerativ)',
                    description: 'Verschleißbedingte Gelenkerkrankung',
                    icon: '⚙️',
                    difficulty: 'medium',
                    parentId: 'joint-pathology'
                  },
                  {
                    id: 'arthritis-joint',
                    name: 'Arthritis (entzündlich)',
                    description: 'Entzündliche Gelenkerkrankung',
                    icon: '🔥',
                    difficulty: 'medium',
                    parentId: 'joint-pathology'
                  },
                  {
                    id: 'joint-effusion',
                    name: 'Gelenkerguss',
                    description: 'Flüssigkeitsansammlung im Gelenk',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'joint-pathology'
                  },
                  {
                    id: 'dislocation-subluxation',
                    name: 'Luxation/Subluxation',
                    description: 'Gelenkverrenkung und Teilverrenkung',
                    icon: '💥',
                    difficulty: 'medium',
                    parentId: 'joint-pathology'
                  },
                  {
                    id: 'joint-stiffness',
                    name: 'Gelenksteife/Ankylose',
                    description: 'Bewegungseinschränkung und Versteifung',
                    icon: '🔒',
                    difficulty: 'medium',
                    parentId: 'joint-pathology'
                  },
                  {
                    id: 'joint-instability',
                    name: 'Gelenkinstabilität',
                    description: 'Mangelnde Gelenkstabilität',
                    icon: '🌊',
                    difficulty: 'medium',
                    parentId: 'joint-pathology'
                  }
                ]
              }
            ]
          },
          {
            id: 'muscle-system',
            name: 'Muskelsystem',
            description: 'Anatomie und Physiologie der Muskulatur',
            icon: '💪',
            difficulty: 'medium',
            parentId: 'musculoskeletal-system',
            children: [
              {
                id: 'muscle-types',
                name: 'Muskeltypen',
                description: 'Klassifikation der Muskulatur',
                icon: '🔬',
                difficulty: 'medium',
                parentId: 'muscle-system',
                children: [
                  {
                    id: 'skeletal-muscle',
                    name: 'Skelettmuskel (quergestreift, willkürlich)',
                    description: 'Willkürliche Muskulatur',
                    icon: '💪',
                    difficulty: 'easy',
                    parentId: 'muscle-types'
                  },
                  {
                    id: 'cardiac-muscle',
                    name: 'Herzmuskel (quergestreift, unwillkürlich)',
                    description: 'Myokard',
                    icon: '❤️',
                    difficulty: 'medium',
                    parentId: 'muscle-types'
                  },
                  {
                    id: 'smooth-muscle',
                    name: 'Glatte Muskulatur (unwillkürlich)',
                    description: 'Eingeweidemuskulatur',
                    icon: '🌊',
                    difficulty: 'medium',
                    parentId: 'muscle-types'
                  },
                  {
                    id: 'muscle-transitions',
                    name: 'Mischformen & Übergänge',
                    description: 'Intermediäre Muskeltypen',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'muscle-types'
                  }
                ]
              },
              {
                id: 'muscle-contraction',
                name: 'Muskelkontraktion',
                description: 'Mechanismen und Regulation der Muskelkontraktion',
                icon: '⚡',
                difficulty: 'hard',
                parentId: 'muscle-system',
                children: [
                  {
                    id: 'sliding-filament-theory',
                    name: 'Gleitfilament-Theorie (Aktin/Myosin)',
                    description: 'Molekulare Grundlagen der Kontraktion',
                    icon: '🧬',
                    difficulty: 'hard',
                    parentId: 'muscle-contraction'
                  },
                  {
                    id: 'electromechanical-coupling',
                    name: 'Elektromechanische Kopplung',
                    description: 'Übertragung elektrischer Signale in mechanische Kraft',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'muscle-contraction'
                  },
                  {
                    id: 'calcium-regulation',
                    name: 'Kalzium-Regulation (Troponin/Tropomyosin)',
                    description: 'Regulation durch Kalzium und regulatorische Proteine',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'muscle-contraction'
                  },
                  {
                    id: 'energy-supply',
                    name: 'Energiebereitstellung (ATP, Kreatinphosphat)',
                    description: 'Energiequellen für die Muskelkontraktion',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'muscle-contraction'
                  },
                  {
                    id: 'isometric-isotonic',
                    name: 'Isometrisch/isotonisch',
                    description: 'Kontraktionsformen ohne/mit Längenänderung',
                    icon: '📏',
                    difficulty: 'medium',
                    parentId: 'muscle-contraction'
                  },
                  {
                    id: 'concentric-eccentric',
                    name: 'Konzentrisch/exzentrisch',
                    description: 'Verkürzende und verlängernde Kontraktion',
                    icon: '↕️',
                    difficulty: 'medium',
                    parentId: 'muscle-contraction'
                  },
                  {
                    id: 'muscle-tone',
                    name: 'Muskeltonus',
                    description: 'Grundspannung der Muskulatur',
                    icon: '🎵',
                    difficulty: 'medium',
                    parentId: 'muscle-contraction'
                  }
                ]
              },
              {
                id: 'muscle-metabolism',
                name: 'Muskelstoffwechsel',
                description: 'Energiestoffwechsel und metabolische Prozesse',
                icon: '🔥',
                difficulty: 'hard',
                parentId: 'muscle-system',
                children: [
                  {
                    id: 'aerobic-anaerobic',
                    name: 'Aerober/anaerober Stoffwechsel',
                    description: 'Sauerstoffabhängige und -unabhängige Energiegewinnung',
                    icon: '🫁',
                    difficulty: 'medium',
                    parentId: 'muscle-metabolism'
                  },
                  {
                    id: 'lactate-formation',
                    name: 'Laktatbildung & -abbau',
                    description: 'Milchsäureproduktion und -verwertung',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'muscle-metabolism'
                  },
                  {
                    id: 'oxygen-debt',
                    name: 'Sauerstoffschuld',
                    description: 'Nachholbedarf an Sauerstoff nach Belastung',
                    icon: '💨',
                    difficulty: 'medium',
                    parentId: 'muscle-metabolism'
                  },
                  {
                    id: 'muscle-fatigue',
                    name: 'Muskelermüdung',
                    description: 'Mechanismen der Leistungsabnahme',
                    icon: '😴',
                    difficulty: 'medium',
                    parentId: 'muscle-metabolism'
                  },
                  {
                    id: 'training-adaptations',
                    name: 'Trainingsanpassungen',
                    description: 'Strukturelle und funktionelle Anpassungen',
                    icon: '📈',
                    difficulty: 'medium',
                    parentId: 'muscle-metabolism'
                  },
                  {
                    id: 'mitochondrial-biogenesis',
                    name: 'Mitochondriale Biogenese',
                    description: 'Neubildung von Mitochondrien',
                    icon: '🧬',
                    difficulty: 'hard',
                    parentId: 'muscle-metabolism'
                  }
                ]
              },
              {
                id: 'muscle-fibers',
                name: 'Muskelfasern',
                description: 'Fasertypen und ihre Eigenschaften',
                icon: '🧵',
                difficulty: 'medium',
                parentId: 'muscle-system',
                children: [
                  {
                    id: 'type-1-fibers',
                    name: 'Typ I (slow twitch, ausdauernd)',
                    description: 'Langsame, oxidative Fasern',
                    icon: '🐌',
                    difficulty: 'medium',
                    parentId: 'muscle-fibers'
                  },
                  {
                    id: 'type-2a-fibers',
                    name: 'Typ IIa (fast twitch, oxidativ)',
                    description: 'Schnelle, oxidative Fasern',
                    icon: '🏃',
                    difficulty: 'medium',
                    parentId: 'muscle-fibers'
                  },
                  {
                    id: 'type-2x-fibers',
                    name: 'Typ IIx (fast twitch, glykolytisch)',
                    description: 'Schnelle, glykolytische Fasern',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'muscle-fibers'
                  },
                  {
                    id: 'fiber-distribution',
                    name: 'Fasertypverteilung',
                    description: 'Muskeltypische Faserkomposition',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'muscle-fibers'
                  },
                  {
                    id: 'fiber-transformation',
                    name: 'Fasertyp-Umwandlung',
                    description: 'Plastizität der Fasertypen',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'muscle-fibers'
                  }
                ]
              },
              {
                id: 'muscle-innervation',
                name: 'Muskelinnervation',
                description: 'Nervale Steuerung der Muskulatur',
                icon: '🧠',
                difficulty: 'hard',
                parentId: 'muscle-system',
                children: [
                  {
                    id: 'motor-endplate',
                    name: 'Motorische Endplatte',
                    description: 'Neuromuskuläre Synapse',
                    icon: '🔌',
                    difficulty: 'hard',
                    parentId: 'muscle-innervation'
                  },
                  {
                    id: 'motor-unit',
                    name: 'Motorische Einheit',
                    description: 'Motoneuron und innervierte Muskelfasern',
                    icon: '🔗',
                    difficulty: 'medium',
                    parentId: 'muscle-innervation'
                  },
                  {
                    id: 'recruitment-frequency',
                    name: 'Rekrutierung & Frequenzierung',
                    description: 'Kraftregulation durch Einheitenaktivierung',
                    icon: '📶',
                    difficulty: 'hard',
                    parentId: 'muscle-innervation'
                  },
                  {
                    id: 'neuromuscular-transmission',
                    name: 'Neuromuskuläre Übertragung',
                    description: 'Signalübertragung an der motorischen Endplatte',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'muscle-innervation'
                  },
                  {
                    id: 'muscle-relaxants',
                    name: 'Muskelrelaxanzien',
                    description: 'Pharmakologische Muskelentspannung',
                    icon: '💊',
                    difficulty: 'medium',
                    parentId: 'muscle-innervation'
                  },
                  {
                    id: 'myasthenia-gravis',
                    name: 'Myasthenia gravis',
                    description: 'Autoimmune Muskelschwäche',
                    icon: '🛡️',
                    difficulty: 'hard',
                    parentId: 'muscle-innervation'
                  }
                ]
              }
            ]
          },
          {
            id: 'spine-system',
            name: 'Wirbelsäule',
            description: 'Anatomie und Funktionen der Wirbelsäule',
            icon: '🦴',
            difficulty: 'medium',
            parentId: 'musculoskeletal-system',
            children: [
              {
                id: 'spine-structure',
                name: 'Aufbau & Abschnitte',
                description: 'Anatomische Gliederung der Wirbelsäule',
                icon: '📏',
                difficulty: 'medium',
                parentId: 'spine-system',
                children: [
                  {
                    id: 'cervical-spine',
                    name: 'Halswirbelsäule (C1-C7, Atlas/Axis)',
                    description: '7 Halswirbel mit Atlas und Axis',
                    icon: '🦒',
                    difficulty: 'medium',
                    parentId: 'spine-structure'
                  },
                  {
                    id: 'thoracic-spine',
                    name: 'Brustwirbelsäule (Th1-Th12)',
                    description: '12 Brustwirbel mit Rippenansätzen',
                    icon: '🫁',
                    difficulty: 'medium',
                    parentId: 'spine-structure'
                  },
                  {
                    id: 'lumbar-spine',
                    name: 'Lendenwirbelsäule (L1-L5)',
                    description: '5 Lendenwirbel, größte Belastung',
                    icon: '💪',
                    difficulty: 'medium',
                    parentId: 'spine-structure'
                  },
                  {
                    id: 'sacrum',
                    name: 'Kreuzbein (S1-S5)',
                    description: '5 verwachsene Kreuzwirbel',
                    icon: '🔺',
                    difficulty: 'medium',
                    parentId: 'spine-structure'
                  },
                  {
                    id: 'coccyx',
                    name: 'Steißbein (Co1-Co4)',
                    description: '3-4 rudimentäre Steißwirbel',
                    icon: '🔻',
                    difficulty: 'easy',
                    parentId: 'spine-structure'
                  },
                  {
                    id: 'spinal-curvatures',
                    name: 'Physiologische Krümmungen (Lordose/Kyphose)',
                    description: 'S-förmige Krümmung zur Stoßdämpfung',
                    icon: '〰️',
                    difficulty: 'medium',
                    parentId: 'spine-structure'
                  }
                ]
              },
              {
                id: 'vertebral-anatomy',
                name: 'Wirbelaufbau',
                description: 'Anatomie einzelner Wirbel',
                icon: '🦴',
                difficulty: 'medium',
                parentId: 'spine-system',
                children: [
                  {
                    id: 'vertebral-body',
                    name: 'Wirbelkörper',
                    description: 'Tragender Teil des Wirbels',
                    icon: '🧱',
                    difficulty: 'medium',
                    parentId: 'vertebral-anatomy'
                  },
                  {
                    id: 'vertebral-arch',
                    name: 'Wirbelbogen',
                    description: 'Bogenförmiger Abschnitt um Wirbelkanal',
                    icon: '🌉',
                    difficulty: 'medium',
                    parentId: 'vertebral-anatomy'
                  },
                  {
                    id: 'vertebral-processes',
                    name: 'Dorn-/Querfortsätze',
                    description: 'Muskel- und Bandansätze',
                    icon: '🔱',
                    difficulty: 'medium',
                    parentId: 'vertebral-anatomy'
                  },
                  {
                    id: 'articular-processes',
                    name: 'Gelenkfortsätze',
                    description: 'Wirbelgelenke zwischen benachbarten Wirbeln',
                    icon: '🔗',
                    difficulty: 'medium',
                    parentId: 'vertebral-anatomy'
                  },
                  {
                    id: 'vertebral-canal',
                    name: 'Wirbelkanal',
                    description: 'Schutzraum für das Rückenmark',
                    icon: '🕳️',
                    difficulty: 'medium',
                    parentId: 'vertebral-anatomy'
                  },
                  {
                    id: 'intervertebral-discs-anatomy',
                    name: 'Zwischenwirbelscheiben',
                    description: 'Elastische Verbindung zwischen Wirbelkörpern',
                    icon: '💿',
                    difficulty: 'medium',
                    parentId: 'vertebral-anatomy'
                  }
                ]
              },
              {
                id: 'intervertebral-discs',
                name: 'Bandscheiben',
                description: 'Aufbau und Pathologie der Bandscheiben',
                icon: '💿',
                difficulty: 'medium',
                parentId: 'spine-system',
                children: [
                  {
                    id: 'annulus-fibrosus',
                    name: 'Anulus fibrosus (Faserring)',
                    description: 'Äußerer Faserring der Bandscheibe',
                    icon: '🎯',
                    difficulty: 'medium',
                    parentId: 'intervertebral-discs'
                  },
                  {
                    id: 'nucleus-pulposus',
                    name: 'Nucleus pulposus (Gallertkern)',
                    description: 'Gallertiger Kern der Bandscheibe',
                    icon: '🫧',
                    difficulty: 'medium',
                    parentId: 'intervertebral-discs'
                  },
                  {
                    id: 'disc-nutrition',
                    name: 'Nährstoffversorgung (Diffusion)',
                    description: 'Diffusionsabhängige Ernährung der Bandscheibe',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'intervertebral-discs'
                  },
                  {
                    id: 'disc-aging',
                    name: 'Alterungsprozesse',
                    description: 'Degenerative Veränderungen der Bandscheiben',
                    icon: '⏳',
                    difficulty: 'medium',
                    parentId: 'intervertebral-discs'
                  },
                  {
                    id: 'disc-herniation',
                    name: 'Bandscheibenvorfall (Prolaps/Protrusion)',
                    description: 'Vorwölbung oder Austritt von Bandscheibengewebe',
                    icon: '💥',
                    difficulty: 'hard',
                    parentId: 'intervertebral-discs'
                  },
                  {
                    id: 'discopathy',
                    name: 'Diskopathie',
                    description: 'Degenerative Bandscheibenerkrankung',
                    icon: '🩹',
                    difficulty: 'medium',
                    parentId: 'intervertebral-discs'
                  }
                ]
              },
              {
                id: 'spinal-cord-nerves',
                name: 'Rückenmark & Spinalnerven',
                description: 'Neuroanatomie der Wirbelsäule',
                icon: '🧠',
                difficulty: 'hard',
                parentId: 'spine-system',
                children: [
                  {
                    id: 'spinal-segments',
                    name: 'Rückenmarkssegmente',
                    description: 'Segmentale Gliederung des Rückenmarks',
                    icon: '📊',
                    difficulty: 'hard',
                    parentId: 'spinal-cord-nerves'
                  },
                  {
                    id: 'spinal-nerve-exit',
                    name: 'Spinalnerven-Austritt',
                    description: 'Nervenwurzeln und Foramen intervertebrale',
                    icon: '🚪',
                    difficulty: 'medium',
                    parentId: 'spinal-cord-nerves'
                  },
                  {
                    id: 'dermatomes-myotomes',
                    name: 'Dermatome & Myotome',
                    description: 'Hautareale und Muskelgruppen der Segmente',
                    icon: '🗺️',
                    difficulty: 'hard',
                    parentId: 'spinal-cord-nerves'
                  },
                  {
                    id: 'reflex-testing',
                    name: 'Reflexprüfung (PSR, ASR, BSR)',
                    description: 'Eigenreflexe zur neurologischen Diagnostik',
                    icon: '🔨',
                    difficulty: 'medium',
                    parentId: 'spinal-cord-nerves'
                  },
                  {
                    id: 'spinal-cord-syndromes',
                    name: 'Querschnittssyndrome',
                    description: 'Komplette und inkomplette Rückenmarksverletzungen',
                    icon: '🚫',
                    difficulty: 'hard',
                    parentId: 'spinal-cord-nerves'
                  },
                  {
                    id: 'cauda-equina',
                    name: 'Cauda equina',
                    description: 'Nervenwurzeln unterhalb des Conus medullaris',
                    icon: '🐎',
                    difficulty: 'medium',
                    parentId: 'spinal-cord-nerves'
                  }
                ]
              },
              {
                id: 'back-muscles',
                name: 'Rückenmuskulatur',
                description: 'Muskuläre Stabilisierung der Wirbelsäule',
                icon: '💪',
                difficulty: 'medium',
                parentId: 'spine-system',
                children: [
                  {
                    id: 'autochthonous-muscles',
                    name: 'Autochthone Rückenmuskulatur (M. erector spinae)',
                    description: 'Tiefe, wirbelsäulennahe Muskulatur',
                    icon: '🏗️',
                    difficulty: 'medium',
                    parentId: 'back-muscles'
                  },
                  {
                    id: 'superficial-back-muscles',
                    name: 'Oberflächliche Rückenmuskeln',
                    description: 'Oberflächliche Schicht der Rückenmuskulatur',
                    icon: '🎭',
                    difficulty: 'medium',
                    parentId: 'back-muscles'
                  },
                  {
                    id: 'abdominal-muscles',
                    name: 'Bauchmuskulatur (Antagonist)',
                    description: 'Gegenspieler der Rückenmuskulatur',
                    icon: '🤰',
                    difficulty: 'medium',
                    parentId: 'back-muscles'
                  },
                  {
                    id: 'postural-movement-muscles',
                    name: 'Haltungs-/Bewegungsmuskulatur',
                    description: 'Unterscheidung zwischen tonischen und phasischen Muskeln',
                    icon: '⚖️',
                    difficulty: 'medium',
                    parentId: 'back-muscles'
                  },
                  {
                    id: 'muscular-imbalances',
                    name: 'Muskuläre Dysbalancen',
                    description: 'Ungleichgewicht zwischen Muskelgruppen',
                    icon: '⚖️',
                    difficulty: 'medium',
                    parentId: 'back-muscles'
                  },
                  {
                    id: 'core-stability',
                    name: 'Core-Stabilität',
                    description: 'Rumpfstabilisierende Muskulatur',
                    icon: '🎯',
                    difficulty: 'medium',
                    parentId: 'back-muscles'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'renal-system',
        name: 'NIEREN & HARNWEGE',
        description: 'Nierenfunktion und Harnwege',
        icon: '🫘',
        difficulty: 'medium',
        parentId: 'anatomy-physiology',
        children: [
          {
            id: 'kidney-structure',
            name: 'Nierenaufbau',
            description: 'Anatomie und Histologie der Nieren',
            icon: '🫘',
            difficulty: 'medium',
            parentId: 'renal-system',
            children: [
              {
                id: 'kidney-gross-anatomy',
                name: 'Makroskopischer Aufbau',
                description: 'Grobstruktur der Niere',
                icon: '🔍',
                difficulty: 'medium',
                parentId: 'kidney-structure',
                children: [
                  {
                    id: 'renal-cortex',
                    name: 'Nierenrinde (Cortex)',
                    description: 'Äußere Nierenschicht',
                    icon: '🌰',
                    difficulty: 'easy',
                    parentId: 'kidney-gross-anatomy'
                  },
                  {
                    id: 'renal-medulla',
                    name: 'Nierenmark (Medulla)',
                    description: 'Innere Nierenschicht',
                    icon: '🍯',
                    difficulty: 'easy',
                    parentId: 'kidney-gross-anatomy'
                  },
                  {
                    id: 'renal-pelvis',
                    name: 'Nierenbecken (Pelvis)',
                    description: 'Harnsammelsystem',
                    icon: '🏺',
                    difficulty: 'easy',
                    parentId: 'kidney-gross-anatomy'
                  },
                  {
                    id: 'renal-hilum',
                    name: 'Nierenhilus (Gefäß-/Nervenein-/austritt)',
                    description: 'Ein- und Austrittsstelle am Nierenrand',
                    icon: '🚪',
                    difficulty: 'medium',
                    parentId: 'kidney-gross-anatomy'
                  },
                  {
                    id: 'renal-capsule',
                    name: 'Nierenkapsel',
                    description: 'Bindegewebige Umhüllung',
                    icon: '🛡️',
                    difficulty: 'easy',
                    parentId: 'kidney-gross-anatomy'
                  },
                  {
                    id: 'renal-lobes',
                    name: 'Nierenlappen & -pyramiden',
                    description: 'Segmentale Gliederung',
                    icon: '🍕',
                    difficulty: 'medium',
                    parentId: 'kidney-gross-anatomy'
                  }
                ]
              },
              {
                id: 'kidney-microscopic-anatomy',
                name: 'Mikroskopischer Aufbau',
                description: 'Histologie der Niere',
                icon: '🔬',
                difficulty: 'hard',
                parentId: 'kidney-structure',
                children: [
                  {
                    id: 'nephron',
                    name: 'Nephron (funktionelle Einheit)',
                    description: 'Funktionelle Grundeinheit der Niere',
                    icon: '🧬',
                    difficulty: 'medium',
                    parentId: 'kidney-microscopic-anatomy'
                  },
                  {
                    id: 'glomerulus',
                    name: 'Glomerulus (Gefäßknäuel)',
                    description: 'Kapillarknäuel für Filtration',
                    icon: '🕸️',
                    difficulty: 'medium',
                    parentId: 'kidney-microscopic-anatomy'
                  },
                  {
                    id: 'bowman-capsule',
                    name: 'Bowman-Kapsel',
                    description: 'Umhüllung des Glomerulus',
                    icon: '🫖',
                    difficulty: 'medium',
                    parentId: 'kidney-microscopic-anatomy'
                  },
                  {
                    id: 'tubular-system',
                    name: 'Tubulusystem (proximal/distal)',
                    description: 'Harnkanälchen',
                    icon: '🚰',
                    difficulty: 'medium',
                    parentId: 'kidney-microscopic-anatomy'
                  },
                  {
                    id: 'loop-of-henle',
                    name: 'Henle-Schleife (absteigend/aufsteigend)',
                    description: 'U-förmiger Tubulusteil',
                    icon: '↩️',
                    difficulty: 'medium',
                    parentId: 'kidney-microscopic-anatomy'
                  },
                  {
                    id: 'collecting-duct',
                    name: 'Sammelrohr',
                    description: 'Endstrecke der Harnkonzentration',
                    icon: '📡',
                    difficulty: 'medium',
                    parentId: 'kidney-microscopic-anatomy'
                  },
                  {
                    id: 'juxtaglomerular-apparatus',
                    name: 'Juxtaglomerulärer Apparat',
                    description: 'Kontrollzentrum für Filtration und Blutdruck',
                    icon: '🎛️',
                    difficulty: 'hard',
                    parentId: 'kidney-microscopic-anatomy'
                  }
                ]
              },
              {
                id: 'kidney-blood-supply',
                name: 'Blutversorgung',
                description: 'Gefäßsystem der Nieren',
                icon: '🩸',
                difficulty: 'hard',
                parentId: 'kidney-structure',
                children: [
                  {
                    id: 'renal-artery-segments',
                    name: 'A. renalis → Segmentarterien',
                    description: 'Aufzweigung der Nierenarterie',
                    icon: '🌳',
                    difficulty: 'medium',
                    parentId: 'kidney-blood-supply'
                  },
                  {
                    id: 'interlobular-arteries',
                    name: 'Interlobuläre Arterien',
                    description: 'Arterien zwischen den Nierenlappen',
                    icon: '🌿',
                    difficulty: 'medium',
                    parentId: 'kidney-blood-supply'
                  },
                  {
                    id: 'afferent-efferent-vessels',
                    name: 'Vas afferens/efferens',
                    description: 'Zu- und abführende Glomerulus-Gefäße',
                    icon: '↔️',
                    difficulty: 'medium',
                    parentId: 'kidney-blood-supply'
                  },
                  {
                    id: 'glomerular-capillaries',
                    name: 'Glomeruläre Kapillaren',
                    description: 'Kapillarnetz im Glomerulus',
                    icon: '🕸️',
                    difficulty: 'medium',
                    parentId: 'kidney-blood-supply'
                  },
                  {
                    id: 'peritubular-capillaries',
                    name: 'Peritubulare Kapillaren',
                    description: 'Kapillarnetz um die Tubuli',
                    icon: '🔗',
                    difficulty: 'medium',
                    parentId: 'kidney-blood-supply'
                  },
                  {
                    id: 'vasa-recta',
                    name: 'Vasa recta',
                    description: 'Gerade Gefäße im Nierenmark',
                    icon: '📏',
                    difficulty: 'hard',
                    parentId: 'kidney-blood-supply'
                  },
                  {
                    id: 'venous-return',
                    name: 'Venöser Rückfluss',
                    description: 'Venöses System der Niere',
                    icon: '🔙',
                    difficulty: 'medium',
                    parentId: 'kidney-blood-supply'
                  }
                ]
              }
            ]
          },
          {
            id: 'kidney-function',
            name: 'Nierenfunktion',
            description: 'Physiologie und Regulation der Nierenfunktion',
            icon: '⚙️',
            difficulty: 'hard',
            parentId: 'renal-system',
            children: [
              {
                id: 'glomerular-filtration',
                name: 'Glomeruläre Filtration',
                description: 'Filtrationsprozesse im Glomerulus',
                icon: '🔍',
                difficulty: 'hard',
                parentId: 'kidney-function',
                children: [
                  {
                    id: 'filtration-pressure',
                    name: 'Filtrationsdruck (hydrostatisch, onkotisch)',
                    description: 'Druckverhältnisse bei der Filtration',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'glomerular-filtration'
                  },
                  {
                    id: 'gfr',
                    name: 'Glomeruläre Filtrationsrate (GFR)',
                    description: 'Maß für die Nierenfunktion',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'glomerular-filtration'
                  },
                  {
                    id: 'clearance-concept',
                    name: 'Clearance-Konzept',
                    description: 'Reinigungsleistung der Nieren',
                    icon: '🧹',
                    difficulty: 'hard',
                    parentId: 'glomerular-filtration'
                  },
                  {
                    id: 'creatinine-clearance',
                    name: 'Kreatinin-Clearance',
                    description: 'Goldstandard der GFR-Messung',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'glomerular-filtration'
                  },
                  {
                    id: 'egfr-calculation',
                    name: 'eGFR-Berechnung (CKD-EPI, MDRD)',
                    description: 'Geschätzte GFR-Formeln',
                    icon: '🧮',
                    difficulty: 'medium',
                    parentId: 'glomerular-filtration'
                  },
                  {
                    id: 'filtration-barrier',
                    name: 'Filtrationsbarriere',
                    description: 'Selektive Permeabilität des Glomerulus',
                    icon: '🚧',
                    difficulty: 'hard',
                    parentId: 'glomerular-filtration'
                  }
                ]
              },
              {
                id: 'tubular-secretion',
                name: 'Tubuläre Sekretion',
                description: 'Aktive Ausscheidung durch Tubuluszellen',
                icon: '🚮',
                difficulty: 'medium',
                parentId: 'kidney-function',
                children: [
                  {
                    id: 'active-transport',
                    name: 'Aktiver Transport',
                    description: 'Energieabhängige Transportprozesse',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'tubular-secretion'
                  },
                  {
                    id: 'pah-clearance',
                    name: 'PAH-Clearance',
                    description: 'Maß für den renalen Plasmafluss',
                    icon: '🌊',
                    difficulty: 'hard',
                    parentId: 'tubular-secretion'
                  },
                  {
                    id: 'drug-excretion',
                    name: 'Medikamenten-Ausscheidung',
                    description: 'Elimination von Arzneistoffen',
                    icon: '💊',
                    difficulty: 'medium',
                    parentId: 'tubular-secretion'
                  },
                  {
                    id: 'acid-base-regulation',
                    name: 'Säure-Basen-Regulation',
                    description: 'pH-Regulation durch die Nieren',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'tubular-secretion'
                  },
                  {
                    id: 'potassium-secretion',
                    name: 'Kaliumsekretion',
                    description: 'Kaliumausscheidung im distalen Tubulus',
                    icon: '🔋',
                    difficulty: 'medium',
                    parentId: 'tubular-secretion'
                  }
                ]
              },
              {
                id: 'tubular-reabsorption',
                name: 'Tubuläre Rückresorption',
                description: 'Rückgewinnung von Wasser und Stoffen',
                icon: '🔄',
                difficulty: 'medium',
                parentId: 'kidney-function',
                children: [
                  {
                    id: 'water-reabsorption',
                    name: 'Wasser-Rückresorption (obligatorisch/fakultativ)',
                    description: 'Wasserrückgewinnung in verschiedenen Tubulusabschnitten',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'tubular-reabsorption'
                  },
                  {
                    id: 'sodium-reabsorption',
                    name: 'Natrium-Rückresorption (67% proximal)',
                    description: 'Natriumrückgewinnung entlang des Nephrons',
                    icon: '🧂',
                    difficulty: 'medium',
                    parentId: 'tubular-reabsorption'
                  },
                  {
                    id: 'glucose-reabsorption',
                    name: 'Glukose-Rückresorption (SGLT1/2)',
                    description: 'Glukose-Transporter in der Niere',
                    icon: '🍯',
                    difficulty: 'medium',
                    parentId: 'tubular-reabsorption'
                  },
                  {
                    id: 'amino-acids-proteins',
                    name: 'Aminosäuren & Proteine',
                    description: 'Rückresorption von Proteinen und Aminosäuren',
                    icon: '🧬',
                    difficulty: 'medium',
                    parentId: 'tubular-reabsorption'
                  },
                  {
                    id: 'urine-concentration',
                    name: 'Harnkonzentrierung',
                    description: 'Mechanismen der Urinkonzentration',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'tubular-reabsorption'
                  },
                  {
                    id: 'countercurrent-system',
                    name: 'Gegenstromsystem',
                    description: 'Konzentrations- und Verdünnungsmechanismus',
                    icon: '↕️',
                    difficulty: 'hard',
                    parentId: 'tubular-reabsorption'
                  }
                ]
              },
              {
                id: 'hormonal-regulation',
                name: 'Hormonelle Regulation',
                description: 'Hormonelle Steuerung der Nierenfunktion',
                icon: '🧪',
                difficulty: 'hard',
                parentId: 'kidney-function',
                children: [
                  {
                    id: 'adh',
                    name: 'ADH (Antidiuretisches Hormon)',
                    description: 'Wasserhaushalt-Regulation',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'hormonal-regulation'
                  },
                  {
                    id: 'aldosterone',
                    name: 'Aldosteron',
                    description: 'Mineralokortikoid-Regulation',
                    icon: '🧂',
                    difficulty: 'medium',
                    parentId: 'hormonal-regulation'
                  },
                  {
                    id: 'renin-angiotensin-system',
                    name: 'Renin-Angiotensin-System',
                    description: 'Blutdruck- und Volumenregulation',
                    icon: '🩸',
                    difficulty: 'hard',
                    parentId: 'hormonal-regulation'
                  },
                  {
                    id: 'natriuretic-peptides',
                    name: 'ANP/BNP (Natriuretische Peptide)',
                    description: 'Gegenspieler des RAAS',
                    icon: '💝',
                    difficulty: 'medium',
                    parentId: 'hormonal-regulation'
                  },
                  {
                    id: 'pth-vitamin-d',
                    name: 'Parathormon & Vitamin D',
                    description: 'Kalzium-Phosphat-Regulation',
                    icon: '🦴',
                    difficulty: 'medium',
                    parentId: 'hormonal-regulation'
                  },
                  {
                    id: 'erythropoietin',
                    name: 'Erythropoietin (EPO)',
                    description: 'Regulation der Erythropoese',
                    icon: '🔴',
                    difficulty: 'medium',
                    parentId: 'hormonal-regulation'
                  }
                ]
              }
            ]
          },
          {
            id: 'water-electrolyte-balance',
            name: 'Wasser-Elektrolyt-Haushalt',
            description: 'Regulation des Wasser- und Elektrolythaushalts',
            icon: '⚖️',
            difficulty: 'hard',
            parentId: 'renal-system',
            children: [
              {
                id: 'water-balance',
                name: 'Wasserhaushalt',
                description: 'Regulation der Wasserbilanz',
                icon: '💧',
                difficulty: 'medium',
                parentId: 'water-electrolyte-balance',
                children: [
                  {
                    id: 'water-balance-equation',
                    name: 'Wasserbilanz (Ein-/Ausfuhr)',
                    description: 'Wasseraufnahme und -verlust',
                    icon: '⚖️',
                    difficulty: 'medium',
                    parentId: 'water-balance'
                  },
                  {
                    id: 'water-distribution',
                    name: 'Wasserverteilung (IZR 2/3, EZR 1/3)',
                    description: 'Verteilung zwischen Intra- und Extrazellularraum',
                    icon: '🎯',
                    difficulty: 'medium',
                    parentId: 'water-balance'
                  },
                  {
                    id: 'osmolality-osmolarity',
                    name: 'Osmolalität & Osmolarität',
                    description: 'Osmotische Konzentrationsmessungen',
                    icon: '🧪',
                    difficulty: 'hard',
                    parentId: 'water-balance'
                  },
                  {
                    id: 'thirst-regulation',
                    name: 'Durst-Regulation (Osmoreceptoren)',
                    description: 'Zentrale Regulation der Wasseraufnahme',
                    icon: '🧠',
                    difficulty: 'medium',
                    parentId: 'water-balance'
                  },
                  {
                    id: 'water-excretion',
                    name: 'Wasserausscheidung',
                    description: 'Renale und extrarenale Wasserverluste',
                    icon: '🚿',
                    difficulty: 'medium',
                    parentId: 'water-balance'
                  },
                  {
                    id: 'dehydration-hyperhydration',
                    name: 'Dehydratation/Hyperhydratation',
                    description: 'Störungen des Wasserhaushalts',
                    icon: '⚠️',
                    difficulty: 'medium',
                    parentId: 'water-balance'
                  }
                ]
              },
              {
                id: 'sodium-balance',
                name: 'Natriumhaushalt',
                description: 'Regulation des Natriumhaushalts',
                icon: '🧂',
                difficulty: 'medium',
                parentId: 'water-electrolyte-balance',
                children: [
                  {
                    id: 'sodium-distribution',
                    name: 'Natriumverteilung (hauptsächlich EZR)',
                    description: 'Natriumverteilung in Körperkompartimenten',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'sodium-balance'
                  },
                  {
                    id: 'sodium-excretion',
                    name: 'Natriumausscheidung',
                    description: 'Renale Natriumelimination',
                    icon: '🚿',
                    difficulty: 'medium',
                    parentId: 'sodium-balance'
                  },
                  {
                    id: 'dysnatremias',
                    name: 'Hyper-/Hyponatriämie',
                    description: 'Natrium-Entgleisungen und Folgen',
                    icon: '📈',
                    difficulty: 'hard',
                    parentId: 'sodium-balance'
                  },
                  {
                    id: 'siadh-diabetes-insipidus',
                    name: 'SIADH/Diabetes insipidus',
                    description: 'ADH-Störungen und Wasserhaushalt',
                    icon: '🧪',
                    difficulty: 'hard',
                    parentId: 'sodium-balance'
                  },
                  {
                    id: 'edema-formation',
                    name: 'Ödementstehung',
                    description: 'Mechanismen der Wassereinlagerung',
                    icon: '🫧',
                    difficulty: 'medium',
                    parentId: 'sodium-balance'
                  }
                ]
              },
              {
                id: 'potassium-balance',
                name: 'Kaliumhaushalt',
                description: 'Regulation des Kaliumhaushalts',
                icon: '🔋',
                difficulty: 'medium',
                parentId: 'water-electrolyte-balance',
                children: [
                  {
                    id: 'potassium-distribution',
                    name: 'Kaliumverteilung (90% intrazellulär)',
                    description: 'Kaliumverteilung in Körperkompartimenten',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'potassium-balance'
                  },
                  {
                    id: 'potassium-excretion',
                    name: 'Kaliumausscheidung',
                    description: 'Renale und extrarenale Kaliumelimination',
                    icon: '🚿',
                    difficulty: 'medium',
                    parentId: 'potassium-balance'
                  },
                  {
                    id: 'dyskalemias',
                    name: 'Hyper-/Hypokaliämie',
                    description: 'Kalium-Entgleisungen und Folgen',
                    icon: '📈',
                    difficulty: 'hard',
                    parentId: 'potassium-balance'
                  },
                  {
                    id: 'ecg-changes',
                    name: 'EKG-Veränderungen',
                    description: 'Kardiale Manifestation von Kaliumstörungen',
                    icon: '📈',
                    difficulty: 'medium',
                    parentId: 'potassium-balance'
                  },
                  {
                    id: 'arrhythmias',
                    name: 'Herzrhythmusstörungen',
                    description: 'Kaliumbedingte Rhythmusstörungen',
                    icon: '💓',
                    difficulty: 'hard',
                    parentId: 'potassium-balance'
                  }
                ]
              },
              {
                id: 'other-electrolytes',
                name: 'Weitere Elektrolyte',
                description: 'Regulation anderer wichtiger Elektrolyte',
                icon: '⚗️',
                difficulty: 'medium',
                parentId: 'water-electrolyte-balance',
                children: [
                  {
                    id: 'calcium-phosphate',
                    name: 'Kalzium & Phosphat',
                    description: 'Kalzium-Phosphat-Haushalt',
                    icon: '🦴',
                    difficulty: 'medium',
                    parentId: 'other-electrolytes'
                  },
                  {
                    id: 'magnesium',
                    name: 'Magnesium',
                    description: 'Magnesiumhaushalt und -störungen',
                    icon: '✨',
                    difficulty: 'medium',
                    parentId: 'other-electrolytes'
                  },
                  {
                    id: 'chloride',
                    name: 'Chlorid',
                    description: 'Chloridhaushalt und Säure-Basen-Balance',
                    icon: '🟢',
                    difficulty: 'medium',
                    parentId: 'other-electrolytes'
                  },
                  {
                    id: 'bicarbonate',
                    name: 'Bikarbonat',
                    description: 'Bikarbonat als Puffersystem',
                    icon: '🔵',
                    difficulty: 'medium',
                    parentId: 'other-electrolytes'
                  },
                  {
                    id: 'trace-elements',
                    name: 'Spurenelemente',
                    description: 'Zink, Eisen, Kupfer und andere Spurenelemente',
                    icon: '🔬',
                    difficulty: 'medium',
                    parentId: 'other-electrolytes'
                  }
                ]
              }
            ]
          },
          {
            id: 'acid-base-balance',
            name: 'Säure-Basen-Haushalt',
            description: 'Regulation des pH-Werts und Säure-Basen-Gleichgewichts',
            icon: '⚖️',
            difficulty: 'hard',
            parentId: 'renal-system',
            children: [
              {
                id: 'ph-regulation',
                name: 'pH-Regulation',
                description: 'Mechanismen der pH-Wert-Kontrolle',
                icon: '🎛️',
                difficulty: 'hard',
                parentId: 'acid-base-balance',
                children: [
                  {
                    id: 'henderson-hasselbalch',
                    name: 'Henderson-Hasselbalch-Gleichung',
                    description: 'Mathematische Grundlage der pH-Berechnung',
                    icon: '🧮',
                    difficulty: 'hard',
                    parentId: 'ph-regulation'
                  },
                  {
                    id: 'buffer-systems',
                    name: 'Puffersysteme (Bikarbonat, Phosphat, Protein)',
                    description: 'Chemische Puffersysteme des Körpers',
                    icon: '🛡️',
                    difficulty: 'hard',
                    parentId: 'ph-regulation'
                  },
                  {
                    id: 'respiratory-compensation',
                    name: 'Respiratorische Kompensation',
                    description: 'CO2-Regulation über die Atmung',
                    icon: '🫁',
                    difficulty: 'medium',
                    parentId: 'ph-regulation'
                  },
                  {
                    id: 'renal-compensation',
                    name: 'Renale Kompensation',
                    description: 'H+- und HCO3--Regulation über die Nieren',
                    icon: '🫘',
                    difficulty: 'hard',
                    parentId: 'ph-regulation'
                  },
                  {
                    id: 'ph-normal-values',
                    name: 'pH-Normalwerte (7,35-7,45)',
                    description: 'Normbereich des arteriellen pH-Werts',
                    icon: '📊',
                    difficulty: 'easy',
                    parentId: 'ph-regulation'
                  },
                  {
                    id: 'isohydric-principle',
                    name: 'Isohydrie-Prinzip',
                    description: 'Konstanter pH trotz unterschiedlicher Puffer',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'ph-regulation'
                  }
                ]
              },
              {
                id: 'acidosis',
                name: 'Azidose',
                description: 'pH-Erniedrigung und Übersäuerung',
                icon: '🔴',
                difficulty: 'medium',
                parentId: 'acid-base-balance',
                children: [
                  {
                    id: 'metabolic-acidosis',
                    name: 'Metabolische Azidose',
                    description: 'Primär erniedrigtes HCO3-',
                    icon: '⬇️',
                    difficulty: 'medium',
                    parentId: 'acidosis'
                  },
                  {
                    id: 'respiratory-acidosis',
                    name: 'Respiratorische Azidose',
                    description: 'Primär erhöhtes pCO2',
                    icon: '🫁',
                    difficulty: 'medium',
                    parentId: 'acidosis'
                  },
                  {
                    id: 'anion-gap',
                    name: 'Anionenlücke',
                    description: 'Differentialdiagnose metabolischer Azidosen',
                    icon: '🔢',
                    difficulty: 'hard',
                    parentId: 'acidosis'
                  },
                  {
                    id: 'acidosis-compensation',
                    name: 'Kompensationsmechanismen',
                    description: 'Ausgleichsreaktionen bei Azidose',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'acidosis'
                  },
                  {
                    id: 'acidosis-causes',
                    name: 'Ursachen (Diabetes, Niereninsuff., Diarrhö)',
                    description: 'Häufige Ursachen von Azidosen',
                    icon: '🎯',
                    difficulty: 'medium',
                    parentId: 'acidosis'
                  }
                ]
              },
              {
                id: 'alkalosis',
                name: 'Alkalose',
                description: 'pH-Erhöhung und Alkalisierung',
                icon: '🔵',
                difficulty: 'medium',
                parentId: 'acid-base-balance',
                children: [
                  {
                    id: 'metabolic-alkalosis',
                    name: 'Metabolische Alkalose',
                    description: 'Primär erhöhtes HCO3-',
                    icon: '⬆️',
                    difficulty: 'medium',
                    parentId: 'alkalosis'
                  },
                  {
                    id: 'respiratory-alkalosis',
                    name: 'Respiratorische Alkalose',
                    description: 'Primär erniedrigtes pCO2',
                    icon: '🫁',
                    difficulty: 'medium',
                    parentId: 'alkalosis'
                  },
                  {
                    id: 'alkalosis-compensation',
                    name: 'Kompensationsmechanismen',
                    description: 'Ausgleichsreaktionen bei Alkalose',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'alkalosis'
                  },
                  {
                    id: 'alkalosis-causes',
                    name: 'Ursachen (Erbrechen, Hyperventilation)',
                    description: 'Häufige Ursachen von Alkalosen',
                    icon: '🎯',
                    difficulty: 'medium',
                    parentId: 'alkalosis'
                  }
                ]
              },
              {
                id: 'blood-gas-analysis',
                name: 'Blutgasanalyse',
                description: 'Diagnostik des Säure-Basen-Haushalts',
                icon: '🩸',
                difficulty: 'hard',
                parentId: 'acid-base-balance',
                children: [
                  {
                    id: 'ph-pco2-po2',
                    name: 'pH, pCO2, pO2',
                    description: 'Grundparameter der Blutgasanalyse',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'blood-gas-analysis'
                  },
                  {
                    id: 'hco3-base-excess',
                    name: 'HCO3-, BE (Base Excess)',
                    description: 'Bikarbonat und Basenüberschuss',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'blood-gas-analysis'
                  },
                  {
                    id: 'oxygen-saturation',
                    name: 'Sauerstoffsättigung',
                    description: 'O2-Sättigung des Hämoglobins',
                    icon: '🔴',
                    difficulty: 'easy',
                    parentId: 'blood-gas-analysis'
                  },
                  {
                    id: 'lactate',
                    name: 'Laktat',
                    description: 'Gewebshypoxie und Azidose-Marker',
                    icon: '🏃',
                    difficulty: 'medium',
                    parentId: 'blood-gas-analysis'
                  },
                  {
                    id: 'bga-interpretation',
                    name: 'Interpretation (Stufenschema)',
                    description: 'Systematische BGA-Auswertung',
                    icon: '🔍',
                    difficulty: 'hard',
                    parentId: 'blood-gas-analysis'
                  }
                ]
              }
            ]
          },
          {
            id: 'urinary-tract',
            name: 'Harnwege',
            description: 'Anatomie und Pathologie der ableitenden Harnwege',
            icon: '🚿',
            difficulty: 'medium',
            parentId: 'renal-system',
            children: [
              {
                id: 'ureter',
                name: 'Harnleiter (Ureter)',
                description: 'Harnleitung von Niere zur Blase',
                icon: '🚰',
                difficulty: 'medium',
                parentId: 'urinary-tract',
                children: [
                  {
                    id: 'ureter-anatomy',
                    name: 'Anatomie & Verlauf',
                    description: 'Anatomischer Verlauf der Harnleiter',
                    icon: '📏',
                    difficulty: 'medium',
                    parentId: 'ureter'
                  },
                  {
                    id: 'ureter-peristalsis',
                    name: 'Peristaltik',
                    description: 'Wellenförmiger Harntransport',
                    icon: '🌊',
                    difficulty: 'medium',
                    parentId: 'ureter'
                  },
                  {
                    id: 'ureter-constrictions',
                    name: 'Engstellen (3 physiologische)',
                    description: 'Anatomische Verengungen des Harnleiters',
                    icon: '🔗',
                    difficulty: 'medium',
                    parentId: 'ureter'
                  },
                  {
                    id: 'ureteral-stones',
                    name: 'Harnleiter-Steine',
                    description: 'Nephrolithiasis und Ureterolithiasis',
                    icon: '💎',
                    difficulty: 'medium',
                    parentId: 'ureter'
                  },
                  {
                    id: 'vesicoureteral-reflux',
                    name: 'Vesikoureteraler Reflux',
                    description: 'Rückfluss von Urin in den Harnleiter',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'ureter'
                  }
                ]
              },
              {
                id: 'bladder',
                name: 'Harnblase',
                description: 'Harnspeicherung und -entleerung',
                icon: '🫧',
                difficulty: 'medium',
                parentId: 'urinary-tract',
                children: [
                  {
                    id: 'bladder-anatomy',
                    name: 'Anatomie (Detrusor, Trigonium)',
                    description: 'Aufbau der Harnblase',
                    icon: '🫧',
                    difficulty: 'medium',
                    parentId: 'bladder'
                  },
                  {
                    id: 'bladder-filling',
                    name: 'Blasenfüllung & -entleerung',
                    description: 'Physiologie der Blasenfunktion',
                    icon: '⏳',
                    difficulty: 'medium',
                    parentId: 'bladder'
                  },
                  {
                    id: 'micturition',
                    name: 'Miktion (Blasenentleerung)',
                    description: 'Koordinierte Blasenentleerung',
                    icon: '🚿',
                    difficulty: 'medium',
                    parentId: 'bladder'
                  },
                  {
                    id: 'bladder-reflexes',
                    name: 'Blasenreflexe',
                    description: 'Neuroreflektorische Kontrolle',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'bladder'
                  },
                  {
                    id: 'neurogenic-bladder',
                    name: 'Neurogenic Bladder',
                    description: 'Neurologische Blasenentleerungsstörungen',
                    icon: '🧠',
                    difficulty: 'hard',
                    parentId: 'bladder'
                  },
                  {
                    id: 'bladder-capacity',
                    name: 'Blasenkapazität (300-500ml)',
                    description: 'Normale Blasenfüllungsmengen',
                    icon: '📏',
                    difficulty: 'easy',
                    parentId: 'bladder'
                  }
                ]
              },
              {
                id: 'urethra',
                name: 'Harnröhre (Urethra)',
                description: 'Harnausleitung und Kontinenzmechanismen',
                icon: '🚿',
                difficulty: 'medium',
                parentId: 'urinary-tract',
                children: [
                  {
                    id: 'male-urethra',
                    name: 'Männliche Harnröhre (20cm: Pars prostatica, membranacea, spongiosa)',
                    description: 'Anatomie der männlichen Harnröhre',
                    icon: '♂️',
                    difficulty: 'medium',
                    parentId: 'urethra'
                  },
                  {
                    id: 'female-urethra',
                    name: 'Weibliche Harnröhre (3-5cm: kurz, gerade)',
                    description: 'Anatomie der weiblichen Harnröhre',
                    icon: '♀️',
                    difficulty: 'medium',
                    parentId: 'urethra'
                  },
                  {
                    id: 'urethral-sphincters',
                    name: 'Schließmuskeln (intern/extern)',
                    description: 'Kontinenz-Schließmuskeln',
                    icon: '🔒',
                    difficulty: 'medium',
                    parentId: 'urethra'
                  },
                  {
                    id: 'continence-mechanisms',
                    name: 'Kontinenz-Mechanismen',
                    description: 'Physiologie der Harnkontinenz',
                    icon: '🛡️',
                    difficulty: 'hard',
                    parentId: 'urethra'
                  },
                  {
                    id: 'urethral-valves',
                    name: 'Harnröhrenklappen',
                    description: 'Angeborene Harnröhrenfehlbildungen',
                    icon: '🚪',
                    difficulty: 'medium',
                    parentId: 'urethra'
                  }
                ]
              },
              {
                id: 'urinary-incontinence',
                name: 'Harninkontinenz',
                description: 'Formen und Mechanismen der Harninkontinenz',
                icon: '💧',
                difficulty: 'medium',
                parentId: 'urinary-tract',
                children: [
                  {
                    id: 'stress-incontinence',
                    name: 'Belastungsinkontinenz',
                    description: 'Urinverlust bei körperlicher Belastung',
                    icon: '🏃',
                    difficulty: 'medium',
                    parentId: 'urinary-incontinence'
                  },
                  {
                    id: 'urge-incontinence',
                    name: 'Dranginkontinenz',
                    description: 'Urinverlust bei imperativem Harndrang',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'urinary-incontinence'
                  },
                  {
                    id: 'mixed-incontinence',
                    name: 'Mischinkontinenz',
                    description: 'Kombination aus Belastungs- und Dranginkontinenz',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'urinary-incontinence'
                  },
                  {
                    id: 'overflow-incontinence',
                    name: 'Überlaufinkontinenz',
                    description: 'Urinverlust bei überfüllter Blase',
                    icon: '🌊',
                    difficulty: 'medium',
                    parentId: 'urinary-incontinence'
                  },
                  {
                    id: 'reflex-incontinence',
                    name: 'Reflexinkontinenz',
                    description: 'Neurologisch bedingte Inkontinenz',
                    icon: '🧠',
                    difficulty: 'medium',
                    parentId: 'urinary-incontinence'
                  },
                  {
                    id: 'extraurethral-incontinence',
                    name: 'Extraurethrale Inkontinenz',
                    description: 'Urinverlust nicht über die Harnröhre',
                    icon: '🔀',
                    difficulty: 'medium',
                    parentId: 'urinary-incontinence'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'blood-immune-system',
        name: 'BLUT & IMMUNSYSTEM',
        description: 'Blutsystem und Immunabwehr',
        icon: '🩸',
        difficulty: 'medium',
        parentId: 'anatomy-physiology',
        children: [
          {
            id: 'blood-components',
            name: 'Blutbestandteile',
            description: 'Zelluläre und plasmatische Bestandteile',
            icon: '🩸',
            difficulty: 'medium',
            parentId: 'blood-immune-system',
            children: [
              {
                id: 'erythrocytes',
                name: 'Erythrozyten (Rote Blutkörperchen)',
                description: 'Sauerstofftransport durch rote Blutzellen',
                icon: '🔴',
                difficulty: 'easy',
                parentId: 'blood-components',
                children: [
                  {
                    id: 'hemoglobin',
                    name: 'Hämoglobin (Hb)',
                    description: 'Sauerstoffbindendes Protein',
                    icon: '🧬',
                    difficulty: 'medium',
                    parentId: 'erythrocytes'
                  },
                  {
                    id: 'erythropoiesis',
                    name: 'Erythropoese',
                    description: 'Bildung roter Blutkörperchen',
                    icon: '🏭',
                    difficulty: 'medium',
                    parentId: 'erythrocytes'
                  },
                  {
                    id: 'rbc-lifespan',
                    name: 'Lebensdauer (120 Tage)',
                    description: 'Lebensspanne der Erythrozyten',
                    icon: '⏰',
                    difficulty: 'easy',
                    parentId: 'erythrocytes'
                  },
                  {
                    id: 'hematocrit',
                    name: 'Hämatokrit',
                    description: 'Anteil der roten Blutkörperchen',
                    icon: '📊',
                    difficulty: 'easy',
                    parentId: 'erythrocytes'
                  },
                  {
                    id: 'anemia-types',
                    name: 'Anämieformen',
                    description: 'Verschiedene Arten der Blutarmut',
                    icon: '📉',
                    difficulty: 'medium',
                    parentId: 'erythrocytes'
                  }
                ]
              },
              {
                id: 'leukocytes',
                name: 'Leukozyten (Weiße Blutkörperchen)',
                description: 'Immunabwehr durch weiße Blutzellen',
                icon: '⚪',
                difficulty: 'medium',
                parentId: 'blood-components',
                children: [
                  {
                    id: 'granulocytes',
                    name: 'Granulozyten (Neutrophile, Eosinophile, Basophile)',
                    description: 'Granulierte weiße Blutzellen',
                    icon: '🔘',
                    difficulty: 'medium',
                    parentId: 'leukocytes'
                  },
                  {
                    id: 'lymphocytes',
                    name: 'Lymphozyten (B-, T-Zellen, NK-Zellen)',
                    description: 'Adaptive Immunzellen',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'leukocytes'
                  },
                  {
                    id: 'monocytes',
                    name: 'Monozyten/Makrophagen',
                    description: 'Phagozytäre Immunzellen',
                    icon: '🦠',
                    difficulty: 'medium',
                    parentId: 'leukocytes'
                  },
                  {
                    id: 'differential-count',
                    name: 'Differentialblutbild',
                    description: 'Aufschlüsselung der Leukozytentypen',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'leukocytes'
                  },
                  {
                    id: 'left-shift',
                    name: 'Linksverschiebung',
                    description: 'Vermehrung unreifer Granulozyten',
                    icon: '⬅️',
                    difficulty: 'medium',
                    parentId: 'leukocytes'
                  }
                ]
              },
              {
                id: 'thrombocytes',
                name: 'Thrombozyten (Blutplättchen)',
                description: 'Blutstillung und Blutgerinnung',
                icon: '🩹',
                difficulty: 'medium',
                parentId: 'blood-components',
                children: [
                  {
                    id: 'thrombocytogenesis',
                    name: 'Thrombozytogenese',
                    description: 'Bildung der Thrombozyten aus Megakaryozyten',
                    icon: '🏭',
                    difficulty: 'medium',
                    parentId: 'thrombocytes'
                  },
                  {
                    id: 'primary-hemostasis-thrombocytes',
                    name: 'Primäre Hämostase',
                    description: 'Thrombozytäre Blutstillung',
                    icon: '🔴',
                    difficulty: 'medium',
                    parentId: 'thrombocytes'
                  },
                  {
                    id: 'thrombocyte-aggregation',
                    name: 'Thrombozytenaggregation',
                    description: 'Verklumpung der Blutplättchen',
                    icon: '🤝',
                    difficulty: 'medium',
                    parentId: 'thrombocytes'
                  },
                  {
                    id: 'von-willebrand-factor-thrombocytes',
                    name: 'Von-Willebrand-Faktor',
                    description: 'Bindungsprotein für Thrombozyten',
                    icon: '🔗',
                    difficulty: 'hard',
                    parentId: 'thrombocytes'
                  }
                ]
              },
              {
                id: 'blood-plasma',
                name: 'Blutplasma',
                description: 'Flüssiger Anteil des Blutes',
                icon: '💧',
                difficulty: 'medium',
                parentId: 'blood-components',
                children: [
                  {
                    id: 'plasma-proteins',
                    name: 'Plasmaproteine (Albumin, Globuline)',
                    description: 'Proteine im Blutplasma',
                    icon: '🧬',
                    difficulty: 'medium',
                    parentId: 'blood-plasma',
                    children: [
                      {
                        id: 'albumin',
                        name: 'Albumin (Onkotischer Druck)',
                        description: 'Wichtigstes Plasmaprotein',
                        icon: '🫧',
                        difficulty: 'medium',
                        parentId: 'plasma-proteins'
                      },
                      {
                        id: 'globulins',
                        name: 'Globuline (α, β, γ)',
                        description: 'Transportproteine und Antikörper',
                        icon: '🚛',
                        difficulty: 'medium',
                        parentId: 'plasma-proteins'
                      }
                    ]
                  },
                  {
                    id: 'coagulation-factors-plasma',
                    name: 'Gerinnungsfaktoren',
                    description: 'Plasmatische Gerinnungsproteine (I-XIII)',
                    icon: '🔢',
                    difficulty: 'hard',
                    parentId: 'blood-plasma',
                    children: [
                      {
                        id: 'fibrinogen-plasma',
                        name: 'Fibrinogen (Faktor I)',
                        description: 'Vorstufe des Fibrins',
                        icon: '🕸️',
                        difficulty: 'medium',
                        parentId: 'coagulation-factors-plasma'
                      },
                      {
                        id: 'prothrombin',
                        name: 'Prothrombin (Faktor II)',
                        description: 'Vorstufe des Thrombins',
                        icon: '⚡',
                        difficulty: 'medium',
                        parentId: 'coagulation-factors-plasma'
                      },
                      {
                        id: 'vitamin-k-factors',
                        name: 'Vitamin K-abhängige Faktoren (II, VII, IX, X)',
                        description: 'Gerinnungsfaktoren mit Vitamin K-Abhängigkeit',
                        icon: '🟢',
                        difficulty: 'hard',
                        parentId: 'coagulation-factors-plasma'
                      }
                    ]
                  },
                  {
                    id: 'electrolytes',
                    name: 'Elektrolyte',
                    description: 'Ionen im Blutplasma (Na+, K+, Cl-, HCO3-)',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'blood-plasma'
                  },
                  {
                    id: 'hormones-enzymes',
                    name: 'Hormone & Enzyme',
                    description: 'Hormonelle und enzymatische Plasmabestandteile',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'blood-plasma',
                    children: [
                      {
                        id: 'plasma-hormones',
                        name: 'Plasmahormone',
                        description: 'Im Plasma transportierte Hormone',
                        icon: '📡',
                        difficulty: 'medium',
                        parentId: 'hormones-enzymes'
                      },
                      {
                        id: 'plasma-enzymes',
                        name: 'Plasmaenzyme',
                        description: 'Enzymatische Aktivität im Plasma',
                        icon: '⚗️',
                        difficulty: 'medium',
                        parentId: 'hormones-enzymes'
                      },
                      {
                        id: 'transport-proteins',
                        name: 'Transportproteine',
                        description: 'Trägerproteine für Hormone und Substrate',
                        icon: '🚛',
                        difficulty: 'medium',
                        parentId: 'hormones-enzymes'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'blood-coagulation',
            name: 'Blutgerinnung',
            description: 'Hämostase und Gerinnungssystem',
            icon: '🩹',
            difficulty: 'hard',
            parentId: 'blood-immune-system',
            children: [
              {
                id: 'primary-hemostasis',
                name: 'Primäre Hämostase',
                description: 'Thrombozytäre Blutstillung',
                icon: '🔴',
                difficulty: 'medium',
                parentId: 'blood-coagulation',
                children: [
                  {
                    id: 'vasoconstriction',
                    name: 'Vasokonstriktion',
                    description: 'Gefäßverengung bei Verletzung',
                    icon: '🤏',
                    difficulty: 'easy',
                    parentId: 'primary-hemostasis'
                  },
                  {
                    id: 'thrombocyte-adhesion',
                    name: 'Thrombozytenadhäsion',
                    description: 'Anheftung der Thrombozyten an Gefäßwand',
                    icon: '📎',
                    difficulty: 'medium',
                    parentId: 'primary-hemostasis'
                  },
                  {
                    id: 'thrombocyte-aggregation-hemostasis',
                    name: 'Thrombozytenaggregation',
                    description: 'Verklumpung der Blutplättchen',
                    icon: '🤝',
                    difficulty: 'medium',
                    parentId: 'primary-hemostasis'
                  }
                ]
              },
              {
                id: 'secondary-hemostasis',
                name: 'Sekundäre Hämostase',
                description: 'Plasmatische Gerinnung',
                icon: '🕸️',
                difficulty: 'hard',
                parentId: 'blood-coagulation',
                children: [
                  {
                    id: 'intrinsic-system',
                    name: 'Intrinsisches System',
                    description: 'Kontaktaktiviertes Gerinnungssystem (PTT)',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'secondary-hemostasis'
                  },
                  {
                    id: 'extrinsic-system',
                    name: 'Extrinsisches System',
                    description: 'Tissue Factor-aktiviertes System (PT/INR)',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'secondary-hemostasis'
                  },
                  {
                    id: 'common-pathway',
                    name: 'Gemeinsame Endstrecke',
                    description: 'Konvergenz beider Gerinnungswege',
                    icon: '🛤️',
                    difficulty: 'hard',
                    parentId: 'secondary-hemostasis'
                  },
                  {
                    id: 'fibrin-formation',
                    name: 'Fibrinbildung',
                    description: 'Umwandlung von Fibrinogen zu Fibrin',
                    icon: '🕸️',
                    difficulty: 'hard',
                    parentId: 'secondary-hemostasis'
                  }
                ]
              },
              {
                id: 'fibrinolysis',
                name: 'Fibrinolyse',
                description: 'Thrombenauflösung',
                icon: '🧹',
                difficulty: 'hard',
                parentId: 'blood-coagulation',
                children: [
                  {
                    id: 'plasminogen-plasmin',
                    name: 'Plasminogen → Plasmin',
                    description: 'Aktivierung des fibrinolytischen Systems',
                    icon: '🔀',
                    difficulty: 'hard',
                    parentId: 'fibrinolysis'
                  },
                  {
                    id: 'tpa-upa',
                    name: 't-PA, u-PA',
                    description: 'Tissue- und Urokinase-Plasminogen-Aktivator',
                    icon: '🔑',
                    difficulty: 'hard',
                    parentId: 'fibrinolysis'
                  },
                  {
                    id: 'd-dimers',
                    name: 'D-Dimere',
                    description: 'Fibrinabbauprodukte als Marker',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'fibrinolysis'
                  }
                ]
              },
              {
                id: 'anticoagulation',
                name: 'Gerinnungshemmung',
                description: 'Natürliche Antikoagulation',
                icon: '🛡️',
                difficulty: 'hard',
                parentId: 'blood-coagulation',
                children: [
                  {
                    id: 'antithrombin-iii',
                    name: 'Antithrombin III',
                    description: 'Wichtigster Gerinnungshemmer',
                    icon: '🔒',
                    difficulty: 'hard',
                    parentId: 'anticoagulation'
                  },
                  {
                    id: 'protein-c-s',
                    name: 'Protein C/S',
                    description: 'Vitamin K-abhängige Gerinnungshemmer',
                    icon: '🗝️',
                    difficulty: 'hard',
                    parentId: 'anticoagulation'
                  },
                  {
                    id: 'tfpi',
                    name: 'TFPI',
                    description: 'Tissue Factor Pathway Inhibitor',
                    icon: '🚫',
                    difficulty: 'hard',
                    parentId: 'anticoagulation'
                  },
                  {
                    id: 'heparin-effect',
                    name: 'Heparin-Wirkung',
                    description: 'Verstärkung der Antithrombin-Aktivität',
                    icon: '💉',
                    difficulty: 'medium',
                    parentId: 'anticoagulation'
                  }
                ]
              }
            ]
          },
          {
            id: 'immune-system',
            name: 'Immunsystem',
            description: 'Körperliche Abwehr und Immunität',
            icon: '🛡️',
            difficulty: 'hard',
            parentId: 'blood-immune-system',
            children: [
              {
                id: 'innate-immunity',
                name: 'Angeborene Immunität',
                description: 'Unspezifische Immunabwehr',
                icon: '🏰',
                difficulty: 'medium',
                parentId: 'immune-system',
                children: [
                  {
                    id: 'physical-barriers',
                    name: 'Physikalische Barrieren',
                    description: 'Haut, Schleimhäute, Flimmerhärchen',
                    icon: '🧱',
                    difficulty: 'easy',
                    parentId: 'innate-immunity'
                  },
                  {
                    id: 'chemical-barriers',
                    name: 'Chemische Barrieren',
                    description: 'pH-Wert, Enzyme, antimikrobielle Peptide',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'innate-immunity'
                  },
                  {
                    id: 'cellular-defense',
                    name: 'Zelluläre Abwehr (Phagozyten)',
                    description: 'Makrophagen, Neutrophile, dendritische Zellen',
                    icon: '🦠',
                    difficulty: 'medium',
                    parentId: 'innate-immunity'
                  },
                  {
                    id: 'complement-system',
                    name: 'Komplementsystem',
                    description: 'Kaskadensystem der Immunabwehr',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'innate-immunity'
                  },
                  {
                    id: 'acute-phase-proteins',
                    name: 'Akute-Phase-Proteine',
                    description: 'CRP, Fibrinogen, Ferritin bei Entzündung',
                    icon: '📈',
                    difficulty: 'medium',
                    parentId: 'innate-immunity'
                  }
                ]
              },
              {
                id: 'adaptive-immunity',
                name: 'Erworbene Immunität',
                description: 'Spezifische adaptive Immunabwehr',
                icon: '🎯',
                difficulty: 'hard',
                parentId: 'immune-system',
                children: [
                  {
                    id: 'humoral-immunity',
                    name: 'Humorale Immunität (B-Zellen, Antikörper)',
                    description: 'Antikörper-vermittelte Immunabwehr',
                    icon: '🧬',
                    difficulty: 'hard',
                    parentId: 'adaptive-immunity',
                    children: [
                      {
                        id: 'b-cell-activation',
                        name: 'B-Zell-Aktivierung',
                        description: 'Aktivierung und Differenzierung',
                        icon: '⚡',
                        difficulty: 'hard',
                        parentId: 'humoral-immunity'
                      },
                      {
                        id: 'antibody-classes',
                        name: 'Antikörperklassen (IgG, IgM, IgA, IgE, IgD)',
                        description: 'Verschiedene Immunglobulin-Typen',
                        icon: '🔤',
                        difficulty: 'hard',
                        parentId: 'humoral-immunity'
                      },
                      {
                        id: 'antibody-functions',
                        name: 'Antikörperfunktionen',
                        description: 'Neutralisation, Opsonierung, Komplementaktivierung',
                        icon: '⚔️',
                        difficulty: 'hard',
                        parentId: 'humoral-immunity'
                      }
                    ]
                  },
                  {
                    id: 'cellular-immunity',
                    name: 'Zelluläre Immunität (T-Zellen)',
                    description: 'T-Zell-vermittelte Immunabwehr',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'adaptive-immunity',
                    children: [
                      {
                        id: 'cd4-t-cells',
                        name: 'CD4+ T-Helferzellen (Th1, Th2, Th17)',
                        description: 'Regulatorische T-Zellen',
                        icon: '👥',
                        difficulty: 'hard',
                        parentId: 'cellular-immunity'
                      },
                      {
                        id: 'cd8-t-cells',
                        name: 'CD8+ zytotoxische T-Zellen',
                        description: 'Killerzellen gegen infizierte Zellen',
                        icon: '⚔️',
                        difficulty: 'hard',
                        parentId: 'cellular-immunity'
                      },
                      {
                        id: 'regulatory-t-cells',
                        name: 'Regulatorische T-Zellen (Tregs)',
                        description: 'Immunsuppressive T-Zellen',
                        icon: '⚖️',
                        difficulty: 'hard',
                        parentId: 'cellular-immunity'
                      }
                    ]
                  },
                  {
                    id: 'mhc-molecules',
                    name: 'MHC-Moleküle (HLA)',
                    description: 'Haupthistokompatibilitätskomplex',
                    icon: '🔑',
                    difficulty: 'hard',
                    parentId: 'adaptive-immunity',
                    children: [
                      {
                        id: 'mhc-class-i',
                        name: 'MHC-Klasse I (HLA-A, B, C)',
                        description: 'Präsentation intrazellulärer Peptide',
                        icon: '🏠',
                        difficulty: 'hard',
                        parentId: 'mhc-molecules'
                      },
                      {
                        id: 'mhc-class-ii',
                        name: 'MHC-Klasse II (HLA-DR, DQ, DP)',
                        description: 'Präsentation extrazellulärer Peptide',
                        icon: '🌍',
                        difficulty: 'hard',
                        parentId: 'mhc-molecules'
                      }
                    ]
                  },
                  {
                    id: 'antigen-presentation',
                    name: 'Antigenpräsentation',
                    description: 'Darstellung von Antigenen für T-Zellen',
                    icon: '🎭',
                    difficulty: 'hard',
                    parentId: 'adaptive-immunity',
                    children: [
                      {
                        id: 'dendritic-cells',
                        name: 'Dendritische Zellen',
                        description: 'Professionelle antigenpräsentierende Zellen',
                        icon: '🌿',
                        difficulty: 'hard',
                        parentId: 'antigen-presentation'
                      },
                      {
                        id: 'cross-presentation',
                        name: 'Kreuzpräsentation',
                        description: 'Alternative Antigenpräsentation',
                        icon: '🔄',
                        difficulty: 'hard',
                        parentId: 'antigen-presentation'
                      }
                    ]
                  },
                  {
                    id: 'immunological-memory',
                    name: 'Immunologisches Gedächtnis',
                    description: 'Langfristige Immunität nach Erstkontakt',
                    icon: '🧠',
                    difficulty: 'medium',
                    parentId: 'adaptive-immunity',
                    children: [
                      {
                        id: 'memory-b-cells',
                        name: 'Gedächtnis-B-Zellen',
                        description: 'B-Zell-Gedächtnis für Antikörperantwort',
                        icon: '📚',
                        difficulty: 'medium',
                        parentId: 'immunological-memory'
                      },
                      {
                        id: 'memory-t-cells',
                        name: 'Gedächtnis-T-Zellen',
                        description: 'T-Zell-Gedächtnis für zelluläre Antwort',
                        icon: '🧠',
                        difficulty: 'medium',
                        parentId: 'immunological-memory'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'lymphatic-system',
            name: 'Lymphatisches System',
            description: 'Lymphbahnen und lymphatische Organe',
            icon: '🌊',
            difficulty: 'medium',
            parentId: 'blood-immune-system',
            children: [
              {
                id: 'primary-lymphoid-organs',
                name: 'Primäre lymphatische Organe (Knochenmark, Thymus)',
                description: 'Lymphozytenbildung und -reifung',
                icon: '🏭',
                difficulty: 'medium',
                parentId: 'lymphatic-system',
                children: [
                  {
                    id: 'bone-marrow-lymphoid',
                    name: 'Knochenmark (B-Zell-Reifung)',
                    description: 'Bildungsort der B-Lymphozyten',
                    icon: '🦴',
                    difficulty: 'medium',
                    parentId: 'primary-lymphoid-organs'
                  },
                  {
                    id: 'thymus',
                    name: 'Thymus (T-Zell-Reifung)',
                    description: 'Reifungsort der T-Lymphozyten',
                    icon: '🦋',
                    difficulty: 'medium',
                    parentId: 'primary-lymphoid-organs'
                  },
                  {
                    id: 'thymic-selection',
                    name: 'Positive/negative Selektion',
                    description: 'T-Zell-Auswahl im Thymus',
                    icon: '✅',
                    difficulty: 'hard',
                    parentId: 'primary-lymphoid-organs'
                  }
                ]
              },
              {
                id: 'secondary-lymphoid-organs',
                name: 'Sekundäre lymphatische Organe (Milz, Lymphknoten)',
                description: 'Immunantwort und Antigenpräsentation',
                icon: '🏛️',
                difficulty: 'medium',
                parentId: 'lymphatic-system',
                children: [
                  {
                    id: 'spleen',
                    name: 'Milz',
                    description: 'Blutfilter und Immunorgan',
                    icon: '🫘',
                    difficulty: 'medium',
                    parentId: 'secondary-lymphoid-organs'
                  },
                  {
                    id: 'lymph-nodes',
                    name: 'Lymphknoten',
                    description: 'Filterstationen des Lymphsystems',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'secondary-lymphoid-organs'
                  },
                  {
                    id: 'lymph-node-structure',
                    name: 'Lymphknotenstruktur',
                    description: 'Rinde, Mark, Keimzentren',
                    icon: '🏗️',
                    difficulty: 'medium',
                    parentId: 'secondary-lymphoid-organs'
                  }
                ]
              },
              {
                id: 'malt',
                name: 'MALT (Mucosa-associated lymphoid tissue)',
                description: 'Schleimhaut-assoziiertes Lymphgewebe',
                icon: '🌸',
                difficulty: 'medium',
                parentId: 'lymphatic-system',
                children: [
                  {
                    id: 'galt',
                    name: 'GALT (Gut-associated lymphoid tissue)',
                    description: 'Darm-assoziiertes Lymphgewebe',
                    icon: '🌀',
                    difficulty: 'medium',
                    parentId: 'malt'
                  },
                  {
                    id: 'balt',
                    name: 'BALT (Bronchus-associated lymphoid tissue)',
                    description: 'Bronchien-assoziiertes Lymphgewebe',
                    icon: '🫁',
                    difficulty: 'medium',
                    parentId: 'malt'
                  },
                  {
                    id: 'nalt',
                    name: 'NALT (Nasal-associated lymphoid tissue)',
                    description: 'Nasen-assoziiertes Lymphgewebe',
                    icon: '👃',
                    difficulty: 'medium',
                    parentId: 'malt'
                  }
                ]
              },
              {
                id: 'lymph-circulation',
                name: 'Lymphzirkulation',
                description: 'Lymphfluss und -transport',
                icon: '🔄',
                difficulty: 'medium',
                parentId: 'lymphatic-system',
                children: [
                  {
                    id: 'lymph-capillaries',
                    name: 'Lymphkapillaren',
                    description: 'Beginn des Lymphsystems',
                    icon: '🌱',
                    difficulty: 'medium',
                    parentId: 'lymph-circulation'
                  },
                  {
                    id: 'lymph-collectors',
                    name: 'Lymphkollektoren',
                    description: 'Hauptlymphbahnen',
                    icon: '🏞️',
                    difficulty: 'medium',
                    parentId: 'lymph-circulation'
                  },
                  {
                    id: 'thoracic-duct',
                    name: 'Ductus thoracicus',
                    description: 'Hauptlymphgang',
                    icon: '🏗️',
                    difficulty: 'medium',
                    parentId: 'lymph-circulation'
                  },
                  {
                    id: 'lymph-pumping',
                    name: 'Lymphpumpfunktion',
                    description: 'Mechanismen des Lymphtransports',
                    icon: '💓',
                    difficulty: 'medium',
                    parentId: 'lymph-circulation'
                  }
                ]
              }
            ]
          },
          {
            id: 'immune-reactions',
            name: 'Immunreaktionen',
            description: 'Immunantworten und Hypersensitivität',
            icon: '⚡',
            difficulty: 'hard',
            parentId: 'blood-immune-system',
            children: [
              {
                id: 'type-i-hypersensitivity',
                name: 'Typ I (IgE-vermittelt, Soforttyp)',
                description: 'Soforttyp-Allergie und Anaphylaxie',
                icon: '💥',
                difficulty: 'medium',
                parentId: 'immune-reactions',
                children: [
                  {
                    id: 'ige-antibodies',
                    name: 'IgE-Antikörper',
                    description: 'Allergie-auslösende Immunglobuline',
                    icon: '🔴',
                    difficulty: 'medium',
                    parentId: 'type-i-hypersensitivity'
                  },
                  {
                    id: 'mast-cells',
                    name: 'Mastzellen & Basophile',
                    description: 'Effektorzellen der Typ-I-Reaktion',
                    icon: '💣',
                    difficulty: 'medium',
                    parentId: 'type-i-hypersensitivity'
                  },
                  {
                    id: 'anaphylaxis',
                    name: 'Anaphylaxie',
                    description: 'Systemische allergische Reaktion',
                    icon: '🚨',
                    difficulty: 'hard',
                    parentId: 'type-i-hypersensitivity'
                  }
                ]
              },
              {
                id: 'type-ii-hypersensitivity',
                name: 'Typ II (Zytotoxisch)',
                description: 'Antikörper-vermittelte Zellzerstörung',
                icon: '⚔️',
                difficulty: 'hard',
                parentId: 'immune-reactions',
                children: [
                  {
                    id: 'complement-mediated',
                    name: 'Komplement-vermittelte Zytolyse',
                    description: 'Zellzerstörung durch Komplement',
                    icon: '💥',
                    difficulty: 'hard',
                    parentId: 'type-ii-hypersensitivity'
                  },
                  {
                    id: 'adcc',
                    name: 'ADCC (Antikörper-abhängige Zytotoxizität)',
                    description: 'NK-Zell-vermittelte Zellzerstörung',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'type-ii-hypersensitivity'
                  }
                ]
              },
              {
                id: 'type-iii-hypersensitivity',
                name: 'Typ III (Immunkomplex)',
                description: 'Immunkomplex-vermittelte Entzündung',
                icon: '🕸️',
                difficulty: 'hard',
                parentId: 'immune-reactions',
                children: [
                  {
                    id: 'immune-complexes',
                    name: 'Antigen-Antikörper-Komplexe',
                    description: 'Bildung und Ablagerung von Immunkomplexen',
                    icon: '🔗',
                    difficulty: 'hard',
                    parentId: 'type-iii-hypersensitivity'
                  },
                  {
                    id: 'arthus-reaction',
                    name: 'Arthus-Reaktion',
                    description: 'Lokale Immunkomplex-Reaktion',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'type-iii-hypersensitivity'
                  }
                ]
              },
              {
                id: 'type-iv-hypersensitivity',
                name: 'Typ IV (Zellvermittelt, Spättyp)',
                description: 'T-Zell-vermittelte Spättyp-Allergie',
                icon: '🐌',
                difficulty: 'hard',
                parentId: 'immune-reactions',
                children: [
                  {
                    id: 'th1-response',
                    name: 'Th1-vermittelte Reaktion',
                    description: 'Makrophagen-Aktivierung',
                    icon: '🦠',
                    difficulty: 'hard',
                    parentId: 'type-iv-hypersensitivity'
                  },
                  {
                    id: 'cytotoxic-t-cells',
                    name: 'Zytotoxische T-Zell-Reaktion',
                    description: 'Direkte Zellzerstörung durch CD8+ T-Zellen',
                    icon: '⚔️',
                    difficulty: 'hard',
                    parentId: 'type-iv-hypersensitivity'
                  },
                  {
                    id: 'contact-dermatitis',
                    name: 'Kontaktdermatitis',
                    description: 'Allergische Hautreaktion',
                    icon: '🧴',
                    difficulty: 'medium',
                    parentId: 'type-iv-hypersensitivity'
                  }
                ]
              },
              {
                id: 'autoimmunity',
                name: 'Autoimmunität',
                description: 'Immunreaktionen gegen körpereigene Strukturen',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'immune-reactions',
                children: [
                  {
                    id: 'self-tolerance',
                    name: 'Selbsttoleranz',
                    description: 'Vermeidung von Autoimmunität',
                    icon: '☮️',
                    difficulty: 'hard',
                    parentId: 'autoimmunity'
                  },
                  {
                    id: 'autoantibodies',
                    name: 'Autoantikörper',
                    description: 'Antikörper gegen körpereigene Strukturen',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'autoimmunity'
                  },
                  {
                    id: 'molecular-mimicry',
                    name: 'Molekulare Mimikry',
                    description: 'Kreuzreaktion mit körpereigenen Strukturen',
                    icon: '🎭',
                    difficulty: 'hard',
                    parentId: 'autoimmunity'
                  }
                ]
              }
            ]
          },
          {
            id: 'blood-groups',
            name: 'Blutgruppensysteme',
            description: 'Blutgruppenbestimmung und Kompatibilität',
            icon: '🅰️',
            difficulty: 'medium',
            parentId: 'blood-immune-system',
            children: [
              {
                id: 'abo-system',
                name: 'AB0-System',
                description: 'Hauptblutgruppensystem',
                icon: '🅰️',
                difficulty: 'medium',
                parentId: 'blood-groups',
                children: [
                  {
                    id: 'abo-antigens',
                    name: 'A- und B-Antigene',
                    description: 'Oberflächenantigene der Erythrozyten',
                    icon: '🔴',
                    difficulty: 'medium',
                    parentId: 'abo-system'
                  },
                  {
                    id: 'abo-antibodies',
                    name: 'Anti-A und Anti-B Antikörper',
                    description: 'Natürliche Blutgruppenantikörper',
                    icon: '🧬',
                    difficulty: 'medium',
                    parentId: 'abo-system'
                  },
                  {
                    id: 'universal-donor',
                    name: 'Universalspender (0) und -empfänger (AB)',
                    description: 'Besondere Transfusionseigenschaften',
                    icon: '🎁',
                    difficulty: 'easy',
                    parentId: 'abo-system'
                  },
                  {
                    id: 'abo-inheritance',
                    name: 'Vererbung (Mendel-Gesetze)',
                    description: 'Genetik der AB0-Blutgruppen',
                    icon: '🧬',
                    difficulty: 'medium',
                    parentId: 'abo-system'
                  }
                ]
              },
              {
                id: 'rhesus-system',
                name: 'Rhesus-System',
                description: 'Zweitwichtigstes Blutgruppensystem',
                icon: '🐒',
                difficulty: 'medium',
                parentId: 'blood-groups',
                children: [
                  {
                    id: 'rh-d-antigen',
                    name: 'Rh-D Antigen',
                    description: 'Wichtigstes Rhesus-Antigen',
                    icon: '🔵',
                    difficulty: 'medium',
                    parentId: 'rhesus-system'
                  },
                  {
                    id: 'rh-immunization',
                    name: 'Rh-Immunisierung',
                    description: 'Antikörperbildung gegen Rh-D',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'rhesus-system'
                  },
                  {
                    id: 'anti-d-prophylaxis',
                    name: 'Anti-D-Prophylaxe',
                    description: 'Verhütung der Rh-Immunisierung',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'rhesus-system'
                  },
                  {
                    id: 'hemolytic-disease',
                    name: 'Morbus haemolyticus neonatorum',
                    description: 'Rh-Inkompatibilität beim Neugeborenen',
                    icon: '👶',
                    difficulty: 'hard',
                    parentId: 'rhesus-system'
                  }
                ]
              },
              {
                id: 'other-blood-groups',
                name: 'Weitere Blutgruppensysteme',
                description: 'Zusätzliche Blutgruppenantigene',
                icon: '🔤',
                difficulty: 'hard',
                parentId: 'blood-groups',
                children: [
                  {
                    id: 'kell-system',
                    name: 'Kell-System',
                    description: 'Drittwichtigstes Blutgruppensystem',
                    icon: '🔑',
                    difficulty: 'hard',
                    parentId: 'other-blood-groups'
                  },
                  {
                    id: 'duffy-system',
                    name: 'Duffy-System',
                    description: 'Blutgruppe mit Malaria-Resistenz',
                    icon: '🦟',
                    difficulty: 'hard',
                    parentId: 'other-blood-groups'
                  },
                  {
                    id: 'kidd-system',
                    name: 'Kidd-System',
                    description: 'Harnstofftransporter-Antigene',
                    icon: '🚛',
                    difficulty: 'hard',
                    parentId: 'other-blood-groups'
                  },
                  {
                    id: 'lewis-system',
                    name: 'Lewis-System',
                    description: 'Sekretions-abhängige Blutgruppe',
                    icon: '💧',
                    difficulty: 'hard',
                    parentId: 'other-blood-groups'
                  }
                ]
              },
              {
                id: 'blood-typing',
                name: 'Blutgruppenbestimmung',
                description: 'Labormethoden zur Blutgruppenbestimmung',
                icon: '🧪',
                difficulty: 'medium',
                parentId: 'blood-groups',
                children: [
                  {
                    id: 'bedside-test',
                    name: 'Bedside-Test',
                    description: 'Schnelle Blutgruppenbestimmung',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'blood-typing'
                  },
                  {
                    id: 'cross-matching',
                    name: 'Kreuzprobe',
                    description: 'Kompatibilitätsprüfung vor Transfusion',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'blood-typing'
                  },
                  {
                    id: 'antibody-screening',
                    name: 'Antikörpersuchtest',
                    description: 'Suche nach irregulären Antikörpern',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'blood-typing'
                  },
                  {
                    id: 'transfusion-reactions',
                    name: 'Transfusionsreaktionen',
                    description: 'Komplikationen bei Bluttransfusion',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'blood-typing'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'metabolism-hormones',
        name: 'STOFFWECHSEL & HORMONE',
        description: 'Stoffwechselprozesse und Hormonregulation',
        icon: '🔄',
        difficulty: 'hard',
        parentId: 'anatomy-physiology',
        children: [
          {
            id: 'carbohydrate-metabolism',
            name: 'Kohlenhydratstoffwechsel',
            description: 'Glukosestoffwechsel und Energiegewinnung',
            icon: '🍞',
            difficulty: 'hard',
            parentId: 'metabolism-hormones',
            children: [
              {
                id: 'glycolysis',
                name: 'Glykolyse',
                description: 'Glukoseabbau zu Pyruvat',
                icon: '⚡',
                difficulty: 'hard',
                parentId: 'carbohydrate-metabolism'
              },
              {
                id: 'gluconeogenesis',
                name: 'Gluconeogenese',
                description: 'Glukosebildung aus Nicht-Kohlenhydraten',
                icon: '🏗️',
                difficulty: 'hard',
                parentId: 'carbohydrate-metabolism'
              },
              {
                id: 'glycogen-metabolism',
                name: 'Glykogenstoffwechsel',
                description: 'Glykogenaufbau und -abbau',
                icon: '🏪',
                difficulty: 'medium',
                parentId: 'carbohydrate-metabolism'
              },
              {
                id: 'pentose-phosphate-pathway',
                name: 'Pentosephosphatweg',
                description: 'Alternative Glukoseoxidation',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'carbohydrate-metabolism'
              },
              {
                id: 'blood-glucose-regulation',
                name: 'Blutzuckerregulation',
                description: 'Hormonelle Glukosehomöostase',
                icon: '📊',
                difficulty: 'medium',
                parentId: 'carbohydrate-metabolism'
              }
            ]
          },
          {
            id: 'fat-metabolism',
            name: 'Fettstoffwechsel',
            description: 'Lipidstoffwechsel und Energiegewinnung',
            icon: '🧈',
            difficulty: 'hard',
            parentId: 'metabolism-hormones',
            children: [
              {
                id: 'lipolysis',
                name: 'Lipolyse',
                description: 'Fettabbau zu Glycerin und Fettsäuren',
                icon: '✂️',
                difficulty: 'hard',
                parentId: 'fat-metabolism'
              },
              {
                id: 'beta-oxidation',
                name: 'β-Oxidation',
                description: 'Fettsäureabbau zu Acetyl-CoA',
                icon: '🔥',
                difficulty: 'hard',
                parentId: 'fat-metabolism'
              },
              {
                id: 'fatty-acid-synthesis',
                name: 'Fettsäuresynthese',
                description: 'Aufbau von Fettsäuren aus Acetyl-CoA',
                icon: '🏗️',
                difficulty: 'hard',
                parentId: 'fat-metabolism'
              },
              {
                id: 'ketone-bodies',
                name: 'Ketonkörper',
                description: 'Alternative Energiequelle bei Hungerzuständen',
                icon: '⚡',
                difficulty: 'hard',
                parentId: 'fat-metabolism'
              },
              {
                id: 'cholesterol-metabolism',
                name: 'Cholesterinstoffwechsel',
                description: 'Cholesterinsynthese und Lipoproteine',
                icon: '🧪',
                difficulty: 'hard',
                parentId: 'fat-metabolism'
              }
            ]
          },
          {
            id: 'protein-metabolism',
            name: 'Proteinstoffwechsel',
            description: 'Aminosäurestoffwechsel und Stickstoffhaushalt',
            icon: '🧬',
            difficulty: 'hard',
            parentId: 'metabolism-hormones',
            children: [
              {
                id: 'amino-acid-degradation',
                name: 'Aminosäureabbau',
                description: 'Desaminierung und Transaminierung',
                icon: '✂️',
                difficulty: 'hard',
                parentId: 'protein-metabolism'
              },
              {
                id: 'urea-cycle',
                name: 'Harnstoffzyklus',
                description: 'Entgiftung von Ammoniak zu Harnstoff',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'protein-metabolism'
              },
              {
                id: 'protein-synthesis',
                name: 'Proteinsynthese',
                description: 'Translation und Proteinbiosynthese',
                icon: '🏗️',
                difficulty: 'hard',
                parentId: 'protein-metabolism'
              },
              {
                id: 'nitrogen-balance',
                name: 'Stickstoffbilanz',
                description: 'Ein- und Ausscheidung von Stickstoff',
                icon: '⚖️',
                difficulty: 'medium',
                parentId: 'protein-metabolism'
              }
            ]
          },
          {
            id: 'hormone-system',
            name: 'Hormonsystem',
            description: 'Endokrine Regulation und Signaltransduktion',
            icon: '🧪',
            difficulty: 'hard',
            parentId: 'metabolism-hormones',
            children: [
              {
                id: 'hypothalamic-pituitary-axis',
                name: 'Hypothalamus-Hypophysen-Achse',
                description: 'Zentrale endokrine Steuerung',
                icon: '🧠',
                difficulty: 'hard',
                parentId: 'hormone-system',
                children: [
                  {
                    id: 'hypothalamic-hormones',
                    name: 'Hypothalamische Hormone',
                    description: 'Releasing- und Inhibiting-Hormone',
                    icon: '🔗',
                    difficulty: 'hard',
                    parentId: 'hypothalamic-pituitary-axis'
                  },
                  {
                    id: 'anterior-pituitary',
                    name: 'Hypophysenvorderlappen (HVL)',
                    description: 'ACTH, TSH, FSH, LH, GH, Prolaktin',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'hypothalamic-pituitary-axis'
                  },
                  {
                    id: 'posterior-pituitary',
                    name: 'Hypophysenhinterlappen (HHL)',
                    description: 'ADH und Oxytocin',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'hypothalamic-pituitary-axis'
                  }
                ]
              },
              {
                id: 'thyroid-hormones',
                name: 'Schilddrüsenhormone',
                description: 'T3, T4 und Stoffwechselregulation',
                icon: '🦋',
                difficulty: 'medium',
                parentId: 'hormone-system',
                children: [
                  {
                    id: 'thyroid-hormone-synthesis',
                    name: 'Hormonsynthese',
                    description: 'Thyroxin (T4) und Triiodthyronin (T3)',
                    icon: '🏭',
                    difficulty: 'hard',
                    parentId: 'thyroid-hormones'
                  },
                  {
                    id: 'thyroid-regulation',
                    name: 'TSH-Regelkreis',
                    description: 'Hypothalamus-Hypophyse-Schilddrüse',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'thyroid-hormones'
                  },
                  {
                    id: 'calcitonin',
                    name: 'Calcitonin',
                    description: 'Kalziumregulation durch C-Zellen',
                    icon: '🦴',
                    difficulty: 'medium',
                    parentId: 'thyroid-hormones'
                  }
                ]
              },
              {
                id: 'adrenal-hormones',
                name: 'Nebennierenhormone',
                description: 'Kortisol, Aldosteron und Katecholamine',
                icon: '⚡',
                difficulty: 'medium',
                parentId: 'hormone-system',
                children: [
                  {
                    id: 'adrenal-cortex',
                    name: 'Nebennierenrinde',
                    description: 'Kortisol, Aldosteron, Androgene',
                    icon: '🧅',
                    difficulty: 'hard',
                    parentId: 'adrenal-hormones'
                  },
                  {
                    id: 'adrenal-medulla',
                    name: 'Nebennierenmark',
                    description: 'Adrenalin und Noradrenalin',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'adrenal-hormones'
                  },
                  {
                    id: 'stress-response',
                    name: 'Stressantwort',
                    description: 'HPA-Achse und Kampf-oder-Flucht',
                    icon: '🚨',
                    difficulty: 'medium',
                    parentId: 'adrenal-hormones'
                  }
                ]
              },
              {
                id: 'pancreatic-hormones',
                name: 'Pankreashormone',
                description: 'Insulin, Glukagon und Blutzuckerregulation',
                icon: '🥞',
                difficulty: 'medium',
                parentId: 'hormone-system',
                children: [
                  {
                    id: 'insulin',
                    name: 'Insulin',
                    description: 'Blutzuckersenkung und Anabolismus',
                    icon: '📉',
                    difficulty: 'medium',
                    parentId: 'pancreatic-hormones'
                  },
                  {
                    id: 'glucagon',
                    name: 'Glukagon',
                    description: 'Blutzuckersteigerung und Katabolismus',
                    icon: '📈',
                    difficulty: 'medium',
                    parentId: 'pancreatic-hormones'
                  },
                  {
                    id: 'somatostatin',
                    name: 'Somatostatin',
                    description: 'Hemmung von Insulin und Glukagon',
                    icon: '🛑',
                    difficulty: 'medium',
                    parentId: 'pancreatic-hormones'
                  }
                ]
              },
              {
                id: 'sex-hormones',
                name: 'Geschlechtshormone',
                description: 'Östrogen, Testosteron und Reproduktion',
                icon: '♀️♂️',
                difficulty: 'medium',
                parentId: 'hormone-system',
                children: [
                  {
                    id: 'male-hormones',
                    name: 'Männliche Geschlechtshormone',
                    description: 'Testosteron und Androgene',
                    icon: '♂️',
                    difficulty: 'medium',
                    parentId: 'sex-hormones'
                  },
                  {
                    id: 'female-hormones',
                    name: 'Weibliche Geschlechtshormone',
                    description: 'Östrogen und Progesteron',
                    icon: '♀️',
                    difficulty: 'medium',
                    parentId: 'sex-hormones'
                  },
                  {
                    id: 'menstrual-cycle',
                    name: 'Menstruationszyklus',
                    description: 'FSH, LH und Zyklusregulation',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'sex-hormones'
                  }
                ]
              },
              {
                id: 'other-hormones',
                name: 'Weitere Hormone',
                description: 'PTH, Calcitonin, Melatonin und andere',
                icon: '🧪',
                difficulty: 'medium',
                parentId: 'hormone-system',
                children: [
                  {
                    id: 'parathyroid-hormone',
                    name: 'Parathormon (PTH)',
                    description: 'Kalzium- und Phosphatregulation',
                    icon: '🦴',
                    difficulty: 'medium',
                    parentId: 'other-hormones'
                  },
                  {
                    id: 'vitamin-d',
                    name: 'Vitamin D (Calcitriol)',
                    description: 'Kalziumaufnahme und Knochenstoffwechsel',
                    icon: '☀️',
                    difficulty: 'medium',
                    parentId: 'other-hormones'
                  },
                  {
                    id: 'melatonin',
                    name: 'Melatonin',
                    description: 'Circadianer Rhythmus und Schlaf',
                    icon: '🌙',
                    difficulty: 'easy',
                    parentId: 'other-hormones'
                  },
                  {
                    id: 'erythropoietin',
                    name: 'Erythropoietin (EPO)',
                    description: 'Regulation der Erythropoese',
                    icon: '🔴',
                    difficulty: 'medium',
                    parentId: 'other-hormones'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'digestive-system',
        name: 'VERDAUUNGSSYSTEM',
        description: 'Gastrointestinaltrakt und Verdauungsorgane',
        icon: '🍯',
        difficulty: 'medium',
        parentId: 'anatomy-physiology',
        children: [
          {
            id: 'gi-anatomy',
            name: 'Anatomie des Verdauungstrakts',
            description: 'Aufbau von Mund bis Anus',
            icon: '🫄',
            difficulty: 'medium',
            parentId: 'digestive-system',
            children: [
              {
                id: 'oral-cavity',
                name: 'Mundhöhle & Zähne',
                description: 'Mechanische Zerkleinerung und Speichelsekretion',
                icon: '👄',
                difficulty: 'easy',
                parentId: 'gi-anatomy',
                children: [
                  {
                    id: 'lips-cheeks-palate',
                    name: 'Lippen, Wangen, Gaumen',
                    description: 'Äußere Begrenzung der Mundhöhle',
                    icon: '👄',
                    difficulty: 'easy',
                    parentId: 'oral-cavity'
                  },
                  {
                    id: 'tongue',
                    name: 'Zunge (Papillen, Geschmacksknospen)',
                    description: 'Geschmacksorgan und Schluckhilfe',
                    icon: '👅',
                    difficulty: 'medium',
                    parentId: 'oral-cavity'
                  },
                  {
                    id: 'salivary-glands',
                    name: 'Speicheldrüsen (Parotis, Submandibularis, Sublingualis)',
                    description: 'Große Speicheldrüsen',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'oral-cavity'
                  },
                  {
                    id: 'teeth',
                    name: 'Zähne (Aufbau, Gebiss, Zahnhalteapparat)',
                    description: 'Dentition und Parodontium',
                    icon: '🦷',
                    difficulty: 'medium',
                    parentId: 'oral-cavity'
                  },
                  {
                    id: 'swallowing-phases',
                    name: 'Schluckakt (oral, pharyngeal, ösophageal)',
                    description: 'Drei Phasen des Schluckens',
                    icon: '🌊',
                    difficulty: 'medium',
                    parentId: 'oral-cavity'
                  },
                  {
                    id: 'saliva-production',
                    name: 'Speichelproduktion & -zusammensetzung',
                    description: 'Speichelsekretion und Enzyme',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'oral-cavity'
                  }
                ]
              },
              {
                id: 'esophagus',
                name: 'Ösophagus (Speiseröhre)',
                description: 'Schluckakt und Peristaltik',
                icon: '🌊',
                difficulty: 'medium',
                parentId: 'gi-anatomy',
                children: [
                  {
                    id: 'esophageal-anatomy',
                    name: 'Anatomischer Aufbau (Schichten)',
                    description: 'Wandaufbau der Speiseröhre',
                    icon: '🏗️',
                    difficulty: 'medium',
                    parentId: 'esophagus'
                  },
                  {
                    id: 'esophageal-constrictions',
                    name: 'Physiologische Engstellen',
                    description: 'Natürliche Verengungen des Ösophagus',
                    icon: '🤏',
                    difficulty: 'medium',
                    parentId: 'esophagus'
                  },
                  {
                    id: 'peristalsis',
                    name: 'Peristaltik',
                    description: 'Wellenförmige Muskelkontraktionen',
                    icon: '🌊',
                    difficulty: 'medium',
                    parentId: 'esophagus'
                  },
                  {
                    id: 'lower-esophageal-sphincter',
                    name: 'Unterer Ösophagussphinkter',
                    description: 'Verschluss zum Magen',
                    icon: '🚪',
                    difficulty: 'medium',
                    parentId: 'esophagus'
                  },
                  {
                    id: 'swallowing-mechanism',
                    name: 'Schluckmechanismus',
                    description: 'Koordinierter Schluckvorgang',
                    icon: '⚙️',
                    difficulty: 'medium',
                    parentId: 'esophagus'
                  }
                ]
              },
              {
                id: 'stomach',
                name: 'Magen',
                description: 'Magensäureproduktion und Proteinvorverdauung',
                icon: '🫃',
                difficulty: 'medium',
                parentId: 'gi-anatomy',
                children: [
                  {
                    id: 'stomach-anatomy',
                    name: 'Anatomie (Kardia, Fundus, Korpus, Antrum, Pylorus)',
                    description: 'Aufbau des Magens',
                    icon: '🏗️',
                    difficulty: 'medium',
                    parentId: 'stomach'
                  },
                  {
                    id: 'gastric-wall',
                    name: 'Magenwand (Schichten, Drüsen)',
                    description: 'Wandaufbau und Drüsensystem',
                    icon: '🧱',
                    difficulty: 'hard',
                    parentId: 'stomach'
                  },
                  {
                    id: 'gastric-juice',
                    name: 'Magensaft (HCl, Pepsin, Intrinsic Factor)',
                    description: 'Magensekretion und Enzyme',
                    icon: '💧',
                    difficulty: 'hard',
                    parentId: 'stomach'
                  },
                  {
                    id: 'gastric-motility',
                    name: 'Motilität & Entleerung',
                    description: 'Magenbewegungen und Entleerung',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'stomach'
                  },
                  {
                    id: 'acid-regulation',
                    name: 'Regulation der Säureproduktion',
                    description: 'Kontrolle der Magensäuresekretion',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'stomach'
                  },
                  {
                    id: 'protective-mechanisms',
                    name: 'Schutzmechanismen (Schleim, Bikarbonat)',
                    description: 'Magenschutz vor Selbstverdauung',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'stomach'
                  }
                ]
              },
              {
                id: 'small-intestine',
                name: 'Dünndarm',
                description: 'Haupt-Verdauungs- und Absorptionsort',
                icon: '🌀',
                difficulty: 'hard',
                parentId: 'gi-anatomy',
                children: [
                  {
                    id: 'duodenum',
                    name: 'Duodenum (Zwölffingerdarm)',
                    description: 'Erster Dünndarmabschnitt',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'small-intestine'
                  },
                  {
                    id: 'jejunum',
                    name: 'Jejunum (Leerdarm)',
                    description: 'Mittlerer Dünndarmabschnitt',
                    icon: '🌀',
                    difficulty: 'medium',
                    parentId: 'small-intestine'
                  },
                  {
                    id: 'ileum',
                    name: 'Ileum (Krummdarm)',
                    description: 'Letzter Dünndarmabschnitt',
                    icon: '🔚',
                    difficulty: 'medium',
                    parentId: 'small-intestine'
                  },
                  {
                    id: 'intestinal-wall',
                    name: 'Darmwand (Kerckring-Falten, Villi, Mikrovilli)',
                    description: 'Oberflächenvergrößerung für Resorption',
                    icon: '🏗️',
                    difficulty: 'hard',
                    parentId: 'small-intestine'
                  },
                  {
                    id: 'intestinal-glands',
                    name: 'Brunner-Drüsen, Lieberkühn-Krypten',
                    description: 'Darmdrüsen und Sekretion',
                    icon: '💧',
                    difficulty: 'hard',
                    parentId: 'small-intestine'
                  },
                  {
                    id: 'peyers-patches',
                    name: 'Peyer-Plaques (Immunsystem)',
                    description: 'Darmassoziiertes Lymphgewebe',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'small-intestine'
                  }
                ]
              },
              {
                id: 'large-intestine',
                name: 'Dickdarm',
                description: 'Wasserresorption und Stuhlformung',
                icon: '🔄',
                difficulty: 'medium',
                parentId: 'gi-anatomy',
                children: [
                  {
                    id: 'cecum-appendix',
                    name: 'Caecum & Appendix',
                    description: 'Blinddarm und Wurmfortsatz',
                    icon: '🔚',
                    difficulty: 'medium',
                    parentId: 'large-intestine'
                  },
                  {
                    id: 'colon',
                    name: 'Colon (ascendens, transversum, descendens, sigmoideum)',
                    description: 'Grimmdarmabschnitte',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'large-intestine'
                  },
                  {
                    id: 'rectum-anal-canal',
                    name: 'Rektum & Analkanal',
                    description: 'Mastdarm und Afterkanal',
                    icon: '🚪',
                    difficulty: 'medium',
                    parentId: 'large-intestine'
                  },
                  {
                    id: 'haustra-taeniae',
                    name: 'Haustren & Taenien',
                    description: 'Dickdarmmuskulatur und -ausbuchtungen',
                    icon: '🏗️',
                    difficulty: 'medium',
                    parentId: 'large-intestine'
                  },
                  {
                    id: 'gut-microbiome',
                    name: 'Darmflora (Mikrobiom)',
                    description: 'Bakterielle Besiedlung des Darms',
                    icon: '🦠',
                    difficulty: 'medium',
                    parentId: 'large-intestine'
                  },
                  {
                    id: 'continence-mechanism',
                    name: 'Kontinenzmechanismus',
                    description: 'Stuhlkontinenz und Sphinkter',
                    icon: '🔒',
                    difficulty: 'medium',
                    parentId: 'large-intestine'
                  }
                ]
              },
              {
                id: 'accessory-glands',
                name: 'Anhangsdrüsen',
                description: 'Leber, Gallenblase und Pankreas',
                icon: '🥞',
                difficulty: 'hard',
                parentId: 'gi-anatomy',
                children: [
                  {
                    id: 'liver',
                    name: 'Leber',
                    description: 'Stoffwechselorgan und Entgiftung',
                    icon: '🍯',
                    difficulty: 'hard',
                    parentId: 'accessory-glands',
                    children: [
                      {
                        id: 'liver-anatomy',
                        name: 'Anatomie (Lappen, Segmente)',
                        description: 'Aufbau der Leber',
                        icon: '🏗️',
                        difficulty: 'medium',
                        parentId: 'liver'
                      },
                      {
                        id: 'hepatic-lobule',
                        name: 'Funktionseinheit (Leberläppchen)',
                        description: 'Hepatozyten und Sinusoide',
                        icon: '🔬',
                        difficulty: 'hard',
                        parentId: 'liver'
                      },
                      {
                        id: 'bile-production',
                        name: 'Galleproduktion',
                        description: 'Gallensäuresynthese und -sekretion',
                        icon: '💧',
                        difficulty: 'medium',
                        parentId: 'liver'
                      },
                      {
                        id: 'liver-metabolism',
                        name: 'Stoffwechselfunktionen',
                        description: 'Metabolische Leistungen der Leber',
                        icon: '⚗️',
                        difficulty: 'hard',
                        parentId: 'liver'
                      },
                      {
                        id: 'liver-detoxification',
                        name: 'Entgiftung',
                        description: 'Biotransformation und Entgiftung',
                        icon: '🧹',
                        difficulty: 'hard',
                        parentId: 'liver'
                      }
                    ]
                  },
                  {
                    id: 'gallbladder-bile-ducts',
                    name: 'Gallenblase & Gallenwege',
                    description: 'Gallenspeicherung und -transport',
                    icon: '🫒',
                    difficulty: 'medium',
                    parentId: 'accessory-glands',
                    children: [
                      {
                        id: 'gallbladder-structure',
                        name: 'Gallenblase (Aufbau, Funktion)',
                        description: 'Anatomie und Physiologie der Gallenblase',
                        icon: '🫒',
                        difficulty: 'medium',
                        parentId: 'gallbladder-bile-ducts'
                      },
                      {
                        id: 'bile-ducts',
                        name: 'Gallenwege (intra-/extrahepatisch)',
                        description: 'Gallengangsystem',
                        icon: '🛤️',
                        difficulty: 'medium',
                        parentId: 'gallbladder-bile-ducts'
                      },
                      {
                        id: 'sphincter-oddi',
                        name: 'Sphincter Oddi',
                        description: 'Verschluss der Papilla Vateri',
                        icon: '🚪',
                        difficulty: 'medium',
                        parentId: 'gallbladder-bile-ducts'
                      },
                      {
                        id: 'bile-composition',
                        name: 'Gallezusammensetzung',
                        description: 'Bestandteile der Galle',
                        icon: '🧪',
                        difficulty: 'medium',
                        parentId: 'gallbladder-bile-ducts'
                      }
                    ]
                  },
                  {
                    id: 'pancreas',
                    name: 'Pankreas',
                    description: 'Exokrine und endokrine Funktionen',
                    icon: '🥞',
                    difficulty: 'hard',
                    parentId: 'accessory-glands',
                    children: [
                      {
                        id: 'pancreas-anatomy',
                        name: 'Anatomie (Kopf, Körper, Schwanz)',
                        description: 'Aufbau des Pankreas',
                        icon: '🏗️',
                        difficulty: 'medium',
                        parentId: 'pancreas'
                      },
                      {
                        id: 'exocrine-pancreas',
                        name: 'Exokrine Funktion (Verdauungsenzyme)',
                        description: 'Pankreasenzyme für Verdauung',
                        icon: '⚗️',
                        difficulty: 'hard',
                        parentId: 'pancreas'
                      },
                      {
                        id: 'endocrine-pancreas',
                        name: 'Endokrine Funktion (Insulin, Glucagon)',
                        description: 'Langerhans-Inseln und Hormone',
                        icon: '🧪',
                        difficulty: 'medium',
                        parentId: 'pancreas'
                      },
                      {
                        id: 'pancreatic-juice',
                        name: 'Pankreassaft',
                        description: 'Zusammensetzung des Pankreassekrets',
                        icon: '💧',
                        difficulty: 'medium',
                        parentId: 'pancreas'
                      },
                      {
                        id: 'pancreatic-duct',
                        name: 'Ductus pancreaticus',
                        description: 'Pankreasgang und Sekretion',
                        icon: '🛤️',
                        difficulty: 'medium',
                        parentId: 'pancreas'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'digestive-physiology',
            name: 'Verdauungsphysiologie',
            description: 'Verdauungsprozesse und Enzymfunktionen',
            icon: '⚗️',
            difficulty: 'hard',
            parentId: 'digestive-system',
            children: [
              {
                id: 'carbohydrate-digestion',
                name: 'Kohlenhydratverdauung',
                description: 'Stärke- und Zuckerabbau',
                icon: '🍞',
                difficulty: 'medium',
                parentId: 'digestive-physiology',
                children: [
                  {
                    id: 'oral-amylase',
                    name: 'Mundamylase (Ptyalin)',
                    description: 'Stärkeabbau im Mund',
                    icon: '👄',
                    difficulty: 'medium',
                    parentId: 'carbohydrate-digestion'
                  },
                  {
                    id: 'pancreatic-amylase',
                    name: 'Pankreasamylase',
                    description: 'Stärkeabbau im Dünndarm',
                    icon: '🥞',
                    difficulty: 'medium',
                    parentId: 'carbohydrate-digestion'
                  },
                  {
                    id: 'disaccharidases',
                    name: 'Disaccharidasen (Maltase, Laktase, Saccharase)',
                    description: 'Doppelzuckerspaltung',
                    icon: '✂️',
                    difficulty: 'medium',
                    parentId: 'carbohydrate-digestion'
                  },
                  {
                    id: 'glucose-absorption',
                    name: 'Resorption (SGLT1, GLUT2, GLUT5)',
                    description: 'Zuckertransporter im Darm',
                    icon: '🚛',
                    difficulty: 'hard',
                    parentId: 'carbohydrate-digestion'
                  },
                  {
                    id: 'lactose-intolerance',
                    name: 'Laktoseintoleranz',
                    description: 'Milchzuckerunverträglichkeit',
                    icon: '🥛',
                    difficulty: 'medium',
                    parentId: 'carbohydrate-digestion'
                  }
                ]
              },
              {
                id: 'protein-digestion',
                name: 'Proteinverdauung',
                description: 'Eiweißabbau und Aminosäurenresorption',
                icon: '🥩',
                difficulty: 'hard',
                parentId: 'digestive-physiology',
                children: [
                  {
                    id: 'pepsin',
                    name: 'Pepsin (Magen)',
                    description: 'Proteinabbau im sauren Milieu',
                    icon: '🫃',
                    difficulty: 'medium',
                    parentId: 'protein-digestion'
                  },
                  {
                    id: 'pancreatic-proteases',
                    name: 'Trypsin, Chymotrypsin (Pankreas)',
                    description: 'Pankreasproteasen',
                    icon: '🥞',
                    difficulty: 'hard',
                    parentId: 'protein-digestion'
                  },
                  {
                    id: 'peptidases',
                    name: 'Peptidasen (Dünndarm)',
                    description: 'Peptidspaltung an der Darmwand',
                    icon: '✂️',
                    difficulty: 'hard',
                    parentId: 'protein-digestion'
                  },
                  {
                    id: 'amino-acid-transporters',
                    name: 'Aminosäuretransporter',
                    description: 'Aminosäurenaufnahme ins Blut',
                    icon: '🚛',
                    difficulty: 'hard',
                    parentId: 'protein-digestion'
                  },
                  {
                    id: 'protein-absorption',
                    name: 'Proteinresorption',
                    description: 'Aufnahme von Aminosäuren',
                    icon: '📤',
                    difficulty: 'medium',
                    parentId: 'protein-digestion'
                  }
                ]
              },
              {
                id: 'fat-digestion',
                name: 'Fettverdauung',
                description: 'Lipidabbau und Resorption',
                icon: '🧈',
                difficulty: 'hard',
                parentId: 'digestive-physiology',
                children: [
                  {
                    id: 'lipases',
                    name: 'Lipase (Zunge, Magen, Pankreas)',
                    description: 'Fettspaltende Enzyme',
                    icon: '✂️',
                    difficulty: 'medium',
                    parentId: 'fat-digestion'
                  },
                  {
                    id: 'bile-emulsification',
                    name: 'Emulgierung durch Gallensäuren',
                    description: 'Fettverteilung für Verdauung',
                    icon: '🫧',
                    difficulty: 'medium',
                    parentId: 'fat-digestion'
                  },
                  {
                    id: 'micelle-formation',
                    name: 'Mizellenbildung',
                    description: 'Fetttröpfchen für Resorption',
                    icon: '🫧',
                    difficulty: 'hard',
                    parentId: 'fat-digestion'
                  },
                  {
                    id: 'chylomicron-formation',
                    name: 'Resorption & Chylomikronen',
                    description: 'Fetttransport im Lymphsystem',
                    icon: '🚛',
                    difficulty: 'hard',
                    parentId: 'fat-digestion'
                  },
                  {
                    id: 'fat-soluble-vitamins',
                    name: 'Fettlösliche Vitamine (A, D, E, K)',
                    description: 'Vitaminresorption mit Fetten',
                    icon: '💊',
                    difficulty: 'medium',
                    parentId: 'fat-digestion'
                  }
                ]
              },
              {
                id: 'absorption-transport',
                name: 'Resorption & Transport',
                description: 'Nährstoffaufnahme und -transport',
                icon: '🚛',
                difficulty: 'medium',
                parentId: 'digestive-physiology',
                children: [
                  {
                    id: 'water-electrolytes',
                    name: 'Wasser & Elektrolyte',
                    description: 'Wasser- und Salzresorption',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'absorption-transport'
                  },
                  {
                    id: 'vitamin-absorption',
                    name: 'Vitamine (wasserlöslich/fettlöslich)',
                    description: 'Vitaminaufnahme im Darm',
                    icon: '💊',
                    difficulty: 'medium',
                    parentId: 'absorption-transport'
                  },
                  {
                    id: 'mineral-absorption',
                    name: 'Mineralstoffe (Eisen, Kalzium, etc.)',
                    description: 'Mineralstoffresorption',
                    icon: '🧲',
                    difficulty: 'medium',
                    parentId: 'absorption-transport'
                  },
                  {
                    id: 'transport-mechanisms',
                    name: 'Aktive & passive Transportmechanismen',
                    description: 'Transportwege durch die Darmwand',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'absorption-transport'
                  },
                  {
                    id: 'malabsorption',
                    name: 'Resorptionsstörungen',
                    description: 'Gestörte Nährstoffaufnahme',
                    icon: '⚠️',
                    difficulty: 'medium',
                    parentId: 'absorption-transport'
                  }
                ]
              },
              {
                id: 'motility-regulation',
                name: 'Motilität & Regulation',
                description: 'Darmbewegungen und Steuerung',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'digestive-physiology',
                children: [
                  {
                    id: 'migrating-motor-complex',
                    name: 'Migrating Motor Complex (MMC)',
                    description: 'Darmmotilität zwischen Mahlzeiten',
                    icon: '🌊',
                    difficulty: 'hard',
                    parentId: 'motility-regulation'
                  },
                  {
                    id: 'gastrocolic-reflex',
                    name: 'Gastrokolischer Reflex',
                    description: 'Darmantwort auf Magenentleerung',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'motility-regulation'
                  },
                  {
                    id: 'defecation-reflex',
                    name: 'Defäkationsreflex',
                    description: 'Stuhlentleerungsreflex',
                    icon: '🚪',
                    difficulty: 'medium',
                    parentId: 'motility-regulation'
                  },
                  {
                    id: 'neural-regulation',
                    name: 'Nervale Regulation (ENS, Vagus, Sympathikus)',
                    description: 'Nervensystem der Verdauung',
                    icon: '🧠',
                    difficulty: 'hard',
                    parentId: 'motility-regulation'
                  },
                  {
                    id: 'hormonal-regulation',
                    name: 'Hormonelle Regulation (Gastrin, Sekretin, CCK)',
                    description: 'Verdauungshormone',
                    icon: '🧪',
                    difficulty: 'hard',
                    parentId: 'motility-regulation'
                  },
                  {
                    id: 'local-regulation',
                    name: 'Lokale Regulation (Serotonin, VIP)',
                    description: 'Lokale Mediatoren',
                    icon: '📍',
                    difficulty: 'hard',
                    parentId: 'motility-regulation'
                  }
                ]
              }
            ]
          },
          {
            id: 'metabolic-functions',
            name: 'Stoffwechselfunktionen',
            description: 'Metabolische Leistungen der Verdauungsorgane',
            icon: '⚗️',
            difficulty: 'hard',
            parentId: 'digestive-system',
            children: [
              {
                id: 'intermediate-metabolism',
                name: 'Intermediärstoffwechsel',
                description: 'Zentrale Stoffwechselwege',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'metabolic-functions',
                children: [
                  {
                    id: 'glucose-metabolism-liver',
                    name: 'Glukosestoffwechsel',
                    description: 'Glukosehomöostase der Leber',
                    icon: '🍯',
                    difficulty: 'hard',
                    parentId: 'intermediate-metabolism'
                  },
                  {
                    id: 'amino-acid-metabolism-liver',
                    name: 'Aminosäurestoffwechsel',
                    description: 'Proteinmetabolismus der Leber',
                    icon: '🧬',
                    difficulty: 'hard',
                    parentId: 'intermediate-metabolism'
                  },
                  {
                    id: 'lipid-metabolism-liver',
                    name: 'Lipidstoffwechsel',
                    description: 'Fettstoffwechsel der Leber',
                    icon: '🧈',
                    difficulty: 'hard',
                    parentId: 'intermediate-metabolism'
                  },
                  {
                    id: 'urea-cycle-liver',
                    name: 'Harnstoffzyklus',
                    description: 'Stickstoffmetabolismus',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'intermediate-metabolism'
                  },
                  {
                    id: 'ketone-body-formation',
                    name: 'Ketonkörperbildung',
                    description: 'Alternative Energiegewinnung',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'intermediate-metabolism'
                  }
                ]
              },
              {
                id: 'biotransformation',
                name: 'Biotransformation',
                description: 'Entgiftung und Medikamentenstoffwechsel',
                icon: '🧹',
                difficulty: 'hard',
                parentId: 'metabolic-functions',
                children: [
                  {
                    id: 'phase-i-reactions',
                    name: 'Phase-I-Reaktionen (Oxidation, Reduktion)',
                    description: 'Funktionalisierung von Fremdstoffen',
                    icon: '⚗️',
                    difficulty: 'hard',
                    parentId: 'biotransformation'
                  },
                  {
                    id: 'phase-ii-reactions',
                    name: 'Phase-II-Reaktionen (Konjugation)',
                    description: 'Wasserlöslichmachung von Metaboliten',
                    icon: '🔗',
                    difficulty: 'hard',
                    parentId: 'biotransformation'
                  },
                  {
                    id: 'cytochrome-p450',
                    name: 'Cytochrom P450-System',
                    description: 'Enzymsystem der Biotransformation',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'biotransformation'
                  },
                  {
                    id: 'first-pass-effect',
                    name: 'First-Pass-Effekt',
                    description: 'Präsystemischer Metabolismus',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'biotransformation'
                  }
                ]
              },
              {
                id: 'storage-synthesis',
                name: 'Speicher- & Synthesefunktionen',
                description: 'Speicherung und Synthese von Biomolekülen',
                icon: '🏪',
                difficulty: 'medium',
                parentId: 'metabolic-functions',
                children: [
                  {
                    id: 'glycogen-storage',
                    name: 'Glykogenspeicher',
                    description: 'Glukosespeicherung als Glykogen',
                    icon: '🏪',
                    difficulty: 'medium',
                    parentId: 'storage-synthesis'
                  },
                  {
                    id: 'vitamin-storage',
                    name: 'Vitaminspeicher',
                    description: 'Speicherung fettlöslicher Vitamine',
                    icon: '💊',
                    difficulty: 'medium',
                    parentId: 'storage-synthesis'
                  },
                  {
                    id: 'protein-synthesis-liver',
                    name: 'Proteinsynthese (Albumin, Gerinnungsfaktoren)',
                    description: 'Synthese von Plasmaproteinen',
                    icon: '🏭',
                    difficulty: 'hard',
                    parentId: 'storage-synthesis'
                  },
                  {
                    id: 'cholesterol-synthesis-liver',
                    name: 'Cholesterinsynthese',
                    description: 'Endogene Cholesterinproduktion',
                    icon: '🧪',
                    difficulty: 'hard',
                    parentId: 'storage-synthesis'
                  }
                ]
              }
            ]
          },
          {
            id: 'gut-brain-axis',
            name: 'Darm-Hirn-Achse',
            description: 'Wechselwirkung zwischen Darm und Nervensystem',
            icon: '🧠',
            difficulty: 'hard',
            parentId: 'digestive-system',
            children: [
              {
                id: 'enteric-nervous-system',
                name: 'Enterisches Nervensystem (ENS)',
                description: 'Darmnervensystem und autonome Kontrolle',
                icon: '🧠',
                difficulty: 'hard',
                parentId: 'gut-brain-axis'
              },
              {
                id: 'vagus-connection',
                name: 'Vagusnerv-Verbindung',
                description: 'Neuronale Darm-Hirn-Kommunikation',
                icon: '🔗',
                difficulty: 'medium',
                parentId: 'gut-brain-axis'
              },
              {
                id: 'microbiome-influence',
                name: 'Mikrobiom-Einfluss',
                description: 'Einfluss der Darmflora auf das Nervensystem',
                icon: '🦠',
                difficulty: 'hard',
                parentId: 'gut-brain-axis'
              },
              {
                id: 'gut-neurotransmitters',
                name: 'Neurotransmitter im Darm',
                description: 'Serotonin, GABA und andere Botenstoffe',
                icon: '🧪',
                difficulty: 'hard',
                parentId: 'gut-brain-axis'
              },
              {
                id: 'psychosomatic-aspects',
                name: 'Psychosomatische Aspekte',
                description: 'Stress und Verdauung',
                icon: '💭',
                difficulty: 'medium',
                parentId: 'gut-brain-axis'
              }
            ]
          }
        ]
      },
      {
        id: 'integumentary-system',
        name: 'HAUT & SINNESORGANE',
        description: 'Haut, Anhangsgebilde und Sinneswahrnehmung',
        icon: '👁️',
        difficulty: 'medium',
        parentId: 'anatomy-physiology',
        children: [
          {
            id: 'skin-layers',
            name: 'Hautschichten',
            description: 'Dreischichtiger Aufbau der Haut',
            icon: '🧄',
            difficulty: 'medium',
            parentId: 'integumentary-system',
            children: [
              {
                id: 'epidermis-detailed',
                name: 'Epidermis (Oberhaut)',
                description: 'Schutzbarriere und Keratinisierung',
                icon: '🛡️',
                difficulty: 'medium',
                parentId: 'skin-layers',
                children: [
                  {
                    id: 'stratum-basale',
                    name: 'Stratum basale',
                    description: 'Basalzellschicht mit Stammzellen',
                    icon: '🏗️',
                    difficulty: 'medium',
                    parentId: 'epidermis-detailed'
                  },
                  {
                    id: 'stratum-spinosum',
                    name: 'Stratum spinosum',
                    description: 'Stachelzellschicht',
                    icon: '🦔',
                    difficulty: 'medium',
                    parentId: 'epidermis-detailed'
                  },
                  {
                    id: 'stratum-granulosum',
                    name: 'Stratum granulosum',
                    description: 'Körnerzellschicht mit Keratohyalin',
                    icon: '🌾',
                    difficulty: 'medium',
                    parentId: 'epidermis-detailed'
                  },
                  {
                    id: 'stratum-lucidum',
                    name: 'Stratum lucidum (Leistenhaut)',
                    description: 'Glanzschicht nur an Handflächen/Fußsohlen',
                    icon: '✨',
                    difficulty: 'hard',
                    parentId: 'epidermis-detailed'
                  },
                  {
                    id: 'stratum-corneum',
                    name: 'Stratum corneum',
                    description: 'Hornschicht aus toten Keratinozyten',
                    icon: '🪨',
                    difficulty: 'medium',
                    parentId: 'epidermis-detailed'
                  },
                  {
                    id: 'cell-renewal',
                    name: 'Zellerneuerung (28 Tage)',
                    description: 'Kontinuierliche Hauterneuerung',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'epidermis-detailed'
                  }
                ]
              },
              {
                id: 'dermis-detailed',
                name: 'Dermis (Lederhaut)',
                description: 'Kollagen, Elastin und Hautanhangsgebilde',
                icon: '🕸️',
                difficulty: 'medium',
                parentId: 'skin-layers',
                children: [
                  {
                    id: 'stratum-papillare',
                    name: 'Stratum papillare',
                    description: 'Obere Dermisschicht mit Papillen',
                    icon: '🌊',
                    difficulty: 'medium',
                    parentId: 'dermis-detailed'
                  },
                  {
                    id: 'stratum-reticulare',
                    name: 'Stratum reticulare',
                    description: 'Tiefe Dermisschicht mit dichtem Bindegewebe',
                    icon: '🕸️',
                    difficulty: 'medium',
                    parentId: 'dermis-detailed'
                  },
                  {
                    id: 'collagen-fibers',
                    name: 'Kollagenfasern',
                    description: 'Zugfestigkeit und Struktur',
                    icon: '🧵',
                    difficulty: 'medium',
                    parentId: 'dermis-detailed'
                  },
                  {
                    id: 'elastic-fibers',
                    name: 'Elastische Fasern',
                    description: 'Elastizität und Rückstellkraft',
                    icon: '🤸',
                    difficulty: 'medium',
                    parentId: 'dermis-detailed'
                  },
                  {
                    id: 'blood-vessels-dermis',
                    name: 'Blutgefäße',
                    description: 'Versorgung und Thermoregulation',
                    icon: '🩸',
                    difficulty: 'medium',
                    parentId: 'dermis-detailed'
                  },
                  {
                    id: 'nerve-endings',
                    name: 'Nervenendigungen',
                    description: 'Sensible Innervation der Haut',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'dermis-detailed'
                  }
                ]
              },
              {
                id: 'subcutis-detailed',
                name: 'Subcutis (Unterhaut)',
                description: 'Fettgewebe und Isolation',
                icon: '🧈',
                difficulty: 'easy',
                parentId: 'skin-layers',
                children: [
                  {
                    id: 'adipose-tissue',
                    name: 'Fettgewebe',
                    description: 'Energiespeicher und Isolation',
                    icon: '🟡',
                    difficulty: 'easy',
                    parentId: 'subcutis-detailed'
                  },
                  {
                    id: 'connective-septa',
                    name: 'Bindegewebssepten',
                    description: 'Strukturelle Unterteilung',
                    icon: '🕸️',
                    difficulty: 'medium',
                    parentId: 'subcutis-detailed'
                  },
                  {
                    id: 'larger-vessels',
                    name: 'Größere Gefäße',
                    description: 'Hauptversorgungswege',
                    icon: '🚗',
                    difficulty: 'easy',
                    parentId: 'subcutis-detailed'
                  },
                  {
                    id: 'pressure-cushion',
                    name: 'Druckpolster',
                    description: 'Mechanischer Schutz',
                    icon: '🛡️',
                    difficulty: 'easy',
                    parentId: 'subcutis-detailed'
                  }
                ]
              }
            ]
          },
          {
            id: 'skin-appendages-detailed',
            name: 'Hautanhangsgebilde',
            description: 'Haare, Nägel, Drüsen und Hautflora',
            icon: '💅',
            difficulty: 'medium',
            parentId: 'integumentary-system',
            children: [
              {
                id: 'hair-detailed',
                name: 'Haare',
                description: 'Aufbau und Wachstumszyklus',
                icon: '🦱',
                difficulty: 'medium',
                parentId: 'skin-appendages-detailed',
                children: [
                  {
                    id: 'hair-shaft',
                    name: 'Haarschaft',
                    description: 'Sichtbarer Teil des Haares',
                    icon: '📏',
                    difficulty: 'easy',
                    parentId: 'hair-detailed'
                  },
                  {
                    id: 'hair-root',
                    name: 'Haarwurzel',
                    description: 'In der Haut verborgener Teil',
                    icon: '🌱',
                    difficulty: 'easy',
                    parentId: 'hair-detailed'
                  },
                  {
                    id: 'hair-follicle',
                    name: 'Haarfollikel',
                    description: 'Haarbildende Struktur',
                    icon: '🫘',
                    difficulty: 'medium',
                    parentId: 'hair-detailed'
                  },
                  {
                    id: 'hair-papilla',
                    name: 'Haarpapille',
                    description: 'Versorgung der Haarwurzel',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'hair-detailed'
                  },
                  {
                    id: 'hair-cycle',
                    name: 'Haarzyklus',
                    description: 'Phasenhafter Haarwuchs',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'hair-detailed',
                    children: [
                      {
                        id: 'anagen-phase',
                        name: 'Anagenphase (Wachstum)',
                        description: 'Aktive Wachstumsphase',
                        icon: '📈',
                        difficulty: 'medium',
                        parentId: 'hair-cycle'
                      },
                      {
                        id: 'catagen-phase',
                        name: 'Katagenphase (Übergang)',
                        description: 'Übergangsphase',
                        icon: '⏯️',
                        difficulty: 'medium',
                        parentId: 'hair-cycle'
                      },
                      {
                        id: 'telogen-phase',
                        name: 'Telogenphase (Ruhe)',
                        description: 'Ruhephase vor Haarausfall',
                        icon: '💤',
                        difficulty: 'medium',
                        parentId: 'hair-cycle'
                      }
                    ]
                  },
                  {
                    id: 'arrector-pili',
                    name: 'Haarmuskel (M. arrector pili)',
                    description: 'Aufrichtung der Haare (Gänsehaut)',
                    icon: '💪',
                    difficulty: 'medium',
                    parentId: 'hair-detailed'
                  }
                ]
              },
              {
                id: 'nails-detailed',
                name: 'Nägel',
                description: 'Aufbau und Wachstum der Nägel',
                icon: '💅',
                difficulty: 'easy',
                parentId: 'skin-appendages-detailed',
                children: [
                  {
                    id: 'nail-plate',
                    name: 'Nagelplatte',
                    description: 'Sichtbarer Nagel aus Keratin',
                    icon: '🪟',
                    difficulty: 'easy',
                    parentId: 'nails-detailed'
                  },
                  {
                    id: 'nail-bed',
                    name: 'Nagelbett',
                    description: 'Unterlage der Nagelplatte',
                    icon: '🛏️',
                    difficulty: 'easy',
                    parentId: 'nails-detailed'
                  },
                  {
                    id: 'nail-matrix',
                    name: 'Nagelmatrix',
                    description: 'Nagelwachstumszone',
                    icon: '🏭',
                    difficulty: 'medium',
                    parentId: 'nails-detailed'
                  },
                  {
                    id: 'nail-fold',
                    name: 'Nagelwall',
                    description: 'Seitliche Begrenzung',
                    icon: '🏔️',
                    difficulty: 'easy',
                    parentId: 'nails-detailed'
                  },
                  {
                    id: 'eponychium',
                    name: 'Eponychium',
                    description: 'Nagelhäutchen',
                    icon: '🌙',
                    difficulty: 'easy',
                    parentId: 'nails-detailed'
                  },
                  {
                    id: 'lunula',
                    name: 'Lunula',
                    description: 'Nagelmond (sichtbare Matrix)',
                    icon: '🌙',
                    difficulty: 'easy',
                    parentId: 'nails-detailed'
                  }
                ]
              },
              {
                id: 'glands-detailed',
                name: 'Drüsen',
                description: 'Schweiß- und Talgdrüsen',
                icon: '💧',
                difficulty: 'medium',
                parentId: 'skin-appendages-detailed',
                children: [
                  {
                    id: 'sweat-glands-detailed',
                    name: 'Schweißdrüsen',
                    description: 'Thermoregulation und Sekretion',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'glands-detailed',
                    children: [
                      {
                        id: 'eccrine-glands',
                        name: 'Ekkrine Drüsen',
                        description: 'Thermoregulatorische Schweißdrüsen',
                        icon: '🌡️',
                        difficulty: 'medium',
                        parentId: 'sweat-glands-detailed'
                      },
                      {
                        id: 'apocrine-glands',
                        name: 'Apokrine Drüsen',
                        description: 'Duftdrüsen in Achseln/Genitalbereich',
                        icon: '👃',
                        difficulty: 'medium',
                        parentId: 'sweat-glands-detailed'
                      },
                      {
                        id: 'sweat-composition',
                        name: 'Schweißzusammensetzung',
                        description: 'Wasser, Salze, Harnstoff',
                        icon: '🧪',
                        difficulty: 'medium',
                        parentId: 'sweat-glands-detailed'
                      }
                    ]
                  },
                  {
                    id: 'sebaceous-glands-detailed',
                    name: 'Talgdrüsen',
                    description: 'Sebumproduktion und Hautschutz',
                    icon: '🛢️',
                    difficulty: 'medium',
                    parentId: 'glands-detailed',
                    children: [
                      {
                        id: 'holocrine-secretion',
                        name: 'Holokrine Sekretion',
                        description: 'Vollständige Zellzerstörung bei Sekretion',
                        icon: '💥',
                        difficulty: 'hard',
                        parentId: 'sebaceous-glands-detailed'
                      },
                      {
                        id: 'sebum',
                        name: 'Talg (Sebum)',
                        description: 'Lipidreiche Schutzschicht',
                        icon: '🛢️',
                        difficulty: 'medium',
                        parentId: 'sebaceous-glands-detailed'
                      },
                      {
                        id: 'hormone-dependency',
                        name: 'Hormonabhängigkeit',
                        description: 'Regulation durch Androgene',
                        icon: '⚖️',
                        difficulty: 'medium',
                        parentId: 'sebaceous-glands-detailed'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'skin-flora',
                name: 'Hautflora',
                description: 'Mikrobielle Besiedlung der Haut',
                icon: '🦠',
                difficulty: 'medium',
                parentId: 'skin-appendages-detailed',
                children: [
                  {
                    id: 'resident-flora',
                    name: 'Residente Flora',
                    description: 'Dauerhaft ansässige Mikroorganismen',
                    icon: '🏠',
                    difficulty: 'medium',
                    parentId: 'skin-flora'
                  },
                  {
                    id: 'transient-flora',
                    name: 'Transiente Flora',
                    description: 'Vorübergehend ansässige Keime',
                    icon: '🚶',
                    difficulty: 'medium',
                    parentId: 'skin-flora'
                  },
                  {
                    id: 'acid-mantle',
                    name: 'Säureschutzmantel (pH 5,5)',
                    description: 'Natürlicher Schutz vor pathogenen Keimen',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'skin-flora'
                  }
                ]
              }
            ]
          },
          {
            id: 'skin-functions-detailed',
            name: 'Hautfunktionen',
            description: 'Schutz, Thermoregulation und Sensorik',
            icon: '🌡️',
            difficulty: 'medium',
            parentId: 'integumentary-system',
            children: [
              {
                id: 'protection-function',
                name: 'Schutzfunktion',
                description: 'Vielfältiger Schutz vor Umwelteinflüssen',
                icon: '🛡️',
                difficulty: 'medium',
                parentId: 'skin-functions-detailed',
                children: [
                  {
                    id: 'mechanical-protection',
                    name: 'Mechanischer Schutz',
                    description: 'Schutz vor Verletzungen und Druck',
                    icon: '⚙️',
                    difficulty: 'easy',
                    parentId: 'protection-function'
                  },
                  {
                    id: 'chemical-protection',
                    name: 'Chemischer Schutz',
                    description: 'Barriere gegen Chemikalien',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'protection-function'
                  },
                  {
                    id: 'microbial-protection',
                    name: 'Mikrobieller Schutz',
                    description: 'Abwehr von Mikroorganismen',
                    icon: '🦠',
                    difficulty: 'medium',
                    parentId: 'protection-function'
                  },
                  {
                    id: 'uv-protection',
                    name: 'UV-Schutz (Melanin)',
                    description: 'Schutz vor UV-Strahlung',
                    icon: '☀️',
                    difficulty: 'medium',
                    parentId: 'protection-function'
                  },
                  {
                    id: 'permeability-barrier',
                    name: 'Permeabilitätsbarriere',
                    description: 'Kontrolle des Stoffaustauschs',
                    icon: '🚧',
                    difficulty: 'hard',
                    parentId: 'protection-function'
                  }
                ]
              },
              {
                id: 'temperature-regulation',
                name: 'Temperaturregulation',
                description: 'Wärmehaushalt und Schweißproduktion',
                icon: '🌡️',
                difficulty: 'medium',
                parentId: 'skin-functions-detailed',
                children: [
                  {
                    id: 'sweat-production',
                    name: 'Schweißproduktion',
                    description: 'Verdunstungskühlung',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'temperature-regulation'
                  },
                  {
                    id: 'vasodilation-constriction',
                    name: 'Vasodilatation/-konstriktion',
                    description: 'Regulation der Hautdurchblutung',
                    icon: '🩸',
                    difficulty: 'hard',
                    parentId: 'temperature-regulation'
                  },
                  {
                    id: 'insulation',
                    name: 'Isolation (Fettgewebe)',
                    description: 'Wärmeisolation durch Subcutis',
                    icon: '🧥',
                    difficulty: 'easy',
                    parentId: 'temperature-regulation'
                  },
                  {
                    id: 'countercurrent-mechanism',
                    name: 'Gegenstrommechanismus',
                    description: 'Wärmeaustausch in Extremitäten',
                    icon: '↔️',
                    difficulty: 'hard',
                    parentId: 'temperature-regulation'
                  }
                ]
              },
              {
                id: 'sensory-function-detailed',
                name: 'Sinnesfunktion',
                description: 'Diverse Rezeptoren für Umweltreize',
                icon: '👋',
                difficulty: 'medium',
                parentId: 'skin-functions-detailed',
                children: [
                  {
                    id: 'touch-receptors',
                    name: 'Tastrezeptoren',
                    description: 'Mechanoreceptoren für Berührung',
                    icon: '🤏',
                    difficulty: 'medium',
                    parentId: 'sensory-function-detailed'
                  },
                  {
                    id: 'pressure-receptors',
                    name: 'Druckrezeptoren',
                    description: 'Wahrnehmung von Druckveränderungen',
                    icon: '👊',
                    difficulty: 'medium',
                    parentId: 'sensory-function-detailed'
                  },
                  {
                    id: 'temperature-receptors-skin',
                    name: 'Temperaturrezeptoren',
                    description: 'Kälte- und Wärmewahrnehmung',
                    icon: '🌡️',
                    difficulty: 'medium',
                    parentId: 'sensory-function-detailed'
                  },
                  {
                    id: 'pain-receptors-skin',
                    name: 'Schmerzrezeptoren',
                    description: 'Nozizeptoren für Gewebsschäden',
                    icon: '😣',
                    difficulty: 'medium',
                    parentId: 'sensory-function-detailed'
                  },
                  {
                    id: 'vibration-receptors',
                    name: 'Vibrationsrezeptoren',
                    description: 'Wahrnehmung von Schwingungen',
                    icon: '📳',
                    difficulty: 'hard',
                    parentId: 'sensory-function-detailed'
                  }
                ]
              },
              {
                id: 'metabolic-function',
                name: 'Stoffwechselfunktion',
                description: 'Metabolische Aufgaben der Haut',
                icon: '⚗️',
                difficulty: 'medium',
                parentId: 'skin-functions-detailed',
                children: [
                  {
                    id: 'vitamin-d-synthesis-detailed',
                    name: 'Vitamin-D-Synthese',
                    description: 'UV-induzierte Vitamin-D-Bildung',
                    icon: '☀️',
                    difficulty: 'medium',
                    parentId: 'metabolic-function'
                  },
                  {
                    id: 'excretion',
                    name: 'Ausscheidung',
                    description: 'Elimination von Stoffwechselprodukten',
                    icon: '🚮',
                    difficulty: 'medium',
                    parentId: 'metabolic-function'
                  },
                  {
                    id: 'resorption',
                    name: 'Resorption',
                    description: 'Aufnahme von Substanzen',
                    icon: '⬇️',
                    difficulty: 'medium',
                    parentId: 'metabolic-function'
                  },
                  {
                    id: 'energy-storage',
                    name: 'Energiespeicher',
                    description: 'Fettspeicherung in der Subcutis',
                    icon: '🔋',
                    difficulty: 'easy',
                    parentId: 'metabolic-function'
                  }
                ]
              },
              {
                id: 'immune-function',
                name: 'Immunfunktion',
                description: 'Immunologische Abwehr der Haut',
                icon: '🛡️',
                difficulty: 'hard',
                parentId: 'skin-functions-detailed',
                children: [
                  {
                    id: 'langerhans-cells',
                    name: 'Langerhans-Zellen',
                    description: 'Antigenpräsentierende Zellen',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'immune-function'
                  },
                  {
                    id: 'mast-cells',
                    name: 'Mastzellen',
                    description: 'Entzündungsreaktion und Allergien',
                    icon: '💥',
                    difficulty: 'medium',
                    parentId: 'immune-function'
                  },
                  {
                    id: 'macrophages-skin',
                    name: 'Makrophagen',
                    description: 'Phagozytose und Immunabwehr',
                    icon: '🦠',
                    difficulty: 'medium',
                    parentId: 'immune-function'
                  },
                  {
                    id: 'antimicrobial-peptides',
                    name: 'Antimikrobielle Peptide',
                    description: 'Natürliche Antibiotika der Haut',
                    icon: '⚔️',
                    difficulty: 'hard',
                    parentId: 'immune-function'
                  }
                ]
              }
            ]
          },
          {
            id: 'skin-types-condition',
            name: 'Hauttypen & Hautzustand',
            description: 'Klassifikation und Eigenschaften verschiedener Hauttypen',
            icon: '🌈',
            difficulty: 'medium',
            parentId: 'integumentary-system',
            children: [
              {
                id: 'fitzpatrick-types',
                name: 'Hauttypen nach Fitzpatrick (I-VI)',
                description: 'UV-Empfindlichkeit und Pigmentierung',
                icon: '☀️',
                difficulty: 'medium',
                parentId: 'skin-types-condition'
              },
              {
                id: 'normal-skin',
                name: 'Normale Haut',
                description: 'Ausgewogene Talg- und Feuchtigkeitsproduktion',
                icon: '😊',
                difficulty: 'easy',
                parentId: 'skin-types-condition'
              },
              {
                id: 'dry-skin',
                name: 'Trockene Haut (Sebostase)',
                description: 'Verminderte Talg- und Schweißproduktion',
                icon: '🏜️',
                difficulty: 'medium',
                parentId: 'skin-types-condition'
              },
              {
                id: 'oily-skin',
                name: 'Fettige Haut (Seborrhoe)',
                description: 'Erhöhte Talgproduktion',
                icon: '🛢️',
                difficulty: 'medium',
                parentId: 'skin-types-condition'
              },
              {
                id: 'combination-skin',
                name: 'Mischhaut',
                description: 'Unterschiedliche Hauttypen in verschiedenen Bereichen',
                icon: '🎭',
                difficulty: 'medium',
                parentId: 'skin-types-condition'
              },
              {
                id: 'sensitive-skin',
                name: 'Empfindliche Haut',
                description: 'Erhöhte Reaktivität auf äußere Reize',
                icon: '🥺',
                difficulty: 'medium',
                parentId: 'skin-types-condition'
              }
            ]
          },
          {
            id: 'sensory-organs-integumentary',
            name: 'Sinnesorgane',
            description: 'Sehen, Hören, Riechen, Schmecken, Tasten',
            icon: '👁️',
            difficulty: 'medium',
            parentId: 'integumentary-system',
            children: [
              {
                id: 'eye-vision-integumentary',
                name: 'Auge & Sehen',
                description: 'Visuelles System und Sehbahn',
                icon: '👁️',
                difficulty: 'medium',
                parentId: 'sensory-organs-integumentary',
                children: [
                  {
                    id: 'eyeball-bulbus-oculi',
                    name: 'Augapfel (Bulbus oculi)',
                    description: 'Anatomischer Aufbau des Augapfels',
                    icon: '👁️',
                    difficulty: 'medium',
                    parentId: 'eye-vision-integumentary',
                    children: [
                      {
                        id: 'outer-eye-layer',
                        name: 'Äußere Augenhaut',
                        description: 'Äußere Schicht des Augapfels',
                        icon: '🛡️',
                        difficulty: 'medium',
                        parentId: 'eyeball-bulbus-oculi',
                        children: [
                          {
                            id: 'sclera',
                            name: 'Sklera (Lederhaut)',
                            description: 'Weiße, derbe Außenhaut des Auges',
                            icon: '⚪',
                            difficulty: 'easy',
                            parentId: 'outer-eye-layer'
                          },
                          {
                            id: 'cornea',
                            name: 'Kornea (Hornhaut)',
                            description: 'Durchsichtige, vordere Augenhaut',
                            icon: '🔍',
                            difficulty: 'medium',
                            parentId: 'outer-eye-layer'
                          },
                          {
                            id: 'limbus',
                            name: 'Limbus',
                            description: 'Übergang zwischen Kornea und Sklera',
                            icon: '🔗',
                            difficulty: 'medium',
                            parentId: 'outer-eye-layer'
                          }
                        ]
                      },
                      {
                        id: 'middle-eye-layer-uvea',
                        name: 'Mittlere Augenhaut (Uvea)',
                        description: 'Gefäßreiche mittlere Schicht',
                        icon: '🌈',
                        difficulty: 'medium',
                        parentId: 'eyeball-bulbus-oculi',
                        children: [
                          {
                            id: 'iris',
                            name: 'Iris (Regenbogenhaut)',
                            description: 'Farbige Blende mit Pupille',
                            icon: '🌈',
                            difficulty: 'easy',
                            parentId: 'middle-eye-layer-uvea'
                          },
                          {
                            id: 'ciliary-body',
                            name: 'Ziliarkörper',
                            description: 'Muskel für Akkommodation',
                            icon: '🔧',
                            difficulty: 'hard',
                            parentId: 'middle-eye-layer-uvea'
                          },
                          {
                            id: 'choroid',
                            name: 'Choroidea (Aderhaut)',
                            description: 'Gefäßschicht für Netzhautversorgung',
                            icon: '🩸',
                            difficulty: 'medium',
                            parentId: 'middle-eye-layer-uvea'
                          },
                          {
                            id: 'pupil',
                            name: 'Pupille',
                            description: 'Öffnung in der Iris',
                            icon: '⚫',
                            difficulty: 'easy',
                            parentId: 'middle-eye-layer-uvea'
                          }
                        ]
                      },
                      {
                        id: 'inner-eye-layer',
                        name: 'Innere Augenhaut',
                        description: 'Netzhaut und Photorezeptoren',
                        icon: '📸',
                        difficulty: 'hard',
                        parentId: 'eyeball-bulbus-oculi',
                        children: [
                          {
                            id: 'retina',
                            name: 'Retina (Netzhaut)',
                            description: 'Lichtempfindliche Nervenschicht',
                            icon: '📸',
                            difficulty: 'hard',
                            parentId: 'inner-eye-layer'
                          },
                          {
                            id: 'macula',
                            name: 'Makula (gelber Fleck)',
                            description: 'Bereich des schärfsten Sehens',
                            icon: '🎯',
                            difficulty: 'medium',
                            parentId: 'inner-eye-layer'
                          },
                          {
                            id: 'optic-disc',
                            name: 'Papille (blinder Fleck)',
                            description: 'Austritt des Sehnervs',
                            icon: '⚪',
                            difficulty: 'medium',
                            parentId: 'inner-eye-layer'
                          },
                          {
                            id: 'photoreceptors',
                            name: 'Photorezeptoren (Stäbchen, Zapfen)',
                            description: 'Lichtempfindliche Sinneszellen',
                            icon: '🔬',
                            difficulty: 'hard',
                            parentId: 'inner-eye-layer'
                          }
                        ]
                      },
                      {
                        id: 'eye-content',
                        name: 'Augeninhalt',
                        description: 'Optische Medien des Auges',
                        icon: '💧',
                        difficulty: 'medium',
                        parentId: 'eyeball-bulbus-oculi',
                        children: [
                          {
                            id: 'lens',
                            name: 'Linse',
                            description: 'Bikonvexe, elastische Linse',
                            icon: '🔍',
                            difficulty: 'medium',
                            parentId: 'eye-content'
                          },
                          {
                            id: 'vitreous-body',
                            name: 'Glaskörper',
                            description: 'Gallertartige Füllmasse',
                            icon: '🫧',
                            difficulty: 'easy',
                            parentId: 'eye-content'
                          },
                          {
                            id: 'aqueous-humor',
                            name: 'Kammerwasser',
                            description: 'Klare Flüssigkeit in den Augenkammern',
                            icon: '💧',
                            difficulty: 'medium',
                            parentId: 'eye-content'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'eye-accessory-organs',
                    name: 'Hilfsorgane des Auges',
                    description: 'Schutz- und Bewegungsorgane',
                    icon: '👁️‍🗨️',
                    difficulty: 'medium',
                    parentId: 'eye-vision-integumentary',
                    children: [
                      {
                        id: 'eyelids-lashes',
                        name: 'Augenlider & Wimpern',
                        description: 'Schutz vor Fremdkörpern und Licht',
                        icon: '👁️',
                        difficulty: 'easy',
                        parentId: 'eye-accessory-organs'
                      },
                      {
                        id: 'lacrimal-apparatus',
                        name: 'Tränenapparat',
                        description: 'Tränendrüse und Tränenwege',
                        icon: '💧',
                        difficulty: 'medium',
                        parentId: 'eye-accessory-organs'
                      },
                      {
                        id: 'conjunctiva',
                        name: 'Bindehaut (Konjunktiva)',
                        description: 'Schleimhaut von Lid und Augapfel',
                        icon: '🔴',
                        difficulty: 'medium',
                        parentId: 'eye-accessory-organs'
                      },
                      {
                        id: 'extraocular-muscles',
                        name: 'Augenmuskeln (6 äußere)',
                        description: 'Muskeln für Augenbewegungen',
                        icon: '💪',
                        difficulty: 'hard',
                        parentId: 'eye-accessory-organs'
                      },
                      {
                        id: 'orbit',
                        name: 'Augenhöhle (Orbita)',
                        description: 'Knöcherne Augenhöhle',
                        icon: '🏠',
                        difficulty: 'medium',
                        parentId: 'eye-accessory-organs'
                      }
                    ]
                  },
                  {
                    id: 'visual-process',
                    name: 'Sehvorgang',
                    description: 'Physiologie des Sehens',
                    icon: '👀',
                    difficulty: 'hard',
                    parentId: 'eye-vision-integumentary',
                    children: [
                      {
                        id: 'light-refraction',
                        name: 'Lichtbrechung (Dioptrien)',
                        description: 'Brechung des Lichts im Auge',
                        icon: '🔍',
                        difficulty: 'hard',
                        parentId: 'visual-process'
                      },
                      {
                        id: 'accommodation',
                        name: 'Akkommodation (Nah-/Fernsicht)',
                        description: 'Anpassung der Linsenform',
                        icon: '🔧',
                        difficulty: 'hard',
                        parentId: 'visual-process'
                      },
                      {
                        id: 'adaptation',
                        name: 'Adaptation (Hell/Dunkel)',
                        description: 'Anpassung an Lichtverhältnisse',
                        icon: '🌗',
                        difficulty: 'medium',
                        parentId: 'visual-process'
                      },
                      {
                        id: 'color-vision',
                        name: 'Farbsehen (Rot-, Grün-, Blau-Zapfen)',
                        description: 'Trichromatisches Farbsehen',
                        icon: '🌈',
                        difficulty: 'hard',
                        parentId: 'visual-process'
                      },
                      {
                        id: 'visual-field',
                        name: 'Gesichtsfeld',
                        description: 'Bereich der visuellen Wahrnehmung',
                        icon: '🎯',
                        difficulty: 'medium',
                        parentId: 'visual-process'
                      }
                    ]
                  },
                  {
                    id: 'visual-pathway',
                    name: 'Sehbahn',
                    description: 'Neuronale Weiterleitung der Sehinformation',
                    icon: '🛤️',
                    difficulty: 'hard',
                    parentId: 'eye-vision-integumentary',
                    children: [
                      {
                        id: 'optic-nerve',
                        name: 'N. opticus (II)',
                        description: 'Sehnerv - 2. Hirnnerv',
                        icon: '🧠',
                        difficulty: 'medium',
                        parentId: 'visual-pathway'
                      },
                      {
                        id: 'optic-chiasm',
                        name: 'Chiasma opticum',
                        description: 'Kreuzung der Sehnerven',
                        icon: '✖️',
                        difficulty: 'hard',
                        parentId: 'visual-pathway'
                      },
                      {
                        id: 'lateral-geniculate-body',
                        name: 'Corpus geniculatum laterale',
                        description: 'Umschaltstation im Thalamus',
                        icon: '🔀',
                        difficulty: 'hard',
                        parentId: 'visual-pathway'
                      },
                      {
                        id: 'visual-cortex',
                        name: 'Sehrinde (Area 17)',
                        description: 'Primärer visueller Kortex',
                        icon: '🧠',
                        difficulty: 'hard',
                        parentId: 'visual-pathway'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'ear-hearing-integumentary',
                name: 'Ohr & Hören/Gleichgewicht',
                description: 'Auditives und vestibuläres System',
                icon: '👂',
                difficulty: 'medium',
                parentId: 'sensory-organs-integumentary',
                children: [
                  {
                    id: 'outer-ear-detailed',
                    name: 'Äußeres Ohr',
                    description: 'Schallaufnahme und -weiterleitung',
                    icon: '👂',
                    difficulty: 'easy',
                    parentId: 'ear-hearing-integumentary',
                    children: [
                      {
                        id: 'auricle',
                        name: 'Ohrmuschel (Schalltrichter)',
                        description: 'Schallsammlung und -fokussierung',
                        icon: '📯',
                        difficulty: 'easy',
                        parentId: 'outer-ear-detailed'
                      },
                      {
                        id: 'external-auditory-canal',
                        name: 'Äußerer Gehörgang',
                        description: 'Schallleitung zum Trommelfell',
                        icon: '🕳️',
                        difficulty: 'easy',
                        parentId: 'outer-ear-detailed'
                      },
                      {
                        id: 'cerumen',
                        name: 'Cerumen (Ohrenschmalz)',
                        description: 'Schutz vor Fremdkörpern und Austrocknung',
                        icon: '🟡',
                        difficulty: 'easy',
                        parentId: 'outer-ear-detailed'
                      },
                      {
                        id: 'tympanic-membrane',
                        name: 'Trommelfell',
                        description: 'Membran zwischen Außen- und Mittelohr',
                        icon: '🥁',
                        difficulty: 'medium',
                        parentId: 'outer-ear-detailed'
                      }
                    ]
                  },
                  {
                    id: 'middle-ear-detailed',
                    name: 'Mittelohr',
                    description: 'Schallverstärkung und -übertragung',
                    icon: '🥁',
                    difficulty: 'medium',
                    parentId: 'ear-hearing-integumentary',
                    children: [
                      {
                        id: 'ossicles',
                        name: 'Gehörknöchelchen',
                        description: 'Kleinste Knochen des Körpers',
                        icon: '🦴',
                        difficulty: 'medium',
                        parentId: 'middle-ear-detailed',
                        children: [
                          {
                            id: 'malleus',
                            name: 'Hammer (Malleus)',
                            description: 'Erstes Gehörknöchelchen, am Trommelfell',
                            icon: '🔨',
                            difficulty: 'medium',
                            parentId: 'ossicles'
                          },
                          {
                            id: 'incus',
                            name: 'Amboss (Incus)',
                            description: 'Mittleres Gehörknöchelchen',
                            icon: '⚒️',
                            difficulty: 'medium',
                            parentId: 'ossicles'
                          },
                          {
                            id: 'stapes',
                            name: 'Steigbügel (Stapes)',
                            description: 'Kleinstes Gehörknöchelchen, am ovalen Fenster',
                            icon: '🏇',
                            difficulty: 'medium',
                            parentId: 'ossicles'
                          }
                        ]
                      },
                      {
                        id: 'tympanic-cavity',
                        name: 'Paukenhöhle',
                        description: 'Luftgefüllter Raum im Mittelohr',
                        icon: '🫧',
                        difficulty: 'medium',
                        parentId: 'middle-ear-detailed'
                      },
                      {
                        id: 'eustachian-tube',
                        name: 'Eustachische Röhre',
                        description: 'Druckausgleich zwischen Mittelohr und Rachen',
                        icon: '📏',
                        difficulty: 'medium',
                        parentId: 'middle-ear-detailed'
                      },
                      {
                        id: 'oval-round-window',
                        name: 'Ovales/rundes Fenster',
                        description: 'Verbindung zwischen Mittel- und Innenohr',
                        icon: '🪟',
                        difficulty: 'hard',
                        parentId: 'middle-ear-detailed'
                      }
                    ]
                  },
                  {
                    id: 'inner-ear-detailed',
                    name: 'Innenohr',
                    description: 'Schallumwandlung und Gleichgewicht',
                    icon: '🐚',
                    difficulty: 'hard',
                    parentId: 'ear-hearing-integumentary',
                    children: [
                      {
                        id: 'bony-labyrinth',
                        name: 'Knöchernes Labyrinth',
                        description: 'Knöcherne Hohlräume im Felsenbein',
                        icon: '🦴',
                        difficulty: 'hard',
                        parentId: 'inner-ear-detailed'
                      },
                      {
                        id: 'membranous-labyrinth',
                        name: 'Häutiges Labyrinth',
                        description: 'Häutige Strukturen mit Endolymphe',
                        icon: '🫧',
                        difficulty: 'hard',
                        parentId: 'inner-ear-detailed'
                      },
                      {
                        id: 'cochlea-detailed',
                        name: 'Hörschnecke (Cochlea)',
                        description: 'Spiralförmiges Hörorgan',
                        icon: '🐚',
                        difficulty: 'hard',
                        parentId: 'inner-ear-detailed',
                        children: [
                          {
                            id: 'organ-of-corti',
                            name: 'Corti-Organ',
                            description: 'Eigentliches Hörorgan mit Haarzellen',
                            icon: '🔬',
                            difficulty: 'hard',
                            parentId: 'cochlea-detailed'
                          },
                          {
                            id: 'basilar-membrane',
                            name: 'Basilarmembran',
                            description: 'Frequenzspezifische Schwingungsmembran',
                            icon: '🎼',
                            difficulty: 'hard',
                            parentId: 'cochlea-detailed'
                          },
                          {
                            id: 'hair-cells-hearing',
                            name: 'Haarzellen',
                            description: 'Mechanosensorische Rezeptorzellen',
                            icon: '🦠',
                            difficulty: 'hard',
                            parentId: 'cochlea-detailed'
                          }
                        ]
                      },
                      {
                        id: 'vestibular-organ',
                        name: 'Gleichgewichtsorgan',
                        description: 'Wahrnehmung von Lage und Bewegung',
                        icon: '⚖️',
                        difficulty: 'hard',
                        parentId: 'inner-ear-detailed',
                        children: [
                          {
                            id: 'semicircular-canals',
                            name: 'Bogengänge (3)',
                            description: 'Drehbewegungen in drei Raumebenen',
                            icon: '🔄',
                            difficulty: 'hard',
                            parentId: 'vestibular-organ'
                          },
                          {
                            id: 'macular-organs',
                            name: 'Makulaorgane',
                            description: 'Utriculus und Sacculus für Linearbeschleunigung',
                            icon: '📍',
                            difficulty: 'hard',
                            parentId: 'vestibular-organ'
                          },
                          {
                            id: 'otoliths',
                            name: 'Otolithen',
                            description: 'Kleine Kristalle für Schwerkraftwahrnehmung',
                            icon: '💎',
                            difficulty: 'hard',
                            parentId: 'vestibular-organ'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'hearing-process',
                    name: 'Hörvorgang',
                    description: 'Von der Schallwelle zur Wahrnehmung',
                    icon: '🔊',
                    difficulty: 'hard',
                    parentId: 'ear-hearing-integumentary',
                    children: [
                      {
                        id: 'sound-conduction',
                        name: 'Schallleitung',
                        description: 'Mechanische Übertragung der Schallwellen',
                        icon: '📡',
                        difficulty: 'medium',
                        parentId: 'hearing-process'
                      },
                      {
                        id: 'sound-transduction',
                        name: 'Schallumwandlung',
                        description: 'Umwandlung in elektrische Signale',
                        icon: '⚡',
                        difficulty: 'hard',
                        parentId: 'hearing-process'
                      },
                      {
                        id: 'frequency-analysis',
                        name: 'Frequenzanalyse',
                        description: 'Tonotopische Organisation der Cochlea',
                        icon: '🎵',
                        difficulty: 'hard',
                        parentId: 'hearing-process'
                      },
                      {
                        id: 'auditory-pathway',
                        name: 'Hörbahn zum Gehirn',
                        description: 'Neuronale Weiterleitung zum Hörzentrum',
                        icon: '🧠',
                        difficulty: 'hard',
                        parentId: 'hearing-process'
                      }
                    ]
                  },
                  {
                    id: 'balance-sense',
                    name: 'Gleichgewichtssinn',
                    description: 'Vestibuläres System für Raumorientierung',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'ear-hearing-integumentary',
                    children: [
                      {
                        id: 'rotational-movements',
                        name: 'Drehbewegungen (Bogengänge)',
                        description: 'Erfassung von Rotationsbeschleunigungen',
                        icon: '🌪️',
                        difficulty: 'hard',
                        parentId: 'balance-sense'
                      },
                      {
                        id: 'linear-acceleration',
                        name: 'Linearbeschleunigung (Makulaorgane)',
                        description: 'Erfassung gerader Bewegungen und Schwerkraft',
                        icon: '📏',
                        difficulty: 'hard',
                        parentId: 'balance-sense'
                      },
                      {
                        id: 'vestibular-pathway',
                        name: 'Vestibularisbahn',
                        description: 'Neuronale Verschaltung für Gleichgewicht',
                        icon: '🧠',
                        difficulty: 'hard',
                        parentId: 'balance-sense'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'chemical-senses',
                name: 'Chemische Sinne',
                description: 'Riechen und Schmecken',
                icon: '👃',
                difficulty: 'medium',
                parentId: 'sensory-organs-integumentary',
                children: [
                  {
                    id: 'olfactory-system',
                    name: 'Geruchssinn',
                    description: 'Olfaktorisches System und Riechbahn',
                    icon: '👃',
                    difficulty: 'medium',
                    parentId: 'chemical-senses'
                  },
                  {
                    id: 'gustatory-system',
                    name: 'Geschmackssinn',
                    description: 'Geschmacksknospen und 5 Grundgeschmäcker',
                    icon: '👅',
                    difficulty: 'medium',
                    parentId: 'chemical-senses'
                  },
                  {
                    id: 'trigeminal-chemoreception',
                    name: 'Trigeminale Chemorezeption',
                    description: 'Schärfe, Kühle, Irritation',
                    icon: '🌶️',
                    difficulty: 'medium',
                    parentId: 'chemical-senses'
                  }
                ]
              },
              {
                id: 'somatosensory-system',
                name: 'Somatosensorik',
                description: 'Tastsinn und Propriozeption',
                icon: '👋',
                difficulty: 'medium',
                parentId: 'sensory-organs-integumentary',
                children: [
                  {
                    id: 'tactile-receptors',
                    name: 'Tastrezeptoren',
                    description: 'Mechanoreceptoren in der Haut',
                    icon: '🤏',
                    difficulty: 'medium',
                    parentId: 'somatosensory-system'
                  },
                  {
                    id: 'pain-receptors',
                    name: 'Schmerzrezeptoren',
                    description: 'Nozizeptoren und Schmerzleitung',
                    icon: '😣',
                    difficulty: 'medium',
                    parentId: 'somatosensory-system'
                  },
                  {
                    id: 'temperature-receptors',
                    name: 'Thermorezeptoren',
                    description: 'Kälte- und Wärmerezeptoren',
                    icon: '🌡️',
                    difficulty: 'medium',
                    parentId: 'somatosensory-system'
                  },
                  {
                    id: 'proprioception',
                    name: 'Propriozeption',
                    description: 'Muskel- und Gelenkrezeptoren',
                    icon: '🧘',
                    difficulty: 'hard',
                    parentId: 'somatosensory-system'
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

export default medicalBasicsCategories