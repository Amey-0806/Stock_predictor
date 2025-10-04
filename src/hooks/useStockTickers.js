import { useState } from 'react';

export const useStockTickers = (initialTickers = ['TSLA']) => {
  const [stockTickers, setStockTickers] = useState(initialTickers);

  const addStockTicker = (ticker) => {
    if (stockTickers.length < 3 && !stockTickers.includes(ticker)) {
      setStockTickers([...stockTickers, ticker]);
    }
  };

  const removeStockTicker = (index) => {
    setStockTickers(stockTickers.filter((_, i) => i !== index));
  };

  const clearAllTickers = () => {
    setStockTickers([]);
  };

  return {
    stockTickers,
    addStockTicker,
    removeStockTicker,
    clearAllTickers,
    maxReached: stockTickers.length >= 3,
    hasTickets: stockTickers.length > 0
  };
};