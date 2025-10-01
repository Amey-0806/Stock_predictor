document.addEventListener('DOMContentLoaded', () => {
    const tickerInput = document.getElementById('tickerInput');
    const addTickerBtn = document.getElementById('addTickerBtn');
    const tickerListDiv = document.getElementById('tickerList');
    const generateReportBtn = document.getElementById('generateReportBtn');
    const reportOutput = document.getElementById('reportOutput');
    let tickers = [];
    const MAX_TICKERS = 3;
    const LOADING_TIME_MS = 2000; // 2 seconds delay for the loading screen

    // Initially disable the generate button
    generateReportBtn.disabled = true;

    // --- Helper function to update the DOM and button state ---
    const updateTickerDisplay = () => {
        tickerListDiv.innerHTML = '';
        tickers.forEach(ticker => {
            const tickerTag = document.createElement('span');
            tickerTag.className = 'ticker-tag';
            tickerTag.textContent = ticker;

            tickerTag.addEventListener('click', () => {
                tickers = tickers.filter(t => t !== ticker);
                updateTickerDisplay();
            });

            tickerListDiv.appendChild(tickerTag);
        });

        addTickerBtn.disabled = tickers.length >= MAX_TICKERS;
        generateReportBtn.disabled = tickers.length === 0;
        tickerInput.value = '';
    };

    // --- Function to add a ticker ---
    const addTicker = () => {
        const newTicker = tickerInput.value.trim().toUpperCase();

        if (newTicker && newTicker.length <= 5 && !tickers.includes(newTicker) && tickers.length < MAX_TICKERS) {
            tickers.push(newTicker);
            updateTickerDisplay();
        } else if (tickers.includes(newTicker)) {
            alert(`Ticker '${newTicker}' is already added.`);
        } else if (tickers.length >= MAX_TICKERS) {
            alert(`You can only add up to ${MAX_TICKERS} tickers.`);
        }
    };

    // ----------------------------------------------------------------
    // --- YOUR REPORT GENERATION FUNCTION (Placeholder) ---
    // You will replace the body of this function with your actual logic.
    // This function receives the array of ticker symbols.
    // ----------------------------------------------------------------
    const generateActualReport = (tickerSymbols) => {
        console.log("Starting actual report generation for:", tickerSymbols);

        let placeholderHTML = `
            <h3>GENERATED REPORT (Placeholder)</h3>
            <p>Report requested for the following tickers:</p>
            <ul>
        `;
        tickerSymbols.forEach(ticker => {
            placeholderHTML += `<li><strong>${ticker}</strong></li>`;
        });
        placeholderHTML += ;

        reportOutput.innerHTML = placeholderHTML;

        // Re-enable the button after the report is displayed
        generateReportBtn.disabled = false;
    };
    // ----------------------------------------------------------------


    // --- Main Event Listener for Report Generation (Loading Logic) ---
    generateReportBtn.addEventListener('click', () => {
        if (tickers.length === 0) {
            reportOutput.innerHTML = '<p style="color: red;">Please add at least one stock ticker.</p>';
            return;
        }

        // 1. Show Loading Screen
        reportOutput.innerHTML = `
            <div class="loading-screen">
                <div class="spinner"></div>
                Generating Dodgy Dave's Super Accurate Prediction...
            </div>
        `;
        // Disable the button during loading
        generateReportBtn.disabled = true;

        // 2. Set a timeout for the fake loading delay
        setTimeout(() => {
            // 3. Call your dedicated function to generate the final content
            generateActualReport(tickers);
        }, LOADING_TIME_MS);
    });

    // --- Initial setup ---
    addTickerBtn.addEventListener('click', addTicker);

    tickerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTicker();
        }
    });

    updateTickerDisplay();
});