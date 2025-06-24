export default function Metrics({ assetCount, historyCount }) {
  return (
    <div className='grid md:grid-cols-3 gap-4 text-center mb-6'>
      <div className='bg-indigo-800 p-4 rounded shadow'>
        <p className='text-xl font-semibold'>{assetCount}</p>
        <p className='text-sm text-gray-300'>Top market cap cryptocurrencies</p>
      </div>
      <div className='bg-indigo-800 p-4 rounded shadow'>
        <p className='text-xl font-semibold'>{historyCount}</p>
        <p className='text-sm text-gray-300'>
          Historical data points collected
        </p>
      </div>
      <div className='bg-indigo-800 p-4 rounded shadow'>
        <p className='text-xl font-semibold'>30min</p>
        <p className='text-sm text-gray-300'>
          Automated synchronization interval
        </p>
      </div>
    </div>
  );
}
