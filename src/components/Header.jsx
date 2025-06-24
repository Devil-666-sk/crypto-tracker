const Header = ({ onSync, lastSynced }) => (
  <div className='text-center mb-6'>
    <h1 className='text-4xl font-bold mb-2'>Crypto Tracker</h1>
    <p className='text-gray-300 mb-4'>Automated crypto market tracking</p>
    <div className='flex justify-center gap-4'>
      <button
        onClick={onSync}
        className='bg-blue-600 px-4 py-2 rounded hover:bg-blue-700'
      >
        🔄 Manual Sync
      </button>
      <span className='bg-gray-800 px-4 py-2 rounded text-green-400'>
        🕒 Last synced: {lastSynced}
      </span>
    </div>
  </div>
);

export default Header;
