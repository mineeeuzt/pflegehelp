import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, BookOpen, Target, FileText, CheckCircle, ArrowRight } from 'lucide-react'
import { Button, Card, CardContent } from '../components/ui'
import { APP_CONFIG } from '../lib/stripe'

const LandingPage = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Fallbeispiel Generator',
      description: 'Erstelle prüfungsrelevante Fallbeispiele nach Pflegepädagogik-Standards für alle Ausbildungsjahre.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Pflegeplanung Workflow',
      description: 'Systematische Erstellung von NANDA-I konformen Pflegeplänen mit SMART-Zielen und Evaluationskriterien.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Medikamenten-Training',
      description: 'Interaktives Drag & Drop Spiel mit KI-generierten Szenarien für über 24 verschiedene Medikamente.'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'PESR-Diagnosen & SMART-Ziele',
      description: 'Professionelle Pflegediagnosen und präzise Pflegeziele für die generalistische Pflegeausbildung.'
    }
  ]

  const benefits = [
    'KI-generierte Fallbeispiele',
    'NANDA-I konforme Pflegepläne',
    'Interaktives Medikamenten-Training',
    'PESR-Diagnosen & SMART-Ziele',
    'Mobile Nutzung',
    'Regelmäßige Updates'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl text-gray-900 mb-6"
              style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 300 }}
            >
              Dein intelligenter Lernassistent für die Pflege
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 font-light mb-8 max-w-3xl mx-auto"
            >
              Trainiere mit KI-generierten Fallbeispielen, erstelle NANDA-I konforme Pflegepläne und übe Medikamenten-Szenarien mit unserem interaktiven Drag & Drop Spiel.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white">
                  {APP_CONFIG.trialDays} Tage kostenlos testen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Anmelden
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Professionelle Lerntools für die Pflege
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Nutze interaktive KI-Tools für praxisnahe Fallbeispiele, professionelle Pflegeplanung und spielerisches Medikamenten-Training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-gray-300 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-gray-700 mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Warum PflegeHelp?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-gray-700 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <img 
                src="/peaceful-ghost.png" 
                alt="PflegeHelp Illustration" 
                className="h-64 w-64 mx-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Einfache, transparente Preise
            </h2>
            <p className="text-xl text-gray-600">
              Starten Sie mit einer {APP_CONFIG.trialDays}-tägigen kostenlosen Testphase
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Monatlich</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">€{APP_CONFIG.monthlyPrice}</span>
                    <span className="text-gray-600">/Monat</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-gray-700 mr-2" />
                      Alle KI-Features
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-gray-700 mr-2" />
                      Unbegrenzte Nutzung
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-gray-700 mr-2" />
                      {APP_CONFIG.trialDays} Tage kostenlos
                    </li>
                  </ul>
                  <Link to="/register">
                    <Button className="w-full">
                      Kostenlos testen
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-2 border-gray-900 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Beliebt
                  </span>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Jährlich</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">€{APP_CONFIG.yearlyPrice}</span>
                    <span className="text-gray-600">/Jahr</span>
                    <div className="text-sm text-primary-600 font-medium">
                      2 Monate kostenlos
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-gray-700 mr-2" />
                      Alle KI-Features
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-gray-700 mr-2" />
                      Unbegrenzte Nutzung
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-gray-700 mr-2" />
                      {APP_CONFIG.trialDays} Tage kostenlos
                    </li>
                  </ul>
                  <Link to="/register">
                    <Button className="w-full">
                      Kostenlos testen
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit, Ihre Pflegeausbildung zu revolutionieren?
          </h2>
          <p className="text-xl text-gray-300 font-light mb-8 max-w-2xl mx-auto">
            Starten Sie noch heute mit Ihrer {APP_CONFIG.trialDays}-tägigen kostenlosen Testphase und entdecken Sie die Zukunft der Pflegeausbildung.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
              Jetzt kostenlos starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LandingPage