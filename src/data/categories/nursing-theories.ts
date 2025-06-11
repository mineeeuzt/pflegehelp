export interface Category {
  id: string
  name: string
  description: string
  icon: string
  difficulty: 'easy' | 'medium' | 'hard'
  parentId?: string
  children?: Category[]
}

export const nursingTheoriesCategories: Category[] = [
  {
    id: 'nursing-theories',
    name: 'PFLEGETHEORIEN & -MODELLE',
    description: 'Theoretische Grundlagen der Pflege',
    icon: '🎯',
    difficulty: 'hard',
    children: [
      {
        id: 'nursing-theories-main',
        name: 'PFLEGETHEORIEN',
        description: 'Grundlegende Pflegetheorien und ihre Anwendung',
        icon: '📚',
        difficulty: 'hard',
        parentId: 'nursing-theories',
        children: [
          {
            id: 'need-oriented-theories',
            name: 'Bedürfnisorientierte Theorien',
            description: 'Theorien basierend auf menschlichen Bedürfnissen',
            icon: '🏺',
            difficulty: 'medium',
            parentId: 'nursing-theories-main',
            children: [
              {
                id: 'virginia-henderson',
                name: 'Virginia Henderson',
                description: 'Theorie der 14 Grundbedürfnisse',
                icon: '👩‍⚕️',
                difficulty: 'medium',
                parentId: 'need-oriented-theories',
                children: [
                  {
                    id: 'henderson-basic-needs',
                    name: '14 Grundbedürfnisse',
                    description: 'Die fundamentalen menschlichen Bedürfnisse nach Henderson',
                    icon: '📝',
                    difficulty: 'easy',
                    parentId: 'virginia-henderson',
                    children: [
                      {
                        id: 'breathing',
                        name: 'Normal atmen',
                        description: 'Normale Atmung aufrechterhalten',
                        icon: '🫁',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'eating-drinking',
                        name: 'Angemessen essen und trinken',
                        description: 'Ausreichende Nahrung und Flüssigkeit aufnehmen',
                        icon: '🍽️',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'elimination',
                        name: 'Ausscheiden',
                        description: 'Körperausscheidungen regulieren',
                        icon: '🚽',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'movement-posture',
                        name: 'Sich bewegen und Körperhaltung',
                        description: 'Bewegung und angemessene Körperhaltung',
                        icon: '🚶',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'sleep-rest',
                        name: 'Schlafen und ruhen',
                        description: 'Ausreichend Schlaf und Erholung',
                        icon: '😴',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'clothing',
                        name: 'Kleidung (an-/ausziehen, auswählen)',
                        description: 'Angemessene Kleidung wählen und handhaben',
                        icon: '👔',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'temperature-regulation',
                        name: 'Körpertemperatur regulieren',
                        description: 'Normale Körpertemperatur aufrechterhalten',
                        icon: '🌡️',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'body-care',
                        name: 'Körperpflege und Hautschutz',
                        description: 'Körperhygiene und Hautpflege',
                        icon: '🧼',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'avoid-dangers',
                        name: 'Gefahren vermeiden',
                        description: 'Sicherheit gewährleisten und Risiken minimieren',
                        icon: '⚠️',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'communication',
                        name: 'Kommunizieren',
                        description: 'Bedürfnisse, Gefühle und Gedanken ausdrücken',
                        icon: '💬',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'beliefs-values',
                        name: 'Glauben und Werte leben',
                        description: 'Religiöse und spirituelle Bedürfnisse erfüllen',
                        icon: '🙏',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'meaningful-activity',
                        name: 'Sinnvolle Beschäftigung',
                        description: 'Produktive und erfüllende Tätigkeiten ausüben',
                        icon: '💼',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'play-recreation',
                        name: 'Spielen und Unterhaltung',
                        description: 'Freizeitaktivitäten und Erholung',
                        icon: '🎮',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      },
                      {
                        id: 'learning-discovery',
                        name: 'Lernen und Entdecken',
                        description: 'Neugierde befriedigen und Wissen erwerben',
                        icon: '📚',
                        difficulty: 'easy',
                        parentId: 'henderson-basic-needs'
                      }
                    ]
                  },
                  {
                    id: 'henderson-nursing-understanding',
                    name: 'Pflegeverständnis',
                    description: 'Hendersons Konzept der Pflegeinterventionen',
                    icon: '🎯',
                    difficulty: 'medium',
                    parentId: 'virginia-henderson',
                    children: [
                      {
                        id: 'substitution',
                        name: 'Substitution (vollständige Übernahme)',
                        description: 'Pflegekraft übernimmt Aktivitäten vollständig',
                        icon: '🔄',
                        difficulty: 'easy',
                        parentId: 'henderson-nursing-understanding'
                      },
                      {
                        id: 'support',
                        name: 'Unterstützung (teilweise Hilfe)',
                        description: 'Pflegekraft bietet teilweise Hilfestellung',
                        icon: '🤝',
                        difficulty: 'easy',
                        parentId: 'henderson-nursing-understanding'
                      },
                      {
                        id: 'accompaniment',
                        name: 'Begleitung (emotionale Unterstützung)',
                        description: 'Emotionale und psychische Begleitung',
                        icon: '💙',
                        difficulty: 'easy',
                        parentId: 'henderson-nursing-understanding'
                      },
                      {
                        id: 'counseling',
                        name: 'Beratung (Wissensvermittlung)',
                        description: 'Information und Schulung des Patienten',
                        icon: '🧠',
                        difficulty: 'easy',
                        parentId: 'henderson-nursing-understanding'
                      }
                    ]
                  },
                  {
                    id: 'henderson-goal',
                    name: 'Ziel: Unabhängigkeit wiederherstellen',
                    description: 'Das übergeordnete Ziel der Pflege nach Henderson',
                    icon: '🎯',
                    difficulty: 'easy',
                    parentId: 'virginia-henderson'
                  }
                ]
              },
              {
                id: 'abraham-maslow',
                name: 'Abraham Maslow',
                description: 'Bedürfnispyramide und Anwendung in der Pflege',
                icon: '🏔️',
                difficulty: 'medium',
                parentId: 'need-oriented-theories',
                children: [
                  {
                    id: 'maslow-hierarchy',
                    name: 'Bedürfnispyramide',
                    description: 'Die fünfstufige Hierarchie der Bedürfnisse',
                    icon: '🔺',
                    difficulty: 'easy',
                    parentId: 'abraham-maslow',
                    children: [
                      {
                        id: 'physiological-needs',
                        name: 'Physiologische Bedürfnisse',
                        description: 'Grundlegende körperliche Bedürfnisse (Nahrung, Schlaf, Atmung)',
                        icon: '🫀',
                        difficulty: 'easy',
                        parentId: 'maslow-hierarchy'
                      },
                      {
                        id: 'safety-needs',
                        name: 'Sicherheitsbedürfnisse',
                        description: 'Schutz vor Gefahren und Stabilität',
                        icon: '🛡️',
                        difficulty: 'easy',
                        parentId: 'maslow-hierarchy'
                      },
                      {
                        id: 'social-needs',
                        name: 'Soziale Bedürfnisse',
                        description: 'Zugehörigkeit, Liebe und Freundschaft',
                        icon: '👥',
                        difficulty: 'easy',
                        parentId: 'maslow-hierarchy'
                      },
                      {
                        id: 'esteem-needs',
                        name: 'Wertschätzung',
                        description: 'Anerkennung und Selbstachtung',
                        icon: '🏆',
                        difficulty: 'easy',
                        parentId: 'maslow-hierarchy'
                      },
                      {
                        id: 'self-actualization',
                        name: 'Selbstverwirklichung',
                        description: 'Persönliches Wachstum und Potentialentfaltung',
                        icon: '🌟',
                        difficulty: 'easy',
                        parentId: 'maslow-hierarchy'
                      }
                    ]
                  },
                  {
                    id: 'deficit-vs-growth-needs',
                    name: 'Defizitbedürfnisse vs. Wachstumsbedürfnisse',
                    description: 'Unterscheidung zwischen Mangel- und Entwicklungsbedürfnissen',
                    icon: '⚖️',
                    difficulty: 'medium',
                    parentId: 'abraham-maslow'
                  },
                  {
                    id: 'maslow-nursing-application',
                    name: 'Anwendung in der Pflege',
                    description: 'Praktische Umsetzung der Bedürfnispyramide in der Pflege',
                    icon: '🏥',
                    difficulty: 'medium',
                    parentId: 'abraham-maslow'
                  }
                ]
              },
              {
                id: 'dorothea-orem',
                name: 'Dorothea Orem',
                description: 'Selbstpflegedefizit-Theorie',
                icon: '👩‍⚕️',
                difficulty: 'hard',
                parentId: 'need-oriented-theories',
                children: [
                  {
                    id: 'self-care-deficit-theory',
                    name: 'Selbstpflegedefizit-Theorie',
                    description: 'Grundlegendes Konzept der Selbstpflege nach Orem',
                    icon: '🔍',
                    difficulty: 'hard',
                    parentId: 'dorothea-orem'
                  },
                  {
                    id: 'self-care-requirements',
                    name: 'Selbstpflegeerfordernisse',
                    description: 'Die drei Arten von Selbstpflegeerfordernissen',
                    icon: '📋',
                    difficulty: 'medium',
                    parentId: 'dorothea-orem',
                    children: [
                      {
                        id: 'universal-requirements',
                        name: 'Universelle',
                        description: 'Grundlegende Bedürfnisse aller Menschen',
                        icon: '🌍',
                        difficulty: 'easy',
                        parentId: 'self-care-requirements'
                      },
                      {
                        id: 'developmental-requirements',
                        name: 'Entwicklungsbedingte',
                        description: 'Alters- und entwicklungsspezifische Bedürfnisse',
                        icon: '📈',
                        difficulty: 'easy',
                        parentId: 'self-care-requirements'
                      },
                      {
                        id: 'health-deviation-requirements',
                        name: 'Gesundheitsbedingte',
                        description: 'Krankheits- und behandlungsbedingte Bedürfnisse',
                        icon: '🏥',
                        difficulty: 'easy',
                        parentId: 'self-care-requirements'
                      }
                    ]
                  },
                  {
                    id: 'nursing-systems',
                    name: 'Pflegesysteme',
                    description: 'Die drei Pflegesysteme nach Orem',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'dorothea-orem',
                    children: [
                      {
                        id: 'wholly-compensatory',
                        name: 'Vollständig kompensatorisch',
                        description: 'Pflege übernimmt alle Selbstpflegeaktivitäten',
                        icon: '🔄',
                        difficulty: 'medium',
                        parentId: 'nursing-systems'
                      },
                      {
                        id: 'partly-compensatory',
                        name: 'Teilweise kompensatorisch',
                        description: 'Geteilte Verantwortung zwischen Patient und Pflege',
                        icon: '⚖️',
                        difficulty: 'medium',
                        parentId: 'nursing-systems'
                      },
                      {
                        id: 'supportive-educative',
                        name: 'Unterstützend-erzieherisch',
                        description: 'Beratung und Anleitung zur Selbstpflege',
                        icon: '🎓',
                        difficulty: 'medium',
                        parentId: 'nursing-systems'
                      }
                    ]
                  },
                  {
                    id: 'promote-self-care-agency',
                    name: 'Selbstpflegekompetenz fördern',
                    description: 'Ziel der Stärkung der Selbstpflegefähigkeiten',
                    icon: '💪',
                    difficulty: 'medium',
                    parentId: 'dorothea-orem'
                  }
                ]
              }
            ]
          },
          {
            id: 'interaction-theories',
            name: 'Interaktionstheorien',
            description: 'Theorien über zwischenmenschliche Beziehungen in der Pflege',
            icon: '🤝',
            difficulty: 'medium',
            parentId: 'nursing-theories-main',
            children: [
              {
                id: 'hildegard-peplau',
                name: 'Hildegard Peplau',
                description: 'Interpersonale Beziehungstheorie',
                icon: '👩‍⚕️',
                difficulty: 'medium',
                parentId: 'interaction-theories',
                children: [
                  {
                    id: 'interpersonal-relationship',
                    name: 'Interpersonale Beziehung',
                    description: 'Grundkonzept der zwischenmenschlichen Beziehung in der Pflege',
                    icon: '🔗',
                    difficulty: 'easy',
                    parentId: 'hildegard-peplau'
                  },
                  {
                    id: 'relationship-phases',
                    name: 'Phasen der Beziehung',
                    description: 'Die vier Phasen der pflegerischen Beziehung nach Peplau',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'hildegard-peplau',
                    children: [
                      {
                        id: 'orientation-phase',
                        name: 'Orientierungsphase',
                        description: 'Erste Kontaktaufnahme und Problemidentifikation',
                        icon: '🧭',
                        difficulty: 'easy',
                        parentId: 'relationship-phases'
                      },
                      {
                        id: 'identification-phase',
                        name: 'Identifikationsphase',
                        description: 'Patient identifiziert sich mit helfenden Personen',
                        icon: '🎯',
                        difficulty: 'easy',
                        parentId: 'relationship-phases'
                      },
                      {
                        id: 'exploitation-phase',
                        name: 'Nutzungsphase',
                        description: 'Patient nutzt verfügbare Hilfsangebote',
                        icon: '🔧',
                        difficulty: 'easy',
                        parentId: 'relationship-phases'
                      },
                      {
                        id: 'resolution-phase',
                        name: 'Ablösungsphase',
                        description: 'Beendigung der therapeutischen Beziehung',
                        icon: '🚪',
                        difficulty: 'easy',
                        parentId: 'relationship-phases'
                      }
                    ]
                  },
                  {
                    id: 'nursing-roles',
                    name: 'Pflegerolle',
                    description: 'Die verschiedenen Rollen der Pflegekraft nach Peplau',
                    icon: '🎭',
                    difficulty: 'medium',
                    parentId: 'hildegard-peplau',
                    children: [
                      {
                        id: 'stranger-role',
                        name: 'Fremde Person',
                        description: 'Respektvolle, höfliche Begegnung ohne Vorurteile',
                        icon: '👋',
                        difficulty: 'easy',
                        parentId: 'nursing-roles'
                      },
                      {
                        id: 'resource-person',
                        name: 'Informationsquelle',
                        description: 'Bereitstellung von Informationen und Wissen',
                        icon: '📚',
                        difficulty: 'easy',
                        parentId: 'nursing-roles'
                      },
                      {
                        id: 'teacher-role',
                        name: 'Lehrende',
                        description: 'Bildung und Wissensvermittlung',
                        icon: '🎓',
                        difficulty: 'easy',
                        parentId: 'nursing-roles'
                      },
                      {
                        id: 'leader-role',
                        name: 'Führende',
                        description: 'Anleitung und Führung im Pflegeprozess',
                        icon: '👑',
                        difficulty: 'easy',
                        parentId: 'nursing-roles'
                      },
                      {
                        id: 'surrogate-role',
                        name: 'Stellvertretende',
                        description: 'Ersatz für wichtige Bezugspersonen',
                        icon: '🤱',
                        difficulty: 'medium',
                        parentId: 'nursing-roles'
                      },
                      {
                        id: 'counselor-role',
                        name: 'Beratende',
                        description: 'Beratung und emotionale Unterstützung',
                        icon: '💭',
                        difficulty: 'easy',
                        parentId: 'nursing-roles'
                      }
                    ]
                  },
                  {
                    id: 'therapeutic-relationship',
                    name: 'Therapeutische Beziehung',
                    description: 'Heilende Wirkung der pflegerischen Beziehung',
                    icon: '💚',
                    difficulty: 'medium',
                    parentId: 'hildegard-peplau'
                  }
                ]
              },
              {
                id: 'joyce-travelbee',
                name: 'Joyce Travelbee',
                description: 'Zwischenmenschliche Aspekte der Pflege',
                icon: '👥',
                difficulty: 'medium',
                parentId: 'interaction-theories',
                children: [
                  {
                    id: 'interpersonal-aspects',
                    name: 'Zwischenmenschliche Aspekte',
                    description: 'Bedeutung zwischenmenschlicher Beziehungen in der Pflege',
                    icon: '🔗',
                    difficulty: 'easy',
                    parentId: 'joyce-travelbee'
                  },
                  {
                    id: 'travelbee-relationship-phases',
                    name: 'Phasen der Beziehung',
                    description: 'Travelbees Modell der Beziehungsentwicklung',
                    icon: '📈',
                    difficulty: 'medium',
                    parentId: 'joyce-travelbee',
                    children: [
                      {
                        id: 'first-encounter',
                        name: 'Erste Begegnung',
                        description: 'Initialer Kontakt zwischen Pflegekraft und Patient',
                        icon: '👋',
                        difficulty: 'easy',
                        parentId: 'travelbee-relationship-phases'
                      },
                      {
                        id: 'emerging-identities',
                        name: 'Identität hervortreten',
                        description: 'Wahrnehmung als einzigartige Individuen',
                        icon: '👤',
                        difficulty: 'easy',
                        parentId: 'travelbee-relationship-phases'
                      },
                      {
                        id: 'empathy',
                        name: 'Empathie',
                        description: 'Einfühlungsvermögen und Verstehen',
                        icon: '💙',
                        difficulty: 'easy',
                        parentId: 'travelbee-relationship-phases'
                      },
                      {
                        id: 'sympathy',
                        name: 'Sympathie',
                        description: 'Mitgefühl und emotionale Anteilnahme',
                        icon: '💚',
                        difficulty: 'easy',
                        parentId: 'travelbee-relationship-phases'
                      },
                      {
                        id: 'rapport',
                        name: 'Rapport',
                        description: 'Vertrauensvolle, harmonische Beziehung',
                        icon: '🤝',
                        difficulty: 'easy',
                        parentId: 'travelbee-relationship-phases'
                      }
                    ]
                  },
                  {
                    id: 'suffering-experience',
                    name: 'Leiden als Erfahrung',
                    description: 'Verständnis und Umgang mit Leid und Schmerz',
                    icon: '😔',
                    difficulty: 'hard',
                    parentId: 'joyce-travelbee'
                  },
                  {
                    id: 'meaning-finding',
                    name: 'Sinnfindung unterstützen',
                    description: 'Hilfe bei der Suche nach Lebenssinn in schweren Zeiten',
                    icon: '🔍',
                    difficulty: 'hard',
                    parentId: 'joyce-travelbee'
                  }
                ]
              },
              {
                id: 'ida-jean-orlando',
                name: 'Ida Jean Orlando',
                description: 'Pflegeprozesstheorie und dynamische Interaktion',
                icon: '⚡',
                difficulty: 'medium',
                parentId: 'interaction-theories',
                children: [
                  {
                    id: 'nursing-process-theory',
                    name: 'Pflegeprozesstheorie',
                    description: 'Theoretische Grundlage des Pflegeprozesses',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'ida-jean-orlando'
                  },
                  {
                    id: 'dynamic-nursing-process',
                    name: 'Dynamischer Pflegeprozess',
                    description: 'Flexibler, interaktiver Pflegeprozess',
                    icon: '🌊',
                    difficulty: 'hard',
                    parentId: 'ida-jean-orlando'
                  },
                  {
                    id: 'immediate-response',
                    name: 'Sofortige Reaktion',
                    description: 'Spontane, intuitive Pflegereaktionen',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'ida-jean-orlando'
                  },
                  {
                    id: 'deliberative-nursing-process',
                    name: 'Deliberative Nursing Process',
                    description: 'Bewusster, überlegter Pflegeprozess',
                    icon: '🤔',
                    difficulty: 'hard',
                    parentId: 'ida-jean-orlando'
                  }
                ]
              }
            ]
          },
          {
            id: 'outcome-theories',
            name: 'Ergebnisorientierte Theorien',
            description: 'Theorien mit Fokus auf Ergebnisse und Systeme',
            icon: '📈',
            difficulty: 'hard',
            parentId: 'nursing-theories-main',
            children: [
              {
                id: 'martha-rogers',
                name: 'Martha Rogers',
                description: 'Wissenschaft vom Menschen (Science of Unitary Human Beings)',
                icon: '🌌',
                difficulty: 'hard',
                parentId: 'outcome-theories',
                children: [
                  {
                    id: 'science-of-unitary-beings',
                    name: 'Wissenschaft vom Menschen',
                    description: 'Ganzheitliche Betrachtung des Menschen als Energiefeld',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'martha-rogers'
                  },
                  {
                    id: 'energy-fields',
                    name: 'Energiefelder',
                    description: 'Mensch und Umwelt als dynamische Energiefelder',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'martha-rogers'
                  },
                  {
                    id: 'wholeness',
                    name: 'Ganzheitlichkeit',
                    description: 'Unteilbare Einheit von Mensch und Umwelt',
                    icon: '⭕',
                    difficulty: 'medium',
                    parentId: 'martha-rogers'
                  },
                  {
                    id: 'pattern-organization',
                    name: 'Muster und Organisation',
                    description: 'Einzigartige Muster und Strukturen',
                    icon: '🔮',
                    difficulty: 'hard',
                    parentId: 'martha-rogers'
                  },
                  {
                    id: 'human-environment-interaction',
                    name: 'Mensch-Umwelt-Interaktion',
                    description: 'Kontinuierliche Interaktion zwischen Mensch und Umwelt',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'martha-rogers'
                  }
                ]
              },
              {
                id: 'imogene-king',
                name: 'Imogene King',
                description: 'Zielerreichungstheorie und Systemansatz',
                icon: '🎯',
                difficulty: 'hard',
                parentId: 'outcome-theories',
                children: [
                  {
                    id: 'goal-attainment-theory',
                    name: 'Zielerreichungstheorie',
                    description: 'Gemeinsame Zielsetzung und -erreichung',
                    icon: '🏆',
                    difficulty: 'medium',
                    parentId: 'imogene-king'
                  },
                  {
                    id: 'systems-framework',
                    name: 'Systemtheorie',
                    description: 'Drei interagierende Systemebenen',
                    icon: '🔧',
                    difficulty: 'hard',
                    parentId: 'imogene-king',
                    children: [
                      {
                        id: 'personal-system',
                        name: 'Persönliches System',
                        description: 'Individual-psychologische Faktoren',
                        icon: '👤',
                        difficulty: 'medium',
                        parentId: 'systems-framework'
                      },
                      {
                        id: 'interpersonal-system',
                        name: 'Interpersonales System',
                        description: 'Zwischenmenschliche Interaktionen',
                        icon: '👥',
                        difficulty: 'medium',
                        parentId: 'systems-framework'
                      },
                      {
                        id: 'social-system',
                        name: 'Soziales System',
                        description: 'Gesellschaftliche und institutionelle Faktoren',
                        icon: '🏛️',
                        difficulty: 'medium',
                        parentId: 'systems-framework'
                      }
                    ]
                  },
                  {
                    id: 'transaction-process',
                    name: 'Transaktionsprozess',
                    description: 'Interaktiver Austauschprozess zwischen Pflegekraft und Patient',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'imogene-king'
                  },
                  {
                    id: 'mutual-goal-setting',
                    name: 'Gemeinsame Zielsetzung',
                    description: 'Partizipative Entwicklung von Pflegezielen',
                    icon: '🤝',
                    difficulty: 'medium',
                    parentId: 'imogene-king'
                  }
                ]
              },
              {
                id: 'betty-neuman',
                name: 'Betty Neuman',
                description: 'Systemmodell und Stressprävention',
                icon: '🛡️',
                difficulty: 'hard',
                parentId: 'outcome-theories',
                children: [
                  {
                    id: 'systems-model',
                    name: 'Systemmodell',
                    description: 'Ganzheitliches Systemmodell mit Stressfokus',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'betty-neuman'
                  },
                  {
                    id: 'stressors',
                    name: 'Stressoren',
                    description: 'Die drei Arten von Stressfaktoren nach Neuman',
                    icon: '⚠️',
                    difficulty: 'medium',
                    parentId: 'betty-neuman',
                    children: [
                      {
                        id: 'intrapersonal-stressors',
                        name: 'Intrapersonal',
                        description: 'Stressoren innerhalb der Person (Körper, Psyche)',
                        icon: '🧠',
                        difficulty: 'easy',
                        parentId: 'stressors'
                      },
                      {
                        id: 'interpersonal-stressors',
                        name: 'Interpersonal',
                        description: 'Stressoren zwischen Personen (Beziehungen)',
                        icon: '👥',
                        difficulty: 'easy',
                        parentId: 'stressors'
                      },
                      {
                        id: 'extrapersonal-stressors',
                        name: 'Extrapersonal',
                        description: 'Stressoren außerhalb der Person (Umwelt)',
                        icon: '🌍',
                        difficulty: 'easy',
                        parentId: 'stressors'
                      }
                    ]
                  },
                  {
                    id: 'defense-lines',
                    name: 'Verteidigungslinien',
                    description: 'Die drei Verteidigungsebenen gegen Stressoren',
                    icon: '🛡️',
                    difficulty: 'hard',
                    parentId: 'betty-neuman',
                    children: [
                      {
                        id: 'flexible-defense-line',
                        name: 'Flexible Verteidigungslinie',
                        description: 'Äußere, veränderbare Schutzbarriere',
                        icon: '🌊',
                        difficulty: 'medium',
                        parentId: 'defense-lines'
                      },
                      {
                        id: 'normal-defense-line',
                        name: 'Normale Verteidigungslinie',
                        description: 'Gewöhnlicher Gesundheitszustand der Person',
                        icon: '🔒',
                        difficulty: 'medium',
                        parentId: 'defense-lines'
                      },
                      {
                        id: 'resistance-lines',
                        name: 'Widerstandslinien',
                        description: 'Innere Ressourcen und Bewältigungsmechanismen',
                        icon: '💪',
                        difficulty: 'medium',
                        parentId: 'defense-lines'
                      }
                    ]
                  },
                  {
                    id: 'prevention-levels',
                    name: 'Präventionsebenen',
                    description: 'Die drei Ebenen der Prävention nach Neuman',
                    icon: '🏥',
                    difficulty: 'medium',
                    parentId: 'betty-neuman',
                    children: [
                      {
                        id: 'primary-prevention',
                        name: 'Primärprävention',
                        description: 'Vorbeugung vor Eintreten von Stressoren',
                        icon: '🚧',
                        difficulty: 'easy',
                        parentId: 'prevention-levels'
                      },
                      {
                        id: 'secondary-prevention',
                        name: 'Sekundärprävention',
                        description: 'Früherkennung und Behandlung bei Symptomen',
                        icon: '🔍',
                        difficulty: 'easy',
                        parentId: 'prevention-levels'
                      },
                      {
                        id: 'tertiary-prevention',
                        name: 'Tertiärprävention',
                        description: 'Rehabilitation und Rückfallvorbeugung',
                        icon: '♻️',
                        difficulty: 'easy',
                        parentId: 'prevention-levels'
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

export default nursingTheoriesCategories