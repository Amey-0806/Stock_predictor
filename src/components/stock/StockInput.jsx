import { useState } from 'react'
import './StockInput.css'

function StockInput({ onAddTicker, maxReached }) {
  const [stockTicker, setStockTicker] = useState('')

  const handleAddTicker = () => {
    if (stockTicker.trim() && !maxReached) {
      onAddTicker(stockTicker.toUpperCase())
      setStockTicker('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTicker()
    }
  }

  return (
    <div className="stock-input-container">
      <input
        type="text"
        value={stockTicker}
        onChange={(e) => setStockTicker(e.target.value)}
        placeholder="MSFT"
        className="stock-input"
        maxLength={5}
        onKeyPress={handleKeyPress}
        disabled={maxReached}
      />
      <button 
        onClick={handleAddTicker} 
        className="add-button"
        disabled={maxReached || !stockTicker.trim()}
      >
        +
      </button>
    </div>
  )
}

export default StockInput