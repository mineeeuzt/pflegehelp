import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Brain, 
  BookOpen, 
  TrendingUp, 
  Download, 
  User,
  Menu,
  X,
  LogOut,
  Settings
} from 'lucide-react'
import { Button } from '../ui'
import { useAuthStore } from '../../store/authStore'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const location = useLocation()
  const { user, signOut } = useAuthStore()

  const navigationItems = [
    {
      label: 'Home',
      href: '/quiz-home',
      icon: Home,
      active: location.pathname === '/quiz-home'
    },
    {
      label: 'Quiz',
      href: '/quiz-lernkarten',
      icon: Brain,
      active: location.pathname === '/quiz-lernkarten'
    },
    {
      label: 'Lernkarten',
      href: '/flashcards',
      icon: BookOpen,
      active: location.pathname === '/flashcards'
    },
    {
      label: 'Fortschritt',
      href: '/progress',
      icon: TrendingUp,
      active: location.pathname === '/progress'
    },
    {
      label: 'Export',
      href: '/export',
      icon: Download,
      active: location.pathname === '/export'
    }
  ]

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <Link to="/quiz-home" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-xl">🧠</span>
          </div>
          <div className="text-xl font-bold text-gray-900">PflegeQuiz</div>
        </Link>
        
        {/* Mobile close button */}
        <button
          onClick={onToggle}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => {
                // Close mobile sidebar on navigation
                if (window.innerWidth < 1024) {
                  onToggle()
                }
              }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                item.active
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${item.active ? 'text-blue-700' : 'text-gray-400'}`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">
              {user?.email?.split('@')[0] || 'User'}
            </div>
            <div className="text-xs text-gray-500">
              {user?.subscription_status === 'active' ? 'Premium' : 'Trial'}
            </div>
          </div>
        </div>
        
        <div className="mt-3 space-y-1">
          <Link
            to="/profile"
            className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <Settings className="w-4 h-4" />
            <span>Einstellungen</span>
          </Link>
          <button
            onClick={signOut}
            className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100 w-full text-left"
          >
            <LogOut className="w-4 h-4" />
            <span>Abmelden</span>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-64 z-50">
        {sidebarContent}
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
              className="lg:hidden fixed inset-0 bg-gray-600 bg-opacity-75 z-40"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 left-0 w-80 z-50"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar