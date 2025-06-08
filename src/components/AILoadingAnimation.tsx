import { motion } from 'framer-motion'
import { Brain, Zap, Plus } from 'lucide-react'

interface AILoadingAnimationProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

const AILoadingAnimation = ({ 
  message = "KI generiert Ihre Inhalte...", 
  size = 'md' 
}: AILoadingAnimationProps) => {
  const sizeClasses = {
    sm: 'h-16 w-16',
    md: 'h-24 w-24', 
    lg: 'h-32 w-32'
  }

  const dotSize = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4'
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Main Animation Container */}
      <div className="relative mb-6">
        {/* Central Brain Icon */}
        <motion.div
          className={`${sizeClasses[size]} bg-gray-900 rounded-2xl flex items-center justify-center relative`}
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Brain className="h-8 w-8 text-white" />
          
          {/* Pulsing Ring */}
          <motion.div
            className="absolute inset-0 border-2 border-gray-400 rounded-2xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>

        {/* Orbiting Elements */}
        {[0, 120, 240].map((rotation, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear",
              delay: index * 0.5
            }}
            style={{ transformOrigin: 'center' }}
          >
            <div 
              className={`absolute ${dotSize[size]} bg-gray-600 rounded-full`}
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) translateY(-${size === 'lg' ? '60px' : size === 'md' ? '45px' : '30px'})`,
              }}
            />
          </motion.div>
        ))}

        {/* Corner Plus Icons */}
        {[-45, 45, 135, 225].map((angle, index) => (
          <motion.div
            key={`plus-${index}`}
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${size === 'lg' ? '80px' : size === 'md' ? '60px' : '40px'})`,
            }}
            animate={{ 
              scale: [0.5, 1, 0.5],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          >
            <Plus className="h-3 w-3 text-gray-500" />
          </motion.div>
        ))}

        {/* Lightning Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 0.3, 
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        >
          <Zap className="h-4 w-4 text-gray-700" />
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {message}
        </h3>
        
        {/* Typing Dots */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <p className="text-sm text-gray-500 mt-3 max-w-xs">
          Dies kann einen Moment dauern
        </p>
      </motion.div>
    </div>
  )
}

export default AILoadingAnimation