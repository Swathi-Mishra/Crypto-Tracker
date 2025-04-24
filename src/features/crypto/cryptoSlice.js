// src/features/crypto/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';
import sampleData from '../../utils/sampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleData,
  },
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map(asset => {
        const newPrice = parseFloat((asset.price * (1 + Math.random() * 0.02 - 0.01)).toFixed(2));
        return {
          ...asset,
          price: newPrice,
          percentChange1h: parseFloat((Math.random() * 2 - 1).toFixed(2)),
          percentChange24h: parseFloat((Math.random() * 3 - 1.5).toFixed(2)),
          percentChange7d: parseFloat((Math.random() * 15 - 7.5).toFixed(2)),
          volume24h: Math.max(0, asset.volume24h + Math.floor(Math.random() * 1_000_000 - 500_000)),
          lastUpdated: new Date().toISOString()
        };
      });
    }
  }
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
