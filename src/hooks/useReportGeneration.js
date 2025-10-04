import { useState } from 'react';

export const useReportGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReport = (stockTickers) => {
    if (stockTickers.length > 0 && !isGenerating) {
      setIsGenerating(true);
    }
  };

  const handleReportGenerated = () => {
    setIsGenerating(false);
  };

  return {
    isGenerating,
    generateReport,
    handleReportGenerated
  };
};