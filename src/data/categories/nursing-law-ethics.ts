import { Category } from '../../types/Category'

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
          },
          {
            id: 'social-law',
            name: 'Sozialrecht',
            description: 'Sozialrechtliche Grundlagen der Pflege',
            icon: '🏛️',
            difficulty: 'hard',
            parentId: 'legal-foundations',
            children: [
              {
                id: 'sgb-v',
                name: 'SGB V - Krankenversicherung',
                description: 'Gesetzliche Krankenversicherung und Leistungen',
                icon: '🏥',
                difficulty: 'medium',
                parentId: 'social-law',
                children: [
                  {
                    id: 'home-nursing-care',
                    name: 'Häusliche Krankenpflege',
                    description: 'Krankenpflege im häuslichen Umfeld nach SGB V',
                    icon: '🏠',
                    difficulty: 'medium',
                    parentId: 'sgb-v'
                  },
                  {
                    id: 'treatment-care-sgb-v',
                    name: 'Behandlungspflege',
                    description: 'Medizinische Behandlungspflege als Kassenleistung',
                    icon: '💉',
                    difficulty: 'medium',
                    parentId: 'sgb-v'
                  },
                  {
                    id: 'basic-care-sgb-v',
                    name: 'Grundpflege',
                    description: 'Grundpflegerische Versorgung nach SGB V',
                    icon: '🛁',
                    difficulty: 'easy',
                    parentId: 'sgb-v'
                  },
                  {
                    id: 'respite-care-sgb-v',
                    name: 'Verhinderungspflege',
                    description: 'Ersatzpflege bei Verhinderung der Pflegeperson',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'sgb-v'
                  },
                  {
                    id: 'medical-aids',
                    name: 'Hilfsmittelversorgung',
                    description: 'Versorgung mit medizinischen Hilfsmitteln',
                    icon: '🦽',
                    difficulty: 'easy',
                    parentId: 'sgb-v'
                  }
                ]
              },
              {
                id: 'sgb-xi',
                name: 'SGB XI - Pflegeversicherung',
                description: 'Soziale Pflegeversicherung',
                icon: '👴',
                difficulty: 'hard',
                parentId: 'social-law',
                children: [
                  {
                    id: 'care-dependency-concept',
                    name: 'Pflegebedürftigkeitsbegriff',
                    description: 'Definition und Kriterien der Pflegebedürftigkeit',
                    icon: '📋',
                    difficulty: 'medium',
                    parentId: 'sgb-xi'
                  },
                  {
                    id: 'care-grades',
                    name: 'Pflegegrade (1-5)',
                    description: 'Einstufung in fünf Pflegegrade',
                    icon: '5️⃣',
                    difficulty: 'easy',
                    parentId: 'sgb-xi'
                  },
                  {
                    id: 'service-types',
                    name: 'Leistungsarten',
                    description: 'Verschiedene Leistungsformen der Pflegeversicherung',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'sgb-xi',
                    children: [
                      {
                        id: 'care-allowance',
                        name: 'Pflegegeld',
                        description: 'Geldleistung für selbst beschaffte Pflegehilfen',
                        icon: '💰',
                        difficulty: 'easy',
                        parentId: 'service-types'
                      },
                      {
                        id: 'care-benefits-in-kind',
                        name: 'Pflegesachleistung',
                        description: 'Sachleistungen durch professionelle Pflegedienste',
                        icon: '🏥',
                        difficulty: 'easy',
                        parentId: 'service-types'
                      },
                      {
                        id: 'combination-benefits',
                        name: 'Kombinationsleistung',
                        description: 'Kombination aus Pflegegeld und Sachleistung',
                        icon: '🔄',
                        difficulty: 'medium',
                        parentId: 'service-types'
                      },
                      {
                        id: 'day-night-care',
                        name: 'Tages-/Nachtpflege',
                        description: 'Teilstationäre Pflege tagsüber oder nachts',
                        icon: '🌅',
                        difficulty: 'easy',
                        parentId: 'service-types'
                      },
                      {
                        id: 'short-term-care',
                        name: 'Kurzzeitpflege',
                        description: 'Vorübergehende vollstationäre Pflege',
                        icon: '📅',
                        difficulty: 'easy',
                        parentId: 'service-types'
                      },
                      {
                        id: 'respite-care-sgb-xi',
                        name: 'Verhinderungspflege',
                        description: 'Ersatzpflege bei Ausfall der Pflegeperson',
                        icon: '🔄',
                        difficulty: 'medium',
                        parentId: 'service-types'
                      },
                      {
                        id: 'inpatient-care',
                        name: 'Vollstationäre Pflege',
                        description: 'Dauerhafte Pflege in Pflegeheimen',
                        icon: '🏢',
                        difficulty: 'easy',
                        parentId: 'service-types'
                      }
                    ]
                  },
                  {
                    id: 'additional-care-services',
                    name: 'Zusätzliche Betreuungsleistungen',
                    description: 'Ergänzende Betreuungs- und Entlastungsleistungen',
                    icon: '➕',
                    difficulty: 'medium',
                    parentId: 'sgb-xi'
                  },
                  {
                    id: 'quality-assessments',
                    name: 'Qualitätsprüfungen',
                    description: 'Prüfungen zur Qualitätssicherung in der Pflege',
                    icon: '✅',
                    difficulty: 'medium',
                    parentId: 'sgb-xi'
                  }
                ]
              },
              {
                id: 'sgb-xii',
                name: 'SGB XII - Sozialhilfe',
                description: 'Sozialhilfe als nachrangige Leistung',
                icon: '🤝',
                difficulty: 'medium',
                parentId: 'social-law',
                children: [
                  {
                    id: 'care-assistance',
                    name: 'Hilfe zur Pflege',
                    description: 'Sozialhilfe bei Pflegebedürftigkeit',
                    icon: '🆘',
                    difficulty: 'medium',
                    parentId: 'sgb-xii'
                  },
                  {
                    id: 'integration-assistance',
                    name: 'Eingliederungshilfe',
                    description: 'Hilfe zur Teilhabe für Menschen mit Behinderungen',
                    icon: '♿',
                    difficulty: 'medium',
                    parentId: 'sgb-xii'
                  },
                  {
                    id: 'basic-security',
                    name: 'Grundsicherung',
                    description: 'Grundsicherung im Alter und bei Erwerbsminderung',
                    icon: '👴',
                    difficulty: 'easy',
                    parentId: 'sgb-xii'
                  },
                  {
                    id: 'special-life-situations',
                    name: 'Hilfe in besonderen Lebenslagen',
                    description: 'Unterstützung in außergewöhnlichen Situationen',
                    icon: '🚨',
                    difficulty: 'medium',
                    parentId: 'sgb-xii'
                  }
                ]
              },
              {
                id: 'other-social-laws',
                name: 'Weitere Sozialgesetze',
                description: 'Andere relevante Sozialgesetzbücher',
                icon: '📚',
                difficulty: 'medium',
                parentId: 'social-law',
                children: [
                  {
                    id: 'sgb-ix',
                    name: 'SGB IX - Rehabilitation',
                    description: 'Rehabilitation und Teilhabe von Menschen mit Behinderungen',
                    icon: '♻️',
                    difficulty: 'medium',
                    parentId: 'other-social-laws'
                  },
                  {
                    id: 'sgb-vii',
                    name: 'SGB VII - Unfallversicherung',
                    description: 'Gesetzliche Unfallversicherung',
                    icon: '🚑',
                    difficulty: 'easy',
                    parentId: 'other-social-laws'
                  },
                  {
                    id: 'sgb-ii',
                    name: 'SGB II - Grundsicherung für Arbeitssuchende',
                    description: 'Arbeitslosengeld II und Sozialgeld',
                    icon: '💼',
                    difficulty: 'easy',
                    parentId: 'other-social-laws'
                  },
                  {
                    id: 'bshg',
                    name: 'BSHG - Bundessozialhilfegesetz',
                    description: 'Bundessozialhilfegesetz (historisch)',
                    icon: '📜',
                    difficulty: 'easy',
                    parentId: 'other-social-laws'
                  }
                ]
              }
            ]
          },
          {
            id: 'special-legal-areas',
            name: 'Besondere Rechtsgebiete',
            description: 'Spezielle Rechtsbereiche in der Pflege',
            icon: '⚖️',
            difficulty: 'hard',
            parentId: 'legal-foundations',
            children: [
              {
                id: 'guardianship-law',
                name: 'Betreuungsrecht',
                description: 'Rechtliche Betreuung von hilfsbedürftigen Erwachsenen',
                icon: '👥',
                difficulty: 'hard',
                parentId: 'special-legal-areas',
                children: [
                  {
                    id: 'guardianship-prerequisites',
                    name: 'Voraussetzungen',
                    description: 'Voraussetzungen für die Bestellung eines Betreuers',
                    icon: '📋',
                    difficulty: 'medium',
                    parentId: 'guardianship-law'
                  },
                  {
                    id: 'guardian-appointment',
                    name: 'Betreuerbestellung',
                    description: 'Verfahren zur Bestellung eines rechtlichen Betreuers',
                    icon: '👤',
                    difficulty: 'medium',
                    parentId: 'guardianship-law'
                  },
                  {
                    id: 'task-areas',
                    name: 'Aufgabenkreise',
                    description: 'Bestimmte Bereiche der rechtlichen Betreuung',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'guardianship-law'
                  },
                  {
                    id: 'consent-reservation',
                    name: 'Einwilligungsvorbehalt',
                    description: 'Vorbehalt der Zustimmung bei bestimmten Entscheidungen',
                    icon: '✋',
                    difficulty: 'hard',
                    parentId: 'guardianship-law'
                  },
                  {
                    id: 'guardianship-control',
                    name: 'Kontrolle',
                    description: 'Überwachung und Kontrolle der Betreuung',
                    icon: '👁️',
                    difficulty: 'medium',
                    parentId: 'guardianship-law'
                  }
                ]
              },
              {
                id: 'commitment-law',
                name: 'Unterbringungsrecht',
                description: 'Rechtliche Grundlagen für Unterbringung und Fixierung',
                icon: '🔒',
                difficulty: 'hard',
                parentId: 'special-legal-areas',
                children: [
                  {
                    id: 'freedom-restricting-measures',
                    name: 'Freiheitsentziehende Maßnahmen',
                    description: 'Maßnahmen, die die Bewegungsfreiheit einschränken',
                    icon: '⛓️',
                    difficulty: 'hard',
                    parentId: 'commitment-law'
                  },
                  {
                    id: 'psychkg',
                    name: 'PsychKG (Landesrecht)',
                    description: 'Psychisch-Kranken-Gesetze der Länder',
                    icon: '🧠',
                    difficulty: 'hard',
                    parentId: 'commitment-law'
                  },
                  {
                    id: 'judicial-approval',
                    name: 'Richterliche Genehmigung',
                    description: 'Erforderliche richterliche Genehmigung für Unterbringung',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'commitment-law'
                  },
                  {
                    id: 'fixation',
                    name: 'Fixierung',
                    description: 'Körperliche Fixierung als ultima ratio',
                    icon: '🔗',
                    difficulty: 'hard',
                    parentId: 'commitment-law'
                  },
                  {
                    id: 'commitment-documentation',
                    name: 'Dokumentation',
                    description: 'Pflicht zur Dokumentation freiheitsentziehender Maßnahmen',
                    icon: '📝',
                    difficulty: 'medium',
                    parentId: 'commitment-law'
                  }
                ]
              },
              {
                id: 'residential-care-law',
                name: 'Heimrecht',
                description: 'Rechtliche Regelungen für Pflegeheime',
                icon: '🏢',
                difficulty: 'medium',
                parentId: 'special-legal-areas',
                children: [
                  {
                    id: 'wbvg',
                    name: 'Wohn- und Betreuungsvertragsgesetz (WBVG)',
                    description: 'Bundesgesetz für Wohn- und Betreuungsverträge',
                    icon: '📋',
                    difficulty: 'medium',
                    parentId: 'residential-care-law'
                  },
                  {
                    id: 'state-residential-laws',
                    name: 'Landesheimgesetze',
                    description: 'Länderspezifische Heimgesetze',
                    icon: '🏛️',
                    difficulty: 'medium',
                    parentId: 'residential-care-law'
                  },
                  {
                    id: 'residential-supervision',
                    name: 'Heimaufsicht',
                    description: 'Behördliche Überwachung von Pflegeheimen',
                    icon: '👁️',
                    difficulty: 'easy',
                    parentId: 'residential-care-law'
                  },
                  {
                    id: 'residents-council',
                    name: 'Bewohnerbeirat',
                    description: 'Interessenvertretung der Heimbewohner',
                    icon: '🗳️',
                    difficulty: 'easy',
                    parentId: 'residential-care-law'
                  },
                  {
                    id: 'residential-quality-assessments',
                    name: 'Qualitätsprüfungen',
                    description: 'Regelmäßige Qualitätsprüfungen in Heimen',
                    icon: '✅',
                    difficulty: 'medium',
                    parentId: 'residential-care-law'
                  }
                ]
              },
              {
                id: 'data-protection',
                name: 'Datenschutz',
                description: 'Datenschutz und Schweigepflicht in der Pflege',
                icon: '🔐',
                difficulty: 'medium',
                parentId: 'special-legal-areas',
                children: [
                  {
                    id: 'gdpr',
                    name: 'DSGVO',
                    description: 'Datenschutz-Grundverordnung',
                    icon: '🇪🇺',
                    difficulty: 'medium',
                    parentId: 'data-protection'
                  },
                  {
                    id: 'confidentiality-obligation',
                    name: 'Schweigepflicht (§ 203 StGB)',
                    description: 'Strafrechtliche Schweigepflicht für Pflegekräfte',
                    icon: '🤐',
                    difficulty: 'medium',
                    parentId: 'data-protection'
                  },
                  {
                    id: 'patient-confidentiality',
                    name: 'Patientengeheimnis',
                    description: 'Schutz persönlicher Patientendaten',
                    icon: '🔒',
                    difficulty: 'easy',
                    parentId: 'data-protection'
                  },
                  {
                    id: 'information-sharing',
                    name: 'Informationsweitergabe',
                    description: 'Regelungen zur Weitergabe von Patienteninformationen',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'data-protection'
                  },
                  {
                    id: 'file-access',
                    name: 'Akteneinsicht',
                    description: 'Recht auf Einsicht in Patientenakten',
                    icon: '👁️',
                    difficulty: 'easy',
                    parentId: 'data-protection'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'nursing-ethics',
        name: 'PFLEGEETHIK',
        description: 'Ethische Grundlagen und Herausforderungen in der Pflege',
        icon: '🤝',
        difficulty: 'hard',
        parentId: 'nursing-law-ethics',
        children: [
          {
            id: 'ethical-principles',
            name: 'Ethische Grundprinzipien',
            description: 'Fundamentale ethische Prinzipien in der Pflege',
            icon: '⚖️',
            difficulty: 'hard',
            parentId: 'nursing-ethics',
            children: [
              {
                id: 'principlism',
                name: 'Prinzipienethik (Beauchamp & Childress)',
                description: 'Die vier Grundprinzipien der biomedizinischen Ethik',
                icon: '4️⃣',
                difficulty: 'hard',
                parentId: 'ethical-principles',
                children: [
                  {
                    id: 'autonomy',
                    name: 'Autonomie',
                    description: 'Achtung der Selbstbestimmung des Patienten',
                    icon: '🗽',
                    difficulty: 'medium',
                    parentId: 'principlism',
                    children: [
                      {
                        id: 'self-determination',
                        name: 'Selbstbestimmung',
                        description: 'Recht auf eigenverantwortliche Entscheidungen',
                        icon: '🎯',
                        difficulty: 'easy',
                        parentId: 'autonomy'
                      },
                      {
                        id: 'informed-consent',
                        name: 'Informierte Einwilligung',
                        description: 'Zustimmung nach umfassender Aufklärung',
                        icon: '📋',
                        difficulty: 'medium',
                        parentId: 'autonomy'
                      },
                      {
                        id: 'truth-telling',
                        name: 'Wahrheit am Krankenbett',
                        description: 'Ehrliche und angemessene Kommunikation',
                        icon: '💬',
                        difficulty: 'medium',
                        parentId: 'autonomy'
                      },
                      {
                        id: 'advance-directives',
                        name: 'Vorausverfügungen',
                        description: 'Vorab geäußerte Behandlungswünsche',
                        icon: '📜',
                        difficulty: 'medium',
                        parentId: 'autonomy'
                      }
                    ]
                  },
                  {
                    id: 'beneficence',
                    name: 'Benefizienz (Fürsorge)',
                    description: 'Verpflichtung zum Wohltun',
                    icon: '❤️',
                    difficulty: 'medium',
                    parentId: 'principlism',
                    children: [
                      {
                        id: 'doing-good',
                        name: 'Wohltun',
                        description: 'Aktive Förderung des Patientenwohls',
                        icon: '🌟',
                        difficulty: 'easy',
                        parentId: 'beneficence'
                      },
                      {
                        id: 'best-interests',
                        name: 'Beste Interessen',
                        description: 'Handeln im besten Interesse des Patienten',
                        icon: '🎯',
                        difficulty: 'medium',
                        parentId: 'beneficence'
                      },
                      {
                        id: 'quality-of-life',
                        name: 'Lebensqualität',
                        description: 'Berücksichtigung der subjektiven Lebensqualität',
                        icon: '🌈',
                        difficulty: 'medium',
                        parentId: 'beneficence'
                      },
                      {
                        id: 'palliative-care-ethics',
                        name: 'Palliative Care',
                        description: 'Ethische Aspekte der palliativen Versorgung',
                        icon: '🕊️',
                        difficulty: 'hard',
                        parentId: 'beneficence'
                      }
                    ]
                  },
                  {
                    id: 'non-maleficence',
                    name: 'Non-Malefizienz',
                    description: 'Grundsatz des Nicht-Schadens',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'principlism',
                    children: [
                      {
                        id: 'do-no-harm',
                        name: 'Nicht schaden',
                        description: 'Vermeidung von Schäden durch Handeln oder Unterlassen',
                        icon: '⛔',
                        difficulty: 'easy',
                        parentId: 'non-maleficence'
                      },
                      {
                        id: 'risk-benefit-assessment',
                        name: 'Risiko-Nutzen-Abwägung',
                        description: 'Sorgfältige Abwägung von Nutzen und Risiken',
                        icon: '⚖️',
                        difficulty: 'medium',
                        parentId: 'non-maleficence'
                      },
                      {
                        id: 'side-effects',
                        name: 'Nebenwirkungen',
                        description: 'Berücksichtigung unerwünschter Behandlungsfolgen',
                        icon: '⚠️',
                        difficulty: 'easy',
                        parentId: 'non-maleficence'
                      },
                      {
                        id: 'error-culture',
                        name: 'Fehlerkultur',
                        description: 'Konstruktiver Umgang mit Fehlern',
                        icon: '🔄',
                        difficulty: 'medium',
                        parentId: 'non-maleficence'
                      }
                    ]
                  },
                  {
                    id: 'justice',
                    name: 'Gerechtigkeit',
                    description: 'Faire Verteilung von Nutzen und Lasten',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'principlism',
                    children: [
                      {
                        id: 'distributive-justice',
                        name: 'Verteilungsgerechtigkeit',
                        description: 'Gerechte Verteilung von Ressourcen',
                        icon: '📊',
                        difficulty: 'hard',
                        parentId: 'justice'
                      },
                      {
                        id: 'equal-treatment',
                        name: 'Gleichbehandlung',
                        description: 'Gleiche Behandlung gleicher Fälle',
                        icon: '🟰',
                        difficulty: 'medium',
                        parentId: 'justice'
                      },
                      {
                        id: 'resource-allocation',
                        name: 'Ressourcenallokation',
                        description: 'Zuteilung begrenzter Ressourcen',
                        icon: '📦',
                        difficulty: 'hard',
                        parentId: 'justice'
                      },
                      {
                        id: 'prioritization',
                        name: 'Priorisierung',
                        description: 'Festlegung von Behandlungsprioritäten',
                        icon: '🔢',
                        difficulty: 'hard',
                        parentId: 'justice'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'care-ethics',
                name: 'Care-Ethik',
                description: 'Ethik der Fürsorge und Beziehungen',
                icon: '🤗',
                difficulty: 'hard',
                parentId: 'ethical-principles',
                children: [
                  {
                    id: 'relationship-ethics',
                    name: 'Beziehungsethik',
                    description: 'Ethik zwischenmenschlicher Beziehungen',
                    icon: '🔗',
                    difficulty: 'medium',
                    parentId: 'care-ethics'
                  },
                  {
                    id: 'responsibility-ethics',
                    name: 'Verantwortungsethik',
                    description: 'Ethik der Verantwortung für andere',
                    icon: '🤲',
                    difficulty: 'medium',
                    parentId: 'care-ethics'
                  },
                  {
                    id: 'contextuality',
                    name: 'Kontextbezogenheit',
                    description: 'Berücksichtigung des individuellen Kontexts',
                    icon: '🎭',
                    difficulty: 'hard',
                    parentId: 'care-ethics'
                  },
                  {
                    id: 'narrative-ethics',
                    name: 'Narrative Ethik',
                    description: 'Bedeutung von Lebensgeschichten',
                    icon: '📖',
                    difficulty: 'hard',
                    parentId: 'care-ethics'
                  },
                  {
                    id: 'feminist-ethics',
                    name: 'Feministische Ethik',
                    description: 'Feministische Perspektiven auf Pflegeethik',
                    icon: '♀️',
                    difficulty: 'hard',
                    parentId: 'care-ethics'
                  }
                ]
              },
              {
                id: 'virtue-ethics',
                name: 'Tugendethik',
                description: 'Charaktereigenschaften und Tugenden in der Pflege',
                icon: '💎',
                difficulty: 'medium',
                parentId: 'ethical-principles',
                children: [
                  {
                    id: 'nursing-virtues',
                    name: 'Pflegetugenden',
                    description: 'Spezifische Tugenden für Pflegekräfte',
                    icon: '⭐',
                    difficulty: 'medium',
                    parentId: 'virtue-ethics'
                  },
                  {
                    id: 'compassion',
                    name: 'Mitgefühl',
                    description: 'Empathische Anteilnahme am Leid anderer',
                    icon: '💙',
                    difficulty: 'easy',
                    parentId: 'virtue-ethics'
                  },
                  {
                    id: 'truthfulness',
                    name: 'Wahrhaftigkeit',
                    description: 'Aufrichtigkeit in Kommunikation und Handeln',
                    icon: '✨',
                    difficulty: 'easy',
                    parentId: 'virtue-ethics'
                  },
                  {
                    id: 'integrity',
                    name: 'Integrität',
                    description: 'Übereinstimmung von Werten und Handeln',
                    icon: '🎯',
                    difficulty: 'medium',
                    parentId: 'virtue-ethics'
                  },
                  {
                    id: 'professionalism',
                    name: 'Professionalität',
                    description: 'Professionelle Haltung und Kompetenz',
                    icon: '👔',
                    difficulty: 'medium',
                    parentId: 'virtue-ethics'
                  }
                ]
              }
            ]
          },
          {
            id: 'ethical-challenges',
            name: 'Ethische Herausforderungen',
            description: 'Komplexe ethische Dilemmas in der Pflege',
            icon: '🤔',
            difficulty: 'hard',
            parentId: 'nursing-ethics',
            children: [
              {
                id: 'beginning-of-life',
                name: 'Lebensanfang',
                description: 'Ethische Fragen am Lebensbeginn',
                icon: '👶',
                difficulty: 'hard',
                parentId: 'ethical-challenges',
                children: [
                  {
                    id: 'prenatal-diagnosis',
                    name: 'Pränatale Diagnostik',
                    description: 'Ethische Aspekte vorgeburtlicher Untersuchungen',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'beginning-of-life'
                  },
                  {
                    id: 'abortion',
                    name: 'Schwangerschaftsabbruch',
                    description: 'Ethische Dilemmata bei Schwangerschaftsabbrüchen',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'beginning-of-life'
                  },
                  {
                    id: 'premature-infants',
                    name: 'Frühgeborene',
                    description: 'Ethische Entscheidungen bei Frühgeburtlichkeit',
                    icon: '🤱',
                    difficulty: 'hard',
                    parentId: 'beginning-of-life'
                  },
                  {
                    id: 'neonatology',
                    name: 'Neonatologie',
                    description: 'Ethik in der Neugeborenenmedizin',
                    icon: '🏥',
                    difficulty: 'hard',
                    parentId: 'beginning-of-life'
                  },
                  {
                    id: 'parent-counseling',
                    name: 'Elternberatung',
                    description: 'Ethische Aspekte der Elternberatung',
                    icon: '👨‍👩‍👧‍👦',
                    difficulty: 'medium',
                    parentId: 'beginning-of-life'
                  }
                ]
              },
              {
                id: 'end-of-life',
                name: 'Lebensende',
                description: 'Ethische Fragen am Lebensende',
                icon: '🕊️',
                difficulty: 'hard',
                parentId: 'ethical-challenges',
                children: [
                  {
                    id: 'end-of-life-care',
                    name: 'Sterbebegleitung',
                    description: 'Ethische Aspekte der Sterbebegleitung',
                    icon: '🤝',
                    difficulty: 'medium',
                    parentId: 'end-of-life'
                  },
                  {
                    id: 'therapy-limitation',
                    name: 'Therapiebegrenzung',
                    description: 'Ethische Entscheidungen zur Therapiebegrenzung',
                    icon: '⏸️',
                    difficulty: 'hard',
                    parentId: 'end-of-life'
                  },
                  {
                    id: 'therapy-withdrawal',
                    name: 'Therapieabbruch',
                    description: 'Beendigung lebensverlängernder Maßnahmen',
                    icon: '⏹️',
                    difficulty: 'hard',
                    parentId: 'end-of-life'
                  },
                  {
                    id: 'palliative-sedation',
                    name: 'Palliative Sedierung',
                    description: 'Ethische Aspekte der palliativen Sedierung',
                    icon: '😴',
                    difficulty: 'hard',
                    parentId: 'end-of-life'
                  },
                  {
                    id: 'euthanasia-debate',
                    name: 'Sterbehilfe-Debatte',
                    description: 'Diskussion um aktive und passive Sterbehilfe',
                    icon: '🗣️',
                    difficulty: 'hard',
                    parentId: 'end-of-life'
                  },
                  {
                    id: 'patient-directive',
                    name: 'Patientenverfügung',
                    description: 'Ethische und rechtliche Aspekte von Patientenverfügungen',
                    icon: '📋',
                    difficulty: 'medium',
                    parentId: 'end-of-life'
                  }
                ]
              },
              {
                id: 'autonomy-vs-care',
                name: 'Autonomie vs. Fürsorge',
                description: 'Spannungsfeld zwischen Selbstbestimmung und Fürsorge',
                icon: '⚖️',
                difficulty: 'hard',
                parentId: 'ethical-challenges',
                children: [
                  {
                    id: 'compliance-adherence',
                    name: 'Compliance/Adherence',
                    description: 'Therapietreue und Patientenautonomie',
                    icon: '💊',
                    difficulty: 'medium',
                    parentId: 'autonomy-vs-care'
                  },
                  {
                    id: 'coercive-measures',
                    name: 'Zwangsmaßnahmen',
                    description: 'Ethik von Zwangsmaßnahmen',
                    icon: '⛓️',
                    difficulty: 'hard',
                    parentId: 'autonomy-vs-care'
                  },
                  {
                    id: 'deprivation-of-liberty',
                    name: 'Freiheitsentziehung',
                    description: 'Ethische Bewertung freiheitsentziehender Maßnahmen',
                    icon: '🔒',
                    difficulty: 'hard',
                    parentId: 'autonomy-vs-care'
                  },
                  {
                    id: 'self-endangerment',
                    name: 'Selbstgefährdung',
                    description: 'Umgang mit selbstgefährdenden Patienten',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'autonomy-vs-care'
                  },
                  {
                    id: 'caring-dominance',
                    name: 'Fürsorgliche Übermacht',
                    description: 'Grenzen fürsorglichen Handelns',
                    icon: '🤗',
                    difficulty: 'hard',
                    parentId: 'autonomy-vs-care'
                  }
                ]
              },
              {
                id: 'cultural-religious-aspects',
                name: 'Kulturelle & religiöse Aspekte',
                description: 'Ethik in multikulturellen Kontexten',
                icon: '🌍',
                difficulty: 'medium',
                parentId: 'ethical-challenges',
                children: [
                  {
                    id: 'culture-sensitive-care',
                    name: 'Kultursensible Pflege',
                    description: 'Berücksichtigung kultureller Unterschiede',
                    icon: '🌐',
                    difficulty: 'medium',
                    parentId: 'cultural-religious-aspects'
                  },
                  {
                    id: 'religious-needs',
                    name: 'Religiöse Bedürfnisse',
                    description: 'Achtung religiöser Überzeugungen',
                    icon: '🙏',
                    difficulty: 'medium',
                    parentId: 'cultural-religious-aspects'
                  },
                  {
                    id: 'value-conflicts',
                    name: 'Wertekonflikte',
                    description: 'Umgang mit widersprüchlichen Wertvorstellungen',
                    icon: '💥',
                    difficulty: 'hard',
                    parentId: 'cultural-religious-aspects'
                  },
                  {
                    id: 'diversity-management',
                    name: 'Diversity Management',
                    description: 'Management von Vielfalt in der Pflege',
                    icon: '🌈',
                    difficulty: 'medium',
                    parentId: 'cultural-religious-aspects'
                  },
                  {
                    id: 'intercultural-competence',
                    name: 'Interkulturelle Kompetenz',
                    description: 'Entwicklung interkultureller Fähigkeiten',
                    icon: '🤝',
                    difficulty: 'medium',
                    parentId: 'cultural-religious-aspects'
                  }
                ]
              }
            ]
          },
          {
            id: 'ethical-decision-making',
            name: 'Ethische Entscheidungsfindung',
            description: 'Methoden und Instrumente ethischer Entscheidungen',
            icon: '🎯',
            difficulty: 'hard',
            parentId: 'nursing-ethics',
            children: [
              {
                id: 'ethics-consultation',
                name: 'Ethikberatung',
                description: 'Strukturierte ethische Beratung',
                icon: '💬',
                difficulty: 'medium',
                parentId: 'ethical-decision-making',
                children: [
                  {
                    id: 'ethics-committee',
                    name: 'Ethikkomitee',
                    description: 'Institutionelle Ethikkomitees',
                    icon: '👥',
                    difficulty: 'medium',
                    parentId: 'ethics-consultation'
                  },
                  {
                    id: 'ethics-case-discussion',
                    name: 'Ethische Fallbesprechung',
                    description: 'Strukturierte Besprechung ethischer Dilemmata',
                    icon: '🗣️',
                    difficulty: 'medium',
                    parentId: 'ethics-consultation'
                  },
                  {
                    id: 'ethics-consultation-service',
                    name: 'Ethikkonsil',
                    description: 'Professionelle ethische Beratung',
                    icon: '🩺',
                    difficulty: 'medium',
                    parentId: 'ethics-consultation'
                  },
                  {
                    id: 'ethics-rounds',
                    name: 'Ethikvisite',
                    description: 'Ethische Reflexion in der Patientenversorgung',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'ethics-consultation'
                  }
                ]
              },
              {
                id: 'decision-models',
                name: 'Entscheidungsmodelle',
                description: 'Strukturierte Modelle für ethische Entscheidungen',
                icon: '🗺️',
                difficulty: 'hard',
                parentId: 'ethical-decision-making',
                children: [
                  {
                    id: 'six-step-model',
                    name: '6-Schritte-Modell',
                    description: 'Systematisches sechsstufiges Entscheidungsmodell',
                    icon: '6️⃣',
                    difficulty: 'medium',
                    parentId: 'decision-models'
                  },
                  {
                    id: 'metap-model',
                    name: 'METAP-Modell',
                    description: 'Strukturiertes ethisches Entscheidungsmodell',
                    icon: '📊',
                    difficulty: 'hard',
                    parentId: 'decision-models'
                  },
                  {
                    id: 'nijmegen-method',
                    name: 'Nimwegener Methode',
                    description: 'Niederländische Methode ethischer Reflexion',
                    icon: '🇳🇱',
                    difficulty: 'hard',
                    parentId: 'decision-models'
                  },
                  {
                    id: 'principlism-model',
                    name: 'Principlism',
                    description: 'Anwendung der vier Prinzipien',
                    icon: '4️⃣',
                    difficulty: 'medium',
                    parentId: 'decision-models'
                  }
                ]
              },
              {
                id: 'ethics-instruments',
                name: 'Instrumente',
                description: 'Praktische Instrumente ethischer Reflexion',
                icon: '🛠️',
                difficulty: 'medium',
                parentId: 'ethical-decision-making',
                children: [
                  {
                    id: 'ethical-reflection',
                    name: 'Ethische Reflexion',
                    description: 'Systematische Reflexion ethischer Fragen',
                    icon: '🤔',
                    difficulty: 'medium',
                    parentId: 'ethics-instruments'
                  },
                  {
                    id: 'supervision',
                    name: 'Supervision',
                    description: 'Professionelle Supervision bei ethischen Fragen',
                    icon: '👨‍🏫',
                    difficulty: 'medium',
                    parentId: 'ethics-instruments'
                  },
                  {
                    id: 'peer-consultation',
                    name: 'Kollegiale Beratung',
                    description: 'Beratung durch Kollegen',
                    icon: '👥',
                    difficulty: 'easy',
                    parentId: 'ethics-instruments'
                  },
                  {
                    id: 'moral-distress',
                    name: 'Moral Distress',
                    description: 'Umgang mit moralischem Stress',
                    icon: '😔',
                    difficulty: 'hard',
                    parentId: 'ethics-instruments'
                  }
                ]
              }
            ]
          },
          {
            id: 'professional-codes',
            name: 'Berufskodizes',
            description: 'Ethische Kodizes und Richtlinien für Pflegekräfte',
            icon: '📜',
            difficulty: 'medium',
            parentId: 'nursing-ethics',
            children: [
              {
                id: 'icn-code',
                name: 'ICN-Ethikkodex',
                description: 'Internationaler Ethikkodex für Pflegende',
                icon: '🌍',
                difficulty: 'medium',
                parentId: 'professional-codes',
                children: [
                  {
                    id: 'nurses-and-people',
                    name: 'Pflegende und Menschen',
                    description: 'Verantwortung gegenüber Pflegebedürftigen',
                    icon: '👤',
                    difficulty: 'easy',
                    parentId: 'icn-code'
                  },
                  {
                    id: 'nurses-and-practice',
                    name: 'Pflegende und Praxis',
                    description: 'Verantwortung in der Pflegepraxis',
                    icon: '🏥',
                    difficulty: 'easy',
                    parentId: 'icn-code'
                  },
                  {
                    id: 'nurses-and-profession',
                    name: 'Pflegende und Profession',
                    description: 'Verantwortung für den Berufsstand',
                    icon: '👩‍⚕️',
                    difficulty: 'medium',
                    parentId: 'icn-code'
                  },
                  {
                    id: 'nurses-and-colleagues',
                    name: 'Pflegende und Mitarbeitende',
                    description: 'Verantwortung gegenüber Kollegen',
                    icon: '🤝',
                    difficulty: 'easy',
                    parentId: 'icn-code'
                  }
                ]
              },
              {
                id: 'german-nursing-council',
                name: 'Deutscher Pflegerat',
                description: 'Deutsche Berufsorganisation der Pflege',
                icon: '🇩🇪',
                difficulty: 'medium',
                parentId: 'professional-codes',
                children: [
                  {
                    id: 'professional-regulations',
                    name: 'Berufsordnung',
                    description: 'Regelungen für die Berufsausübung',
                    icon: '📋',
                    difficulty: 'medium',
                    parentId: 'german-nursing-council'
                  },
                  {
                    id: 'ethical-principles-dpr',
                    name: 'Ethische Grundsätze',
                    description: 'Grundsätze des Deutschen Pflegerats',
                    icon: '⚖️',
                    difficulty: 'medium',
                    parentId: 'german-nursing-council'
                  },
                  {
                    id: 'professional-standards',
                    name: 'Professionelle Standards',
                    description: 'Standards für professionelle Pflegepraxis',
                    icon: '📏',
                    difficulty: 'medium',
                    parentId: 'german-nursing-council'
                  }
                ]
              },
              {
                id: 'ethics-charter',
                name: 'Ethik-Charta',
                description: 'Charta für eine kultursensible Altenpflege',
                icon: '📃',
                difficulty: 'medium',
                parentId: 'professional-codes',
                children: [
                  {
                    id: 'care-and-support',
                    name: 'Pflege und Betreuung',
                    description: 'Ethische Grundsätze für Pflege und Betreuung',
                    icon: '🤗',
                    difficulty: 'easy',
                    parentId: 'ethics-charter'
                  },
                  {
                    id: 'human-dignity',
                    name: 'Menschenwürde',
                    description: 'Achtung der Menschenwürde',
                    icon: '👑',
                    difficulty: 'easy',
                    parentId: 'ethics-charter'
                  },
                  {
                    id: 'quality-of-life-charter',
                    name: 'Lebensqualität',
                    description: 'Förderung der Lebensqualität',
                    icon: '🌟',
                    difficulty: 'easy',
                    parentId: 'ethics-charter'
                  },
                  {
                    id: 'self-determination-charter',
                    name: 'Selbstbestimmung',
                    description: 'Respekt vor der Selbstbestimmung',
                    icon: '🗽',
                    difficulty: 'easy',
                    parentId: 'ethics-charter'
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