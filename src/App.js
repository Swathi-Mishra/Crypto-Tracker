import React, { useEffect } from 'react';
import { startPriceSimulation } from './utils/mockWebSocket';
import CryptoTable from './components/CryptoTable';

function App() {
  useEffect(() => {
    startPriceSimulation();
  }, []);

  return (
    <div className="App">
      <h1>📊 Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;