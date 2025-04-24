import React from 'react';

const formatNumber = num => num?.toLocaleString();

const CryptoRow = ({ asset }) => {
  const {
    name, symbol, logo, price, percentChange1h, percentChange24h, percentChange7d,
    marketCap, volume24h, circulatingSupply, maxSupply
  } = asset;

  const formatPercent = (value) => (
    <span style={{ color: value >= 0 ? 'green' : 'red' }}>
      {value}%
    </span>
  );

  return (
    <tr>
      <td>{logo}</td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>${price}</td>
      <td>{formatPercent(percentChange1h)}</td>
      <td>{formatPercent(percentChange24h)}</td>
      <td>{formatPercent(percentChange7d)}</td>
      <td>${formatNumber(marketCap)}</td>
      <td>${formatNumber(volume24h)}</td>
      <td>{formatNumber(circulatingSupply)}</td>
      <td>{maxSupply ?? '∞'}</td>
      <td><img src="/chart.svg" alt="7D Chart" height={30} /></td>
    </tr>
  );
};

export default CryptoRow;