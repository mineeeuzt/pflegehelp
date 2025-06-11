export interface Category {
  id: string
  name: string
  description: string
  icon: string
  difficulty: 'easy' | 'medium' | 'hard'
  parentId?: string
  children?: Category[]
}

export const pharmacologyCategories: Category[] = [
  {
    id: 'pharmacology',
    name: 'PHARMAKOLOGIE',
    description: 'Medikamentenlehre und Arzneimittelkunde',
    icon: '💊',
    difficulty: 'hard',
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
                        description: 'Einsatzgebiete der ACE-Hemmer',
                        icon: '🎯',
                        difficulty: 'easy',
                        parentId: 'ace-inhibitors'
                      },
                      {
                        id: 'ace-side-effects',
                        name: 'Nebenwirkungen (Reizhusten, Hyperkaliämie)',
                        description: 'Unerwünschte Wirkungen der ACE-Hemmer',
                        icon: '⚠️',
                        difficulty: 'medium',
                        parentId: 'ace-inhibitors'
                      },
                      {
                        id: 'ace-contraindications',
                        name: 'Kontraindikationen (Schwangerschaft, bilat. NAST)',
                        description: 'Gegenanzeigen für ACE-Hemmer',
                        icon: '🚫',
                        difficulty: 'medium',
                        parentId: 'ace-inhibitors'
                      }
                    ]
                  },
                  {
                    id: 'arb',
                    name: 'AT1-Antagonisten/ARB (Candesartan, Valsartan)',
                    description: 'Angiotensin-Rezeptor-Blocker',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'antihypertensives',
                    children: [
                      {
                        id: 'arb-mechanism',
                        name: 'Wirkmechanismus (AT1-Rezeptor-Blockade)',
                        description: 'Blockade des Angiotensin-II-Rezeptors',
                        icon: '🔒',
                        difficulty: 'medium',
                        parentId: 'arb'
                      },
                      {
                        id: 'arb-advantages',
                        name: 'Vorteile (kein Reizhusten)',
                        description: 'Vorteile gegenüber ACE-Hemmern',
                        icon: '✅',
                        difficulty: 'easy',
                        parentId: 'arb'
                      },
                      {
                        id: 'arb-combinations',
                        name: 'Kombinationen (mit Diuretika)',
                        description: 'Fixkombinationen mit anderen Antihypertensiva',
                        icon: '🤝',
                        difficulty: 'medium',
                        parentId: 'arb'
                      }
                    ]
                  },
                  {
                    id: 'beta-blockers',
                    name: 'Betablocker (Metoprolol, Bisoprolol, Carvedilol)',
                    description: 'Beta-Adrenozeptor-Antagonisten',
                    icon: '🛑',
                    difficulty: 'medium',
                    parentId: 'antihypertensives',
                    children: [
                      {
                        id: 'selective-beta-blockers',
                        name: 'Selektive β1-Blocker',
                        description: 'Kardioselektive Betablocker',
                        icon: '🎯',
                        difficulty: 'medium',
                        parentId: 'beta-blockers'
                      },
                      {
                        id: 'non-selective-beta-blockers',
                        name: 'Nicht-selektive Betablocker',
                        description: 'β1- und β2-Adrenozeptor-Antagonisten',
                        icon: '🔄',
                        difficulty: 'medium',
                        parentId: 'beta-blockers'
                      },
                      {
                        id: 'beta-blocker-side-effects',
                        name: 'Nebenwirkungen (Bradykardie, Bronchospasmus)',
                        description: 'Unerwünschte Wirkungen der Betablocker',
                        icon: '⚠️',
                        difficulty: 'medium',
                        parentId: 'beta-blockers'
                      },
                      {
                        id: 'beta-blocker-withdrawal',
                        name: 'Absetzen (langsam ausschleichen)',
                        description: 'Vorsichtiges Absetzen zur Vermeidung von Rebound-Effekten',
                        icon: '📉',
                        difficulty: 'easy',
                        parentId: 'beta-blockers'
                      }
                    ]
                  },
                  {
                    id: 'calcium-channel-blockers',
                    name: 'Kalziumantagonisten',
                    description: 'Kalziumkanalblocker',
                    icon: '🔐',
                    difficulty: 'medium',
                    parentId: 'antihypertensives',
                    children: [
                      {
                        id: 'dihydropyridines',
                        name: 'Dihydropyridine (Amlodipin, Nifedipin)',
                        description: 'Gefäßselektive Kalziumantagonisten',
                        icon: '🩸',
                        difficulty: 'medium',
                        parentId: 'calcium-channel-blockers'
                      },
                      {
                        id: 'non-dihydropyridines',
                        name: 'Nicht-Dihydropyridine (Verapamil, Diltiazem)',
                        description: 'Herzwirksame Kalziumantagonisten',
                        icon: '💓',
                        difficulty: 'medium',
                        parentId: 'calcium-channel-blockers'
                      },
                      {
                        id: 'calcium-blocker-side-effects',
                        name: 'Nebenwirkungen (Ödeme, Obstipation)',
                        description: 'Unerwünschte Wirkungen der Kalziumantagonisten',
                        icon: '⚠️',
                        difficulty: 'easy',
                        parentId: 'calcium-channel-blockers'
                      }
                    ]
                  },
                  {
                    id: 'diuretics',
                    name: 'Diuretika',
                    description: 'Harntreibende Medikamente',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'antihypertensives',
                    children: [
                      {
                        id: 'loop-diuretics',
                        name: 'Schleifendiuretika (Furosemid, Torasemid)',
                        description: 'Hochpotente Diuretika',
                        icon: '🌊',
                        difficulty: 'medium',
                        parentId: 'diuretics'
                      },
                      {
                        id: 'thiazide-diuretics',
                        name: 'Thiazide (HCT, Indapamid)',
                        description: 'Thiazid- und thiazidähnliche Diuretika',
                        icon: '💧',
                        difficulty: 'easy',
                        parentId: 'diuretics'
                      },
                      {
                        id: 'potassium-sparing-diuretics',
                        name: 'Kaliumsparende (Spironolacton, Amilorid)',
                        description: 'Kaliumsparende Diuretika',
                        icon: '⚖️',
                        difficulty: 'medium',
                        parentId: 'diuretics'
                      },
                      {
                        id: 'electrolyte-disorders',
                        name: 'Elektrolytstörungen',
                        description: 'Diuretika-bedingte Elektrolytimbalancen',
                        icon: '⚡',
                        difficulty: 'hard',
                        parentId: 'diuretics'
                      }
                    ]
                  },
                  {
                    id: 'other-antihypertensives',
                    name: 'Weitere Antihypertensiva',
                    description: 'Zusätzliche blutdrucksenkende Medikamente',
                    icon: '🔧',
                    difficulty: 'medium',
                    parentId: 'antihypertensives',
                    children: [
                      {
                        id: 'alpha-blockers',
                        name: 'α-Blocker (Doxazosin)',
                        description: 'Alpha-Adrenozeptor-Antagonisten',
                        icon: '🎯',
                        difficulty: 'medium',
                        parentId: 'other-antihypertensives'
                      },
                      {
                        id: 'central-antisympathomimetics',
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
                        icon: '🔀',
                        difficulty: 'medium',
                        parentId: 'other-antihypertensives'
                      },
                      {
                        id: 'combination-preparations',
                        name: 'Kombinationspräparate',
                        description: 'Fixkombinationen verschiedener Antihypertensiva',
                        icon: '🤝',
                        difficulty: 'easy',
                        parentId: 'other-antihypertensives'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'anticoagulants',
                name: 'Antikoagulanzien',
                description: 'Gerinnungshemmende Medikamente',
                icon: '🩸',
                difficulty: 'hard',
                parentId: 'cardiovascular-medications',
                children: [
                  {
                    id: 'vitamin-k-antagonists',
                    name: 'Vitamin-K-Antagonisten (Warfarin, Phenprocoumon)',
                    description: 'Cumarine zur oralen Antikoagulation',
                    icon: '🟡',
                    difficulty: 'hard',
                    parentId: 'anticoagulants'
                  },
                  {
                    id: 'doacs',
                    name: 'DOAC (Rivaroxaban, Apixaban, Dabigatran)',
                    description: 'Direkte orale Antikoagulanzien',
                    icon: '🔴',
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
                    id: 'antiplatelets',
                    name: 'Thrombozytenaggregationshemmer (ASS, Clopidogrel)',
                    description: 'Plättchenhemmende Medikamente',
                    icon: '🔵',
                    difficulty: 'medium',
                    parentId: 'anticoagulants'
                  }
                ]
              },
              {
                id: 'heart-failure-medications',
                name: 'Herzinsuffizienz-Medikamente',
                description: 'Spezifische Therapie der Herzinsuffizienz',
                icon: '💔',
                difficulty: 'hard',
                parentId: 'cardiovascular-medications',
                children: [
                  {
                    id: 'hf-pathophysiology',
                    name: 'Pathophysiologie',
                    description: 'Entstehung und Verlauf der Herzinsuffizienz',
                    icon: '📚',
                    difficulty: 'hard',
                    parentId: 'heart-failure-medications',
                    children: [
                      {
                        id: 'systolic-hf',
                        name: 'Systolische HI (HFrEF)',
                        description: 'Herzinsuffizienz mit reduzierter Ejektionsfraktion',
                        icon: '📉',
                        difficulty: 'hard',
                        parentId: 'hf-pathophysiology'
                      },
                      {
                        id: 'diastolic-hf',
                        name: 'Diastolische HI (HFpEF)',
                        description: 'Herzinsuffizienz mit erhaltener Ejektionsfraktion',
                        icon: '🔒',
                        difficulty: 'hard',
                        parentId: 'hf-pathophysiology'
                      },
                      {
                        id: 'neurohormonal-activation',
                        name: 'Neurohormonale Aktivierung',
                        description: 'RAAS und Sympathikus bei Herzinsuffizienz',
                        icon: '🧠',
                        difficulty: 'hard',
                        parentId: 'hf-pathophysiology'
                      }
                    ]
                  },
                  {
                    id: 'hf-therapy',
                    name: 'Therapie',
                    description: 'Behandlung der Herzinsuffizienz',
                    icon: '💊',
                    difficulty: 'medium',
                    parentId: 'heart-failure-medications',
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
                id: 'antiarrhythmics',
                name: 'Antiarrhythmika',
                description: 'Medikamente gegen Herzrhythmusstörungen',
                icon: '⚡',
                difficulty: 'hard',
                parentId: 'cardiovascular-medications',
                children: [
                  {
                    id: 'class-1-antiarrhythmics',
                    name: 'Klasse I (Natriumkanalblocker)',
                    description: 'Membranstabilisierende Antiarrhythmika',
                    icon: '1️⃣',
                    difficulty: 'hard',
                    parentId: 'antiarrhythmics'
                  },
                  {
                    id: 'class-2-antiarrhythmics',
                    name: 'Klasse II (Betablocker)',
                    description: 'Beta-Adrenozeptor-Antagonisten',
                    icon: '2️⃣',
                    difficulty: 'medium',
                    parentId: 'antiarrhythmics'
                  },
                  {
                    id: 'class-3-antiarrhythmics',
                    name: 'Klasse III (Kaliumkanalblocker)',
                    description: 'Repolarisationshemmer (Amiodaron, Sotalol)',
                    icon: '3️⃣',
                    difficulty: 'hard',
                    parentId: 'antiarrhythmics'
                  },
                  {
                    id: 'class-4-antiarrhythmics',
                    name: 'Klasse IV (Kalziumkanalblocker)',
                    description: 'Kalziumantagonisten (Verapamil, Diltiazem)',
                    icon: '4️⃣',
                    difficulty: 'medium',
                    parentId: 'antiarrhythmics'
                  }
                ]
              },
              {
                id: 'lipid-medications',
                name: 'Lipidsenker',
                description: 'Cholesterin- und Triglyceridsenkende Medikamente',
                icon: '🧈',
                difficulty: 'medium',
                parentId: 'cardiovascular-medications',
                children: [
                  {
                    id: 'statins',
                    name: 'Statine (Atorvastatin, Simvastatin)',
                    description: 'HMG-CoA-Reduktase-Hemmer',
                    icon: '💊',
                    difficulty: 'medium',
                    parentId: 'lipid-medications'
                  },
                  {
                    id: 'ezetimibe',
                    name: 'Ezetimib',
                    description: 'Cholesterinresorptionshemmer',
                    icon: '🚫',
                    difficulty: 'medium',
                    parentId: 'lipid-medications'
                  },
                  {
                    id: 'pcsk9-inhibitors',
                    name: 'PCSK9-Hemmer (Alirocumab, Evolocumab)',
                    description: 'Proprotein-Convertase-Subtilisin/Kexin-Typ-9-Hemmer',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'lipid-medications'
                  },
                  {
                    id: 'fibrates',
                    name: 'Fibrate (Fenofibrat)',
                    description: 'PPARα-Agonisten für Triglyceride',
                    icon: '🔥',
                    difficulty: 'medium',
                    parentId: 'lipid-medications'
                  }
                ]
              }
            ]
          },
          {
            id: 'respiratory-medications',
            name: 'Respiratorische Medikamente',
            description: 'Medikamente für die Atemwege',
            icon: '🫁',
            difficulty: 'medium',
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
                    id: 'beta2-agonists',
                    name: 'Beta2-Agonisten',
                    description: 'Sympathomimetika zur Bronchodilatation',
                    icon: '💨',
                    difficulty: 'medium',
                    parentId: 'bronchodilators',
                    children: [
                      {
                        id: 'saba',
                        name: 'SABA (Salbutamol, Terbutalin)',
                        description: 'Kurz wirksame Beta2-Agonisten',
                        icon: '⚡',
                        difficulty: 'easy',
                        parentId: 'beta2-agonists'
                      },
                      {
                        id: 'laba',
                        name: 'LABA (Formoterol, Salmeterol)',
                        description: 'Lang wirksame Beta2-Agonisten',
                        icon: '🕒',
                        difficulty: 'medium',
                        parentId: 'beta2-agonists'
                      }
                    ]
                  },
                  {
                    id: 'anticholinergics',
                    name: 'Anticholinergika',
                    description: 'Muskarinrezeptor-Antagonisten',
                    icon: '🚫',
                    difficulty: 'medium',
                    parentId: 'bronchodilators',
                    children: [
                      {
                        id: 'sama',
                        name: 'SAMA (Ipratropium)',
                        description: 'Kurz wirksame Anticholinergika',
                        icon: '⏰',
                        difficulty: 'medium',
                        parentId: 'anticholinergics'
                      },
                      {
                        id: 'lama',
                        name: 'LAMA (Tiotropium, Glycopyrronium)',
                        description: 'Lang wirksame Anticholinergika',
                        icon: '🕰️',
                        difficulty: 'medium',
                        parentId: 'anticholinergics'
                      }
                    ]
                  },
                  {
                    id: 'methylxanthines',
                    name: 'Methylxanthine (Theophyllin)',
                    description: 'Phosphodiesterase-Hemmer',
                    icon: '☕',
                    difficulty: 'hard',
                    parentId: 'bronchodilators'
                  }
                ]
              },
              {
                id: 'anti-inflammatory-respiratory',
                name: 'Antiinflammatorische Medikamente',
                description: 'Entzündungshemmende Atemwegstherapie',
                icon: '🔥',
                difficulty: 'medium',
                parentId: 'respiratory-medications',
                children: [
                  {
                    id: 'inhaled-corticosteroids',
                    name: 'Inhalative Kortikosteroide (ICS)',
                    description: 'Lokale antiinflammatorische Therapie',
                    icon: '💨',
                    difficulty: 'medium',
                    parentId: 'anti-inflammatory-respiratory',
                    children: [
                      {
                        id: 'beclometasone',
                        name: 'Beclometason',
                        description: 'Bewährtes inhalatives Kortikosteroid',
                        icon: '🌿',
                        difficulty: 'easy',
                        parentId: 'inhaled-corticosteroids'
                      },
                      {
                        id: 'budesonide',
                        name: 'Budesonid',
                        description: 'Gut verträgliches ICS',
                        icon: '🍃',
                        difficulty: 'easy',
                        parentId: 'inhaled-corticosteroids'
                      },
                      {
                        id: 'fluticasone',
                        name: 'Fluticason',
                        description: 'Hochpotentes ICS',
                        icon: '🌱',
                        difficulty: 'medium',
                        parentId: 'inhaled-corticosteroids'
                      }
                    ]
                  },
                  {
                    id: 'leukotriene-antagonists',
                    name: 'Leukotrienantagonisten (Montelukast)',
                    description: 'Antileukotriene bei Asthma',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'anti-inflammatory-respiratory'
                  },
                  {
                    id: 'mast-cell-stabilizers',
                    name: 'Mastzellstabilisatoren (Cromoglicinsäure)',
                    description: 'Prophylaktische antiallergische Therapie',
                    icon: '🧪',
                    difficulty: 'medium',
                    parentId: 'anti-inflammatory-respiratory'
                  }
                ]
              },
              {
                id: 'combination-therapies',
                name: 'Kombinationstherapien',
                description: 'Fixe Arzneimittelkombinationen',
                icon: '🤝',
                difficulty: 'hard',
                parentId: 'respiratory-medications',
                children: [
                  {
                    id: 'ics-laba',
                    name: 'ICS/LABA (Symbicort, Seretide)',
                    description: 'Kortikosteroid + Lang wirksamer Beta2-Agonist',
                    icon: '💑',
                    difficulty: 'medium',
                    parentId: 'combination-therapies'
                  },
                  {
                    id: 'laba-lama',
                    name: 'LABA/LAMA (Anoro, Spiolto)',
                    description: 'Duale Bronchodilatation',
                    icon: '👫',
                    difficulty: 'medium',
                    parentId: 'combination-therapies'
                  },
                  {
                    id: 'triple-therapy',
                    name: 'Triple-Therapie (ICS/LABA/LAMA)',
                    description: 'Dreifachkombination bei COPD',
                    icon: '👨‍👩‍👧',
                    difficulty: 'hard',
                    parentId: 'combination-therapies'
                  }
                ]
              },
              {
                id: 'other-respiratory-medications',
                name: 'Weitere respiratorische Medikamente',
                description: 'Spezielle Atemwegsmedikamente',
                icon: '🧬',
                difficulty: 'medium',
                parentId: 'respiratory-medications',
                children: [
                  {
                    id: 'mucolytics',
                    name: 'Mukolytika (Acetylcystein, Ambroxol)',
                    description: 'Schleimlösende Medikamente',
                    icon: '💧',
                    difficulty: 'easy',
                    parentId: 'other-respiratory-medications'
                  },
                  {
                    id: 'antitussives',
                    name: 'Antitussiva (Codein, Dextromethorphan)',
                    description: 'Hustenstillende Medikamente',
                    icon: '🤐',
                    difficulty: 'medium',
                    parentId: 'other-respiratory-medications'
                  },
                  {
                    id: 'expectorants',
                    name: 'Expektoranzien (Guaifenesin)',
                    description: 'Auswurffördernde Medikamente',
                    icon: '🌊',
                    difficulty: 'easy',
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
          },
          {
            id: 'cns-medications',
            name: 'ZNS-Medikamente',
            description: 'Medikamente für das zentrale Nervensystem',
            icon: '🧠',
            difficulty: 'hard',
            parentId: 'medication-groups',
            children: [
              {
                id: 'analgesics',
                name: 'Analgetika',
                description: 'Schmerzmedikamente',
                icon: '💊',
                difficulty: 'medium',
                parentId: 'cns-medications',
                children: [
                  {
                    id: 'non-opioid-analgesics',
                    name: 'Nicht-Opioid-Analgetika',
                    description: 'Nicht-opioide Schmerzmittel',
                    icon: '🔴',
                    difficulty: 'medium',
                    parentId: 'analgesics',
                    children: [
                      {
                        id: 'nsaids',
                        name: 'NSAIDs (Ibuprofen, Diclofenac, Naproxen)',
                        description: 'Nichtsteroidale Antirheumatika',
                        icon: '🌡️',
                        difficulty: 'easy',
                        parentId: 'non-opioid-analgesics'
                      },
                      {
                        id: 'paracetamol',
                        name: 'Paracetamol',
                        description: 'Analgetikum und Antipyretikum',
                        icon: '🌡️',
                        difficulty: 'easy',
                        parentId: 'non-opioid-analgesics'
                      },
                      {
                        id: 'metamizole',
                        name: 'Metamizol',
                        description: 'Potentes Analgetikum mit Risiken',
                        icon: '⚠️',
                        difficulty: 'medium',
                        parentId: 'non-opioid-analgesics'
                      }
                    ]
                  },
                  {
                    id: 'opioid-analgesics',
                    name: 'Opioid-Analgetika',
                    description: 'Opioide Schmerzmittel',
                    icon: '💉',
                    difficulty: 'hard',
                    parentId: 'analgesics',
                    children: [
                      {
                        id: 'weak-opioids',
                        name: 'Schwache Opioide (Tramadol, Codein)',
                        description: 'WHO-Stufe II Analgetika',
                        icon: '🟡',
                        difficulty: 'medium',
                        parentId: 'opioid-analgesics'
                      },
                      {
                        id: 'strong-opioids',
                        name: 'Starke Opioide (Morphin, Fentanyl, Oxycodon)',
                        description: 'WHO-Stufe III Analgetika',
                        icon: '🔴',
                        difficulty: 'hard',
                        parentId: 'opioid-analgesics'
                      },
                      {
                        id: 'opioid-antagonists',
                        name: 'Opioid-Antagonisten (Naloxon)',
                        description: 'Gegenmittel bei Opioid-Überdosierung',
                        icon: '🚨',
                        difficulty: 'hard',
                        parentId: 'opioid-analgesics'
                      }
                    ]
                  },
                  {
                    id: 'adjuvant-analgesics',
                    name: 'Adjuvante Analgetika',
                    description: 'Unterstützende Schmerztherapie',
                    icon: '🔧',
                    difficulty: 'medium',
                    parentId: 'analgesics',
                    children: [
                      {
                        id: 'anticonvulsants-pain',
                        name: 'Antikonvulsiva (Gabapentin, Pregabalin)',
                        description: 'Bei neuropathischen Schmerzen',
                        icon: '⚡',
                        difficulty: 'medium',
                        parentId: 'adjuvant-analgesics'
                      },
                      {
                        id: 'antidepressants-pain',
                        name: 'Antidepressiva (Amitriptylin, Duloxetin)',
                        description: 'Bei chronischen Schmerzen',
                        icon: '🧠',
                        difficulty: 'medium',
                        parentId: 'adjuvant-analgesics'
                      },
                      {
                        id: 'topical-analgesics',
                        name: 'Topische Analgetika (Capsaicin, Lidocain)',
                        description: 'Lokale Schmerzbehandlung',
                        icon: '🧴',
                        difficulty: 'easy',
                        parentId: 'adjuvant-analgesics'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'psychopharmacology',
                name: 'Psychopharmaka',
                description: 'Medikamente für psychiatrische Erkrankungen',
                icon: '🧠',
                difficulty: 'hard',
                parentId: 'cns-medications',
                children: [
                  {
                    id: 'antidepressants',
                    name: 'Antidepressiva',
                    description: 'Medikamente gegen Depression',
                    icon: '☀️',
                    difficulty: 'medium',
                    parentId: 'psychopharmacology',
                    children: [
                      {
                        id: 'ssri',
                        name: 'SSRI (Citalopram, Sertralin, Fluoxetin)',
                        description: 'Selektive Serotonin-Wiederaufnahmehemmer',
                        icon: '🔄',
                        difficulty: 'medium',
                        parentId: 'antidepressants'
                      },
                      {
                        id: 'snri',
                        name: 'SNRI (Venlafaxin, Duloxetin)',
                        description: 'Serotonin-Noradrenalin-Wiederaufnahmehemmer',
                        icon: '🔄',
                        difficulty: 'medium',
                        parentId: 'antidepressants'
                      },
                      {
                        id: 'tricyclics',
                        name: 'Trizyklika (Amitriptylin, Imipramin)',
                        description: 'Ältere Antidepressiva mit breitem Wirkspektrum',
                        icon: '🔺',
                        difficulty: 'hard',
                        parentId: 'antidepressants'
                      },
                      {
                        id: 'mao-inhibitors',
                        name: 'MAO-Hemmer (Tranylcypromin)',
                        description: 'Monoaminoxidase-Inhibitoren',
                        icon: '🚫',
                        difficulty: 'hard',
                        parentId: 'antidepressants'
                      }
                    ]
                  },
                  {
                    id: 'antipsychotics',
                    name: 'Antipsychotika',
                    description: 'Neuroleptika gegen Psychosen',
                    icon: '🎭',
                    difficulty: 'hard',
                    parentId: 'psychopharmacology',
                    children: [
                      {
                        id: 'typical-antipsychotics',
                        name: 'Typische Antipsychotika (Haloperidol)',
                        description: 'Klassische Neuroleptika',
                        icon: '🔒',
                        difficulty: 'hard',
                        parentId: 'antipsychotics'
                      },
                      {
                        id: 'atypical-antipsychotics',
                        name: 'Atypische Antipsychotika (Risperidon, Olanzapin, Quetiapin)',
                        description: 'Moderne Neuroleptika mit weniger EPS',
                        icon: '🔓',
                        difficulty: 'hard',
                        parentId: 'antipsychotics'
                      },
                      {
                        id: 'depot-antipsychotics',
                        name: 'Depot-Antipsychotika',
                        description: 'Langwirksame Injektionen',
                        icon: '💉',
                        difficulty: 'hard',
                        parentId: 'antipsychotics'
                      }
                    ]
                  },
                  {
                    id: 'anxiolytics-hypnotics',
                    name: 'Anxiolytika & Hypnotika',
                    description: 'Beruhigungs- und Schlafmittel',
                    icon: '😴',
                    difficulty: 'medium',
                    parentId: 'psychopharmacology',
                    children: [
                      {
                        id: 'benzodiazepines',
                        name: 'Benzodiazepine (Lorazepam, Diazepam)',
                        description: 'GABA-Agonisten mit Suchtpotential',
                        icon: '⚠️',
                        difficulty: 'medium',
                        parentId: 'anxiolytics-hypnotics'
                      },
                      {
                        id: 'z-drugs',
                        name: 'Z-Substanzen (Zolpidem, Zopiclon)',
                        description: 'Moderne Schlafmittel',
                        icon: '🌙',
                        difficulty: 'medium',
                        parentId: 'anxiolytics-hypnotics'
                      },
                      {
                        id: 'buspirone',
                        name: 'Buspiron',
                        description: 'Nicht-Benzodiazepin-Anxiolytikum',
                        icon: '🕊️',
                        difficulty: 'medium',
                        parentId: 'anxiolytics-hypnotics'
                      }
                    ]
                  },
                  {
                    id: 'mood-stabilizers',
                    name: 'Phasenprophylaktika',
                    description: 'Stimmungsstabilisierer',
                    icon: '⚖️',
                    difficulty: 'hard',
                    parentId: 'psychopharmacology',
                    children: [
                      {
                        id: 'lithium',
                        name: 'Lithium',
                        description: 'Klassischer Stimmungsstabilisierer',
                        icon: '⚛️',
                        difficulty: 'hard',
                        parentId: 'mood-stabilizers'
                      },
                      {
                        id: 'anticonvulsants-mood',
                        name: 'Antikonvulsiva (Valproat, Lamotrigin)',
                        description: 'Antiepileptika als Phasenprophylaxe',
                        icon: '⚡',
                        difficulty: 'hard',
                        parentId: 'mood-stabilizers'
                      },
                      {
                        id: 'atypical-antipsychotics-mood',
                        name: 'Atypische Antipsychotika (Aripiprazol)',
                        description: 'Neuroleptika bei bipolaren Störungen',
                        icon: '🎭',
                        difficulty: 'hard',
                        parentId: 'mood-stabilizers'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'antiepileptics',
                name: 'Antiepileptika',
                description: 'Medikamente gegen Epilepsie',
                icon: '⚡',
                difficulty: 'hard',
                parentId: 'cns-medications',
                children: [
                  {
                    id: 'classical-aed',
                    name: 'Klassische AED (Phenytoin, Carbamazepin)',
                    description: 'Traditionelle Antiepileptika',
                    icon: '🔵',
                    difficulty: 'hard',
                    parentId: 'antiepileptics'
                  },
                  {
                    id: 'newer-aed',
                    name: 'Neuere AED (Levetiracetam, Lamotrigin)',
                    description: 'Moderne Antiepileptika',
                    icon: '🟢',
                    difficulty: 'medium',
                    parentId: 'antiepileptics'
                  },
                  {
                    id: 'enzyme-induction-inhibition',
                    name: 'Enzyminduktion/-inhibition',
                    description: 'Auswirkungen auf Cytochrom P450',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'antiepileptics'
                  },
                  {
                    id: 'teratogenicity',
                    name: 'Teratogenität',
                    description: 'Fruchtschädigende Wirkungen',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'antiepileptics'
                  }
                ]
              },
              {
                id: 'parkinson-medications',
                name: 'Parkinson-Medikamente',
                description: 'Medikamente bei Morbus Parkinson',
                icon: '🧓',
                difficulty: 'hard',
                parentId: 'cns-medications',
                children: [
                  {
                    id: 'l-dopa-decarboxylase',
                    name: 'L-Dopa + Decarboxylasehemmer',
                    description: 'Dopamin-Vorstufe mit Carbidopa/Benserazid',
                    icon: '💊',
                    difficulty: 'medium',
                    parentId: 'parkinson-medications'
                  },
                  {
                    id: 'dopamine-agonists',
                    name: 'Dopaminagonisten (Ropinirol, Pramipexol)',
                    description: 'Direkte Dopaminrezeptor-Agonisten',
                    icon: '🎯',
                    difficulty: 'medium',
                    parentId: 'parkinson-medications'
                  },
                  {
                    id: 'mao-b-inhibitors',
                    name: 'MAO-B-Hemmer (Rasagilin, Selegilin)',
                    description: 'Monoaminoxidase-B-Inhibitoren',
                    icon: '🚫',
                    difficulty: 'medium',
                    parentId: 'parkinson-medications'
                  },
                  {
                    id: 'comt-inhibitors',
                    name: 'COMT-Hemmer (Entacapon)',
                    description: 'Catechol-O-Methyltransferase-Hemmer',
                    icon: '🔒',
                    difficulty: 'medium',
                    parentId: 'parkinson-medications'
                  },
                  {
                    id: 'anticholinergics-parkinson',
                    name: 'Anticholinergika (Biperiden)',
                    description: 'Muskarinrezeptor-Antagonisten',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'parkinson-medications'
                  }
                ]
              }
            ]
          },
          {
            id: 'anti-infectives',
            name: 'Antiinfektiva',
            description: 'Medikamente gegen Infektionen',
            icon: '🦠',
            difficulty: 'hard',
            parentId: 'medication-groups',
            children: [
              {
                id: 'antibiotics',
                name: 'Antibiotika',
                description: 'Medikamente gegen bakterielle Infektionen',
                icon: '💊',
                difficulty: 'hard',
                parentId: 'anti-infectives',
                children: [
                  {
                    id: 'beta-lactams',
                    name: 'β-Lactame',
                    description: 'Antibiotika mit β-Lactam-Ring',
                    icon: '⭕',
                    difficulty: 'hard',
                    parentId: 'antibiotics',
                    children: [
                      {
                        id: 'penicillins',
                        name: 'Penicilline (Penicillin G/V, Amoxicillin)',
                        description: 'Klassische β-Lactam-Antibiotika',
                        icon: '🟡',
                        difficulty: 'medium',
                        parentId: 'beta-lactams'
                      },
                      {
                        id: 'cephalosporins',
                        name: 'Cephalosporine (1.-5. Generation)',
                        description: 'Breitspektrum β-Lactame',
                        icon: '🔵',
                        difficulty: 'hard',
                        parentId: 'beta-lactams'
                      },
                      {
                        id: 'carbapenems',
                        name: 'Carbapeneme (Meropenem, Imipenem)',
                        description: 'Reserve-Antibiotika',
                        icon: '🔴',
                        difficulty: 'hard',
                        parentId: 'beta-lactams'
                      },
                      {
                        id: 'beta-lactamase-inhibitors',
                        name: 'β-Lactamase-Inhibitoren',
                        description: 'Schutz vor bakterieller Resistenz',
                        icon: '🛡️',
                        difficulty: 'medium',
                        parentId: 'beta-lactams'
                      }
                    ]
                  },
                  {
                    id: 'macrolides',
                    name: 'Makrolide (Clarithromycin, Azithromycin)',
                    description: 'Protein-Synthese-Hemmer',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'antibiotics'
                  },
                  {
                    id: 'fluoroquinolones',
                    name: 'Fluorchinolone (Ciprofloxacin, Levofloxacin)',
                    description: 'DNA-Gyrase-Hemmer',
                    icon: '🧬',
                    difficulty: 'medium',
                    parentId: 'antibiotics'
                  },
                  {
                    id: 'aminoglycosides',
                    name: 'Aminoglykoside (Gentamicin, Tobramycin)',
                    description: 'Ribosom-Hemmer mit Nephro-/Ototoxizität',
                    icon: '⚠️',
                    difficulty: 'hard',
                    parentId: 'antibiotics'
                  },
                  {
                    id: 'tetracyclines',
                    name: 'Tetracycline (Doxycyclin)',
                    description: 'Breitspektrum-Antibiotika',
                    icon: '🟫',
                    difficulty: 'medium',
                    parentId: 'antibiotics'
                  },
                  {
                    id: 'glycopeptides',
                    name: 'Glykopeptide (Vancomycin, Teicoplanin)',
                    description: 'Reserve-Antibiotika gegen Gram-positive',
                    icon: '🔴',
                    difficulty: 'hard',
                    parentId: 'antibiotics'
                  },
                  {
                    id: 'lincosamides',
                    name: 'Lincosamide (Clindamycin)',
                    description: 'Protein-Synthese-Hemmer',
                    icon: '🟠',
                    difficulty: 'medium',
                    parentId: 'antibiotics'
                  },
                  {
                    id: 'other-antibiotics',
                    name: 'Weitere (Linezolid, Daptomycin, Tigecyclin)',
                    description: 'Moderne Reserve-Antibiotika',
                    icon: '🆕',
                    difficulty: 'hard',
                    parentId: 'antibiotics'
                  }
                ]
              },
              {
                id: 'antifungals',
                name: 'Antimykotika',
                description: 'Medikamente gegen Pilzinfektionen',
                icon: '🍄',
                difficulty: 'medium',
                parentId: 'anti-infectives',
                children: [
                  {
                    id: 'azoles',
                    name: 'Azole (Fluconazol, Voriconazol)',
                    description: 'Ergosterol-Synthese-Hemmer',
                    icon: '⭕',
                    difficulty: 'medium',
                    parentId: 'antifungals'
                  },
                  {
                    id: 'echinocandins',
                    name: 'Echinocandine (Caspofungin)',
                    description: 'Zellwand-Synthese-Hemmer',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'antifungals'
                  },
                  {
                    id: 'polyenes',
                    name: 'Polyene (Amphotericin B)',
                    description: 'Membran-aktive Antimykotika',
                    icon: '💥',
                    difficulty: 'hard',
                    parentId: 'antifungals'
                  },
                  {
                    id: 'terbinafine',
                    name: 'Terbinafin',
                    description: 'Squalenepoxidase-Hemmer',
                    icon: '🎯',
                    difficulty: 'easy',
                    parentId: 'antifungals'
                  }
                ]
              },
              {
                id: 'antivirals',
                name: 'Virustatika',
                description: 'Medikamente gegen Virusinfektionen',
                icon: '🦠',
                difficulty: 'hard',
                parentId: 'anti-infectives',
                children: [
                  {
                    id: 'nucleoside-analogs',
                    name: 'Nucleosidanaloga (Aciclovir, Ganciclovir)',
                    description: 'DNA-Polymerase-Hemmer',
                    icon: '🧬',
                    difficulty: 'medium',
                    parentId: 'antivirals'
                  },
                  {
                    id: 'hiv-medications',
                    name: 'HIV-Medikamente (NRTI, NNRTI, PI, INI)',
                    description: 'Antiretrovirale Therapie',
                    icon: '🎗️',
                    difficulty: 'hard',
                    parentId: 'antivirals'
                  },
                  {
                    id: 'influenza-antivirals',
                    name: 'Influenza (Oseltamivir, Zanamivir)',
                    description: 'Neuraminidase-Hemmer',
                    icon: '🤧',
                    difficulty: 'medium',
                    parentId: 'antivirals'
                  },
                  {
                    id: 'hepatitis-antivirals',
                    name: 'Hepatitis (DAA, Interferone)',
                    description: 'Direct Acting Antivirals und Immunmodulatoren',
                    icon: '🫀',
                    difficulty: 'hard',
                    parentId: 'antivirals'
                  }
                ]
              },
              {
                id: 'antiparasitics',
                name: 'Antiparasitäre Mittel',
                description: 'Medikamente gegen Parasiten',
                icon: '🪱',
                difficulty: 'medium',
                parentId: 'anti-infectives',
                children: [
                  {
                    id: 'antimalarials',
                    name: 'Antimalariamittel',
                    description: 'Medikamente gegen Malaria',
                    icon: '🦟',
                    difficulty: 'medium',
                    parentId: 'antiparasitics'
                  },
                  {
                    id: 'anthelmintics',
                    name: 'Anthelminthika',
                    description: 'Medikamente gegen Würmer',
                    icon: '🪱',
                    difficulty: 'medium',
                    parentId: 'antiparasitics'
                  },
                  {
                    id: 'antiprotozoals',
                    name: 'Antiprotozoika',
                    description: 'Medikamente gegen Protozoen',
                    icon: '🔬',
                    difficulty: 'medium',
                    parentId: 'antiparasitics'
                  }
                ]
              }
            ]
          },
          {
            id: 'gastrointestinal-medications',
            name: 'Gastrointestinale Medikamente',
            description: 'Medikamente für den Magen-Darm-Trakt',
            icon: '🫃',
            difficulty: 'medium',
            parentId: 'medication-groups',
            children: [
              {
                id: 'proton-pump-inhibitors',
                name: 'Protonenpumpenhemmer (Omeprazol, Pantoprazol)',
                description: 'H+/K+-ATPase-Hemmer',
                icon: '🛡️',
                difficulty: 'medium',
                parentId: 'gastrointestinal-medications'
              },
              {
                id: 'h2-antagonists',
                name: 'H2-Antagonisten (Ranitidin, Famotidin)',
                description: 'Histamin-H2-Rezeptor-Antagonisten',
                icon: '🚫',
                difficulty: 'medium',
                parentId: 'gastrointestinal-medications'
              },
              {
                id: 'antacids',
                name: 'Antazida (Magaldrat, Sucralfat)',
                description: 'Säurebindende Medikamente',
                icon: '⚖️',
                difficulty: 'easy',
                parentId: 'gastrointestinal-medications'
              },
              {
                id: 'prokinetics',
                name: 'Prokinetika (Metoclopramid, Domperidon)',
                description: 'Motilitätsfördernde Medikamente',
                icon: '🔄',
                difficulty: 'medium',
                parentId: 'gastrointestinal-medications'
              },
              {
                id: 'antiemetics',
                name: 'Antiemetika (Ondansetron, Dimenhydrinat)',
                description: 'Medikamente gegen Übelkeit und Erbrechen',
                icon: '🤢',
                difficulty: 'medium',
                parentId: 'gastrointestinal-medications'
              },
              {
                id: 'laxatives',
                name: 'Laxanzien (Macrogol, Lactulose, Bisacodyl)',
                description: 'Abführende Medikamente',
                icon: '💧',
                difficulty: 'easy',
                parentId: 'gastrointestinal-medications'
              },
              {
                id: 'antidiarrheals',
                name: 'Antidiarrhoika (Loperamid, Racecadotril)',
                description: 'Medikamente gegen Durchfall',
                icon: '🚫',
                difficulty: 'easy',
                parentId: 'gastrointestinal-medications'
              },
              {
                id: 'ibd-medications',
                name: 'CED-Medikamente (Mesalazin, Azathioprin, Biologika)',
                description: 'Chronisch-entzündliche Darmerkrankungen',
                icon: '🔥',
                difficulty: 'hard',
                parentId: 'gastrointestinal-medications'
              }
            ]
          },
          {
            id: 'hormones-metabolism',
            name: 'Hormone & Stoffwechsel',
            description: 'Hormonelle und metabolische Medikamente',
            icon: '⚗️',
            difficulty: 'hard',
            parentId: 'medication-groups',
            children: [
              {
                id: 'antidiabetics',
                name: 'Antidiabetika',
                description: 'Medikamente zur Diabetestherapie',
                icon: '🍯',
                difficulty: 'hard',
                parentId: 'hormones-metabolism',
                children: [
                  {
                    id: 'insulins',
                    name: 'Insuline (Rapid-, Kurz-, Intermediär-, Langwirksam)',
                    description: 'Verschiedene Insulinpräparate',
                    icon: '💉',
                    difficulty: 'hard',
                    parentId: 'antidiabetics'
                  },
                  {
                    id: 'metformin',
                    name: 'Metformin (First-Line)',
                    description: 'Biguanid - Erstlinientherapie',
                    icon: '🥇',
                    difficulty: 'medium',
                    parentId: 'antidiabetics'
                  },
                  {
                    id: 'sulfonylureas',
                    name: 'Sulfonylharnstoffe (Glimepirid)',
                    description: 'Insulinsekretion-stimulierende Medikamente',
                    icon: '🔑',
                    difficulty: 'medium',
                    parentId: 'antidiabetics'
                  },
                  {
                    id: 'dpp4-inhibitors',
                    name: 'DPP-4-Hemmer (Sitagliptin)',
                    description: 'Dipeptidylpeptidase-4-Inhibitoren',
                    icon: '🔒',
                    difficulty: 'medium',
                    parentId: 'antidiabetics'
                  },
                  {
                    id: 'glp1-agonists',
                    name: 'GLP-1-Agonisten (Liraglutid, Semaglutid)',
                    description: 'Glucagon-like Peptide-1 Rezeptoragonisten',
                    icon: '💊',
                    difficulty: 'medium',
                    parentId: 'antidiabetics'
                  },
                  {
                    id: 'sglt2-inhibitors-diabetes',
                    name: 'SGLT-2-Hemmer (Empagliflozin, Dapagliflozin)',
                    description: 'Natrium-Glukose-Cotransporter-2-Hemmer',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'antidiabetics'
                  },
                  {
                    id: 'alpha-glucosidase-inhibitors',
                    name: 'α-Glucosidase-Hemmer (Acarbose)',
                    description: 'Kohlenhydratresorptions-Hemmer',
                    icon: '🚫',
                    difficulty: 'medium',
                    parentId: 'antidiabetics'
                  }
                ]
              },
              {
                id: 'thyroid-hormones',
                name: 'Schilddrüsenhormone',
                description: 'Schilddrüsenmedikamente',
                icon: '🦋',
                difficulty: 'medium',
                parentId: 'hormones-metabolism',
                children: [
                  {
                    id: 'levothyroxine',
                    name: 'Levothyroxin (T4)',
                    description: 'Thyroxin-Substitution',
                    icon: '4️⃣',
                    difficulty: 'medium',
                    parentId: 'thyroid-hormones'
                  },
                  {
                    id: 'liothyronine',
                    name: 'Liothyronin (T3)',
                    description: 'Trijodthyronin',
                    icon: '3️⃣',
                    difficulty: 'medium',
                    parentId: 'thyroid-hormones'
                  },
                  {
                    id: 'antithyroid-drugs',
                    name: 'Thyreostatika (Thiamazol, Propylthiouracil)',
                    description: 'Schilddrüsenhemmer',
                    icon: '🚫',
                    difficulty: 'medium',
                    parentId: 'thyroid-hormones'
                  },
                  {
                    id: 'iodine',
                    name: 'Jod (Kaliumjodid)',
                    description: 'Jodsubstitution',
                    icon: 'I',
                    difficulty: 'easy',
                    parentId: 'thyroid-hormones'
                  }
                ]
              },
              {
                id: 'corticosteroids',
                name: 'Kortikosteroide',
                description: 'Steroidhormone',
                icon: '💊',
                difficulty: 'hard',
                parentId: 'hormones-metabolism',
                children: [
                  {
                    id: 'hydrocortisone',
                    name: 'Hydrocortison (Substitution)',
                    description: 'Physiologische Cortisolsubstitution',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'corticosteroids'
                  },
                  {
                    id: 'prednisolone',
                    name: 'Prednisolon (antiinflammatorisch)',
                    description: 'Mittelstarkes Corticosteroid',
                    icon: '🔥',
                    difficulty: 'medium',
                    parentId: 'corticosteroids'
                  },
                  {
                    id: 'dexamethasone',
                    name: 'Dexamethason (hochpotent)',
                    description: 'Hochpotentes Corticosteroid',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'corticosteroids'
                  },
                  {
                    id: 'cushing-threshold',
                    name: 'Cushing-Schwelle',
                    description: 'Nebenwirkungsschwelle',
                    icon: '⚠️',
                    difficulty: 'medium',
                    parentId: 'corticosteroids'
                  },
                  {
                    id: 'steroid-tapering',
                    name: 'Ausschleichen',
                    description: 'Dosisreduktion zur NNR-Erholung',
                    icon: '📉',
                    difficulty: 'medium',
                    parentId: 'corticosteroids'
                  }
                ]
              },
              {
                id: 'other-hormones',
                name: 'Weitere Hormone',
                description: 'Zusätzliche Hormonpräparate',
                icon: '🧪',
                difficulty: 'medium',
                parentId: 'hormones-metabolism',
                children: [
                  {
                    id: 'sex-hormones',
                    name: 'Sexualhormone (Östrogene, Gestagene, Testosteron)',
                    description: 'Geschlechtshormone',
                    icon: '♂♀',
                    difficulty: 'medium',
                    parentId: 'other-hormones'
                  },
                  {
                    id: 'growth-hormone',
                    name: 'Wachstumshormon (Somatropin)',
                    description: 'Human Growth Hormone',
                    icon: '📏',
                    difficulty: 'medium',
                    parentId: 'other-hormones'
                  },
                  {
                    id: 'calcium-hormones',
                    name: 'Parathormon, Calcitonin',
                    description: 'Calciumstoffwechsel-regulierende Hormone',
                    icon: '🦴',
                    difficulty: 'medium',
                    parentId: 'other-hormones'
                  },
                  {
                    id: 'vasopressin',
                    name: 'Vasopressin/Desmopressin',
                    description: 'Antidiuretisches Hormon',
                    icon: '💧',
                    difficulty: 'medium',
                    parentId: 'other-hormones'
                  }
                ]
              }
            ]
          },
          {
            id: 'other-important-medications',
            name: 'Weitere wichtige Medikamentengruppen',
            description: 'Spezielle und wichtige Medikamentenklassen',
            icon: '⭐',
            difficulty: 'hard',
            parentId: 'medication-groups',
            children: [
              {
                id: 'immunosuppressants',
                name: 'Immunsuppressiva',
                description: 'Immunsystem-unterdrückende Medikamente',
                icon: '🛡️',
                difficulty: 'hard',
                parentId: 'other-important-medications',
                children: [
                  {
                    id: 'calcineurin-inhibitors',
                    name: 'Calcineurininhibitoren (Ciclosporin, Tacrolimus)',
                    description: 'T-Zell-Aktivierung-Hemmer',
                    icon: '🔒',
                    difficulty: 'hard',
                    parentId: 'immunosuppressants'
                  },
                  {
                    id: 'mtor-inhibitors',
                    name: 'mTOR-Inhibitoren (Sirolimus, Everolimus)',
                    description: 'Mechanistic Target of Rapamycin Hemmer',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'immunosuppressants'
                  },
                  {
                    id: 'antimetabolites-immuno',
                    name: 'Antimetabolite (Azathioprin, MMF)',
                    description: 'Purin- und Pyrimidin-Synthese-Hemmer',
                    icon: '🧬',
                    difficulty: 'hard',
                    parentId: 'immunosuppressants'
                  },
                  {
                    id: 'biologics-immuno',
                    name: 'Biologika (Infliximab, Adalimumab, Rituximab)',
                    description: 'Monoklonale Antikörper',
                    icon: '🧬',
                    difficulty: 'hard',
                    parentId: 'immunosuppressants'
                  },
                  {
                    id: 'jak-inhibitors',
                    name: 'JAK-Inhibitoren (Tofacitinib, Baricitinib)',
                    description: 'Janus-Kinase-Hemmer',
                    icon: '🚫',
                    difficulty: 'hard',
                    parentId: 'immunosuppressants'
                  }
                ]
              },
              {
                id: 'cytostatics',
                name: 'Zytostatika',
                description: 'Chemotherapeutika',
                icon: '🧬',
                difficulty: 'hard',
                parentId: 'other-important-medications',
                children: [
                  {
                    id: 'alkylating-agents',
                    name: 'Alkylanzien (Cyclophosphamid)',
                    description: 'DNA-alkylierende Substanzen',
                    icon: '💥',
                    difficulty: 'hard',
                    parentId: 'cytostatics'
                  },
                  {
                    id: 'antimetabolites-chemo',
                    name: 'Antimetabolite (5-FU, Methotrexat)',
                    description: 'Stoffwechsel-Antagonisten',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'cytostatics'
                  },
                  {
                    id: 'mitosis-inhibitors',
                    name: 'Mitosehemmer (Vincristin, Paclitaxel)',
                    description: 'Spindelgift-Zytostatika',
                    icon: '🌀',
                    difficulty: 'hard',
                    parentId: 'cytostatics'
                  },
                  {
                    id: 'topoisomerase-inhibitors',
                    name: 'Topoisomerasehemmer (Doxorubicin)',
                    description: 'DNA-Topoisomerase-Hemmer',
                    icon: '🧬',
                    difficulty: 'hard',
                    parentId: 'cytostatics'
                  },
                  {
                    id: 'targeted-therapy',
                    name: 'Targeted Therapy (Imatinib, Trastuzumab)',
                    description: 'Zielgerichtete Krebstherapie',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'cytostatics'
                  },
                  {
                    id: 'checkpoint-inhibitors',
                    name: 'Immuncheckpoint-Inhibitoren (Pembrolizumab)',
                    description: 'Immuntherapie bei Krebs',
                    icon: '🛡️',
                    difficulty: 'hard',
                    parentId: 'cytostatics'
                  }
                ]
              },
              {
                id: 'emergency-medications',
                name: 'Notfallmedikamente',
                description: 'Medikamente für Notfälle',
                icon: '🚨',
                difficulty: 'hard',
                parentId: 'other-important-medications',
                children: [
                  {
                    id: 'epinephrine-emergency',
                    name: 'Adrenalin (Anaphylaxie, Reanimation)',
                    description: 'Katecholamin für lebensbedrohliche Situationen',
                    icon: '💉',
                    difficulty: 'hard',
                    parentId: 'emergency-medications'
                  },
                  {
                    id: 'atropine-emergency',
                    name: 'Atropin (Bradykardie)',
                    description: 'Parasympatholytikum bei langsamer Herzfrequenz',
                    icon: '💓',
                    difficulty: 'medium',
                    parentId: 'emergency-medications'
                  },
                  {
                    id: 'amiodarone-emergency',
                    name: 'Amiodaron (Kammerflimmern)',
                    description: 'Antiarrhythmikum bei ventrikulären Arrhythmien',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'emergency-medications'
                  },
                  {
                    id: 'glucose-emergency',
                    name: 'Glucose 40% (Hypoglykämie)',
                    description: 'Schnelle Blutzuckerkorrektur',
                    icon: '🍯',
                    difficulty: 'medium',
                    parentId: 'emergency-medications'
                  },
                  {
                    id: 'naloxone-emergency',
                    name: 'Naloxon (Opioid-Intoxikation)',
                    description: 'Opioid-Antagonist',
                    icon: '🚫',
                    difficulty: 'medium',
                    parentId: 'emergency-medications'
                  },
                  {
                    id: 'flumazenil-emergency',
                    name: 'Flumazenil (Benzodiazepin-Intoxikation)',
                    description: 'Benzodiazepin-Antagonist',
                    icon: '🚫',
                    difficulty: 'medium',
                    parentId: 'emergency-medications'
                  }
                ]
              },
              {
                id: 'infusions-electrolytes',
                name: 'Infusionen & Elektrolyte',
                description: 'Flüssigkeits- und Elektrolyttherapie',
                icon: '💧',
                difficulty: 'medium',
                parentId: 'other-important-medications',
                children: [
                  {
                    id: 'crystalloids',
                    name: 'Kristalloide (NaCl 0,9%, Ringer)',
                    description: 'Isotone Elektrolytlösungen',
                    icon: '💎',
                    difficulty: 'easy',
                    parentId: 'infusions-electrolytes'
                  },
                  {
                    id: 'colloids',
                    name: 'Kolloide (HAES, Albumin)',
                    description: 'Volumenersatzmittel',
                    icon: '🔴',
                    difficulty: 'medium',
                    parentId: 'infusions-electrolytes'
                  },
                  {
                    id: 'electrolyte-substitution',
                    name: 'Elektrolytsubstitution (K+, Mg2+, Ca2+)',
                    description: 'Ausgleich von Elektrolytstörungen',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'infusions-electrolytes'
                  },
                  {
                    id: 'parenteral-nutrition',
                    name: 'Parenterale Ernährung',
                    description: 'Intravenöse Ernährungstherapie',
                    icon: '🍽️',
                    difficulty: 'hard',
                    parentId: 'infusions-electrolytes'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'pharmacological-foundations',
        name: 'Pharmakologische Grundlagen',
        description: 'Grundlegende Prinzipien der Pharmakologie',
        icon: '⚗️',
        difficulty: 'hard',
        parentId: 'pharmacology',
        children: [
          {
            id: 'pharmacokinetics',
            name: 'Pharmakokinetik',
            description: 'Was der Körper mit dem Medikament macht',
            icon: '🔄',
            difficulty: 'hard',
            parentId: 'pharmacological-foundations',
            children: [
              {
                id: 'absorption',
                name: 'Absorption',
                description: 'Aufnahme von Arzneistoffen',
                icon: '📥',
                difficulty: 'medium',
                parentId: 'pharmacokinetics',
                children: [
                  {
                    id: 'bioavailability',
                    name: 'Bioverfügbarkeit',
                    description: 'Verfügbare Wirkstoffmenge im systemischen Kreislauf',
                    icon: '📊',
                    difficulty: 'medium',
                    parentId: 'absorption'
                  },
                  {
                    id: 'first-pass-effect',
                    name: 'First-Pass-Effekt',
                    description: 'Präsystemische Elimination in der Leber',
                    icon: '🔄',
                    difficulty: 'medium',
                    parentId: 'absorption'
                  },
                  {
                    id: 'administration-routes',
                    name: 'Applikationswege',
                    description: 'Verschiedene Verabreichungsformen',
                    icon: '💉',
                    difficulty: 'easy',
                    parentId: 'absorption'
                  },
                  {
                    id: 'absorption-disorders',
                    name: 'Resorptionsstörungen',
                    description: 'Beeinträchtigte Arzneistoffaufnahme',
                    icon: '⚠️',
                    difficulty: 'medium',
                    parentId: 'absorption'
                  }
                ]
              },
              {
                id: 'distribution',
                name: 'Distribution',
                description: 'Verteilung von Arzneistoffen im Körper',
                icon: '🌐',
                difficulty: 'medium',
                parentId: 'pharmacokinetics',
                children: [
                  {
                    id: 'volume-distribution',
                    name: 'Verteilungsvolumen',
                    description: 'Theoretisches Volumen der Arzneistoffverteilung',
                    icon: '📦',
                    difficulty: 'hard',
                    parentId: 'distribution'
                  },
                  {
                    id: 'protein-binding',
                    name: 'Plasmaproteinbindung',
                    description: 'Bindung an Albumin und andere Proteine',
                    icon: '🔗',
                    difficulty: 'medium',
                    parentId: 'distribution'
                  },
                  {
                    id: 'blood-brain-barrier',
                    name: 'Blut-Hirn-Schranke',
                    description: 'Selektive Barriere zum ZNS',
                    icon: '🧠',
                    difficulty: 'medium',
                    parentId: 'distribution'
                  },
                  {
                    id: 'placental-barrier',
                    name: 'Plazentaschranke',
                    description: 'Barriere zwischen Mutter und Fetus',
                    icon: '🤱',
                    difficulty: 'medium',
                    parentId: 'distribution'
                  }
                ]
              },
              {
                id: 'metabolism',
                name: 'Metabolismus',
                description: 'Biotransformation von Arzneistoffen',
                icon: '⚛️',
                difficulty: 'hard',
                parentId: 'pharmacokinetics',
                children: [
                  {
                    id: 'phase-1-reactions',
                    name: 'Phase-I-Reaktionen (CYP450)',
                    description: 'Oxidation, Reduktion, Hydrolyse',
                    icon: '🔬',
                    difficulty: 'hard',
                    parentId: 'metabolism'
                  },
                  {
                    id: 'phase-2-reactions',
                    name: 'Phase-II-Reaktionen (Konjugation)',
                    description: 'Glucuronidierung, Sulfatierung, Acetylierung',
                    icon: '🧬',
                    difficulty: 'hard',
                    parentId: 'metabolism'
                  },
                  {
                    id: 'enzyme-induction-inhibition',
                    name: 'Enzyminduktion/-inhibition',
                    description: 'Modulation von Stoffwechselenzymen',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'metabolism'
                  },
                  {
                    id: 'prodrugs',
                    name: 'Prodrugs',
                    description: 'Inaktive Vorstufen aktiver Wirkstoffe',
                    icon: '🎭',
                    difficulty: 'medium',
                    parentId: 'metabolism'
                  }
                ]
              },
              {
                id: 'elimination',
                name: 'Elimination',
                description: 'Ausscheidung von Arzneistoffen',
                icon: '📤',
                difficulty: 'medium',
                parentId: 'pharmacokinetics',
                children: [
                  {
                    id: 'renal-elimination',
                    name: 'Renale Elimination',
                    description: 'Ausscheidung über die Nieren',
                    icon: '🫘',
                    difficulty: 'medium',
                    parentId: 'elimination'
                  },
                  {
                    id: 'hepatic-elimination',
                    name: 'Hepatische Elimination',
                    description: 'Ausscheidung über die Leber',
                    icon: '🫀',
                    difficulty: 'medium',
                    parentId: 'elimination'
                  },
                  {
                    id: 'half-life',
                    name: 'Halbwertszeit',
                    description: 'Zeit bis zur Halbierung der Plasmakonzentration',
                    icon: '⏱️',
                    difficulty: 'medium',
                    parentId: 'elimination'
                  },
                  {
                    id: 'clearance',
                    name: 'Clearance',
                    description: 'Eliminationsgeschwindigkeit aus dem Plasma',
                    icon: '🚿',
                    difficulty: 'hard',
                    parentId: 'elimination'
                  }
                ]
              }
            ]
          },
          {
            id: 'pharmacodynamics',
            name: 'Pharmakodynamik',
            description: 'Was das Medikament mit dem Körper macht',
            icon: '🎯',
            difficulty: 'hard',
            parentId: 'pharmacological-foundations',
            children: [
              {
                id: 'receptor-theory',
                name: 'Rezeptortheorie',
                description: 'Wechselwirkung zwischen Arzneistoff und Rezeptor',
                icon: '🔐',
                difficulty: 'hard',
                parentId: 'pharmacodynamics',
                children: [
                  {
                    id: 'agonists-antagonists',
                    name: 'Agonisten/Antagonisten',
                    description: 'Aktivierende und blockierende Substanzen',
                    icon: '⚖️',
                    difficulty: 'medium',
                    parentId: 'receptor-theory'
                  },
                  {
                    id: 'partial-agonists',
                    name: 'Partialagonisten',
                    description: 'Teilweise aktivierende Substanzen',
                    icon: '🔀',
                    difficulty: 'hard',
                    parentId: 'receptor-theory'
                  },
                  {
                    id: 'inverse-agonists',
                    name: 'Inverse Agonisten',
                    description: 'Entgegengesetzt wirkende Substanzen',
                    icon: '🔄',
                    difficulty: 'hard',
                    parentId: 'receptor-theory'
                  },
                  {
                    id: 'allosteric-modulation',
                    name: 'Allosterische Modulation',
                    description: 'Indirekte Rezeptorbeeinflussung',
                    icon: '🔧',
                    difficulty: 'hard',
                    parentId: 'receptor-theory'
                  }
                ]
              },
              {
                id: 'dose-response-relationship',
                name: 'Dosis-Wirkungs-Beziehung',
                description: 'Zusammenhang zwischen Dosis und Wirkung',
                icon: '📈',
                difficulty: 'medium',
                parentId: 'pharmacodynamics',
                children: [
                  {
                    id: 'ec50-ed50',
                    name: 'EC50/ED50',
                    description: 'Halbmaximale Wirkkonzentration/-dosis',
                    icon: '🎯',
                    difficulty: 'hard',
                    parentId: 'dose-response-relationship'
                  },
                  {
                    id: 'therapeutic-window',
                    name: 'Therapeutische Breite',
                    description: 'Bereich zwischen wirksamer und toxischer Dosis',
                    icon: '🪟',
                    difficulty: 'medium',
                    parentId: 'dose-response-relationship'
                  },
                  {
                    id: 'tolerance-development',
                    name: 'Toleranzentwicklung',
                    description: 'Abnahme der Wirkung bei wiederholter Gabe',
                    icon: '📉',
                    difficulty: 'medium',
                    parentId: 'dose-response-relationship'
                  },
                  {
                    id: 'tachyphylaxis',
                    name: 'Tachyphylaxie',
                    description: 'Schnelle Toleranzentwicklung',
                    icon: '⚡',
                    difficulty: 'hard',
                    parentId: 'dose-response-relationship'
                  }
                ]
              },
              {
                id: 'mechanisms-of-action',
                name: 'Wirkmechanismen',
                description: 'Verschiedene Arten der Arzneimittelwirkung',
                icon: '⚙️',
                difficulty: 'medium',
                parentId: 'pharmacodynamics',
                children: [
                  {
                    id: 'receptor-mediated',
                    name: 'Rezeptor-vermittelt',
                    description: 'Wirkung über spezifische Rezeptoren',
                    icon: '🔐',
                    difficulty: 'easy',
                    parentId: 'mechanisms-of-action'
                  },
                  {
                    id: 'enzyme-inhibition',
                    name: 'Enzymhemmung',
                    description: 'Blockierung enzymatischer Prozesse',
                    icon: '🚫',
                    difficulty: 'easy',
                    parentId: 'mechanisms-of-action'
                  },
                  {
                    id: 'ion-channel-modulation',
                    name: 'Ionenkanal-Modulation',
                    description: 'Beeinflussung von Ionenkanälen',
                    icon: '⚡',
                    difficulty: 'medium',
                    parentId: 'mechanisms-of-action'
                  },
                  {
                    id: 'physicochemical',
                    name: 'Physikalisch-chemisch',
                    description: 'Nicht-spezifische physikalische Wirkungen',
                    icon: '🧪',
                    difficulty: 'easy',
                    parentId: 'mechanisms-of-action'
                  }
                ]
              }
            ]
          },
          {
            id: 'drug-interactions',
            name: 'Arzneimittelinteraktionen',
            description: 'Wechselwirkungen zwischen Medikamenten',
            icon: '🔗',
            difficulty: 'hard',
            parentId: 'pharmacological-foundations',
            children: [
              {
                id: 'pharmacokinetic-interactions',
                name: 'Pharmakokinetische Interaktionen',
                description: 'Wechselwirkungen auf ADME-Ebene',
                icon: '🔄',
                difficulty: 'hard',
                parentId: 'drug-interactions',
                children: [
                  {
                    id: 'absorption-interactions',
                    name: 'Resorption (Chelatkomplexe)',
                    description: 'Beeinträchtigung der Arzneistoffaufnahme',
                    icon: '🔗',
                    difficulty: 'medium',
                    parentId: 'pharmacokinetic-interactions'
                  },
                  {
                    id: 'distribution-interactions',
                    name: 'Verteilung (Proteinbindung)',
                    description: 'Verdrängung aus der Proteinbindung',
                    icon: '🥊',
                    difficulty: 'hard',
                    parentId: 'pharmacokinetic-interactions'
                  },
                  {
                    id: 'metabolism-interactions',
                    name: 'Metabolismus (CYP-Interaktionen)',
                    description: 'Enzyminduktion und -inhibition',
                    icon: '⚛️',
                    difficulty: 'hard',
                    parentId: 'pharmacokinetic-interactions'
                  },
                  {
                    id: 'elimination-interactions',
                    name: 'Elimination (Transporter)',
                    description: 'Wechselwirkungen bei der Ausscheidung',
                    icon: '🚛',
                    difficulty: 'hard',
                    parentId: 'pharmacokinetic-interactions'
                  }
                ]
              },
              {
                id: 'pharmacodynamic-interactions',
                name: 'Pharmakodynamische Interaktionen',
                description: 'Wechselwirkungen auf Wirkungsebene',
                icon: '🎯',
                difficulty: 'medium',
                parentId: 'drug-interactions',
                children: [
                  {
                    id: 'synergism',
                    name: 'Synergismus',
                    description: 'Verstärkung der Wirkung',
                    icon: '⬆️',
                    difficulty: 'easy',
                    parentId: 'pharmacodynamic-interactions'
                  },
                  {
                    id: 'antagonism',
                    name: 'Antagonismus',
                    description: 'Abschwächung der Wirkung',
                    icon: '⬇️',
                    difficulty: 'easy',
                    parentId: 'pharmacodynamic-interactions'
                  },
                  {
                    id: 'potentiation',
                    name: 'Potenzierung',
                    description: 'Überproportionale Wirkungsverstärkung',
                    icon: '🚀',
                    difficulty: 'medium',
                    parentId: 'pharmacodynamic-interactions'
                  },
                  {
                    id: 'functional-antagonism',
                    name: 'Funktioneller Antagonismus',
                    description: 'Entgegengesetzte physiologische Wirkungen',
                    icon: '⚖️',
                    difficulty: 'medium',
                    parentId: 'pharmacodynamic-interactions'
                  }
                ]
              },
              {
                id: 'important-interactions',
                name: 'Wichtige Interaktionen',
                description: 'Klinisch relevante Arzneimittelwechselwirkungen',
                icon: '⚠️',
                difficulty: 'hard',
                parentId: 'drug-interactions',
                children: [
                  {
                    id: 'warfarin-interactions',
                    name: 'Warfarin-Interaktionen',
                    description: 'Wechselwirkungen mit Antikoagulanzien',
                    icon: '🩸',
                    difficulty: 'hard',
                    parentId: 'important-interactions'
                  },
                  {
                    id: 'ssri-interactions',
                    name: 'SSRI-Interaktionen',
                    description: 'Wechselwirkungen mit Antidepressiva',
                    icon: '🧠',
                    difficulty: 'hard',
                    parentId: 'important-interactions'
                  },
                  {
                    id: 'statins-cyp3a4',
                    name: 'Statine & CYP3A4',
                    description: 'Cholesterinsenker und Cytochrom P450',
                    icon: '💊',
                    difficulty: 'hard',
                    parentId: 'important-interactions'
                  },
                  {
                    id: 'qt-prolongation',
                    name: 'QT-Zeit-Verlängerung',
                    description: 'Kardiale Rhythmusstörungen',
                    icon: '💓',
                    difficulty: 'hard',
                    parentId: 'important-interactions'
                  }
                ]
              }
            ]
          },
          {
            id: 'drug-safety',
            name: 'Arzneimittelsicherheit',
            description: 'Sicherheit in der Arzneimitteltherapie',
            icon: '🛡️',
            difficulty: 'hard',
            parentId: 'pharmacological-foundations',
            children: [
              {
                id: 'adverse-effects',
                name: 'Nebenwirkungen',
                description: 'Unerwünschte Arzneimittelwirkungen',
                icon: '⚠️',
                difficulty: 'medium',
                parentId: 'drug-safety',
                children: [
                  {
                    id: 'type-a-adverse-effects',
                    name: 'Typ A (dosisabhängig)',
                    description: 'Vorhersagbare, dosisabhängige Nebenwirkungen',
                    icon: '📊',
                    difficulty: 'easy',
                    parentId: 'adverse-effects'
                  },
                  {
                    id: 'type-b-adverse-effects',
                    name: 'Typ B (idiosynkratisch)',
                    description: 'Unvorhersagbare, dosisunabhängige Reaktionen',
                    icon: '❓',
                    difficulty: 'medium',
                    parentId: 'adverse-effects'
                  },
                  {
                    id: 'adr-reporting',
                    name: 'UAW-Meldung',
                    description: 'Meldung unerwünschter Arzneimittelwirkungen',
                    icon: '📝',
                    difficulty: 'easy',
                    parentId: 'adverse-effects'
                  },
                  {
                    id: 'red-hand-letters',
                    name: 'Rote-Hand-Briefe',
                    description: 'Wichtige Sicherheitsinformationen',
                    icon: '🔴',
                    difficulty: 'easy',
                    parentId: 'adverse-effects'
                  }
                ]
              },
              {
                id: 'contraindications',
                name: 'Kontraindikationen',
                description: 'Gegenanzeigen für Arzneimittel',
                icon: '🚫',
                difficulty: 'medium',
                parentId: 'drug-safety',
                children: [
                  {
                    id: 'absolute-contraindications',
                    name: 'Absolute KI',
                    description: 'Strikte Gegenanzeigen',
                    icon: '🛑',
                    difficulty: 'easy',
                    parentId: 'contraindications'
                  },
                  {
                    id: 'relative-contraindications',
                    name: 'Relative KI',
                    description: 'Relative Gegenanzeigen',
                    icon: '⚠️',
                    difficulty: 'easy',
                    parentId: 'contraindications'
                  },
                  {
                    id: 'precautions',
                    name: 'Vorsichtsmaßnahmen',
                    description: 'Besondere Überwachung erforderlich',
                    icon: '👁️',
                    difficulty: 'easy',
                    parentId: 'contraindications'
                  }
                ]
              },
              {
                id: 'special-populations',
                name: 'Besondere Patientengruppen',
                description: 'Spezielle Überlegungen bei besonderen Patienten',
                icon: '👥',
                difficulty: 'hard',
                parentId: 'drug-safety',
                children: [
                  {
                    id: 'pregnancy-lactation',
                    name: 'Schwangerschaft & Stillzeit',
                    description: 'Arzneimitteltherapie in Schwangerschaft und Stillzeit',
                    icon: '🤱',
                    difficulty: 'hard',
                    parentId: 'special-populations'
                  },
                  {
                    id: 'pediatric-patients',
                    name: 'Kinder & Jugendliche',
                    description: 'Pädiatrische Pharmakotherapie',
                    icon: '🧒',
                    difficulty: 'hard',
                    parentId: 'special-populations'
                  },
                  {
                    id: 'geriatric-patients',
                    name: 'Geriatrische Patienten',
                    description: 'Arzneimitteltherapie im Alter',
                    icon: '🧓',
                    difficulty: 'hard',
                    parentId: 'special-populations'
                  },
                  {
                    id: 'organ-insufficiency',
                    name: 'Nieren-/Leberinsuffizienz',
                    description: 'Dosisanpassung bei Organinsuffizienz',
                    icon: '🫘',
                    difficulty: 'hard',
                    parentId: 'special-populations'
                  }
                ]
              },
              {
                id: 'medication-errors',
                name: 'Medikationsfehler',
                description: 'Vermeidung und Management von Arzneimittelfehlern',
                icon: '❌',
                difficulty: 'medium',
                parentId: 'drug-safety',
                children: [
                  {
                    id: 'prevention-strategies',
                    name: 'Präventionsstrategien',
                    description: 'Maßnahmen zur Fehlervermeidung',
                    icon: '🛡️',
                    difficulty: 'medium',
                    parentId: 'medication-errors'
                  },
                  {
                    id: 'double-check',
                    name: 'Doppelkontrolle',
                    description: 'Vier-Augen-Prinzip bei kritischen Medikamenten',
                    icon: '👀',
                    difficulty: 'easy',
                    parentId: 'medication-errors'
                  },
                  {
                    id: 'five-rights',
                    name: '5-R-Regel',
                    description: 'Richtiger Patient, Medikament, Dosis, Zeit, Weg',
                    icon: '✋',
                    difficulty: 'easy',
                    parentId: 'medication-errors'
                  },
                  {
                    id: 'cirs-reporting',
                    name: 'CIRS-Meldungen',
                    description: 'Critical Incident Reporting System',
                    icon: '📊',
                    difficulty: 'easy',
                    parentId: 'medication-errors'
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

export default pharmacologyCategories