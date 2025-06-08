import { Category } from './medical-basics'

export const pathologyCategories: Category[] = [
  {
    id: 'pathology',
    name: 'KRANKHEITSLEHRE',
    description: 'Krankheiten und pathologische Prozesse',
    icon: '🦠',
    difficulty: 'hard',
    children: [
      {
        id: 'cardiovascular-diseases',
        name: 'HERZ-KREISLAUF-ERKRANKUNGEN',
        description: 'Kardiovaskuläre Pathologie',
        icon: '💔',
        difficulty: 'hard',
        parentId: 'pathology',
        children: [
          {
            id: 'coronary-heart-disease',
            name: 'Koronare Herzkrankheit (KHK)',
            description: 'Atherosklerose und koronare Syndrome',
            icon: '🫀',
            difficulty: 'hard',
            parentId: 'cardiovascular-diseases',
            children: [
              {
                id: 'atherosclerosis',
                name: 'Atherosklerose',
                description: 'Arterienverkalkung und Plaquebildung',
                icon: '🧱',
                difficulty: 'hard',
                parentId: 'coronary-heart-disease',
                children: [
                  {
                    id: 'atherosclerosis-pathogenesis',
                    name: 'Pathogenese (Endotheldysfunktion)',
                    description: 'Entstehung der Atherosklerose',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'atherosclerosis'
                  },
                  {
                    id: 'risk-factors',
                    name: 'Risikofaktoren (modifizierbar/nicht modifizierbar)',
                    description: 'Kardiovaskuläre Risikofaktoren',
                    icon: '⚠️',
                    difficulty: 'medium',
                    parentId: 'atherosclerosis'
                  },
                  {
                    id: 'plaque-formation',
                    name: 'Plaquebildung & -ruptur',
                    description: 'Entstehung und Komplikationen atherosklerotischer Plaques',
                    icon: '💥',
                    difficulty: 'hard',
                    parentId: 'atherosclerosis'
                  },
                  {
                    id: 'stenosis-grades',
                    name: 'Stenosegrade (50%, 75%, 90%)',
                    description: 'Einteilung der Gefäßverengung',
                    icon: '📏',
                    difficulty: 'medium',
                    parentId: 'atherosclerosis'
                  },
                  {
                    id: 'plaque-stability',
                    name: 'Vulnerable vs. stabile Plaques',
                    description: 'Plaquecharakteristika und Rupturrisiko',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'atherosclerosis'
                  },
                  {
                    id: 'collateral-circulation',
                    name: 'Kollateralkreislauf',
                    description: 'Umgehungskreisläufe bei Stenosen',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'atherosclerosis'
                  }
                ]
              },
              {
                id: 'angina-pectoris',
                name: 'Angina Pectoris',
                description: 'Brustschmerzen bei Myokardischämie',
                icon: '💔',
                difficulty: 'medium',
                parentId: 'coronary-heart-disease',
                children: [
                  {
                    id: 'stable-angina',
                    name: 'Stabile Angina (Belastungsangina)',
                    description: 'Belastungsabhängige Brustschmerzen',
                    icon: '🏃',
                    difficulty: 'medium',
                    parentId: 'angina-pectoris'
                  },
                  {
                    id: 'unstable-angina',
                    name: 'Instabile Angina (Ruhe-/Crescendo-Angina)',
                    description: 'Progrediente oder Ruhe-Angina',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'angina-pectoris'
                  },
                  {
                    id: 'prinzmetal-angina',
                    name: 'Prinzmetal-Angina (Koronarspasmus)',
                    description: 'Vasospastische Angina',
                    icon: '🌪️',
                    difficulty: 'hard',
                    parentId: 'angina-pectoris'
                  },
                  {
                    id: 'angina-symptoms-diagnosis',
                    name: 'Symptomatik & Diagnostik',
                    description: 'Klinische Präsentation und Diagnoseverfahren',
                    icon: '🩺',
                    difficulty: 'medium',
                    parentId: 'angina-pectoris'
                  },
                  {
                    id: 'ccs-classification',
                    name: 'CCS-Klassifikation (Canadian Cardiovascular Society)',
                    description: 'Schweregrad-Einteilung der Angina',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'angina-pectoris'
                  },
                  {
                    id: 'walk-through',
                    name: 'Walk-through-Phänomen',
                    description: 'Besserung der Angina bei fortgesetzter Belastung',
                    icon: '🚶',
                    difficulty: 'medium',
                    parentId: 'angina-pectoris'
                  }
                ]
              },
              {
                id: 'acute-coronary-syndrome',
                name: 'Akutes Koronarsyndrom',
                description: 'STEMI, NSTEMI und instabile Angina',
                icon: '🚨',
                difficulty: 'hard',
                parentId: 'coronary-heart-disease',
                children: [
                  {
                    id: 'stemi',
                    name: 'STEMI (ST-Hebungs-Infarkt)',
                    description: 'Myokardinfarkt mit ST-Hebung',
                    icon: '📈',
                    difficulty: 'hard',
                    parentId: 'acute-coronary-syndrome'
                  },
                  {
                    id: 'nstemi',
                    name: 'NSTEMI (Nicht-ST-Hebungs-Infarkt)',
                    description: 'Myokardinfarkt ohne ST-Hebung',
                    icon: '📊',
                    difficulty: 'hard',
                    parentId: 'acute-coronary-syndrome'
                  },
                  {
                    id: 'unstable-angina-acs',
                    name: 'Instabile Angina',
                    description: 'Akute Koronarinsuffizienz ohne Nekrose',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'acute-coronary-syndrome'
                  },
                  {
                    id: 'cardiac-biomarkers',
                    name: 'Troponin & CK-MB',
                    description: 'Herzspezifische Biomarker',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'acute-coronary-syndrome'
                  },
                  {
                    id: 'grace-score',
                    name: 'GRACE-Score',
                    description: 'Risikostratifikation bei ACS',
                    icon: '🎯',
                    difficulty: 'medium',
                    parentId: 'acute-coronary-syndrome'
                  },
                  {
                    id: 'killip-classification',
                    name: 'Killip-Klassifikation',
                    description: 'Herzinsuffizienz-Stadium bei Infarkt',
                    icon: '💔',
                    difficulty: 'medium',
                    parentId: 'acute-coronary-syndrome'
                  }
                ]
              }
            ]
          },
          {
            id: 'heart-failure',
            name: 'Herzinsuffizienz',
            description: 'Eingeschränkte Herzpumpfunktion',
            icon: '💔',
            difficulty: 'hard',
            parentId: 'cardiovascular-diseases',
            children: [
              {
                id: 'hf-classification',
                name: 'Klassifikation',
                description: 'Einteilung der Herzinsuffizienz',
                icon: '📋',
                difficulty: 'medium',
                parentId: 'heart-failure',
                children: [
                  {
                    id: 'systolic-diastolic-hf',
                    name: 'Systolische/diastolische Herzinsuffizienz',
                    description: 'Pumpversagen vs. Füllungsstörung',
                    icon: '💓',
                    difficulty: 'medium',
                    parentId: 'hf-classification'
                  },
                  {
                    id: 'hf-ef-types',
                    name: 'HFrEF/HFpEF/HFmrEF',
                    description: 'Einteilung nach Ejektionsfraktion',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'hf-classification'
                  },
                  {
                    id: 'right-left-hf',
                    name: 'Rechts-/Linksherzinsuffizienz',
                    description: 'Seitenspezifische Herzinsuffizienz',
                    icon: '↔️',
                    difficulty: 'medium',
                    parentId: 'hf-classification'
                  },
                  {
                    id: 'nyha-classification',
                    name: 'NYHA-Klassifikation (I-IV)',
                    description: 'Funktionsklassen der Herzinsuffizienz',
                    icon: '🏃',
                    difficulty: 'easy',
                    parentId: 'hf-classification'
                  },
                  {
                    id: 'acc-aha-stages',
                    name: 'ACC/AHA-Stadien (A-D)',
                    description: 'Stadien der Herzinsuffizienz-Entwicklung',
                    icon: '📈',
                    difficulty: 'medium',
                    parentId: 'hf-classification'
                  },
                  {
                    id: 'acute-chronic-hf',
                    name: 'Akute/chronische Herzinsuffizienz',
                    description: 'Zeitlicher Verlauf der Herzinsuffizienz',
                    icon: '⏰',
                    difficulty: 'easy',
                    parentId: 'hf-classification'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'respiratory-diseases',
        name: 'ATEMWEGSERKRANKUNGEN',
        description: 'Erkrankungen der Atemwege und Lunge',
        icon: '🫁',
        difficulty: 'hard',
        parentId: 'pathology',
        children: [
          {
            id: 'obstructive-diseases',
            name: 'Obstruktive Lungenerkrankungen',
            description: 'Atemwegsobstruktion und Überblähung',
            icon: '🌪️',
            difficulty: 'hard',
            parentId: 'respiratory-diseases',
            children: [
              {
                id: 'copd',
                name: 'COPD (Chronic Obstructive Pulmonary Disease)',
                description: 'Chronisch obstruktive Lungenerkrankung',
                icon: '🚭',
                difficulty: 'hard',
                parentId: 'obstructive-diseases',
                children: [
                  {
                    id: 'copd-definition',
                    name: 'Definition & Epidemiologie',
                    description: 'COPD-Charakteristika und Häufigkeit',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'copd'
                  },
                  {
                    id: 'copd-etiology',
                    name: 'Ätiologie (Rauchen 90%, α1-Antitrypsin-Mangel)',
                    description: 'Ursachen der COPD',
                    icon: '🚬',
                    difficulty: 'medium',
                    parentId: 'copd'
                  },
                  {
                    id: 'copd-pathophysiology',
                    name: 'Pathophysiologie',
                    description: 'Krankheitsmechanismen bei COPD',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'copd',
                    children: [
                      {
                        id: 'chronic-bronchitis',
                        name: 'Chronische Bronchitis',
                        description: 'Entzündung der Bronchien',
                        icon: '🌿',
                        difficulty: 'medium',
                        parentId: 'copd-pathophysiology'
                      },
                      {
                        id: 'emphysema',
                        name: 'Lungenemphysem (zentrilobulär/panlobulär)',
                        description: 'Alveolarwanddestruktion',
                        icon: '🫧',
                        difficulty: 'medium',
                        parentId: 'copd-pathophysiology'
                      },
                      {
                        id: 'airway-obstruction',
                        name: 'Atemwegsobstruktion',
                        description: 'Verengung der Atemwege',
                        icon: '🚫',
                        difficulty: 'medium',
                        parentId: 'copd-pathophysiology'
                      },
                      {
                        id: 'gas-exchange-impairment',
                        name: 'Gasaustauschstörung',
                        description: 'Beeinträchtigte O2/CO2-Austausch',
                        icon: '💨',
                        difficulty: 'medium',
                        parentId: 'copd-pathophysiology'
                      },
                      {
                        id: 'systemic-inflammation',
                        name: 'Systemische Inflammation',
                        description: 'Entzündungsreaktion im ganzen Körper',
                        icon: '🔥',
                        difficulty: 'hard',
                        parentId: 'copd-pathophysiology'
                      }
                    ]
                  },
                  {
                    id: 'gold-classification',
                    name: 'GOLD-Klassifikation (1-4, A-D)',
                    description: 'Schweregrad-Einteilung der COPD',
                    icon: '🏆',
                    difficulty: 'medium',
                    parentId: 'copd'
                  }
                ]
              },
              {
                id: 'asthma',
                name: 'Asthma bronchiale',
                description: 'Chronische Atemwegsentzündung mit variabler Obstruktion',
                icon: '💨',
                difficulty: 'medium',
                parentId: 'obstructive-diseases',
                children: [
                  {
                    id: 'asthma-definition',
                    name: 'Definition & Epidemiologie',
                    description: 'Asthma-Charakteristika und Häufigkeit',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'asthma'
                  },
                  {
                    id: 'asthma-etiology',
                    name: 'Ätiologie',
                    description: 'Ursachen des Asthmas',
                    icon: '🌿',
                    difficulty: 'medium',
                    parentId: 'asthma',
                    children: [
                      {
                        id: 'allergic-asthma',
                        name: 'Allergisches Asthma (IgE-vermittelt)',
                        description: 'Allergen-getriggertes Asthma',
                        icon: '🤧',
                        difficulty: 'medium',
                        parentId: 'asthma-etiology'
                      },
                      {
                        id: 'non-allergic-asthma',
                        name: 'Nicht-allergisches Asthma',
                        description: 'Intrinsisches Asthma',
                        icon: '🔄',
                        difficulty: 'medium',
                        parentId: 'asthma-etiology'
                      },
                      {
                        id: 'occupational-asthma',
                        name: 'Berufsasthma',
                        description: 'Arbeitsplatz-bedingtes Asthma',
                        icon: '🏭',
                        difficulty: 'medium',
                        parentId: 'asthma-etiology'
                      },
                      {
                        id: 'aspirin-asthma',
                        name: 'Aspirinasthma (AERD/Samter-Trias)',
                        description: 'Analgetika-Intoleranz-Syndrom',
                        icon: '💊',
                        difficulty: 'hard',
                        parentId: 'asthma-etiology'
                      },
                      {
                        id: 'exercise-asthma',
                        name: 'Belastungsasthma',
                        description: 'Anstrengungsinduziertes Asthma',
                        icon: '🏃',
                        difficulty: 'medium',
                        parentId: 'asthma-etiology'
                      },
                      {
                        id: 'eosinophilic-asthma',
                        name: 'Eosinophiles Asthma',
                        description: 'Eosinophilen-dominiertes Asthma',
                        icon: '🔬',
                        difficulty: 'hard',
                        parentId: 'asthma-etiology'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'neurological-diseases',
        name: 'NEUROLOGISCHE ERKRANKUNGEN',
        description: 'Erkrankungen des Nervensystems',
        icon: '🧠',
        difficulty: 'hard',
        parentId: 'pathology',
        children: [
          {
            id: 'cerebrovascular-diseases',
            name: 'Zerebrovaskuläre Erkrankungen',
            description: 'Durchblutungsstörungen des Gehirns',
            icon: '🧠',
            difficulty: 'hard',
            parentId: 'neurological-diseases',
            children: [
              {
                id: 'stroke',
                name: 'Schlaganfall',
                description: 'Akute Durchblutungsstörung des Gehirns',
                icon: '⚡',
                difficulty: 'hard',
                parentId: 'cerebrovascular-diseases',
                children: [
                  {
                    id: 'ischemic-stroke',
                    name: 'Ischämischer Schlaganfall (85%)',
                    description: 'Hirninfarkt durch Gefäßverschluss',
                    icon: '🚫',
                    difficulty: 'hard',
                    parentId: 'stroke'
                  },
                  {
                    id: 'hemorrhagic-stroke',
                    name: 'Hämorrhagischer Schlaganfall (15%)',
                    description: 'Hirnblutung',
                    icon: '🩸',
                    difficulty: 'hard',
                    parentId: 'stroke'
                  },
                  {
                    id: 'tia',
                    name: 'TIA (Transitorische ischämische Attacke)',
                    description: 'Vorübergehende Durchblutungsstörung',
                    icon: '⏰',
                    difficulty: 'medium',
                    parentId: 'stroke'
                  },
                  {
                    id: 'nihss-score',
                    name: 'NIHSS-Score',
                    description: 'Neurologische Bewertungsskala',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'stroke'
                  },
                  {
                    id: 'stroke-therapy',
                    name: 'Thrombolyse/Thrombektomie',
                    description: 'Akuttherapie des Schlaganfalls',
                    icon: '💉',
                    difficulty: 'hard',
                    parentId: 'stroke'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'renal-diseases',
        name: 'NIERENERKRANKUNGEN',
        description: 'Erkrankungen der Nieren und Harnwege',
        icon: '🫘',
        difficulty: 'hard',
        parentId: 'pathology',
        children: [
          {
            id: 'acute-kidney-injury',
            name: 'Akute Nierenschädigung (AKI)',
            description: 'Plötzlicher Verlust der Nierenfunktion',
            icon: '⚡',
            difficulty: 'hard',
            parentId: 'renal-diseases',
            children: [
              {
                id: 'prerenal-aki',
                name: 'Prärenales AKI',
                description: 'Nierenschädigung durch verminderte Durchblutung',
                icon: '🩸',
                difficulty: 'medium',
                parentId: 'acute-kidney-injury'
              },
              {
                id: 'intrarenal-aki',
                name: 'Intrarenales AKI',
                description: 'Direkte Nierenschädigung',
                icon: '🫘',
                difficulty: 'medium',
                parentId: 'acute-kidney-injury'
              },
              {
                id: 'postrenal-aki',
                name: 'Postrenales AKI',
                description: 'Harnabflussstörung',
                icon: '🚫',
                difficulty: 'medium',
                parentId: 'acute-kidney-injury'
              },
              {
                id: 'aki-criteria',
                name: 'RIFLE/AKIN/KDIGO-Kriterien',
                description: 'Klassifikationssysteme für AKI',
                icon: '📏',
                difficulty: 'hard',
                parentId: 'acute-kidney-injury'
              },
              {
                id: 'renal-replacement',
                name: 'Nierenersatztherapie',
                description: 'Dialyse und Hämofiltration',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'acute-kidney-injury'
              }
            ]
          },
          {
            id: 'chronic-kidney-disease',
            name: 'Chronische Nierenerkrankung (CKD)',
            description: 'Progrediente Nierenfunktionseinschränkung',
            icon: '📉',
            difficulty: 'hard',
            parentId: 'renal-diseases',
            children: [
              {
                id: 'ckd-stages',
                name: 'Stadien G1-G5',
                description: 'CKD-Stadieneinteilung nach GFR',
                icon: '📊',
                difficulty: 'medium',
                parentId: 'chronic-kidney-disease'
              },
              {
                id: 'ckd-etiology',
                name: 'Ätiologie (Diabetes, Hypertonie)',
                description: 'Hauptursachen der CKD',
                icon: '🩺',
                difficulty: 'medium',
                parentId: 'chronic-kidney-disease'
              },
              {
                id: 'ckd-complications',
                name: 'Komplikationen',
                description: 'Folgeerkrankungen der CKD',
                icon: '⚠️',
                difficulty: 'hard',
                parentId: 'chronic-kidney-disease'
              },
              {
                id: 'dialysis',
                name: 'Dialyse (HD, PD)',
                description: 'Hämodialyse und Peritonealdialyse',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'chronic-kidney-disease'
              },
              {
                id: 'kidney-transplant',
                name: 'Nierentransplantation',
                description: 'Nierenersatz durch Transplantation',
                icon: '🫘',
                difficulty: 'hard',
                parentId: 'chronic-kidney-disease'
              }
            ]
          }
        ]
      }
    ]
  }
]

export default pathologyCategories