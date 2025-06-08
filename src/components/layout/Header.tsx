import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Search, Bell, Menu, ChevronRight } from 'lucide-react'
import { Button, Input } from '../ui'

interface HeaderProps {
  onMenuToggle: () => void
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [notifications] = useState(3) // Mock notification count

  // Generate breadcrumbs based on current route
  const generateBreadcrumbs = () => {
    const path = location.pathname
    const segments = path.split('/').filter(segment => segment !== '')
    
    const breadcrumbMap: Record<string, string> = {
      'quiz-home': 'Home',
      'quiz-lernkarten': 'Quiz & Lernkarten',
      'flashcards': 'Lernkarten',
      'progress': 'Fortschritt',
      'export': 'Export',
      'profile': 'Profil',
      'dashboard': 'Dashboard'
    }

    const breadcrumbs = [
      { label: 'PflegeQuiz', href: '/quiz-home', active: false }
    ]

    segments.forEach((segment, index) => {
      const label = breadcrumbMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
      const href = '/' + segments.slice(0, index + 1).join('/')
      const active = index === segments.length - 1
      
      breadcrumbs.push({ label, href, active })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side: Mobile menu + Breadcrumbs */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="lg:hidden p-2"
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* Breadcrumbs */}
          <nav className="hidden md:flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {crumb.active ? (
                  <span className="text-gray-900 font-medium">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.href}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile page title */}
          <div className="md:hidden">
            <h1 className="text-lg font-semibold text-gray-900">
              {breadcrumbs[breadcrumbs.length - 1]?.label}
            </h1>
          </div>
        </div>

        {/* Right side: Search + Notifications */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="hidden sm:block relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Themen suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500"
              />
            </div>
          </form>

          {/* Notifications */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="p-2 relative"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications > 9 ? '9+' : notifications}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile search button */}
          <Button
            variant="ghost"
            size="sm"
            className="sm:hidden p-2"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </div>

      {/* Mobile search bar (expandable) */}
      <div className="sm:hidden mt-4">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Themen suchen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500"
          />
        </form>
      </div>
    </header>
  )
}

export default Header