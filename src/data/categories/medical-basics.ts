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
                parentId: 'hormone-system'
              },
              {
                id: 'thyroid-hormones',
                name: 'Schilddrüsenhormone',
                description: 'T3, T4 und Stoffwechselregulation',
                icon: '🦋',
                difficulty: 'medium',
                parentId: 'hormone-system'
              },
              {
                id: 'adrenal-hormones',
                name: 'Nebennierenhormone',
                description: 'Kortisol, Aldosteron und Katecholamine',
                icon: '⚡',
                difficulty: 'medium',
                parentId: 'hormone-system'
              },
              {
                id: 'pancreatic-hormones',
                name: 'Pankreashormone',
                description: 'Insulin, Glukagon und Blutzuckerregulation',
                icon: '🥞',
                difficulty: 'medium',
                parentId: 'hormone-system'
              },
              {
                id: 'sex-hormones',
                name: 'Geschlechtshormone',
                description: 'Östrogen, Testosteron und Reproduktion',
                icon: '♀️♂️',
                difficulty: 'medium',
                parentId: 'hormone-system'
              },
              {
                id: 'other-hormones',
                name: 'Weitere Hormone',
                description: 'PTH, Calcitonin, Melatonin und andere',
                icon: '🧪',
                difficulty: 'medium',
                parentId: 'hormone-system'
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
                parentId: 'gi-anatomy'
              },
              {
                id: 'esophagus',
                name: 'Ösophagus (Speiseröhre)',
                description: 'Schluckakt und Peristaltik',
                icon: '🌊',
                difficulty: 'medium',
                parentId: 'gi-anatomy'
              },
              {
                id: 'stomach',
                name: 'Magen',
                description: 'Magensäureproduktion und Proteinvorverdauung',
                icon: '🫃',
                difficulty: 'medium',
                parentId: 'gi-anatomy'
              },
              {
                id: 'small-intestine',
                name: 'Dünndarm (Duodenum, Jejunum, Ileum)',
                description: 'Haupt-Verdauungs- und Absorptionsort',
                icon: '🌀',
                difficulty: 'hard',
                parentId: 'gi-anatomy'
              },
              {
                id: 'large-intestine',
                name: 'Dickdarm (Kolon, Rektum)',
                description: 'Wasserresorption und Stuhlformung',
                icon: '🔄',
                difficulty: 'medium',
                parentId: 'gi-anatomy'
              }
            ]
          },
          {
            id: 'digestive-organs',
            name: 'Verdauungsorgane',
            description: 'Leber, Gallenblase und Pankreas',
            icon: '🥞',
            difficulty: 'hard',
            parentId: 'digestive-system',
            children: [
              {
                id: 'liver',
                name: 'Leber (Hepar)',
                description: 'Stoffwechselorgan und Entgiftung',
                icon: '🍯',
                difficulty: 'hard',
                parentId: 'digestive-organs'
              },
              {
                id: 'gallbladder',
                name: 'Gallenblase & Gallenwege',
                description: 'Gallenspeicherung und -sekretion',
                icon: '🫒',
                difficulty: 'medium',
                parentId: 'digestive-organs'
              },
              {
                id: 'pancreas',
                name: 'Pankreas (Bauchspeicheldrüse)',
                description: 'Exokrine und endokrine Funktionen',
                icon: '🥞',
                difficulty: 'hard',
                parentId: 'digestive-organs'
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
            id: 'skin-anatomy',
            name: 'Hautaufbau',
            description: 'Epidermis, Dermis und Subkutis',
            icon: '🧄',
            difficulty: 'medium',
            parentId: 'integumentary-system',
            children: [
              {
                id: 'epidermis',
                name: 'Epidermis (Oberhaut)',
                description: 'Schutzbarriere und Keratinisierung',
                icon: '🛡️',
                difficulty: 'medium',
                parentId: 'skin-anatomy'
              },
              {
                id: 'dermis',
                name: 'Dermis (Lederhaut)',
                description: 'Kollagen, Elastin und Hautanhangsgebilde',
                icon: '🕸️',
                difficulty: 'medium',
                parentId: 'skin-anatomy'
              },
              {
                id: 'subcutis',
                name: 'Subkutis (Unterhaut)',
                description: 'Fettgewebe und Isolation',
                icon: '🧈',
                difficulty: 'easy',
                parentId: 'skin-anatomy'
              }
            ]
          },
          {
            id: 'skin-appendages',
            name: 'Hautanhangsgebilde',
            description: 'Haare, Nägel und Drüsen',
            icon: '💅',
            difficulty: 'medium',
            parentId: 'integumentary-system',
            children: [
              {
                id: 'hair-follicles',
                name: 'Haare & Haarfollikel',
                description: 'Haarwachstum und -zyklus',
                icon: '🦱',
                difficulty: 'medium',
                parentId: 'skin-appendages'
              },
              {
                id: 'nails',
                name: 'Nägel',
                description: 'Nagelplatte und -matrix',
                icon: '💅',
                difficulty: 'easy',
                parentId: 'skin-appendages'
              },
              {
                id: 'sweat-glands',
                name: 'Schweißdrüsen (ekkrin/apokrin)',
                description: 'Thermoregulation und Sekretion',
                icon: '💧',
                difficulty: 'medium',
                parentId: 'skin-appendages'
              },
              {
                id: 'sebaceous-glands',
                name: 'Talgdrüsen',
                description: 'Sebumproduktion und Hautschutz',
                icon: '🛢️',
                difficulty: 'medium',
                parentId: 'skin-appendages'
              }
            ]
          },
          {
            id: 'skin-functions',
            name: 'Hautfunktionen',
            description: 'Schutz, Thermoregulation und Sensorik',
            icon: '🌡️',
            difficulty: 'medium',
            parentId: 'integumentary-system',
            children: [
              {
                id: 'barrier-function',
                name: 'Barrierefunktion',
                description: 'Schutz vor Umwelteinflüssen',
                icon: '🛡️',
                difficulty: 'medium',
                parentId: 'skin-functions'
              },
              {
                id: 'thermoregulation',
                name: 'Thermoregulation',
                description: 'Wärmehaushalt und Schweißproduktion',
                icon: '🌡️',
                difficulty: 'medium',
                parentId: 'skin-functions'
              },
              {
                id: 'sensory-function',
                name: 'Sensorfunktion',
                description: 'Tastrezeptoren und Schmerzwahrnehmung',
                icon: '👋',
                difficulty: 'medium',
                parentId: 'skin-functions'
              },
              {
                id: 'vitamin-d-synthesis',
                name: 'Vitamin-D-Synthese',
                description: 'UV-induzierte Vitamin-D-Bildung',
                icon: '☀️',
                difficulty: 'medium',
                parentId: 'skin-functions'
              }
            ]
          }
        ]
      }
    ]
  }
]

export default medicalBasicsCategories