import './GenerateButton.css'

function GenerateButton({ tickers, onGenerateReport, isGenerating }) {
  const hasTickersToReport = tickers.length > 0

  return (
    <>
      <button 
        onClick={onGenerateReport} 
        className={`generate-button ${isGenerating ? 'generating' : ''}`}
        disabled={!hasTickersToReport || isGenerating}
      >
        {isGenerating ? (
          <>
            <span className="spinner"></span>
            GENERATING...
          </>
        ) : (
          'GENERATE REPORT'
        )}
      </button>
      <p className="accuracy-text">
        Always correct 15% of the time!
      </p>
    </>
  )
}

export default GenerateButton