import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Lightbulb, Quote, ThumbsUp, Edit3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui'

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
      {/* Overall Score */}
      <Card className="border-2 border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Gesamtbewertung</span>
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${getScoreColor(overallScore)}`}>
              {getScoreIcon(overallScore)}
              <span className="font-bold">{overallScore}%</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{generalFeedback}</p>
        </CardContent>
      </Card>

      {/* Section Reviews */}
      {reviewData.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-2 border-gray-200 hover:border-gray-300 transition-all">
            <CardHeader 
              className="cursor-pointer"
              onClick={() => setExpandedSection(expandedSection === index ? null : index)}
            >
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{section.title}</span>
                <div className={`flex items-center space-x-2 px-3 py-1 rounded-lg border ${getScoreColor(section.score)}`}>
                  {getScoreIcon(section.score)}
                  <span className="font-bold text-sm">{section.score}%</span>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* User Text Quote */}
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <div className="flex items-start space-x-2">
                  <Quote className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Ihr Text:</p>
                    <p className="text-gray-800 italic leading-relaxed">{section.userText}</p>
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">{section.feedback}</p>
              </div>

              {/* Expandable Details */}
              {expandedSection === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 border-t border-gray-200 pt-4"
                >
                  {/* Positives */}
                  {section.positives.length > 0 && (
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <ThumbsUp className="h-4 w-4 text-green-600" />
                        <h4 className="font-medium text-green-800">Das war gut:</h4>
                      </div>
                      <ul className="space-y-1">
                        {section.positives.map((positive, idx) => (
                          <li key={idx} className="text-sm text-green-700 flex items-start space-x-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{positive}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Improvements */}
                  {section.improvements.length > 0 && (
                    <div className="bg-gray-50 border border-gray-300 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <Lightbulb className="h-4 w-4 text-gray-700" />
                        <h4 className="font-medium text-gray-800">Verbesserungsvorschläge:</h4>
                      </div>
                      <ul className="space-y-2">
                        {section.improvements.map((improvement, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start space-x-2">
                            <Edit3 className="h-3 w-3 text-gray-600 mt-1 flex-shrink-0" />
                            <span>{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}
              
              <div className="text-xs text-gray-500 text-center">
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