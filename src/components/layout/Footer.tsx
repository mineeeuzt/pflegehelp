import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-7 h-7 border border-gray-300 rounded-lg flex items-center justify-center">
                <Plus className="h-4 w-4 text-gray-600" strokeWidth={1.5} />
              </div>
              <span className="text-xl font-light text-gray-900">
                PflegeHelp
              </span>
            </div>
            <p className="text-gray-600 max-w-md">
              KI-gestützte Lernplattform für Pflegeausbildung. Verbessern Sie Ihre Pflegefähigkeiten mit modernster Technologie.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Produkt
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fallbeispiel-generator" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Fallbeispiele
                </Link>
              </li>
              <li>
                <Link to="/pflegeplanung" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Pflegeplanung
                </Link>
              </li>
              <li>
                <Link to="/anamnese-simulator" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Anamnese-Simulator
                </Link>
              </li>
              <li>
                <Link to="/smart-ziel" className="text-gray-600 hover:text-gray-900 transition-colors">
                  SMART-Ziele
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@pflegehelp.de" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Hilfe-Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2024 PflegeHelp. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }