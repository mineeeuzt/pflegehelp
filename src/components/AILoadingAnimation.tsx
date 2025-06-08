import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

interface AILoadingAnimationProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

const AILoadingAnimation = ({ 
  message = "KI generiert Ihre Inhalte...", 
  size = 'md' 
}: AILoadingAnimationProps) => {
  const logoSize = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const iconSize = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6', 
    lg: 'h-8 w-8'
  }

  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Logo-based loader */}
      <div className="relative mb-8">
        {/* Rotating Plus Logo */}
        <motion.div
          className={`${logoSize[size]} border border-gray-300 rounded-lg flex items-center justify-center bg-white`}
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: {
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            },
            scale: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Plus className={`${iconSize[size]} text-gray-600`} strokeWidth={1.5} />
        </motion.div>

        {/* Subtle pulsing ring */}
        <motion.div
          className={`absolute inset-0 ${logoSize[size]} border border-gray-200 rounded-lg`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </div>

      {/* Clean text */}
      <div className="text-center">
        <p className="text-gray-600 font-light mb-3">
          {message}
        </p>
        
        {/* Minimal typing dots */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              animate={{ 
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AILoadingAnimation