export const fetchCryptoData = async () => {
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&meta_info=VR6';
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error('Error fetching data:', err);
    return [];
  }
};
