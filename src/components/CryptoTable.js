import React from 'react';
import { useSelector } from 'react-redux';
import CryptoRow from './CryptoRow';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto.assets);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Logo</th><th>Name</th><th>Symbol</th><th>Price</th><th>1h %</th>
            <th>24h %</th><th>7d %</th><th>Market Cap</th><th>Volume(24h)</th>
            <th>Circulating</th><th>Max Supply</th><th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map(asset => <CryptoRow key={asset.id} asset={asset} />)}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;