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
              },
              {
                id: 'myocardial-infarction',
                name: 'Myokardinfarkt',
                description: 'Herzmuskelschädigung und -nekrose',
                icon: '💔',
                difficulty: 'hard',
                parentId: 'coronary-heart-disease',
                children: [
                  {
                    id: 'mi-pathophysiology',
                    name: 'Pathophysiologie',
                    description: 'Entstehung und Mechanismen des Myokardinfarkts',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'myocardial-infarction',
                    children: [
                      {
                        id: 'ischemia-cascade',
                        name: 'Ischämie-Kaskade',
                        description: 'Zeitliche Abfolge der Myokardschädigung',
                        icon: '⏰',
                        difficulty: 'hard',
                        parentId: 'mi-pathophysiology'
                      },
                      {
                        id: 'myocyte-death',
                        name: 'Myozytentod (Nekrose vs. Apoptose)',
                        description: 'Zelltodmechanismen im Myokard',
                        icon: '💀',
                        difficulty: 'hard',
                        parentId: 'mi-pathophysiology'
                      },
                      {
                        id: 'stunning-hibernation',
                        name: 'Stunning & Hibernation',
                        description: 'Reversible Myokarddysfunktion',
                        icon: '🔄',
                        difficulty: 'hard',
                        parentId: 'mi-pathophysiology'
                      },
                      {
                        id: 'reperfusion-injury',
                        name: 'Reperfusionsschäden',
                        description: 'Schäden durch Wiederherstellung der Durchblutung',
                        icon: '💥',
                        difficulty: 'hard',
                        parentId: 'mi-pathophysiology'
                      },
                      {
                        id: 'no-reflow-phenomenon',
                        name: 'No-Reflow-Phänomen',
                        description: 'Mikrozirkulationsstörung trotz Rekanalisierung',
                        icon: '🚫',
                        difficulty: 'hard',
                        parentId: 'mi-pathophysiology'
                      }
                    ]
                  },
                  {
                    id: 'mi-symptoms-diagnosis',
                    name: 'Symptomatik & Diagnostik',
                    description: 'Klinische Präsentation und Diagnoseverfahren',
                    icon: '🩺',
                    difficulty: 'medium',
                    parentId: 'myocardial-infarction',
                    children: [
                      {
                        id: 'chest-pain-characteristics',
                        name: 'Brustschmerz-Charakteristika',
                        description: 'Typische und atypische Schmerzcharakteristika',
                        icon: '💔',
                        difficulty: 'medium',
                        parentId: 'mi-symptoms-diagnosis'
                      },
                      {
                        id: 'levine-sign',
                        name: 'Levine-Zeichen',
                        description: 'Charakteristische Handhaltung bei Angina',
                        icon: '✋',
                        difficulty: 'easy',
                        parentId: 'mi-symptoms-diagnosis'
                      },
                      {
                        id: 'silent-mi',
                        name: 'Stummer Myokardinfarkt',
                        description: 'Myokardinfarkt ohne typische Symptome',
                        icon: '🤫',
                        difficulty: 'medium',
                        parentId: 'mi-symptoms-diagnosis'
                      },
                      {
                        id: 'ekg-changes-temporal',
                        name: 'EKG-Veränderungen (zeitlicher Verlauf)',
                        description: 'Entwicklung der EKG-Befunde über die Zeit',
                        icon: '📈',
                        difficulty: 'hard',
                        parentId: 'mi-symptoms-diagnosis'
                      },
                      {
                        id: 'stemi-localization',
                        name: 'STEMI-Lokalisation (Vorderwand/Hinterwand/Seitenwand)',
                        description: 'Anatomische Zuordnung der Infarktregionen',
                        icon: '🗺️',
                        difficulty: 'medium',
                        parentId: 'mi-symptoms-diagnosis'
                      },
                      {
                        id: 'reciprocal-changes',
                        name: 'Reziproke Veränderungen',
                        description: 'ST-Senkungen in nicht-betroffenen Ableitungen',
                        icon: '↔️',
                        difficulty: 'medium',
                        parentId: 'mi-symptoms-diagnosis'
                      },
                      {
                        id: 'posterior-mi',
                        name: 'Posteriorer Myokardinfarkt',
                        description: 'Schwer erkennbarer Hinterwandinfarkt',
                        icon: '🔍',
                        difficulty: 'hard',
                        parentId: 'mi-symptoms-diagnosis'
                      },
                      {
                        id: 'lab-diagnostics-mi',
                        name: 'Labordiagnostik',
                        description: 'Biomarker und zeitlicher Verlauf',
                        icon: '🧪',
                        difficulty: 'medium',
                        parentId: 'mi-symptoms-diagnosis'
                      },
                      {
                        id: 'imaging-mi',
                        name: 'Bildgebung (Echo, MRT)',
                        description: 'Nicht-invasive Diagnostik bei MI',
                        icon: '📷',
                        difficulty: 'medium',
                        parentId: 'mi-symptoms-diagnosis'
                      }
                    ]
                  },
                  {
                    id: 'mi-complications',
                    name: 'Komplikationen',
                    description: 'Akute und chronische Komplikationen des MI',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'myocardial-infarction',
                    children: [
                      {
                        id: 'mechanical-complications',
                        name: 'Mechanische Komplikationen',
                        description: 'Strukturelle Defekte nach MI',
                        icon: '🔧',
                        difficulty: 'hard',
                        parentId: 'mi-complications',
                        children: [
                          {
                            id: 'papillary-muscle-rupture',
                            name: 'Papillarmuskelruptur',
                            description: 'Akute Mitralklappeninsuffizienz',
                            icon: '💥',
                            difficulty: 'hard',
                            parentId: 'mechanical-complications'
                          },
                          {
                            id: 'ventricular-septal-defect',
                            name: 'Ventrikelseptumdefekt (VSD)',
                            description: 'Septumruptur nach MI',
                            icon: '🕳️',
                            difficulty: 'hard',
                            parentId: 'mechanical-complications'
                          },
                          {
                            id: 'free-wall-rupture',
                            name: 'Freie Wandruptur',
                            description: 'Myokardruptur mit Perikardtamponade',
                            icon: '💔',
                            difficulty: 'hard',
                            parentId: 'mechanical-complications'
                          },
                          {
                            id: 'pseudoaneurysm',
                            name: 'Pseudoaneurysma',
                            description: 'Falsche Wandausstülpung',
                            icon: '🫧',
                            difficulty: 'hard',
                            parentId: 'mechanical-complications'
                          }
                        ]
                      },
                      {
                        id: 'arrhythmic-complications',
                        name: 'Rhythmusstörungen',
                        description: 'Herzrhythmusstörungen nach MI',
                        icon: '⚡',
                        difficulty: 'medium',
                        parentId: 'mi-complications',
                        children: [
                          {
                            id: 'ventricular-arrhythmias',
                            name: 'Ventrikuläre Arrhythmien (VT, VF)',
                            description: 'Lebensbedrohliche Rhythmusstörungen',
                            icon: '💓',
                            difficulty: 'hard',
                            parentId: 'arrhythmic-complications'
                          },
                          {
                            id: 'atrial-fibrillation-mi',
                            name: 'Vorhofflimmern',
                            description: 'Häufige supraventrikuläre Arrhythmie',
                            icon: '🌀',
                            difficulty: 'medium',
                            parentId: 'arrhythmic-complications'
                          },
                          {
                            id: 'av-blocks',
                            name: 'AV-Blöcke',
                            description: 'Überleitungsstörungen nach MI',
                            icon: '🚫',
                            difficulty: 'medium',
                            parentId: 'arrhythmic-complications'
                          },
                          {
                            id: 'sinus-node-dysfunction',
                            name: 'Sinusknotendysfunktion',
                            description: 'Schrittmacherfunktionsstörung',
                            icon: '⏰',
                            difficulty: 'medium',
                            parentId: 'arrhythmic-complications'
                          }
                        ]
                      },
                      {
                        id: 'pericardial-complications',
                        name: 'Perikardbeteiligung',
                        description: 'Entzündung und Ergüsse des Herzbeutels',
                        icon: '🛡️',
                        difficulty: 'medium',
                        parentId: 'mi-complications',
                        children: [
                          {
                            id: 'acute-pericarditis',
                            name: 'Akute Perikarditis (1-4 Tage)',
                            description: 'Frühe Perikardentzündung',
                            icon: '🔥',
                            difficulty: 'medium',
                            parentId: 'pericardial-complications'
                          },
                          {
                            id: 'dressler-syndrome',
                            name: 'Dressler-Syndrom (2-8 Wochen)',
                            description: 'Autoimmune Perikarditis',
                            icon: '⚡',
                            difficulty: 'medium',
                            parentId: 'pericardial-complications'
                          },
                          {
                            id: 'pericardial-effusion',
                            name: 'Perikarderguss',
                            description: 'Flüssigkeitsansammlung im Herzbeutel',
                            icon: '💧',
                            difficulty: 'medium',
                            parentId: 'pericardial-complications'
                          },
                          {
                            id: 'cardiac-tamponade',
                            name: 'Perikardtamponade',
                            description: 'Lebensbedrohliche Kompression des Herzens',
                            icon: '🚨',
                            difficulty: 'hard',
                            parentId: 'pericardial-complications'
                          }
                        ]
                      },
                      {
                        id: 'cardiogenic-shock',
                        name: 'Kardiogener Schock',
                        description: 'Kritische Kreislaufinsuffizienz',
                        icon: '💀',
                        difficulty: 'hard',
                        parentId: 'mi-complications',
                        children: [
                          {
                            id: 'shock-hemodynamics',
                            name: 'Hämodynamik & Pathophysiologie',
                            description: 'Kreislaufversagen nach MI',
                            icon: '📉',
                            difficulty: 'hard',
                            parentId: 'cardiogenic-shock'
                          },
                          {
                            id: 'iabp-support',
                            name: 'IABP (Intraaortale Ballonpumpe)',
                            description: 'Mechanische Kreislaufunterstützung',
                            icon: '🎈',
                            difficulty: 'hard',
                            parentId: 'cardiogenic-shock'
                          },
                          {
                            id: 'ecmo-impella',
                            name: 'ECMO & Impella',
                            description: 'Erweiterte mechanische Unterstützung',
                            icon: '🔄',
                            difficulty: 'hard',
                            parentId: 'cardiogenic-shock'
                          },
                          {
                            id: 'vasopressor-therapy',
                            name: 'Vasopressor-Therapie',
                            description: 'Medikamentöse Kreislaufstützung',
                            icon: '💉',
                            difficulty: 'medium',
                            parentId: 'cardiogenic-shock'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: 'therapy-prognosis',
                name: 'Therapie & Prognose',
                description: 'Behandlungsstrategien und Langzeitprognose',
                icon: '🩺',
                difficulty: 'hard',
                parentId: 'coronary-heart-disease',
                children: [
                  {
                    id: 'acute-therapy',
                    name: 'Akuttherapie',
                    description: 'Sofortmaßnahmen bei akutem Koronarsyndrom',
                    icon: '🚨',
                    difficulty: 'hard',
                    parentId: 'therapy-prognosis',
                    children: [
                      {
                        id: 'reperfusion-therapy',
                        name: 'Reperfusionstherapie',
                        description: 'Wiederherstellung der Koronarperfusion',
                        icon: '🔄',
                        difficulty: 'hard',
                        parentId: 'acute-therapy',
                        children: [
                          {
                            id: 'primary-pci',
                            name: 'Primäre PCI (< 120 min)',
                            description: 'Notfall-Katheterintervention',
                            icon: '⏱️',
                            difficulty: 'hard',
                            parentId: 'reperfusion-therapy'
                          },
                          {
                            id: 'thrombolysis',
                            name: 'Thrombolyse (< 30 min)',
                            description: 'Medikamentöse Gerinnselauflösung',
                            icon: '💊',
                            difficulty: 'medium',
                            parentId: 'reperfusion-therapy'
                          },
                          {
                            id: 'rescue-pci',
                            name: 'Rescue-PCI',
                            description: 'Katheterintervention nach fehlgeschlagener Lyse',
                            icon: '🆘',
                            difficulty: 'hard',
                            parentId: 'reperfusion-therapy'
                          },
                          {
                            id: 'facilitated-pci',
                            name: 'Facilitated PCI',
                            description: 'Geplante PCI nach pharmakologischer Vorbereitung',
                            icon: '🔗',
                            difficulty: 'hard',
                            parentId: 'reperfusion-therapy'
                          }
                        ]
                      },
                      {
                        id: 'dual-antiplatelet-therapy',
                        name: 'Duale Thrombozytenaggregationshemmung',
                        description: 'ASS + P2Y12-Inhibitor',
                        icon: '🩸',
                        difficulty: 'medium',
                        parentId: 'acute-therapy',
                        children: [
                          {
                            id: 'aspirin-loading',
                            name: 'ASS (Acetylsalicylsäure)',
                            description: 'Cyclooxygenase-Hemmung',
                            icon: '💊',
                            difficulty: 'easy',
                            parentId: 'dual-antiplatelet-therapy'
                          },
                          {
                            id: 'p2y12-inhibitors',
                            name: 'P2Y12-Inhibitoren (Clopidogrel, Prasugrel, Ticagrelor)',
                            description: 'ADP-Rezeptor-Antagonisten',
                            icon: '🔗',
                            difficulty: 'medium',
                            parentId: 'dual-antiplatelet-therapy'
                          },
                          {
                            id: 'dapt-duration',
                            name: 'DAPT-Dauer (6-12 Monate)',
                            description: 'Optimale Behandlungsdauer',
                            icon: '📅',
                            difficulty: 'medium',
                            parentId: 'dual-antiplatelet-therapy'
                          },
                          {
                            id: 'bleeding-risk-assessment',
                            name: 'Blutungsrisiko-Assessment',
                            description: 'Abwägung Thrombose vs. Blutung',
                            icon: '⚖️',
                            difficulty: 'medium',
                            parentId: 'dual-antiplatelet-therapy'
                          }
                        ]
                      },
                      {
                        id: 'anticoagulation',
                        name: 'Antikoagulation',
                        description: 'Gerinnungshemmung bei ACS',
                        icon: '🧪',
                        difficulty: 'medium',
                        parentId: 'acute-therapy',
                        children: [
                          {
                            id: 'heparin-therapy',
                            name: 'Heparin (UFH, LMWH)',
                            description: 'Unfraktioniertes und niedermolekulares Heparin',
                            icon: '💉',
                            difficulty: 'medium',
                            parentId: 'anticoagulation'
                          },
                          {
                            id: 'bivalirudin',
                            name: 'Bivalirudin',
                            description: 'Direkter Thrombin-Inhibitor',
                            icon: '🎯',
                            difficulty: 'hard',
                            parentId: 'anticoagulation'
                          },
                          {
                            id: 'fondaparinux',
                            name: 'Fondaparinux',
                            description: 'Selektiver Faktor-Xa-Inhibitor',
                            icon: '🔬',
                            difficulty: 'medium',
                            parentId: 'anticoagulation'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'longterm-therapy',
                    name: 'Langzeittherapie',
                    description: 'Sekundärprävention und chronische Behandlung',
                    icon: '📅',
                    difficulty: 'medium',
                    parentId: 'therapy-prognosis',
                    children: [
                      {
                        id: 'ace-inhibitors-arb',
                        name: 'ACE-Hemmer/ARB',
                        description: 'RAAS-Blockade zur Remodeling-Prävention',
                        icon: '🛡️',
                        difficulty: 'medium',
                        parentId: 'longterm-therapy'
                      },
                      {
                        id: 'beta-blockers-mi',
                        name: 'Betablocker',
                        description: 'Sympathikusblockade post-MI',
                        icon: '🚫',
                        difficulty: 'medium',
                        parentId: 'longterm-therapy'
                      },
                      {
                        id: 'statins-high-intensity',
                        name: 'Statine (hochdosiert)',
                        description: 'Intensive Lipidsenkung',
                        icon: '📉',
                        difficulty: 'medium',
                        parentId: 'longterm-therapy'
                      },
                      {
                        id: 'mineralocorticoid-antagonists',
                        name: 'Mineralokortikoid-Antagonisten',
                        description: 'Aldosteron-Blockade bei Herzinsuffizienz',
                        icon: '⚖️',
                        difficulty: 'medium',
                        parentId: 'longterm-therapy'
                      },
                      {
                        id: 'diabetes-management-cad',
                        name: 'Diabetesmanagement',
                        description: 'Glukosekontrolle bei KHK',
                        icon: '🍯',
                        difficulty: 'medium',
                        parentId: 'longterm-therapy'
                      }
                    ]
                  },
                  {
                    id: 'interventional-therapy',
                    name: 'Interventionelle Therapie',
                    description: 'Katheterbasierte Behandlungsverfahren',
                    icon: '🔧',
                    difficulty: 'hard',
                    parentId: 'therapy-prognosis',
                    children: [
                      {
                        id: 'coronary-angiography',
                        name: 'Koronarangiographie',
                        description: 'Invasive Koronardiagnostik',
                        icon: '📷',
                        difficulty: 'medium',
                        parentId: 'interventional-therapy',
                        children: [
                          {
                            id: 'access-routes',
                            name: 'Zugangswege (radial, femoral)',
                            description: 'Arterielle Punktionsstellen',
                            icon: '🎯',
                            difficulty: 'medium',
                            parentId: 'coronary-angiography'
                          },
                          {
                            id: 'contrast-nephropathy',
                            name: 'Kontrastmittelnephropathie',
                            description: 'Nierenschädigung durch Kontrastmittel',
                            icon: '🫘',
                            difficulty: 'medium',
                            parentId: 'coronary-angiography'
                          },
                          {
                            id: 'syntax-score',
                            name: 'SYNTAX-Score',
                            description: 'Komplexitätsbewertung der KHK',
                            icon: '📊',
                            difficulty: 'medium',
                            parentId: 'coronary-angiography'
                          }
                        ]
                      },
                      {
                        id: 'pci-techniques',
                        name: 'PCI-Techniken',
                        description: 'Perkutane Koronarintervention',
                        icon: '🔧',
                        difficulty: 'hard',
                        parentId: 'interventional-therapy',
                        children: [
                          {
                            id: 'balloon-angioplasty',
                            name: 'Ballondilatation (PTCA)',
                            description: 'Mechanische Gefäßerweiterung',
                            icon: '🎈',
                            difficulty: 'medium',
                            parentId: 'pci-techniques'
                          },
                          {
                            id: 'stent-implantation',
                            name: 'Stent-Implantation',
                            description: 'Gefäßstützen zur offenhaltung',
                            icon: '🔗',
                            difficulty: 'medium',
                            parentId: 'pci-techniques'
                          },
                          {
                            id: 'drug-eluting-stents',
                            name: 'Drug-eluting Stents (DES)',
                            description: 'Medikamenten-freisetzende Stents',
                            icon: '💊',
                            difficulty: 'hard',
                            parentId: 'pci-techniques'
                          },
                          {
                            id: 'bioresorbable-stents',
                            name: 'Bioresorbierbare Stents',
                            description: 'Auflösbare Gefäßstützen',
                            icon: '♻️',
                            difficulty: 'hard',
                            parentId: 'pci-techniques'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'cardiac-rehabilitation',
                    name: 'Kardiale Rehabilitation',
                    description: 'Umfassende Nachsorge nach Herzinfarkt',
                    icon: '💪',
                    difficulty: 'medium',
                    parentId: 'therapy-prognosis',
                    children: [
                      {
                        id: 'exercise-training',
                        name: 'Bewegungstherapie',
                        description: 'Strukturiertes körperliches Training',
                        icon: '🏃',
                        difficulty: 'easy',
                        parentId: 'cardiac-rehabilitation'
                      },
                      {
                        id: 'patient-education',
                        name: 'Patientenschulung',
                        description: 'Aufklärung über Krankheit und Selbstmanagement',
                        icon: '📚',
                        difficulty: 'easy',
                        parentId: 'cardiac-rehabilitation'
                      },
                      {
                        id: 'psychological-support',
                        name: 'Psychologische Betreuung',
                        description: 'Depression und Angst nach MI',
                        icon: '🧠',
                        difficulty: 'medium',
                        parentId: 'cardiac-rehabilitation'
                      },
                      {
                        id: 'risk-factor-modification',
                        name: 'Risikofaktor-Modifikation',
                        description: 'Lebensstilintervention',
                        icon: '🎯',
                        difficulty: 'medium',
                        parentId: 'cardiac-rehabilitation'
                      },
                      {
                        id: 'return-to-work',
                        name: 'Berufliche Wiedereingliederung',
                        description: 'Arbeitsplatzanpassung und Belastbarkeit',
                        icon: '💼',
                        difficulty: 'medium',
                        parentId: 'cardiac-rehabilitation'
                      }
                    ]
                  },
                  {
                    id: 'prognosis-risk-stratification',
                    name: 'Prognose & Risikostratifizierung',
                    description: 'Langzeitprognose und Risikoeinschätzung',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'therapy-prognosis',
                    children: [
                      {
                        id: 'timi-risk-score',
                        name: 'TIMI-Risk-Score',
                        description: 'Kurzzeit-Risikobewertung bei ACS',
                        icon: '🎯',
                        difficulty: 'medium',
                        parentId: 'prognosis-risk-stratification'
                      },
                      {
                        id: 'stress-testing',
                        name: 'Belastungsuntersuchungen',
                        description: 'Ergometrie, Stress-Echo, Myokardszintigraphie',
                        icon: '🏃',
                        difficulty: 'medium',
                        parentId: 'prognosis-risk-stratification'
                      },
                      {
                        id: 'echocardiography-followup',
                        name: 'Echokardiographie-Follow-up',
                        description: 'Kontrolle der Herzfunktion',
                        icon: '📸',
                        difficulty: 'medium',
                        parentId: 'prognosis-risk-stratification'
                      },
                      {
                        id: 'biomarker-prognosis',
                        name: 'Prognostische Biomarker',
                        description: 'NT-proBNP, hs-CRP, hochsensitives Troponin',
                        icon: '🧪',
                        difficulty: 'medium',
                        parentId: 'prognosis-risk-stratification'
                      },
                      {
                        id: 'sudden-cardiac-death-risk',
                        name: 'Plötzlicher Herztod-Risiko',
                        description: 'ICD-Indikation und Primärprävention',
                        icon: '⚡',
                        difficulty: 'hard',
                        parentId: 'prognosis-risk-stratification'
                      }
                    ]
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
              },
              {
                id: 'hf-etiology',
                name: 'Ätiologie',
                description: 'Ursachen der Herzinsuffizienz',
                icon: '🔍',
                difficulty: 'medium',
                parentId: 'heart-failure',
                children: [
                  {
                    id: 'ischemic-cardiomyopathy',
                    name: 'Ischämische Kardiomyopathie (KHK)',
                    description: 'Herzinsuffizienz durch koronare Herzkrankheit',
                    icon: '🫀',
                    difficulty: 'medium',
                    parentId: 'hf-etiology'
                  },
                  {
                    id: 'dilated-cardiomyopathy',
                    name: 'Dilatative Kardiomyopathie',
                    description: 'Erweiterte und schwache Herzkammern',
                    icon: '🫧',
                    difficulty: 'medium',
                    parentId: 'hf-etiology'
                  },
                  {
                    id: 'hypertensive-heart-disease',
                    name: 'Hypertensive Herzerkrankung',
                    description: 'Herzinsuffizienz durch Bluthochdruck',
                    icon: '📈',
                    difficulty: 'medium',
                    parentId: 'hf-etiology'
                  },
                  {
                    id: 'valvular-heart-disease',
                    name: 'Klappenvitien',
                    description: 'Herzklappenfehler als Ursache',
                    icon: '🚪',
                    difficulty: 'medium',
                    parentId: 'hf-etiology'
                  },
                  {
                    id: 'alcohol-toxic-cardiomyopathy',
                    name: 'Alkohol-/toxische Kardiomyopathie',
                    description: 'Herzschädigung durch Toxine',
                    icon: '🍷',
                    difficulty: 'medium',
                    parentId: 'hf-etiology'
                  },
                  {
                    id: 'infectious-cardiomyopathy',
                    name: 'Infektiöse Kardiomyopathie',
                    description: 'Myokarditis und infektionsbedingte Schädigungen',
                    icon: '🦠',
                    difficulty: 'medium',
                    parentId: 'hf-etiology'
                  },
                  {
                    id: 'peripartum-cardiomyopathy',
                    name: 'Peripartum-Kardiomyopathie',
                    description: 'Schwangerschaftsassoziierte Herzinsuffizienz',
                    icon: '🤰',
                    difficulty: 'hard',
                    parentId: 'hf-etiology'
                  }
                ]
              },
              {
                id: 'hf-pathophysiology',
                name: 'Pathophysiologie',
                description: 'Entstehungsmechanismen der Herzinsuffizienz',
                icon: '🔬',
                difficulty: 'hard',
                parentId: 'heart-failure',
                children: [
                  {
                    id: 'frank-starling-mechanism',
                    name: 'Frank-Starling-Mechanismus',
                    description: 'Beziehung zwischen Vorlast und Kontraktilität',
                    icon: '📊',
                    difficulty: 'hard',
                    parentId: 'hf-pathophysiology'
                  },
                  {
                    id: 'neurohormonal-activation',
                    name: 'Neurohumorale Aktivierung',
                    description: 'Hormonelle Kompensationsmechanismen',
                    icon: '🧪',
                    difficulty: 'hard',
                    parentId: 'hf-pathophysiology'
                  },
                  {
                    id: 'sympathetic-activation',
                    name: 'Sympathikus-Aktivierung',
                    description: 'Stresshormon-Aktivierung bei Herzinsuffizienz',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'hf-pathophysiology'
                  },
                  {
                    id: 'raas-activation',
                    name: 'RAAS-Aktivierung',
                    description: 'Renin-Angiotensin-Aldosteron-System',
                    icon: '🫘',
                    difficulty: 'hard',
                    parentId: 'hf-pathophysiology'
                  },
                  {
                    id: 'ventricular-remodeling',
                    name: 'Ventricular Remodeling',
                    description: 'Strukturelle Herzveränderungen',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'hf-pathophysiology'
                  },
                  {
                    id: 'myocardial-hypertrophy',
                    name: 'Myokardhypertrophie',
                    description: 'Verdickung der Herzmuskulatur',
                    icon: '💪',
                    difficulty: 'medium',
                    parentId: 'hf-pathophysiology'
                  }
                ]
              },
              {
                id: 'hf-symptoms',
                name: 'Symptomatik',
                description: 'Klinische Zeichen der Herzinsuffizienz',
                icon: '🩺',
                difficulty: 'easy',
                parentId: 'heart-failure',
                children: [
                  {
                    id: 'dyspnea',
                    name: 'Dyspnoe (Belastungs-/Ruhedyspnoe)',
                    description: 'Atemnot bei Belastung oder in Ruhe',
                    icon: '💨',
                    difficulty: 'easy',
                    parentId: 'hf-symptoms'
                  },
                  {
                    id: 'orthopnea-pnd',
                    name: 'Orthopnoe & paroxysmale nächtliche Dyspnoe',
                    description: 'Atemnot im Liegen und nächtliche Anfälle',
                    icon: '🛏️',
                    difficulty: 'medium',
                    parentId: 'hf-symptoms'
                  },
                  {
                    id: 'fatigue-reduced-performance',
                    name: 'Müdigkeit & Leistungsminderung',
                    description: 'Erschöpfung und reduzierte Belastbarkeit',
                    icon: '😴',
                    difficulty: 'easy',
                    parentId: 'hf-symptoms'
                  },
                  {
                    id: 'edema',
                    name: 'Ödeme (Beine, Aszites, Pleuraerguss)',
                    description: 'Flüssigkeitsansammlungen im Körper',
                    icon: '💧',
                    difficulty: 'easy',
                    parentId: 'hf-symptoms'
                  },
                  {
                    id: 'nocturia',
                    name: 'Nykturie',
                    description: 'Nächtliches häufiges Wasserlassen',
                    icon: '🌙',
                    difficulty: 'easy',
                    parentId: 'hf-symptoms'
                  },
                  {
                    id: 'bendopnea',
                    name: 'Bendopnoe',
                    description: 'Atemnot beim Bücken',
                    icon: '🤸',
                    difficulty: 'medium',
                    parentId: 'hf-symptoms'
                  }
                ]
              },
              {
                id: 'hf-diagnostics',
                name: 'Diagnostik',
                description: 'Untersuchungsmethoden bei Herzinsuffizienz',
                icon: '🔬',
                difficulty: 'medium',
                parentId: 'heart-failure',
                children: [
                  {
                    id: 'bnp-nt-probnp',
                    name: 'BNP/NT-proBNP',
                    description: 'Natriuretische Peptide als Biomarker',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'hf-diagnostics'
                  },
                  {
                    id: 'echocardiography-hf',
                    name: 'Echokardiographie (EF, Wandbewegung, Diastologie)',
                    description: 'Ultraschalluntersuchung des Herzens',
                    icon: '📸',
                    difficulty: 'medium',
                    parentId: 'hf-diagnostics'
                  },
                  {
                    id: 'ekg-hf',
                    name: 'EKG (Rhythmus, Hypertrophie, Ischämie)',
                    description: 'Elektrokardiogramm bei Herzinsuffizienz',
                    icon: '📈',
                    difficulty: 'easy',
                    parentId: 'hf-diagnostics'
                  },
                  {
                    id: 'chest-xray',
                    name: 'Röntgen-Thorax (Kardiomegalie, Stauung)',
                    description: 'Röntgenuntersuchung der Brust',
                    icon: '📷',
                    difficulty: 'easy',
                    parentId: 'hf-diagnostics'
                  },
                  {
                    id: 'cardiac-catheterization-hf',
                    name: 'Herzkatheter',
                    description: 'Invasive Herzdiagnostik',
                    icon: '🔍',
                    difficulty: 'hard',
                    parentId: 'hf-diagnostics'
                  },
                  {
                    id: 'cardiac-mri',
                    name: 'Kardio-MRT',
                    description: 'Magnetresonanztomographie des Herzens',
                    icon: '🧲',
                    difficulty: 'medium',
                    parentId: 'hf-diagnostics'
                  }
                ]
              },
              {
                id: 'hf-therapy',
                name: 'Therapie',
                description: 'Behandlung der Herzinsuffizienz',
                icon: '💊',
                difficulty: 'medium',
                parentId: 'heart-failure',
                children: [
                  {
                    id: 'ace-arb-arni',
                    name: 'ACE-Hemmer/ARB/ARNI',
                    description: 'RAAS-Blockade und Angiotensin-Rezeptor-Neprilysin-Inhibitor',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'hf-therapy'
                  },
                  {
                    id: 'beta-blockers-hf',
                    name: 'Betablocker',
                    description: 'Sympathikus-Blockade bei Herzinsuffizienz',
                    icon: '🚫',
                    difficulty: 'medium',
                    parentId: 'hf-therapy'
                  },
                  {
                    id: 'diuretics',
                    name: 'Diuretika (Schleife/Thiazid/K+-sparend)',
                    description: 'Entwässernde Medikamente',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'hf-therapy'
                  },
                  {
                    id: 'aldosterone-antagonists',
                    name: 'Aldosteron-Antagonisten',
                    description: 'Mineralokortikoid-Rezeptor-Antagonisten',
                    icon: '⚖️',
                    difficulty: 'medium',
                    parentId: 'hf-therapy'
                  },
                  {
                    id: 'sglt2-inhibitors',
                    name: 'SGLT2-Inhibitoren',
                    description: 'Natrium-Glukose-Cotransporter-2-Hemmer',
                    icon: '🍯',
                    difficulty: 'hard',
                    parentId: 'hf-therapy'
                  },
                  {
                    id: 'device-therapy',
                    name: 'Device-Therapie (CRT, ICD, VAD)',
                    description: 'Implantattherapie bei Herzinsuffizienz',
                    icon: '🔋',
                    difficulty: 'hard',
                    parentId: 'hf-therapy'
                  },
                  {
                    id: 'heart-transplantation',
                    name: 'Herztransplantation',
                    description: 'Herzersatz bei terminaler Herzinsuffizienz',
                    icon: '🫀',
                    difficulty: 'hard',
                    parentId: 'hf-therapy'
                  }
                ]
              }
            ]
          },
          {
            id: 'valvular-heart-diseases',
            name: 'Klappenvitien',
            description: 'Herzklappenfehler und -erkrankungen',
            icon: '🚪',
            difficulty: 'hard',
            parentId: 'cardiovascular-diseases',
            children: [
              {
                id: 'aortic-stenosis',
                name: 'Aortenklappenstenose',
                description: 'Verengung der Aortenklappe',
                icon: '🔒',
                difficulty: 'hard',
                parentId: 'valvular-heart-diseases',
                children: [
                  {
                    id: 'as-etiology',
                    name: 'Ätiologie (degenerativ, rheumatisch, bikuspid)',
                    description: 'Ursachen der Aortenklappenstenose',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'aortic-stenosis'
                  },
                  {
                    id: 'as-pathophysiology',
                    name: 'Pathophysiologie (Druckbelastung LV)',
                    description: 'Druckbelastung des linken Ventrikels',
                    icon: '📈',
                    difficulty: 'hard',
                    parentId: 'aortic-stenosis'
                  },
                  {
                    id: 'as-symptoms',
                    name: 'Symptomatik (Angina, Dyspnoe, Synkope)',
                    description: 'Klassische Trias der Aortenklappenstenose',
                    icon: '💔',
                    difficulty: 'medium',
                    parentId: 'aortic-stenosis'
                  },
                  {
                    id: 'as-echocardiography',
                    name: 'Echokardiographie (Öffnungsfläche, Gradient)',
                    description: 'Echokardiographische Beurteilung',
                    icon: '📸',
                    difficulty: 'medium',
                    parentId: 'aortic-stenosis'
                  },
                  {
                    id: 'as-severity',
                    name: 'Schweregrad (leicht/mittel/schwer)',
                    description: 'Einteilung nach Schweregrad',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'aortic-stenosis'
                  },
                  {
                    id: 'as-therapy',
                    name: 'Therapie (TAVI, Aortenklappenersatz)',
                    description: 'Operative und interventionelle Behandlung',
                    icon: '🔧',
                    difficulty: 'hard',
                    parentId: 'aortic-stenosis'
                  }
                ]
              },
              {
                id: 'aortic-regurgitation',
                name: 'Aortenklappeninsuffizienz',
                description: 'Undichtigkeit der Aortenklappe',
                icon: '💧',
                difficulty: 'hard',
                parentId: 'valvular-heart-diseases',
                children: [
                  {
                    id: 'ar-etiology',
                    name: 'Ätiologie (Klappenerkrankung, Aortenwurzel)',
                    description: 'Klappen- vs. Aortenwurzelerkrankung',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'aortic-regurgitation'
                  },
                  {
                    id: 'ar-pathophysiology',
                    name: 'Pathophysiologie (Volumenbelastung LV)',
                    description: 'Volumenbelastung des linken Ventrikels',
                    icon: '🫧',
                    difficulty: 'hard',
                    parentId: 'aortic-regurgitation'
                  },
                  {
                    id: 'acute-chronic-ar',
                    name: 'Akute vs. chronische AI',
                    description: 'Unterschiede in Verlauf und Kompensation',
                    icon: '⏰',
                    difficulty: 'medium',
                    parentId: 'aortic-regurgitation'
                  },
                  {
                    id: 'ar-clinical-signs',
                    name: 'Klinische Zeichen (Wasserhammer-Puls)',
                    description: 'Charakteristische körperliche Befunde',
                    icon: '👨‍⚕️',
                    difficulty: 'medium',
                    parentId: 'aortic-regurgitation'
                  },
                  {
                    id: 'ar-therapy-indications',
                    name: 'Therapie-Indikationen',
                    description: 'Operative Indikationen bei AI',
                    icon: '⚕️',
                    difficulty: 'hard',
                    parentId: 'aortic-regurgitation'
                  }
                ]
              },
              {
                id: 'mitral-regurgitation',
                name: 'Mitralklappeninsuffizienz',
                description: 'Undichtigkeit der Mitralklappe',
                icon: '💧',
                difficulty: 'hard',
                parentId: 'valvular-heart-diseases',
                children: [
                  {
                    id: 'mr-etiology',
                    name: 'Ätiologie (degenerativ, funktionell, rheumatisch)',
                    description: 'Ursachen der Mitralklappeninsuffizienz',
                    icon: '🔍',
                    difficulty: 'medium',
                    parentId: 'mitral-regurgitation'
                  },
                  {
                    id: 'mr-pathophysiology',
                    name: 'Pathophysiologie (Volumenbelastung LA/LV)',
                    description: 'Hämodynamische Auswirkungen',
                    icon: '🫧',
                    difficulty: 'hard',
                    parentId: 'mitral-regurgitation'
                  },
                  {
                    id: 'mr-severity-assessment',
                    name: 'Schweregrad-Beurteilung (EROA, Regurgitationsvolumen)',
                    description: 'Quantifizierung der Mitralklappeninsuffizienz',
                    icon: '📏',
                    difficulty: 'hard',
                    parentId: 'mitral-regurgitation'
                  },
                  {
                    id: 'carpentier-classification',
                    name: 'Carpentier-Klassifikation',
                    description: 'Funktionelle Klassifikation der MI',
                    icon: '📋',
                    difficulty: 'hard',
                    parentId: 'mitral-regurgitation'
                  },
                  {
                    id: 'mr-therapy',
                    name: 'Therapie (Repair vs. Ersatz, MitraClip)',
                    description: 'Operative und interventionelle Optionen',
                    icon: '🔧',
                    difficulty: 'hard',
                    parentId: 'mitral-regurgitation'
                  }
                ]
              },
              {
                id: 'mitral-stenosis',
                name: 'Mitralklappenstenose',
                description: 'Verengung der Mitralklappe',
                icon: '🔒',
                difficulty: 'hard',
                parentId: 'valvular-heart-diseases',
                children: [
                  {
                    id: 'ms-etiology',
                    name: 'Ätiologie (meist rheumatisch)',
                    description: 'Rheumatische Genese der Mitralklappenstenose',
                    icon: '🔥',
                    difficulty: 'medium',
                    parentId: 'mitral-stenosis'
                  },
                  {
                    id: 'ms-pathophysiology',
                    name: 'Pathophysiologie (Druckbelastung LA)',
                    description: 'Druckerhöhung im linken Vorhof',
                    icon: '📈',
                    difficulty: 'hard',
                    parentId: 'mitral-stenosis'
                  },
                  {
                    id: 'wilkins-score',
                    name: 'Wilkins-Score',
                    description: 'Echokardiographische Bewertung der Klappenqualität',
                    icon: '📊',
                    difficulty: 'hard',
                    parentId: 'mitral-stenosis'
                  },
                  {
                    id: 'ms-symptoms',
                    name: 'Symptomatik (Dyspnoe, Hämoptoe)',
                    description: 'Klinische Präsentation der Mitralklappenstenose',
                    icon: '💨',
                    difficulty: 'medium',
                    parentId: 'mitral-stenosis'
                  },
                  {
                    id: 'ms-therapy',
                    name: 'Therapie (Valvuloplastie, Ersatz)',
                    description: 'Operative und interventionelle Behandlung',
                    icon: '🔧',
                    difficulty: 'hard',
                    parentId: 'mitral-stenosis'
                  }
                ]
              },
              {
                id: 'tricuspid-pulmonary-valves',
                name: 'Trikuspidal-/Pulmonalklappenvitien',
                description: 'Erkrankungen der rechtsseitigen Herzklappen',
                icon: '↔️',
                difficulty: 'hard',
                parentId: 'valvular-heart-diseases',
                children: [
                  {
                    id: 'tricuspid-regurgitation',
                    name: 'Trikuspidalinsuffizienz (funktionell/organisch)',
                    description: 'Undichtigkeit der Trikuspidalklappe',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'tricuspid-pulmonary-valves'
                  },
                  {
                    id: 'tricuspid-stenosis',
                    name: 'Tricuspidalstenose (selten)',
                    description: 'Seltene Verengung der Trikuspidalklappe',
                    icon: '🔒',
                    difficulty: 'hard',
                    parentId: 'tricuspid-pulmonary-valves'
                  },
                  {
                    id: 'pulmonary-stenosis',
                    name: 'Pulmonalklappenstenose',
                    description: 'Verengung der Pulmonalklappe',
                    icon: '🔒',
                    difficulty: 'medium',
                    parentId: 'tricuspid-pulmonary-valves'
                  },
                  {
                    id: 'pulmonary-regurgitation',
                    name: 'Pulmonalklappeninsuffizienz',
                    description: 'Undichtigkeit der Pulmonalklappe',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'tricuspid-pulmonary-valves'
                  },
                  {
                    id: 'right-sided-valve-therapy',
                    name: 'Therapieoptionen',
                    description: 'Behandlungsmöglichkeiten rechtsseitiger Klappenvitien',
                    icon: '⚕️',
                    difficulty: 'hard',
                    parentId: 'tricuspid-pulmonary-valves'
                  }
                ]
              }
            ]
          },
          {
            id: 'other-cardiovascular-diseases',
            name: 'Weitere Herz-Kreislauf-Erkrankungen',
            description: 'Zusätzliche kardiovaskuläre Pathologien',
            icon: '🫀',
            difficulty: 'hard',
            parentId: 'cardiovascular-diseases',
            children: [
              {
                id: 'arterial-hypertension',
                name: 'Arterielle Hypertonie',
                description: 'Bluthochdruck und seine Folgen',
                icon: '📈',
                difficulty: 'medium',
                parentId: 'other-cardiovascular-diseases',
                children: [
                  {
                    id: 'primary-hypertension',
                    name: 'Primäre/essenzielle Hypertonie (90%)',
                    description: 'Bluthochdruck unbekannter Ursache',
                    icon: '❓',
                    difficulty: 'medium',
                    parentId: 'arterial-hypertension'
                  },
                  {
                    id: 'secondary-hypertension',
                    name: 'Sekundäre Hypertonie (10%)',
                    description: 'Bluthochdruck mit bekannter Ursache',
                    icon: '🔍',
                    difficulty: 'hard',
                    parentId: 'arterial-hypertension',
                    children: [
                      {
                        id: 'renal-hypertension',
                        name: 'Renal (Nierenarterienstenose)',
                        description: 'Nierenbedingte Hypertonie',
                        icon: '🫘',
                        difficulty: 'hard',
                        parentId: 'secondary-hypertension'
                      },
                      {
                        id: 'endocrine-hypertension',
                        name: 'Endokrin (Conn, Cushing, Phäo)',
                        description: 'Hormonell bedingte Hypertonie',
                        icon: '🧪',
                        difficulty: 'hard',
                        parentId: 'secondary-hypertension'
                      },
                      {
                        id: 'vascular-hypertension',
                        name: 'Vaskulär (Aortenisthmusstenose)',
                        description: 'Gefäßbedingte Hypertonie',
                        icon: '🩸',
                        difficulty: 'hard',
                        parentId: 'secondary-hypertension'
                      },
                      {
                        id: 'drug-induced-hypertension',
                        name: 'Medikamentös',
                        description: 'Medikamenten-induzierte Hypertonie',
                        icon: '💊',
                        difficulty: 'medium',
                        parentId: 'secondary-hypertension'
                      }
                    ]
                  },
                  {
                    id: 'esc-esh-guidelines',
                    name: 'ESC/ESH-Leitlinien (Zielwerte)',
                    description: 'Europäische Hypertonieleitlinien',
                    icon: '📋',
                    difficulty: 'medium',
                    parentId: 'arterial-hypertension'
                  },
                  {
                    id: 'target-organ-damage',
                    name: 'Organschäden (Herz, Niere, Auge, Gehirn)',
                    description: 'Endorganschäden durch Hypertonie',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'arterial-hypertension'
                  },
                  {
                    id: 'hypertensive-crisis',
                    name: 'Hypertensive Krise/Notfall',
                    description: 'Akute schwere Blutdruckentgleisung',
                    icon: '🚨',
                    difficulty: 'hard',
                    parentId: 'arterial-hypertension'
                  },
                  {
                    id: 'stepped-care-therapy',
                    name: 'Stufentherapie',
                    description: 'Medikamentöse Behandlungsstrategie',
                    icon: '📶',
                    difficulty: 'medium',
                    parentId: 'arterial-hypertension'
                  }
                ]
              },
              {
                id: 'peripheral-arterial-disease',
                name: 'Periphere arterielle Verschlusskrankheit (pAVK)',
                description: 'Durchblutungsstörungen der Extremitäten',
                icon: '🦵',
                difficulty: 'hard',
                parentId: 'other-cardiovascular-diseases',
                children: [
                  {
                    id: 'claudication',
                    name: 'Claudicatio intermittens',
                    description: 'Belastungsabhängige Beinschmerzen',
                    icon: '🚶',
                    difficulty: 'medium',
                    parentId: 'peripheral-arterial-disease'
                  },
                  {
                    id: 'fontaine-classification',
                    name: 'Fontaine-Klassifikation (I-IV)',
                    description: 'Schweregrad-Einteilung der pAVK',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'peripheral-arterial-disease'
                  },
                  {
                    id: 'rutherford-classification',
                    name: 'Rutherford-Klassifikation',
                    description: 'Alternative Klassifikation der pAVK',
                    icon: '📋',
                    difficulty: 'medium',
                    parentId: 'peripheral-arterial-disease'
                  },
                  {
                    id: 'abi-index',
                    name: 'ABI (Ankle-Brachial-Index)',
                    description: 'Knöchel-Arm-Index zur Diagnostik',
                    icon: '📏',
                    difficulty: 'medium',
                    parentId: 'peripheral-arterial-disease'
                  },
                  {
                    id: 'critical-limb-ischemia',
                    name: 'Critical Limb Ischemia',
                    description: 'Kritische Extremitätenischämie',
                    icon: '🚨',
                    difficulty: 'hard',
                    parentId: 'peripheral-arterial-disease'
                  },
                  {
                    id: 'revascularization',
                    name: 'Revaskularisation (PTA, Bypass)',
                    description: 'Operative und interventionelle Therapie',
                    icon: '🔧',
                    difficulty: 'hard',
                    parentId: 'peripheral-arterial-disease'
                  }
                ]
              },
              {
                id: 'acute-aortic-syndrome',
                name: 'Akutes Aortensyndrom',
                description: 'Akute Aortenerkrankungen',
                icon: '💥',
                difficulty: 'hard',
                parentId: 'other-cardiovascular-diseases',
                children: [
                  {
                    id: 'aortic-dissection',
                    name: 'Aortendissektion (Stanford A/B, DeBakey I-III)',
                    description: 'Einriss der Aortenwand',
                    icon: '💔',
                    difficulty: 'hard',
                    parentId: 'acute-aortic-syndrome'
                  },
                  {
                    id: 'intramural-hematoma',
                    name: 'Intramurales Hämatom',
                    description: 'Blutung in die Aortenwand',
                    icon: '🩸',
                    difficulty: 'hard',
                    parentId: 'acute-aortic-syndrome'
                  },
                  {
                    id: 'penetrating-ulcer',
                    name: 'Penetrierendes Ulkus',
                    description: 'Durchbrechendes Aortengeschwür',
                    icon: '🕳️',
                    difficulty: 'hard',
                    parentId: 'acute-aortic-syndrome'
                  },
                  {
                    id: 'aortic-rupture',
                    name: 'Aortenruptur',
                    description: 'Kompletter Aortenriss',
                    icon: '💥',
                    difficulty: 'hard',
                    parentId: 'acute-aortic-syndrome'
                  },
                  {
                    id: 'endovascular-therapy',
                    name: 'Endovaskuläre Therapie (TEVAR, EVAR)',
                    description: 'Minimal-invasive Aortentherapie',
                    icon: '🔧',
                    difficulty: 'hard',
                    parentId: 'acute-aortic-syndrome'
                  }
                ]
              },
              {
                id: 'venous-thromboembolism',
                name: 'Venöse Thromboembolie',
                description: 'Thrombosen und Embolien im Venensystem',
                icon: '🩸',
                difficulty: 'hard',
                parentId: 'other-cardiovascular-diseases',
                children: [
                  {
                    id: 'deep-vein-thrombosis',
                    name: 'Tiefe Beinvenenthrombose (TVT)',
                    description: 'Thrombose der tiefen Beinvenen',
                    icon: '🦵',
                    difficulty: 'medium',
                    parentId: 'venous-thromboembolism'
                  },
                  {
                    id: 'pulmonary-embolism',
                    name: 'Lungenembolie',
                    description: 'Verschluss von Lungenarterien',
                    icon: '🫁',
                    difficulty: 'hard',
                    parentId: 'venous-thromboembolism'
                  },
                  {
                    id: 'wells-score',
                    name: 'Wells-Score',
                    description: 'Klinische Wahrscheinlichkeitsbewertung',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'venous-thromboembolism'
                  },
                  {
                    id: 'd-dimer',
                    name: 'D-Dimere',
                    description: 'Labormarker für Thrombose',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'venous-thromboembolism'
                  },
                  {
                    id: 'anticoagulation-vte',
                    name: 'Antikoagulation',
                    description: 'Gerinnungshemmende Therapie',
                    icon: '💊',
                    difficulty: 'medium',
                    parentId: 'venous-thromboembolism'
                  }
                ]
              },
              {
                id: 'cardiomyopathies',
                name: 'Kardiomyopathien',
                description: 'Erkrankungen des Herzmuskels',
                icon: '💔',
                difficulty: 'hard',
                parentId: 'other-cardiovascular-diseases',
                children: [
                  {
                    id: 'dilated-cardiomyopathy-dcm',
                    name: 'Dilatative Kardiomyopathie (DCM)',
                    description: 'Erweiterte und schwache Herzkammern',
                    icon: '🫧',
                    difficulty: 'hard',
                    parentId: 'cardiomyopathies'
                  },
                  {
                    id: 'hypertrophic-cardiomyopathy',
                    name: 'Hypertrophe Kardiomyopathie (HCM/HOCM)',
                    description: 'Verdickte Herzmuskulatur',
                    icon: '💪',
                    difficulty: 'hard',
                    parentId: 'cardiomyopathies'
                  },
                  {
                    id: 'restrictive-cardiomyopathy',
                    name: 'Restriktive Kardiomyopathie',
                    description: 'Eingeschränkte Herzfüllung',
                    icon: '🔒',
                    difficulty: 'hard',
                    parentId: 'cardiomyopathies'
                  },
                  {
                    id: 'arrhythmogenic-rv-cardiomyopathy',
                    name: 'Arrhythmogene rechtsventrikuläre Kardiomyopathie',
                    description: 'ARVC mit Rhythmusstörungen',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'cardiomyopathies'
                  },
                  {
                    id: 'takotsubo-cardiomyopathy',
                    name: 'Tako-Tsubo-Kardiomyopathie',
                    description: 'Stress-induzierte Kardiomyopathie',
                    icon: '💔',
                    difficulty: 'medium',
                    parentId: 'cardiomyopathies'
                  }
                ]
              },
              {
                id: 'shock-forms',
                name: 'Schock-Formen',
                description: 'Verschiedene Arten des Kreislaufschocks',
                icon: '🚨',
                difficulty: 'hard',
                parentId: 'other-cardiovascular-diseases',
                children: [
                  {
                    id: 'cardiogenic-shock-forms',
                    name: 'Kardiogener Schock',
                    description: 'Schock durch Herzversagen',
                    icon: '💔',
                    difficulty: 'hard',
                    parentId: 'shock-forms'
                  },
                  {
                    id: 'hypovolemic-shock',
                    name: 'Hypovolämischer Schock',
                    description: 'Schock durch Volumenmangel',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'shock-forms'
                  },
                  {
                    id: 'distributive-shock',
                    name: 'Distributiver Schock (septisch, anaphylaktisch)',
                    description: 'Schock durch Gefäßweitstellung',
                    icon: '🌡️',
                    difficulty: 'hard',
                    parentId: 'shock-forms'
                  },
                  {
                    id: 'obstructive-shock',
                    name: 'Obstruktiver Schock',
                    description: 'Schock durch mechanische Obstruktion',
                    icon: '🚫',
                    difficulty: 'hard',
                    parentId: 'shock-forms'
                  },
                  {
                    id: 'shock-therapy',
                    name: 'Schock-Therapie (Katecholamine, Volumen)',
                    description: 'Behandlung verschiedener Schockformen',
                    icon: '💉',
                    difficulty: 'hard',
                    parentId: 'shock-forms'
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
        description: 'Erkrankungen des Atemsystems',
        icon: '🫁',
        difficulty: 'hard',
        parentId: 'pathology',
        children: [
          {
            id: 'obstructive-lung-diseases',
            name: 'Obstruktive Lungenerkrankungen',
            description: 'Atemwegsobstruktion und Ventilationsstörungen',
            icon: '🌬️',
            difficulty: 'hard',
            parentId: 'respiratory-diseases',
            children: [
              {
                id: 'copd',
                name: 'COPD (Chronic Obstructive Pulmonary Disease)',
                description: 'Chronisch obstruktive Lungenerkrankung',
                icon: '🚭',
                difficulty: 'hard',
                parentId: 'obstructive-lung-diseases',
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
                  },
                  {
                    id: 'copd-symptoms',
                    name: 'Symptomatik',
                    description: 'Klinische Zeichen der COPD',
                    icon: '🫁',
                    difficulty: 'medium',
                    parentId: 'copd',
                    children: [
                      {
                        id: 'aha-symptoms',
                        name: 'AHA-Symptomatik (Auswurf, Husten, Atemnot)',
                        description: 'Klassische COPD-Symptome',
                        icon: '😮‍💨',
                        difficulty: 'easy',
                        parentId: 'copd-symptoms'
                      },
                      {
                        id: 'dyspnea-progression',
                        name: 'Belastungsatemnot → Ruheatemnot',
                        description: 'Progression der Atemnot',
                        icon: '📈',
                        difficulty: 'medium',
                        parentId: 'copd-symptoms'
                      },
                      {
                        id: 'cor-pulmonale',
                        name: 'Rechtsherzinsuffizienz (Cor pulmonale)',
                        description: 'Herzinsuffizienz durch Lungenhochdruck',
                        icon: '❤️‍🩹',
                        difficulty: 'hard',
                        parentId: 'copd-symptoms'
                      },
                      {
                        id: 'barrel-chest',
                        name: 'Barrel Chest (Fassthorax)',
                        description: 'Thoraxdeformierung bei Emphysem',
                        icon: '🛢️',
                        difficulty: 'medium',
                        parentId: 'copd-symptoms'
                      },
                      {
                        id: 'pink-puffer-blue-bloater',
                        name: 'Pink Puffer vs. Blue Bloater',
                        description: 'COPD-Phänotypen',
                        icon: '🎭',
                        difficulty: 'hard',
                        parentId: 'copd-symptoms'
                      }
                    ]
                  },
                  {
                    id: 'copd-diagnostics',
                    name: 'Diagnostik',
                    description: 'Diagnosestellung bei COPD',
                    icon: '🔬',
                    difficulty: 'medium',
                    parentId: 'copd',
                    children: [
                      {
                        id: 'spirometry',
                        name: 'Spirometrie (FEV1/FVC < 0,7 post-BD)',
                        description: 'Lungenfunktionsprüfung',
                        icon: '📊',
                        difficulty: 'medium',
                        parentId: 'copd-diagnostics'
                      },
                      {
                        id: 'bodyplethysmography',
                        name: 'Bodyplethysmographie (RV, TLC)',
                        description: 'Messung aller Lungenvolumina',
                        icon: '📈',
                        difficulty: 'hard',
                        parentId: 'copd-diagnostics'
                      },
                      {
                        id: 'co-diffusion',
                        name: 'CO-Diffusion (DLCO)',
                        description: 'Diffusionskapazität der Lunge',
                        icon: '🔄',
                        difficulty: 'hard',
                        parentId: 'copd-diagnostics'
                      },
                      {
                        id: 'blood-gas-analysis',
                        name: 'Blutgasanalyse',
                        description: 'Sauerstoff- und CO2-Werte',
                        icon: '🩸',
                        difficulty: 'medium',
                        parentId: 'copd-diagnostics'
                      },
                      {
                        id: 'ct-thorax',
                        name: 'CT-Thorax (Emphysem)',
                        description: 'Bildgebung der Lunge',
                        icon: '🔍',
                        difficulty: 'medium',
                        parentId: 'copd-diagnostics'
                      },
                      {
                        id: 'six-minute-walk-test',
                        name: '6-Minuten-Gehtest',
                        description: 'Belastungstest',
                        icon: '🚶',
                        difficulty: 'easy',
                        parentId: 'copd-diagnostics'
                      }
                    ]
                  },
                  {
                    id: 'copd-therapy',
                    name: 'Therapie',
                    description: 'Behandlung der COPD',
                    icon: '💊',
                    difficulty: 'hard',
                    parentId: 'copd',
                    children: [
                      {
                        id: 'bronchodilators',
                        name: 'Bronchodilatatoren (SABA, LABA, SAMA, LAMA)',
                        description: 'Atemwegserweiternde Medikamente',
                        icon: '🌬️',
                        difficulty: 'hard',
                        parentId: 'copd-therapy'
                      },
                      {
                        id: 'inhaled-corticosteroids',
                        name: 'Inhalative Kortikosteroide (ICS)',
                        description: 'Entzündungshemmende Inhalativa',
                        icon: '💨',
                        difficulty: 'medium',
                        parentId: 'copd-therapy'
                      },
                      {
                        id: 'triple-therapy',
                        name: 'Triple-Therapie (LABA/LAMA/ICS)',
                        description: 'Dreifachkombination',
                        icon: '🎯',
                        difficulty: 'hard',
                        parentId: 'copd-therapy'
                      },
                      {
                        id: 'theophylline',
                        name: 'Theophyllin',
                        description: 'Xanthin-Derivat',
                        icon: '☕',
                        difficulty: 'medium',
                        parentId: 'copd-therapy'
                      },
                      {
                        id: 'oxygen-therapy',
                        name: 'Sauerstoff-Langzeittherapie (>15h/Tag)',
                        description: 'Domiziliäre O2-Therapie',
                        icon: '🫧',
                        difficulty: 'medium',
                        parentId: 'copd-therapy'
                      },
                      {
                        id: 'niv-therapy',
                        name: 'NIV (Nicht-invasive Beatmung)',
                        description: 'Maskenbeatmung',
                        icon: '😷',
                        difficulty: 'hard',
                        parentId: 'copd-therapy'
                      },
                      {
                        id: 'lung-volume-reduction',
                        name: 'Lungenvolumenreduktion',
                        description: 'Chirurgische/bronchoskopische Therapie',
                        icon: '✂️',
                        difficulty: 'hard',
                        parentId: 'copd-therapy'
                      },
                      {
                        id: 'pulmonary-rehabilitation',
                        name: 'Rehabilitation',
                        description: 'Pneumologische Reha',
                        icon: '🏥',
                        difficulty: 'medium',
                        parentId: 'copd-therapy'
                      }
                    ]
                  },
                  {
                    id: 'copd-exacerbation',
                    name: 'Exazerbation',
                    description: 'Akute Verschlechterung der COPD',
                    icon: '🚨',
                    difficulty: 'hard',
                    parentId: 'copd',
                    children: [
                      {
                        id: 'exacerbation-definition',
                        name: 'Definition & Trigger',
                        description: 'Akute Symptomverschlechterung',
                        icon: '📋',
                        difficulty: 'medium',
                        parentId: 'copd-exacerbation'
                      },
                      {
                        id: 'symptom-worsening',
                        name: 'Symptomverschlechterung',
                        description: 'Zunahme von Atemnot, Husten, Auswurf',
                        icon: '📈',
                        difficulty: 'medium',
                        parentId: 'copd-exacerbation'
                      },
                      {
                        id: 'exacerbation-therapy',
                        name: 'Therapie (Prednisolon, Antibiotika)',
                        description: 'Akutbehandlung der Exazerbation',
                        icon: '💉',
                        difficulty: 'hard',
                        parentId: 'copd-exacerbation'
                      },
                      {
                        id: 'anthonisen-criteria',
                        name: 'Anthonisen-Kriterien',
                        description: 'Indikation für Antibiotikatherapie',
                        icon: '✅',
                        difficulty: 'hard',
                        parentId: 'copd-exacerbation'
                      },
                      {
                        id: 'exacerbation-prevention',
                        name: 'Prävention',
                        description: 'Vermeidung von Exazerbationen',
                        icon: '🛡️',
                        difficulty: 'medium',
                        parentId: 'copd-exacerbation'
                      }
                    ]
                  },
                  {
                    id: 'copd-complications',
                    name: 'Komplikationen',
                    description: 'Folgeerkrankungen der COPD',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'copd',
                    children: [
                      {
                        id: 'respiratory-insufficiency',
                        name: 'Respiratorische Insuffizienz',
                        description: 'Versagen der Lungenfunktion',
                        icon: '🫁',
                        difficulty: 'hard',
                        parentId: 'copd-complications'
                      },
                      {
                        id: 'right-heart-failure',
                        name: 'Rechtsherzinsuffizienz',
                        description: 'Cor pulmonale chronicum',
                        icon: '💔',
                        difficulty: 'hard',
                        parentId: 'copd-complications'
                      },
                      {
                        id: 'pneumothorax',
                        name: 'Pneumothorax',
                        description: 'Lungenkollaps',
                        icon: '💨',
                        difficulty: 'medium',
                        parentId: 'copd-complications'
                      },
                      {
                        id: 'pneumonia',
                        name: 'Pneumonie',
                        description: 'Lungenentzündung',
                        icon: '🦠',
                        difficulty: 'medium',
                        parentId: 'copd-complications'
                      },
                      {
                        id: 'pulmonary-hypertension',
                        name: 'Pulmonale Hypertonie',
                        description: 'Lungenhochdruck',
                        icon: '📈',
                        difficulty: 'hard',
                        parentId: 'copd-complications'
                      }
                    ]
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
                  },
                  {
                    id: 'asthma-pathophysiology',
                    name: 'Pathophysiologie',
                    description: 'Krankheitsmechanismen des Asthmas',
                    icon: '⚙️',
                    difficulty: 'hard',
                    parentId: 'asthma',
                    children: [
                      {
                        id: 'airway-inflammation',
                        name: 'Atemwegsentzündung (eosinophil/neutrophil)',
                        description: 'Entzündliche Infiltration der Bronchien',
                        icon: '🔥',
                        difficulty: 'hard',
                        parentId: 'asthma-pathophysiology'
                      },
                      {
                        id: 'bronchospasm',
                        name: 'Bronchospasmus',
                        description: 'Akute Verengung der Bronchien',
                        icon: '🌀',
                        difficulty: 'medium',
                        parentId: 'asthma-pathophysiology'
                      },
                      {
                        id: 'mucus-hypersecretion',
                        name: 'Schleimhypersekretion',
                        description: 'Vermehrte Schleimproduktion',
                        icon: '💧',
                        difficulty: 'medium',
                        parentId: 'asthma-pathophysiology'
                      },
                      {
                        id: 'airway-remodeling',
                        name: 'Airway Remodeling',
                        description: 'Strukturelle Atemwegsveränderungen',
                        icon: '🏗️',
                        difficulty: 'hard',
                        parentId: 'asthma-pathophysiology'
                      },
                      {
                        id: 'bronchial-hyperreactivity',
                        name: 'Bronchiale Hyperreagibilität',
                        description: 'Überempfindlichkeit der Atemwege',
                        icon: '⚡',
                        difficulty: 'hard',
                        parentId: 'asthma-pathophysiology'
                      }
                    ]
                  },
                  {
                    id: 'asthma-symptoms',
                    name: 'Symptomatik',
                    description: 'Klinische Zeichen des Asthmas',
                    icon: '🫁',
                    difficulty: 'medium',
                    parentId: 'asthma',
                    children: [
                      {
                        id: 'paroxysmal-dyspnea',
                        name: 'Anfallsartige Atemnot',
                        description: 'Episodische Luftnot',
                        icon: '😮‍💨',
                        difficulty: 'medium',
                        parentId: 'asthma-symptoms'
                      },
                      {
                        id: 'wheezing',
                        name: 'Giemen & Pfeifen',
                        description: 'Charakteristische Atemgeräusche',
                        icon: '🎵',
                        difficulty: 'easy',
                        parentId: 'asthma-symptoms'
                      },
                      {
                        id: 'nocturnal-cough',
                        name: 'Husten (besonders nachts)',
                        description: 'Nächtliche Hustensymptomatik',
                        icon: '🌙',
                        difficulty: 'medium',
                        parentId: 'asthma-symptoms'
                      },
                      {
                        id: 'chest-tightness',
                        name: 'Engegefühl in der Brust',
                        description: 'Thorakales Druckgefühl',
                        icon: '🫷',
                        difficulty: 'medium',
                        parentId: 'asthma-symptoms'
                      },
                      {
                        id: 'variable-obstruction',
                        name: 'Variable Obstruktion',
                        description: 'Wechselnde Atemwegsobstruktion',
                        icon: '📈',
                        difficulty: 'hard',
                        parentId: 'asthma-symptoms'
                      }
                    ]
                  },
                  {
                    id: 'asthma-diagnostics',
                    name: 'Diagnostik',
                    description: 'Diagnosestellung bei Asthma',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'asthma',
                    children: [
                      {
                        id: 'spirometry-asthma',
                        name: 'Spirometrie (reversible Obstruktion >12% + 200ml)',
                        description: 'Nachweis der Reversibilität',
                        icon: '📊',
                        difficulty: 'hard',
                        parentId: 'asthma-diagnostics'
                      },
                      {
                        id: 'peak-flow',
                        name: 'Peak-Flow-Messung (Variabilität >20%)',
                        description: 'Verlaufskontrolle der Lungenfunktion',
                        icon: '📈',
                        difficulty: 'medium',
                        parentId: 'asthma-diagnostics'
                      },
                      {
                        id: 'allergy-diagnostics',
                        name: 'Allergiediagnostik (spez. IgE, Prick-Test)',
                        description: 'Nachweis allergischer Sensibilisierung',
                        icon: '🧪',
                        difficulty: 'medium',
                        parentId: 'asthma-diagnostics'
                      },
                      {
                        id: 'feno-measurement',
                        name: 'FeNO (Fractional exhaled Nitric Oxide)',
                        description: 'Messung der Atemwegsentzündung',
                        icon: '🌬️',
                        difficulty: 'hard',
                        parentId: 'asthma-diagnostics'
                      },
                      {
                        id: 'provocation-tests',
                        name: 'Provokationstests (Methacholin)',
                        description: 'Nachweis der Hyperreagibilität',
                        icon: '⚗️',
                        difficulty: 'hard',
                        parentId: 'asthma-diagnostics'
                      },
                      {
                        id: 'sputum-eosinophilia',
                        name: 'Sputum-Eosinophilie',
                        description: 'Zelltypisierung der Entzündung',
                        icon: '🔬',
                        difficulty: 'hard',
                        parentId: 'asthma-diagnostics'
                      }
                    ]
                  },
                  {
                    id: 'asthma-therapy',
                    name: 'Therapie',
                    description: 'Stufenschema und medikamentöse Behandlung',
                    icon: '💊',
                    difficulty: 'hard',
                    parentId: 'asthma-bronchiale',
                    children: [
                      {
                        id: 'asthma-step-therapy',
                        name: 'Stufenschema (GINA 1-5)',
                        description: 'Globale Initiative für Asthma Stufenschema',
                        icon: '📊',
                        difficulty: 'hard',
                        parentId: 'asthma-therapy'
                      },
                      {
                        id: 'asthma-saba',
                        name: 'SABA (Reliever)',
                        description: 'Kurzwirksame Beta-2-Agonisten (Salbutamol)',
                        icon: '🚀',
                        difficulty: 'medium',
                        parentId: 'asthma-therapy'
                      },
                      {
                        id: 'asthma-ics',
                        name: 'ICS (Controller)',
                        description: 'Inhalative Kortikosteroide (Budesonid, Beclometason)',
                        icon: '🌪️',
                        difficulty: 'medium',
                        parentId: 'asthma-therapy'
                      },
                      {
                        id: 'asthma-ics-laba',
                        name: 'ICS/LABA-Kombination',
                        description: 'Fixkombination aus ICS und langwirksamem Beta-2-Agonist',
                        icon: '⚡',
                        difficulty: 'medium',
                        parentId: 'asthma-therapy'
                      },
                      {
                        id: 'asthma-ltra',
                        name: 'LTRA (Leukotrienantagonisten)',
                        description: 'Montelukast bei allergischem Asthma',
                        icon: '🔒',
                        difficulty: 'medium',
                        parentId: 'asthma-therapy'
                      },
                      {
                        id: 'asthma-lama',
                        name: 'LAMA (Tiotropium)',
                        description: 'Langwirksame Anticholinergika als Add-on Therapie',
                        icon: '🎯',
                        difficulty: 'medium',
                        parentId: 'asthma-therapy'
                      },
                      {
                        id: 'asthma-anti-ige',
                        name: 'Anti-IgE (Omalizumab)',
                        description: 'Biologikum bei schwerem allergischem Asthma',
                        icon: '🧬',
                        difficulty: 'hard',
                        parentId: 'asthma-therapy'
                      },
                      {
                        id: 'asthma-anti-il5',
                        name: 'Anti-IL5 (Mepolizumab, Benralizumab)',
                        description: 'Biologika bei schwerem eosinophilem Asthma',
                        icon: '🔬',
                        difficulty: 'hard',
                        parentId: 'asthma-therapy'
                      },
                      {
                        id: 'asthma-anti-il4-13',
                        name: 'Anti-IL4/13 (Dupilumab)',
                        description: 'Biologikum bei schwerem Asthma mit Typ-2-Inflammation',
                        icon: '🧪',
                        difficulty: 'hard',
                        parentId: 'asthma-therapy'
                      }
                    ]
                  },
                  {
                    id: 'status-asthmaticus',
                    name: 'Status asthmaticus',
                    description: 'Lebensbedrohliche Asthmaexazerbation',
                    icon: '🚨',
                    difficulty: 'hard',
                    parentId: 'asthma-bronchiale',
                    children: [
                      {
                        id: 'status-asthmaticus-definition',
                        name: 'Definition',
                        description: 'Schwere, therapierefraktäre Bronchokonstriktion >6h',
                        icon: '⚠️',
                        difficulty: 'hard',
                        parentId: 'status-asthmaticus'
                      },
                      {
                        id: 'status-asthmaticus-symptoms',
                        name: 'Symptome',
                        description: 'Orthopnoe, Zyanose, paradoxer Puls, stumme Lunge',
                        icon: '🫁',
                        difficulty: 'hard',
                        parentId: 'status-asthmaticus'
                      },
                      {
                        id: 'status-asthmaticus-therapy',
                        name: 'Notfalltherapie',
                        description: 'O2, Salbutamol, Prednisolon, ggf. Theophyllin',
                        icon: '🚑',
                        difficulty: 'hard',
                        parentId: 'status-asthmaticus'
                      }
                    ]
                  },
                  {
                    id: 'asthma-prevention',
                    name: 'Prävention',
                    description: 'Allergen- und Triggervermeidung',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'asthma-bronchiale',
                    children: [
                      {
                        id: 'allergen-avoidance',
                        name: 'Allergenvermeidung',
                        description: 'Hausstaubmilben, Pollen, Tierhaare reduzieren',
                        icon: '🏠',
                        difficulty: 'medium',
                        parentId: 'asthma-prevention'
                      },
                      {
                        id: 'trigger-avoidance',
                        name: 'Triggervermeidung',
                        description: 'Rauch, kalte Luft, Infekte, Stress vermeiden',
                        icon: '🚫',
                        difficulty: 'medium',
                        parentId: 'asthma-prevention'
                      },
                      {
                        id: 'asthma-education',
                        name: 'Patientenschulung',
                        description: 'Inhalationstechnik, Peak-Flow-Messung, Notfallplan',
                        icon: '📚',
                        difficulty: 'medium',
                        parentId: 'asthma-prevention'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'other-obstructive-diseases',
                name: 'Weitere obstruktive Erkrankungen',
                description: 'Seltene obstruktive Lungenerkrankungen',
                icon: '🌪️',
                difficulty: 'hard',
                parentId: 'obstructive-lung-diseases',
                children: [
                  {
                    id: 'bronchiectasis',
                    name: 'Bronchiektasen',
                    description: 'Irreversible Bronchialerweiterungen',
                    icon: '🫁',
                    difficulty: 'hard',
                    parentId: 'other-obstructive-diseases',
                    children: [
                      {
                        id: 'bronchiectasis-causes',
                        name: 'Ursachen',
                        description: 'Zystische Fibrose, Post-infektiös, Immundefekte',
                        icon: '🔬',
                        difficulty: 'hard',
                        parentId: 'bronchiectasis'
                      },
                      {
                        id: 'bronchiectasis-symptoms',
                        name: 'Symptome',
                        description: 'Produktiver Husten, Hämoptoe, rezidiv. Infekte',
                        icon: '🤧',
                        difficulty: 'medium',
                        parentId: 'bronchiectasis'
                      },
                      {
                        id: 'bronchiectasis-therapy',
                        name: 'Therapie',
                        description: 'Sekretmobilisation, Antibiotika, Physiotherapie',
                        icon: '💊',
                        difficulty: 'medium',
                        parentId: 'bronchiectasis'
                      }
                    ]
                  },
                  {
                    id: 'alpha1-antitrypsin-deficiency',
                    name: 'Alpha-1-Antitrypsin-Mangel',
                    description: 'Genetischer Proteaseinhibitor-Mangel',
                    icon: '🧬',
                    difficulty: 'hard',
                    parentId: 'other-obstructive-diseases',
                    children: [
                      {
                        id: 'alpha1-genetics',
                        name: 'Genetik',
                        description: 'Autosomal-rezessiv, PiZZ-Genotyp',
                        icon: '🧬',
                        difficulty: 'hard',
                        parentId: 'alpha1-antitrypsin-deficiency'
                      },
                      {
                        id: 'alpha1-pathophysiology',
                        name: 'Pathophysiologie',
                        description: 'Ungehemmte Elastase → Emphysem',
                        icon: '🔬',
                        difficulty: 'hard',
                        parentId: 'alpha1-antitrypsin-deficiency'
                      },
                      {
                        id: 'alpha1-therapy',
                        name: 'Substitutionstherapie',
                        description: 'Wöchentliche i.v. Alpha-1-Antitrypsin-Gabe',
                        icon: '💉',
                        difficulty: 'medium',
                        parentId: 'alpha1-antitrypsin-deficiency'
                      }
                    ]
                  },
                  {
                    id: 'bronchiolitis-obliterans',
                    name: 'Bronchiolitis obliterans',
                    description: 'Obliteration der kleinen Atemwege',
                    icon: '🌬️',
                    difficulty: 'hard',
                    parentId: 'other-obstructive-diseases',
                    children: [
                      {
                        id: 'bo-causes',
                        name: 'Ursachen',
                        description: 'Post-infektiös, Toxine, Transplantation',
                        icon: '⚠️',
                        difficulty: 'hard',
                        parentId: 'bronchiolitis-obliterans'
                      },
                      {
                        id: 'bo-diagnostics',
                        name: 'Diagnostik',
                        description: 'HRCT: Mosaikmuster, kleine Atemwege betroffen',
                        icon: '🔍',
                        difficulty: 'hard',
                        parentId: 'bronchiolitis-obliterans'
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
      },
      {
        id: 'pharmacology',
        name: 'PHARMAKOLOGIE',
        description: 'Medikamentenlehre und Arzneimittelkunde',
        icon: '💊',
        difficulty: 'hard',
        parentId: 'pathology',
        children: [
          {
            id: 'medication-groups',
            name: 'MEDIKAMENTENGRUPPEN',
            description: 'Systematische Arzneimittelgruppen',
            icon: '💉',
            difficulty: 'hard',
            parentId: 'pharmacology',
            children: [
              {
                id: 'cardiovascular-medications',
                name: 'Herz-Kreislauf-Medikamente',
                description: 'Kardiovaskuläre Pharmakotherapie',
                icon: '❤️',
                difficulty: 'hard',
                parentId: 'medication-groups',
                children: [
                  {
                    id: 'antihypertensives',
                    name: 'Antihypertensiva',
                    description: 'Blutdrucksenkende Medikamente',
                    icon: '🔽',
                    difficulty: 'hard',
                    parentId: 'cardiovascular-medications',
                    children: [
                      {
                        id: 'ace-inhibitors',
                        name: 'ACE-Hemmer (Ramipril, Enalapril, Lisinopril)',
                        description: 'Angiotensin-Converting-Enzyme-Hemmer',
                        icon: '🚫',
                        difficulty: 'medium',
                        parentId: 'antihypertensives',
                        children: [
                          {
                            id: 'ace-mechanism',
                            name: 'Wirkmechanismus (Hemmung ACE)',
                            description: 'Blockade der Angiotensin-II-Bildung',
                            icon: '⚙️',
                            difficulty: 'medium',
                            parentId: 'ace-inhibitors'
                          },
                          {
                            id: 'ace-indications',
                            name: 'Indikationen (Hypertonie, Herzinsuffizienz)',
                            description: 'Hauptanwendungsgebiete der ACE-Hemmer',
                            icon: '✓',
                            difficulty: 'medium',
                            parentId: 'ace-inhibitors'
                          },
                          {
                            id: 'ace-side-effects',
                            name: 'Nebenwirkungen (Reizhusten, Hyperkaliämie)',
                            description: 'Unerwünschte Arzneimittelwirkungen',
                            icon: '⚠️',
                            difficulty: 'medium',
                            parentId: 'ace-inhibitors'
                          },
                          {
                            id: 'ace-contraindications',
                            name: 'Kontraindikationen (Schwangerschaft, bilat. NAST)',
                            description: 'Absolute und relative Kontraindikationen',
                            icon: '🚫',
                            difficulty: 'medium',
                            parentId: 'ace-inhibitors'
                          }
                        ]
                      },
                      {
                        id: 'arbs',
                        name: 'AT1-Antagonisten/ARB (Candesartan, Valsartan)',
                        description: 'Angiotensin-Rezeptor-Blocker',
                        icon: '🔒',
                        difficulty: 'medium',
                        parentId: 'antihypertensives',
                        children: [
                          {
                            id: 'arb-mechanism',
                            name: 'Wirkmechanismus (AT1-Rezeptor-Blockade)',
                            description: 'Selektive AT1-Rezeptor-Antagonisierung',
                            icon: '⚙️',
                            difficulty: 'medium',
                            parentId: 'arbs'
                          },
                          {
                            id: 'arb-advantages',
                            name: 'Vorteile (kein Reizhusten)',
                            description: 'Bessere Verträglichkeit als ACE-Hemmer',
                            icon: '👍',
                            difficulty: 'medium',
                            parentId: 'arbs'
                          },
                          {
                            id: 'arb-combinations',
                            name: 'Kombinationen (mit Diuretika)',
                            description: 'Fixkombinationen und Therapieschemata',
                            icon: '🔗',
                            difficulty: 'medium',
                            parentId: 'arbs'
                          }
                        ]
                      },
                      {
                        id: 'beta-blockers',
                        name: 'Betablocker (Metoprolol, Bisoprolol, Carvedilol)',
                        description: 'Beta-Adrenorezeptor-Antagonisten',
                        icon: '🛡️',
                        difficulty: 'medium',
                        parentId: 'antihypertensives',
                        children: [
                          {
                            id: 'selective-beta1',
                            name: 'Selektive β1-Blocker',
                            description: 'Kardioselektive Betablocker',
                            icon: '🎯',
                            difficulty: 'medium',
                            parentId: 'beta-blockers'
                          },
                          {
                            id: 'non-selective-beta',
                            name: 'Nicht-selektive Betablocker',
                            description: 'β1- und β2-Blockade',
                            icon: '🔄',
                            difficulty: 'medium',
                            parentId: 'beta-blockers'
                          },
                          {
                            id: 'beta-side-effects',
                            name: 'Nebenwirkungen (Bradykardie, Bronchospasmus)',
                            description: 'Typische unerwünschte Wirkungen',
                            icon: '⚠️',
                            difficulty: 'medium',
                            parentId: 'beta-blockers'
                          },
                          {
                            id: 'beta-discontinuation',
                            name: 'Absetzen (langsam ausschleichen)',
                            description: 'Rebound-Phänomen vermeiden',
                            icon: '📉',
                            difficulty: 'medium',
                            parentId: 'beta-blockers'
                          }
                        ]
                      },
                      {
                        id: 'calcium-antagonists',
                        name: 'Kalziumantagonisten',
                        description: 'Kalziumkanalblocker',
                        icon: '🚪',
                        difficulty: 'medium',
                        parentId: 'antihypertensives',
                        children: [
                          {
                            id: 'dihydropyridines',
                            name: 'Dihydropyridine (Amlodipin, Nifedipin)',
                            description: 'Gefäßselektive Kalziumantagonisten',
                            icon: '🔴',
                            difficulty: 'medium',
                            parentId: 'calcium-antagonists'
                          },
                          {
                            id: 'non-dihydropyridines',
                            name: 'Nicht-Dihydropyridine (Verapamil, Diltiazem)',
                            description: 'Herz- und gefäßwirksame Kalziumantagonisten',
                            icon: '🟢',
                            difficulty: 'medium',
                            parentId: 'calcium-antagonists'
                          },
                          {
                            id: 'ca-side-effects',
                            name: 'Nebenwirkungen (Ödeme, Obstipation)',
                            description: 'Substanzklassen-spezifische UAW',
                            icon: '⚠️',
                            difficulty: 'medium',
                            parentId: 'calcium-antagonists'
                          }
                        ]
                      },
                      {
                        id: 'diuretics',
                        name: 'Diuretika',
                        description: 'Entwässernde Medikamente',
                        icon: '💧',
                        difficulty: 'medium',
                        parentId: 'antihypertensives',
                        children: [
                          {
                            id: 'loop-diuretics',
                            name: 'Schleifendiuretika (Furosemid, Torasemid)',
                            description: 'Hochpotente Diuretika',
                            icon: '🔁',
                            difficulty: 'medium',
                            parentId: 'diuretics'
                          },
                          {
                            id: 'thiazides',
                            name: 'Thiazide (HCT, Indapamid)',
                            description: 'Mittelstark wirksame Diuretika',
                            icon: '💊',
                            difficulty: 'medium',
                            parentId: 'diuretics'
                          },
                          {
                            id: 'potassium-sparing',
                            name: 'Kaliumsparende (Spironolacton, Amilorid)',
                            description: 'Aldosteronantagonisten und ENaC-Blocker',
                            icon: '🔋',
                            difficulty: 'medium',
                            parentId: 'diuretics'
                          },
                          {
                            id: 'electrolyte-disorders',
                            name: 'Elektrolytstörungen',
                            description: 'Hypokaliämie, Hyponatriämie, Hyperurikämie',
                            icon: '⚡',
                            difficulty: 'medium',
                            parentId: 'diuretics'
                          }
                        ]
                      },
                      {
                        id: 'other-antihypertensives',
                        name: 'Weitere Antihypertensiva',
                        description: 'Alternative blutdrucksenkende Substanzen',
                        icon: '➕',
                        difficulty: 'hard',
                        parentId: 'antihypertensives',
                        children: [
                          {
                            id: 'alpha-blockers',
                            name: 'α-Blocker (Doxazosin)',
                            description: 'Alpha-Adrenorezeptor-Antagonisten',
                            icon: '🚫',
                            difficulty: 'hard',
                            parentId: 'other-antihypertensives'
                          },
                          {
                            id: 'central-antisympathotonics',
                            name: 'Zentrale Antisympathotonika (Clonidin)',
                            description: 'Zentral wirksame Antihypertensiva',
                            icon: '🧠',
                            difficulty: 'hard',
                            parentId: 'other-antihypertensives'
                          },
                          {
                            id: 'vasodilators',
                            name: 'Vasodilatatoren (Hydralazin, Minoxidil)',
                            description: 'Direkte Gefäßerweiterer',
                            icon: '🌊',
                            difficulty: 'hard',
                            parentId: 'other-antihypertensives'
                          },
                          {
                            id: 'combination-drugs',
                            name: 'Kombinationspräparate',
                            description: 'Fixkombinationen verschiedener Antihypertensiva',
                            icon: '🔗',
                            difficulty: 'medium',
                            parentId: 'other-antihypertensives'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'antiarrhythmics',
                    name: 'Antiarrhythmika',
                    description: 'Medikamente gegen Herzrhythmusstörungen',
                    icon: '💓',
                    difficulty: 'hard',
                    parentId: 'cardiovascular-medications',
                    children: [
                      {
                        id: 'class-i-antiarrhythmics',
                        name: 'Klasse I (Natriumkanalblocker)',
                        description: 'Vaughan-Williams Klasse I',
                        icon: '1️⃣',
                        difficulty: 'hard',
                        parentId: 'antiarrhythmics',
                        children: [
                          {
                            id: 'class-ia',
                            name: 'Ia (Chinidin, Procainamid)',
                            description: 'Moderate Na-Kanal-Blockade',
                            icon: '🅰️',
                            difficulty: 'hard',
                            parentId: 'class-i-antiarrhythmics'
                          },
                          {
                            id: 'class-ib',
                            name: 'Ib (Lidocain, Mexiletin)',
                            description: 'Schwache Na-Kanal-Blockade',
                            icon: '🅱️',
                            difficulty: 'hard',
                            parentId: 'class-i-antiarrhythmics'
                          },
                          {
                            id: 'class-ic',
                            name: 'Ic (Flecainid, Propafenon)',
                            description: 'Starke Na-Kanal-Blockade',
                            icon: '🇨',
                            difficulty: 'hard',
                            parentId: 'class-i-antiarrhythmics'
                          }
                        ]
                      },
                      {
                        id: 'class-ii-antiarrhythmics',
                        name: 'Klasse II (Betablocker)',
                        description: 'Beta-Adrenorezeptor-Antagonisten',
                        icon: '2️⃣',
                        difficulty: 'medium',
                        parentId: 'antiarrhythmics'
                      },
                      {
                        id: 'class-iii-antiarrhythmics',
                        name: 'Klasse III (Kaliumkanalblocker)',
                        description: 'Verlängerung der Repolarisation',
                        icon: '3️⃣',
                        difficulty: 'hard',
                        parentId: 'antiarrhythmics',
                        children: [
                          {
                            id: 'amiodarone',
                            name: 'Amiodaron (Multikanalblocker)',
                            description: 'Komplexes Antiarrhythmikum',
                            icon: '🔄',
                            difficulty: 'hard',
                            parentId: 'class-iii-antiarrhythmics'
                          },
                          {
                            id: 'dronedarone',
                            name: 'Dronedaron',
                            description: 'Amiodaron-Derivat ohne Jod',
                            icon: '💊',
                            difficulty: 'hard',
                            parentId: 'class-iii-antiarrhythmics'
                          },
                          {
                            id: 'sotalol',
                            name: 'Sotalol (auch Beta-Blockade)',
                            description: 'Klasse II und III Eigenschaften',
                            icon: '🔀',
                            difficulty: 'hard',
                            parentId: 'class-iii-antiarrhythmics'
                          }
                        ]
                      },
                      {
                        id: 'class-iv-antiarrhythmics',
                        name: 'Klasse IV (Kalziumantagonisten)',
                        description: 'Nicht-Dihydropyridine',
                        icon: '4️⃣',
                        difficulty: 'medium',
                        parentId: 'antiarrhythmics'
                      },
                      {
                        id: 'digitalis-glycosides',
                        name: 'Digitalisglykoside',
                        description: 'Herzglykoside',
                        icon: '🌿',
                        difficulty: 'hard',
                        parentId: 'antiarrhythmics',
                        children: [
                          {
                            id: 'digoxin-digitoxin',
                            name: 'Digoxin, Digitoxin',
                            description: 'Positiv inotrop, negativ chronotrop',
                            icon: '💊',
                            difficulty: 'hard',
                            parentId: 'digitalis-glycosides'
                          },
                          {
                            id: 'tdm-digitalis',
                            name: 'Therapeutisches Drug Monitoring',
                            description: 'Spiegelkontrollen erforderlich',
                            icon: '📊',
                            difficulty: 'hard',
                            parentId: 'digitalis-glycosides'
                          },
                          {
                            id: 'digitalis-intoxication',
                            name: 'Intoxikation',
                            description: 'Symptome und Behandlung',
                            icon: '☠️',
                            difficulty: 'hard',
                            parentId: 'digitalis-glycosides'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'lipid-lowering-drugs',
                    name: 'Lipidsenker',
                    description: 'Cholesterin- und Triglyzerid-senkende Medikamente',
                    icon: '🧈',
                    difficulty: 'medium',
                    parentId: 'cardiovascular-medications',
                    children: [
                      {
                        id: 'statins',
                        name: 'Statine (Simvastatin, Atorvastatin, Rosuvastatin)',
                        description: 'HMG-CoA-Reduktase-Hemmer',
                        icon: '💉',
                        difficulty: 'medium',
                        parentId: 'lipid-lowering-drugs',
                        children: [
                          {
                            id: 'hmg-coa-reductase',
                            name: 'HMG-CoA-Reduktase-Hemmer',
                            description: 'Hemmung der Cholesterinsynthese',
                            icon: '🚫',
                            difficulty: 'medium',
                            parentId: 'statins'
                          },
                          {
                            id: 'pleiotropic-effects',
                            name: 'Pleiotrope Effekte',
                            description: 'Zusätzliche gefäßschützende Wirkungen',
                            icon: '✨',
                            difficulty: 'medium',
                            parentId: 'statins'
                          },
                          {
                            id: 'myopathy-rhabdomyolysis',
                            name: 'Myopathie/Rhabdomyolyse',
                            description: 'Muskelschädigung als UAW',
                            icon: '💪',
                            difficulty: 'medium',
                            parentId: 'statins'
                          }
                        ]
                      },
                      {
                        id: 'ezetimibe',
                        name: 'Ezetimib (Cholesterinresorptionshemmer)',
                        description: 'Hemmung der intestinalen Cholesterinaufnahme',
                        icon: '🚫',
                        difficulty: 'medium',
                        parentId: 'lipid-lowering-drugs'
                      },
                      {
                        id: 'pcsk9-inhibitors',
                        name: 'PCSK9-Inhibitoren (Evolocumab, Alirocumab)',
                        description: 'Monoklonale Antikörper',
                        icon: '🧬',
                        difficulty: 'hard',
                        parentId: 'lipid-lowering-drugs'
                      },
                      {
                        id: 'fibrates',
                        name: 'Fibrate (Fenofibrat, Gemfibrozil)',
                        description: 'PPAR-α-Agonisten',
                        icon: '💊',
                        difficulty: 'medium',
                        parentId: 'lipid-lowering-drugs'
                      },
                      {
                        id: 'omega-3-fatty-acids',
                        name: 'Omega-3-Fettsäuren',
                        description: 'Triglyzeridsenkung',
                        icon: '🐟',
                        difficulty: 'easy',
                        parentId: 'lipid-lowering-drugs'
                      }
                    ]
                  },
                  {
                    id: 'other-cardiovascular-drugs',
                    name: 'Weitere kardiovaskuläre Medikamente',
                    description: 'Zusätzliche Herz-Kreislauf-Medikamente',
                    icon: '💊',
                    difficulty: 'hard',
                    parentId: 'cardiovascular-medications',
                    children: [
                      {
                        id: 'nitrates',
                        name: 'Nitrate (Nitroglycerin, ISDN, ISMN)',
                        description: 'NO-Donatoren zur Vasodilatation',
                        icon: '💨',
                        difficulty: 'medium',
                        parentId: 'other-cardiovascular-drugs'
                      },
                      {
                        id: 'antiplatelet-drugs',
                        name: 'Thrombozytenaggregationshemmer',
                        description: 'Plättchenhemmer',
                        icon: '🩸',
                        difficulty: 'medium',
                        parentId: 'other-cardiovascular-drugs',
                        children: [
                          {
                            id: 'aspirin',
                            name: 'ASS (irreversible COX-Hemmung)',
                            description: 'Acetylsalicylsäure',
                            icon: '💊',
                            difficulty: 'medium',
                            parentId: 'antiplatelet-drugs'
                          },
                          {
                            id: 'clopidogrel',
                            name: 'Clopidogrel (P2Y12-Hemmer)',
                            description: 'ADP-Rezeptor-Antagonist',
                            icon: '🔒',
                            difficulty: 'medium',
                            parentId: 'antiplatelet-drugs'
                          },
                          {
                            id: 'prasugrel-ticagrelor',
                            name: 'Prasugrel, Ticagrelor',
                            description: 'Neue P2Y12-Hemmer',
                            icon: '🆕',
                            difficulty: 'medium',
                            parentId: 'antiplatelet-drugs'
                          },
                          {
                            id: 'dual-antiplatelet',
                            name: 'Duale Plättchenhemmung',
                            description: 'DAPT nach Stent-Implantation',
                            icon: '2️⃣',
                            difficulty: 'medium',
                            parentId: 'antiplatelet-drugs'
                          }
                        ]
                      },
                      {
                        id: 'anticoagulants',
                        name: 'Antikoagulanzien',
                        description: 'Gerinnungshemmer',
                        icon: '🩸',
                        difficulty: 'hard',
                        parentId: 'other-cardiovascular-drugs',
                        children: [
                          {
                            id: 'vitamin-k-antagonists',
                            name: 'Vitamin-K-Antagonisten (Warfarin, Phenprocoumon)',
                            description: 'Cumarine',
                            icon: '🅿️',
                            difficulty: 'hard',
                            parentId: 'anticoagulants'
                          },
                          {
                            id: 'noacs',
                            name: 'NOAK/DOAK (Apixaban, Rivaroxaban, Dabigatran)',
                            description: 'Neue orale Antikoagulanzien',
                            icon: '🆕',
                            difficulty: 'hard',
                            parentId: 'anticoagulants'
                          },
                          {
                            id: 'heparins',
                            name: 'Heparine (UFH, NMH)',
                            description: 'Unfraktionierte und niedermolekulare Heparine',
                            icon: '💉',
                            difficulty: 'hard',
                            parentId: 'anticoagulants'
                          },
                          {
                            id: 'monitoring-antidotes',
                            name: 'Monitoring & Antidota',
                            description: 'INR, Anti-Xa, Gegenmittel',
                            icon: '🔬',
                            difficulty: 'hard',
                            parentId: 'anticoagulants'
                          }
                        ]
                      },
                      {
                        id: 'catecholamines-vasopressors',
                        name: 'Katecholamine & Vasopressoren',
                        description: 'Notfallmedikamente',
                        icon: '🚨',
                        difficulty: 'hard',
                        parentId: 'other-cardiovascular-drugs',
                        children: [
                          {
                            id: 'adrenaline-noradrenaline',
                            name: 'Adrenalin, Noradrenalin',
                            description: 'Endogene Katecholamine',
                            icon: '⚡',
                            difficulty: 'hard',
                            parentId: 'catecholamines-vasopressors'
                          },
                          {
                            id: 'dopamine-dobutamine',
                            name: 'Dopamin, Dobutamin',
                            description: 'Synthetische Katecholamine',
                            icon: '💊',
                            difficulty: 'hard',
                            parentId: 'catecholamines-vasopressors'
                          },
                          {
                            id: 'vasopressin',
                            name: 'Vasopressin',
                            description: 'ADH-Analogon',
                            icon: '💧',
                            difficulty: 'hard',
                            parentId: 'catecholamines-vasopressors'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: 'respiratory-medications',
                name: 'Respiratorische Medikamente',
                description: 'Atemwegsmedikamente und Bronchialtherapeutika',
                icon: '🫁',
                difficulty: 'hard',
                parentId: 'medication-groups',
                children: [
                  {
                    id: 'bronchodilators',
                    name: 'Bronchodilatatoren',
                    description: 'Atemwegserweiternde Medikamente',
                    icon: '🌬️',
                    difficulty: 'medium',
                    parentId: 'respiratory-medications',
                    children: [
                      {
                        id: 'beta2-sympathomimetics',
                        name: 'β2-Sympathomimetika',
                        description: 'Beta-2-Adrenorezeptor-Agonisten',
                        icon: '💨',
                        difficulty: 'medium',
                        parentId: 'bronchodilators',
                        children: [
                          {
                            id: 'saba',
                            name: 'SABA (Salbutamol, Fenoterol)',
                            description: 'Short-acting Beta-2-Agonists',
                            icon: '🚀',
                            difficulty: 'medium',
                            parentId: 'beta2-sympathomimetics'
                          },
                          {
                            id: 'laba',
                            name: 'LABA (Formoterol, Salmeterol)',
                            description: 'Long-acting Beta-2-Agonists',
                            icon: '⏰',
                            difficulty: 'medium',
                            parentId: 'beta2-sympathomimetics'
                          },
                          {
                            id: 'ultra-laba',
                            name: 'Ultra-LABA (Indacaterol, Olodaterol)',
                            description: 'Ultra-long-acting Beta-2-Agonists',
                            icon: '🔄',
                            difficulty: 'hard',
                            parentId: 'beta2-sympathomimetics'
                          },
                          {
                            id: 'beta2-side-effects',
                            name: 'Nebenwirkungen (Tremor, Tachykardie)',
                            description: 'Sympathomimetische Nebenwirkungen',
                            icon: '⚠️',
                            difficulty: 'medium',
                            parentId: 'beta2-sympathomimetics'
                          }
                        ]
                      },
                      {
                        id: 'anticholinergics',
                        name: 'Anticholinergika',
                        description: 'Parasympatholytika zur Bronchodilatation',
                        icon: '🚫',
                        difficulty: 'medium',
                        parentId: 'bronchodilators',
                        children: [
                          {
                            id: 'sama',
                            name: 'SAMA (Ipratropium)',
                            description: 'Short-acting Muscarinic Antagonists',
                            icon: '⚡',
                            difficulty: 'medium',
                            parentId: 'anticholinergics'
                          },
                          {
                            id: 'lama',
                            name: 'LAMA (Tiotropium, Glycopyrronium)',
                            description: 'Long-acting Muscarinic Antagonists',
                            icon: '🔒',
                            difficulty: 'medium',
                            parentId: 'anticholinergics'
                          },
                          {
                            id: 'dry-mouth',
                            name: 'Mundtrockenheit',
                            description: 'Typische anticholinerge Nebenwirkung',
                            icon: '💧',
                            difficulty: 'easy',
                            parentId: 'anticholinergics'
                          }
                        ]
                      },
                      {
                        id: 'methylxanthines',
                        name: 'Methylxanthine',
                        description: 'Phosphodiesterase-Hemmer',
                        icon: '☕',
                        difficulty: 'hard',
                        parentId: 'bronchodilators',
                        children: [
                          {
                            id: 'theophylline',
                            name: 'Theophyllin',
                            description: 'Klassischer PDE-Hemmer',
                            icon: '💊',
                            difficulty: 'hard',
                            parentId: 'methylxanthines'
                          },
                          {
                            id: 'theophylline-tdm',
                            name: 'Therapeutisches Drug Monitoring',
                            description: 'Spiegelkontrollen erforderlich',
                            icon: '📊',
                            difficulty: 'hard',
                            parentId: 'methylxanthines'
                          },
                          {
                            id: 'theophylline-interactions',
                            name: 'Interaktionen',
                            description: 'Viele Arzneimittelinteraktionen',
                            icon: '🔗',
                            difficulty: 'hard',
                            parentId: 'methylxanthines'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'anti-inflammatory-respiratory',
                    name: 'Antientzündliche Medikamente',
                    description: 'Entzündungshemmende Atemwegstherapeutika',
                    icon: '🔥',
                    difficulty: 'medium',
                    parentId: 'respiratory-medications',
                    children: [
                      {
                        id: 'inhaled-corticosteroids',
                        name: 'Inhalative Kortikosteroide (ICS)',
                        description: 'Topische Steroidtherapie der Atemwege',
                        icon: '🌪️',
                        difficulty: 'medium',
                        parentId: 'anti-inflammatory-respiratory',
                        children: [
                          {
                            id: 'budesonide-fluticasone',
                            name: 'Budesonid, Fluticason',
                            description: 'Moderne inhalative Kortikosteroide',
                            icon: '💨',
                            difficulty: 'medium',
                            parentId: 'inhaled-corticosteroids'
                          },
                          {
                            id: 'beclometasone-mometasone',
                            name: 'Beclometason, Mometason',
                            description: 'Weitere ICS-Präparate',
                            icon: '🌬️',
                            difficulty: 'medium',
                            parentId: 'inhaled-corticosteroids'
                          },
                          {
                            id: 'local-side-effects-ics',
                            name: 'Lokale Nebenwirkungen (Soor)',
                            description: 'Mundschleimhaut-Candidose',
                            icon: '👄',
                            difficulty: 'medium',
                            parentId: 'inhaled-corticosteroids'
                          },
                          {
                            id: 'systemic-effects-ics',
                            name: 'Systemische Effekte bei Hochdosis',
                            description: 'Systemische Steroidwirkungen',
                            icon: '🔄',
                            difficulty: 'hard',
                            parentId: 'inhaled-corticosteroids'
                          }
                        ]
                      },
                      {
                        id: 'systemic-corticosteroids',
                        name: 'Systemische Kortikosteroide',
                        description: 'Orale/parenterale Steroidtherapie',
                        icon: '💉',
                        difficulty: 'hard',
                        parentId: 'anti-inflammatory-respiratory',
                        children: [
                          {
                            id: 'prednisolone-methylprednisolone',
                            name: 'Prednisolon, Methylprednisolon',
                            description: 'Systemische Kortikosteroide',
                            icon: '💊',
                            difficulty: 'medium',
                            parentId: 'systemic-corticosteroids'
                          },
                          {
                            id: 'pulse-therapy',
                            name: 'Stoßtherapie bei Exazerbation',
                            description: 'Hochdosis-Kurzzeittherapie',
                            icon: '⚡',
                            difficulty: 'hard',
                            parentId: 'systemic-corticosteroids'
                          },
                          {
                            id: 'tapering-required',
                            name: 'Ausschleichen erforderlich',
                            description: 'Gradueller Dosisreduktion',
                            icon: '📉',
                            difficulty: 'medium',
                            parentId: 'systemic-corticosteroids'
                          }
                        ]
                      },
                      {
                        id: 'leukotriene-antagonists',
                        name: 'Leukotrienantagonisten',
                        description: 'Anti-Leukotrien-Therapie',
                        icon: '🚫',
                        difficulty: 'medium',
                        parentId: 'anti-inflammatory-respiratory',
                        children: [
                          {
                            id: 'montelukast',
                            name: 'Montelukast',
                            description: 'CysLT1-Rezeptor-Antagonist',
                            icon: '💊',
                            difficulty: 'medium',
                            parentId: 'leukotriene-antagonists'
                          },
                          {
                            id: 'aspirin-asthma',
                            name: 'Aspirinasthma',
                            description: 'Besondere Indikation bei NSAR-Intoleranz',
                            icon: '🔍',
                            difficulty: 'hard',
                            parentId: 'leukotriene-antagonists'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'combination-preparations',
                    name: 'Kombinationspräparate',
                    description: 'Fixkombinationen für Atemwegstherapie',
                    icon: '🔗',
                    difficulty: 'medium',
                    parentId: 'respiratory-medications',
                    children: [
                      {
                        id: 'ics-laba',
                        name: 'ICS/LABA (Symbicort, Seretide)',
                        description: 'Steroid/LABA-Kombinationen',
                        icon: '🌟',
                        difficulty: 'medium',
                        parentId: 'combination-preparations'
                      },
                      {
                        id: 'laba-lama',
                        name: 'LABA/LAMA (Anoro, Spiolto)',
                        description: 'Duale Bronchodilatation',
                        icon: '🔄',
                        difficulty: 'medium',
                        parentId: 'combination-preparations'
                      },
                      {
                        id: 'ics-laba-lama',
                        name: 'ICS/LABA/LAMA (Trimbow, Trelegy)',
                        description: 'Triple-Therapie',
                        icon: '3️⃣',
                        difficulty: 'hard',
                        parentId: 'combination-preparations'
                      },
                      {
                        id: 'inhalation-technique',
                        name: 'Inhalationstechnik',
                        description: 'Korrekte Anwendung von Inhalatoren',
                        icon: '🎯',
                        difficulty: 'medium',
                        parentId: 'combination-preparations'
                      }
                    ]
                  },
                  {
                    id: 'other-respiratory-medications',
                    name: 'Weitere respiratorische Medikamente',
                    description: 'Zusätzliche Atemwegstherapeutika',
                    icon: '➕',
                    difficulty: 'medium',
                    parentId: 'respiratory-medications',
                    children: [
                      {
                        id: 'antitussives',
                        name: 'Antitussiva (Codein, Dextromethorphan)',
                        description: 'Hustenstillende Medikamente',
                        icon: '🤫',
                        difficulty: 'medium',
                        parentId: 'other-respiratory-medications'
                      },
                      {
                        id: 'expectorants',
                        name: 'Expektoranzien (ACC, Ambroxol)',
                        description: 'Schleimlösende Medikamente',
                        icon: '💧',
                        difficulty: 'easy',
                        parentId: 'other-respiratory-medications'
                      },
                      {
                        id: 'medical-oxygen',
                        name: 'Sauerstoff (Medizinischer O2)',
                        description: 'Sauerstofftherapie',
                        icon: '🌬️',
                        difficulty: 'medium',
                        parentId: 'other-respiratory-medications'
                      },
                      {
                        id: 'biologics-respiratory',
                        name: 'Biologika (Omalizumab, Mepolizumab)',
                        description: 'Monoklonale Antikörper bei schwerem Asthma',
                        icon: '🧬',
                        difficulty: 'hard',
                        parentId: 'other-respiratory-medications'
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

export default pathologyCategories