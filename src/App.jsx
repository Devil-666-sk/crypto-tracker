import React, { useState, useEffect } from 'react';
import { fetchCryptoData } from './utils/api';
import Header from './components/Header';
import Metrics from './components/Metrics';
import TabSwitcher from './components/TabSwitcher';
import CurrentPrices from './components/CurrentPrices';
import PriceHistory from './components/PriceHistory';

function App() {
  const [tab, setTab] = useState('current');
  const [currentData, setCurrentData] = useState([]);
  const [priceHistory, setPriceHistory] = useState([]);
  const [lastSynced, setLastSynced] = useState('');

  const handleSync = async () => {
    const data = await fetchCryptoData();
    const now = new Date().toLocaleString();

    setCurrentData(data);
    setPriceHistory((prev) => [
      ...prev,
      ...data.map((coin) => ({
        ...coin,
        timestamp: now,
        internalRefCode: '',
      })),
    ]);
    setLastSynced(now);
  };

  useEffect(() => {
    handleSync();
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white font-sans'>
      <div className='max-w-6xl mx-auto px-4 py-6'>
        <Header onSync={handleSync} lastSynced={lastSynced} />
        <Metrics
          assetCount={15}
          historyCount={priceHistory.length}
          frequency='30min'
        />
        <TabSwitcher tab={tab} setTab={setTab} />
        {tab === 'current' ? (
          <CurrentPrices data={currentData} updatedAt={lastSynced} />
        ) : (
          <PriceHistory history={priceHistory} />
        )}
      </div>
    </div>
  );
}

export default App;
