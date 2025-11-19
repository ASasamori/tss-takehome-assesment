import { useState, useEffect } from 'react'

export const ForecastAccuracyDemo = () => {
  const [accuracy, setAccuracy] = useState(70)
  const [days, setDays] = useState(90)

  // Calculate accuracy based on days of data
  useEffect(() => {
    const calculatedAccuracy = Math.min(95, 70 + (days / 180) * 25)
    setAccuracy(Math.round(calculatedAccuracy))
  }, [days])

  return (
    <div className="not-prose p-6 rounded-2xl border-2 border-emerald-500/20 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20">
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
        🤖 AI Forecast Accuracy Calculator
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Historical Data: {days} days
          </label>
          <input
            type="range"
            min="30"
            max="365"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer dark:bg-emerald-800"
          />
        </div>

        <div className="mt-6 p-6 rounded-xl bg-white dark:bg-zinc-900 shadow-lg">
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
              {accuracy}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Predicted Accuracy
            </div>
          </div>
          
          <div className="mt-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-500 ease-out"
              style={{ width: `${accuracy}%` }}
            />
          </div>

          <div className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
            {days < 90 ? "📈 Add more historical data to improve accuracy" : 
             days < 180 ? "✨ Great! Accuracy is improving" : 
             "🎯 Maximum accuracy achieved!"}
          </div>
        </div>
      </div>
    </div>
  )
}

export const LiveMetricsCounter = () => {
  const [batches, setBatches] = useState(0)
  const [quality, setQuality] = useState(0)
  const [savings, setSavings] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBatches(prev => (prev < 150 ? prev + 5 : 150))
      setQuality(prev => (prev < 95 ? prev + 3 : 95))
      setSavings(prev => (prev < 50000 ? prev + 1500 : 50000))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="not-prose my-8">
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-number">{batches}</div>
          <div className="stat-label">Batches Tracked Today</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{quality}%</div>
          <div className="stat-label">Average Quality Score</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">${savings.toLocaleString()}</div>
          <div className="stat-label">Monthly Savings</div>
        </div>
      </div>
    </div>
  )
}

