const CurrentPrices = ({ data, updatedAt }) => (
  <div className='bg-purple-800 p-4 rounded-lg shadow-md'>
    <div className='flex items-center mb-4'>
      <h2 className='text-xl font-semibold flex-1'>
        Current Prices - Top 15 Cryptocurrencies
      </h2>
      <span className='text-sm text-gray-300'>Last updated: {updatedAt}</span>
    </div>
    <table className='w-full text-sm text-left'>
      <thead className='bg-purple-900'>
        <tr>
          <th>Coin</th>
          <th>Symbol</th>
          <th>Name</th>
          <th>Price (USD)</th>
          <th>Market Cap</th>
          <th>24h Change</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr
            key={coin.id}
            className='border-b border-purple-700 hover:bg-purple-700'
          >
            <td className='flex items-center gap-3 capitalize'>
              <img src={coin.image} alt={coin.name} className='w-12 h-12' />
              {coin.id}
            </td>
            <td>
              <span className='bg-purple-600 px-2 py-1 rounded text-xs'>
                {coin.symbol.toUpperCase()}
              </span>
            </td>
            <td>{coin.name}</td>
            <td className='font-bold'>
              ${coin.current_price.toLocaleString()}
            </td>
            <td>${(coin.market_cap / 1e9).toFixed(2)}B</td>
            <td
              className={`${
                coin.price_change_percentage_24h >= 0
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              {coin.price_change_percentage_24h >= 0 ? '📈' : '📉'}{' '}
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td>{new Date(coin.last_updated).toLocaleTimeString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CurrentPrices;
