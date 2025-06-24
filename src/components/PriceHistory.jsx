const PriceHistory = ({ history }) => (
  <div className='bg-purple-800 p-4 rounded-lg shadow-md'>
    <h2 className='text-xl font-semibold mb-4'>Historical Price Records</h2>
    <table className='w-full text-sm'>
      <thead className='bg-purple-900'>
        <tr>
          <th>Timestamp</th>
          <th>Coin</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>24h %</th>
        </tr>
      </thead>
      <tbody>
        {history.map((coin, i) => (
          <tr
            key={i}
            className='border-b border-purple-700 hover:bg-purple-700'
          >
            <td>{coin.timestamp}</td>
            <td className='capitalize'>{coin.id}</td>
            <td>${coin.current_price.toLocaleString()}</td>
            <td>${(coin.market_cap / 1e9).toFixed(2)}B</td>
            <td
              className={
                coin.price_change_percentage_24h >= 0
                  ? 'text-green-400'
                  : 'text-red-400'
              }
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PriceHistory;
