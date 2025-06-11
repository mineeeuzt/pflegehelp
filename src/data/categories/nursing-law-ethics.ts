export interface Category {
  id: string
  name: string
  description: string
  icon: string
  difficulty: 'easy' | 'medium' | 'hard'
  parentId?: string
  children?: Category[]
}

export const nursingLawEthicsCategories: Category[] = [
  {
    id: 'nursing-law-ethics',
    name: 'PFLEGERECHT & ETHIK',
    description: 'Rechtliche und ethische Grundlagen der Pflege',
    icon: '⚖️',
    difficulty: 'hard',
    children: [
      {
        id: 'legal-foundations',
        name: 'RECHTLICHE GRUNDLAGEN',
        description: 'Gesetzliche Rahmenbedingungen der Pflege',
        icon: '📜',
        difficulty: 'hard',
        parentId: 'nursing-law-ethics',
        children: [
          {
            id: 'professional-law',
            name: 'Berufsrecht',
            description: 'Rechtliche Grundlagen des Pflegeberufs',
            icon: '👩‍⚕️',
            difficulty: 'hard',
            parentId: 'legal-foundations',
            children: [
              {
                id: 'nursing-professions-act',
                name: 'Pflegeberufegesetz (PflBG)',
                description: 'Grundlegendes Berufsgesetz für Pflegekräfte',
                icon: '📋',
                difficulty: 'hard',
                parentId: 'professional-law',
                children: [
                  {
                    id: 'generalist-education',
                    name: 'Generalistische Ausbildung',
                    description: 'Einheitliche Pflegeausbildung für alle Bereiche',
                    icon: '🎓',
                    difficulty: 'medium',
                    parentId: 'nursing-professions-act'
                  },
                  {
                    id: 'reserved-tasks',
                    name: 'Vorbehaltsaufgaben',
                    description: 'Ausschließlich Pflegefachkräften vorbehaltene Tätigkeiten',
                    icon: '🔒',
                    difficulty: 'hard',
                    parentId: 'nursing-professions-act',
                    children: [
                      {
                        id: 'care-need-assessment',
                        name: 'Erhebung und Feststellung des Pflegebedarfs',
                        description: 'Systematische Erfassung des individuellen Pflegebedarfs',
                        icon: '🔍',
                        difficulty: 'medium',
                        parentId: 'reserved-tasks'
                      },
                      {
                        id: 'care-process-organization',
                        name: 'Organisation und Gestaltung des Pflegeprozesses',
                        description: 'Planung und Steuerung der pflegerischen Versorgung',
                        icon: '⚙️',
                        difficulty: 'medium',
                        parentId: 'reserved-tasks'
                      },
                      {
                        id: 'analysis-evaluation-development',
                        name: 'Analyse, Evaluation und Entwicklung',
                        description: 'Bewertung und Weiterentwicklung der Pflegequalität',
                        icon: '📊',
                        difficulty: 'hard',
                        parentId: 'reserved-tasks'
                      },
                      {
                        id: 'quality-assurance',
                        name: 'Qualitätssicherung',
                        description: 'Sicherstellung und Überwachung der Pflegequalität',
                        icon: '✅',
                        difficulty: 'medium',
                        parentId: 'reserved-tasks'
                      }
                    ]
                  },
                  {
                    id: 'professional-title-protection',
                    name: 'Berufsbezeichnungsschutz',
                    description: 'Schutz der Berufsbezeichnung vor Missbrauch',
                    icon: '🛡️',
                    difficulty: 'easy',
                    parentId: 'nursing-professions-act'
                  },
                  {
                    id: 'educational-objectives',
                    name: 'Ausbildungsziele',
                    description: 'Definierte Kompetenzen und Lernziele der Ausbildung',
                    icon: '🎯',
                    difficulty: 'medium',
                    parentId: 'nursing-professions-act'
                  },
                  {
                    id: 'examination-regulations',
                    name: 'Prüfungsordnung',
                    description: 'Regelungen für die staatliche Prüfung',
                    icon: '📝',
                    difficulty: 'medium',
                    parentId: 'nursing-professions-act'
                  }
                ]
              },
              {
                id: 'training-examination-ordinance',
                name: 'Ausbildungs- und Prüfungsverordnung (PflAPrV)',
                description: 'Detaillierte Ausführungsbestimmungen zur Ausbildung',
                icon: '📖',
                difficulty: 'hard',
                parentId: 'professional-law',
                children: [
                  {
                    id: 'competence-areas',
                    name: 'Kompetenzbereiche',
                    description: 'Fünf definierte Kompetenzbereiche der Ausbildung',
                    icon: '🔢',
                    difficulty: 'medium',
                    parentId: 'training-examination-ordinance'
                  },
                  {
                    id: 'theoretical-education',
                    name: 'Theoretische Ausbildung (2.100 Std.)',
                    description: 'Mindestumfang der theoretischen Ausbildung',
                    icon: '📚',
                    difficulty: 'easy',
                    parentId: 'training-examination-ordinance'
                  },
                  {
                    id: 'practical-education',
                    name: 'Praktische Ausbildung (2.500 Std.)',
                    description: 'Mindestumfang der praktischen Ausbildung',
                    icon: '🏥',
                    difficulty: 'easy',
                    parentId: 'training-examination-ordinance'
                  },
                  {
                    id: 'practical-guidance',
                    name: 'Praxisanleitung',
                    description: 'Qualifizierte Anleitung in der praktischen Ausbildung',
                    icon: '👨‍🏫',
                    difficulty: 'medium',
                    parentId: 'training-examination-ordinance'
                  },
                  {
                    id: 'performance-records',
                    name: 'Leistungsnachweise',
                    description: 'Nachweise über erbrachte Ausbildungsleistungen',
                    icon: '📋',
                    difficulty: 'easy',
                    parentId: 'training-examination-ordinance'
                  }
                ]
              },
              {
                id: 'medical-practice-transfer',
                name: 'Heilkundeübertragung',
                description: 'Übertragung ärztlicher Tätigkeiten an Pflegekräfte',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'professional-law',
                children: [
                  {
                    id: 'model-projects',
                    name: 'Modellvorhaben nach § 63 3c SGB V',
                    description: 'Erprobung erweiterter Kompetenzen in der Pflege',
                    icon: '🧪',
                    difficulty: 'hard',
                    parentId: 'medical-practice-transfer'
                  },
                  {
                    id: 'substitution-medical-services',
                    name: 'Substitution ärztlicher Leistungen',
                    description: 'Eigenständige Ausführung ärztlicher Tätigkeiten',
                    icon: '🩺',
                    difficulty: 'hard',
                    parentId: 'medical-practice-transfer'
                  },
                  {
                    id: 'delegation-vs-substitution',
                    name: 'Delegation vs. Substitution',
                    description: 'Unterscheidung zwischen Delegation und Substitution',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'medical-practice-transfer'
                  },
                  {
                    id: 'liability-aspects',
                    name: 'Haftungsrechtliche Aspekte',
                    description: 'Rechtliche Verantwortung bei übertragenen Tätigkeiten',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'medical-practice-transfer'
                  }
                ]
              },
              {
                id: 'continuing-education',
                name: 'Fort- und Weiterbildung',
                description: 'Lebenslanges Lernen in der Pflege',
                icon: '📈',
                difficulty: 'medium',
                parentId: 'professional-law',
                children: [
                  {
                    id: 'professional-obligation',
                    name: 'Berufliche Pflicht',
                    description: 'Verpflichtung zur kontinuierlichen Fortbildung',
                    icon: '📚',
                    difficulty: 'easy',
                    parentId: 'continuing-education'
                  },
                  {
                    id: 'specialist-training',
                    name: 'Fachweiterbildungen',
                    description: 'Spezialisierung in verschiedenen Pflegebereichen',
                    icon: '🎓',
                    difficulty: 'medium',
                    parentId: 'continuing-education'
                  },
                  {
                    id: 'additional-qualifications',
                    name: 'Zusatzqualifikationen',
                    description: 'Ergänzende Befähigungen und Zertifikate',
                    icon: '🏆',
                    difficulty: 'easy',
                    parentId: 'continuing-education'
                  },
                  {
                    id: 'academization',
                    name: 'Akademisierung',
                    description: 'Hochschulische Pflegeausbildung und -weiterbildung',
                    icon: '🎓',
                    difficulty: 'medium',
                    parentId: 'continuing-education'
                  }
                ]
              }
            ]
          },
          {
            id: 'labor-law',
            name: 'Arbeitsrecht',
            description: 'Arbeitsrechtliche Bestimmungen für Pflegekräfte',
            icon: '👷',
            difficulty: 'medium',
            parentId: 'legal-foundations',
            children: [
              {
                id: 'employment-contract',
                name: 'Arbeitsvertrag',
                description: 'Grundlagen des Arbeitsverhältnisses',
                icon: '📝',
                difficulty: 'medium',
                parentId: 'labor-law',
                children: [
                  {
                    id: 'rights-obligations',
                    name: 'Rechte und Pflichten',
                    description: 'Gegenseitige Verpflichtungen von Arbeitgeber und Arbeitnehmer',
                    icon: '⚖️',
                    difficulty: 'easy',
                    parentId: 'employment-contract'
                  },
                  {
                    id: 'remuneration',
                    name: 'Vergütung',
                    description: 'Entlohnung und Gehaltsstrukturen',
                    icon: '💰',
                    difficulty: 'easy',
                    parentId: 'employment-contract'
                  },
                  {
                    id: 'working-hours',
                    name: 'Arbeitszeit',
                    description: 'Regelungen zu Arbeitszeiten und Schichtdienst',
                    icon: '🕐',
                    difficulty: 'easy',
                    parentId: 'employment-contract'
                  },
                  {
                    id: 'vacation',
                    name: 'Urlaub',
                    description: 'Urlaubsanspruch und Urlaubsgewährung',
                    icon: '🏖️',
                    difficulty: 'easy',
                    parentId: 'employment-contract'
                  },
                  {
                    id: 'termination',
                    name: 'Kündigung',
                    description: 'Beendigung des Arbeitsverhältnisses',
                    icon: '📄',
                    difficulty: 'medium',
                    parentId: 'employment-contract'
                  }
                ]
              },
              {
                id: 'working-time-act',
                name: 'Arbeitszeitgesetz (ArbZG)',
                description: 'Gesetzliche Regelungen zur Arbeitszeit',
                icon: '⏰',
                difficulty: 'medium',
                parentId: 'labor-law',
                children: [
                  {
                    id: 'maximum-working-hours',
                    name: 'Höchstarbeitszeiten',
                    description: 'Maximale tägliche und wöchentliche Arbeitszeit',
                    icon: '📊',
                    difficulty: 'easy',
                    parentId: 'working-time-act'
                  },
                  {
                    id: 'rest-breaks',
                    name: 'Ruhepausen',
                    description: 'Pflicht zu Arbeitspausen während der Schicht',
                    icon: '☕',
                    difficulty: 'easy',
                    parentId: 'working-time-act'
                  },
                  {
                    id: 'rest-periods',
                    name: 'Ruhezeiten',
                    description: 'Mindestpausen zwischen Arbeitsschichten',
                    icon: '😴',
                    difficulty: 'easy',
                    parentId: 'working-time-act'
                  },
                  {
                    id: 'night-shift-work',
                    name: 'Nacht- und Schichtarbeit',
                    description: 'Besondere Bestimmungen für Nachtdienst',
                    icon: '🌙',
                    difficulty: 'medium',
                    parentId: 'working-time-act'
                  },
                  {
                    id: 'sunday-holiday-work',
                    name: 'Sonn- und Feiertagsarbeit',
                    description: 'Arbeiten an Sonn- und Feiertagen',
                    icon: '📅',
                    difficulty: 'medium',
                    parentId: 'working-time-act'
                  }
                ]
              },
              {
                id: 'workplace-safety',
                name: 'Arbeitsschutz',
                description: 'Schutz der Gesundheit am Arbeitsplatz',
                icon: '🦺',
                difficulty: 'medium',
                parentId: 'labor-law',
                children: [
                  {
                    id: 'workplace-safety-act',
                    name: 'Arbeitsschutzgesetz',
                    description: 'Grundgesetz für Sicherheit und Gesundheit bei der Arbeit',
                    icon: '📜',
                    difficulty: 'medium',
                    parentId: 'workplace-safety'
                  },
                  {
                    id: 'risk-assessment',
                    name: 'Gefährdungsbeurteilung',
                    description: 'Systematische Ermittlung von Arbeitsplatzrisiken',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'workplace-safety'
                  },
                  {
                    id: 'personal-protective-equipment',
                    name: 'Persönliche Schutzausrüstung',
                    description: 'Bereitstellung und Nutzung von Schutzausrüstung',
                    icon: '🥽',
                    difficulty: 'easy',
                    parentId: 'workplace-safety'
                  },
                  {
                    id: 'needlestick-regulation',
                    name: 'Nadelstichverordnung',
                    description: 'Schutz vor Verletzungen durch spitze Gegenstände',
                    icon: '💉',
                    difficulty: 'medium',
                    parentId: 'workplace-safety'
                  },
                  {
                    id: 'maternity-protection',
                    name: 'Mutterschutz',
                    description: 'Schutz schwangerer und stillender Arbeitnehmerinnen',
                    icon: '🤱',
                    difficulty: 'medium',
                    parentId: 'workplace-safety'
                  }
                ]
              },
              {
                id: 'collective-bargaining',
                name: 'Tarifrecht',
                description: 'Tarifvertragliche Regelungen in der Pflege',
                icon: '📊',
                difficulty: 'medium',
                parentId: 'labor-law',
                children: [
                  {
                    id: 'tvoed-tv-l',
                    name: 'TVöD / TV-L',
                    description: 'Tarifverträge für den öffentlichen Dienst',
                    icon: '🏛️',
                    difficulty: 'medium',
                    parentId: 'collective-bargaining'
                  },
                  {
                    id: 'avr-church',
                    name: 'AVR (Kirchliche Träger)',
                    description: 'Arbeitsvertragsrichtlinien kirchlicher Einrichtungen',
                    icon: '⛪',
                    difficulty: 'medium',
                    parentId: 'collective-bargaining'
                  },
                  {
                    id: 'company-agreements',
                    name: 'Haustarifverträge',
                    description: 'Unternehmensspezifische Tarifverträge',
                    icon: '🏢',
                    difficulty: 'easy',
                    parentId: 'collective-bargaining'
                  },
                  {
                    id: 'job-classification',
                    name: 'Eingruppierung',
                    description: 'Zuordnung zu Entgeltgruppen nach Qualifikation',
                    icon: '📈',
                    difficulty: 'medium',
                    parentId: 'collective-bargaining'
                  }
                ]
              }
            ]
          },
          {
            id: 'liability-law',
            name: 'Haftungsrecht',
            description: 'Rechtliche Verantwortung und Haftung in der Pflege',
            icon: '⚠️',
            difficulty: 'hard',
            parentId: 'legal-foundations',
            children: [
              {
                id: 'civil-liability',
                name: 'Zivilrechtliche Haftung',
                description: 'Schadensersatzpflicht bei Pflegefehlern',
                icon: '💰',
                difficulty: 'hard',
                parentId: 'liability-law',
                children: [
                  {
                    id: 'contractual-liability',
                    name: 'Vertragliche Haftung',
                    description: 'Haftung aus Behandlungsvertrag',
                    icon: '📝',
                    difficulty: 'medium',
                    parentId: 'civil-liability'
                  },
                  {
                    id: 'tort-liability',
                    name: 'Deliktische Haftung (§ 823 BGB)',
                    description: 'Haftung bei unerlaubten Handlungen',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'civil-liability'
                  },
                  {
                    id: 'organizational-fault',
                    name: 'Organisationsverschulden',
                    description: 'Haftung für mangelhafte Organisation',
                    icon: '🏗️',
                    difficulty: 'hard',
                    parentId: 'civil-liability'
                  },
                  {
                    id: 'burden-of-proof-reversal',
                    name: 'Beweislastumkehr',
                    description: 'Umkehr der Beweislast bei groben Behandlungsfehlern',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'civil-liability'
                  },
                  {
                    id: 'statute-of-limitations',
                    name: 'Verjährung',
                    description: 'Zeitliche Grenzen für Schadensersatzansprüche',
                    icon: '⏳',
                    difficulty: 'medium',
                    parentId: 'civil-liability'
                  }
                ]
              },
              {
                id: 'criminal-liability',
                name: 'Strafrechtliche Haftung',
                description: 'Strafbare Handlungen in der Pflege',
                icon: '🚔',
                difficulty: 'hard',
                parentId: 'liability-law',
                children: [
                  {
                    id: 'bodily-harm',
                    name: 'Körperverletzung (§§ 223 ff. StGB)',
                    description: 'Strafbare Schädigung der körperlichen Unversehrtheit',
                    icon: '🤕',
                    difficulty: 'medium',
                    parentId: 'criminal-liability'
                  },
                  {
                    id: 'failure-to-assist',
                    name: 'Unterlassene Hilfeleistung (§ 323c StGB)',
                    description: 'Strafbarkeit bei unterlassener Hilfe in Notfällen',
                    icon: '🚨',
                    difficulty: 'medium',
                    parentId: 'criminal-liability'
                  },
                  {
                    id: 'breach-of-care',
                    name: 'Verletzung der Fürsorge (§ 225 StGB)',
                    description: 'Vernachlässigung hilfsbedürftiger Personen',
                    icon: '👥',
                    difficulty: 'medium',
                    parentId: 'criminal-liability'
                  },
                  {
                    id: 'false-imprisonment',
                    name: 'Freiheitsberaubung (§ 239 StGB)',
                    description: 'Unrechtmäßige Bewegungseinschränkung',
                    icon: '🔒',
                    difficulty: 'medium',
                    parentId: 'criminal-liability'
                  },
                  {
                    id: 'homicide-offenses',
                    name: 'Tötungsdelikte',
                    description: 'Strafbare Handlungen mit Todesfolge',
                    icon: '💀',
                    difficulty: 'hard',
                    parentId: 'criminal-liability'
                  }
                ]
              },
              {
                id: 'implementation-responsibility',
                name: 'Durchführungsverantwortung',
                description: 'Verteilung der Verantwortlichkeiten im Behandlungsteam',
                icon: '👥',
                difficulty: 'hard',
                parentId: 'liability-law',
                children: [
                  {
                    id: 'prescription-responsibility',
                    name: 'Anordnungsverantwortung (Arzt)',
                    description: 'Ärztliche Verantwortung für Behandlungsanordnungen',
                    icon: '👨‍⚕️',
                    difficulty: 'medium',
                    parentId: 'implementation-responsibility'
                  },
                  {
                    id: 'execution-responsibility',
                    name: 'Durchführungsverantwortung (Pflege)',
                    description: 'Pflegerische Verantwortung bei der Umsetzung',
                    icon: '👩‍⚕️',
                    difficulty: 'medium',
                    parentId: 'implementation-responsibility'
                  },
                  {
                    id: 'organizational-responsibility',
                    name: 'Organisationsverantwortung (Leitung)',
                    description: 'Leitungsverantwortung für strukturelle Rahmenbedingungen',
                    icon: '👔',
                    difficulty: 'hard',
                    parentId: 'implementation-responsibility'
                  },
                  {
                    id: 'remonstration-right-duty',
                    name: 'Remonstrationsrecht/-pflicht',
                    description: 'Recht und Pflicht zur Beanstandung problematischer Anordnungen',
                    icon: '✋',
                    difficulty: 'hard',
                    parentId: 'implementation-responsibility'
                  }
                ]
              },
              {
                id: 'documentation-obligation',
                name: 'Dokumentationspflicht',
                description: 'Rechtliche Verpflichtung zur Pflegedokumentation',
                icon: '📝',
                difficulty: 'medium',
                parentId: 'liability-law',
                children: [
                  {
                    id: 'legally-compliant-documentation',
                    name: 'Rechtssichere Dokumentation',
                    description: 'Anforderungen an ordnungsgemäße Dokumentation',
                    icon: '✅',
                    difficulty: 'medium',
                    parentId: 'documentation-obligation'
                  },
                  {
                    id: 'evidence-preservation',
                    name: 'Beweissicherung',
                    description: 'Dokumentation als Beweis für erbrachte Leistungen',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'documentation-obligation'
                  },
                  {
                    id: 'retention-periods',
                    name: 'Aufbewahrungsfristen',
                    description: 'Gesetzliche Fristen für die Dokumentenaufbewahrung',
                    icon: '📅',
                    difficulty: 'easy',
                    parentId: 'documentation-obligation'
                  },
                  {
                    id: 'access-rights',
                    name: 'Einsichtsrecht',
                    description: 'Recht von Patienten auf Einsicht in ihre Dokumentation',
                    icon: '👁️',
                    difficulty: 'easy',
                    parentId: 'documentation-obligation'
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

export default nursingLawEthicsCategories