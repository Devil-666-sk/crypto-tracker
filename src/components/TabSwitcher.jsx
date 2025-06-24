const TabSwitcher = ({ tab, setTab }) => (
  <div className='flex justify-center mb-4'>
    <button
      onClick={() => setTab('current')}
      className={`px-4 py-2 rounded-l ${
        tab === 'current' ? 'bg-blue-600' : 'bg-gray-700'
      }`}
    >
      📈 Current Prices
    </button>
    <button
      onClick={() => setTab('history')}
      className={`px-4 py-2 rounded-r ${
        tab === 'history' ? 'bg-blue-600' : 'bg-gray-700'
      }`}
    >
      📊 Price History
    </button>
  </div>
);

export default TabSwitcher;
