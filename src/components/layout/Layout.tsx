import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple Header for old layout */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center bg-white">
              <span className="text-xl text-gray-600">+</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">PflegeHelp</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
            <a href="/quiz-home" className="text-blue-600 hover:text-blue-700 font-medium">Quiz & Lernkarten</a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export { Layout }