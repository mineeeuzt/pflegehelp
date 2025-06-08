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