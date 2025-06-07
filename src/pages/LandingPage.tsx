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
      description: 'Erstelle realistische Fallbeispiele für verschiedene Pflegebereiche mit KI-Unterstützung.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Pflegeplanung Workflow',
      description: 'Systematische Erstellung von Pflegeplänen nach NANDA-I Klassifikation.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'SMART-Ziel Assistent',
      description: 'Formuliere präzise Pflegeziele nach SMART-Kriterien.'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'PESR Generator',
      description: 'Erstelle strukturierte PESR-Pflegediagnosen professionell.'
    }
  ]

  const benefits = [
    'KI-gestützte Lernhilfen',
    'Fachlich korrekte Inhalte',
    'Interaktive Workflows',
    'Sofortiges Feedback',
    'Mobile Nutzung',
    'Regelmäßige Updates'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              KI-gestützte{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Pflegeausbildung
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Verbessern Sie Ihre Pflegefähigkeiten mit modernster KI-Technologie. 
              Erstellen Sie Fallbeispiele, entwickeln Sie Pflegepläne und perfektionieren Sie Ihre Dokumentation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professionelle Lerntools für die Pflege
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nutzen Sie KI-gestützte Tools, um Ihre Pflegekompetenzen zu erweitern und praxisnahe Fälle zu bearbeiten.
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
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary-500 mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
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
                    <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
              <Card className="h-full border-2 border-primary-200">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Monatlich</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">€{APP_CONFIG.monthlyPrice}</span>
                    <span className="text-gray-600">/Monat</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                      Alle KI-Features
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                      Unbegrenzte Nutzung
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
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
              <Card className="h-full border-2 border-secondary-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                      Alle KI-Features
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                      Unbegrenzte Nutzung
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
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
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit, Ihre Pflegeausbildung zu revolutionieren?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Starten Sie noch heute mit Ihrer {APP_CONFIG.trialDays}-tägigen kostenlosen Testphase und entdecken Sie die Zukunft der Pflegeausbildung.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
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