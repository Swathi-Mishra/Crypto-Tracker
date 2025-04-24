// src/utils/mockWebSocket.js
import { store } from '../app/store'; // Correcting the import

import { updatePrices } from '../features/crypto/cryptoSlice';

export const startPriceSimulation = () => {
  setInterval(() => {
    store.dispatch(updatePrices());
  }, 1500);
};