import { useState } from 'react'
import './styles/App.css'

function App() {
  const [tickers, setTickers] = useState(['TSLA'])
  const [input, setInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [report, setReport] = useState(null)

  const addTicker = () => {
    if (input.trim() && tickers.length < 3 && !tickers.includes(input.toUpperCase())) {
      setTickers([...tickers, input.toUpperCase()])
      setInput('')
    }
  }

  const removeTicker = (index) => {
    setTickers(tickers.filter((_, i) => i !== index))
  }

  const generateReport = () => {
    if (tickers.length === 0) return
    
    setIsGenerating(true)
    setReport(null)
    
    // Simulate API call
    setTimeout(() => {
      const predictions = tickers.map(ticker => ({
        symbol: ticker,
        price: (Math.random() * 500 + 50).toFixed(2),
        prediction: Math.random() > 0.5 ? 'UP' : 'DOWN',
        confidence: (Math.random() * 40 + 60).toFixed(0)
      }))
      
      setReport(predictions)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="app">
      <h1>📈 Stock Predictor</h1>
      
      <p>Add up to 3 stock tickers for predictions</p>
      
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter ticker (e.g., AAPL)"
          onKeyPress={(e) => e.key === 'Enter' && addTicker()}
          disabled={tickers.length >= 3}
        />
        <button onClick={addTicker} disabled={tickers.length >= 3 || !input.trim()}>
          Add
        </button>
      </div>

      <div className="tickers">
        {tickers.map((ticker, index) => (
          <span key={index} className="ticker">
            {ticker}
            <button onClick={() => removeTicker(index)}>×</button>
          </span>
        ))}
      </div>

      <button 
        onClick={generateReport} 
        disabled={tickers.length === 0 || isGenerating}
        className="generate-btn"
      >
        {isGenerating ? 'Generating...' : 'Generate Report'}
      </button>

      {isGenerating && (
        <div className="loading">
          <p>🔮 Generating predictions...</p>
        </div>
      )}

      {report && (
        <div className="report">
          <h3>Predictions:</h3>
          {report.map((pred, index) => (
            <div key={index} className="prediction">
              <strong>{pred.symbol}</strong>: ${pred.price} 
              <span className={pred.prediction.toLowerCase()}>
                {pred.prediction === 'UP' ? ' 📈' : ' 📉'} {pred.prediction}
              </span>
              <span> ({pred.confidence}% confidence)</span>
            </div>
          ))}
          <p className="disclaimer">⚠️ This is fake data for demo purposes!</p>
        </div>
      )}
    </div>
  )
}

export default App