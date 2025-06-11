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
          }
        ]
      }
    ]
  }
]

export default nursingTheoriesCategories