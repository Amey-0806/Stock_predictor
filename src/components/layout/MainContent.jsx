import { StockInput, TickerList, ReportResult } from '../stock';
import { GenerateButton } from '../ui';
import './MainContent.css';

function MainContent({ 
  stockTickers, 
  onAddTicker, 
  onRemoveTicker, 
  onGenerateReport,
  isGenerating,
  onReportGenerated,
  maxReached,
  hasTickets
}) {

  return (
    <div className="main-content">
      <p className="instruction">
        Add up to 3 stock tickers below to<br />
        get a super accurate stock<br />
        predictions report 👍
      </p>

      <StockInput 
        onAddTicker={onAddTicker}
        maxReached={maxReached}
      />

      <TickerList 
        tickers={stockTickers}
        onRemoveTicker={onRemoveTicker}
      />

      <GenerateButton 
        tickers={stockTickers}
        onGenerateReport={onGenerateReport}
        isGenerating={isGenerating}
      />

      <ReportResult 
        tickers={stockTickers}
        isGenerating={isGenerating}
        onReportGenerated={onReportGenerated}
      />
    </div>
  )
}

export default MainContent