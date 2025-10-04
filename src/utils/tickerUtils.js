/**
 * Validates if a stock ticker is in the correct format
 * @param {string} ticker - The stock ticker to validate
 * @returns {boolean} - Whether the ticker is valid
 */
export const isValidTicker = (ticker) => {
  if (!ticker || typeof ticker !== 'string') return false;
  
  // Remove whitespace and convert to uppercase
  const cleanTicker = ticker.trim().toUpperCase();
  
  // Check if ticker is between 1-5 characters and contains only letters
  const tickerRegex = /^[A-Z]{1,5}$/;
  return tickerRegex.test(cleanTicker);
};

/**
 * Formats a ticker to standard format (uppercase, trimmed)
 * @param {string} ticker - The ticker to format
 * @returns {string} - The formatted ticker
 */
export const formatTicker = (ticker) => {
  if (!ticker || typeof ticker !== 'string') return '';
  return ticker.trim().toUpperCase();
};

/**
 * Checks if a ticker already exists in the list
 * @param {Array} tickers - Array of existing tickers
 * @param {string} newTicker - New ticker to check
 * @returns {boolean} - Whether the ticker already exists
 */
export const isDuplicateTicker = (tickers, newTicker) => {
  const formattedTicker = formatTicker(newTicker);
  return tickers.some(ticker => formatTicker(ticker) === formattedTicker);
};