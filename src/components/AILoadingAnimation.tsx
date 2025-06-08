import { motion } from 'framer-motion'

interface AILoadingAnimationProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

const AILoadingAnimation = ({ 
  message = "KI generiert Ihre Inhalte...", 
  size = 'md' 
}: AILoadingAnimationProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Ultra-clean minimal loader */}
      <div className="relative mb-8">
        {/* Simple rotating circle */}
        <motion.div
          className="w-8 h-8 border-2 border-gray-200 rounded-full"
          style={{ borderTopColor: '#374151' }}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity,
            ease: "linear"
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