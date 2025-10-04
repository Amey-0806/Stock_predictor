import './TickerList.css'

function TickerList({ tickers, onRemoveTicker }) {
  if (tickers.length === 0) {
    return null
  }

  return (
    <div className="tickers-display">
      {tickers.map((ticker, index) => (
        <div key={index} className="ticker-item">
          <span>{ticker}</span>
          <button 
            onClick={() => onRemoveTicker(index)}
            className="remove-ticker"
            title={`Remove ${ticker}`}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )
}

export default TickerList