import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Lightbulb, Quote, ThumbsUp, Edit3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui'

// Simple SVG Circle Chart Component
const CircleChart = ({ score, size = 120 }: { score: number; size?: number }) => {
  const radius = (size - 20) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (score / 100) * circumference
  
  const getColor = (score: number) => {
    if (score >= 80) return '#475569' // slate-600 (dezent)
    if (score >= 60) return '#64748b' // slate-500 (dezent)
    return '#94a3b8' // slate-400 (dezent)
  }
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f3f4f6"
          strokeWidth="8"
          fill="transparent"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(score)}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      {/* Score text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">{score}%</span>
      </div>
    </div>
  )
}

interface ReviewSection {
  title: string
  userText: string
  score: number
  feedback: string
  improvements: string[]
  positives: string[]
}

interface ReviewDisplayProps {
  reviewData: ReviewSection[]
  overallScore: number
  generalFeedback: string
}

const ReviewDisplay = ({ reviewData, overallScore, generalFeedback }: ReviewDisplayProps) => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null)
  
  // Ensure we have valid data
  const safeReviewData = Array.isArray(reviewData) ? reviewData : []
  const safeOverallScore = typeof overallScore === 'number' ? overallScore : 0
  
  // Enhanced feedback cleaning function
  const cleanFeedbackText = (rawFeedback: string | undefined): string => {
    if (!rawFeedback || typeof rawFeedback !== 'string') {
      return 'Bewertung wurde erfolgreich durchgeführt.'
    }

    // Check if feedback contains JSON-like structures
    const hasJsonMarkers = rawFeedback.includes('{') && rawFeedback.includes('}')
    const hasJsonFields = rawFeedback.includes('"') && (
      rawFeedback.includes('"overallScore"') || 
      rawFeedback.includes('"sections"') ||
      rawFeedback.includes('"feedback"') ||
      rawFeedback.includes('"bewertung"')
    )

    if (!hasJsonMarkers && !hasJsonFields) {
      return rawFeedback.trim()
    }

    console.warn('Detected structured data in feedback, extracting readable text...')

    // Extraction strategies
    const strategies = [
      // Extract from quoted feedback field
      () => {
        const patterns = [
          /"(?:generalFeedback|bewertungBegruendung|feedback)"\s*:\s*"([^"]+)"/i,
          /"([^"]*(?:bewertung|feedback|einschätzung)[^"]*?)"/i
        ]
        for (const pattern of patterns) {
          const match = rawFeedback.match(pattern)
          if (match?.[1]?.length > 10) return match[1]
        }
        return null
      },
      
      // Extract text before JSON structure
      () => {
        const jsonStart = rawFeedback.indexOf('{')
        if (jsonStart > 5) {
          const beforeJson = rawFeedback.substring(0, jsonStart).trim()
          if (beforeJson.length > 10 && !beforeJson.includes('"')) {
            return beforeJson
          }
        }
        return null
      },
      
      // Extract meaningful sentences
      () => {
        const sentences = rawFeedback
          .replace(/\{[^}]*\}/g, '') // Remove JSON blocks
          .split(/[.!?]+/)
          .map(s => s.trim())
          .filter(s => s.length > 15 && !s.includes('"') && !s.includes('{'))
        
        return sentences.length > 0 ? sentences.join('. ') + '.' : null
      }
    ]

    for (const strategy of strategies) {
      try {
        const result = strategy()
        if (result) return result
      } catch (e) {
        continue
      }
    }

    return 'Die Pflegeplanung wurde erfolgreich bewertet. Details finden Sie in den Bewertungsabschnitten unten.'
  }

  const cleanedFeedback = cleanFeedbackText(generalFeedback)

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200'
    if (score >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200'
    return 'text-red-600 bg-red-50 border-red-200'
  }

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-5 w-5 text-green-600" />
    if (score >= 60) return <AlertCircle className="h-5 w-5 text-yellow-600" />
    return <AlertCircle className="h-5 w-5 text-red-600" />
  }

  return (
    <div className="space-y-6">
      {/* Overall Score with Circle Chart */}
      <Card 
        className="border border-gray-200/60 shadow-xl overflow-hidden"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <CardHeader className="border-b border-gray-200/60 bg-gray-50/50">
          <CardTitle className="flex items-center justify-between">
            <span className="text-gray-900 font-medium">Gesamtbewertung</span>
            <div className="flex items-center space-x-4">
              <CircleChart score={safeOverallScore} size={100} />
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl border backdrop-blur-sm ${getScoreColor(safeOverallScore)}`}>
                {getScoreIcon(safeOverallScore)}
                <span className="font-bold">{safeOverallScore}%</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 leading-relaxed font-light">{cleanedFeedback}</p>
        </CardContent>
      </Card>
      
      {/* Section Scores Overview */}
      {safeReviewData.length > 1 && (
        <Card 
          className="border border-gray-200/60 shadow-lg overflow-hidden"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}
        >
          <CardHeader className="border-b border-gray-200/60 bg-gray-50/50">
            <CardTitle className="text-lg text-gray-900 font-medium">Bewertungsübersicht</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {safeReviewData.map((section, index) => (
                <div key={index} className="text-center">
                  <CircleChart score={section.score} size={80} />
                  <p className="text-sm text-gray-600 mt-2 font-medium">{section.title}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Section Reviews */}
      {safeReviewData.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card 
            className="border border-gray-200/60 hover:border-gray-300/60 transition-all shadow-lg overflow-hidden"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            <CardHeader 
              className="cursor-pointer border-b border-gray-200/60 bg-gray-50/50 hover:bg-gray-50/70 transition-colors"
              onClick={() => setExpandedSection(expandedSection === index ? null : index)}
            >
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg text-gray-900 font-medium">{section.title}</span>
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-xl border backdrop-blur-sm ${getScoreColor(section.score)}`}>
                  {getScoreIcon(section.score)}
                  <span className="font-bold text-sm">{section.score}%</span>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4 p-6">
              {/* User Text Quote */}
              <div 
                className="border-l-4 border-gray-400/60 p-4 rounded-r-xl"
                style={{
                  backgroundColor: 'rgba(249, 250, 251, 0.8)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-start space-x-2">
                  <Quote className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1 font-medium">Ihr Text:</p>
                    <p className="text-gray-800 italic leading-relaxed font-light">{section.userText}</p>
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed font-light">{section.feedback}</p>
              </div>

              {/* Expandable Details */}
              {expandedSection === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 border-t border-gray-200/60 pt-4"
                >
                  {/* Positives */}
                  {(section.positives?.length || 0) > 0 && (
                    <div 
                      className="border border-green-200/60 p-4 rounded-xl"
                      style={{
                        backgroundColor: 'rgba(240, 253, 244, 0.8)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                      }}
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <ThumbsUp className="h-4 w-4 text-green-600" />
                        <h4 className="font-medium text-green-800">Das war gut:</h4>
                      </div>
                      <ul className="space-y-1">
                        {(section.positives || []).map((positive, idx) => (
                          <li key={idx} className="text-sm text-green-700 flex items-start space-x-2 font-light">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{positive}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Improvements */}
                  {(section.improvements?.length || 0) > 0 && (
                    <div 
                      className="border border-gray-300/60 p-4 rounded-xl"
                      style={{
                        backgroundColor: 'rgba(249, 250, 251, 0.8)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                      }}
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <Lightbulb className="h-4 w-4 text-gray-700" />
                        <h4 className="font-medium text-gray-800">Verbesserungsvorschläge:</h4>
                      </div>
                      <ul className="space-y-2">
                        {(section.improvements || []).map((improvement, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start space-x-2 font-light">
                            <Edit3 className="h-3 w-3 text-gray-600 mt-1 flex-shrink-0" />
                            <span>{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}
              
              <div className="text-xs text-gray-500 text-center font-light">
                Klicken Sie auf den Titel für Details
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default ReviewDisplay