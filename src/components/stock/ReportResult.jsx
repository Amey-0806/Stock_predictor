import { useState, useEffect } from 'react'
import './ReportResult.css'

function ReportResult({ tickers, isGenerating, onReportGenerated }) {
  const [reportData, setReportData] = useState(null)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    if (isGenerating) {
      setReportData(null)
      setLoadingProgress(0)
      
      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            generateReportData()
            return 100
          }
          return prev + Math.random() * 15 + 5 // Random progress increment
        })
      }, 200)

      return () => clearInterval(progressInterval)
    }
  }, [isGenerating])

  const generateReportData = () => {
    // Generate mock report data
    const predictions = tickers.map(ticker => ({
      symbol: ticker,
      currentPrice: (Math.random() * 500 + 50).toFixed(2),
      prediction: Math.random() > 0.5 ? 'UP' : 'DOWN',
      confidence: (Math.random() * 40 + 60).toFixed(1), // 60-100%
      targetPrice: (Math.random() * 600 + 40).toFixed(2),
      timeframe: ['1 week', '2 weeks', '1 month'][Math.floor(Math.random() * 3)]
    }))

    setTimeout(() => {
      setReportData({
        predictions,
        generatedAt: new Date().toLocaleString(),
        accuracy: '15%',
        disclaimer: 'Past performance does not guarantee future results'
      })
      onReportGenerated()
    }, 500)
  }

  if (!isGenerating && !reportData) {
    return null
  }

  return (
    <div className="report-result">
      {isGenerating && !reportData && (
        <div className="loading-section">
          <div className="loading-header">
            <h3>🔮 Generating Predictions...</h3>
            <p>Consulting the crystal ball and reading tea leaves...</p>
          </div>
          
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          
          <p className="progress-text">{Math.round(loadingProgress)}% Complete</p>
          
          <div className="loading-messages">
            {loadingProgress > 20 && <p>📊 Analyzing market trends...</p>}
            {loadingProgress > 40 && <p>🎯 Calculating price targets...</p>}
            {loadingProgress > 60 && <p>🤔 Making wild guesses...</p>}
            {loadingProgress > 80 && <p>✨ Adding magic sprinkles...</p>}
          </div>
        </div>
      )}

      {reportData && (
        <div className="report-content">
          <div className="report-header">
            <h3>📈 Stock Predictions Report</h3>
            <p className="generated-time">Generated: {reportData.generatedAt}</p>
          </div>

          <div className="predictions-grid">
            {reportData.predictions.map((prediction, index) => (
              <div key={index} className="prediction-card">
                <div className="ticker-header">
                  <h4>{prediction.symbol}</h4>
                  <span className={`prediction-badge ${prediction.prediction.toLowerCase()}`}>
                    {prediction.prediction === 'UP' ? '📈' : '📉'} {prediction.prediction}
                  </span>
                </div>
                
                <div className="prediction-details">
                  <div className="price-info">
                    <span className="label">Current Price:</span>
                    <span className="value">${prediction.currentPrice}</span>
                  </div>
                  
                  <div className="price-info">
                    <span className="label">Target Price:</span>
                    <span className="value">${prediction.targetPrice}</span>
                  </div>
                  
                  <div className="price-info">
                    <span className="label">Timeframe:</span>
                    <span className="value">{prediction.timeframe}</span>
                  </div>
                  
                  <div className="confidence-bar">
                    <span className="label">Confidence:</span>
                    <div className="confidence-container">
                      <div className="confidence-fill" style={{ width: `${prediction.confidence}%` }}></div>
                      <span className="confidence-text">{prediction.confidence}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="report-footer">
            <div className="accuracy-disclaimer">
              <p><strong>Historical Accuracy: {reportData.accuracy}</strong></p>
              <p className="disclaimer">{reportData.disclaimer}</p>
              <p className="warning">⚠️ This is completely made up data for entertainment purposes!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReportResult