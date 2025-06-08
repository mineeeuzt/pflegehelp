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
      },
      {
        id: 'endocrine-diseases',
        name: 'ENDOKRINE ERKRANKUNGEN',
        description: 'Hormonelle Störungen und Stoffwechselerkrankungen',
        icon: '🧪',
        difficulty: 'hard',
        parentId: 'pathology',
        children: [
          {
            id: 'diabetes-mellitus',
            name: 'Diabetes mellitus',
            description: 'Störungen des Glukosestoffwechsels',
            icon: '🍯',
            difficulty: 'hard',
            parentId: 'endocrine-diseases',
            children: [
              {
                id: 'type-1-diabetes',
                name: 'Typ-1-Diabetes (Autoimmun)',
                description: 'Insulinmangel durch β-Zell-Zerstörung',
                icon: '🥇',
                difficulty: 'hard',
                parentId: 'diabetes-mellitus'
              },
              {
                id: 'type-2-diabetes',
                name: 'Typ-2-Diabetes (Insulinresistenz)',
                description: 'Relative Insulinwirkungsstörung',
                icon: '🥈',
                difficulty: 'medium',
                parentId: 'diabetes-mellitus'
              },
              {
                id: 'gestational-diabetes',
                name: 'Gestationsdiabetes',
                description: 'Schwangerschaftsdiabetes',
                icon: '🤰',
                difficulty: 'medium',
                parentId: 'diabetes-mellitus'
              },
              {
                id: 'diabetes-complications',
                name: 'Diabetische Komplikationen',
                description: 'Makro- und mikrovaskuläre Folgeschäden',
                icon: '⚠️',
                difficulty: 'hard',
                parentId: 'diabetes-mellitus'
              }
            ]
          },
          {
            id: 'thyroid-diseases',
            name: 'Schilddrüsenerkrankungen',
            description: 'Hyper- und Hypothyreose',
            icon: '🦋',
            difficulty: 'medium',
            parentId: 'endocrine-diseases',
            children: [
              {
                id: 'hyperthyroidism',
                name: 'Hyperthyreose (Überfunktion)',
                description: 'Erhöhte Schilddrüsenhormonproduktion',
                icon: '⚡',
                difficulty: 'medium',
                parentId: 'thyroid-diseases'
              },
              {
                id: 'hypothyroidism',
                name: 'Hypothyreose (Unterfunktion)',
                description: 'Verminderte Schilddrüsenhormonproduktion',
                icon: '🐌',
                difficulty: 'medium',
                parentId: 'thyroid-diseases'
              },
              {
                id: 'thyroid-nodules',
                name: 'Schilddrüsenknoten & -karzinom',
                description: 'Benigne und maligne Schilddrüsenveränderungen',
                icon: '🔴',
                difficulty: 'hard',
                parentId: 'thyroid-diseases'
              }
            ]
          }
        ]
      },
      {
        id: 'gastrointestinal-diseases',
        name: 'MAGEN-DARM-ERKRANKUNGEN',
        description: 'Erkrankungen des Verdauungssystems',
        icon: '🫄',
        difficulty: 'medium',
        parentId: 'pathology',
        children: [
          {
            id: 'upper-gi-diseases',
            name: 'Oberer Gastrointestinaltrakt',
            description: 'Erkrankungen von Ösophagus bis Duodenum',
            icon: '🫃',
            difficulty: 'medium',
            parentId: 'gastrointestinal-diseases',
            children: [
              {
                id: 'peptic-ulcer',
                name: 'Peptisches Ulkus (Magen-/Duodenalulkus)',
                description: 'H. pylori und NSAR-induzierte Ulzera',
                icon: '🕳️',
                difficulty: 'medium',
                parentId: 'upper-gi-diseases'
              },
              {
                id: 'gerd',
                name: 'Gastroösophageale Refluxkrankheit (GERD)',
                description: 'Sodbrennen und Refluxösophagitis',
                icon: '🔥',
                difficulty: 'medium',
                parentId: 'upper-gi-diseases'
              },
              {
                id: 'gastritis',
                name: 'Gastritis (akut/chronisch)',
                description: 'Magenschleimhautentzündung',
                icon: '🔴',
                difficulty: 'medium',
                parentId: 'upper-gi-diseases'
              }
            ]
          },
          {
            id: 'lower-gi-diseases',
            name: 'Unterer Gastrointestinaltrakt',
            description: 'Dünndarm- und Dickdarmerkrankungen',
            icon: '🌀',
            difficulty: 'medium',
            parentId: 'gastrointestinal-diseases',
            children: [
              {
                id: 'inflammatory-bowel-disease',
                name: 'Chronisch-entzündliche Darmerkrankungen',
                description: 'Morbus Crohn und Colitis ulcerosa',
                icon: '🔥',
                difficulty: 'hard',
                parentId: 'lower-gi-diseases'
              },
              {
                id: 'irritable-bowel-syndrome',
                name: 'Reizdarmsyndrom (IBS)',
                description: 'Funktionelle Darmstörung',
                icon: '⚡',
                difficulty: 'medium',
                parentId: 'lower-gi-diseases'
              },
              {
                id: 'colorectal-cancer',
                name: 'Kolorektales Karzinom',
                description: 'Darmkrebs und Polypen',
                icon: '🎯',
                difficulty: 'hard',
                parentId: 'lower-gi-diseases'
              }
            ]
          },
          {
            id: 'liver-diseases',
            name: 'Lebererkrankungen',
            description: 'Hepatitiden und Leberzirrhose',
            icon: '🍯',
            difficulty: 'hard',
            parentId: 'gastrointestinal-diseases',
            children: [
              {
                id: 'viral-hepatitis',
                name: 'Virale Hepatitis (A, B, C, D, E)',
                description: 'Virusbedingte Leberentzündung',
                icon: '🦠',
                difficulty: 'hard',
                parentId: 'liver-diseases'
              },
              {
                id: 'liver-cirrhosis',
                name: 'Leberzirrhose',
                description: 'Fibrotische Leberumbau',
                icon: '🕸️',
                difficulty: 'hard',
                parentId: 'liver-diseases'
              },
              {
                id: 'fatty-liver',
                name: 'Fettlebererkrankung (NAFLD/NASH)',
                description: 'Nicht-alkoholische Fettleber',
                icon: '🧈',
                difficulty: 'medium',
                parentId: 'liver-diseases'
              }
            ]
          }
        ]
      },
      {
        id: 'musculoskeletal-diseases',
        name: 'MUSKULOSKELETTALE ERKRANKUNGEN',
        description: 'Erkrankungen von Knochen, Muskeln und Gelenken',
        icon: '🦴',
        difficulty: 'medium',
        parentId: 'pathology',
        children: [
          {
            id: 'bone-diseases',
            name: 'Knochenerkrankungen',
            description: 'Osteoporose und Knochenmetabolismus',
            icon: '🦴',
            difficulty: 'medium',
            parentId: 'musculoskeletal-diseases',
            children: [
              {
                id: 'osteoporosis',
                name: 'Osteoporose',
                description: 'Systemische Skeletterkrankung',
                icon: '🕳️',
                difficulty: 'medium',
                parentId: 'bone-diseases'
              },
              {
                id: 'fractures',
                name: 'Frakturen & Frakturheilung',
                description: 'Knochenbrüche und Heilungsstörungen',
                icon: '💥',
                difficulty: 'medium',
                parentId: 'bone-diseases'
              },
              {
                id: 'osteomyelitis',
                name: 'Osteomyelitis',
                description: 'Knochenmarksentzündung',
                icon: '🔥',
                difficulty: 'hard',
                parentId: 'bone-diseases'
              }
            ]
          },
          {
            id: 'joint-diseases',
            name: 'Gelenkerkrankungen',
            description: 'Arthrose, Arthritis und Gelenkpathologie',
            icon: '🔗',
            difficulty: 'medium',
            parentId: 'musculoskeletal-diseases',
            children: [
              {
                id: 'osteoarthritis',
                name: 'Arthrose (degenerativ)',
                description: 'Gelenkverschleiß und Knorpelschäden',
                icon: '⚙️',
                difficulty: 'medium',
                parentId: 'joint-diseases'
              },
              {
                id: 'rheumatoid-arthritis',
                name: 'Rheumatoide Arthritis',
                description: 'Autoimmune Gelenkentzündung',
                icon: '🔥',
                difficulty: 'hard',
                parentId: 'joint-diseases'
              },
              {
                id: 'gout',
                name: 'Gicht (Hyperurikämie)',
                description: 'Harnsäure-Ablagerungen in Gelenken',
                icon: '💎',
                difficulty: 'medium',
                parentId: 'joint-diseases'
              }
            ]
          }
        ]
      },
      {
        id: 'infectious-diseases',
        name: 'INFEKTIONSKRANKHEITEN',
        description: 'Bakterielle, virale und andere Infektionen',
        icon: '🦠',
        difficulty: 'hard',
        parentId: 'pathology',
        children: [
          {
            id: 'bacterial-infections',
            name: 'Bakterielle Infektionen',
            description: 'Systemische und lokale bakterielle Erkrankungen',
            icon: '🦠',
            difficulty: 'medium',
            parentId: 'infectious-diseases',
            children: [
              {
                id: 'sepsis',
                name: 'Sepsis & septischer Schock',
                description: 'Systemische Entzündungsreaktion',
                icon: '🚨',
                difficulty: 'hard',
                parentId: 'bacterial-infections'
              },
              {
                id: 'pneumonia-bacterial',
                name: 'Bakterielle Pneumonie',
                description: 'Lungenentzündung durch Bakterien',
                icon: '🫁',
                difficulty: 'medium',
                parentId: 'bacterial-infections'
              },
              {
                id: 'uti',
                name: 'Harnwegsinfektionen',
                description: 'Zystitis und Pyelonephritis',
                icon: '🫘',
                difficulty: 'medium',
                parentId: 'bacterial-infections'
              }
            ]
          },
          {
            id: 'viral-infections',
            name: 'Virale Infektionen',
            description: 'Systemische und organbezogene Viruserkrankungen',
            icon: '🧬',
            difficulty: 'medium',
            parentId: 'infectious-diseases',
            children: [
              {
                id: 'influenza',
                name: 'Influenza & respiratorische Viren',
                description: 'Grippe und Erkältungsviren',
                icon: '🤧',
                difficulty: 'medium',
                parentId: 'viral-infections'
              },
              {
                id: 'covid-19',
                name: 'COVID-19 (SARS-CoV-2)',
                description: 'Coronavirus-Erkrankung',
                icon: '😷',
                difficulty: 'medium',
                parentId: 'viral-infections'
              },
              {
                id: 'herpes-viruses',
                name: 'Herpesviren (HSV, VZV, EBV, CMV)',
                description: 'Herpesviridae-Familie',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'viral-infections'
              }
            ]
          },
          {
            id: 'healthcare-associated-infections',
            name: 'Nosokomiale Infektionen',
            description: 'Krankenhaus-erworbene Infektionen',
            icon: '🏥',
            difficulty: 'hard',
            parentId: 'infectious-diseases',
            children: [
              {
                id: 'mrsa',
                name: 'MRSA & resistente Erreger',
                description: 'Multiresistente Bakterien',
                icon: '🛡️',
                difficulty: 'hard',
                parentId: 'healthcare-associated-infections'
              },
              {
                id: 'cdi',
                name: 'Clostridioides difficile',
                description: 'Antibiotika-assoziierte Kolitis',
                icon: '⚠️',
                difficulty: 'hard',
                parentId: 'healthcare-associated-infections'
              },
              {
                id: 'catheter-infections',
                name: 'Katheter-assoziierte Infektionen',
                description: 'Gefäß- und Harnkatheter-Infektionen',
                icon: '🔌',
                difficulty: 'medium',
                parentId: 'healthcare-associated-infections'
              }
            ]
          }
        ]
      }
    ]
  }
]

export default pathologyCategories